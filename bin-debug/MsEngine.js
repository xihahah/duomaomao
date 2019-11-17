var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var MsEngine = (function () {
    function MsEngine() {
        this.engine = new MatchvsEngine();
        this.response = new MatchvsResponse();
        // this.init();
    }
    MsEngine.prototype.init = function () {
        this.response.initResponse = this.initRespone;
        this.engine.init(this.response, "Matchvs", "alpha", 217622, "fe20841e73df41d794f15891c940a306#E", 1);
    };
    MsEngine.prototype.initRespone = function (status) {
        var text;
        if (status == 200) {
            text = "初始化成功";
        }
        else {
            text = "初始化失败";
        }
        return text;
    };
    return MsEngine;
}());
__reflect(MsEngine.prototype, "MsEngine");
//# sourceMappingURL=MsEngine.js.map