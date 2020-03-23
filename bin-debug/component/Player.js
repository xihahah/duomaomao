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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(data, txtr) {
        var _this = this;
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this = _super.call(this, mcFactory.generateMovieClipData("猫猫动画")) || this;
        //初始化player的速度等
        _this.init();
        return _this;
    }
    Player.prototype.init = function () {
        this.speed = 10;
        this.speedX = 0;
        this.speedY = 0;
        this.direcion = [1, -1];
        this.statusX = "stay";
        this.scaleX = 1;
        //设置锚点
        // this.anchorOffsetX = this.width/2;
        // this.anchorOffsetY = this.height/2;
        // console.log(this.anchorOffsetX,this.anchorOffsetY);
    };
    //角色转向时翻转
    Player.prototype.scale = function () {
        this.scaleX = (this.speedX > 0 ? -1 : 1);
    };
    //player左右移动
    Player.prototype.moveX = function () {
        this.playMC();
        this.scale();
        this.x += this.speedX;
    };
    //上下移动
    Player.prototype.moveY = function () {
        this.playMC();
        this.y += this.speedY;
    };
    //静止时
    Player.prototype.stopMove = function () {
        // console.log("stop");
        this.speedX = 0;
        this.speedY = 0;
        this.gotoAndStop(0);
    };
    //播放动画
    Player.prototype.playMC = function () {
        // console.log("play");
        this.gotoAndPlay(0, -1);
    };
    return Player;
}(egret.MovieClip));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map