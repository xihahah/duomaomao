//显示player状态
class miniPlayer extends eui.Component implements  eui.UIComponent {
	_main;
	//死亡数
	numD;
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
		this.numD = 0;
	}
	
	//显示结果
	showResult(result){
		let i = 1;
		for(let g =0;g < result.length;g++){
			if(result[g].type == playType.mouse){
				if(result[g].die){
					let y = this._main.getByName(this.getChildAt(i),"die");
					y[0].visible = true;	
				}
				i++;
			}
			
		}
	}
	
	
}