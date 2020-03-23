// 文字提示
class Tip extends eui.Component {
	_bg:eui.Rect;
	_text;
	_timer:egret.Timer;
	_main;
	textTexture={
		cat:"t1",
		mouse:"t2"
	}
	public constructor(main) {
		super();
		this._main = main;
	}
	show(){
		this._bg = new eui.Rect(GameData.stageWidth,GameData.stageHeight,0x877c6e);
		this._bg.alpha = 0.7;
		this.addChild(this._bg);
		this.showText();
		//3秒后自动隐藏
		egret.setTimeout(this.hiden,this,3000);
	}
	showText(){
		// if(this._main.scene.player.type == );
		this._text = (this._main.scene.player.type == playType.cat)?new eui.Image(this.textTexture.cat):new eui.Image(this.textTexture.mouse);
		this._text.x = 300;
		this._text.y = 200;
		this.addChild(this._text);
	}
	hiden(){
		this.removeChild(this._bg);
		this.removeChild(this._text);
		this._main.removeChild(this);
	}
}