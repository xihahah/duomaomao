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
var startScene = (function (_super) {
    __extends(startScene, _super);
    function startScene() {
        return _super.call(this) || this;
    }
    startScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    startScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.joinBtn.addEventListener("touchTap", this.showJoinPanel, this);
        this.joinRoomBtn.addEventListener("touchTap", this.handleClose, this);
        this.randomBtn.addEventListener("touchTap", this.randomJoin, this);
    };
    //输出日志
    startScene.prototype.setText = function (str) {
        this.logText.text += str + "\n";
    };
    //设置用户信息
    startScene.prototype.setUser = function (user) {
        this.userAvatar.source = user.avatar;
        this.userId.text = user.id;
        this.userName.text = user.name;
    };
    //加入指定房间
    startScene.prototype.showJoinPanel = function () {
        //输入房间id面板
        this.joinRoom.visible = true;
    };
    //输入房间id后点确定
    startScene.prototype.handleClose = function () {
        if (this.joinId.text != "") {
            console.log(this.joinId.text);
            this.joinId.text = "";
        }
        this.joinRoom.visible = false;
    };
    //随机加入房间
    startScene.prototype.randomJoin = function () {
        // 最大人数  玩家简介
        GameData.engine.joinRandomRoom(3, "hi");
    };
    return startScene;
}(eui.Component));
__reflect(startScene.prototype, "startScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=startScene.js.map