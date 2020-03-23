var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    // 使用static定义的属性  要直接从类调用  而不能在实例中调用
    GameData.channel = "Matchvs";
    // 环境  本地调试/发布上线
    GameData.environment = { dev: "alpha", pro: "release" };
    // matchvs中的游戏信息
    GameData.GameID = 217622;
    GameData.Appkey = "fe20841e73df41d794f15891c940a306#E";
    GameData.Secret = "233020558933484a97895e34eaf1589a";
    //版本号
    GameData.GameVersion = 1.0;
    //接口请求调用对象
    // static engine:MatchvsEngine = new MatchvsEngine();
    //接口调用返回对象
    // static response:MatchvsResponse = new MatchvsResponse();
    //舞台大小
    GameData.stageWidth = 1136;
    GameData.stageHeight = 640;
    //游戏数据
    GameData.gameconfig = {
        bNum: 20,
        bwidth: 30,
        bheight: 30,
        pNum: 4,
        pspeedx: 10,
        pspeeedy: 10,
        pjumpspeed: 150,
        sNum: 4,
        rwscore: 75,
        catchscore: 100,
    };
    //固定物体类型
    GameData.fixedType = {
        room: "room",
        nfloor: "newFloor",
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//扮演的类型
var playType;
(function (playType) {
    playType[playType["cat"] = 0] = "cat";
    playType[playType["mouse"] = 1] = "mouse";
    playType[playType["box"] = 2] = "box";
})(playType || (playType = {}));
//字体
var font;
var timefont;
var timefontwarn;
var mainfont;
// 生成的游戏数据
var gamedata = {};
//# sourceMappingURL=GameData.js.map