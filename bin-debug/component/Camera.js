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
//摄像机
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera(width, height) {
        var _this = _super.call(this) || this;
        _this.m_width = width;
        _this.m_height = height;
        _this.m_cameraOffsetX = 0;
        _this.m_cameraOffsetY = 0;
        return _this;
    }
    Camera.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Camera.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //初始化相机 绑定镜头
    Camera.prototype.init = function (container) {
        this.m_container = container;
        this.m_zoomX = this.m_container.x;
        this.m_zoomY = this.m_container.y;
    };
    /**设置镜头锚点
         * LRRate 左右比例
         * UDRate 上下比例
         * 根据左右及上下的比例确定镜头的聚焦点
         *     scale是根据锚点来缩放的 所以
        */
    // setAnchor(LRRate:number, UDRate:number){
    // 	if(this.m_container != null){
    // 		//锚点位置  
    // 		// this.m_container.anchorOffsetX = this.m_container.width * LRRate;
    // 		// this.m_container.anchorOffsetY = this.m_container.height * UDRate;
    // 		// this.m_container.x = this.m_container.anchorOffsetX;
    // 		// this.m_container.y = this.m_container.anchorOffsetY;
    // 		// this.m_zoomX = this.m_container.anchorOffsetX;
    // 		// this.m_zoomY = this.m_container.anchorOffsetY;
    // 	}
    // }
    Camera.prototype.setAnchor = function () {
        if (this.m_container != null) {
            this.setPosition();
            //设置焦点
            this.m_zoomX = this.m_follower.x;
            this.m_zoomY = this.m_follower.y;
        }
    };
    //设置scene位置
    Camera.prototype.setPosition = function () {
        // console.log(this.m_follower.roomNum);
        var nowRoom = this.m_container.getChildAt(this.m_follower.roomNum);
        var topY = nowRoom.y;
        var bottomY = topY + nowRoom.height - this.m_height;
        var leftX = nowRoom.x;
        var rightX = leftX + nowRoom.width - this.m_width;
        //设置场景位置
        var targetX = this.m_follower.x - this.m_width / 2;
        //暂时
        var targetY = this.m_follower.y - this.m_height / 2;
        //计算x
        if (targetX < leftX) {
            targetX = leftX;
        }
        else if (targetX > rightX) {
            targetX = rightX;
        }
        //计算y
        if (targetY < topY) {
            targetY = topY;
        }
        else if (targetY > bottomY) {
            targetY = bottomY;
        }
        this.m_container.x = -targetX;
        this.m_container.y = -targetY;
    };
    /**设置镜头焦距
     zoom 焦距，镜头距离世界的比例，默认为1，焦距越小，视觉越大
        */
    Camera.prototype.setZoom = function (zoom) {
        if (this.m_container != null) {
            this.m_container.scaleX = zoom;
            this.m_container.scaleY = zoom;
        }
    };
    //旋转  rotation 旋转角度
    Camera.prototype.setRotation = function (rotation) {
        if (this.m_container != null) {
            this.m_container.rotation = rotation;
        }
    };
    //设置跟随者 
    Camera.prototype.follow = function (follower) {
        if (this.m_container != null) {
            this.m_follower = follower;
            this.m_zoomX = this.m_follower.x;
            this.m_zoomY = this.m_follower.y;
            this.m_cameraOffsetY = this.m_follower.speedY;
            // this.setAnchor(this.m_follower.x / this.m_container.width, this.m_follower.y / this.m_container.height);
            this.setAnchor();
        }
    };
    //保持跟随者在中央
    Camera.prototype.followCenterX = function () {
        var left = this.x - this.m_container.x + this.m_width / 2 - 10;
        var right = this.x - this.m_container.x + this.m_width / 2 + 10;
        if ((this.m_cameraOffsetX > 0 && this.m_follower.x > right) || (this.m_cameraOffsetX < 0 && this.m_follower.x < left))
            return true;
        else
            return false;
    };
    //对外方法 相机移动
    Camera.prototype.cameraMove = function () {
        this.m_cameraOffsetX = this.m_follower.speedX * this.m_follower.dir;
        this.addEventListener(egret.Event.ENTER_FRAME, this.move, this);
    };
    //停止移动
    Camera.prototype.cStopMove = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.move, this);
    };
    //////////////////////////////////////////摄像机更新方法///////////////////////
    //下落改进
    Camera.prototype.cameraFall = function () {
        var nowRoom = this.m_container.getChildAt(this.m_follower.roomNum);
        //不变的
        var plane = nowRoom.y + nowRoom.height; // - this.scene.player.height/2-10
        //camera位置
        var camera = this.y - this.m_container.y;
        var player = this.m_follower;
        var l2 = Math.round(this.y + this.m_height / 3 * 2 - this.m_container.y);
        //相机偏移   
        //当符合条件  且player不是跳跃时  相机可以下移
        if (camera < plane - this.m_height && player.y > l2) {
            this.m_container.y -= this.m_cameraOffsetY;
        }
    };
    //上移
    //修正镜头位置   主要是跳跃时上移
    Camera.prototype.cameraUp = function () {
        var nowRoom = this.m_container.getChildAt(this.m_follower.roomNum);
        var rTop = nowRoom.y;
        var rBottom = nowRoom.y + nowRoom.height;
        var target = this.m_follower.y;
        var l1 = Math.round(this.y + this.m_height / 3 - this.m_container.y);
        var l2 = Math.round(this.y + this.m_height / 3 * 2 - this.m_container.y);
        var l3 = Math.round(this.y + this.m_height - this.m_container.y);
        if (target < l1) {
            // console.log("上");
            //如果到顶了
            var y1 = this.y - this.m_container.y - rTop < l2 - this.m_follower.y ? this.y - this.m_container.y - rTop : l2 - this.m_follower.y;
            egret.Tween.get(this.m_container).to({
                y: this.m_container.y + y1
            }, 500);
        }
        // else if(target< l2){
        // 	console.log("中");
        // }else if(target< l3){
        // 	console.log("下");
        // 	if(l3 < rBottom){
        // 		let y = rBottom-l3;
        // 		this.camera.CameraMoveY(10);
        // 		// this.scene.player.y -= 10;
        // 	}
        // };
    };
    //相机左右移动
    Camera.prototype.move = function () {
        var sceneLeft = this.m_container.x;
        var sceneRight = sceneLeft + this.m_container.width;
        //camera是静止的  
        var left = 0;
        var right = this.m_width;
        // let player = this.m_follower;
        //相机偏移   右 左
        if ((this.m_cameraOffsetX > 0 && sceneRight > right && this.followCenterX()) || (this.m_cameraOffsetX < 0 && sceneLeft < left && this.followCenterX())) {
            this.m_container.x -= this.m_cameraOffsetX;
        }
        // this.dispatchEvent(new egret.Event("carema_movex"));
    };
    return Camera;
}(eui.Component));
__reflect(Camera.prototype, "Camera", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Camera.js.map