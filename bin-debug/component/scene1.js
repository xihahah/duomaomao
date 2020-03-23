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
//地图1
var scene1 = (function (_super) {
    __extends(scene1, _super);
    function scene1() {
        return _super.call(this) || this;
    }
    scene1.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    scene1.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.initScene();
    };
    scene1.prototype.initScene = function () {
        for (var i = 0; i < this.numChildren; i++) {
            //设置了跟随者
            // if (this.m_follower != this.m_container.getChildAt(i)) {
            // this.getChildAt(i).x -= this.m_cameraOffsetX;
            // this.getChildAt(i).y -= this.m_cameraOffsetY;
            // }
            var child = this.getChildAt(i);
            if (child != this.bg1) {
                child.anchorOffsetX = child.width / 2;
                child.anchorOffsetY = child.height / 2;
                child.x += child.anchorOffsetX;
                child.y += child.anchorOffsetY;
            }
        }
    };
    return scene1;
}(Scene));
__reflect(scene1.prototype, "scene1", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=scene1.js.map