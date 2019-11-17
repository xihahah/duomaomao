class startScene extends eui.Component implements  eui.UIComponent {
    //打印日志
    protected logText: eui.Label;
	protected userAvatar: eui.Image;
	protected userId: eui.Label;
	protected userName: eui.Label;
	//随机加入房间
	protected randomBtn: eui.Button;
	//加入指定房间
	protected joinBtn: eui.Button;
	protected joinRoom: eui.Group;
	protected joinId: eui.TextInput;
	protected joinRoomBtn: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.joinBtn.addEventListener("touchTap",this.showJoinPanel,this);
		this.joinRoomBtn.addEventListener("touchTap",this.handleClose,this);
		this.randomBtn.addEventListener("touchTap",this.randomJoin,this);
	}

	//输出日志
	setText(str:string){
		this.logText.text += str + "\n";
	}

	//设置用户信息
	setUser(user){
		this.userAvatar.source = user.avatar;
		this.userId.text = user.id;
		this.userName.text = user.name;
	}

//加入指定房间
	protected showJoinPanel(){
		//输入房间id面板
		this.joinRoom.visible = true;
	}

//输入房间id后点确定
	protected handleClose(){
		if(this.joinId.text != ""){
			console.log(this.joinId.text);
			this.joinId.text = "";
		}
		this.joinRoom.visible = false;
	}

	//随机加入房间
	protected randomJoin(){
		// 最大人数  玩家简介
		GameData.engine.joinRandomRoom(3,"hi");
	}
}