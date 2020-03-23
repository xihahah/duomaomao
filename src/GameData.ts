class GameData {
	// 使用static定义的属性  要直接从类调用  而不能在实例中调用
	static channel = "Matchvs";
	// 环境  本地调试/发布上线
	static environment = {dev:"alpha",pro:"release"}
	// matchvs中的游戏信息
	static GameID:number = 217622;
	static Appkey:string = "fe20841e73df41d794f15891c940a306#E";
	static Secret:string = "233020558933484a97895e34eaf1589a";
	//版本号
	static GameVersion:number = 1.0;
	 //接口请求调用对象
	// static engine:MatchvsEngine = new MatchvsEngine();
    //接口调用返回对象
    // static response:MatchvsResponse = new MatchvsResponse();
	//舞台大小
	static stageWidth:number = 1136;
	static stageHeight:number = 640;
	//游戏数据
	static gameconfig = {
		bNum:20,	//对象池中的子弹数
		bwidth:30,	//子弹宽度
		bheight:30,	//子弹高度
		pNum:4,		//创建player数
		pspeedx:10,		//player水平速度
		pspeeedy:10,	//player下落速度
		pjumpspeed:150,	//player跳跃高度
		sNum:4,			//贴纸数
		rwscore:75,		//任务分值
		catchscore:100,	//找到一个躲藏者得分
	}
	//固定物体类型
	static fixedType = {
		room:"room",		//房间
		nfloor:"newFloor",	//新的楼层
	}
}

//扮演的类型
enum playType{
	cat,		//seek person 抓人的
	mouse,		//hid person  躲藏的
	box,		//普通物品
}
//字体
var font;
var timefont;
var timefontwarn;
var mainfont;
// 生成的游戏数据
var gamedata = {}