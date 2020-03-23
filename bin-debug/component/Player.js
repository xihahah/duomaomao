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
    function Player() {
        var _this = _super.call(this) || this;
        // 方向 左-1 右 1
        _this.dir = -1;
        _this.mc = new egret.MovieClip();
        _this.addChild(_this.mc);
        return _this;
    }
    //初始向左
    Player.prototype.init = function () {
        // 		let data = RES.getRes("cat_mc_json");
        //      	let txtr = RES.getRes("cat_tex_png");
        var mcFactory = new egret.MovieClipDataFactory(RES.getRes("cat_mc_json"), RES.getRes("cat_tex_png"));
        this.mc.setMovieClipData(mcFactory.generateMovieClipData("猫猫动画"));
        this.width = this.mc.width;
        this.height = this.mc.height;
        this.anchorOffsetX = 0;
        this.anchorOffsetY = 0;
        this.jumpSpeed = GameData.gameconfig.pjumpspeed;
        this.speedX = GameData.gameconfig.pspeedx;
        this.speedY = GameData.gameconfig.pspeeedy;
        this.scaleX = 1;
        this.canFall = true;
        //不处于跳跃状态
        this.isJump = false;
        //分数
        this.score = 0;
        this.value = 100;
    };
    //角色转向时翻转
    Player.prototype.scale = function () {
        this.scaleX = (this.dir > 0 ? -1 : 1);
    };
    //播放动画
    Player.prototype.playMC = function () {
        if (!this.mc.isPlaying) {
            this.mc.gotoAndPlay(0, -1);
        }
    };
    //player左右移动
    Player.prototype.moveX = function () {
        //保证player一直在地图内
        if (this.parent && (this.x > this.parent.x - this.speedX * this.dir) && (this.x < this.parent.width - this.speedX * this.dir))
            this.x += this.speedX * this.dir;
    };
    Player.prototype.jump = function () {
        var _this = this;
        //如果不是处于跳起状态  禁止二级跳
        if (!this.isJump) {
            //处于跳跃状态
            this.isJump = true;
            egret.Tween.get(this).to({
                y: this.y - this.jumpSpeed
            }, 500, egret.Ease.quartOut).call(function () {
                _this.canFall = true;
                _this.addEventListener(egret.Event.ENTER_FRAME, _this.fall, _this);
            });
        }
    };
    Player.prototype.fall = function () {
        if (this.parent) {
            var nowRoom = this.parent.getChildAt(this.roomNum);
            //不变的
            var plane = nowRoom.y + nowRoom.height;
            if (this.canFall && this.y < plane)
                this.y += this.speedY;
        }
    };
    //开始移动
    Player.prototype.startMove = function () {
        if (this.type == playType.cat)
            this.scale();
        this.playMC();
        this.addEventListener(egret.Event.ENTER_FRAME, this.moveX, this);
    };
    //停止移动
    Player.prototype.stopMoveX = function () {
        this.mc.gotoAndStop(0);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.moveX, this);
    };
    //变身
    Player.prototype.chage = function () {
        //把原形藏起来
        this.removeChild(this.mc);
        this.playObj = new eui.Image(this.ptexture);
        this.playObj.width = this.ptexture.textureWidth;
        this.playObj.height = this.ptexture.textureHeight;
        this.width = this.playObj.width;
        this.height = this.playObj.height;
        this.y -= this.mc.height / 2;
        this.die = false;
        this.addChild(this.playObj);
    };
    //变回原形  被打中了
    Player.prototype.back = function () {
        var _this = this;
        // console.log("变回原形");
        this.removeChild(this.playObj);
        this.width = this.mc.width;
        this.height = this.mc.height;
        this.addChild(this.mc);
        this.die = true;
        this.score = 0;
        var p = this.parent.parent;
        if (p)
            p.playerCollection.itemUpdated(this);
        egret.setTimeout(function () {
            _this.parent.removeChild(_this);
        }, this, 1000);
    };
    Player.prototype.setHitobj = function (obj, index) {
        if (this.hitBox != null)
            return;
        this.hitBox = obj;
        this.hitBoxIndex = index;
        this.hitBox.addfilter();
        this.addEventListener(egret.Event.ENTER_FRAME, this.checkHit, this);
    };
    Player.prototype.checkHit = function () {
        var parent = this.parent;
        if (parent) {
            //如果两者不碰撞了
            if (!parent.hitTest(this, this.hitBox)) {
                this.hitBox.removefilter();
                this.hitBox = null;
                this.removeEventListener(egret.Event.ENTER_FRAME, this.checkHit, this);
            }
            ;
        }
    };
    //携带
    Player.prototype.takeup = function () {
        var parent = this.parent;
        //如果没携带东西  则拿起来
        if (this.carryObj == null) {
            if (this.hitBox == null)
                return;
            this.carryObj = this.hitBox;
            //在原来储存的数组中删掉该物品信息
            parent.roomBox[parent.player.roomNum - 1].splice(this.hitBoxIndex, 1);
            this.addEventListener(egret.Event.ENTER_FRAME, this.carryMove, this);
        }
        else {
            //携带了东西  就放下
            this.removeEventListener(egret.Event.ENTER_FRAME, this.carryMove, this);
            //在新房间中添加物品信息
            this.carryObj.roomNum = parent.player.roomNum;
            parent.roomBox[this.carryObj.roomNum - 1].push(this.carryObj);
            //修正物体位置
            this.carryObj.checkFall();
            this.carryObj = null;
        }
    };
    //放下
    Player.prototype.putoff = function () {
        this.carryObj = null;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.carryMove, this);
    };
    Player.prototype.carryMove = function () {
        this.carryObj.x = this.x;
        this.carryObj.y = this.y - this.carryObj.height;
    };
    return Player;
}(eui.Component));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map