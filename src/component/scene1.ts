//地图1
class scene1 extends Scene implements  eui.UIComponent {
	//获取配置的数据
	gamedata = GameData.gameconfig;
	//设置贴图信息
	_sTexture = {
		1:"s1l1_json",
		2:null,
		3:"s1r1_json",
		4:"s1l2_json",
		5:"s1r2_json"
	}
	_main;

	public constructor(main) {
		super();
		this._main = main;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		//获取好场景数据
		//获取房间数
		this.rooms = this.findRoom();
		
		//根据房间数  开辟几个空的位置  用来存每个房间的物品
		for(let i =0;i<this.rooms;i++){
			this.roomBox[i] = [];
		}
		
		//读取素材  存到数组里 
		this.getTexture();
		
		//初始化对象池
		this.initPool();


	}
	
	//根据数据生成场景  要在生成数据后
	init(){
		//创建物品
		this.createNPC(gamedata['sbox']);
		//创建贴纸
		this.createSticker();
		//创建玩家
		this.createPlayer();
	}

	//读取图片素材
	getTexture(){
		for(let s in this._sTexture){
		// console.log(s);
			this.textureArr[s] = [];
			if(this._sTexture[s] != null){
				let a = RES.getRes(this._sTexture[s])._textureMap;
				//object  用dom方式储存
				for(let i in a){
					this.textureArr[s].push(a[i]);
				}
			}
		}
	}

	//创建一定数量的物品
	createNPC(sboxArr){
		for(let i=0;i<sboxArr.length;i++){
			let b = sboxArr[i];

			//拿到一个创建好的物体对象
			let obj = new SmallObj(this);;

			//传入贴图
			obj.setView(this.textureArr[b['texture'] ['a']] [b['texture'] ['b']]);

			//随机计算位置
			//第0个是背景图
			obj.roomNum = b['roomNum'];
			obj.x = b['x'] - obj.width;
			obj.y = b['y'] - obj.height;

			//把物品存入相应房间的数组中
			this.roomBox[obj.roomNum-1].push(obj);
			
			// 在场景中添加物体
			this.addChild(obj);
		}
	}
	//创建玩家
	createPlayer(){
		//根据游戏数据生成角色
		let per = gamedata["person"];

		for(let i =0;i<per.length;i++){
			let pl  = new Player();
			pl.init();
			//初始化位置
			pl.roomNum = per[i].roomNum;
			pl.x = per[i].x; 
			pl.y = per[i].y; 
			pl.type = per[i].type;
			
			//设置mouse
			if(pl.type != playType.cat){
				pl.ptexture = this.textureArr[per[i].playObj.a] [per[i].playObj.a];
				// console.log(pl.ptexture);
				pl.chage();
				this.roomBox[pl.roomNum -1].push(pl)
			}

			this._main.playerCollection.addItem(pl);
			this.addChild(pl);
			console.log(pl.roomNum);
		}
		//设置player
		this.player = this._main.playerCollection.getItemAt(0);
	}
	//用来测试
	setplayer(i){
		this.player = this._main.playerCollection.getItemAt(i);
	}
	
	
	//初始化对象池
	//经常要销毁的东西用对象池来
	initPool(){
		//子弹
		for(let i=0;i<this.gamedata.bNum;i++){
			let bullet = new Bullet(this);
			this._bullet.push(bullet);
		}
	}
	//从对象池获取一个bullet
	getBullet(){
		for(let i=0;i<this._bullet.length;i++){
			if(this._bullet[i].isUse == false){
				return this._bullet[i];
			}
		}
		console.log("子弹已经用光");
	}
	
	
	//获取场景中的房间数
	findRoom(){
		let n = 0;
		for (let i=0; i<this.numChildren; i++){
			if(this.getChildAt(i).name == GameData.fixedType.room)
				n ++;
		}
		return n;
	}

	//创建贴纸
	createSticker(){
		let sti = gamedata['sticker'];
		let parent:any = this.parent;
		for(let n=0;n<sti.length;n++){
			let stick = new Sticker(this);
			let t = sti[n].texture;
			stick.addMask(this.textureArr[t ['a']] [t ['b']]);
			stick.x = sti[n].x - stick.width;
			stick.y = sti[n].y - stick.height;
			stick.roomNum = sti[n].roomNum;
			this.addChild(stick);
			//初始化父对象中的数据
			if(parent){
				parent.stickerCollection.addItem(stick);
			}
		}
	}
}