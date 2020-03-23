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
//显示player状态
var miniPlayer = (function (_super) {
    __extends(miniPlayer, _super);
    function miniPlayer() {
        return _super.call(this) || this;
    }
    miniPlayer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    miniPlayer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //初始化
    miniPlayer.prototype.init = function (main) {
        this._main = main;
        this.numD = 0;
    };
    //显示结果
    miniPlayer.prototype.showResult = function (result) {
        var i = 1;
        for (var g = 0; g < result.length; g++) {
            if (result[g].type == playType.mouse) {
                if (result[g].die) {
                    var y = this._main.getByName(this.getChildAt(i), "die");
                    y[0].visible = true;
                }
                i++;
            }
        }
    };
    return miniPlayer;
}(eui.Component));
__reflect(miniPlayer.prototype, "miniPlayer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=miniPlayer.js.map