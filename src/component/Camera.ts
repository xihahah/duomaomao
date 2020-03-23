//摄像机
class Camera extends eui.Component implements  eui.UIComponent {
	//虚拟摇杆
	// controlBtn:Controler;
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

		//键盘控制
		// document.addEventListener("keydown",e=>this.handleKeydown(e),false);
		// document.addEventListener("keyup",()=>this.handleKeyup(),false);

		// //摇杆控制
		// this.controlBtn.addEventListener("cb_start",this.cb_handleStar,this);
		// this.controlBtn.addEventListener("cb_move",this.cb_handleMove,this);
		// this.controlBtn.addEventListener("cb_end",this.cb_handleEnd,this);
	}
	
	//初始化相机 绑定镜头
	init(container:any){
		this.m_container = container;
		this.m_zoomX = this.m_container.x;
		this.m_zoomY = this.m_container.y;
	}

	// onenterFrame(){
	// 	this.playerMove();
	// 	// this.m_container.info();
	// 	let testBox = this.m_container.testBox;
	// 	console.log(this.hitTest(testBox,this.m_follower));
	// }


	/**设置镜头锚点 
		 * LRRate 左右比例 
		 * UDRate 上下比例
		 * 根据左右及上下的比例确定镜头的聚焦点
		*/
	// setAnchor(LRRate:number, UDRate:number){
	// 	if(this.m_container != null){
	// 		//锚点位置
	// 		this.m_container.anchorOffsetX = this.m_container.width * LRRate;
	// 		this.m_container.anchorOffsetY = this.m_container.height * UDRate;
	// 			this.m_container.x = this.m_container.anchorOffsetX;
	// 			this.m_container.y = this.m_container.anchorOffsetY;
	// 			this.m_zoomX = this.m_container.anchorOffsetX;
	// 			this.m_zoomY = this.m_container.anchorOffsetY;
	// 	}
	// }
	setAnchor(){
		if(this.m_container != null){
			let topY = 0;
			let bottomY =this.m_height-this.m_container.height;//-1060
			let leftX = 0;
			let rightX = this.m_width - this.m_container.width;//-
			//设置场景位置
			if(this.m_width/2 - this.m_follower.x > leftX){
				// console.log("最左边");
				this.m_container.x = leftX;
			}else if(this.m_width/2 - this.m_follower.x > rightX){
				// console.log("最中间");
				this.m_container.x = this.m_width/2 - this.m_follower.x;
			}else {
				// console.log("最右边");
				this.m_container.x = rightX;
			}

			if(this.m_height/2 - this.m_follower.y > topY){
				// console.log("最上边");
				this.m_container.y = topY;
			}else if(this.m_height/2 - this.m_follower.y > bottomY){
				// console.log("最中间");
				this.m_container.y = this.m_height/2 - this.m_follower.y;
			}else {
				// console.log("最下边");
				this.m_container.y = bottomY;
			}
				
			//设置焦点
			this.m_zoomX = this.m_follower.x;
			this.m_zoomY = this.m_follower.y;
		}
	}
	/**设置镜头焦距
	 zoom 焦距，镜头距离世界的比例，默认为1，焦距越小，视觉越大
		*/
	setZoom(zoom: number) {
		// console.log(this.m_container.width + "  " + this.m_container.height );
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
			// this.setAnchor(this.m_follower.x / this.m_container.width, this.m_follower.y / this.m_container.height);
			this.setAnchor();
		}
	}
	//保持跟随者在中央
	followCenter(){
		let centerX = (this.m_width - this.m_follower.width)/2;
		let centerY = (this.m_height - this.m_follower.height)/2;
		if(this.m_follower.x != centerX)
			return false;
		else
			return true; 
	}
	//摄像机移动时   player位置不动
	//摄像机边界   防止角色走出镜头   
	cameraSideX(speed){
		let  targetX = this.m_follower.x + speed;
		//防止targetx不在中间
		let left = (this.m_zoomX - this.m_width/2)<0?0:(this.m_zoomX - this.m_width/2);
		let right = (this.m_zoomX + this.m_width/2)>this.m_container.width?this.m_container.width:(this.m_zoomX + this.m_width/2);
		if(targetX < left + this.m_follower.width/2){
				//左边界
				return false;
		}else if(targetX > right - this.m_follower.width/2){
				//右边界
				return false;
		}else{
			return true;
		}
	}
	cameraSideY(speed){
		let  targetY = this.m_follower.y + speed;
		//防止targety不在中间  在偏下或者偏上位置
		let top = (this.m_zoomY - this.m_height/2)<0?0:this.m_zoomY - this.m_height/2;
		let bottom = (this.m_zoomY + this.m_height/2)>this.m_container.height?this.m_container.height:(this.m_zoomY + this.m_height/2);
		if(targetY < top){
				//上边界
				return false;
		}else if(targetY > bottom - this.m_follower.height/3*2){
				//下边界
				return false;
		}else{
			return true;
		}
	}

	//摄像机X轴移动的有向速度
	CameraMoveX(x: number) {
		// console.log("camera move x");
		this.m_cameraOffsetX = x;
		this.CameraUpdate();
		this.m_cameraOffsetX = 0;
	}
	//摄像机Y轴移动的有向速度
	CameraMoveY(y: number) {
		// console.log("camera move y");
		this.m_cameraOffsetY = y;
		this.CameraUpdate();
		this.m_cameraOffsetY = 0;
	}
	//判断整个场景的边界
	//x方向边界判断
	containerSideX(speed){
		let leftX = 0;
		let rightX = this.m_width - this.m_container.width;//-
		//设置场景位置
		let  targetX = this.m_container.bg1.x - speed;
		if(targetX > leftX){
			this.m_container.bg1.x = leftX;
			return false;
		}else if(targetX < rightX){
			this.m_container.bg1.x = rightX;
			return false;
		}else{
			return true;
		}
	}
	//y方向边界判断
	containerSideY(speed){
		let topY = this.m_container.height - this.m_height;//1050
		let bottomY = 0; //0
		let  targetY = this.m_container.bg1.y - speed;
		if(targetY > topY){
			this.m_container.bg1.y = topY;
			return false;
		}else if(targetY < bottomY){
			this.m_container.bg1.y = bottomY;
			return false;
		}else{
			return true;
		}
	}
	/**通过摄像头偏移值计算世界内物品的偏移值
	 * 如果设置了跟随者，则跟随者在世界内的距离不变，其他物体根据镜头偏移量进行坐标修正
	 * 如果没有设置跟随者，则视世界全局可见，全员根据镜头偏移量进行坐标修正
	 * 注意1：摄像机移动的实现方式实际是世界内物品相对于世界进行的坐标的移动，但世界本身是固定的，变化的只是世界内部的物体
	 * 注意2:实际上，这里的坐标修正应该交给各个世界对象去自行实现，以便各物体对象能以此修正自身的行为，这里为了形成一个
	 * 统一的认识而把偏移的工作放进摄像机，就造成摄像机的功能比较单一的问题
	*/
	CameraUpdate() {
		for (let i = 0; i < this.m_container.numChildren; i++) {
				if (this.m_follower != null) {
				//设置了跟随者
				if (this.m_follower != this.m_container.getChildAt(i)) {
					this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
					this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
				}
			} else {
				//没有设置跟随者
				this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
				this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
			}
			
		}
	}

	// //如果没到大背景边界   则是大背景移动   camera镜头偏移可以保持player一直在镜头中
	// //如果到了边界   则是角色移动
	// //角色移动逻辑判断
	// controlMoveX(){
	// 	//判断大背景的边界  防止大背景跑出镜头
	// 	if(this.containerSideX(this.m_follower.speedX)){
	// 		this.m_follower.scale();
	// 		//布吉岛为啥不play  调用到了函数但是不播放动画
	// 		this.m_follower.playMC();
	// 		this.CameraMoveX(this.m_follower.speedX);
	// 	}else{
	// 		//防止角色走出镜头
	// 		if(this.cameraSideX(this.m_follower.speedX))
	// 			this.m_follower.moveX();
	// 	}
	// }
	// controlMoveY(){
	// 	//判断大背景的边界
	// 	if(this.containerSideY(this.m_follower.speedY)){
	// 		// this.m_follower.scale();
	// 		this.m_follower.playMC();
	// 		this.CameraMoveY(this.m_follower.speedY);
	// 	}else{
	// 		//防止角色走出镜头
	// 		if(this.cameraSideY(this.m_follower.speedY))
	// 			this.m_follower.moveY();
	// 	}
	// }
	
	
	/*键盘事件*/

	// handleKeydown(e){
	// 	// console.log(e.keyCode);
	// 	switch(e.keyCode){
	// 		case 65:{//A
	// 			this.m_follower.speedX = -10
	// 			this.controlMoveX();
	// 			break;
	// 		}
	// 		case 68:{//D
	// 			this.m_follower.speedX = 10
	// 			this.controlMoveX();
	// 			break;
	// 		}
	// 		case 83:{//S
	// 			this.m_follower.speedY = 10;
	// 			this.controlMoveY();
	// 			break;
	// 		}
	// 		case 87:{//W
	// 			this.m_follower.speedY = -10;
	// 			this.controlMoveY();
	// 			break;
	// 		}
	// 	}
	// }

	// handleKeyup(){
	// 	this.m_follower.stopMove();
	// }
	/*键盘事件结束*/ 

	/*摇杆事件 */
	// cb_handleStar(){
	// 	this.addEventListener(egret.Event.ENTER_FRAME,this.onenterFrame,this);
	// }
	// cb_handleMove(e:egret.Event){

	// 	let angle = this.controlBtn.angle;
	// 	//根据角度计算运动速度
	// 	this.m_follower.speedX = Math.cos(angle)*this.m_follower.speed;
	// 	this.m_follower.speedY = Math.sin(angle)*this.m_follower.speed;
		
	// }
	// cb_handleEnd(){
	// 	this.m_follower.stopMove();
	// 	this.removeEventListener(egret.Event.ENTER_FRAME, this.onenterFrame, this);
	// }
	//虚拟摇杆控制角色
	// playerMove(){
	// 	let rt = -(Math.atan2(100, 100)); //右上
	// 	let lt = -(Math.atan2(100, -100));  //左上
	// 	let lb = -(Math.atan2(-100, -100));  //左下
	// 	let rb = -(Math.atan2(-100, 100)); //右下
	// 	let angle = this.controlBtn.angle;
	// 	if(angle >= rb && angle < lb || angle >= lt && angle < rt ){
	// 		//上下
	// 		this.controlMoveY();
	// 	}else{
	// 		//左右
	// 		this.controlMoveX();
	// 	}
	// }
	/*摇杆事件结束 */
}