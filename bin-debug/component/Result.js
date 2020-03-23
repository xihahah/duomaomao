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
//游戏结果
var Result = (function (_super) {
    __extends(Result, _super);
    function Result(main) {
        var _this = _super.call(this) || this;
        _this._main = main;
        _this._bg = new eui.Rect(GameData.stageWidth, GameData.stageHeight, 0x877c6e);
        _this._bg.alpha = 0.7;
        _this._showView = new egret.MovieClip();
        return _this;
    }
    Result.prototype.setbg = function () {
        this.addChild(this._bg);
    };
    Result.prototype.shengli = function () {
        var mcFactory = new egret.MovieClipDataFactory(RES.getRes("sl_tex_json"), RES.getRes("sl_tex_png"));
        this._showView.setMovieClipData(mcFactory.generateMovieClipData("胜利"));
    };
    Result.prototype.shibai = function () {
        var mcFactory = new egret.MovieClipDataFactory(RES.getRes("shib_mc_json"), RES.getRes("shib_tex_png"));
        this._showView.setMovieClipData(mcFactory.generateMovieClipData("shib"));
    };
    Result.prototype.showResult = function (result) {
        this.setbg();
        //判断胜利还是失败
        result ? this.shengli() : this.shibai();
        this._showView.x = GameData.stageWidth / 2;
        this._showView.y = GameData.stageHeight / 2;
        this.addChild(this._showView);
        this._main.addChild(this);
        this._showView.play();
    };
    return Result;
}(eui.Component));
__reflect(Result.prototype, "Result");
//# sourceMappingURL=Result.js.map