//游戏主界面
class mainScene extends eui.Component implements  eui.UIComponent {
	yun;
	startBtn;
	utx;
	uid;
	uname;
	_matchvs:MsEngine;
	public constructor(ms) {
		super();
		this._matchvs = ms;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		// console.log(this);
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.start,this);
		this.playTG();
        //登录回调
        this._matchvs.response.loginResponse = this.loginResponse;
	}
	
	 //登录回调
    protected loginResponse = (loginRsp:MsLoginRsp)=>{
        if(loginRsp.status == 200 ){
            console.log("登陆成功！");
			//字体修改
			let un = new eui.BitmapLabel();
			un.font = mainfont;
			un.text = this._matchvs.username;
			un.y = 38;
			un.x = 166.5;
			let group:any = this.getChildAt(7);
			group.addChild(un);

			let ui = new eui.BitmapLabel();
			ui.font = mainfont;
			ui.text = this._matchvs.userid;
			ui.y = 2;
			ui.x = 144;
			group.addChild(ui);
			// 设置用户信息
			// this.uname.text = this._matchvs.username;
			// this.uid.text = this._matchvs.userid;
			this.utx.source = this._matchvs.useravatar;
        }else{
            console.log("登陆失败！");
        }
    }
	
	private start(){
		console.log("开始匹配!");
		this.stopTG();
		this._matchvs.randomJoin();
		this.dispatchEvent(new egret.Event("toMatch"));
	}

	//播放TweenGroup动画 （实现循环播放）
	playTG(){
		this.yun.addEventListener("complete",this.replay,this);
		this.yun.play();
	}
	stopTG(){
		this.yun.removeEventListener("complete",this.replay,this);
	}
	private replay(){
		this.yun.play(0);
	}
}