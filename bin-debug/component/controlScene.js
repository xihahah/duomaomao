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
//界面中所有的按钮都放在这
var controlScene = (function (_super) {
    __extends(controlScene, _super);
    function controlScene() {
        return _super.call(this) || this;
    }
    controlScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    controlScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return controlScene;
}(eui.Component));
__reflect(controlScene.prototype, "controlScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=controlScene.js.map