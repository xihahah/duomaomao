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
	static engine:MatchvsEngine = new MatchvsEngine();
    //接口调用返回对象
    static response:MatchvsResponse = new MatchvsResponse();

}