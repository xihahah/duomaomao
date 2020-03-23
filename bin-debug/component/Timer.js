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
//时间计算
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        return _super.call(this) || this;
    }
    Timer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Timer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this._text = new egret.BitmapText();
        this._text.font = timefont;
        this.addChild(this._text);
        this._text.x = 27;
        this._text.y = 10;
        this._timer = new egret.Timer(1000);
    };
    //开启计时器
    Timer.prototype.startTimer = function (n) {
        this._initTime = n;
        this.showText(this._initTime);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.start();
    };
    //开始计时
    Timer.prototype.onTimer = function () {
        if (this._initTime > 0) {
            this._initTime--;
            this.showText(this._initTime);
        }
        else {
            this.onComplete();
        }
    };
    //计时结束
    Timer.prototype.onComplete = function () {
        this._timer.stop();
        console.log("时间到！");
        this.setGameResult();
    };
    Timer.prototype.setGameResult = function () {
        if (!this._main.gameOver) {
            this._main.gameOver = true;
            var c = 0;
            var m = 0;
            var person = this._main.playerCollection.source;
            for (var i in person) {
                if (person[i].type == playType.cat) {
                    c += person[i].score;
                }
                else if (person[i].type == playType.mouse) {
                    m += person[i].score;
                }
            }
            // console.log(sc);
            this._main.winner = c > m ? playType.cat : playType.mouse;
            //判断当前player是否胜利
            new Result(this._main).showResult(this._main.winner == this._main.scene.player.type);
        }
    };
    //设置时间格式
    Timer.prototype.showText = function (t) {
        //分
        var m = Math.floor(t / 60);
        //秒
        var s = t - 60 * m;
        //时间不足
        if (m < 1 && s < 31) {
            this._text.font = timefontwarn;
        }
        this._text.text = m + ":" + s;
    };
    return Timer;
}(eui.Component));
__reflect(Timer.prototype, "Timer", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Timer.js.map