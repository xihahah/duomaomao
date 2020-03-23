var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// 文字提示
var Tip = (function (_super) {
    __extends(Tip, _super);
    function Tip(main) {
        var _this = _super.call(this) || this;
        _this.textTexture = {
            cat: "t1",
            mouse: "t2"
        };
        _this._main = main;
        return _this;
    }
    Tip.prototype.show = function () {
        this._bg = new eui.Rect(GameData.stageWidth, GameData.stageHeight, 0x877c6e);
        this._bg.alpha = 0.7;
        this.addChild(this._bg);
        this.showText();
        //3秒后自动隐藏
        egret.setTimeout(this.hiden, this, 3000);
    };
    Tip.prototype.showText = function () {
        // if(this._main.scene.player.type == );
        this._text = (this._main.scene.player.type == playType.cat) ? new eui.Image(this.textTexture.cat) : new eui.Image(this.textTexture.mouse);
        this._text.x = 300;
        this._text.y = 200;
        this.addChild(this._text);
    };
    Tip.prototype.hiden = function () {
        this.removeChild(this._bg);
        this.removeChild(this._text);
        this._main.removeChild(this);
    };
    return Tip;
}(eui.Component));
__reflect(Tip.prototype, "Tip");
//# sourceMappingURL=Tip.js.map