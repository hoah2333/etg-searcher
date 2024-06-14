export default {
	"The Breach": {
		id: 1,
		name: "The Breach",
		locale: {
			name: "裂隙"
		}
	},
	Gungeon: {
		id: 2,
		name: "Gungeon",
		locale: {
			name: "地牢",
			tips: "玩家进行冒险的地方，目前有 5 个普通关卡和 5 个隐藏关卡。",
			notes:
				"玩家进行冒险的地方，目前有 5 个普通关卡和 5 个隐藏关卡。\r\n这里采用官方译名“膛室”，但习惯性用“层”“关卡”称呼，如“1层”“第1关”表达“膛室1”，“1.5层”“隐藏1”表示“膛室1.5”。\r\n\r\n<h3>教学关卡</h3>\r\n{{CHAMBER:Hall of Knowledge}}\r\n\r\n<h3>普通关卡</h3>\r\n{{CHAMBER:Keep of the Lead Lord}}\r\n{{CHAMBER:Gungeon Proper}}\r\n{{CHAMBER:Black Powder Mine}}\r\n{{CHAMBER:Hollow}}\r\n{{CHAMBER:Forge}}\r\n\r\n<h3>隐藏关卡</h3>\r\n{{CHAMBER:Oubliette}}\r\n{{CHAMBER:Abbey of the True Gun}}\r\n{{CHAMBER:Resourceful Rat's Lair}}\r\n{{CHAMBER:R&G Dept.}}\r\n{{CHAMBER:Bullet Hell}}\r\n\r\n<h3>特殊关卡</h3>\r\n{{CHAMBER:The Past}}"
		}
	},
	Shortcuts: {
		id: 3,
		name: "Shortcuts",
		locale: {
			name: "快捷电梯",
			tips: "可以从任意关卡开始游戏。\r\n通过快捷电梯进入地牢，第一个房间会出现{{NPC:Resourceful Rat}}，随机摆着三把枪让玩家选择。\r\n各个关卡的快捷电梯需要修好后才能使用，修理快捷电梯还可以解锁相应的道具或枪，电梯全部修好后解锁{{GAME_MODE:Boss Rush}}。",
			notes:
				'可以从任意关卡开始游戏。\r\n通过快捷电梯进入地牢，第一个房间会出现{{NPC:Resourceful Rat}}，随机摆着三把枪让玩家选择，不同的关卡提供不同品质的枪，详情见{{NPC:Resourceful Rat}}。\r\n<h3>修理快捷电梯</h3>\r\n无伤击杀任意BOSS后，{{NPC:Tinker}}会出现在{{CHAMBER:Gungeon Proper}}的电梯井（每个关卡的第一个房间，电梯离开后的那个洞可以下去），和他对话他会向你要修理电梯的材料。\r\n修好电梯后，他会回到{{PAGE:The Breach}}的快捷电梯房，和他对话可以解锁相应的道具或枪，对应的关卡快捷电梯也可以使用了。\r\n下次进入地牢他会出现在下一关的电梯井，直到所有电梯全部修好。\r\n电梯全部修好后解锁{{GAME_MODE:Boss Rush}}。\r\n[["~关卡","~材料","~解锁"],["~2","- 3{{PICKUP:Blank}}\\n- 3{{PICKUP:Key}}+120{{PICKUP:Shell}}\\n- 10{{PICKUP:Hegemony Credit}}\\n- {{ITEM:Master Round I}}","{{ITEM:Gunboots}}"],["~3","- 3{{PICKUP:Armor}}（{{GUNGEONEER:The Robot}}需要 6 个）\\n- 4{{PICKUP:Key}}+180{{PICKUP:Shell}}\\n- 15{{PICKUP:Hegemony Credit}}\\n- {{ITEM:Master Round II}}","{{ITEM:R2G2}}"],["~4","- 4{{ITEM:Junk}}\\n- 5{{PICKUP:Key}}+240{{PICKUP:Shell}}\\n- 20{{PICKUP:Hegemony Credit}}\\n- {{ITEM:Master Round III}}","{{GUN:Gungine}}"],["~5","- 拥有6颗{{PICKUP:Heart}}（只是给他看，不会失去）\\n- 6{{PICKUP:Key}}+300{{PICKUP:Shell}}\\n- 25{{PICKUP:Hegemony Credit}}\\n- {{ITEM:Master Round IV}}","{{GUN:AKEY-47}}"]]'
		}
	},
	"Elevator Room": {
		id: 4,
		name: "Elevator Room",
		locale: {
			name: "电梯房"
		}
	},
	Shop: {
		id: 5,
		name: "Shop",
		locale: {
			name: "商店"
		}
	},
	"Demon Face": {
		id: 6,
		name: "Demon Face",
		icon: "object/Demon_Face.png",
		locale: {
			name: "恶魔面孔",
			tips: "进入黑市房间的入口。\r\n黑市里有一堆商人NPC在摆摊，所有的商品半价：\r\n{{NPC:Old Red}}{{NPC:Cursula}}{{NPC:Professor Goopton}}{{NPC:Flynt}}（这货的货币是钥匙，没有半价）\r\n连接着{{NPC:Winchester}}的{{GAME_MODE:Winchester's Game}}房。\r\n\r\n需要有 1 点以上的{{SYSTEM:Curse}}或者有 100{{PICKUP:Shell}}才能进入，否则会被扣血并弹出。\r\n进入后恶魔脸消失，不过黑市里有传送点，可以随时传入。\r\n使用水属性的枪（如{{GUN:Mega Douser}}，不包括毒液）射击恶魔脸，会随机掉落一个{{QUALITY:A}}或{{QUALITY:S}}品质的道具或枪。{该行为不会影响进入黑市}。",
			notes:
				"进入黑市房间的入口。\r\n黑市里有一堆商人NPC在摆摊，所有的商品半价：\r\n{{NPC:Old Red}}{{NPC:Cursula}}{{NPC:Professor Goopton}}{{NPC:Flynt}}（这货的货币是钥匙，没有半价）\r\n连接着{{NPC:Winchester}}的{{GAME_MODE:Winchester's Game}}房。\r\n需要有 1 点以上的{{SYSTEM:Curse}}或者有 100{{PICKUP:Shell}}才能进入，否则会被扣血并弹出。\r\n进入后恶魔脸消失，不过黑市里有传送点，可以随时传入。\r\n使用水属性的枪（如{{GUN:Mega Douser}}，不包括毒液）射击恶魔脸，会随机掉落一个{{QUALITY:A}}或{{QUALITY:S}}品质的道具或枪。{该行为不会影响进入黑市}。\r\n\r\n<h3>提示</h3>\r\n- 黑市里的商人NPC可能同时出现在同一层的另一个房间，卖不同的东西。\r\n- 如果碰到{{NPC:The Lost Adventurer}}时关卡中有黑市，黑市也需要进入才能完成他的地图探索任务。\r\n- 如果你的{{SYSTEM:Curse}}超过 10 点引出了{{ENEMY:Lord of the Jammed}}，它飞入黑市会导致所有商人NPC收摊。",
			trivia:
				"如果你的{{SYSTEM:Curse}}超过 10 点，恶魔脸会瞪大双眼惊讶地看着你。\r\n恶魔脸引用自《龙与地下城（Dungeons and Dragons）》的{恐惧之墓（Tomb of Horrors）}模组里的恶魔之口。\r\n用水攻击恶魔脸可能引用自：\r\n- 一个经典的狂欢节游戏​​，把水射进瓷器小丑的嘴里，让气球弹出以获得奖品\r\n- 谚语“地狱里的人想要冰水（People in hell want ice water）”\r\n- 《新约圣经·路加福音》里{财主和拉撒路}的比喻，在地狱里受苦的财主喊着“可怜我吧！用指头尖蘸点水，凉凉我的舌头，因为我在这火焰里极其痛苦”"
		}
	},
	"Chest Room": {
		id: 7,
		name: "Chest Room",
		locale: {
			name: "宝箱房",
			tips: "每个关卡都会有 2 个宝箱房，房间形状固定，里面摆着一个{{SYSTEM:Chest}}，2 个宝箱房里的{{SYSTEM:Chest}}，一个会开出枪，一个会开出道具。\r\n\r\n这些关卡没有宝箱房：\r\n- {{CHAMBER:Bullet Hell}}\r\n- {{CHAMBER:Resourceful Rat's Lair}}\r\n- {{CHAMBER:R&G Dept.}}\r\n- 角色的过去关卡"
		}
	},
	"Secret Room": {
		id: 8,
		name: "Secret Room",
		locale: {
			name: "隐藏房",
			tips: '默认情况下不显示的房间。\r\n使用 <span style="color:red;font-weight:bold">非无限弹药</span> 的枪射击隐藏房入口的墙壁，会出现明显裂缝。\r\n使用{{PICKUP:Blank}}可以打开入口。',
			notes:
				"{隐藏房}顾名思义就是默认情况下不显示的房间，通常每层都会有 1 个普通隐藏房，小概率没有或者有多个。\r\n\r\n隐藏房里可能有：\r\n- {{SYSTEM:Pickup}}\r\n- {{SYSTEM:Chest}}\r\n- 雕像\r\n- {{GUN:High Dragunfire}}\r\n- {{SYSTEM:Evil Muncher}}\r\n- NPC\r\n\r\n<h3>寻找隐藏房的方法：</h3>\r\n隐藏房较大概率与特殊房间相连，如{{ROOM:Chest Room}}{{ROOM:Shop}}。\r\n使用 <span style=\"color:red;font-weight:bold\">非无限弹药</span> 的枪射击隐藏房入口的墙壁，会出现非常明显的裂缝。\r\n[(~data/Secret_Room.jpg)]\r\n隐藏房需要占空间，墙后空间不足的一般不用试。\r\n隐藏房入口是一条走廊，如果看到墙上刚好有一个走廊大小的凹陷，就顺手开几枪试试。\r\n如果房间内有一条小道的尽头是墙壁，有很大可能是隐藏房入口（特别是{{ROOM:Shrine Room}}）。\r\n- {{ITEM:Map}}{{ITEM:Gungeon Blueprint}}会显示所有房间，包括隐藏房\r\n- {{ITEM:Brick of Cash}}：隐藏房入口会出现一个[(~~data/Brick_of_Cash_baby.png)]\r\n- {{SYNERGY:Insight}}：隐藏房入口会出现一个[(~~synergy/Insight.png)]\r\n\r\n<h3>打开隐藏房的入口的方法：</h3>\r\n- 触发{{PICKUP:Blank}}效果：\r\n<g>{{PICKUP:Blank}}{{PICKUP:Armor}}{{GUN:Composite Gun}}{{ITEM:Elder Blank}}{{ITEM:Daruma}}{{ITEM:Table Tech Blanks}}{{ITEM:Holey Grail}}{{ITEM:Blank Companion's Ring}}{{ITEM:Blank Bullets}}</g>\r\n- 一些爆炸效果：\r\n{{ITEM:Bomb}}{{GUN:Lil' Bomber}}，带导火索的宝箱爆炸也算"
		}
	},
	"The Eyeball Room": {
		id: 9,
		name: "The Eyeball Room",
		locale: {
			name: "眼球房",
			tips: "使用{{ITEM:Teleporter Prototype}}偶尔能进入的特殊房间，进入后解锁{{ITEM:Yellow Chamber}}。\r\n房间内的大眼球可能是{{SYSTEM:Mirror}}里的眼睛。",
			notes:
				"[(~data/Eyeball_Room.png)]\r\n使用{{ITEM:Teleporter Prototype}}偶尔能进入的特殊房间，进入后解锁{{ITEM:Yellow Chamber}}。\r\n房间内的大眼球可能是{{SYSTEM:Mirror}}里的眼睛：\r\n[(~data/Mirror_Room.jpg)]"
		}
	},
	"Shrine Room": {
		id: 10,
		name: "Shrine Room",
		locale: {
			name: "雕像房"
		}
	},
	"Aimless Void": {
		id: 11,
		name: "Aimless Void",
		locale: {
			name: "无尽虚空",
			tips: "打败{{BOSS:High Dragun}}后，通过BOSS房后面的小瀑布进入。\r\n如果已经解锁了{{CHAMBER:Bullet Hell}}，途中会有该关卡的入口，可以绕过。\r\n走到尽头是{{GUN:The Gun That Can Kill The Past}}，如果带着{{ITEM:The Bullet That Can Kill The Past}}，会进入角色的{{SYSTEM:Kill The Past}}关卡，没有则直接进入通关动画。"
		}
	}
};
