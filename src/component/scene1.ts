//地图1
class scene1 extends Scene implements  eui.UIComponent {
	bg1;
	player;
	plane;
	testBox;

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
		// this.initScene();
	}
	initScene(){
		for (let i = 0; i < this.numChildren; i++) {
				//设置了跟随者
				// if (this.m_follower != this.m_container.getChildAt(i)) {
					// this.getChildAt(i).x -= this.m_cameraOffsetX;
					// this.getChildAt(i).y -= this.m_cameraOffsetY;
				// }
			let child = this.getChildAt(i);
			if(child != this.bg1){
				child.anchorOffsetX = child.width/2;
				child.anchorOffsetY = child.height/2;
				child.x += child.anchorOffsetX;
				child.y += child.anchorOffsetY;
			}
			
		}
	}
}