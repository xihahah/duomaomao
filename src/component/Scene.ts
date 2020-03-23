class Scene extends eui.Component {
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
	//碰撞检测
	protected hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean
        {
            // let rect1: egret.Rectangle = obj1.getBounds();
            // let rect2: egret.Rectangle = obj2.getBounds();
            // rect1.x = obj1.x;
            // rect1.y = obj1.y;
            // rect2.x = obj2.x;
            // rect2.y = obj2.y;
			// // console.log(obj2.x,obj2.y,obj2.width,obj2.height);
			// console.log(rect1.x,rect1.y,rect1.width,rect1.height);
			// console.log(rect2.x,rect2.y,rect2.width,rect2.height);
            // return rect1.intersects(rect2);

			var x1 = obj1.x - obj1.anchorOffsetX;
			var y1 = obj1.y - obj1.anchorOffsetY;
			var x2 = obj2.x - obj2.anchorOffsetX;
			var y2 = obj2.y - obj2.anchorOffsetY;
		
			if(y1 > (y2) && y1 < (y2 + obj2.height)) {
				if(x1 > (x2) && x1 < (x2 + obj2.width)) {
					return true;
				}
			}
			return false;
        }
}