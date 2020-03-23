//贴纸类（mouse要完成的任务）
class Sticker extends eui.Component{
	//父对象
	_main;
	// 提示信息
	_tip;
	_tipr;
	//显示对象
	_displayView;
	//贴图
	_texture;
	//遮罩图形
	maskRect:eui.Rect;
	//房间信息
	roomNum;
	//碰撞的player的序号
	hitPerson;
	//用来比较的物品
	compareObj;
	//任务是否完成
	finish:boolean;
	value;
	public constructor(main) {
		super();
		this._main = main;
		this.anchorOffsetX = 0;
		this.anchorOffsetY = 0;
		this._tip = new eui.Image("tip");
		this.finish = false;
		this.value = GameData.gameconfig.rwscore;
	}
	//添加遮罩
	addMask(sc){
		//设置贴图
		this._displayView = new eui.Image();
		this._texture = sc;
		this._displayView.source = sc;
		this._displayView.width = sc.textureWidth;
		this._displayView.height = sc.textureHeight;
		this._displayView.x = 0;
		this._displayView.y = 0;
		this.width = this._displayView.width;
		this.height = this._displayView.height;
		//设置遮罩层
		this.maskRect = new eui.Rect(this._displayView.width,this._displayView.height,0x444242);  
		this.maskRect.mask = this._displayView;
		this.maskRect.x = 0;
		this.maskRect.y = 0;
		//添加到场景中
		this.addChild(this.maskRect);
		this.addChild(this._displayView);

		this.addEventListener(egret.Event.ENTER_FRAME,this.stickerHit,this);
	}
	//去除遮罩
	removeMask(){
		this.maskRect.mask = null;
		this.removeChild(this.maskRect);
		this.removeEventListener(egret.Event.ENTER_FRAME,this.stickerHit,this);
	}
	// 任务完成前显示的话
	showTip(){
		this.addChild(this._tip);
		this._tip.y = -this._tip.height;
		this._tip.x = -this._tip.width/2 + this._displayView.width/2;
	}
	//隐藏显示的话
	hidTip(){
		this.removeChild(this._tip);
	}
	//任务完成 显示结果
	showResult(){
		this._tipr = new eui.Image("tipr");
		this.addChild(this._tipr);
		this._tipr.y = -this._tipr.height;
		this._tipr.x = -this._tipr.width/2 + this._displayView.width/2;
		this.finish = true;

		let parent = this._main.parent;
		//叫他更新视图
		parent.stickerCollection.itemUpdated(this);
		
	}
	//跟player的碰撞检测
	stickerHit(){
		let parent:any = this._main.parent;
		let person = parent.playerCollection.source;
		//如果没有和player碰撞
		if(this.hitPerson == null){
			for(let p in person){
				if(this._main.hitTest(person[p],this)){
					if(person[p].type == playType.mouse){
						// 如果碰撞了  马上记住这个人的编号
						this.hitPerson = p;
						//如果他有携带物品 则记录下这个物品
						if(person[p].carryObj!=null){
							this.compareObj = person[p].carryObj;
						}
						// console.log(this.compareObj);
						this.showTip();
						break;
					}
				}
			};
		}else{//如果有player待在sticker位置上  判断player有没有离开
			// player放下了东西
				if(person[this.hitPerson].carryObj==null){
					if(this.compareObj!=null){
						//如果东西和本物品碰撞
						if(this._main.hitTest(this.compareObj,this)){
							//比较是不是对的东西  是的话就完成任务
							//如果贴图是吻合的
							if(this.compareObj._displayView.source == this._texture){
								//加分
								person[this.hitPerson].score += this.value;
								parent.scoreTip.addScoreTip(this.value);
								parent.playerCollection.itemUpdated(person[this.hitPerson]);
								this.removeMask();
								this.showResult();
								//因为player放下物品的时候 该物品就会添加在房间数组的末尾  所以直接删最后一个
								this._main.roomBox[this.compareObj.roomNum - 1].pop();
								//在场景中删除该物品
								this._main.removeChild(this.compareObj);
							};
						}
					}
				}
			//如果离开了
			if(!this._main.hitTest(person[this.hitPerson],this)){
				this.hidTip();
				this.hitPerson = null;
			}
		}
	}

	
}