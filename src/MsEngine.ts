class MsEngine {
	 //接口请求调用对象
	engine:MatchvsEngine;
	//接口调用返回对象
    response:MatchvsResponse;
	username;
	userid;
	useravatar;
	protected usertoken;

	public constructor() {
		this.engine = new MatchvsEngine();
		this.response = new MatchvsResponse();
		 //初始化完成后的回调函数
        this.response.initResponse = this.initRespone;
        //注册成功的回调
        this.response.registerUserResponse = this.registerRespone;

        //初始化
        this.engine.init(this.response,GameData.channel,GameData.environment.dev,GameData.GameID,GameData.Appkey,GameData.GameVersion);
	}

	/* -----------------------回调监听--------------------- */
	 //初始化回调
   protected initRespone = (status:number)=>{
        if(status == 200){
                console.log("初始化成功");
                //注册用户
                this.engine.registerUser();
            }else{
                console.log("初始化失败");
            }
            
    }

    //注册回调
    protected registerRespone = (user:MsRegistRsp)=>{
        if(user.status == 0){
            console.log("注册成功！");
			this.username = user.name;
			this.usertoken = user.token;
			this.userid = user.userID;
			this.useravatar = user.avatar;
			this.login();
        }else{
            console.log("注册失败！");
        }
        
    }

    //登录回调
    protected loginResponse = (loginRsp:MsLoginRsp)=>{
        if(loginRsp.status == 200 ){
            console.log("登陆成功！");
        }else{
            console.log("登陆失败！");
        }
    }

	/* -----------------------回调监听结束--------------------- */


	/* -----------------------功能部分--------------------- */
	// 登录
	login(){
		console.log("登陆中");
        this.engine.login(this.userid,this.usertoken,"deviceID");
        
	}
	//随机加入房间
	randomJoin(){
		let ifo = this.username + ","+this.useravatar;
		// 最大人数  玩家简介
		this.engine.joinRandomRoom(4,ifo);
	}

	/* -----------------------功能结束--------------------- */
}