var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MsEngine = (function () {
    function MsEngine() {
        var _this = this;
        /* -----------------------回调监听--------------------- */
        //初始化回调
        this.initRespone = function (status) {
            if (status == 200) {
                console.log("初始化成功");
                //注册用户
                _this.engine.registerUser();
            }
            else {
                console.log("初始化失败");
            }
        };
        //注册回调
        this.registerRespone = function (user) {
            if (user.status == 0) {
                console.log("注册成功！");
                _this.username = user.name;
                _this.usertoken = user.token;
                _this.userid = user.userID;
                _this.useravatar = user.avatar;
                _this.login();
            }
            else {
                console.log("注册失败！");
            }
        };
        //登录回调
        this.loginResponse = function (loginRsp) {
            if (loginRsp.status == 200) {
                console.log("登陆成功！");
            }
            else {
                console.log("登陆失败！");
            }
        };
        this.engine = new MatchvsEngine();
        this.response = new MatchvsResponse();
        //初始化完成后的回调函数
        this.response.initResponse = this.initRespone;
        //注册成功的回调
        this.response.registerUserResponse = this.registerRespone;
        //初始化
        this.engine.init(this.response, GameData.channel, GameData.environment.dev, GameData.GameID, GameData.Appkey, GameData.GameVersion);
    }
    /* -----------------------回调监听结束--------------------- */
    /* -----------------------功能部分--------------------- */
    // 登录
    MsEngine.prototype.login = function () {
        console.log("登陆中");
        this.engine.login(this.userid, this.usertoken, "deviceID");
    };
    //随机加入房间
    MsEngine.prototype.randomJoin = function () {
        var ifo = this.username + "," + this.useravatar;
        // 最大人数  玩家简介
        this.engine.joinRandomRoom(4, ifo);
    };
    return MsEngine;
}());
__reflect(MsEngine.prototype, "MsEngine");
//# sourceMappingURL=MsEngine.js.map