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
var Score = (function (_super) {
    __extends(Score, _super);
    function Score() {
        return _super.call(this) || this;
    }
    Score.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Score.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    Score.prototype.init = function () {
        this._score = 0;
        this._text = new egret.BitmapText();
        this._text.font = font;
        // console.log(this.width);
        this._text.x = 25;
        this._text.y = 25;
        this.addChild(this._text);
        this.showScore();
    };
    // 设置分数
    Score.prototype.setScore = function (sc) {
        this._score = sc;
        if (this._score != 0)
            this._text.x = 10;
        this.showScore();
    };
    //显示分数
    Score.prototype.showScore = function () {
        this._text.text = this._score;
    };
    // 显示加分情况
    Score.prototype.addScoreTip = function (sc) {
        var _this = this;
        var tip = new eui.BitmapLabel();
        tip.font = font;
        tip.text = sc > 0 ? ('+' + sc) : sc;
        tip.y = 50;
        tip.x = 80;
        this.addChild(tip);
        egret.Tween.get(tip).to({
            y: 20,
            alpha: 0.5
        }, 1000).call(function () {
            _this.removeChild(tip);
        });
    };
    return Score;
}(eui.Component));
__reflect(Score.prototype, "Score", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Score.js.map