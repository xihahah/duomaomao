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
//地图1
var scene1 = (function (_super) {
    __extends(scene1, _super);
    function scene1(main) {
        var _this = _super.call(this) || this;
        //获取配置的数据
        _this.gamedata = GameData.gameconfig;
        //设置贴图信息
        _this._sTexture = {
            1: "s1l1_json",
            2: null,
            3: "s1r1_json",
            4: "s1l2_json",
            5: "s1r2_json"
        };
        _this._main = main;
        return _this;
    }
    scene1.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    scene1.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //获取好场景数据
        //获取房间数
        this.rooms = this.findRoom();
        //根据房间数  开辟几个空的位置  用来存每个房间的物品
        for (var i = 0; i < this.rooms; i++) {
            this.roomBox[i] = [];
        }
        //读取素材  存到数组里 
        this.getTexture();
        //初始化对象池
        this.initPool();
    };
    //根据数据生成场景  要在生成数据后
    scene1.prototype.init = function () {
        //创建物品
        this.createNPC(gamedata['sbox']);
        //创建贴纸
        this.createSticker();
        //创建玩家
        this.createPlayer();
    };
    //读取图片素材
    scene1.prototype.getTexture = function () {
        for (var s in this._sTexture) {
            // console.log(s);
            this.textureArr[s] = [];
            if (this._sTexture[s] != null) {
                var a = RES.getRes(this._sTexture[s])._textureMap;
                //object  用dom方式储存
                for (var i in a) {
                    this.textureArr[s].push(a[i]);
                }
            }
        }
    };
    //创建一定数量的物品
    scene1.prototype.createNPC = function (sboxArr) {
        for (var i = 0; i < sboxArr.length; i++) {
            var b = sboxArr[i];
            //拿到一个创建好的物体对象
            var obj = new SmallObj(this);
            ;
            //传入贴图
            obj.setView(this.textureArr[b['texture']['a']][b['texture']['b']]);
            //随机计算位置
            //第0个是背景图
            obj.roomNum = b['roomNum'];
            obj.x = b['x'] - obj.width;
            obj.y = b['y'] - obj.height;
            //把物品存入相应房间的数组中
            this.roomBox[obj.roomNum - 1].push(obj);
            // 在场景中添加物体
            this.addChild(obj);
        }
    };
    //创建玩家
    scene1.prototype.createPlayer = function () {
        //根据游戏数据生成角色
        var per = gamedata["person"];
        for (var i = 0; i < per.length; i++) {
            var pl = new Player();
            pl.init();
            //初始化位置
            pl.roomNum = per[i].roomNum;
            pl.x = per[i].x;
            pl.y = per[i].y;
            pl.type = per[i].type;
            //设置mouse
            if (pl.type != playType.cat) {
                pl.ptexture = this.textureArr[per[i].playObj.a][per[i].playObj.a];
                // console.log(pl.ptexture);
                pl.chage();
                this.roomBox[pl.roomNum - 1].push(pl);
            }
            this._main.playerCollection.addItem(pl);
            this.addChild(pl);
            console.log(pl.roomNum);
        }
        //设置player
        this.player = this._main.playerCollection.getItemAt(0);
    };
    //用来测试
    scene1.prototype.setplayer = function (i) {
        this.player = this._main.playerCollection.getItemAt(i);
    };
    //初始化对象池
    //经常要销毁的东西用对象池来
    scene1.prototype.initPool = function () {
        //子弹
        for (var i = 0; i < this.gamedata.bNum; i++) {
            var bullet = new Bullet(this);
            this._bullet.push(bullet);
        }
    };
    //从对象池获取一个bullet
    scene1.prototype.getBullet = function () {
        for (var i = 0; i < this._bullet.length; i++) {
            if (this._bullet[i].isUse == false) {
                return this._bullet[i];
            }
        }
        console.log("子弹已经用光");
    };
    //获取场景中的房间数
    scene1.prototype.findRoom = function () {
        var n = 0;
        for (var i = 0; i < this.numChildren; i++) {
            if (this.getChildAt(i).name == GameData.fixedType.room)
                n++;
        }
        return n;
    };
    //创建贴纸
    scene1.prototype.createSticker = function () {
        var sti = gamedata['sticker'];
        var parent = this.parent;
        for (var n = 0; n < sti.length; n++) {
            var stick = new Sticker(this);
            var t = sti[n].texture;
            stick.addMask(this.textureArr[t['a']][t['b']]);
            stick.x = sti[n].x - stick.width;
            stick.y = sti[n].y - stick.height;
            stick.roomNum = sti[n].roomNum;
            this.addChild(stick);
            //初始化父对象中的数据
            if (parent) {
                parent.stickerCollection.addItem(stick);
            }
        }
    };
    return scene1;
}(Scene));
__reflect(scene1.prototype, "scene1", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=scene1.js.map