class renwu extends eui.Component implements  eui.UIComponent {
	_main;
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
	//初始化
	init(main){
		this._main = main;
	}
	//显示结果  true false
	showResult(result){
		let i = 0;
		for(let g in result){
			if(result[g].finish){
				let y = this._main.getByName(this.getChildAt(i),"ok");
				y[0].visible = true;
				i++;	
			}
		}
	}
	
}