//界面中所有的按钮都放在这
class controlScene extends eui.Component implements  eui.UIComponent {
	//虚拟摇杆
	controlBtn;
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
	// //摇杆事件处理函数
	// startFn;
	// //控制的角色
	// controlPlayer;
	// init(){
	// 	// this.follower = 
	// }
	// /*摇杆事件 */
	// cb_handleStar(){
	// 	this.addEventListener(egret.Event.ENTER_FRAME,this.startFn,this);
	// }
	// cb_handleMove(e:egret.Event){

	// 	let angle = this.controlBtn.angle;
	// 	//根据角度计算运动速度
	// 	this.controlPlayer.speedX = Math.cos(angle)*this.controlPlayer.speed;
	// 	this.controlPlayer.speedY = Math.sin(angle)*this.controlPlayer.speed;
		
	// }
	// cb_handleEnd(){
	// 	this.controlPlayer.stopMove();
	// 	this.removeEventListener(egret.Event.ENTER_FRAME, this.startFn, this);
	// }
	// //虚拟摇杆控制角色
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
	// /*摇杆事件结束 */
}