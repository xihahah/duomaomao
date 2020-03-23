class Main extends eui.UILayer {

    // private matchvs: MsEngine;

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            // 加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }
    private scene = new startScene();
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        
        this.addChild(new gameScene());

        // //以下联机功能
        // this.addChild(this.scene);

        // //初始化完成后的回调函数
        // GameData.response.initResponse = this.initRespone;
        // //注册成功的回调
        // GameData.response.registerUserResponse = this.registerRespone;
        // //登录回调
        // GameData.response.loginResponse = this.loginResponse;
        // //加入房间回调 包括随机和不随机
        // GameData.response.joinRoomResponse = this.joinResponse;
        // //初始化
        // GameData.engine.init(GameData.response,GameData.channel,GameData.environment.dev,GameData.GameID,GameData.Appkey,GameData.GameVersion);
    }

    //初始化回调
   protected initRespone = (status:number)=>{
        if(status == 200){
                this.scene.setText("初始化成功");
                //注册用户
                GameData.engine.registerUser();
            }else{
                this.scene.setText("初始化失败");
            }
            
    }

    //注册回调
    protected registerRespone = (user:MsRegistRsp)=>{
        if(user.status == 0){
            this.scene.setText("注册成功！");
            this.scene.setUser(user);
            GameData.engine.login(user.id,user.token,"deviceID");
        }else{
            this.scene.setText("注册失败！");
        }
        
    }

    //登录回调
    protected loginResponse = (loginRsp:MsLoginRsp)=>{
        if(loginRsp.status == 200 ){
            this.scene.setText("登陆成功！");
        }else{
            this.scene.setText("登陆失败！");
        }
    }

    //加入房间回调 包括随机和不随机
    protected joinResponse = (status:number, roomUserInfoList:Array<MsRoomUserInfo>, roomInfo:MsRoomInfo)=>{
        if(status == 200){
            this.scene.setText("已加入房间");
            this.scene.setText(roomInfo.roomID);
        }else{
            this.scene.setText("加入失败，请重试");
        }
    }
}
