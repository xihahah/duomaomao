class Player extends eui.Component{
	//跳跃高度
	jumpSpeed;
	//水平速度
	speedX:number; 
	//竖直速度（下落速度）
	speedY:number; 
	// 方向 左-1 右 1
	dir = -1;
	//所在的房间号
	roomNum:number;
	//所在的物体
	// boxNum:Number;
	// nowBox;
	//是否处于跳跃中  防止二级跳
	isJump:Boolean;
	//是否可以下落
	canFall:Boolean;
	//角色类型
	type;
	//角色动画
	mc;
	//扮演的物品贴图
	ptexture;
	//扮演的物品
	playObj;
	//碰撞的物体
	hitBox;
	//碰撞的物体的索引
	hitBoxIndex;
	// 携带的物体
	carryObj;
	//是否被发现 主要是mouse
	die:boolean;
	//自身得分
	score;
	//分值
	value;
	public constructor() {
		super();
		this.mc = new egret.MovieClip();
		this.addChild(this.mc);
	}

	//初始向左
	init(){
		// 		let data = RES.getRes("cat_mc_json");
		//      	let txtr = RES.getRes("cat_tex_png");
        let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("cat_mc_json"), RES.getRes("cat_tex_png"));
		this.mc.setMovieClipData(mcFactory.generateMovieClipData( "猫猫动画" ));
		this.width = this.mc.width;
		this.height = this.mc.height;
		this.anchorOffsetX = 0;
		this.anchorOffsetY = 0;
		this.jumpSpeed = GameData.gameconfig.pjumpspeed;
		this.speedX = GameData.gameconfig.pspeedx;
		this.speedY = GameData.gameconfig.pspeeedy;
		this.scaleX = 1;
		this.canFall = true;
		//不处于跳跃状态
		this.isJump = false;
		//分数
		this.score = 0;
		this.value = 100;
	}
	
	//角色转向时翻转
	scale(){
		this.scaleX = (this.dir>0?-1:1);
	}

	//播放动画
	playMC(){
		if(!this.mc.isPlaying){
			this.mc.gotoAndPlay(0,-1);
		}
	}

	//player左右移动
	moveX(){
		//保证player一直在地图内
		if(this.parent && (this.x>this.parent.x - this.speedX * this.dir) && (this.x < this.parent.width- this.speedX * this.dir))
			this.x += this.speedX * this.dir;
	}

	jump(){
		//如果不是处于跳起状态  禁止二级跳
		if(!this.isJump){ 
			//处于跳跃状态
			this.isJump = true;

			egret.Tween.get(this).to({
				y:this.y - this.jumpSpeed
			},500,egret.Ease.quartOut).call(()=>{
				this.canFall = true;
				this.addEventListener(egret.Event.ENTER_FRAME,this.fall,this);
			})
		}
	}

	fall(){
		if(this.parent){
			let nowRoom = this.parent.getChildAt(this.roomNum);
			//不变的
			let plane = nowRoom.y + nowRoom.height;
			if(this.canFall && this.y < plane)
				this.y += this.speedY;	
		}
			
	}

	//开始移动
	startMove(){
		if(this.type == playType.cat)
			this.scale();
		this.playMC();
		this.addEventListener(egret.Event.ENTER_FRAME,this.moveX,this);
	}

	//停止移动
	stopMoveX(){
		this.mc.gotoAndStop(0);
		this.removeEventListener(egret.Event.ENTER_FRAME,this.moveX,this);
	}
	//变身
	chage(){
		//把原形藏起来
		this.removeChild(this.mc);
		this.playObj = new eui.Image(this.ptexture);
		this.playObj.width = this.ptexture.textureWidth;
		this.playObj.height = this.ptexture.textureHeight;
		this.width = this.playObj.width
		this.height = this.playObj.height;
		this.y -= this.mc.height/2;
		this.die = false;
		this.addChild(this.playObj);
	}
	//变回原形  被打中了
	back(){
		// console.log("变回原形");
		this.removeChild(this.playObj);
		this.width = this.mc.width;
		this.height = this.mc.height;
		this.addChild(this.mc);
		this.die = true;
		this.score = 0;
		let p:any = this.parent.parent;
		if(p)
			p.playerCollection.itemUpdated(this);
			
		egret.setTimeout(()=>{
			this.parent.removeChild(this);
		},this,1000)
		
	}

	setHitobj(obj,index){
		if(this.hitBox != null) return;
		this.hitBox = obj;
		this.hitBoxIndex = index;
		this.hitBox.addfilter();
		this.addEventListener(egret.Event.ENTER_FRAME,this.checkHit,this);
	}
	checkHit(){
		let parent:any = this.parent;
		if(parent){
			//如果两者不碰撞了
			if(!parent.hitTest(this,this.hitBox)){
				this.hitBox.removefilter();
				this.hitBox = null;
				this.removeEventListener(egret.Event.ENTER_FRAME,this.checkHit,this);
			};
		}
	}
	//携带
	takeup(){
		let parent:any = this.parent;
		//如果没携带东西  则拿起来
		if(this.carryObj == null){
			if(this.hitBox == null) return;
			this.carryObj = this.hitBox;
			//在原来储存的数组中删掉该物品信息
			parent.roomBox[parent.player.roomNum-1].splice(this.hitBoxIndex,1);
			this.addEventListener(egret.Event.ENTER_FRAME,this.carryMove,this);
		}else{
			//携带了东西  就放下
			this.removeEventListener(egret.Event.ENTER_FRAME,this.carryMove,this);
			//在新房间中添加物品信息
			this.carryObj.roomNum = parent.player.roomNum;
			parent.roomBox[this.carryObj.roomNum-1].push(this.carryObj);
			//修正物体位置
			this.carryObj.checkFall();
			this.carryObj = null;
		}
		
	}
	//放下
	putoff(){
		this.carryObj = null;
		this.removeEventListener(egret.Event.ENTER_FRAME,this.carryMove,this);
	}
	carryMove(){
		this.carryObj.x = this.x;
		this.carryObj.y = this.y - this.carryObj.height;
	}

}