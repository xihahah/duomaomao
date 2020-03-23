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
var gameScene = (function (_super) {
    __extends(gameScene, _super);
    function gameScene() {
        return _super.call(this) || this;
    }
    gameScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    gameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    //初始化
    gameScene.prototype.init = function () {
        //添加场景
        this.scene = new scene1();
        this.addChild(this.scene);
        //在外面设置这些 主要是为了后面随机场景和选角色的时候方便
        //添加player
        var data = RES.getRes("cat_mc_json");
        var txtr = RES.getRes("cat_tex_png");
        this.scene.player = new Player(data, txtr);
        //初始化位置
        this.scene.player.x = (this.stage.stageWidth) / 2; //(this.stage.stageWidth)/2
        this.scene.player.y = 1500; //(this.stage.stageHeight)/4*3 + 50
        //在场景中添加角色
        this.scene.addChild(this.scene.player);
        //添加摄像机
        this.camera = new Camera(GameData.stageWidth, GameData.stageHeight);
        this.camera.init(this.scene);
        this.camera.follow(this.scene.player);
        //修改过后暂时不能用
        // this.camera.setZoom(1);
        this.addChild(this.camera);
        //添加控制器
        this.controler = new controlScene();
        this.addChild(this.controler);
        // console.log(this.controlBtn);
        //摇杆控制
        this.controler.controlBtn.addEventListener("cb_start", this.cb_handleStar, this);
        this.controler.controlBtn.addEventListener("cb_move", this.cb_handleMove, this);
        this.controler.controlBtn.addEventListener("cb_end", this.cb_handleEnd, this);
    };
    //帧事件
    gameScene.prototype.onenterFrame = function () {
        var testBox = this.scene.testBox;
        var result = this.scene.hitTest(this.scene.player, testBox);
        console.log(result);
        //边界判断不太合理
        result ? this.playerMove() : this.controlMoveX();
    };
    /*---------------摇杆事件--------------------------- */
    gameScene.prototype.cb_handleStar = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onenterFrame, this);
    };
    gameScene.prototype.cb_handleMove = function (e) {
        var angle = this.controler.controlBtn.angle;
        //根据角度计算运动速度
        this.scene.player.speedX = Math.cos(angle) * this.scene.player.speed;
        this.scene.player.speedY = Math.sin(angle) * this.scene.player.speed;
    };
    gameScene.prototype.cb_handleEnd = function () {
        this.scene.player.stopMove();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onenterFrame, this);
    };
    //虚拟摇杆控制角色
    gameScene.prototype.playerMove = function () {
        var rt = -(Math.atan2(100, 100)); //右上
        var lt = -(Math.atan2(100, -100)); //左上
        var lb = -(Math.atan2(-100, -100)); //左下
        var rb = -(Math.atan2(-100, 100)); //右下
        var angle = this.controler.controlBtn.angle;
        if (angle >= rb && angle < lb || angle >= lt && angle < rt) {
            //上下
            this.controlMoveY();
        }
        else {
            //左右
            this.controlMoveX();
        }
    };
    /*------------------摇杆事件结束------------------------- */
    //如果没到大背景边界   则是大背景移动   camera镜头偏移可以保持player一直在镜头中
    //如果到了边界   则是角色移动
    //角色移动逻辑判断
    gameScene.prototype.controlMoveX = function () {
        //判断大背景的边界  防止大背景跑出镜头
        if (this.camera.containerSideX(this.scene.player.speedX)) {
            this.scene.player.scale();
            //布吉岛为啥不play  调用到了函数但是不播放动画
            this.scene.player.playMC();
            this.camera.CameraMoveX(this.scene.player.speedX);
        }
        else {
            //防止角色走出镜头
            if (this.camera.cameraSideX(this.scene.player.speedX))
                this.scene.player.moveX();
        }
    };
    gameScene.prototype.controlMoveY = function () {
        //判断大背景的边界
        if (this.camera.containerSideY(this.scene.player.speedY)) {
            // this.m_follower.scale();
            this.scene.player.playMC();
            this.camera.CameraMoveY(this.scene.player.speedY);
        }
        else {
            //防止角色走出镜头
            if (this.camera.cameraSideY(this.scene.player.speedY))
                this.scene.player.moveY();
        }
    };
    return gameScene;
}(eui.Component));
__reflect(gameScene.prototype, "gameScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=gameScene.js.map