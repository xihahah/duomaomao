class Controler extends eui.Component implements  eui.UIComponent {
	outside;   //外圆
	inside;	   //内圆
	private outsideRadius:number = 0; //圆环半径
	private insideRadius:number = 0;   //小球半径
	private centerX:number = 0;      //中心点坐标
	private centerY:number = 0;
	private touchID:number;          //触摸ID
	
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
		//获取圆环和小球半径
		this.outsideRadius = this.outside.height/2; 
		this.insideRadius = this.inside.height/2;

		//获取中心点
		this.centerX = this.outsideRadius - this.insideRadius;
		this.centerY = this.outsideRadius - this.insideRadius;

		//设置锚点
		this.anchorOffsetX = this.outsideRadius;
		this.anchorOffsetY = this.outsideRadius;
		//设置锚点后位置会偏移   手动修正
		this.x += this.anchorOffsetX;
		this.y += this.anchorOffsetY;

		//设置小球初始位置
		this.inside.x = this.centerX;
		this.inside.y = this.centerY;

		this.outside.addEventListener("touchBegin",this.onTouchBegin,this);
		this.outside.addEventListener("touchMove", this.onTouchMove, this);
		this.outside.addEventListener("touchEnd", this.onTouchEnd, this);
		this.outside.addEventListener("touchReleaseOutside", this.onTouchEnd, this);
	}
	
	//触摸开始
	private onTouchBegin(e:egret.TouchEvent){
		this.touchID = e.touchPointID;
		this.inside.currentState = "down";
		this.dispatchEvent(new egret.Event("cb_start"));
	}

	//触摸结束
	private onTouchEnd(e:egret.TouchEvent){
		if(this.touchID != e.touchPointID){
			return;
		}
		this.inside.x = this.centerX;
		this.inside.y = this.centerY;
		this.inside.currentState = "up";
		this.dispatchEvent(new egret.Event("cb_end"));
	}

	//触摸移动，设置小球的位置
	private p1:egret.Point = new egret.Point();
	private p2:egret.Point = new egret.Point();
	angle:number = 0;
	private onTouchMove(e:egret.TouchEvent){
		// console.log(e);
		if(this.touchID != e.touchPointID){
			return;
		}
		//获取手指和虚拟摇杆的距离
		this.p1.x = this.x;
		this.p1.y = this.y;
		this.p2.x = e.stageX;
		this.p2.y = e.stageY;
		var dist = egret.Point.distance(this.p1, this.p2);
		this.angle = Math.atan2(e.stageY - this.y, e.stageX - this.x);
		// console.log(this.x + " " +this.y);
		
		//手指距离在圆环范围内
		if(dist <= (this.outsideRadius - this.insideRadius)){
			this.inside.x = this.centerX + e.stageX - this.x;
			this.inside.y = this.centerY + e.stageY - this.y;
		}else{
		//手指距离在圆环范围外
			this.inside.x = this.centerX - Math.cos(this.angle)*(this.insideRadius - this.outsideRadius);
			this.inside.y = this.centerY - Math.sin(this.angle)*(this.insideRadius - this.outsideRadius);
		}
		this.dispatchEvent(new egret.Event("cb_move"));
	}
	
}