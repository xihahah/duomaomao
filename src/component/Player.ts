class Player extends egret.MovieClip{
	//初始速度
	speed;
	//水平速度
	speedX:number; 
	//竖直速度（跳跃高度）
	speedY:number; 
	//运动方向  正为右   下为正  上为负
	direcion;
	//x y 方向运动状态 
	// stay 静止 left 向左 right 向右 up 向上 down 向下
	statusX:string;

	public constructor(data,txtr) {
        let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		super(mcFactory.generateMovieClipData( "猫猫动画" ));

		//初始化player的速度等
		this.init();
	}

	init(){
		this.speed = 10;
		this.speedX = 0;
		this.speedY = 0;
		this.direcion = [1,-1];
		this.statusX = "stay";
		this.scaleX = 1;
		//设置锚点
		// this.anchorOffsetX = this.width/2;
		// this.anchorOffsetY = this.height/2;
		// console.log(this.anchorOffsetX,this.anchorOffsetY);
	}
	
	//角色转向时翻转
	scale(){
		this.scaleX = (this.speedX>0?-1:1);
	}

	//player左右移动
	moveX(){
		this.playMC();
		this.scale();
		this.x += this.speedX;
	}

	//上下移动
	moveY(){
		this.playMC();
		this.y += this.speedY;
	}
	//静止时
	stopMove(){
		// console.log("stop");
		this.speedX = 0;
		this.speedY = 0;
		this.gotoAndStop(0);
	}
	//播放动画
	playMC(){
		// console.log("play");
		this.gotoAndPlay(0,-1);
	}
	// hitTest(x,y){
	// 	return this.hitTestPoint(x,y);
	// }
	
}