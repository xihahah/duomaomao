class Score extends eui.Component implements  eui.UIComponent {
	_score;
	_text;
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
		this.init();
	}
	init(){
		this._score = 0;
		this._text = new egret.BitmapText();
		this._text.font = font;
		// console.log(this.width);
		this._text.x = 25;
		this._text.y = 25;
		this.addChild(this._text);
		this.showScore();
	}
	// 设置分数
	setScore(sc){
		this._score = sc;
		if(this._score != 0)
			this._text.x = 10;
		this.showScore();
	}
	//显示分数
	showScore(){
		this._text.text = this._score;
	}
	// 显示加分情况
	addScoreTip(sc){
		let tip = new eui.BitmapLabel();
		tip.font = font;
		tip.text = sc>0?('+'+sc):sc;
		tip.y = 50;
		tip.x = 80;
		this.addChild(tip);
		egret.Tween.get(tip).to({
			y:20,
			alpha:0.5
		},1000).call(()=>{
			this.removeChild(tip);
		});
	}
	
}