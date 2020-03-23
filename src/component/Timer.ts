//时间计算
class Timer extends eui.Component implements  eui.UIComponent {
	_main;
	//初始时间
	_initTime;
	//计时器
	_timer:egret.Timer;
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
		this._text = new egret.BitmapText();
		this._text.font = timefont;
		this.addChild(this._text);
		this._text.x = 27;
		this._text.y = 10;
		this._timer = new egret.Timer(1000);
	}
	//开启计时器
	startTimer(n){
		this._initTime = n;
		this.showText(this._initTime);
		this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
		this._timer.start();
	}
	//开始计时
	onTimer(){
		if(this._initTime > 0){
			this._initTime --;
			this.showText(this._initTime);
		}else{
			this.onComplete();
		}
	}

	//计时结束
	onComplete(){
		this._timer.stop();
		console.log("时间到！");
		this.setGameResult();
		
	}
	setGameResult(){
		if(!this._main.gameOver){
			this._main.gameOver = true;

				let c = 0;
				let m = 0;
			let person = this._main.playerCollection.source;
			for(let i in person){
				if(person[i].type == playType.cat){
					c += person[i].score;
				}else if(person[i].type == playType.mouse){
					m += person[i].score;
				}
			}
			// console.log(sc);
			this._main.winner = c>m?playType.cat:playType.mouse;

			//判断当前player是否胜利
			new Result(this._main).showResult(this._main.winner == this._main.scene.player.type);
		}
		
	}
	//设置时间格式
	showText(t){
		//分
		let m = Math.floor(t/60);
		//秒
		let s = t - 60*m;
		//时间不足
		if(m<1&&s<31){
			this._text.font = timefontwarn;
		}
		this._text.text = m + ":" +s;
	}
	
}