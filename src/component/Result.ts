//游戏结果
class Result extends eui.Component{
	_bg;
	_showView;
	_main;
	public constructor(main) {
		super();
		this._main = main;
		this._bg = new eui.Rect(GameData.stageWidth,GameData.stageHeight,0x877c6e);
		this._bg.alpha = 0.7;
		this._showView = new egret.MovieClip();
	}
	setbg(){
		this.addChild(this._bg);
	}
	shengli(){
		let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("sl_tex_json"), RES.getRes("sl_tex_png"));
		this._showView.setMovieClipData(mcFactory.generateMovieClipData("胜利"));
	}
	shibai(){
		let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("shib_mc_json"), RES.getRes("shib_tex_png"));
		this._showView.setMovieClipData(mcFactory.generateMovieClipData("shib"));
	}

	showResult(result){
		this.setbg();
		//判断胜利还是失败
		result?this.shengli():this.shibai();
		this._showView.x = GameData.stageWidth/2;
		this._showView.y = GameData.stageHeight/2;
		this.addChild(this._showView);
		this._main.addChild(this);
		this._showView.play();
	}

}