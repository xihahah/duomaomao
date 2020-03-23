class gameScene extends eui.Component implements  eui.UIComponent {
	//场景
	private scene;
	//摄像机
	private camera:Camera;
	//控制按钮面板
	private controlGroup;
	private leftBtn:eui.Button;
	private rightBtn:eui.Button;
	private upBtn:eui.Button;
	private attackBtn:eui.Button;
	private carryBtn:eui.Button;
	private timer:Timer;
	private rwTip:renwu;
	private mpTip:miniPlayer;
	private scoreTip:Score;
	//游戏开始时的提示信息
	private tip:Tip;
	//游戏是否结束
	gameOver:boolean;
	//胜利的队伍
	winner;
	//贴纸信息集合
	stickerCollection:eui.ArrayCollection;
	//玩家信息集合
	playerCollection:eui.ArrayCollection;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	//生成房间数据   房主用
	createGame(){
		//地图信息
		gamedata['scene'] = 1;
		//创建场景  不创建的话拿不到地图数据
		this.createGS();
		//存放物品信息
		let sbox = [];
		//存放player信息
		let person = [];
		//存放贴纸信息
		let sticker = [];
		
		//player位置
			//player数量
		let pNum = GameData.gameconfig.pNum;
		//抽取一个当cat
		let c = this.scene.random(0,pNum-1);
		for(let i =0;i<pNum;i++){
			let pl = new Object();
			let p = this.scene.random_position();
			//初始化位置
			pl['roomNum'] = p.nr;
			pl['x'] = p.x; 
			pl['y'] = p.y; 
			//设置mouse 或cat 
			if(i != c){
				pl['type'] = playType.mouse;
				pl['playObj'] = this.scene.random_texture();
			}else{
				pl['type'] = playType.cat;
			}
			
			person.push(pl);
		}
		gamedata["person"] = person;

		//生成房间物体信息  保证每个房间都有一些
		for(let i=0;i<this.scene.rooms;i++){
			//如果该房间有贴图信息 则生成一个贴纸（楼梯不要）
			if(this.scene.textureArr[i+1].length>0){
				//贴纸信息
				let sti = new Object();
				//贴纸信息
				let t = this.scene.random(0,this.scene.textureArr[i+1].length-1);
				//贴图编号
				sti['texture'] = {a:i+1,b:t};
				//位置信息
				sti['roomNum'] = i+1;
				let p = this.scene.random_roomposition(sti['roomNum']);
				sti['x'] = p.x; 
				sti['y'] = p.y; 
				sticker.push(sti);

				//贴纸对应的物体信息
				let obj1 = new Object();
				obj1['texture'] = sti['texture'];
				let p1 = this.scene.random_roomposition();
				//不给他们在同一个房间
				while(p1.nr == i+1){
					p1 = this.scene.random_roomposition();
				}
				obj1['roomNum'] = p1.nr;
				obj1['x'] = p1.x;
				obj1['y'] = p1.y;
				sbox.push(obj1);
			}
			

			let bnum = this.scene.random(4,12);
			for(let n = 0;n<bnum;n++){
				//创建一个空对象
				let obj = new Object();
				//贴图编号
				obj['texture'] = this.scene.random_texture();

				//随机计算位置
				//第0个是背景图
				obj['roomNum'] = i+1;
				let p = this.scene.random_roomposition(obj['roomNum']);
				obj['x'] = p.x;
				obj['y'] = p.y;

				//把生成的物品信息存入数组中
				sbox.push(obj);
			}
			
		}
		// 这个是全部随便生成的
		// for(let i=0;i<GameData.gameconfig.npc;i++){
		// 	//创建一个空对象
		// 	let obj = new Object();
		// 	//贴图编号
		// 	obj['texture'] = this.scene.random_texture();

		// 	//随机计算位置
		// 	//第0个是背景图
		// 	obj['roomNum'] = this.scene.random_roomnum();
		// 	let nowRoom:any = this.scene.getChildAt(obj['roomNum']);
		// 	let nowBox = nowRoom.getChildAt(this.scene.random(0,nowRoom.numChildren-1));
		// 	obj['x'] = this.scene.random(nowRoom.x + nowBox.x,nowRoom.x + nowBox.x + nowBox.width);
		// 	obj['y'] = nowRoom.y + nowBox.y;

		// 	//把生成的物品信息存入数组中
		// 	sbox.push(obj);
		// }
		gamedata['sticker'] = sticker;
		gamedata['sbox'] = sbox;

		// console.log(gamedata);
	}

	//创建场景  房间其他玩家用
	createGS(){
		switch(gamedata['scene']){
			case 1:{
				this.scene = new scene1(this);
				break;
			}
		}
		this.addChild(this.scene);
	}

	//初始化
	init(){
		//建立贴纸集合实例
		this.stickerCollection = new eui.ArrayCollection([]);
		
		//建立player集合实例
		this.playerCollection = new eui.ArrayCollection([]);

		//初始化场景
		this.scene.init();
		
		//添加摄像机
		this.camera = new Camera(GameData.stageWidth,GameData.stageHeight);
		this.camera.init(this.scene);
		this.camera.follow(this.scene.player);
		//还是不能用
		// this.camera.setZoom(1);
		this.addChild(this.camera);


		//把按钮面板放在最顶层
		this.setChildIndex(this.controlGroup,999);

		//把辅助图形都隐藏起来
		this.roomHide();

		//让player落到地面上
		// this.jumpFrame();

		//添加事件侦听器
		this.initEvent();

		this.gameOver = false;

		//开启计时器
		this.timer._main = this;
		this.timer.startTimer(60*2);

		//检查任务进度
		this.rwTip.init(this.scene);
		this.mpTip.init(this.scene);

		this.tip = new Tip(this);
		this.tip.show();
		this.addChild(this.tip);

		// let re = new Result(this);
		// re.showResult();

		this.stickerCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE,this.handlesticker,this);
		this.playerCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE,this.handleplayer,this);
	}

	//添加事件侦听器
	initEvent(){
		//给按钮添加监听事件
		this.leftBtn.addEventListener("touchBegin",this.handleLeft,this);
		this.leftBtn.addEventListener("touchReleaseOutside",this.handleMoveEnd,this);
		this.leftBtn.addEventListener("touchEnd",this.handleMoveEnd,this);

		this.rightBtn.addEventListener("touchBegin",this.handleRight,this);
		this.rightBtn.addEventListener("touchReleaseOutside",this.handleMoveEnd,this);
		this.rightBtn.addEventListener("touchEnd",this.handleMoveEnd,this);	

		this.upBtn.addEventListener("touchBegin",this.handleUp,this);

		this.attackBtn.addEventListener("touchBegin",this.handleAttack,this);

		this.carryBtn.addEventListener("touchBegin",this.handleCarry,this);

		//键盘控制
		document.addEventListener("keydown",e=>this.handleKeydown(e),false);
		document.addEventListener("keyup",e=>this.handleKeyup(e),false);

	}
	
	//帧事件   左右移动
	moveFrame(){
		//判断player在哪个房间
		this.scene.checkRoom(this.scene.player);

		//当player左右移动时  判断物体是否碰撞 不碰撞就掉落在地上
		let testResult = this.scene.boxTest(this.scene.player);
			
		// console.log(testResult);
		//如果player不碰撞
		if(testResult.length <= 0){ 
			this.scene.player.canFall = true;
			this.jumpFrame();
		};
		this.checkHit();
	}

	//判断能否下落
	jumpFrame(){
		this.checkHit();
		// this.addEventListener(egret.Event.ENTER_FRAME,this.scene.player.fall,this);
		//player状态为 true  可以下落
		if(this.scene.player.canFall){
			this.camera.cameraFall();
			//碰撞  不能再下落了
			let result;
			//碰撞检测
			result = this.scene.boxTest(this.scene.player);
			
			if(result.length > 0){
				//把状态改为false 不允许下落
				this.scene.player.canFall = false;
				//碰撞 表示跳跃结束  不在跳跃状态中
				this.scene.player.isJump = false;

				//相机y修正
				this.camera.cameraUp();
				//如果到了新的楼层
				for(let i=0;i<result.length;i++){
					if(result[i].name && result[i].name == GameData.fixedType.nfloor){
						// console.log("new floor");
						egret.Tween.get(this.scene).to({
								y: this.camera.height - result[i].y - result[i].height
						},500)
					}
						
				}
			}
		} 
	}

	checkHit(){
		//判断player与房间中的物品是否碰撞
		let checkBox = this.scene.roomBox[this.scene.player.roomNum-1];
		for(let i =0;i<checkBox.length;i++){
			let isHit = this.scene.hitTest(this.scene.player,checkBox[i]);
			if(isHit && checkBox[i].type == playType.box){
				//碰撞了
				this.scene.player.setHitobj(checkBox[i],i);
			}
		}
	}

	//攻击 触发的frame
	attackFrame(){
		//房间中的物品
		let checkBox = this.scene.roomBox[this.scene.player.roomNum-1];
		for(let n = 0;n<this.scene._bullet.length;n++){
			//找出在使用的子弹
			if(this.scene._bullet[n].isUse){
				//判断发射子弹的对象角色
				if(this.scene._bullet[n].btype == playType.cat){
					for(let i =0;i<checkBox.length;i++){
						let isHit = this.scene.intersectTest(this.scene._bullet[n],checkBox[i]);
						if(isHit){
							//打的是普通物品
							if(checkBox[i].type == playType.box){
								console.log("打错无辜的东西了！");
								//回收子弹
								this.scene._bullet[n].recycle();
								this.scene.player.score -= 50;
								this.scoreTip.addScoreTip(-50);
								// //回收物品
								// checkBox[i].recycle();
								// //在数组中删除物品信息
								// checkBox.splice(i,1);
							}else if(checkBox[i].type == playType.mouse){
								//打的是躲藏着
								console.log("打中了！");
								//cat加分
								this.scene.player.score += checkBox[i].score;
								this.scene.player.score += checkBox[i].value;
								// 加分提示有问题 先不要
								this.scoreTip.addScoreTip(checkBox[i].score + checkBox[i].value);
								//回收子弹
								this.scene._bullet[n].recycle();
								checkBox[i].back();
								//在数组中删除物品信息
								checkBox.splice(i,1);
							}
							//更新提示
							this.playerCollection.itemUpdated(this.scene.player);
						}
					}
				}
				
			}
		}
		
	}


	//把房间里面加的用来碰撞检测的矩形都隐藏起来
	roomHide(){
		for (let i=0; i<this.scene.numChildren; i++){
			let child = this.scene.getChildAt(i);
			if(child.name == GameData.fixedType.room){
				//占位但是不显示出来
				child.visible = false;
			}
		}
		
	}
	//检查游戏结果
	checkGameOver(){
		//检查任务有没有完成
		if(!this.gameOver){
			this.gameOver = this.stickerCollection.source.every((value)=>{
			return value.finish == true
			});

			//如果游戏结束  胜利队伍为mouse
			if(this.gameOver)
			this.winner = playType.mouse;
		}
		
		//检查mouse有没有全都被发现
		if(!this.gameOver){
			let r = true;
			for(let i = 0;i< this.playerCollection.source.length;i++){
				if(this.playerCollection.source[i].type == playType.mouse){
					if(this.playerCollection.source[i].die == false){
						r = false;
					}
				}
			}
			this.gameOver = r;

			//如果游戏结束  胜利队伍为cat
			if(this.gameOver)
			this.winner = playType.cat;
		}

		if(this.gameOver){
			//停止计时
			this.timer.onComplete();
			//判断当前player是否胜利
			new Result(this).showResult(this.winner == this.scene.player.type);
		}
	}
	//监听sticker数据变化
	handlesticker(evt:eui.CollectionEvent){
		//  console.log("数据已改变:"+evt.kind);
		this.scoreTip.setScore(this.scene.player.score);
		//让任务列表检查更新
		this.rwTip.showResult(evt.target.source);
		this.checkGameOver();
	}
	//监听player数据变化
	handleplayer(evt:eui.CollectionEvent){
		//  console.log("数据已改变:"+evt.kind);
		let sc = [];
		for(let i in this.playerCollection.source){
			sc.push(this.playerCollection.source[i].score);
		}
		console.log(sc);
		 this.mpTip.showResult(evt.target.source);
		 this.scoreTip.setScore(this.scene.player.score);
		 this.checkGameOver()
	}
	/*定义界面中按钮事件 */
	//按下向左按钮
	handleLeft(){
		this.addEventListener(egret.Event.ENTER_FRAME,this.moveFrame,this);
		this.scene.player.dir = -1;
		this.scene.player.startMove();
		//相机更新
		this.camera.cameraMove();
	}

	//按下向右按钮
	handleRight(){
		this.addEventListener(egret.Event.ENTER_FRAME,this.moveFrame,this);
		this.scene.player.dir = 1;
		this.scene.player.startMove();
		//相机更新
		this.camera.cameraMove();
	}
	//释放按钮
	handleMoveEnd(){
		this.removeEventListener(egret.Event.ENTER_FRAME,this.moveFrame,this);
		this.scene.player.stopMoveX();
		//相机停止更新
		this.camera.cStopMove();
	}
	
	//跳跃
	handleUp(){
		this.addEventListener(egret.Event.ENTER_FRAME,this.jumpFrame,this);
		this.scene.player.jump();
		// egret.Tween.removeTweens(this.scene.player);
	}
	//攻击   
	handleAttack(){
		let b = this.scene.getBullet();
		if(b == undefined){
			console.log("没得子弹咯");
			return;
		}
		b.use(this.scene.player.type,this.scene.player.x,this.scene.player.y + 20,this.scene.player.scaleX);
		this.addEventListener(egret.Event.ENTER_FRAME,this.attackFrame,this);
	}
	//拿起
	handleCarry(){
		this.scene.player.takeup();
	}
	
	/*按钮事件结束 */


	/*键盘事件*/

	handleKeydown(e){
		// console.log(e.keyCode);
		switch(e.keyCode){
			case 65:{//A
				this.handleLeft()
				break;
			}
			case 68:{//D
				this.handleRight()
				break;
			}
			case 87:{//W
				this.handleUp();
				break;
			}
			case 75:{//K
				this.handleAttack();
				break;
			}
			case 49:;
			case 50:;
			case 51:;
			case 52:{
				//左边1234键
				//用来测试的时候切换角色  先不切视角了  懒得
				this.scene.setplayer(e.keyCode-49);
				//切换分数
		 		this.scoreTip.setScore(this.scene.player.score);
				 //切换摄像机跟随
				this.camera.follow(this.scene.player);
			}
			// default:console.log(e.keyCode)
		}
	}

	handleKeyup(e){
		if(e.keyCode == 65 || e.keyCode == 68)
			this.handleMoveEnd();
	}
	/*键盘事件结束*/ 


	
	
}