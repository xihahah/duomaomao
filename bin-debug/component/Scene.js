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
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        return _super.call(this) || this;
    }
    Scene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Scene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //碰撞检测
    Scene.prototype.hitTest = function (obj1, obj2) {
        // let rect1: egret.Rectangle = obj1.getBounds();
        // let rect2: egret.Rectangle = obj2.getBounds();
        // rect1.x = obj1.x;
        // rect1.y = obj1.y;
        // rect2.x = obj2.x;
        // rect2.y = obj2.y;
        // // console.log(obj2.x,obj2.y,obj2.width,obj2.height);
        // console.log(rect1.x,rect1.y,rect1.width,rect1.height);
        // console.log(rect2.x,rect2.y,rect2.width,rect2.height);
        // return rect1.intersects(rect2);
        var x1 = obj1.x - obj1.anchorOffsetX;
        var y1 = obj1.y - obj1.anchorOffsetY;
        var x2 = obj2.x - obj2.anchorOffsetX;
        var y2 = obj2.y - obj2.anchorOffsetY;
        if (y1 > (y2) && y1 < (y2 + obj2.height)) {
            if (x1 > (x2) && x1 < (x2 + obj2.width)) {
                return true;
            }
        }
        return false;
    };
    return Scene;
}(eui.Component));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map