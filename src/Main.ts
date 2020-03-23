class Main extends eui.UILayer {

 

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
            await RES.getResByUrl("resource/assets/images/scorefont.fnt", this.onLoadFont, this,RES.ResourceItem.TYPE_FONT);
            await RES.getResByUrl("resource/assets/images/timefont.fnt", this.onLoadTFont, this,RES.ResourceItem.TYPE_FONT);
            await RES.getResByUrl("resource/assets/images/timefonth.fnt", this.onLoadTWFont, this,RES.ResourceItem.TYPE_FONT);
            await RES.getResByUrl("resource/assets/images/mainfont.fnt", this.onLoadMFont, this,RES.ResourceItem.TYPE_FONT);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    //加载位图字体
    private onLoadFont(f){
        font = f;
    }
    private onLoadTFont(f){
        timefont = f;
    }
    private onLoadTWFont(f){
        timefontwarn = f;
    }
    private onLoadMFont(f){
        mainfont = f;
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



    // private scene = new startScene();
    private ms;
    private gs;
    private mcs;
    private matchvs: MsEngine;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {


        // 游戏界面
        // this.addChild(new gameScene);
        // this.createData();

        //联网
        this.matchvs = new MsEngine();

        this.ms = new mainScene(this.matchvs);
        this.mcs = new matchScene(this.matchvs);
        
        // //主界面
        this.addChild(this.ms);
        this.ms.addEventListener("toMatch",this.switchScene,this);
        
        //匹配界面
        this.mcs.addEventListener("backMain",this.backScene,this);
        this.mcs.addEventListener("toGame",this.createData,this);




    }

    async createData(){
        this.gs = new gameScene();
        this.addChild(this.gs);
        await this.gs.createGame()
        this.gs.init();
    }

    switchScene(){
        // this.removeChild(this.ms);
        this.addChild(this.mcs);
    }
     backScene(){
        this.ms.playTG();
        this.removeChild(this.mcs);
    }

//     //初始化回调
//    protected initRespone = (status:number)=>{
//         if(status == 200){
//                 this.scene.setText("初始化成功");
//                 //注册用户
//                 GameData.engine.registerUser();
//             }else{
//                 this.scene.setText("初始化失败");
//             }
            
//     }

//     //注册回调
//     protected registerRespone = (user:MsRegistRsp)=>{
//         if(user.status == 0){
//             this.scene.setText("注册成功！");
//             this.scene.setUser(user);
//             GameData.engine.login(user.id,user.token,"deviceID");
//         }else{
//             this.scene.setText("注册失败！");
//         }
        
//     }

//     //登录回调
//     protected loginResponse = (loginRsp:MsLoginRsp)=>{
//         if(loginRsp.status == 200 ){
//             this.scene.setText("登陆成功！");
//         }else{
//             this.scene.setText("登陆失败！");
//         }
//     }

//     //加入房间回调 包括随机和不随机
//     protected joinResponse = (status:number, roomUserInfoList:Array<MsRoomUserInfo>, roomInfo:MsRoomInfo)=>{
//         if(status == 200){
//             this.scene.setText("已加入房间");
//             this.scene.setText(roomInfo.roomID);
//         }else{
//             this.scene.setText("加入失败，请重试");
//         }
//     }
}
