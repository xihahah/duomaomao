class SmallObj extends eui.Component{
	//所在的房间号
	roomNum;
	//状态
	state;
	//显示视图
	_displayView;
	//父对象
	_main;
	isUse:boolean = false;
	//类型
	type;
	//检测碰撞对象
	hitObj;
	public constructor(main) {
		super();
		this.anchorOffsetX = 0;
		this.anchorOffsetY = 0;
		this._main = main;
		this._displayView = new eui.Image();
		this.type = playType.box;
		this.addChild(this._displayView);
	}
	//设置显示的贴图
	setView(sc){
		//素材
		this._displayView.source = sc;
		this.width = sc.textureWidth;
		this.height = sc.textureHeight;
	}

	// 添加滤镜
	addfilter(){
		//增加亮度
		let colorMatrix = [
			1,0,0,0,100,
			0,1,0,0,100,
			0,0,1,0,100,
			0,0,0,1,0
		];
		let colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
		this.filters = [colorFlilter];
		// this.addEventListener(egret.Event.ENTER_FRAME,this.checkHit,this);
	}
	//检查与player是否碰撞
	checkHit(){
		let parent:any = this.parent;
		if(parent){
			//如果两者不碰撞了
			if(!parent.hitTest(this.hitObj,this)){
				this.removefilter();
				this.hitObj = null;
				this.removeEventListener(egret.Event.ENTER_FRAME,this.checkHit,this);
			};
		}
	}
	//删除滤镜
	removefilter(){
		this.filters = null;
	}
	checkFall(){
		this.addEventListener(egret.Event.ENTER_FRAME,this.fall,this);
		this.dispatchEvent(new egret.Event("soFall"));
	}
	//下落
	fall(){
		let parent:any = this.parent;
		if(parent){
			//如果碰撞了
			if(parent.boxTest(this).length>0){
				this.removeEventListener(egret.Event.ENTER_FRAME,this.fall,this);
			}else{
				this.y += 5;
			};
			
		}
	}
}