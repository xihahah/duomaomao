//子弹
class Bullet extends eui.Component{
	endX;
	//贴图
	_bulletImg;
	//是否使用
	isUse:boolean = false;
	//
	_main;
	_speed;
	//发射的对象类型
	btype;
	public constructor(main) {
		super();
		this.width = GameData.gameconfig.bwidth;
		this.height = GameData.gameconfig.bheight;
		this._main = main;
		this._bulletImg = new eui.Image();
		this._bulletImg.width = this.width;
		this._bulletImg.height = this.height;
		this.addChild(this._bulletImg);		
	}
	frame(){
		//如果子弹被使用
		if(this.isUse){
			//发射的对象为 cat
			if(this.btype == playType.cat){
				this.x += this._speed;
				//运动完了
				if(this.x == this.endX){
					this.recycle();
				}
			}
		}
	}

	//使用 dir 左1 右-1
	use(type,x,y,dir){
		// console.log("使用子弹");
		this.isUse = true;
		this.x = x - 30*dir;
		this.y = y;
		this.btype = type;
		this._speed = - 15*dir;
		//目标距离
		this.endX = this.x + this._speed*20;
		if(type == playType.cat){
			this._bulletImg.source = "attackTextrue";
		}
		this._main.addChild(this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.frame,this);
	}

	//回收
	recycle(){
		// console.log("回收子弹");
		this.isUse = false;
		this._main.removeChild(this);
		this.removeEventListener(egret.Event.ENTER_FRAME,this.frame,this);
	}
	
}