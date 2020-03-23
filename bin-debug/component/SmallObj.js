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
var SmallObj = (function (_super) {
    __extends(SmallObj, _super);
    function SmallObj(main) {
        var _this = _super.call(this) || this;
        _this.isUse = false;
        _this.anchorOffsetX = 0;
        _this.anchorOffsetY = 0;
        _this._main = main;
        _this._displayView = new eui.Image();
        _this.type = playType.box;
        _this.addChild(_this._displayView);
        return _this;
    }
    //设置显示的贴图
    SmallObj.prototype.setView = function (sc) {
        //素材
        this._displayView.source = sc;
        this.width = sc.textureWidth;
        this.height = sc.textureHeight;
    };
    // 添加滤镜
    SmallObj.prototype.addfilter = function () {
        //增加亮度
        var colorMatrix = [
            1, 0, 0, 0, 100,
            0, 1, 0, 0, 100,
            0, 0, 1, 0, 100,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        this.filters = [colorFlilter];
        // this.addEventListener(egret.Event.ENTER_FRAME,this.checkHit,this);
    };
    //检查与player是否碰撞
    SmallObj.prototype.checkHit = function () {
        var parent = this.parent;
        if (parent) {
            //如果两者不碰撞了
            if (!parent.hitTest(this.hitObj, this)) {
                this.removefilter();
                this.hitObj = null;
                this.removeEventListener(egret.Event.ENTER_FRAME, this.checkHit, this);
            }
            ;
        }
    };
    //删除滤镜
    SmallObj.prototype.removefilter = function () {
        this.filters = null;
    };
    SmallObj.prototype.checkFall = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.fall, this);
        this.dispatchEvent(new egret.Event("soFall"));
    };
    //下落
    SmallObj.prototype.fall = function () {
        var parent = this.parent;
        if (parent) {
            //如果碰撞了
            if (parent.boxTest(this).length > 0) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.fall, this);
            }
            else {
                this.y += 5;
            }
            ;
        }
    };
    return SmallObj;
}(eui.Component));
__reflect(SmallObj.prototype, "SmallObj");
//# sourceMappingURL=SmallObj.js.map