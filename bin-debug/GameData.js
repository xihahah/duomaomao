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
    GameData.engine = new MatchvsEngine();
    //接口调用返回对象
    GameData.response = new MatchvsResponse();
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map