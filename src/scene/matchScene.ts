//匹配界面
class matchScene extends eui.Component implements  eui.UIComponent {
	//返回
	backBtn;
	//跳过
	testBtn;
	rid;
	rowerID;
	rowerTX;
	rlTX;
	rlID;
	_matchvs:MsEngine;
	roomList = [];
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
		this.backBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.backMS,this);
		this.testBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.toGS,this);

        //自己加入房间收到回调 包括随机和不随机
        this._matchvs.response.joinRoomResponse = this.joinResponse;
		//其他人加入房间收到回调
		this._matchvs.response.joinRoomNotify = this.otherJoin;
	}

	backMS(){
		console.log("返回主界面");
		this.dispatchEvent(new egret.Event("backMain"));
	}
	toGS(){
		console.log("进入游戏界面");
		this.dispatchEvent(new egret.Event("toGame"));
	}

    //自己加入房间回调 包括随机和不随机
    protected joinResponse = (status:number, roomUserInfoList:Array<MsRoomUserInfo>, roomInfo:MsRoomInfo)=>{
        if(status == 200){
            console.log("已加入房间");
			console.log(roomUserInfoList)
            console.log(roomInfo);
			//自己加入房间时的列表生成
			// let rn = new eui.BitmapLabel();
			// rn.font = mainfont;
			// rn.text = roomInfo.roomID;
			// rn.y = 10;
			// rn.x = 221;
			// let group:any = this.getChildAt(3);
			// group.addChild(rn);

			this.rid.text = roomInfo.roomID;
			this.rowerID.text = this._matchvs.username;
			this.rowerTX.source = this._matchvs.useravatar;
			//加入房间时  如果房间里面已经有人  生成一下列表
			if(roomUserInfoList.length>0){
				let pro = roomUserInfoList[0].userProfile.split(',');
				let o = {};
				o['userID'] = roomUserInfoList[0].userId;
				o['username'] = pro[0];
				o['useravatar'] = pro[1];
				this.roomList.push(o);
				this.rlTX.source = o['useravatar'];
				this.rlID.text = o['username'];
			}
        }else{
            console.log("加入失败，请重试");
        }
    }
	//其他人加入房间
	protected otherJoin = (roomUserInfo:MsRoomUserInfo)=>{
            //当前所在的房间  新加入的成员生成列表
			console.log(roomUserInfo);
			let pro = roomUserInfo.userProfile.split(',');
			let o = {};
			o['userID'] = roomUserInfo.userId;
			o['username'] = pro[0];
			o['useravatar'] = pro[1];
			this.roomList.push(o);
			this.rlTX.source = o['useravatar'];
			this.rlID.text = o['username'];
        }
	
}