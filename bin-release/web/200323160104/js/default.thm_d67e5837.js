window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","startScene":"resource/scene/startScene.exml","gameScene":"resource/scene/gameScene.exml","player":"resource/component/player.exml","Camera":"resource/component/Camera.exml","scene1":"resource/component/scene1.exml","Controler":"resource/component/Controler.exml","controlScene":"resource/component/controlScene.exml","mainScene":"resource/scene/mainScene.exml","matchScene":"resource/scene/matchScene.exml","Timer":"resource/component/Timer.exml","renwu":"resource/component/renwu.exml","miniPlayer":"resource/component/miniPlayer.exml","Score":"resource/component/Score.exml"};generateEUI.paths['resource/component/Camera.exml'] = window.CameraSkin = (function (_super) {
	__extends(CameraSkin, _super);
	function CameraSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 640;
		this.width = 1136;
	}
	var _proto = CameraSkin.prototype;

	return CameraSkin;
})(eui.Skin);generateEUI.paths['resource/component/miniPlayer.exml'] = window.miniPlayerSkin = (function (_super) {
	__extends(miniPlayerSkin, _super);
	function miniPlayerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 99;
		this.width = 211;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = miniPlayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tubiao_json.cat";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 48;
		t.x = 46.5;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.name = "no";
		t.source = "tubiao_json.mouse";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.name = "die";
		t.source = "tubiao_json.moused";
		t.visible = false;
		t.x = -2;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 48;
		t.x = 95.5;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.name = "no";
		t.source = "tubiao_json.mouse";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.name = "die";
		t.source = "tubiao_json.moused";
		t.visible = false;
		t.x = -2;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 48;
		t.x = 143.5;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.name = "no";
		t.source = "tubiao_json.mouse";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.name = "die";
		t.source = "tubiao_json.moused";
		t.visible = false;
		t.x = -2;
		t.y = 0;
		return t;
	};
	return miniPlayerSkin;
})(eui.Skin);generateEUI.paths['resource/component/renwu.exml'] = window.renwuSkin = (function (_super) {
	__extends(renwuSkin, _super);
	function renwuSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 62;
		this.width = 246;
		this.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
	}
	var _proto = renwuSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.width = 58;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.name = "no";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.renh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.name = "ok";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.ren";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.width = 58;
		t.x = 56;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.name = "no";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.renh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.name = "ok";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.ren";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.width = 58;
		t.x = 112;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.name = "no";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.renh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.name = "ok";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.ren";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.width = 58;
		t.x = 168;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.name = "no";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.renh";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.name = "ok";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tubiao_json.ren";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return renwuSkin;
})(eui.Skin);generateEUI.paths['resource/component/scene1.exml'] = window.scene1Skin = (function (_super) {
	__extends(scene1Skin, _super);
	function scene1Skin() {
		_super.call(this);
		this.skinParts = ["bg"];
		
		this.height = 1700;
		this.width = 4000;
		this.elementsContent = [this.bg_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
	}
	var _proto = scene1Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 1700;
		t.name = "bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s1bg_png";
		t.width = 4000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 824.61;
		t.name = "room";
		t.width = 1604.21;
		t.x = 0;
		t.y = 874.42;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i(),this._Rect10_i(),this._Rect11_i(),this._Rect12_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 26.67;
		t.strokeAlpha = 1;
		t.width = 85;
		t.x = 344.67;
		t.y = 625.91;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 26.67;
		t.strokeAlpha = 1;
		t.width = 85;
		t.x = 947.85;
		t.y = 625.91;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 17.67;
		t.strokeAlpha = 1;
		t.width = 511;
		t.x = 433.35;
		t.y = 668.91;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 26.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 287;
		t.x = 380.11;
		t.y = 486.25;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 26.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 287;
		t.x = 702.68;
		t.y = 483.25;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 18.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 222;
		t.x = 0;
		t.y = 304.08;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 17.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 239;
		t.x = 0;
		t.y = 161.5;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 20.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 274;
		t.x = 581.17;
		t.y = 187.5;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 218;
		t.x = 375.01;
		t.y = 318.75;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 16.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 206;
		t.x = 804.11;
		t.y = 322.09;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 205;
		t.x = 1196.11;
		t.y = 645.25;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 18.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 222;
		t.x = 0;
		t.y = 450.58;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 18.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 222;
		t.x = 0;
		t.y = 597.25;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 18.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 222;
		t.x = 0;
		t.y = 722.58;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 1628.33;
		t.x = 0;
		t.y = 800.58;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1698.5;
		t.name = "room";
		t.width = 688;
		t.x = 1607.5;
		t.y = 1;
		t.elementsContent = [this._Rect16_i(),this._Rect17_i(),this._Rect18_i(),this._Rect19_i(),this._Rect20_i(),this._Rect21_i(),this._Rect22_i(),this._Rect23_i(),this._Rect24_i(),this._Rect25_i(),this._Rect26_i(),this._Rect27_i(),this._Rect28_i(),this._Rect29_i(),this._Rect30_i(),this._Rect31_i(),this._Rect32_i(),this._Rect33_i(),this._Rect34_i(),this._Rect35_i(),this._Rect36_i(),this._Rect37_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 249.33;
		t.x = 400.67;
		t.y = 1582;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 259.33;
		t.x = 94.7;
		t.y = 1430.17;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 278.33;
		t.x = 94.7;
		t.y = 1546;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 237.33;
		t.x = 94.7;
		t.y = 1328.67;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 24;
		t.strokeAlpha = 1;
		t.width = 780.83;
		t.x = -24.5;
		t.y = 1675;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 264.33;
		t.x = 373.03;
		t.y = 1416.67;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 277.33;
		t.x = 360.03;
		t.y = 1258.67;
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 213.33;
		t.x = 430.67;
		t.y = 701.58;
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 184.33;
		t.x = 436.67;
		t.y = 554.58;
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.strokeAlpha = 1;
		t.width = 293.33;
		t.x = 121.2;
		t.y = 568.58;
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 13;
		t.strokeAlpha = 1;
		t.width = 437.33;
		t.x = 125.86;
		t.y = 406.58;
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 13;
		t.strokeAlpha = 1;
		t.width = 437.33;
		t.x = 125.33;
		t.y = 261.58;
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 13;
		t.strokeAlpha = 1;
		t.width = 437.33;
		t.x = 125.86;
		t.y = 108.58;
		return t;
	};
	_proto._Rect29_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 17;
		t.strokeAlpha = 1;
		t.width = 231.33;
		t.x = 94.7;
		t.y = 1249.34;
		return t;
	};
	_proto._Rect30_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 17;
		t.strokeAlpha = 1;
		t.width = 220.33;
		t.x = 94.7;
		t.y = 1169;
		return t;
	};
	_proto._Rect31_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 15;
		t.strokeAlpha = 1;
		t.width = 209.33;
		t.x = 89.2;
		t.y = 1094.42;
		return t;
	};
	_proto._Rect32_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 15;
		t.strokeAlpha = 1;
		t.width = 192.33;
		t.x = 94.7;
		t.y = 1027.42;
		return t;
	};
	_proto._Rect33_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 15;
		t.strokeAlpha = 1;
		t.width = 192.33;
		t.x = 89.2;
		t.y = 967.42;
		return t;
	};
	_proto._Rect34_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 15;
		t.strokeAlpha = 1;
		t.width = 183.33;
		t.x = 89.2;
		t.y = 910.42;
		return t;
	};
	_proto._Rect35_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 15;
		t.strokeAlpha = 1;
		t.width = 183.33;
		t.x = 89.2;
		t.y = 856.58;
		return t;
	};
	_proto._Rect36_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 24;
		t.name = "newFloor";
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 81.33;
		t.x = -26.99;
		t.y = 841.75;
		return t;
	};
	_proto._Rect37_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 24;
		t.name = "newFloor";
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 461.33;
		t.x = 316.34;
		t.y = 844.58;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 826;
		t.name = "room";
		t.width = 1699.5;
		t.x = 2298.5;
		t.y = 874.42;
		t.elementsContent = [this._Rect38_i(),this._Rect39_i(),this._Rect40_i(),this._Rect41_i(),this._Rect42_i(),this._Rect43_i(),this._Rect44_i(),this._Rect45_i(),this._Rect46_i(),this._Rect47_i(),this._Rect48_i(),this._Rect49_i(),this._Rect50_i(),this._Rect51_i(),this._Rect52_i()];
		return t;
	};
	_proto._Rect38_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 1731.83;
		t.x = -36.5;
		t.y = 800.58;
		return t;
	};
	_proto._Rect39_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 1248;
		t.x = 172.42;
		t.y = 475.59;
		return t;
	};
	_proto._Rect40_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 17;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 1244;
		t.x = 172.42;
		t.y = 724.25;
		return t;
	};
	_proto._Rect41_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 926;
		t.x = 492.5;
		t.y = 568.75;
		return t;
	};
	_proto._Rect42_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 17;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 228;
		t.x = 693.42;
		t.y = 422.75;
		return t;
	};
	_proto._Rect43_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 212;
		t.x = 221;
		t.y = 297.75;
		return t;
	};
	_proto._Rect44_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 219;
		t.x = 216;
		t.y = 197.17;
		return t;
	};
	_proto._Rect45_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 247;
		t.x = 1437.5;
		t.y = 462.25;
		return t;
	};
	_proto._Rect46_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 251;
		t.x = 1433.5;
		t.y = 384.42;
		return t;
	};
	_proto._Rect47_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 257;
		t.x = 1429.5;
		t.y = 286.58;
		return t;
	};
	_proto._Rect48_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 212;
		t.x = 1472.5;
		t.y = 161;
		return t;
	};
	_proto._Rect49_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 43;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 13;
		t.x = 292.75;
		t.y = 594.25;
		return t;
	};
	_proto._Rect50_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 43;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 13;
		t.x = 338;
		t.y = 596.25;
		return t;
	};
	_proto._Rect51_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 12;
		t.x = 934.5;
		t.y = 637.25;
		return t;
	};
	_proto._Rect52_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 12;
		t.x = 970.5;
		t.y = 637.92;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 872.08;
		t.name = "room";
		t.width = 1604.06;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect53_i(),this._Rect54_i(),this._Rect55_i(),this._Rect56_i(),this._Rect57_i(),this._Rect58_i(),this._Rect59_i(),this._Rect60_i(),this._Rect61_i(),this._Rect62_i(),this._Rect63_i()];
		return t;
	};
	_proto._Rect53_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 1622.33;
		t.x = 0;
		t.y = 841.75;
		return t;
	};
	_proto._Rect54_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 20;
		t.strokeAlpha = 1;
		t.width = 583.33;
		t.x = 990.35;
		t.y = 603.08;
		return t;
	};
	_proto._Rect55_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 20;
		t.strokeAlpha = 1;
		t.width = 583.33;
		t.x = 990.35;
		t.y = 452.42;
		return t;
	};
	_proto._Rect56_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 20;
		t.strokeAlpha = 1;
		t.width = 583.33;
		t.x = 990.35;
		t.y = 319.08;
		return t;
	};
	_proto._Rect57_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 157.33;
		t.x = 529.17;
		t.y = 623.58;
		return t;
	};
	_proto._Rect58_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 129.33;
		t.x = 529.17;
		t.y = 717.58;
		return t;
	};
	_proto._Rect59_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 211.33;
		t.x = 747.68;
		t.y = 745.58;
		return t;
	};
	_proto._Rect60_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 91.33;
		t.x = 747.68;
		t.y = 605.58;
		return t;
	};
	_proto._Rect61_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 24;
		t.strokeAlpha = 1;
		t.width = 597.33;
		t.x = 989.68;
		t.y = 741.58;
		return t;
	};
	_proto._Rect62_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 432.33;
		t.x = 75.68;
		t.y = 640.58;
		return t;
	};
	_proto._Rect63_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 28;
		t.strokeAlpha = 1;
		t.width = 325.33;
		t.x = 0;
		t.y = 464.08;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 865.58;
		t.name = "room";
		t.width = 1699.97;
		t.x = 2299;
		t.y = 4.84;
		t.elementsContent = [this._Rect64_i(),this._Rect65_i(),this._Rect66_i(),this._Rect67_i(),this._Rect68_i(),this._Rect69_i(),this._Rect70_i(),this._Rect71_i(),this._Rect72_i(),this._Rect73_i(),this._Rect74_i(),this._Rect75_i(),this._Rect76_i(),this._Rect77_i(),this._Rect78_i(),this._Rect79_i(),this._Rect80_i(),this._Rect81_i(),this._Rect82_i(),this._Rect83_i(),this._Rect84_i(),this._Rect85_i(),this._Rect86_i(),this._Rect87_i(),this._Rect88_i()];
		return t;
	};
	_proto._Rect64_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 1725.33;
		t.x = -25.36;
		t.y = 839.24;
		return t;
	};
	_proto._Rect65_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 205;
		t.x = 254;
		t.y = 704.74;
		return t;
	};
	_proto._Rect66_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 205;
		t.x = 254;
		t.y = 760.74;
		return t;
	};
	_proto._Rect67_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 205;
		t.x = 254;
		t.y = 628.74;
		return t;
	};
	_proto._Rect68_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 477;
		t.y = 632.74;
		return t;
	};
	_proto._Rect69_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 661.42;
		t.y = 630.74;
		return t;
	};
	_proto._Rect70_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 853.5;
		t.y = 760.74;
		return t;
	};
	_proto._Rect71_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 237;
		t.x = 1397.5;
		t.y = 754.74;
		return t;
	};
	_proto._Rect72_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 853.5;
		t.y = 625.74;
		return t;
	};
	_proto._Rect73_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 849.25;
		t.y = 473.24;
		return t;
	};
	_proto._Rect74_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 853.5;
		t.y = 334.24;
		return t;
	};
	_proto._Rect75_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 663.31;
		t.y = 480.24;
		return t;
	};
	_proto._Rect76_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 476;
		t.y = 761.74;
		return t;
	};
	_proto._Rect77_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 174;
		t.x = 661.42;
		t.y = 760.74;
		return t;
	};
	_proto._Rect78_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 205;
		t.x = 254;
		t.y = 543.74;
		return t;
	};
	_proto._Rect79_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 205;
		t.x = 254;
		t.y = 443.58;
		return t;
	};
	_proto._Rect80_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 241;
		t.x = 0;
		t.y = 632.74;
		return t;
	};
	_proto._Rect81_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 247;
		t.x = 0.5;
		t.y = 765.74;
		return t;
	};
	_proto._Rect82_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 241;
		t.x = 0;
		t.y = 507.74;
		return t;
	};
	_proto._Rect83_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 241;
		t.x = 0.5;
		t.y = 320.24;
		return t;
	};
	_proto._Rect84_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 134;
		t.x = 1437;
		t.y = 443.58;
		return t;
	};
	_proto._Rect85_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 54;
		t.x = 1238;
		t.y = 438.08;
		return t;
	};
	_proto._Rect86_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 47;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 44;
		t.x = 1121;
		t.y = 506.74;
		return t;
	};
	_proto._Rect87_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 75;
		t.x = 1112;
		t.y = 712.74;
		return t;
	};
	_proto._Rect88_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x212121;
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.width = 96;
		t.x = 1605;
		t.y = 636.74;
		return t;
	};
	return scene1Skin;
})(eui.Skin);generateEUI.paths['resource/component/Score.exml'] = window.ScoreSkin = (function (_super) {
	__extends(ScoreSkin, _super);
	function ScoreSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 87;
		this.width = 73;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = ScoreSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.source = "tubiao_json.score";
		t.width = 70;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ScoreSkin;
})(eui.Skin);generateEUI.paths['resource/component/Timer.exml'] = window.TimerSkin = (function (_super) {
	__extends(TimerSkin, _super);
	function TimerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 104;
		this.width = 393;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = TimerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tubiao_json.time";
		t.x = -1;
		t.y = 2;
		return t;
	};
	return TimerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 26;
		t.fillColor = 0xfc6293;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/scene/gameScene.exml'] = window.gameSceneSkin = (function (_super) {
	__extends(gameSceneSkin, _super);
	var gameSceneSkin$Skin1 = 	(function (_super) {
		__extends(gameSceneSkin$Skin1, _super);
		function gameSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tubiao_json.left_hover")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tubiao_json.left";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameSceneSkin$Skin1;
	})(eui.Skin);

	var gameSceneSkin$Skin2 = 	(function (_super) {
		__extends(gameSceneSkin$Skin2, _super);
		function gameSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tubiao_json.right_hover")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tubiao_json.right";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameSceneSkin$Skin2;
	})(eui.Skin);

	var gameSceneSkin$Skin3 = 	(function (_super) {
		__extends(gameSceneSkin$Skin3, _super);
		function gameSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tubiao_json.attack_hover")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameSceneSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tubiao_json.attack";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameSceneSkin$Skin3;
	})(eui.Skin);

	var gameSceneSkin$Skin4 = 	(function (_super) {
		__extends(gameSceneSkin$Skin4, _super);
		function gameSceneSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tubiao_json.carry_hover")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameSceneSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tubiao_json.carry";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameSceneSkin$Skin4;
	})(eui.Skin);

	var gameSceneSkin$Skin5 = 	(function (_super) {
		__extends(gameSceneSkin$Skin5, _super);
		function gameSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tubiao_json.jump_hover")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tubiao_json.jump";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameSceneSkin$Skin5;
	})(eui.Skin);

	function gameSceneSkin() {
		_super.call(this);
		this.skinParts = ["leftBtn","rightBtn","attackBtn","carryBtn","upBtn","timer","rwTip","mpTip","scoreTip","controlGroup"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.controlGroup_i()];
	}
	var _proto = gameSceneSkin.prototype;

	_proto.controlGroup_i = function () {
		var t = new eui.Group();
		this.controlGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.zIndex = 1;
		t.elementsContent = [this.leftBtn_i(),this.rightBtn_i(),this.attackBtn_i(),this.carryBtn_i(),this.upBtn_i(),this.timer_i(),this.rwTip_i(),this.mpTip_i(),this.scoreTip_i()];
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Button();
		this.leftBtn = t;
		t.height = 120;
		t.label = "";
		t.width = 120;
		t.x = 27.66;
		t.y = 507.33;
		t.skinName = gameSceneSkin$Skin1;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Button();
		this.rightBtn = t;
		t.height = 120;
		t.label = "";
		t.width = 120;
		t.x = 158.66;
		t.y = 507.33;
		t.skinName = gameSceneSkin$Skin2;
		return t;
	};
	_proto.attackBtn_i = function () {
		var t = new eui.Button();
		this.attackBtn = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.label = "";
		t.width = 120;
		t.x = 734.66;
		t.y = 492.33;
		t.skinName = gameSceneSkin$Skin3;
		return t;
	};
	_proto.carryBtn_i = function () {
		var t = new eui.Button();
		this.carryBtn = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "";
		t.width = 100;
		t.x = 838.66;
		t.y = 361.33;
		t.skinName = gameSceneSkin$Skin4;
		return t;
	};
	_proto.upBtn_i = function () {
		var t = new eui.Button();
		this.upBtn = t;
		t.height = 150;
		t.label = "";
		t.width = 150;
		t.x = 918;
		t.y = 461.33;
		t.skinName = gameSceneSkin$Skin5;
		return t;
	};
	_proto.timer_i = function () {
		var t = new Timer();
		this.timer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.width = 373;
		t.x = 381.5;
		t.y = 0;
		return t;
	};
	_proto.rwTip_i = function () {
		var t = new renwu();
		this.rwTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.width = 231;
		t.x = 498;
		t.y = 17;
		return t;
	};
	_proto.mpTip_i = function () {
		var t = new miniPlayer();
		this.mpTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 192;
		t.x = 944;
		t.y = 7;
		return t;
	};
	_proto.scoreTip_i = function () {
		var t = new Score();
		this.scoreTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.width = 84;
		t.x = 8.66;
		t.y = 0;
		return t;
	};
	return gameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/scene/mainScene.exml'] = window.mainSceneSkin = (function (_super) {
	__extends(mainSceneSkin, _super);
	var mainSceneSkin$Skin6 = 	(function (_super) {
		__extends(mainSceneSkin$Skin6, _super);
		function mainSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_json.pbtn_hover")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = mainSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_json.pbtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "main_json.开始游戏";
			t.x = 41;
			t.y = 14;
			return t;
		};
		return mainSceneSkin$Skin6;
	})(eui.Skin);

	function mainSceneSkin() {
		_super.call(this);
		this.skinParts = ["yun","image1","image2","image","image0","startBtn","utx","uid","uname"];
		
		this.height = 640;
		this.width = 1136;
		this.yun_i();
		this.elementsContent = [this._Image1_i(),this.image1_i(),this.image2_i(),this.image_i(),this.image0_i(),this._Image2_i(),this.startBtn_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [911.76],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [140],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [637.45],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [183.14],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [271.7],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [203.5],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [-165],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [172.5],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [20],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [252.28],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [394.5],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [206.71],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [771.5],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [254.93],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [1015.5],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [85.5],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [1136],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1136],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [48.13],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, [970.85],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [71.47],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [753.8],[],this._Object12,"x");
		eui.Binding.$bindProperties(this, [55.67],[],this._Object12,"y");
		eui.Binding.$bindProperties(this, [475.41],[],this._Object13,"x");
		eui.Binding.$bindProperties(this, [131.78],[],this._Object13,"y");
		eui.Binding.$bindProperties(this, [168.71],[],this._Object14,"x");
		eui.Binding.$bindProperties(this, [103.96],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, [-141.5],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, [106.5],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [696.84],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [30.5],[],this._Object16,"y");
	}
	var _proto = mainSceneSkin.prototype;

	_proto.yun_i = function () {
		var t = new egret.tween.TweenGroup();
		this.yun = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._Wait1_i(),this._Set2_i(),this._To2_i(),this._Wait2_i(),this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 5000;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1250;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set4_i(),this._To4_i(),this._Wait3_i(),this._Set5_i(),this._To5_i(),this._Wait4_i(),this._Set6_i(),this._To6_i(),this._Wait5_i(),this._Set7_i(),this._To7_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 4000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 3250;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 2500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 700;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set8_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 1750;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 2300;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 2950;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 3250;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 3250;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set9_i(),this._To13_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 13500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "main_json.bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "main_json.图层 5";
		t.x = 771.5;
		t.y = 39.25;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.source = "main_json.图层 4";
		t.x = 79;
		t.y = 38.13;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "main_json.图层 3";
		t.x = 1043.5;
		t.y = 138.5;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.source = "main_json.图层 2";
		t.x = 864.11;
		t.y = 225;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main_json.biaoti";
		t.x = 394.5;
		t.y = 120;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.label = "";
		t.x = 474;
		t.y = 486;
		t.skinName = mainSceneSkin$Skin6;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.width = 318;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this.utx_i(),this._Image3_i(),this._Image4_i(),this.uid_i(),this.uname_i()];
		return t;
	};
	_proto.utx_i = function () {
		var t = new eui.Image();
		this.utx = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 60;
		t.source = "tubiao_json.user";
		t.width = 60;
		t.x = 12;
		t.y = 3.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.25;
		t.source = "main_json.zh";
		t.width = 51;
		t.x = 86;
		t.y = 7;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.5;
		t.source = "main_json.yhm";
		t.width = 75;
		t.x = 86;
		t.y = 41;
		return t;
	};
	_proto.uid_i = function () {
		var t = new eui.Label();
		this.uid = t;
		t.size = 25;
		t.text = "";
		t.textColor = 0x3f3f3f;
		t.x = 144;
		t.y = 5.5;
		return t;
	};
	_proto.uname_i = function () {
		var t = new eui.Label();
		this.uname = t;
		t.size = 25;
		t.text = "";
		t.textColor = 0x3F3F3F;
		t.x = 166.5;
		t.y = 42.63;
		return t;
	};
	return mainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/scene/matchScene.exml'] = window.matchSceneSkin = (function (_super) {
	__extends(matchSceneSkin, _super);
	var matchSceneSkin$Skin7 = 	(function (_super) {
		__extends(matchSceneSkin$Skin7, _super);
		function matchSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","match_json.btn")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = matchSceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "match_json.btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return matchSceneSkin$Skin7;
	})(eui.Skin);

	var matchSceneSkin$Skin8 = 	(function (_super) {
		__extends(matchSceneSkin$Skin8, _super);
		function matchSceneSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_json.bbtn_hover")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = matchSceneSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_json.bbtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "KaiTi";
			t.horizontalCenter = 0;
			t.size = 30;
			t.textAlign = "center";
			t.textColor = 0x494848;
			t.verticalCenter = 0;
			return t;
		};
		return matchSceneSkin$Skin8;
	})(eui.Skin);

	function matchSceneSkin() {
		_super.call(this);
		this.skinParts = ["backBtn","rid","rowerTX","rowerID","rlTX","rlID","testBtn"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.backBtn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.testBtn_i()];
	}
	var _proto = matchSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "match_json.matchbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "match_json.tit";
		t.x = 460;
		t.y = 49;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.x = 79;
		t.y = 51;
		t.skinName = matchSceneSkin$Skin7;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.width = 576;
		t.x = 280;
		t.y = 120;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.rid_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "match_json.yjjx";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "match_json.fjh";
		t.x = 141;
		t.y = 11;
		return t;
	};
	_proto.rid_i = function () {
		var t = new eui.Label();
		this.rid = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0xccc7c7;
		t.x = 221;
		t.y = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 180;
		t.x = 121;
		t.y = 248;
		t.elementsContent = [this.rowerTX_i(),this._Image5_i(),this.rowerID_i()];
		return t;
	};
	_proto.rowerTX_i = function () {
		var t = new eui.Image();
		this.rowerTX = t;
		t.height = 140;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "match_json.p1";
		t.width = 140;
		t.y = 2;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "match_json.id";
		t.visible = false;
		t.x = 64;
		t.y = 161;
		return t;
	};
	_proto.rowerID_i = function () {
		var t = new eui.Label();
		this.rowerID = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "玩家id";
		t.textAlign = "center";
		t.y = 159;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 180;
		t.x = 360;
		t.y = 248;
		t.elementsContent = [this.rlTX_i(),this.rlID_i()];
		return t;
	};
	_proto.rlTX_i = function () {
		var t = new eui.Image();
		this.rlTX = t;
		t.height = 140;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "match_json.p1";
		t.width = 140;
		t.y = 2;
		return t;
	};
	_proto.rlID_i = function () {
		var t = new eui.Label();
		this.rlID = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "玩家id";
		t.textAlign = "center";
		t.y = 161;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 180;
		t.x = 603;
		t.y = 248;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "match_json.p2";
		t.x = 22;
		t.y = 2;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "match_json.wait";
		t.x = 61;
		t.y = 162;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 180;
		t.x = 844;
		t.y = 248;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "match_json.p2";
		t.x = 22;
		t.y = 2;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "match_json.wait";
		t.x = 64;
		t.y = 161;
		return t;
	};
	_proto.testBtn_i = function () {
		var t = new eui.Button();
		this.testBtn = t;
		t.label = "跳过测试";
		t.x = 474.5;
		t.y = 540;
		t.skinName = matchSceneSkin$Skin8;
		return t;
	};
	return matchSceneSkin;
})(eui.Skin);