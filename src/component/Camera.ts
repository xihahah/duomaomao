//摄像机
class Camera extends eui.Component implements  eui.UIComponent {
	//摄像机显示的对象 镜头对应的世界
	m_container:any;
	//摄像机宽高
	m_width:number;
	m_height:number;
	//摄像机的焦点 x y
	m_zoomX:number;
	m_zoomY:number;
	//摄像机焦距
	m_zoom:number;
	//跟随对象
	m_follower:any;
	//摄像机 x y 轴 偏移量
	m_cameraOffsetX:number;
	m_cameraOffsetY:number;

	public constructor(width:number, height:number) {
		super();
		this.m_width = width;
		this.m_height = height;
		this.m_cameraOffsetX = 0;
		this.m_cameraOffsetY = 0;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	//初始化相机 绑定镜头
	init(container:any){
		this.m_container = container;
		this.m_zoomX = this.m_container.x;
		this.m_zoomY = this.m_container.y;
	}

	/**设置镜头锚点 
		 * LRRate 左右比例 
		 * UDRate 上下比例
		 * 根据左右及上下的比例确定镜头的聚焦点
		 *     scale是根据锚点来缩放的 所以
		*/
	// setAnchor(LRRate:number, UDRate:number){
	// 	if(this.m_container != null){
	// 		//锚点位置  
	// 		// this.m_container.anchorOffsetX = this.m_container.width * LRRate;
	// 		// this.m_container.anchorOffsetY = this.m_container.height * UDRate;
	// 		// this.m_container.x = this.m_container.anchorOffsetX;
	// 		// this.m_container.y = this.m_container.anchorOffsetY;
	// 		// this.m_zoomX = this.m_container.anchorOffsetX;
	// 		// this.m_zoomY = this.m_container.anchorOffsetY;
	// 	}
	// }

	setAnchor(){
		if(this.m_container != null){
			this.setPosition();
			
			//设置焦点
			this.m_zoomX = this.m_follower.x;
			this.m_zoomY = this.m_follower.y;
		}
	}

	//设置scene位置
	setPosition(){
		// console.log(this.m_follower.roomNum);
		let nowRoom = this.m_container.getChildAt(this.m_follower.roomNum);
		let topY = nowRoom.y;
		let bottomY = topY + nowRoom.height - this.m_height;
		let leftX = nowRoom.x;
		let rightX = leftX + nowRoom.width - this.m_width;
		//设置场景位置
		let targetX = this.m_follower.x - this.m_width/2; 
		//暂时
		let targetY = this.m_follower.y - this.m_height/2;
		//计算x
		if(targetX < leftX){
			targetX =leftX;
		}else if(targetX > rightX){
			targetX = rightX;
		}
		//计算y
		if(targetY < topY){
			targetY = topY;
		}else if(targetY > bottomY){
			targetY = bottomY;
		}

		this.m_container.x = -targetX;
		this.m_container.y = -targetY;
	}
	
	/**设置镜头焦距
	 zoom 焦距，镜头距离世界的比例，默认为1，焦距越小，视觉越大
		*/
	setZoom(zoom: number) {
			if (this.m_container != null) {
				this.m_container.scaleX = zoom;
				this.m_container.scaleY = zoom;
			}
		}
	//旋转  rotation 旋转角度
	setRotation(rotation: number) {
		if (this.m_container != null) {
			this.m_container.rotation = rotation;
		}
	}
	//设置跟随者 
	follow(follower:any) {
		if (this.m_container != null) {
			this.m_follower = follower;
			this.m_zoomX = this.m_follower.x;
			this.m_zoomY = this.m_follower.y;
			this.m_cameraOffsetY = this.m_follower.speedY;
			// this.setAnchor(this.m_follower.x / this.m_container.width, this.m_follower.y / this.m_container.height);
			this.setAnchor();
		}
	}
	//保持跟随者在中央
	followCenterX(){
		let left = this.x - this.m_container.x + this.m_width/2-10;
		let right = this.x - this.m_container.x + this.m_width/2+10;
		if((this.m_cameraOffsetX>0 && this.m_follower.x >right) || (this.m_cameraOffsetX<0 && this.m_follower.x <left))
			return true;
		else
			return false; 
	}
	
	
	//对外方法 相机移动
	cameraMove(){
		this.m_cameraOffsetX = this.m_follower.speedX * this.m_follower.dir;
		this.addEventListener(egret.Event.ENTER_FRAME,this.move,this);
	}
	//停止移动
	cStopMove(){
		this.removeEventListener(egret.Event.ENTER_FRAME,this.move,this);
	}

//////////////////////////////////////////摄像机更新方法///////////////////////

	//下落改进
	cameraFall(){
		let nowRoom = this.m_container.getChildAt(this.m_follower.roomNum);
		//不变的
		let plane = nowRoom.y + nowRoom.height;// - this.scene.player.height/2-10
		//camera位置
		let camera = this.y - this.m_container.y;
		let player = this.m_follower;
		let l2 = Math.round(this.y + this.m_height/3*2 - this.m_container.y);
		
		//相机偏移   
		//当符合条件  且player不是跳跃时  相机可以下移
		if(camera<plane-this.m_height && player.y > l2){
			this.m_container.y -= this.m_cameraOffsetY;
		}
	}

	//上移
	//修正镜头位置   主要是跳跃时上移
	cameraUp(){
		let nowRoom = this.m_container.getChildAt(this.m_follower.roomNum);
		let rTop = nowRoom.y;
		let rBottom = nowRoom.y + nowRoom.height;
		let target = this.m_follower.y;
		let l1 = Math.round(this.y + this.m_height/3 - this.m_container.y);
		let l2 = Math.round(this.y + this.m_height/3*2 - this.m_container.y);
		let l3 = Math.round(this.y + this.m_height - this.m_container.y);
		

		if(target< l1){
			// console.log("上");
			//如果到顶了
			let y1 = this.y-this.m_container.y-rTop < l2-this.m_follower.y ?this.y-this.m_container.y-rTop:l2-this.m_follower.y;
			egret.Tween.get(this.m_container).to({
					y: this.m_container.y + y1
			},500)
		}
		// else if(target< l2){
		// 	console.log("中");
		// }else if(target< l3){
		// 	console.log("下");
		// 	if(l3 < rBottom){
		// 		let y = rBottom-l3;
		// 		this.camera.CameraMoveY(10);
		// 		// this.scene.player.y -= 10;
		// 	}
		// };
	}

	//相机左右移动
	private move(){
		let sceneLeft = this.m_container.x;
		let sceneRight = sceneLeft + this.m_container.width;

		//camera是静止的  
		let left = 0;
		let right = this.m_width;

		// let player = this.m_follower;

		//相机偏移   右 左
		if((this.m_cameraOffsetX > 0 && sceneRight > right &&this.followCenterX()) || (this.m_cameraOffsetX < 0 && sceneLeft < left && this.followCenterX())){
			
			this.m_container.x -= this.m_cameraOffsetX;
		}
		

		// this.dispatchEvent(new egret.Event("carema_movex"));
		
	}
//////////////////////////////////////////摄像机更新方法结束////////////////////////////////////



	/**通过摄像头偏移值计算世界内物品的偏移值
	 * 如果设置了跟随者，则跟随者在世界内的距离不变，其他物体根据镜头偏移量进行坐标修正
	 * 如果没有设置跟随者，则视世界全局可见，全员根据镜头偏移量进行坐标修正
	 * 注意1：摄像机移动的实现方式实际是世界内物品相对于世界进行的坐标的移动，但世界本身是固定的，变化的只是世界内部的物体
	 * 注意2:实际上，这里的坐标修正应该交给各个世界对象去自行实现，以便各物体对象能以此修正自身的行为，这里为了形成一个
	 * 统一的认识而把偏移的工作放进摄像机，就造成摄像机的功能比较单一的问题
	*/
	// CameraUpdate() {
	// 	for (let i = 0; i < this.m_container.numChildren; i++) {
	// 			if (this.m_follower != null) {
	// 			//设置了跟随者
	// 			if (this.m_follower != this.m_container.getChildAt(i)) {
	// 				this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
	// 				this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
	// 			}
	// 		} else {
	// 			//没有设置跟随者
	// 			this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
	// 			this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
	// 		}
			
	// 	}
	// }

	
	
}