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
//子弹
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(main) {
        var _this = _super.call(this) || this;
        //是否使用
        _this.isUse = false;
        _this.width = GameData.gameconfig.bwidth;
        _this.height = GameData.gameconfig.bheight;
        _this._main = main;
        _this._bulletImg = new eui.Image();
        _this._bulletImg.width = _this.width;
        _this._bulletImg.height = _this.height;
        _this.addChild(_this._bulletImg);
        return _this;
    }
    Bullet.prototype.frame = function () {
        //如果子弹被使用
        if (this.isUse) {
            //发射的对象为 cat
            if (this.btype == playType.cat) {
                this.x += this._speed;
                //运动完了
                if (this.x == this.endX) {
                    this.recycle();
                }
            }
        }
    };
    //使用 dir 左1 右-1
    Bullet.prototype.use = function (type, x, y, dir) {
        // console.log("使用子弹");
        this.isUse = true;
        this.x = x - 30 * dir;
        this.y = y;
        this.btype = type;
        this._speed = -15 * dir;
        //目标距离
        this.endX = this.x + this._speed * 20;
        if (type == playType.cat) {
            this._bulletImg.source = "attackTextrue";
        }
        this._main.addChild(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    };
    //回收
    Bullet.prototype.recycle = function () {
        // console.log("回收子弹");
        this.isUse = false;
        this._main.removeChild(this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    };
    return Bullet;
}(eui.Component));
__reflect(Bullet.prototype, "Bullet");
//# sourceMappingURL=Bullet.js.map