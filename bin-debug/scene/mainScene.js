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
//游戏主界面
var mainScene = (function (_super) {
    __extends(mainScene, _super);
    function mainScene(ms) {
        var _this = _super.call(this) || this;
        //登录回调
        _this.loginResponse = function (loginRsp) {
            if (loginRsp.status == 200) {
                console.log("登陆成功！");
                //字体修改
                var un = new eui.BitmapLabel();
                un.font = mainfont;
                un.text = _this._matchvs.username;
                un.y = 38;
                un.x = 166.5;
                var group = _this.getChildAt(7);
                group.addChild(un);
                var ui = new eui.BitmapLabel();
                ui.font = mainfont;
                ui.text = _this._matchvs.userid;
                ui.y = 2;
                ui.x = 144;
                group.addChild(ui);
                // 设置用户信息
                // this.uname.text = this._matchvs.username;
                // this.uid.text = this._matchvs.userid;
                _this.utx.source = _this._matchvs.useravatar;
            }
            else {
                console.log("登陆失败！");
            }
        };
        _this._matchvs = ms;
        return _this;
    }
    mainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    mainScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // console.log(this);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
        this.playTG();
        //登录回调
        this._matchvs.response.loginResponse = this.loginResponse;
    };
    mainScene.prototype.start = function () {
        console.log("开始匹配!");
        this.stopTG();
        this._matchvs.randomJoin();
        this.dispatchEvent(new egret.Event("toMatch"));
    };
    //播放TweenGroup动画 （实现循环播放）
    mainScene.prototype.playTG = function () {
        this.yun.addEventListener("complete", this.replay, this);
        this.yun.play();
    };
    mainScene.prototype.stopTG = function () {
        this.yun.removeEventListener("complete", this.replay, this);
    };
    mainScene.prototype.replay = function () {
        this.yun.play(0);
    };
    return mainScene;
}(eui.Component));
__reflect(mainScene.prototype, "mainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=mainScene.js.map