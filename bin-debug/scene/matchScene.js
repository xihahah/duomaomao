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
//匹配界面
var matchScene = (function (_super) {
    __extends(matchScene, _super);
    function matchScene(ms) {
        var _this = _super.call(this) || this;
        _this.roomList = [];
        //自己加入房间回调 包括随机和不随机
        _this.joinResponse = function (status, roomUserInfoList, roomInfo) {
            if (status == 200) {
                console.log("已加入房间");
                console.log(roomUserInfoList);
                console.log(roomInfo);
                //自己加入房间时的列表生成
                // let rn = new eui.BitmapLabel();
                // rn.font = mainfont;
                // rn.text = roomInfo.roomID;
                // rn.y = 10;
                // rn.x = 221;
                // let group:any = this.getChildAt(3);
                // group.addChild(rn);
                _this.rid.text = roomInfo.roomID;
                _this.rowerID.text = _this._matchvs.username;
                _this.rowerTX.source = _this._matchvs.useravatar;
                //加入房间时  如果房间里面已经有人  生成一下列表
                if (roomUserInfoList.length > 0) {
                    var pro = roomUserInfoList[0].userProfile.split(',');
                    var o = {};
                    o['userID'] = roomUserInfoList[0].userId;
                    o['username'] = pro[0];
                    o['useravatar'] = pro[1];
                    _this.roomList.push(o);
                    _this.rlTX.source = o['useravatar'];
                    _this.rlID.text = o['username'];
                }
            }
            else {
                console.log("加入失败，请重试");
            }
        };
        //其他人加入房间
        _this.otherJoin = function (roomUserInfo) {
            //当前所在的房间  新加入的成员生成列表
            console.log(roomUserInfo);
            var pro = roomUserInfo.userProfile.split(',');
            var o = {};
            o['userID'] = roomUserInfo.userId;
            o['username'] = pro[0];
            o['useravatar'] = pro[1];
            _this.roomList.push(o);
            _this.rlTX.source = o['useravatar'];
            _this.rlID.text = o['username'];
        };
        _this._matchvs = ms;
        return _this;
    }
    matchScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    matchScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backMS, this);
        this.testBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.toGS, this);
        //自己加入房间收到回调 包括随机和不随机
        this._matchvs.response.joinRoomResponse = this.joinResponse;
        //其他人加入房间收到回调
        this._matchvs.response.joinRoomNotify = this.otherJoin;
    };
    matchScene.prototype.backMS = function () {
        console.log("返回主界面");
        this.dispatchEvent(new egret.Event("backMain"));
    };
    matchScene.prototype.toGS = function () {
        console.log("进入游戏界面");
        this.dispatchEvent(new egret.Event("toGame"));
    };
    return matchScene;
}(eui.Component));
__reflect(matchScene.prototype, "matchScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=matchScene.js.map