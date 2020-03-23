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
        //键盘控制
        // document.addEventListener("keydown",e=>this.handleKeydown(e),false);
        // document.addEventListener("keyup",()=>this.handleKeyup(),false);
        // //摇杆控制
        // this.controlBtn.addEventListener("cb_start",this.cb_handleStar,this);
        // this.controlBtn.addEventListener("cb_move",this.cb_handleMove,this);
        // this.controlBtn.addEventListener("cb_end",this.cb_handleEnd,this);
    };
    //初始化相机 绑定镜头
    Camera.prototype.init = function (container) {
        this.m_container = container;
        this.m_zoomX = this.m_container.x;
        this.m_zoomY = this.m_container.y;
    };
    // onenterFrame(){
    // 	this.playerMove();
    // 	// this.m_container.info();
    // 	let testBox = this.m_container.testBox;
    // 	console.log(this.hitTest(testBox,this.m_follower));
    // }
    /**设置镜头锚点
         * LRRate 左右比例
         * UDRate 上下比例
         * 根据左右及上下的比例确定镜头的聚焦点
        */
    // setAnchor(LRRate:number, UDRate:number){
    // 	if(this.m_container != null){
    // 		//锚点位置
    // 		this.m_container.anchorOffsetX = this.m_container.width * LRRate;
    // 		this.m_container.anchorOffsetY = this.m_container.height * UDRate;
    // 			this.m_container.x = this.m_container.anchorOffsetX;
    // 			this.m_container.y = this.m_container.anchorOffsetY;
    // 			this.m_zoomX = this.m_container.anchorOffsetX;
    // 			this.m_zoomY = this.m_container.anchorOffsetY;
    // 	}
    // }
    Camera.prototype.setAnchor = function () {
        if (this.m_container != null) {
            var topY = 0;
            var bottomY = this.m_height - this.m_container.height; //-1060
            var leftX = 0;
            var rightX = this.m_width - this.m_container.width; //-
            //设置场景位置
            if (this.m_width / 2 - this.m_follower.x > leftX) {
                // console.log("最左边");
                this.m_container.x = leftX;
            }
            else if (this.m_width / 2 - this.m_follower.x > rightX) {
                // console.log("最中间");
                this.m_container.x = this.m_width / 2 - this.m_follower.x;
            }
            else {
                // console.log("最右边");
                this.m_container.x = rightX;
            }
            if (this.m_height / 2 - this.m_follower.y > topY) {
                // console.log("最上边");
                this.m_container.y = topY;
            }
            else if (this.m_height / 2 - this.m_follower.y > bottomY) {
                // console.log("最中间");
                this.m_container.y = this.m_height / 2 - this.m_follower.y;
            }
            else {
                // console.log("最下边");
                this.m_container.y = bottomY;
            }
            //设置焦点
            this.m_zoomX = this.m_follower.x;
            this.m_zoomY = this.m_follower.y;
        }
    };
    /**设置镜头焦距
     zoom 焦距，镜头距离世界的比例，默认为1，焦距越小，视觉越大
        */
    Camera.prototype.setZoom = function (zoom) {
        // console.log(this.m_container.width + "  " + this.m_container.height );
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
            // this.setAnchor(this.m_follower.x / this.m_container.width, this.m_follower.y / this.m_container.height);
            this.setAnchor();
        }
    };
    //保持跟随者在中央
    Camera.prototype.followCenter = function () {
        var centerX = (this.m_width - this.m_follower.width) / 2;
        var centerY = (this.m_height - this.m_follower.height) / 2;
        if (this.m_follower.x != centerX)
            return false;
        else
            return true;
    };
    //摄像机移动时   player位置不动
    //摄像机边界   防止角色走出镜头   
    Camera.prototype.cameraSideX = function (speed) {
        var targetX = this.m_follower.x + speed;
        //防止targetx不在中间
        var left = (this.m_zoomX - this.m_width / 2) < 0 ? 0 : (this.m_zoomX - this.m_width / 2);
        var right = (this.m_zoomX + this.m_width / 2) > this.m_container.width ? this.m_container.width : (this.m_zoomX + this.m_width / 2);
        if (targetX < left + this.m_follower.width / 2) {
            //左边界
            return false;
        }
        else if (targetX > right - this.m_follower.width / 2) {
            //右边界
            return false;
        }
        else {
            return true;
        }
    };
    Camera.prototype.cameraSideY = function (speed) {
        var targetY = this.m_follower.y + speed;
        //防止targety不在中间  在偏下或者偏上位置
        var top = (this.m_zoomY - this.m_height / 2) < 0 ? 0 : this.m_zoomY - this.m_height / 2;
        var bottom = (this.m_zoomY + this.m_height / 2) > this.m_container.height ? this.m_container.height : (this.m_zoomY + this.m_height / 2);
        if (targetY < top) {
            //上边界
            return false;
        }
        else if (targetY > bottom - this.m_follower.height / 3 * 2) {
            //下边界
            return false;
        }
        else {
            return true;
        }
    };
    //摄像机X轴移动的有向速度
    Camera.prototype.CameraMoveX = function (x) {
        // console.log("camera move x");
        this.m_cameraOffsetX = x;
        this.CameraUpdate();
        this.m_cameraOffsetX = 0;
    };
    //摄像机Y轴移动的有向速度
    Camera.prototype.CameraMoveY = function (y) {
        // console.log("camera move y");
        this.m_cameraOffsetY = y;
        this.CameraUpdate();
        this.m_cameraOffsetY = 0;
    };
    //判断整个场景的边界
    //x方向边界判断
    Camera.prototype.containerSideX = function (speed) {
        var leftX = 0;
        var rightX = this.m_width - this.m_container.width; //-
        //设置场景位置
        var targetX = this.m_container.bg1.x - speed;
        if (targetX > leftX) {
            this.m_container.bg1.x = leftX;
            return false;
        }
        else if (targetX < rightX) {
            this.m_container.bg1.x = rightX;
            return false;
        }
        else {
            return true;
        }
    };
    //y方向边界判断
    Camera.prototype.containerSideY = function (speed) {
        var topY = this.m_container.height - this.m_height; //1050
        var bottomY = 0; //0
        var targetY = this.m_container.bg1.y - speed;
        if (targetY > topY) {
            this.m_container.bg1.y = topY;
            return false;
        }
        else if (targetY < bottomY) {
            this.m_container.bg1.y = bottomY;
            return false;
        }
        else {
            return true;
        }
    };
    /**通过摄像头偏移值计算世界内物品的偏移值
     * 如果设置了跟随者，则跟随者在世界内的距离不变，其他物体根据镜头偏移量进行坐标修正
     * 如果没有设置跟随者，则视世界全局可见，全员根据镜头偏移量进行坐标修正
     * 注意1：摄像机移动的实现方式实际是世界内物品相对于世界进行的坐标的移动，但世界本身是固定的，变化的只是世界内部的物体
     * 注意2:实际上，这里的坐标修正应该交给各个世界对象去自行实现，以便各物体对象能以此修正自身的行为，这里为了形成一个
     * 统一的认识而把偏移的工作放进摄像机，就造成摄像机的功能比较单一的问题
    */
    Camera.prototype.CameraUpdate = function () {
        for (var i = 0; i < this.m_container.numChildren; i++) {
            if (this.m_follower != null) {
                //设置了跟随者
                if (this.m_follower != this.m_container.getChildAt(i)) {
                    this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
                    this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
                }
            }
            else {
                //没有设置跟随者
                this.m_container.getChildAt(i).x -= this.m_cameraOffsetX;
                this.m_container.getChildAt(i).y -= this.m_cameraOffsetY;
            }
        }
    };
    return Camera;
}(eui.Component));
__reflect(Camera.prototype, "Camera", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Camera.js.map