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
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        //存每个房间有啥
        _this.roomBox = [];
        //smallobj素材名字
        _this.textureArr = [];
        //子弹
        _this._bullet = [];
        return _this;
    }
    Scene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Scene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //碰撞检测 
    //检测player和物品 是否相交 
    //obj1 动物 obj2 静物
    Scene.prototype.hitTest = function (obj1, obj2) {
        var x1 = obj1.x;
        var y1 = obj1.y;
        if (this.checkAnchor(obj1)) {
            //movieclip的锚点是在中心的
            x1 = obj1.x - obj1.width / 2;
            y1 = obj1.y - obj1.height / 2;
        }
        var x2 = x1 + obj1.width;
        var y2 = y1 + obj1.height;
        var x0 = obj2.x - obj2.anchorOffsetX;
        var y0 = obj2.y - obj2.anchorOffsetY;
        if (x2 > x0 && x1 < (x0 + obj2.width)) {
            if (y2 > y0 && y1 < y0 + obj2.height) {
                return true;
            }
        }
        return false;
    };
    //碰撞检测
    //用来判断跳跃时是否落在楼梯等上的
    //检测obj1和obj2是否相交   
    //obj1 动物 obj2 静物
    //type 使用obj1的上端点还是下端点
    //"top"      上
    //"cbottom"   xy在中心的
    //"bottom"    xy在左上角的
    Scene.prototype.intersectTest = function (obj1, obj2) {
        var offsetY = 0;
        var offsetX = 0;
        if (this.checkAnchor(obj1)) {
            //这里动的主要是player  它的锚点是在中心的
            offsetY = obj1.height / 2;
        }
        else {
            offsetY = obj1.height;
            offsetX = obj1.width / 2;
        }
        var x1 = obj1.x - obj1.anchorOffsetX + offsetX;
        var y1 = obj1.y - obj1.anchorOffsetY + offsetY;
        var x2 = obj2.x - obj2.anchorOffsetX;
        var y2 = obj2.y - obj2.anchorOffsetY;
        if (y1 >= y2 && y1 < (y2 + obj2.height)) {
            if (x1 > x2 && x1 < (x2 + obj2.width)) {
                return true;
            }
        }
        return false;
    };
    //根据name获取组件
    //父容器   name
    Scene.prototype.getByName = function (parent, cName) {
        var arr = [];
        for (var i = 0; i < parent.numChildren; i++) {
            if (parent.getChildAt(i).name == cName)
                arr.push(parent.getChildAt(i));
        }
        return arr;
    };
    //判断obj与房间结构物体碰撞
    Scene.prototype.boxTest = function (obj) {
        //物体在group中的x y是相对他的父容器来说的 所以一直不变 
        //采用创建新物体的方式来计算x y
        var nowRoom = this.getChildAt(obj.roomNum);
        var testResult = [];
        //判断player运动（跳跃）过程中与哪些物体碰撞了  然后返回一个碰撞物体的数组
        for (var n = 0; n < nowRoom.numChildren; n++) {
            //原物体
            var oldBox = nowRoom.getChildAt(n);
            //新物体 计算xy
            var box = new egret.DisplayObject();
            box.x = nowRoom.x + oldBox.x;
            box.y = nowRoom.y + oldBox.y;
            box.width = oldBox.width;
            box.height = oldBox.height;
            box.anchorOffsetX = oldBox.anchorOffsetX;
            box.anchorOffsetY = oldBox.anchorOffsetY;
            box.name = oldBox.name;
            // if(obj.type == playType.box)
            // 	console.log(obj.y,box.y);
            //判断物体与player是否碰撞
            if (this.intersectTest(obj, box)) {
                testResult.push(box);
            }
        }
        return testResult;
    };
    //判断obj位置在哪个房间
    Scene.prototype.checkRoom = function (obj) {
        for (var i = 0; i < this.numChildren; i++) {
            if (this.getChildAt(i).name == "room") {
                //判断player哪个房间
                var result = this.intersectTest(obj, this.getChildAt(i));
                //如果返回值不是obj记录所在的房间 则修改
                if (result && obj.roomNum != i) {
                    //如果是躲藏者  则修改roomBox储存的
                    if (obj.type == playType.mouse) {
                        var checkBox = this.roomBox[obj.roomNum - 1];
                        // 从后面开始找比较快
                        for (var i_1 = checkBox.length - 1; i_1 >= 0; i_1--) {
                            if (checkBox[i_1] == obj) {
                                //在原来数组中删掉该物体
                                checkBox.splice(i_1, 1);
                                break;
                            }
                        }
                    }
                    // 所在的房间号
                    obj.roomNum = i;
                    this.roomBox[obj.roomNum - 1].push(obj);
                    break;
                }
            }
        }
    };
    //随机生成贴图
    Scene.prototype.random_texture = function () {
        var n1 = this.random(1, this.textureArr.length - 1);
        while (this.textureArr[n1].length < 1) {
            n1 = this.random(1, this.textureArr.length - 1);
        }
        var n2 = this.random(0, this.textureArr[n1].length - 1);
        return { a: n1, b: n2 };
    };
    //随机生成房间号
    Scene.prototype.random_roomnum = function () {
        return this.random(1, this.rooms);
    };
    //player生成随机位置
    Scene.prototype.random_position = function () {
        var n = this.random_roomnum();
        var nowRoom = this.getChildAt(n);
        var x0 = this.random(nowRoom.x, nowRoom.x + nowRoom.width - 50);
        var y0 = nowRoom.y + nowRoom.height - 80;
        return { x: x0, y: y0, nr: n };
    };
    //根据房间生成的随机位置  主要是物品
    Scene.prototype.random_roomposition = function (n) {
        if (n == undefined)
            n = this.random_roomnum();
        var nowRoom = this.getChildAt(n);
        var nowBox = nowRoom.getChildAt(this.random(0, nowRoom.numChildren - 1));
        var x0 = this.random(nowRoom.x + nowBox.x, nowRoom.x + nowBox.x + nowBox.width);
        var y0 = nowRoom.y + nowBox.y;
        return { x: x0, y: y0, nr: n };
    };
    //生成随机数
    Scene.prototype.random = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    Scene.prototype.checkAnchor = function (obj) {
        //锚点在中心（是检测不出来的那种 主要是影片剪辑）
        if (obj.type == playType.cat)
            return true;
        //锚点在左上角（大部分）
        return false;
    };
    return Scene;
}(eui.Component));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map