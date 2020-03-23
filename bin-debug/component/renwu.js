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
var renwu = (function (_super) {
    __extends(renwu, _super);
    function renwu() {
        return _super.call(this) || this;
    }
    renwu.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    renwu.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //初始化
    renwu.prototype.init = function (main) {
        this._main = main;
    };
    //显示结果  true false
    renwu.prototype.showResult = function (result) {
        var i = 0;
        for (var g in result) {
            if (result[g].finish) {
                var y = this._main.getByName(this.getChildAt(i), "ok");
                y[0].visible = true;
                i++;
            }
        }
    };
    return renwu;
}(eui.Component));
__reflect(renwu.prototype, "renwu", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=renwu.js.map