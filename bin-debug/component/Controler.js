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
var Controler = (function (_super) {
    __extends(Controler, _super);
    function Controler() {
        var _this = _super.call(this) || this;
        _this.outsideRadius = 0; //圆环半径
        _this.insideRadius = 0; //小球半径
        _this.centerX = 0; //中心点坐标
        _this.centerY = 0;
        //触摸移动，设置小球的位置
        _this.p1 = new egret.Point();
        _this.p2 = new egret.Point();
        _this.angle = 0;
        return _this;
    }
    Controler.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Controler.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //获取圆环和小球半径
        this.outsideRadius = this.outside.height / 2;
        this.insideRadius = this.inside.height / 2;
        //获取中心点
        this.centerX = this.outsideRadius - this.insideRadius;
        this.centerY = this.outsideRadius - this.insideRadius;
        //设置锚点
        this.anchorOffsetX = this.outsideRadius;
        this.anchorOffsetY = this.outsideRadius;
        //设置锚点后位置会偏移   手动修正
        this.x += this.anchorOffsetX;
        this.y += this.anchorOffsetY;
        //设置小球初始位置
        this.inside.x = this.centerX;
        this.inside.y = this.centerY;
        this.outside.addEventListener("touchBegin", this.onTouchBegin, this);
        this.outside.addEventListener("touchMove", this.onTouchMove, this);
        this.outside.addEventListener("touchEnd", this.onTouchEnd, this);
        this.outside.addEventListener("touchReleaseOutside", this.onTouchEnd, this);
    };
    //触摸开始
    Controler.prototype.onTouchBegin = function (e) {
        this.touchID = e.touchPointID;
        this.inside.currentState = "down";
        this.dispatchEvent(new egret.Event("cb_start"));
    };
    //触摸结束
    Controler.prototype.onTouchEnd = function (e) {
        if (this.touchID != e.touchPointID) {
            return;
        }
        this.inside.x = this.centerX;
        this.inside.y = this.centerY;
        this.inside.currentState = "up";
        this.dispatchEvent(new egret.Event("cb_end"));
    };
    Controler.prototype.onTouchMove = function (e) {
        // console.log(e);
        if (this.touchID != e.touchPointID) {
            return;
        }
        //获取手指和虚拟摇杆的距离
        this.p1.x = this.x;
        this.p1.y = this.y;
        this.p2.x = e.stageX;
        this.p2.y = e.stageY;
        var dist = egret.Point.distance(this.p1, this.p2);
        this.angle = Math.atan2(e.stageY - this.y, e.stageX - this.x);
        // console.log(this.x + " " +this.y);
        //手指距离在圆环范围内
        if (dist <= (this.outsideRadius - this.insideRadius)) {
            this.inside.x = this.centerX + e.stageX - this.x;
            this.inside.y = this.centerY + e.stageY - this.y;
        }
        else {
            //手指距离在圆环范围外
            this.inside.x = this.centerX - Math.cos(this.angle) * (this.insideRadius - this.outsideRadius);
            this.inside.y = this.centerY - Math.sin(this.angle) * (this.insideRadius - this.outsideRadius);
        }
        this.dispatchEvent(new egret.Event("cb_move"));
    };
    return Controler;
}(eui.Component));
__reflect(Controler.prototype, "Controler", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Controler.js.map