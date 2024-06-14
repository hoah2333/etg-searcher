export default {
	"Master Round I": {
		id: 1,
		name: "Master Round I",
		icon: "item/Master_Round_I.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "胜者之弹",
			tips: "一层BOSS无伤奖励，增加一个{{SYSTEM:Heart Container}}\r\n{{GUNGEONEER:The Robot}}获得后增加一个{{PICKUP:Armor}}\r\n不可回收，不会被{{NPC:Resourceful Rat}}偷走",
			keyword: "shengzhezhidanwushangzheng szzd wsz 勝者之彈 無傷證 无伤证"
		},
		sell: 0,
		colors: "black,yellow",
		shapes: "bullet",
		synergies: ["Chief Master", "Master's Chambers"]
	},
	"Master Round II": {
		id: 2,
		name: "Master Round II",
		icon: "item/Master_Round_II.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "胜者之弹",
			tips: "二层BOSS无伤奖励，增加一个{{SYSTEM:Heart Container}}\r\n{{GUNGEONEER:The Robot}}获得后增加一个{{PICKUP:Armor}}\r\n不可回收，不会被{{NPC:Resourceful Rat}}偷走",
			keyword: "shengzhezhidanwushangzheng szzd wsz 勝者之彈 無傷證 无伤证"
		},
		sell: 0,
		colors: "black,yellow",
		shapes: "bullet",
		synergies: ["Chief Master", "Master's Chambers"]
	},
	"Master Round III": {
		id: 3,
		name: "Master Round III",
		icon: "item/Master_Round_III.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "胜者之弹",
			tips: "三层BOSS无伤奖励，增加一个{{SYSTEM:Heart Container}}\r\n{{GUNGEONEER:The Robot}}获得后增加一个{{PICKUP:Armor}}\r\n不可回收，不会被{{NPC:Resourceful Rat}}偷走",
			keyword: "shengzhezhidanwushangzheng szzd wsz 勝者之彈 無傷證 无伤证"
		},
		sell: 0,
		colors: "black,yellow",
		shapes: "bullet",
		synergies: ["Chief Master", "Master's Chambers"]
	},
	"Master Round IV": {
		id: 4,
		name: "Master Round IV",
		icon: "item/Master_Round_IV.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "胜者之弹",
			tips: "四层BOSS无伤奖励，增加一个{{SYSTEM:Heart Container}}\r\n{{GUNGEONEER:The Robot}}获得后增加一个{{PICKUP:Armor}}\r\n不可回收，不会被{{NPC:Resourceful Rat}}偷走",
			keyword: "shengzhezhidanwushangzheng szzd wsz 勝者之彈 無傷證 无伤证"
		},
		sell: 0,
		colors: "black,yellow",
		shapes: "bullet",
		synergies: ["Chief Master", "Master's Chambers"]
	},
	"Master Round V": {
		id: 5,
		name: "Master Round V",
		icon: "item/Master_Round_V.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "胜者之弹",
			tips: "五层BOSS无伤奖励，增加一个{{SYSTEM:Heart Container}}\r\n{{GUNGEONEER:The Robot}}获得后增加一个{{PICKUP:Armor}}\r\n不可回收，不会被{{NPC:Resourceful Rat}}偷走",
			keyword: "shengzhezhidanwushangzheng szzd wsz 勝者之彈 無傷證 无伤证"
		},
		sell: 0,
		colors: "black,yellow",
		shapes: "bullet",
		synergies: ["Chief Master", "Master's Chambers"]
	},
	"Prime Primer": {
		id: 6,
		name: "Prime Primer",
		icon: "item/Prime_Primer.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "优良底漆",
			tips: "制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n在{{CHAMBER:Gungeon Proper}}{{NPC:Bello}}的商店中以110{{PICKUP:Shell}}购买，可以{{SYSTEM:Steal}}。",
			notes:
				"制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n在{{CHAMBER:Gungeon Proper}}{{NPC:Bello}}的商店中以110{{PICKUP:Shell}}购买，可以{{SYSTEM:Steal}}（不过{{ITEM:Grappling Hook}}和{{GUN:Directional Pad}}的钩子偷不了，因为柜台有玻璃罩）。\r\n交给{{NPC:Blacksmith}}后商店不再出售。\r\n{{ITEM:Prime Primer}}不可丢弃。",
			keyword: "youliangdiqiguoquzidan yldq gqzd 優良底漆 過去子彈 过去子弹"
		},
		sell: 0,
		colors: "yellow,red",
		shapes: "circle"
	},
	"Arcane Gunpowder": {
		id: 7,
		name: "Arcane Gunpowder",
		icon: "item/Arcane_Gunpowder.png",
		type: "Active",
		quality: "N",
		locale: {
			type: "主动",
			name: "神秘火药",
			tips: "制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n在{{CHAMBER:Black Powder Mine}}的一个很大的特殊房间获得。",
			notes:
				"制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n在{{CHAMBER:Black Powder Mine}}的一个很大的特殊房间获得。房间内有一些漂浮的矿车，翻滚坐上左上角的矿车，控制矿车沿着{隐形}的轨道前进，来到另一个矿车附近，翻滚换车，直到抵达上方的地面：\r\n[(~data/Arcane Gunpowder.png)]\r\n有飞行道具或枪的话，可以直接飞过去。\r\n把{{ITEM:Arcane Gunpowder}}交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}后，该房间不再出现。\r\n{{ITEM:Arcane Gunpowder}}不会被{{NPC:Resourceful Rat}}偷走。\r\n{{ITEM:Arcane Gunpowder}}是四个材料中唯一的一个主动道具（其它三个都是被动道具），会占用主动道具槽，建议使用{{GUNGEONEER:The Pilot}}来携带，他有两个主动道具槽。",
			keyword: "shenmihuoyaoguoquzidan smhy gqzd 神秘火藥 過去子彈 过去子弹"
		},
		sell: 0,
		colors: "brown,blue",
		shapes: "circle"
	},
	"Planar Lead": {
		id: 8,
		name: "Planar Lead",
		icon: "item/Planar_Lead.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "平面铅弹",
			tips: "制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n在{{CHAMBER:Hollow}}的一个很大的特殊房间获得。",
			notes:
				"制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n在{{CHAMBER:Hollow}}的一个很大的特殊房间获得。\r\n房间的右侧是一片看不到边的深渊，{{ITEM:Planar Lead}}就在对面。\r\n[(~data/Planar Lead 1.jpg)]\r\n深渊上有一条{隐形}的道路，如果有可以发射液体流的枪（如{{GUN:Mega Douser}}{{GUN:Fossilized Gun}}），可以让道路现形：\r\n[(~data/Planar Lead 2.jpg)]\r\n没有的话也可以用枪支装弹时掉落的弹壳来探路，建议用初始枪，无限弹药不浪费弹药（如果你中途不小心掉下去，所有的弹壳都会消失，所以使用该方法请务必小心谨慎）：\r\n[(~data/Planar Lead 3.jpg)]\r\n当然，如果有飞行道具或枪（如{{ITEM:Wax Wings}}{{ITEM:Jetpack}}{{ITEM:Cat Bullet King Throne}}{{ITEM:Ring of Ethereal Form}}{{GUN:Balloon Gun}}），可以无视地形直接飞到对面。\r\n另外，{{ITEM:Grappling Hook}}{{GUN:Directional Pad}}的钩子也可以把你带到对面，运气好甚至直接就把{{ITEM:Planar Lead}}给勾过来了。\r\n把{{ITEM:Planar Lead}}交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}后，该房间不再出现。\r\n{{ITEM:Planar Lead}}不会被{{NPC:Resourceful Rat}}偷走，拾取后不可丢弃。",
			keyword: "pingmianqiandanguoquzidan pmqd gqzd 平麵鉛彈 過去子彈 过去子弹"
		},
		sell: 0,
		colors: "black,blue",
		shapes: "other"
	},
	"Obsidian Shell Casing": {
		id: 9,
		name: "Obsidian Shell Casing",
		icon: "item/Obsidian_Shell_Casing.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "黑曜石子弹套袋",
			tips: "制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n击败{{CHAMBER:Forge}}BOSS{{BOSS:High Dragun}}后，打碎头骨获得。",
			notes:
				"制作{{ITEM:The Bullet That Can Kill The Past}}的四个材料之一，交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（只需交一次）。\r\n击败{{CHAMBER:Forge}}BOSS{{BOSS:High Dragun}}后，打碎头骨获得。\r\n[(~data/get_Obsidian_Shell_Casing.jpg)]\r\n不会被{{NPC:Resourceful Rat}}偷走。",
			keyword: "heiyaoshizidantaodaiguoquzidan hyszdtd gqzd 黑曜石子彈套袋 過去子彈 过去子弹"
		},
		sell: 0,
		colors: "black,blue",
		shapes: "other"
	},
	Meatbun: {
		id: 10,
		name: "Meatbun",
		icon: "item/Meatbun.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "肉包子",
			tips: "一次性道具，使用后恢复 1 颗心{{PICKUP:Heart}}，并且在下次受伤前伤害+100%。",
			notes:
				"一次性道具，使用后恢复 1 颗心{{PICKUP:Heart}}，并且在下次受伤前伤害+100%。\r\n{{SYSTEM:co-op}}下，队友受伤也会失去伤害加成效果。",
			keyword: "roubaozi rbz 肉包子"
		},
		sell: 16,
		colors: "white",
		shapes: "circle",
		synergies: ["Sausage and Peppers"]
	},
	Medkit: {
		id: 11,
		name: "Medkit",
		icon: "item/Medkit.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "急救包",
			tips: "一次性道具，使用后恢复 4 颗心{{PICKUP:Heart}}{{PICKUP:Heart}}{{PICKUP:Heart}}{{PICKUP:Heart}}。",
			notes:
				"一次性道具，使用后恢复 4 颗心{{PICKUP:Heart}}{{PICKUP:Heart}}{{PICKUP:Heart}}{{PICKUP:Heart}}。\r\n对{{GUNGEONEER:The Robot}}无效。",
			trivia:
				"物品说明引用自非牟利团体“无国界医生组织”，调皮地改成了“无证件医生组织”。\r\n“带有小精灵的碎片”引用自《塞尔达传说》，把小精灵作为恢复生命值的道具。",
			keyword: "jijiubao jjb 急救包"
		},
		sell: 21,
		colors: "white,red",
		synergies: ["Emergency Help"]
	},
	Ration: {
		id: 12,
		name: "Ration",
		icon: "item/Ration.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "口粮",
			tips: "一次性道具，恢复 2 颗心{{PICKUP:Heart}}{{PICKUP:Heart}}。\r\n放在主动道具最前面，角色死亡前会自动使用。",
			notes:
				"一次性道具，恢复 2 颗心{{PICKUP:Heart}}{{PICKUP:Heart}}。\r\n放在主动道具最前面，角色死亡前会自动使用。\r\n对{{GUNGEONEER:The Robot}}无效。\r\n如果同时拥有{{ITEM:Pig}}，死亡时会同时触发，两个物品都会被使用。",
			trivia:
				"物品说明和死亡自动使用的特性引用自《合金装备》。\r\n物品简介“这就是卡路里啊，伙计（Calories, Mate）”引用自《合金装备3》里的膳食饼干。\r\n{{PAGE:The Breach}}中{{GUNGEONEER:The Marine}}旁边摆着几块{{ITEM:Ration}}。",
			keyword: "kouliang kl 口糧",
			unlock: "花费 7{{PICKUP:Hegemony Credit}}从{{NPC:Trorc}}购买"
		},
		sell: 21,
		colors: "blue,yellow",
		shapes: "circle",
		synergies: ["I need scissors! 61!", "Pretty Good", "What A Thrill"]
	},
	Orange: {
		id: 13,
		name: "Orange",
		icon: "item/Orange.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "橙子",
			tips: "一次性道具，使用后增加一个{{SYSTEM:Heart Container}}，并回满{{PICKUP:Heart}}，同时增加2点{{SYSTEM:Coolness}}。",
			notes:
				"一次性道具，使用后增加一个{{SYSTEM:Heart Container}}，并回满{{PICKUP:Heart}}，同时增加2点{{SYSTEM:Coolness}}。\r\n{{SYSTEM:co-op}}下使用，两个玩家都会回满{{PICKUP:Heart}}。",
			trivia:
				"外观、效果、物品简介和说明，都引用自PS2游戏《神之手（God Hand）》：\r\n[(~data/God_Hand_orange.jpg)]\r\n{{ITEM:Orange}}在地上会像《神之手》中一样显示成旋转的 3D 模型（挺进地牢其实是一个 3D 游戏，不管你信不信，我反正是信了[/huaji]）。",
			keyword: "chengzi3D cz 3D 橙子 3D 3D"
		},
		sell: 30,
		colors: "red,yellow,green",
		shapes: "circle",
		synergies: [
			"AK-47 (Island Forme)",
			"Cactus Flower",
			"Enter the Fruitgeon",
			"Oranger Guon Stone",
			"Pulp Gungeon"
		]
	},
	"Friendship Cookie": {
		id: 14,
		name: "Friendship Cookie",
		icon: "item/Friendship_Cookie.png",
		type: "Active",
		quality: "N",
		locale: {
			type: "主动",
			name: "友谊饼干",
			tips: "一次性道具，使用后满血复活死亡的队友。\r\n{{GUNGEONEER:The Cultist}}初始主动道具，{{SYSTEM:co-op}}专属道具，单人模式下无法正常获得。",
			keyword: "youyibinggan yybg 友誼餅幹"
		},
		sell: 0,
		colors: "purple,brown",
		shapes: "heart"
	},
	Bottle: {
		id: 15,
		name: "Bottle",
		icon: "item/Bottle.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "空瓶子",
			tips: "可以存储{{SYSTEM:Pickup}}，空的时候对着目标使用进行储存，存储后使用则消耗瓶子里的物品。\r\n可以用来抓住<g>{{ENEMY:Gun Fairy}}[(~~data/Bottle_Fairy.png)]</g>，放出来后环绕玩家，缓慢恢复玩家的{{PICKUP:Half Heart}}，一段时间后消失。",
			notes:
				"可以存储{{SYSTEM:Pickup}}，空的时候对着目标使用进行储存，存储后使用则消耗瓶子里的物品。\r\n存储的{{PICKUP:Spread Ammo}}会变成{{PICKUP:Ammo}}。\r\n<g>{{PICKUP:Ammo}}[(~~data/Bottle_Ammo.png)]</g><g>{{PICKUP:Blank}}[(~~data/Bottle_Blank.png)]</g><g>{{PICKUP:Half Heart}}[(~~data/Bottle_Half_Heart.png)]</g><g>{{PICKUP:Heart}}[(~~data/Bottle_Heart.png)]</g><g>{{PICKUP:Key}}[(~~data/Bottle_Key.png)]</g>\r\n\r\n可以用来抓住<g>{{ENEMY:Gun Fairy}}[(~~data/Bottle_Fairy.png)]</g>，放出来后环绕玩家，缓慢恢复玩家的{{PICKUP:Half Heart}}，一段时间后消失：\r\n- 小精灵消失时，如果血还未回满，仍会持续回复直到满血。\r\n- 回满血后恢复效果停止。\r\n- 拥有的{{SYSTEM:Heart Container}}越多，恢复速度越快。\r\n- 当只有两个{{SYSTEM:Heart Container}}时，回血速度比{{ITEM:Cigarettes}}的冷却时间快，可以实现无限吸烟\r\n\r\n可以对着{{SYSTEM:Heart Machine}}使用，如果{{SYSTEM:Heart Machine}}存储超过 2 个{{PICKUP:Half Heart}}，会转移 1 颗{{PICKUP:Heart}}到{{ITEM:Bottle}}里。",
			trivia: "抓精灵引用自《塞尔达传说》",
			keyword: "kongpingzi kpz 空瓶子",
			unlock: "击败{{ENEMY:Shadow Magician}}"
		},
		sell: 16,
		colors: "blue,brown",
		shapes: "bottle",
		synergies: ["Clearer Guon Stone", "Empty Vessels", "Mak Pak"]
	},
	Bomb: {
		id: 16,
		name: "Bomb",
		icon: "item/Bomb.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "炸弹",
			tips: "使用后扔出一颗炸弹，短暂延迟后((爆炸))造成60点伤害。\r\n可以炸开{{ROOM:Secret Room}}的墙壁。",
			keyword: "zhadan zd 炸彈"
		},
		sell: 16,
		colors: "black,yellow",
		shapes: "circle",
		synergies: ["Battle Mode", "Bomberpal", "Fairy Bow", "Just In Case", "Smart Bombs"]
	},
	"Ice Bomb": {
		id: 17,
		name: "Ice Bomb",
		icon: "item/Ice_Bomb.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "冰炸弹",
			tips: "使用后扔出一颗冰炸弹，造成8点((爆炸))伤害，并((冰冻))附近敌人。\r\n不能炸开{{ROOM:Secret Room}}的墙壁。",
			keyword: "bingzhadan bzd 冰炸彈"
		},
		sell: 16,
		colors: "blue,yellow",
		shapes: "circle",
		synergies: ["Battle Mode", "Smart Bombs", "Super Bomberpal"]
	},
	"Chaff Grenade": {
		id: 18,
		name: "Chaff Grenade",
		icon: "item/Chaff_Grenade.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "干草手榴弹",
			tips: "可以使用 3 次，使用后((晕眩))敌人。\r\n可以用来{{SYSTEM:Steal}}。",
			notes:
				"使用后((晕眩))敌人。\r\n可以使用 3 次，一局游戏中可以多次获得，每次获得增加 3 次使用次数。\r\n可以用来{{SYSTEM:Steal}}。",
			trivia: "引用自《合金装备》同名物品",
			keyword: "gancaoshouliudan gcsld 幹草手榴彈",
			unlock: "花费 13{{PICKUP:Hegemony Credit}}从{{NPC:Trorc}}购买"
		},
		sell: 21,
		colors: "black,yellow",
		shapes: "bottle",
		synergies: ["Camera Shy"]
	},
	"Proximity Mine": {
		id: 19,
		name: "Proximity Mine",
		icon: "item/Proximity_Mine.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "感应地雷",
			tips: "使用后放置一个地雷，在敌人靠近时自动引爆，造成60点伤害。",
			notes:
				"使用后放置一个地雷，在敌人靠近时自动引爆，造成60点伤害。\r\n{{ENEMY:Mimic}}靠近不会引爆。",
			trivia:
				"外观引用自N64游戏《黄金眼007（GoldenEye 007）》：\r\n[(~data/Proximity_Mine_Goldeneye_N64.jpg)]",
			keyword: "ganyingdilei gydl 感應地雷"
		},
		sell: 16,
		colors: "gray,red",
		shapes: "circle"
	},
	"Cluster Mine": {
		id: 20,
		name: "Cluster Mine",
		icon: "item/Cluster_Mine.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "集束地雷",
			tips: "使用后放置 5 个地雷，敌人接触时自动引爆，造成60点伤害。\r\n能对玩家造成伤害。",
			notes:
				"使用后放置 5 个地雷，敌人接触时自动引爆，造成60点伤害。\r\n能对玩家造成伤害。\r\n{{ENEMY:Shambling Round}}{{ENEMY:Mimic}}接触不会引爆。\r\n可以穿透{{ROOM:Secret Room}}的墙壁（不会造成裂缝或炸开墙壁，并没什么卵用）。",
			keyword: "jishudilei jsdl 集束地雷",
			unlock: "花费 3{{PICKUP:Hegemony Credit}}从{{NPC:Trorc}}购买"
		},
		sell: 21,
		colors: "green,black,gray",
		shapes: "other",
		synergies: ["Cerebral Bros", "Mine Craft"]
	},
	C4: {
		id: 21,
		name: "C4",
		icon: "item/C4_%28Item%29.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			tips: "使用后放置一个炸药包，再次使用则引爆，对附近敌人造成60点伤害。\r\n不能炸开{{ROOM:Secret Room}}的墙壁。",
			keyword: "undefined undefined undefined"
		},
		sell: 16,
		colors: "black,green",
		shapes: "other"
	},
	"Weird Egg": {
		id: 22,
		name: "Weird Egg",
		icon: "item/Weird_Egg.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "神秘的蛋",
			tips: "作为主动道具使用，可以回满所有{{PICKUP:Heart}}。\r\n扔下来向它射击，会掉落一个随机{枪}或{道具}，带着蛋经过的关卡数越多，掉落的物品{{SYSTEM:Quality}}越高。\r\n扔到火上，会孵化一条小蛇，小蛇跟着你到五层，进入BOSS房时叛变，让BOSS{{BOSS:High Dragun}}拥有第三阶段（金枪龙）。",
			notes:
				"作为主动道具使用，可以回满所有{{PICKUP:Heart}}。\r\n扔下来向它射击，会掉落一个随机{枪}或{道具}，带着蛋经过的关卡数越多，掉落的物品{{SYSTEM:Quality}}越高：\r\n- 2关：{{QUALITY:C}}或{{QUALITY:B}}\r\n- 4关：{{QUALITY:A}}或{{QUALITY:S}}\r\n扔到火上，会孵化一条{{SYSTEM:Serpent}}，小蛇跟着你到{{CHAMBER:Forge}}，进入BOSS房时叛变，让{{BOSS:High Dragun}}拥有第三阶段（金枪龙）。",
			trivia:
				"引用自《精灵宝可梦》，带着蛋走一定步数后孵化。带着蛋经过2个关卡，蛋会轻微摇晃。经过4个关卡，蛋会跳动，快要孵化的样子。",
			keyword:
				"shenmidedanerwuzi25zixiaoshe smdd ewz 25z xs 神秘的蛋 二五仔 25仔 小蛇 二五仔 25仔 小蛇",
			unlock: "进入{{CHAMBER:Resourceful Rat's Lair}}"
		},
		sell: 16,
		colors: "blue,yellow",
		shapes: "circle",
		synergies: ["Phoenix Up", "Two Eggs Over Easy"]
	},
	Molotov: {
		id: 23,
		name: "Molotov",
		icon: "item/Molotov.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "燃烧瓶",
			tips: "使用后扔出一个燃烧瓶，在掉落处形成一片火焰。\r\n{{GUNGEONEER:The Convict}}的初始主动道具。",
			keyword: "ranshaoping rsp 燃燒瓶"
		},
		sell: 16,
		colors: "blue,white,yellow",
		shapes: "bottle"
	},
	"Air Strike": {
		id: 24,
		name: "Air Strike",
		icon: "item/Air_Strike.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "空袭",
			tips: "呼叫对前方矩形局域进行轰炸，每次爆炸造成25点伤害。",
			keyword: "kongxi kx 空襲",
			unlock: "花费 6{{PICKUP:Hegemony Credit}}从{{NPC:Trorc}}购买"
		},
		sell: 30,
		colors: "green,red,black",
		shapes: "other",
		synergies: ["Air Support", "Shot Across The Bow"]
	},
	"Napalm Strike": {
		id: 25,
		name: "Napalm Strike",
		icon: "item/Napalm_Strike.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "凝固汽油弹打击",
			tips: "呼叫对前方矩形局域发射凝固汽油弹，形成一片火焰。",
			trivia:
				"物品简介“气味太好了（Smells Great!）”引用自电影《现代启示录（Apocalypse Now）》的台词“我喜欢清晨的汽油味（I love the smell of napalm in the morning）”。",
			keyword: "ningguqiyoudandaji ngqyddj 凝固汽油彈打擊",
			unlock: "花费 18{{PICKUP:Hegemony Credit}}从{{NPC:Professor Goopton}}购买"
		},
		sell: 21,
		colors: "red,green,black",
		shapes: "other",
		synergies: ["Napalm B", "Phoenix Up", "Special Reserve"]
	},
	"Big Boy": {
		id: 26,
		name: "Big Boy",
		icon: "item/Big_Boy.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "大男孩",
			tips: "呼叫对准星位置进行导弹轰炸，引发大范围爆炸，造成150点伤害，并留下一地毒液。\r\n增加1点{{SYSTEM:Curse}}。\r\n爆炸范围内的敌人会变异成{{ENEMY:Mutant Bullet Kin}}（包括无敌的怪，如{{ENEMY:Gunreaper}}）。\r\n爆炸会清除敌人的子弹。",
			trivia:
				"道具名{大男孩（Big Boy）}引用自{小男孩（Little Boy）}原子弹，1945年第二次世界大战时美国在日本广岛市投掷的首枚原子弹的代号。\r\n物品简介“点燃整个世界（Set The World On Fire）”引用自《辐射》系列中的著名歌曲《I Don't Want To Set The World On Fire》。\r\n道具外观引用自{美俄热线}(莫斯科-华盛顿热线)，常常被称为“红色电话”。",
			keyword: "dananhaidianhua dnh dh 大男孩 電話 电话",
			unlock: "花费 20{{PICKUP:Hegemony Credit}}从{{NPC:Trorc}}购买"
		},
		sell: 30,
		colors: "red,yellow",
		shapes: "other",
		synergies: ["Meltdown", "Natural Selection"]
	},
	"Roll Bomb": {
		id: 27,
		name: "Roll Bomb",
		icon: "item/Roll_Bomb.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "滚动炸弹",
			tips: "翻滚时身后生成炸弹，造成 5 点碰撞伤害和 20 点爆炸伤害。\r\n不会对玩家造成伤害。\r\n不能炸开{{ROOM:Secret Room}}的墙壁，但可以造成裂缝，不会激怒{{NPC:Bello}}，可以在商店里找隐藏房。",
			notes:
				"翻滚时身后生成炸弹，造成 5 点碰撞伤害和 20 点爆炸伤害。\r\n不会对玩家造成伤害。\r\n不能炸开{{ROOM:Secret Room}}的墙壁，但可以造成裂缝，不会激怒{{NPC:Bello}}，可以在商店里找隐藏房。\r\n\r\n受部分子弹被动影响：\r\n- {{ITEM:Backup Gun}}：生成 2 个炸弹\r\n- {{ITEM:Helix Bullets}}：生成 2 个炸弹\r\n- {{ITEM:Shadow Bullets}}：有概率生成 2 个炸弹\r\n- {{ITEM:Scattershot}}：生成 3 个炸弹\r\n- {{ITEM:Frost Bullets}}：炸弹会在地上留下冰\r\n- {{ITEM:Hot Lead}}：炸弹会在地上留下火焰\r\n- {{ITEM:Irradiated Lead}}：炸弹会在地上留下毒液\r\n- {{ITEM:Shock Rounds}}：炸弹间会有电链连接\r\n- {{ITEM:Stout Bullets}}：炸弹变大变慢\r\n- {{ITEM:Macho Brace}}：炸弹获得该道具的增伤效果（不影响翻滚后第一颗子弹的增伤效果）\r\n- {{ITEM:Flak Bullets}}：炸弹爆炸后会分裂成几颗炸弹，不过分裂出来的炸弹不会造成任何伤害\r\n- {{ITEM:Orbital Bullets}}：炸弹碰到墙壁会开始环绕玩家",
			trivia: "引用自《银河战士》系列，主角{萨姆斯·阿兰（Samus Aran）}翻滚时会丢下炸弹。",
			keyword: "gundongzhadan gdzd 滾動炸彈",
			unlock: "花费 12{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 21,
		colors: "yellow,blue,purple,black",
		shapes: "other",
		synergies: ["AI Assistant", "y cant u crawl"]
	},
	"iBomb Companion App": {
		id: 28,
		name: "iBomb Companion App",
		icon: "item/IBomb_Companion_App.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "iBomb伙伴应用程序",
			tips: "引爆所可爆炸的物体和敌人。",
			notes:
				"引爆所有可爆炸的物体和敌人。\r\n冷却时间非常短，可以每进入一个房间立即使用，秒杀所有可爆炸敌人。\r\n\r\n可爆炸的敌人包括：\r\n<g>{{ENEMY:Bombshee}}{{ENEMY:Det}}{{ENEMY:Grenat}}{{ENEMY:Mountain Cube}}{{ENEMY:Pinhead}}{{ENEMY:Nitra}}</g>\r\n另外还可以引爆：\r\n- {{BOSS:Beholster}}的那 2 颗跟踪导弹\r\n- {{BOSS:Mine Flayer}}丢的一堆炸药包\r\n- 提前引爆{{GUN:Grenade Launcher}}等枪发射的可爆炸子弹\r\n\r\n{{ENEMY:Fuselier}}虽然看起来像个炸弹，然而引爆不能，别想了。",
			trivia:
				"物品简介“用于引爆的一个应用程序（One For That）”引用自广告语“有一个相关的应用程序（There's an App for that!）”。",
			keyword: "iBombhuobanyingyongchengxu iBombhbyycx iBomb夥伴應用程序"
		},
		sell: 21,
		colors: "brown,green,black",
		shapes: "other",
		synergies: ["AI Assistant", "Shot Across The Bow"]
	},
	"Supply Drop": {
		id: 29,
		name: "Supply Drop",
		icon: "item/Supply_Drop.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "空投补给",
			tips: "一次性道具，使用后获得一个空投弹药包{{PICKUP:Ammo}}。\r\n{{GUNGEONEER:The Marine}}的初始主动道具。",
			notes:
				"一次性道具，使用后获得一个空投弹药包{{PICKUP:Ammo}}。\r\n手持无限弹药的枪或满弹药的枪时无法使用。\r\n{{GUNGEONEER:The Marine}}的初始主动道具。\r\n\r\n清空房间后有极小概率掉落。\r\n重复获得时可堆叠多个。\r\n如果吃过{{ITEM:Spice}}，空降的{{PICKUP:Ammo}}可能会被替换成{{ITEM:Spice}}。",
			keyword: "kongtoubuji ktbj 空投補給"
		},
		sell: 16,
		colors: "black",
		shapes: "other"
	},
	"Ammo Synthesizer": {
		id: 30,
		name: "Ammo Synthesizer",
		icon: "item/Ammo_Synthesizer.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "弹药合成器",
			tips: "击杀敌人时，当前装备的{枪}有 10% 概率恢复 5% 弹药（向下取整，<1 时取 1）。",
			keyword: "danyaohechengqi dyhcq 彈藥合成器"
		},
		sell: 16,
		colors: "green,yellow,black",
		shapes: "other",
		synergies: ["Extreme Operation", "Synthetic Shield"]
	},
	"Armor Synthesizer": {
		id: 31,
		name: "Armor Synthesizer",
		icon: "item/Armor_Synthesizer.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "护甲合成器",
			tips: "{无伤}清空房间有 10% 概率获得{{PICKUP:Armor}}。",
			keyword: "hujiahechengqi hjhcq 護甲合成器"
		},
		sell: 41,
		colors: "green,black",
		shapes: "shield,other",
		synergies: ["Synthetic Shield"]
	},
	"Heart Synthesizer": {
		id: 32,
		name: "Heart Synthesizer",
		icon: "item/Heart_Synthesizer.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "爱心合成器",
			tips: "非满血状态下，{无伤}清空房间有 20% 概率获得{{PICKUP:Half Heart}}。\r\n对{{GUNGEONEER:The Robot}}无效。",
			keyword: "aixinhechengqi axhcq 愛心合成器"
		},
		sell: 41,
		colors: "black,green,blue",
		shapes: "heart",
		synergies: ["Synthetic Shield"]
	},
	"Master of Unlocking": {
		id: 33,
		name: "Master of Unlocking",
		icon: "item/Master_of_Unlocking.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "解锁大师",
			tips: "清空房间有概率获得{{PICKUP:Key}}。",
			trivia: "引用自《生化危机》，角色{吉尔·瓦伦蒂安（Jill Valentine）}拥有很强的撬锁能力",
			keyword: "jiesuodashiyaoshi jsds ys 解鎖大師 鑰匙 钥匙"
		},
		sell: 30,
		colors: "black,yellow",
		shapes: "other",
		synergies: ["Firing With Flair", "Key Witness"]
	},
	"Utility Belt": {
		id: 34,
		name: "Utility Belt",
		icon: "item/Utility_Belt.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "实用皮带",
			tips: "增加一个主动道具槽。\r\n增加所有枪 20% 的弹药上限。",
			trivia: "引用自{蝙蝠侠}的工具腰带",
			keyword: "shiyongpidai sypd 實用皮帶"
		},
		sell: 21,
		colors: "yellow,brown",
		shapes: "other",
		synergies: ["Gunnerang", "M1 Multi-Tool"]
	},
	"Macho Brace": {
		id: 35,
		name: "Macho Brace",
		icon: "item/Macho_Brace.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "强制锻炼器",
			tips: "翻滚后角色会发黄光，短暂延迟后消失。黄光状态下发射的第一颗子弹伤害增加 30%。",
			notes:
				"翻滚后角色会发黄光，短暂延迟后消失。黄光状态下发射的第一颗子弹伤害增加 30%。\r\n黄光状态下受伤，黄光可能会永久存在，但效果还是和原来一样，只在翻滚后的一小段时间内有效。\r\n{{ITEM:Gunboots}}射出的子弹、{{ITEM:Roll Bomb}}生成的炸弹，也获得该增伤效果（不影响翻滚后第一颗子弹的增伤效果）。\r\n在桌子上滑行后下来，会保留黄光状态一小会儿，可以进行多次有增伤效果的射击。\r\n",
			trivia:
				"引用自《宝可梦（Pokemon）》的同名道具，宝可梦在战斗时携带该道具，速度减半，但战斗后获得的努力值加倍。\r\n物品简介“一分耕耘一分收获（Value for Effort）”引用自宝可梦游戏中的隐藏属性{努力值（Effort Value）}。\r\n物品说明“不影响速度（Does not affect speed）”强调在本游戏中该道具不减速度！",
			keyword: "qiangzhiduanlianqi qzdlq 強製鍛煉器",
			unlock: "在{{NPC:Synergrace}}购买 3 次"
		},
		sell: 21,
		colors: "green,blue",
		shapes: "circle",
		synergies: ["Blunderbrace"]
	},
	"Hidden Compartment": {
		id: 36,
		name: "Hidden Compartment",
		icon: "item/Hidden_Compartment.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "隐藏的房间",
			tips: "增加一个主动道具槽。\r\n增加所有枪 10% 的弹药上限。\r\n{{GUNGEONEER:The Pilot}}专用初始被动道具。",
			notes:
				"增加一个主动道具槽。\r\n增加所有枪 10% 的弹药上限。\r\n{{GUNGEONEER:The Pilot}}专用初始被动道具，不能丢弃，其它角色无法获得。",
			trivia:
				"物品说明中提到的被帝国发现私藏不合法物品，引用自《星球大战（Star Wars）》里{韩索罗（Han Solo）}走私物品被帝国抓到。",
			keyword: "yincangdefangjian ycdfj 隱藏的房間"
		},
		sell: 0,
		colors: "gray,black,brown,yellow",
		shapes: "other"
	},
	Backpack: {
		id: 37,
		name: "Backpack",
		icon: "item/Backpack.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "背包",
			tips: "增加一个主动道具槽。",
			keyword: "beibao bb 背包"
		},
		sell: 16,
		colors: "brown,yellow",
		shapes: "circle",
		synergies: ["M1 Multi-Tool", "Mak Pak", "MM6 Mini Rocket", "Whale of a Time"]
	},
	"Loot Bag": {
		id: 38,
		name: "Loot Bag",
		icon: "item/Loot_Bag.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "战利品",
			tips: "击杀敌人或卖东西给{{NPC:Sell Creep}}，掉落双倍{{PICKUP:Shell}}。\r\n受伤后掉落15%~30%{{PICKUP:Shell}}（上限120{{PICKUP:Shell}}），一段时间后消失，不会自动飞向玩家，需要主动捡回。",
			notes:
				'击杀敌人或卖东西给{{NPC:Sell Creep}}，掉落双倍{{PICKUP:Shell}}。\r\n受伤后掉落15%~30%{{PICKUP:Shell}}（上限120{{PICKUP:Shell}}），一段时间后消失，不会自动飞向玩家，需要主动捡回。\r\n获得后增加出现{{ITEM:Drill}}和{{ITEM:Clown Mask}}的概率。\r\n\r\n未解锁前有概率替换一个商品出现在商店，卖 <span style=\\"color:red;font-weight:bold;\\">9999</span>{{PICKUP:Shell}}：在解锁{{ITEM:Coin Crown}}前，有 5% 概率，解锁{{ITEM:Coin Crown}}后 100% 概率。\r\n可以通过{{SYSTEM:Steal}}来获得，或者开枪激怒{{NPC:Bello}}让他关店跑路，{{ITEM:Loot Bag}}会留下来。解锁后加入正常道具池。',
			trivia: "引用自《收获日2（Payday 2）》",
			keyword: "zhanlipinxiaochoushouhuori2 zlp xc shr2 戰利品 小醜 收獲日2 小丑 收获日2",
			unlock:
				"在{{NPC:Bello}}的商店获得，可以{{SYSTEM:Steal}}，或者开枪气跑{{NPC:Bello}}（该道具会留下）"
		},
		sell: 21,
		colors: "black,gray,blue",
		shapes: "other"
	},
	Drill: {
		id: 39,
		name: "Drill",
		icon: "item/Drill.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "电钻",
			tips: "对着上锁的{{SYSTEM:Chest}}使用，出现1~5波敌人，击杀全部敌人后宝箱自动开锁。{{SYSTEM:Chest}}{{SYSTEM:Quality}}越高，敌人波数越多。\r\n对着上锁的{门}{地板门}使用，直接开锁。",
			notes:
				'对着上锁的{{SYSTEM:Chest}}使用，出现1~5波敌人，击杀全部敌人后宝箱自动开锁。{{SYSTEM:Chest}}{{SYSTEM:Quality}}越高，敌人波数越多。\r\n对着上锁的{门}{地板门}使用，直接开锁。\r\n获得后增加出现{{ITEM:Loot Bag}}和{{ITEM:Clown Mask}}的概率。\r\n\r\n未解锁前有概率替换一个商品出现在商店，卖 <span style=\\"color:red;font-weight:bold;\\">9999</span>{{PICKUP:Shell}}：在解锁{{ITEM:Coin Crown}}前，有 5% 概率，解锁{{ITEM:Coin Crown}}后 100% 概率。\r\n可以通过{{SYSTEM:Steal}}来获得，或者开枪激怒{{NPC:Bello}}让他关店跑路，{{ITEM:Drill}}会留下来。解锁后加入正常道具池。\r\n\r\n召唤的敌人可能掉落{{SYSTEM:Pickup}}{{SYSTEM:Chest}}，房间恢复原状时会消失，记得要在消灭所有敌人前拾取。',
			trivia: "引用自《收获日2（Payday 2）》",
			keyword:
				"dianzuanzuantouxiaochoushouhuori2 dz zt xc shr2 電鑽 鑽頭 小醜 收獲日2 钻头 小丑 收获日2",
			unlock:
				"在{{NPC:Bello}}的商店获得，可以{{SYSTEM:Steal}}，或者开枪气跑{{NPC:Bello}}（该道具会留下）"
		},
		sell: 16,
		colors: "brown,green,blue,red",
		shapes: "other"
	},
	"Clown Mask": {
		id: 40,
		name: "Clown Mask",
		icon: "item/Clown_Mask.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "小丑面具",
			tips: "玩家外观变成小丑[(~~data/Clown_Skin.png)]。\r\n随机召唤 1 个小丑同伴：\r\n- [(~~data/Clown_Wolf.png)]：使用泰瑟枪攻击并不断((晕眩))敌人。\r\n- [(~~data/Clown_Hoxton.png)]：守卫在玩家附近，偶尔发出迷你{{PICKUP:Blank}}清除敌人子弹。\r\n- [(~~data/Clown_Chains.png)]：用霰弹枪攻击敌人，每颗子弹造成 5 伤害。\r\n同时拥有{{ITEM:Loot Bag}}或{{ITEM:Drill}}，每个可以多召唤 1 个小丑同伴。",
			notes:
				'玩家外观变成小丑[(~~data/Clown_Skin.png)]。\r\n随机召唤 1 个小丑同伴：\r\n- [(~~data/Clown_Wolf.png)]：使用泰瑟枪攻击并不断((晕眩))敌人。\r\n- [(~~data/Clown_Hoxton.png)]：守卫在玩家附近，偶尔发出迷你{{PICKUP:Blank}}清除敌人子弹。\r\n- [(~~data/Clown_Chains.png)]：用霰弹枪攻击敌人，每颗子弹造成 5 伤害。\r\n同时拥有{{ITEM:Loot Bag}}或{{ITEM:Drill}}，每个可以多召唤 1 个小丑同伴。\r\n获得后增加出现{{ITEM:Loot Bag}}和{{ITEM:Drill}}的概率。\r\n\r\n未解锁前有概率替换一个商品出现在商店，卖 <span style=\\"color:red;font-weight:bold;\\">9999</span>{{PICKUP:Shell}}：在解锁{{ITEM:Coin Crown}}前，有 5% 概率，解锁{{ITEM:Coin Crown}}后 100% 概率。\r\n可以通过{{SYSTEM:Steal}}来获得，或者开枪激怒{{NPC:Bello}}让他关店跑路，{{ITEM:Clown Mask}}会留下来。解锁后加入正常道具池。',
			trivia:
				"引用自《收获日2（Payday 2）》\r\n[(~data/Payday_2.jpg)]\r\n玩家外观为{达拉斯（Dallas）}[(~~data/Clown_Skin.png)]，小丑同伴分别为{沃尔夫（Wolf）}[(~~data/Clown_Wolf.png)]、{霍斯顿（Hoxton）}[(~~data/Clown_Hoxton.png)]、{钱恩斯（Chains）}[(~~data/Clown_Chains.png)]。\r\n\r\n如果带着小丑皮肤通关，ED上翻滚的角色会变成骷髅，原因不明。",
			keyword: "xiaochoumianjuxiaochoushouhuori2 xcmj xc shr2 小醜麵具 小醜 收獲日2 小丑 收获日2",
			unlock:
				"在{{NPC:Bello}}的商店获得，可以{{SYSTEM:Steal}}，或者开枪气跑{{NPC:Bello}}（该道具会留下）"
		},
		sell: 30,
		colors: "white,red,black,blue",
		shapes: "circle",
		synergies: ["Tea for Two"]
	},
	Scope: {
		id: 41,
		name: "Scope",
		icon: "item/Scope.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "瞄准镜",
			tips: "降低 60% 子弹偏移，增加精准度。",
			keyword: "miaozhunjing mzj 瞄準鏡"
		},
		sell: 16,
		colors: "gray,green",
		shapes: "other",
		synergies: ["360 Yes Scope", "Iron Slug", "M1 Multi-Tool", "Sleuth Out"]
	},
	Scouter: {
		id: 42,
		name: "Scouter",
		icon: "item/Scouter.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "探测器",
			tips: "显示敌人的血条和造成的伤害值。（游戏体验极佳！）\r\n伤害 +10%。\r\n子弹分散 -10%，增加精准度。\r\n+1{{SYSTEM:Curse}}。",
			notes:
				"显示敌人的血条和造成的伤害值。（游戏体验极佳！）\r\n伤害 +10%。\r\n子弹分散 -10%，增加精准度。\r\n+1{{SYSTEM:Curse}}。\r\n- 小 BOSS 不会显示血条。\r\n- 如果伤害值不是整数，会四舍五入。\r\n- 显示的是对敌人造成的伤害值，而不是攻击的原伤害值，如子弹本来可以造成 30 点伤害，但敌人血量只有 20，那么只会显示 20。\r\n- 部分小跟班也会显示血条，即使它们本身不会受伤或被杀死。目前确认会显示血条的小跟班有：<g>{{ITEM:Super Space Turtle}}{{ITEM:Chicken Flute}}{{ITEM:Owl}}{{ITEM:R2G2}}{{ITEM:Pig}}{{ITEM:Turkey}}{{ITEM:Turtle Problem}}{{ITEM:Ser Junkan}}</g>",
			trivia:
				"引用自动漫《龙珠Z（Dragon Ball Z）》。\r\n[(~data/Scouter_5.jpg)]\r\n物品说明中“边上似乎刻着Ritvik这个名字”引用自本游戏的测试人员“Ritvik Bansal”。",
			keyword: "tanceqi tcq 探測器",
			unlock: "花费 26{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 21,
		colors: "blue,green,red,yellow",
		shapes: "other"
	},
	"Laser Sight": {
		id: 43,
		name: "Laser Sight",
		icon: "item/Laser_Sight.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "激光瞄准镜",
			tips: "降低 50% 子弹偏移，增加精准度。\r\n瞄准的方向会显示一条红外线。",
			trivia: "物品简介“点射之王（King Of The Dot）”引用自加拿大饶舌组合{King of the Dot}。",
			keyword: "jiguangmiaozhunjing jgmzj 激光瞄準鏡"
		},
		sell: 21,
		colors: "black,red",
		shapes: "other",
		synergies: [
			"Future Gangster",
			"Particle Accelerator",
			"Particle Flow",
			"Peripheral Vision",
			"Pistol Machine"
		]
	},
	"Ammo Belt": {
		id: 44,
		name: "Ammo Belt",
		icon: "item/Ammo_Belt.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "弹药带",
			tips: "增加所有枪 20% 的弹药上限。",
			keyword: "danyaodai dyd 彈藥帶"
		},
		sell: 16,
		colors: "brown",
		shapes: "other",
		synergies: [
			"Buckle Up",
			"Comammo Belt",
			"Hegemony Special Forces",
			"M1 Multi-Tool",
			"Not Quite As Mini"
		]
	},
	"Bullet Time": {
		id: 45,
		name: "Bullet Time",
		icon: "item/Bullet_Time.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "子弹时钟",
			tips: "使用后进入子弹时间，时间变慢70%，射击和装弹速度不受影响。",
			trivia:
				"物品简介“躲个试试（Dodge This）”引用自《黑客帝国》里崔妮蒂（Trinity）的一句台词。\r\n{子弹时间（Bullet Time）}是《马克思佩恩（Max Payne）》系列推广的时间减缓机制。\r\n该道具引用自《猎天使魔女（Bayonetta）》的道具{时之腕轮}，主动触发后进入{魔女时间（witch time）}（时间变慢）。",
			keyword: "zidanshizhong zdsz 子彈時鍾"
		},
		sell: 16,
		colors: "yellow,white,black",
		shapes: "bullet",
		synergies: ["Bluer Guon Stone", "Thrown For A Bloop"]
	},
	"Aged Bell": {
		id: 46,
		name: "Aged Bell",
		icon: "item/Aged_Bell.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "老化的铃",
			tips: "使用后短暂时间内停止敌人及其子弹的行动。\r\n可以用来{{SYSTEM:Steal}}。",
			notes:
				"使用后短暂时间内停止敌人及其子弹的行动。\r\n可以用来{{SYSTEM:Steal}}。\r\n\r\n- 不能停止移动的平台\r\n- 不能停止进入时停后产生的子弹（如敌人死亡爆出的子弹）\r\n- 不能停止{{ENEMY:Lord of the Jammed}}的行动\r\n- 不能停止{{BOSS:Kill Pillars}}的行动\r\n- 不能停止金枪龙第一阶段的二五仔小蛇发射子弹",
			keyword: "laohuadelinglingdang lhdl ld 老化的鈴 鈴鐺 铃铛"
		},
		sell: 41,
		colors: "blue,black",
		shapes: "other",
		synergies: ["Get Equipped with -F-", "Holy Bell"]
	},
	Singularity: {
		id: 47,
		name: "Singularity",
		icon: "item/Singularity.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "奇点",
			tips: "使用后召唤一个黑洞，吸住敌人和子弹，被吸进去的敌人会持续受到伤害，而子弹会直接消失。",
			trivia: "引用自《使命召唤：黑色行动》僵尸模式的{黑洞装置（Gersh Device）}。",
			keyword: "qidian qd 奇點",
			unlock: "花费 12{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 21,
		colors: "gray,black,blue",
		shapes: "other",
		synergies: ["Hellhole", "Outer Limits"]
	},
	Decoy: {
		id: 48,
		name: "Decoy",
		icon: "item/Decoy.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "诱饵",
			tips: "使用后放置一个诱饵吸引敌人，受到一定伤害后破坏。\r\n可以用来{{SYSTEM:Steal}}，建议放在商店门口，不想偷了想重新买，可以在商店外把诱饵打掉。",
			keyword: "youer ye 誘餌"
		},
		sell: 16,
		colors: "brown,green",
		shapes: "other",
		synergies: [
			"Deadly Distraction",
			"Decoy Octorok",
			"Frosty Distraction",
			"Hardwood",
			"Kage Bunshin",
			"Kinjutsu"
		]
	},
	"Shadow Clone": {
		id: 49,
		name: "Shadow Clone",
		icon: "item/Shadow_Clone.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "影分身",
			tips: "使用后生成一个临时分身：\r\n- 移动轨迹和玩家相反。\r\n- 玩家射击时，分身会使用相同武器朝玩家瞄准的方向射击。\r\n- 分身可以抵挡敌人的子弹。\r\n- 分身可以阻挡敌人，使其停止移动，如{{BOSS:Wallmonger}}。\r\n- 可以同时生成多个分身。",
			trivia:
				"引用自动漫《火影忍者（Naruto）》中漩涡鸣人（Naruto Uzumaki）最喜欢的忍术。\r\n道具图标是忍者卷轴。",
			keyword: "yingfenshen yfs 影分身"
		},
		sell: 16,
		colors: "yellow,red,black",
		shapes: "paper",
		synergies: ["Kinjutsu"]
	},
	"Explosive Decoy": {
		id: 50,
		name: "Explosive Decoy",
		icon: "item/Explosive_Decoy.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "炸弹诱饵",
			tips: "使用后放置一个诱饵吸引敌人，受到一定伤害或过 11 秒后爆炸，对附近的敌人造成 30 点伤害。\r\n可以用来{{SYSTEM:Steal}}，放置 11 秒后会自动爆炸，记得在这个时间内偷。",
			notes:
				"使用后放置一个诱饵吸引敌人，受到一定伤害或过 11 秒后爆炸，对附近的敌人造成 30 点伤害。\r\n可以用来{{SYSTEM:Steal}}，放置 11 秒后会自动爆炸，记得在这个时间内偷。\r\n如果同时拥有{{ITEM:Ring of Triggers}}，诱饵会在放置时马上爆炸，对玩家造成伤害。",
			keyword: "zhadanyouer zdye 炸彈誘餌"
		},
		sell: 21,
		colors: "brown,red",
		shapes: "other",
		synergies: ["Deadlier Distraction", "Decoy Octorok", "Frostier Distraction", "Hardwood"]
	},
	"Melted Rock": {
		id: 51,
		name: "Melted Rock",
		icon: "item/Melted_Rock.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "熔岩",
			tips: "使用后引爆敌人尸体，对附近的敌人造成 15 伤害。",
			trivia:
				"引用自《废土之王（Nuclear Throne）》的角色{融化者（Melting）}，他的主动技能就是尸爆。",
			keyword: "rongyan ry 熔岩"
		},
		sell: 21,
		colors: "brown,black",
		shapes: "circle",
		synergies: ["Alternative Rock", "Dead Place", "Extreme Operation", "Human Shield"]
	},
	"Trusty Lockpicks": {
		id: 52,
		name: "Trusty Lockpicks",
		icon: "item/Trusty_Lockpicks.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "值得信赖的开锁器",
			tips: "有 50% 概率打开上锁的宝箱或门（包含地板门，不包含NPC牢房），失败后锁会被封印，无法用{{PICKUP:Key}}打开。\r\n欧洲人的开锁器，非洲人的上锁器，看哪个箱子不爽就给它上个锁吧。\r\n{{GUNGEONEER:The Pilot}}初始主动道具。\r\n\r\n不可回收，不能喂{{SYSTEM:Serpent}}，不会让{{ENEMY:Mimic}}现形。",
			keyword:
				"zhidexinlaidekaisuoqifeixingyuanfeihangyuanzhidexinlaideshangsuoqidachaqi zdxldksq fxy fhy zdxldssq dcq 值得信賴的開鎖器 飛行員 非行員 值得信賴的上鎖器 打叉器 飞行员 非行员 值得信赖的上锁器 打叉器",
			unlock: "完成{{GUNGEONEER:The Pilot}}的{{CHAMBER:The Past}}"
		},
		sell: 0,
		colors: "blue",
		shapes: "other"
	},
	"Smoke Bomb": {
		id: 53,
		name: "Smoke Bomb",
		icon: "item/Smoke_Bomb.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "烟雾弹",
			tips: "使用后敌人暂时看不见你。\r\n可以用来{{SYSTEM:Steal}}。",
			trivia:
				"物品简介“消失！（Vanish!）”引用自电影《忍者神龟2》的台词“忍者，消失！（Ninja, vanish!）”。",
			keyword: "yanwudan ywd 煙霧彈"
		},
		sell: 21,
		colors: "black",
		shapes: "other"
	},
	Box: {
		id: 54,
		name: "Box",
		icon: "item/Box.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "纸盒",
			tips: "进房间前使用，敌人不会发现你。开枪、翻滚、掀桌、传送会退出纸盒状态。\r\n- 激活时射击会造成双倍伤害\r\n- 对 BOSS 无效\r\n- 对已经发现玩家的敌人无效\r\n可以用来{{SYSTEM:Steal}}。",
			trivia: "引用自《合金装备》系列著名的箱子伪装",
			keyword: "zhihe zh 紙盒",
			unlock: "花费 8{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 41,
		colors: "brown",
		shapes: "other",
		synergies: ["Apiary", "Flat Stanley", "I need scissors! 61!", "Pretty Good", "What A Thrill"]
	},
	"Fortune's Favor": {
		id: 55,
		name: "Fortune's Favor",
		icon: "item/Fortune%27s_Favor.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "财富的青睐",
			tips: "激活后附近的子弹会偏离玩家。\r\n对高速子弹和巨型子弹无效，如{{ENEMY:Sniper Shell}}的狙、{{BOSS:Cannonbalrog}}消失阶段的巨型弹球。",
			trivia:
				"引用自《合金装备2》的角色{Fortune}，据说她拥有超自然的运气，但实际上是拥有一个特殊的设备，能让子弹偏移，把手榴弹变成哑弹。",
			keyword: "caifudeqinglai cfdql 財富的青睞"
		},
		sell: 30,
		colors: "black,green,red",
		shapes: "other",
		synergies: ["Dead Cell", "Pistol Machine", "Pretty Good", "What A Thrill"]
	},
	"Jar of Bees": {
		id: 56,
		name: "Jar of Bees",
		icon: "item/Jar_of_Bees.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "瓶装蜜蜂",
			tips: "召唤蜜蜂跟踪敌人造成伤害。",
			trivia: "物品简介和描述引用自《合金装备3》的角色{痛苦（The Pain）}，使用蜜蜂来攻击。",
			keyword: "pingzhuangmifeng pzmf 瓶裝蜜蜂"
		},
		sell: 21,
		colors: "blue,red,yellow",
		shapes: "bottle",
		synergies: ["Bee Plus", "Hidden Tech Bees"]
	},
	"Potion of Lead Skin": {
		id: 57,
		name: "Potion of Lead Skin",
		icon: "item/Potion_of_Lead_Skin.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "铅皮药水",
			tips: "使用后角色无敌并反弹敌人子弹，反弹的子弹可对敌人造成 10 点伤害。\r\n不能免疫掉落伤害。",
			trivia:
				"引用自《龙与地下城（Dungeons and Dragons）》的石肤药水（Potion of Stone Skin）。\r\n物品简介和效果引用自《合金装备崛起（Metal Gear Rising）》的 BOSS{焚风（Sundowner）}，他用盾弹开玩家的攻击后会自吹自擂“我是无敌的！（I'm Invincible!）”。",
			keyword: "qianpiyaoshuiwudi qpys wd 鉛皮藥水 無敵 无敌"
		},
		sell: 16,
		colors: "blue,red,black",
		shapes: "bottle",
		synergies: ["Five O'Clock Somewhere", "Terminated, Too"]
	},
	"Double Vision": {
		id: 58,
		name: "Double Vision",
		icon: "item/Double_Vision.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "复视药酒",
			tips: "使用后发射的子弹双倍，精准度降低。",
			notes:
				"使用后发射的子弹双倍，精准度降低。\r\n对{{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}有效。",
			trivia: "引用自电影《绝命终结者（Tombstone）》（1993），Doc Holliday 喝醉后拔出第二把枪。",
			keyword: "fushiyaojiu fsyj 複視藥酒"
		},
		sell: 16,
		colors: "red,yellow",
		shapes: "bottle",
		synergies: ["Dwarven Stout", "Five O'Clock Somewhere", "Special Reserve"]
	},
	"Chest Teleporter": {
		id: 59,
		name: "Chest Teleporter",
		icon: "item/Chest_Teleporter.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "宝箱传送装置",
			tips: "对着{{SYSTEM:Chest}}使用，会将宝箱传送到下一层的{开始房间}或{BOSS房}前，如果出现在{BOSS房}前，宝箱的{{SYSTEM:Quality}}会提升。",
			notes:
				"对着{{SYSTEM:Chest}}使用，会将宝箱传送到下一层的{开始房间}或{BOSS房}前，如果出现在{BOSS房}前，宝箱的{{SYSTEM:Quality}}会提升。\r\n- 传送后宝箱里的物品类型可能会变，如确定会开出枪，传送后可能会开出道具。\r\n- {{CHEST:Truth Chest}}传送后会变成{{CHEST:Brown Chest}}或{{CHEST:Blue Chest}}。\r\n- {{CHEST:Synergy Chest}}不会提升{{SYSTEM:Quality}}。\r\n- {{SYSTEM:Mirror}}里的宝箱不能被传送。\r\n- {{CHEST:Rat Chest}}不能被传送。\r\n- 宝箱传送后可能会变成{{ENEMY:Mimic}}，{{ENEMY:Mimic}}传送后也可能变成正常宝箱。\r\n- 使用{{ITEM:Trusty Lockpicks}}开锁失败被封印的箱子，传送后会变成已开锁状态。\r\n- 如果在传送宝箱后死亡并通过{{ITEM:Clone}}重生，宝箱会被传送到重生后的第一个关卡。\r\n- {{GAME_MODE:Rainbow Mode}}下，默认给的{{CHEST:Rainbow Chest}}传送后会变成普通的{{CHEST:Rainbow Chest}}，可以拾取所有物品。（可惜默认给的{{CHEST:Rainbow Chest}}不能开出{{ITEM:Chest Teleporter}}，只能通过{{ITEM:Weird Egg}}或打{{BOSS:Resourceful Rat}}小概率掉落）。\r\n- 传送宝箱后丢出{{ITEM:Chest Teleporter}}，会导致宝箱消失在异次元，不会出现在下一层。\r\n- 如果在{{CHAMBER:Bullet Hell}}传送宝箱，会导致宝箱消失在异次元，即使通过{{ITEM:Clone}}重生也不会再次出现。",
			trivia: "引用自《时空之轮（Chrono Trigger）》的{封印的宝箱（Sealed Chests）}。",
			keyword: "baoxiangchuansongzhuangzhi bxcszz 寶箱傳送裝置",
			unlock: "完成{{GUNGEONEER:The Robot}}的{{CHAMBER:The Past}}"
		},
		sell: 41,
		colors: "brown,gray",
		shapes: "other",
		synergies: ["Second Accident", "Telefrag"]
	},
	Relodestone: {
		id: 60,
		name: "Relodestone",
		icon: "item/Relodestone.png",
		type: "Active",
		quality: "S",
		locale: {
			type: "主动",
			name: "瑞罗德石",
			tips: "被动效果：降低所有枪 50% 装弹耗时。\r\n使用后吸收附近的敌人的子弹转化为当前装备枪的子弹。",
			notes:
				"被动效果：降低所有枪 50% 装弹耗时。\r\n使用后吸收附近的敌人的子弹转化为当前装备枪的子弹。\r\n注意只能吸收子弹，不能免疫其它伤害（如碰撞、掉落、燃烧、中毒等）。\r\n激活期间如果切换到其它主动道具，效果会马上终止。\r\n如果同时拥有{{GUN:Makeshift Cannon}}…BOSS：你不要过来！",
			keyword: "ruiluodeshi rlds 瑞羅德石"
		},
		sell: 54,
		colors: "black,blue",
		shapes: "other",
		synergies: ["Relodestar"]
	},
	"Poison Vial": {
		id: 61,
		name: "Poison Vial",
		icon: "item/Poison_Vial.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "毒药瓶",
			tips: "使用后扔出一个毒药瓶，在掉落处形成一滩毒液。",
			keyword: "duyaoping dyp 毒藥瓶"
		},
		sell: 16,
		colors: "blue,green,red,black",
		shapes: "bottle"
	},
	"Potion of Gun Friendship": {
		id: 62,
		name: "Potion of Gun Friendship",
		icon: "item/Potion_of_Gun_Friendship.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "枪之友谊药水",
			tips: "使用后 +30% 伤害，双倍射速，-70% 装弹耗时，+10 击退。",
			keyword: "qiangzhiyouyiyaoshui qzyyys 槍之友誼藥水"
		},
		sell: 16,
		colors: "yellow,red,blue",
		shapes: "bottle",
		synergies: ["Five O'Clock Somewhere", "Friend to Gun and Bullet"]
	},
	"Portable Turret": {
		id: 63,
		name: "Portable Turret",
		icon: "item/Portable_Turret.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "便携式炮塔",
			tips: "使用后放置一个固定炮塔，抵挡敌人子弹，并向敌人射击，受到一定伤害后破坏。",
			keyword: "bianxieshipaota bxspt 便攜式炮塔",
			unlock: "花费 12{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "yellow,red,black,gray",
		shapes: "bullet",
		synergies: ["Captain Plant It", "Turret Link"]
	},
	"Knife Shield": {
		id: 64,
		name: "Knife Shield",
		icon: "item/Knife_Shield.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "刀盾",
			tips: "增加 1 点{{SYSTEM:Curse}}。\r\n使用后生成 8 把小刀环绕玩家，抵挡敌人子弹，并对接触到的敌人造成伤害。\r\n小刀在受到一定伤害后消失。\r\n在冷却期间，再次触发，小刀会向前飞出。\r\n小刀可叠加，冷却后再次使用，会再次生成 8 把新的小刀。",
			notes:
				"增加 1 点{{SYSTEM:Curse}}。\r\n使用后生成 8 把小刀环绕玩家，抵挡敌人子弹，并对接触到的敌人造成伤害，每把小刀可以造成 30 点伤害。\r\n小刀在受到一定伤害后消失。\r\n在冷却期间，再次触发，小刀会向前飞出。\r\n小刀可以叠加，冷却完成后再次使用，无论上次的小刀是否还有剩余，都会再次生成 8 把新的小刀。",
			keyword: "daodun dd 刀盾"
		},
		sell: 16,
		colors: "blue,brown,yellow,white",
		shapes: "shield,other",
		synergies: ["Fightknives", "Running Blades", "Throw All Daggers"]
	},
	"Grappling Hook": {
		id: 65,
		name: "Grappling Hook",
		icon: "item/Grappling_Hook.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "抓钩",
			tips: "使用后向前发射钩爪：\r\n- 击中敌人会使敌人((晕眩))，并造成 10 点伤害。\r\n- 碰撞到墙壁，玩家会快速飞到钩住的位置，飞行途中无敌，可以射击和拾取物品。{陷阱房}苦手福音。\r\n- 碰到可拾取物品，会将物品钩过来（直接拾取）。\r\n- 可以用来{{SYSTEM:Steal}}，大概率被发现（即使是第一次偷窃）。",
			notes:
				"使用后向前发射钩爪：\r\n- 击中敌人会使敌人((晕眩))，并造成 10 点伤害。\r\n- 碰撞到墙壁，玩家会快速飞到钩住的位置，飞行途中无敌，可以射击和拾取物品。{陷阱房}苦手福音。\r\n- 碰到可拾取物品，会将物品钩过来（直接拾取）。\r\n- 可以用来{{SYSTEM:Steal}}，大概率被发现（即使是第一次偷窃）。\r\n- 偷不了{{ITEM:Prime Primer}}和{{ITEM:Gnawed Key}}，因为柜台有玻璃罩。\r\n- 要拿{{ITEM:Planar Lead}}时，如果有{{ITEM:Grappling Hook}}就简单多了。\r\n- 钩子击中{{ITEM:Baby Good Mimic}}会把它打晕然后开始攻击\r\n- 钩爪飞行距离无限",
			trivia: "引用自《塞尔达传说》的{射钩（Hookshot）}道具",
			keyword:
				"zhuagougouzhaogouzhaogouzigouzi zg gz gz gz gz 抓鉤 鉤爪 勾爪 鉤子 勾子 钩爪 勾爪 钩子 勾子"
		},
		sell: 16,
		colors: "yellow,black",
		shapes: "other",
		synergies: ["Black Flag", "Raizo's Stuff"]
	},
	"Stuffed Star": {
		id: 66,
		name: "Stuffed Star",
		icon: "item/Stuffed_Star.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "毛绒星星",
			tips: "使用后角色变成彩虹色并进入((无敌))状态，敌人子弹会稍微击退玩家\r\n不能免疫掉落伤害和喷火陷阱的伤害。",
			trivia: "引用自《超级马里奥兄弟》的{无敌星（Super Star）}道具，拾取后无敌",
			keyword: "maorongxingxingwudi mrxx wd 毛絨星星 無敵 无敌"
		},
		sell: 30,
		colors: "yellow,blue",
		shapes: "other",
		synergies: ["Double Rainbow", "Softshell", "Star Friends"]
	},
	Boomerang: {
		id: 67,
		name: "Boomerang",
		icon: "item/Boomerang.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "回飞镖",
			tips: "使用后投出一个回旋镖绕房间飞行一圈((晕眩))敌人。",
			notes: "使用后投出一个回旋镖绕房间飞行一圈((晕眩))敌人。\r\n会让{{ENEMY:Wall Mimic}}现形。",
			trivia: "引用自《塞尔达传说：众神的三角力量》的{魔法回旋镖（Magical Boomerang）}道具",
			keyword: "huifeibiao hfb 回飛鏢"
		},
		sell: 30,
		colors: "blue,red",
		shapes: "other",
		synergies: ["Crave the Glaive", "Get Equipped With -Q-", "Gunnerang"]
	},
	"Shield of the Maiden": {
		id: 68,
		name: "Shield of the Maiden",
		icon: "item/Shield_of_the_Maiden.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "少女的盾",
			tips: "使用后举起一个盾牌进行防御，免疫子弹和碰撞伤害，持续最长 4 秒，期间不能移动，射击或翻滚会立即收起盾牌。\r\n不能免疫爆炸、毒、火、电的伤害。",
			notes:
				"使用后举起一个盾牌进行防御，免疫子弹和碰撞伤害，持续最长 4 秒，期间不能移动，射击或翻滚会立即收起盾牌。\r\n不能免疫爆炸、毒、火、电的伤害。\r\n可以挡住{{BOSS:Beholster}}的大激光。\r\n举着盾牌时被{{ENEMY:Tarnisher}}吞下，不会受伤，但{{ITEM:Shield of the Maiden}}会被它吞掉，杀死它可以重新取回。",
			trivia:
				"引用自发行商 Devolver Digital 自家的游戏《Eitr》\r\n[(~data/Eitr.jpg)]\r\nEitr 是北欧神话中的虚构物质，这种液态物质是所有巨人的起源，因为巨人始祖尤弥尔正是从 Eitr 诞生出来。@进击的巨人\r\n物品说明引用自《血源诅咒（Bloodborne）》的{木盾（Wooden Shield）}道具。\r\n和{{ENEMY:Tarnisher}}的彩蛋引用自《塞尔达传说》的小怪{Like Like}[(~~data/LikeLike.png)]吃了林克的盾。",
			keyword: "shaonvdedunwudi sndd wd 少女的盾 無敵 无敌",
			unlock: "无伤击败{{CHAMBER:Keep of the Lead Lord}}BOSS"
		},
		sell: 21,
		colors: "blue,white,yellow",
		shapes: "circle",
		synergies: ["Mirror Shield", "Shield Night"]
	},
	"Crisis Stone": {
		id: 69,
		name: "Crisis Stone",
		icon: "item/Crisis_Stone.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "危机石",
			tips: "空弹夹装弹时无敌。\r\n可以配合{{ITEM:Cigarettes}}实现无限吸烟，增加{{SYSTEM:Coolness}}。",
			notes:
				"空弹夹装弹时无敌。\r\n打空弹夹里的子弹时会发出“Reload”的声音。\r\n- 可以配合{{ITEM:Cigarettes}}实现无限吸烟，增加{{SYSTEM:Coolness}}。\r\n- 同时拥有{{ITEM:Full Metal Jacket}}时，即使处于{{ITEM:Crisis Stone}}的无敌状态，受伤判定还是会触发{{ITEM:Full Metal Jacket}}。\r\n- {{GUN:Blasphemy}}无法触发{{ITEM:Crisis Stone}}。",
			trivia:
				"物品名和“Reload”的声音引用自南梦宫（Namco）的《化解危机（Time Crisis）》系列，装弹前要先掩护好，以免被敌人的子弹打到。",
			keyword: "weijishichouyanxiangyan wjs cy xy 危機石 抽煙 香煙 抽烟 香烟",
			unlock: "{{GAME_MODE:Turbo Mode}}下击败{{BOSS:High Dragun}}"
		},
		sell: 41,
		colors: "gray,yellow",
		shapes: "circle",
		synergies: ["Human Shield"]
	},
	"Portable Table Device": {
		id: 70,
		name: "Portable Table Device",
		icon: "item/Portable_Table_Device.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "便携式桌子",
			tips: "使用后生成一张方桌，除了尺寸小一些，和地图上的普通桌子没有区别，一样可以掀桌，受到一定伤害后破坏。\r\n满能量时可使用3次，用完后需重新充能。",
			notes:
				"使用后生成一张方桌，除了尺寸小一些，和地图上的普通桌子没有区别，一样可以掀桌，受到一定伤害后破坏。\r\n满能量时可使用3次，用完后需重新充能。\r\n- 配合{{SYSTEM:Table Tech}}道具使用效果更佳\r\n- 可以用来卡住{{BOSS:Ammoconda}}",
			keyword: "bianxieshizhuozi bxszz 便攜式桌子",
			unlock: "掀桌 50 次"
		},
		sell: 16,
		colors: "gray",
		shapes: "other"
	},
	Daruma: {
		id: 71,
		name: "Daruma",
		icon: "item/Daruma.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "达摩",
			tips: "翻滚过子弹时激活，使用后触发{{PICKUP:Blank}}效果。使用后需要充能（攻击敌人）才能再次使用。",
			notes:
				"翻滚过子弹时激活，使用后触发{{PICKUP:Blank}}效果。使用后需要充能（攻击敌人）才能再次使用。\r\n- 有{{SYNERGY:Whiter Guon Stone}}时，{{ITEM:Daruma}}的充能效率翻倍。\r\n- 拥有{{ITEM:Resourceful Sack}}时{{ITEM:Daruma}}无法使用，因为翻滚过子弹时，{{ITEM:Resourceful Sack}}会把子弹吞掉，导致无法激活{{ITEM:Daruma}}。\r\n- {{ITEM:Bloodied Scarf}}也会导致{{ITEM:Daruma}}无法使用，因为瞬移会消除附近的子弹。",
			trivia: "引用自日本一种以佛教创始人达摩（Bodhidharma）为蓝本仿制的圆形空心娃娃。",
			keyword: "damo dm 達摩",
			unlock: "被{{ENEMY:Gripmaster}}抓住"
		},
		sell: 30,
		colors: "red,white,black,yellow",
		shapes: "bullet"
	},
	"Partially-Eaten Cheese": {
		id: 72,
		name: "Partially-Eaten Cheese",
		icon: "item/Partially-Eaten_Cheese.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "吃了一口的奶酪",
			tips: "使用后玩家变成吃豆人，((无敌))且获得((飞行))能力，秒杀接触到的敌人（不包括BOSS），期间可以射击。",
			notes:
				"使用后玩家变成吃豆人，((无敌))且获得((飞行))能力，秒杀接触到的敌人，期间可以射击。\r\n- 不能吃掉 BOSS，碰撞 BOSS 只能造成极小伤害，且会被弹开\r\n- 可以吃掉一些正常情况下无法杀死的敌人：\r\n<g>{{ENEMY:Gunreaper}}{{ENEMY:Lead Cube}}{{ENEMY:Flesh Cube}}</g>\r\n- 对以下敌人无效：\r\n<g>{{ENEMY:Gripmaster}}{{ENEMY:Dead Blow}}{{ENEMY:Lord of the Jammed}}</g>\r\n- 吃掉{{ENEMY:Keybullet Kin}}或{{ENEMY:Chance Kin}}会有双倍掉落\r\n",
			keyword: "chileyikoudenailaolaoshu clykdnl ls 吃了一口的奶酪 老鼠 老鼠",
			unlock: "从{{CHEST:Rat Chest}}中开出"
		},
		sell: 41,
		colors: "red,yellow",
		shapes: "circle",
		synergies: ["Resourceful Indeed"]
	},
	"+1 Bullets": {
		id: 73,
		name: "+1 Bullets",
		icon: "item/-1_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "子弹+1",
			tips: "增加 25% 伤害",
			trivia:
				"引用自《龙与地下城》，+1 的魔法物品有更高的伤害，物品简介“子弹属性 +1（+1 To Bullet）”类似于“伤害加成 +1（+1 to damage）”，和各种{{SYSTEM:Guon Stones}}的组合引用自{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "zidan+1 zd+1 子彈+1",
			unlock: "花费 6{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 21,
		colors: "black,yellow",
		shapes: "bullet",
		synergies: [
			"Bluer Guon Stone",
			"Clearer Guon Stone",
			"Friend to Gun and Bullet",
			"Greener Guon Stone",
			"Nailed It!",
			"Oranger Guon Stone",
			"Pinker Guon Stone",
			"Pistol Machine",
			"Redder Guon Stone",
			"Reinforced",
			"Whiter Guon Stone"
		]
	},
	"Rocket-Powered Bullets": {
		id: 74,
		name: "Rocket-Powered Bullets",
		icon: "item/Rocket-Powered_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "火箭驱动的子弹",
			tips: "+10% 伤害，+10% 射击频率，+50% 弹速",
			keyword: "huojianqudongdezidan hjqddzd 火箭驅動的子彈",
			unlock: "花费 4{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "yellow,red",
		shapes: "bullet",
		synergies: ["Shot Across The Bow"]
	},
	"Shock Rounds": {
		id: 75,
		name: "Shock Rounds",
		icon: "item/Shock_Rounds.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "电击炮",
			tips: "射出的子弹之间带有电链，电链会对敌人造成伤害。",
			trivia:
				"物品说明“闪电阿里斯泰尔（Alistair, the Thunderbolt）”引用自在《红侠乔伊（Viewtiful Joe）》和《鬼泣（Devil May Cry）》中都有出场的复仇者阿拉斯托尔（Alastor），具有雷电属性。",
			keyword: "dianjipao djp 電擊炮"
		},
		sell: 41,
		colors: "yellow,blue,white",
		shapes: "bullet",
		synergies: [
			"Alistair's Ladder",
			"Battery Powered",
			"Chain Lightning",
			"Future Gangster",
			"Lotus Bloom",
			"Neo Tech, Yo",
			"Pistol Machine",
			"Wave Beam"
		]
	},
	"Devolver Rounds": {
		id: 76,
		name: "Devolver Rounds",
		icon: "item/Devolver_Rounds.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "Devolver子弹",
			tips: "击中敌人有概率使其退化成{{ENEMY:Arrowkin}}",
			trivia: "物品名引用自本游戏的发行商{Devolver Digital}，道具图片上的{D}来自于他们的 LOGO。",
			keyword: "Devolverzidantuihuadan Devolverzd thd Devolver子彈 退化彈 退化弹",
			unlock: "花费 26{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "yellow,red,white",
		shapes: "bullet"
	},
	"Vorpal Bullets": {
		id: 77,
		name: "Vorpal Bullets",
		icon: "item/Vorpal_Bullets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "斩首弹",
			tips: "有概率射出暴击子弹（造成更高伤害），类似于{{GUN:Vorpal Gun}}的暴击射击。",
			notes:
				"有概率射出暴击子弹（造成更高伤害），类似于{{GUN:Vorpal Gun}}的暴击射击。\r\n在{{GAME_MODE:Winchester's Game}}中如果触发暴击，会导致射出的子弹失去反弹效果，建议在射击前丢出来。",
			trivia:
				"{Vorpal}来自童话《爱丽丝梦游仙境》中的一首诗《Jabberwocky》，是作者路易斯·卡罗尔（Lewis Carroll）创造的无意义词，在该童话故事中，恶龙 Jabberwocky 被爱丽丝手持{Vorpal Swords（Vorpal宝剑）}所斩杀，后来 Vorpal 用于形容锋利的刃。\r\n{{SYNERGY:Snicker-snack}}的组合名“Snicker-snack”也是引用自这首诗，汉化取的是诗名“Jabberwocky”的音译“伽卜沃奇”。\r\n<g>One, two! One, two! And through and through<br/>一、二！一、二！勇往直前，<br/>The {vorpal} blade went {snicker-snack}!<br/>长剑出鞘虎视眈眈！<br/>He left it dead, and with its head<br/>双刃饮血，提着头<br/>He went galumphing back.<br/>他得意洋洋凯旋。</g>\r\n《黑子的篮球》剧场版《EXTRA GAME》中也引用了这个梗，美国有名的篮球队“Jabberwock”到日本虐菜，在压倒性的胜利后嘲笑日本篮球，激怒了丽子的父亲景虎，他集结了黑子、火神和“奇迹的世代”组成梦之队“Vorpal Swords”前去复仇。",
			keyword: "zhanshoudanbaojidan zsd bjd 斬首彈 暴擊彈 暴击弹",
			unlock: "花费 26{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 41,
		colors: "red,yellow,gray,black",
		shapes: "bullet",
		synergies: ["Snicker-snack"]
	},
	"Katana Bullets": {
		id: 78,
		name: "Katana Bullets",
		icon: "item/Katana_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "武士刀子弹",
			tips: "+1{{SYSTEM:Curse}}。\r\n击杀敌人后，有概率在击杀敌人的子弹的路径上生成刀光攻击敌人。刀光会击退玩家和敌人。",
			notes:
				"+1{{SYSTEM:Curse}}。\r\n击杀敌人后，有概率在击杀敌人的子弹的路径上生成刀光攻击敌人。刀光会击退玩家和敌人。\r\n- 刀光的击退效果可能间接给玩家带来伤害，如把玩家推到子弹上或坑里，或者把敌人推到玩家跟前，如果推过来一颗{{ENEMY:Pinhead}}…\r\n- {{SYSTEM:Companion}}也可以触发该效果，注意不要被小跟班的刀光坑到。\r\n- {{ITEM:Table Tech Shotgun}}的子弹杀死敌人也可以触发该效果。\r\n- 刀光可以触发{{ITEM:Sunglasses}}。",
			trivia:
				"物品简介“折叠锻打（Folded Lead）”引用自日本刀的锻造方式。\r\n物品说明引用自本游戏发行商 Devolver Digital 自家的游戏《Katana ZERO》。",
			keyword: "wushidaozidan wsdzd 武士刀子彈",
			unlock: "打败{{CHAMBER:R&G Dept.}}的 BOSS"
		},
		sell: 21,
		colors: "brown,yellow,white",
		shapes: "bullet"
	},
	"Hungry Bullets": {
		id: 79,
		name: "Hungry Bullets",
		icon: "item/Hungry_Bullets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "饥饿子弹",
			tips: "射出可以吞噬敌人子弹的蓝色子弹，每 3.3333 秒可触发一次。\r\n一次射出越多子弹的枪效果越好，如霰弹枪。",
			notes:
				"射出可以吞噬敌人子弹的蓝色子弹，每 3.3333 秒可触发一次。\r\n一次射出越多子弹的枪效果越好，如霰弹枪。\r\n{{GUN:Phoenix}}喷出的近距离火焰如果触发该效果，也可以吞噬敌人的子弹。",
			trivia:
				"物品外观和简介“好饿好饿（Hungry Hungry）”引用自在美国家喻户晓的桌游《饥饿河马（Hungry Hungry Hippos）》，玩家控制 4 匹河马吃弹珠，收集弹珠最多的玩家获胜。\r\n[(~data/Hungry_Hungry_Hippos.jpg)]",
			keyword: "jiezidan jezd 饑餓子彈",
			unlock: "被{{ENEMY:Tarnisher}}吃掉"
		},
		sell: 41,
		colors: "yellow,blue,black",
		shapes: "bullet"
	},
	"Heavy Bullets": {
		id: 80,
		name: "Heavy Bullets",
		icon: "item/Heavy_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "重子弹",
			tips: "+25% 伤害，-50% 弹速，+25% 子弹大小，双倍((击退))效果。\r\n增加击退和降低弹速对射程短的枪来说是负面效果。",
			notes:
				"+25% 伤害，-50% 弹速，+25% 子弹大小，双倍((击退))效果。\r\n增加击退和降低弹速对射程短的枪来说是负面效果。\r\n枪丢出后会变大，重新拾取会保留变大状态，只是外观效果，对游戏没有影响。\r\n{{ITEM:Rocket-Powered Bullets}}可以增加弹速，减轻的{{ITEM:Heavy Bullets}}带来的负面影响。",
			trivia: "引用自 roguelike 第一人称射击游戏《Heavy Bullets》\r\n[(~data/Heavy_Bullets.jpg)]",
			keyword: "zhongzidan zzd 重子彈"
		},
		sell: 21,
		colors: "gray",
		shapes: "bullet",
		synergies: [
			"Alternative Rock",
			"Heavy Jolt",
			"Heavy Metal",
			"Iron Slug",
			"Massive Effect",
			"Nailed It!",
			"Over Dose"
		]
	},
	"Bouncy Bullets": {
		id: 81,
		name: "Bouncy Bullets",
		icon: "item/Bouncy_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "弹性子弹",
			tips: "子弹可以反弹 2 次",
			notes:
				"子弹可以反弹 2 次。\r\n配合{{ITEM:Snowballets}}使用，反弹效果给予子弹更长的飞行距离，可以变得更大。\r\n触发{{ITEM:Table Tech Rocket}}飞出的桌子也可以反弹 2 次。",
			keyword: "tanxingzidan txzd 彈性子彈"
		},
		sell: 21,
		colors: "yellow,purple",
		shapes: "bullet",
		synergies: ["Absent Minded"]
	},
	"Explosive Rounds": {
		id: 82,
		name: "Explosive Rounds",
		icon: "item/Explosive_Rounds.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "爆炸弹丸",
			tips: "子弹击中敌人或障碍物有 8.5% 概率((爆炸))，额外造成 25 点伤害，每秒最多只会触发 1 次。\r\n爆炸不会对玩家造成伤害。\r\n",
			notes:
				"子弹击中敌人或障碍物有 8.5% 概率((爆炸))，额外造成 25 点伤害，每秒最多只会触发 1 次。\r\n- 爆炸不会对玩家造成伤害。\r\n- 爆炸可以摧毁一些固定装置（如三层的铁轨移动炮台）。\r\n- 拥有{{ITEM:Angry Bullets}}时，如果同时触发，会优先执行反弹，不会爆炸。\r\n- 拥有{{ITEM:Irradiated Lead}}时，爆炸效果有时会在地上留下一滩毒液。\r\n- 拥有{{ITEM:Hot Lead}}时，爆炸效果有时会在地上留下一片火焰。\r\n- {{GUN:Alien Engine}}触发爆炸效果会在地上留下一小片火焰。\r\n- 初始枪配合爆炸效果可以显示{{ROOM:Secret Room}}墙壁。\r\n",
			trivia:
				"物品简介“大爆炸（Mega Blast）”引用自纵向卷轴射击游戏《氙星异形 2（Xenon 2 Megablast）》",
			keyword: "baozhadanwan bzdw 爆炸彈丸"
		},
		sell: 41,
		colors: "yellow,red,black",
		shapes: "bullet",
		synergies: ["Air Support", "Cerebral Bros", "Reactive", "Shot Across The Bow"]
	},
	"Ghost Bullets": {
		id: 83,
		name: "Ghost Bullets",
		icon: "item/Ghost_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "幽灵子弹",
			tips: "子弹可以((穿透))敌人和障碍物，每颗子弹只能穿透一个敌人，对其造成一半伤害。\r\n对爆炸类的枪来说是负面效果。",
			notes:
				"子弹可以((穿透))敌人和障碍物，每颗子弹只能穿透一个敌人，对其造成一半伤害。\r\n对爆炸类的枪来说是负面效果，子弹打中第一个敌人不会爆炸，而是穿透过去，碰撞到下一个敌人或者墙壁才会爆炸，在打 BOSS 时更明显。这种情况可以考虑先扔出来，清完房间再捡回来。\r\n配合{{ITEM:Bouncy Bullets}}使用可能会好些，子弹能反弹有更多的机会打中同个敌人。",
			keyword: "youlingzidan ylzd 幽靈子彈"
		},
		sell: 21,
		colors: "yellow,red,white",
		shapes: "bullet",
		synergies: ["Electron Pack", "Ghost With The Most", "Reanimate"]
	},
	"Alpha Bullet": {
		id: 84,
		name: "Alpha Bullet",
		icon: "item/Alpha_Bullet.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "A级子弹",
			tips: "弹夹的第一颗子弹增加 80% 伤害。\r\n对弹夹只有一颗子弹的枪加成极大，因为每枪都有伤害加成。",
			notes:
				"弹夹的第一颗子弹增加 80% 伤害。\r\n对弹夹只有一颗子弹的枪加成极大，因为每枪都有伤害加成。\r\n{{GUN:Blasphemy}}只有二次装弹后的第一发剑气有加成效果。",
			trivia: "alpha（α）是希腊字母表的第一个字母。",
			keyword: "Ajizidanaerfa Ajzd aef A級子彈 阿爾法 阿尔法",
			unlock: "解锁{{ITEM:The Bullet That Can Kill The Past}}"
		},
		sell: 41,
		colors: "yellow,black",
		shapes: "bullet",
		synergies: [
			"Added Effect - Fire",
			"Added Effect - Ice",
			"Added Effect - Poison",
			"J am",
			"Root"
		]
	},
	"Omega Bullets": {
		id: 85,
		name: "Omega Bullets",
		icon: "item/Omega_Bullets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "终极子弹",
			tips: "弹夹的最后一颗子弹增加 100% 伤害。\r\n对弹夹只有一颗子弹的枪加成极大，因为每枪都有伤害加成。\r\n对弹夹最后一颗子弹是特殊子弹的枪也有较大加成，如{{GUN:The Judge}}。\r\n对光束类的枪没有加成效果。",
			trivia:
				"omega（Ω）是希腊字母表的最后一个字母。\r\n组合{{SYNERGY:Ruby Weapon}}{{SYNERGY:Diamond Weapon}}{{SYNERGY:Emerald Weapon}}引用自《最终幻想7》的五个武器 BOSS，当星球陷入危机时出现的 5 只巨大怪物，为了世界的再生而将旧世界的一切破坏殆尽归还于无。这 5 只武器分别适应不同的地形并按照宝石的名字来命名：\r\n- 空中的终极武器（アルテマウェポン/Ultimate Weapon）\r\n- 陆上的钻石武器（ダイヤウェポン/Diamond Weapon）\r\n- 水中的蓝宝石武器（サファイアウェポン/Sapphire Weapon）\r\n- 深海的绿宝石武器（エメラルドウェポン/Emerald Weapon）\r\n- 沙漠的红宝石武器（ルビーウェポン/Ruby Weapon）",
			keyword: "zhongjizidanoumiqie zjzd omq 終極子彈 歐米伽 欧米伽",
			unlock: "解锁{{ITEM:The Bullet That Can Kill The Past}}"
		},
		sell: 41,
		colors: "yellow,black",
		shapes: "bullet",
		synergies: ["Diamond Weapon", "Emerald Weapon", "J am", "Ruby Weapon", "Remnant"]
	},
	Scattershot: {
		id: 86,
		name: "Scattershot",
		icon: "item/Scattershot.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "散射",
			tips: "子弹分裂成 3 颗，每颗伤害为原来的 55%，3 倍后坐力。\r\n如果所有子弹都打中，伤害提升为原来的 65%。",
			notes:
				"子弹分裂成 3 颗，每颗伤害为原来的 55%，3 倍后坐力。\r\n如果所有子弹都打中，伤害提升为原来的 65%，配合{{ITEM:Remote Bullets}}或子弹带有((跟踪))效果的枪更容易实现。\r\n- 光束类武器的激光会分裂成 3 条小激光。\r\n- {{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}受此效果影响，每次会射出三颗子弹，虽然精准度降低，但也有更高的几率打中靶子\r\n- {{GUN:Eye of the Beholster}}弹夹最后一发会生成 3 只{{ENEMY:Beadie}}\r\n- {{GUN:Dark Marker}}的蓄力射击会因为子弹错开而无法触发碰撞爆炸和{{PICKUP:Blank}}效果。\r\n- 配合{{ITEM:Double Vision}}可以射出 6 颗子弹。\r\n- 同时拥有{{ITEM:Helix Bullets}}，不是发射 6 颗子弹，而是 4 对{{ITEM:Helix Bullets}}的子弹，每颗伤害为原来的 36%（在{{ITEM:Helix Bullets}}的数据里是 26.4%，存疑）。\r\n- 同时拥有{{ITEM:Backup Gun}}，背后的子弹也会触发该效果",
			keyword: "sanshe ss 散射"
		},
		sell: 30,
		colors: "yellow,red,black,purple",
		shapes: "bullet",
		synergies: ["Dumb Smart Bullets", "Laser Light Show"]
	},
	"Irradiated Lead": {
		id: 87,
		name: "Irradiated Lead",
		icon: "item/Irradiated_Lead.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "辐射铅弹",
			tips: "有概率射出绿色子弹，可以让敌人((中毒))，造成 2.5 秒内每秒 3 点伤害。",
			notes:
				"有概率射出绿色子弹，可以让敌人((中毒))，造成 2.5 秒内每秒 3 点伤害。\r\n子弹类的枪有 50% 概率射出绿色子弹，光束类的枪每秒有 25% 概率让敌人中毒。\r\n{{ITEM:Explosive Rounds}}和带((爆炸))效果的枪，子弹爆炸时有概率在地上留下一滩毒液。",
			keyword: "fusheqiandan fsqd 輻射鉛彈"
		},
		sell: 30,
		colors: "yellow,green,black",
		shapes: "bullet",
		synergies: [
			"Added Effect - Poison",
			"Beta Ray",
			"Emerald Weapon",
			"Natural Selection",
			"Pandemic Pistol"
		]
	},
	"Hot Lead": {
		id: 88,
		name: "Hot Lead",
		icon: "item/Hot_Lead.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "赤炎弹头",
			tips: "有概率射出红色子弹，可以让敌人((燃烧))",
			notes:
				"有概率射出红色子弹，可以让敌人((燃烧))。\r\n子弹类的枪有 20% 概率射出红色子弹，光束类的枪每秒有 25% 概率让敌人燃烧。\r\n带((爆炸))效果的枪，子弹爆炸时有概率在地上留下一片火焰。\r\n可以在地上留下((冰))的枪，会变成留下火焰。",
			keyword: "chiyandantou cydt 赤炎彈頭",
			unlock: "花费 5{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "yellow,black,red",
		shapes: "bullet",
		synergies: [
			"Added Effect - Fire",
			"Get Equipped With -H-",
			"Hidden Tech Flare",
			"Hot Ones",
			"Phoenix Up",
			"Plasma Beam",
			"Ruby Weapon",
			"Special Reserve"
		]
	},
	"Battery Bullets": {
		id: 89,
		name: "Battery Bullets",
		icon: "item/Battery_Bullets.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "电池子弹",
			tips: "免疫水电伤害。\r\n子弹经过水时会导电，水电可以对敌人造成伤害。\r\n降低 50% 子弹偏移，双倍精准度。\r\n{{GUNGEONEER:The Robot}}的初始被动道具。",
			notes:
				"免疫水电伤害。\r\n子弹经过水时会导电，水电可以对敌人造成伤害。\r\n降低 50% 子弹偏移，双倍精准度。\r\n{{GUNGEONEER:The Robot}}的初始被动道具，它身上的{{ITEM:Battery Bullets}}不能丢弃。\r\n- 能让地面的水结冰的效果（如{{ITEM:Frost Bullets}}{{GUN:Ice Breaker}}），会削弱{{ITEM:Battery Bullets}}的作用，因为冰不导电。",
			keyword: "dianchizidan dczd 電池子彈",
			unlock: "使用{{GUNGEONEER:The Robot}}击败{{BOSS:High Dragun}}"
		},
		sell: 16,
		colors: "yellow,red",
		shapes: "bullet"
	},
	"Frost Bullets": {
		id: 90,
		name: "Frost Bullets",
		icon: "item/Frost_Bullets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "霜子弹",
			tips: "有概率射出浅蓝色子弹，可以((冰冻))敌人",
			notes: "有概率射出浅蓝色子弹，可以((冰冻))敌人。\r\n枪的射击频率越低概率越大。",
			keyword: "shuangzidan szd 霜子彈"
		},
		sell: 41,
		colors: "yellow,blue",
		shapes: "bullet",
		synergies: [
			"Added Effect - Ice",
			"Arctic Warfare",
			"Cold Ones",
			"Diamond Weapon",
			"Frosty the Bullet Tyrant",
			"Ice Beam",
			"Ice To Meet You",
			"Willing To Sacrifice"
		]
	},
	"Charming Rounds": {
		id: 91,
		name: "Charming Rounds",
		icon: "item/Charming_Rounds.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "魅力弹丸",
			tips: "有概率射出带((魅惑))效果的子弹",
			notes:
				"有概率射出带((魅惑))效果的子弹。\r\n子弹类的枪有 7.5% 概率射出魅惑子弹，光束类的枪每秒有 10% 概率魅惑敌人。",
			keyword: "meilidanwan mldw 魅力彈丸",
			unlock: "花费 14{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "yellow,purple,black",
		shapes: "bullet",
		synergies: ["Ravishing", "Unbelievably Charming"]
	},
	"Magic Bullets": {
		id: 92,
		name: "Magic Bullets",
		icon: "item/Magic_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "魔术子弹",
			tips: "子弹有小概率将敌人((变成鸡))",
			notes:
				"子弹有小概率将敌人((变成鸡))。\r\n可以把一些正常情况下无法杀死的敌人变成鸡，如{{ENEMY:Gunreaper}}。",
			trivia:
				"物品简介“简易的高级魔法（Sufficiently Advanced）”引用自亚瑟·查理斯·克拉克（Arthur Charles Clarke）提出的{克拉克基本定律（Clarke's three laws）}的第三定律：\r\n<g>Any {sufficiently advanced} technology is indistinguishable from magic.<br/>在任何一项足够先进的技术和魔法之间，我们无法作出区分。</g>",
			keyword: "moshuzidan mszd 魔術子彈",
			unlock: "花费 18{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "purple,yellow,brown",
		shapes: "bullet",
		synergies: ["Chicken Arise", "Runic"]
	},
	"Fat Bullets": {
		id: 93,
		name: "Fat Bullets",
		icon: "item/Fat_Bullets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "胖胖子弹",
			tips: "子弹变大一倍，双倍((击退))效果，+30% 伤害，-10% 子弹容量。",
			notes:
				"子弹变大一倍，双倍((击退))效果，+30% 伤害，-10% 子弹容量。\r\n- 子弹太大有时是负面效果，如在走廊或者靠近墙壁的位置，子弹射出时可能碰到墙壁，不能如愿飞向目标。\r\n- 子弹容量变小可以通过一个小技巧规避，假设枪的子弹容量为 100，在满弹药时拾取{{ITEM:Fat Bullets}}，子弹容量会显示为 90，但实际上还是可以射击 100 次。所以在拾取弹药包前，先把{{ITEM:Fat Bullets}}扔出来就行了。\r\n- 枪丢出后会变大一倍，重新拾取会保留变大状态，只是外观效果，对游戏没有影响。\r\n- 掀桌触发{{ITEM:Table Tech Rocket}}效果，飞出的桌子也会变大一倍，可以挡住更多子弹，推飞更多敌人，但也更容易碰到障碍物提前爆炸。\r\n- {{GUN:Eye of the Beholster}}弹夹最后一发生成的{{ENEMY:Beadie}}也会变大。",
			trivia:
				"可能引用自《以撒的结合（The Binding of Isaac）》，很多提升伤害的道具同时也会让眼泪变大",
			keyword: "panpanzidan ppzd 胖胖子彈",
			unlock: "花费 6{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 41,
		colors: "yellow,red,blue,black",
		shapes: "bullet",
		synergies: ["Iron Slug", "Massive Effect"]
	},
	"Angry Bullets": {
		id: 94,
		name: "Angry Bullets",
		icon: "item/Angry_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "愤怒的小子弹",
			tips: "子弹打中敌人会向随机方向((反弹))1次，反弹后的子弹与原来的子弹效果相同，伤害减半。\r\n带((穿透))效果的子弹，会自动弹向附近的敌人，而非随机方向。",
			notes:
				"子弹打中敌人会向随机方向((反弹))1次，反弹后的子弹与原来的子弹效果相同，伤害减半。\r\n带((穿透))效果的子弹，会自动弹向附近的敌人，而非随机方向。\r\n- 光束类武器会向随机方向折射。\r\n- 爆炸类武器不会因为碰撞到敌人而爆炸。\r\n- 配合{{GUN:Railgun}}可以很轻松的清小怪。\r\n- 打大型 BOSS 时，{{GUN:Magic Lamp}}可以打中多次，更频繁的触发灯神攻击。",
			keyword: "fennudexiaozidan fndxzd 憤怒的小子彈",
			unlock: "花费 8{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 21,
		colors: "yellow,red,black,white",
		shapes: "bullet",
		synergies: ["Needless Acrimony", "Rabid"]
	},
	"Blank Bullets": {
		id: 95,
		name: "Blank Bullets",
		icon: "item/Blank_Bullets.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "空弹子弹",
			tips: "+1.5{{SYSTEM:Curse}}。\r\n子弹射中障碍物或敌人，有几率触发小范围{{PICKUP:Blank}}效果。\r\n可以打开{{ROOM:Secret Room}}入口，即使使用的是无限弹药的枪。",
			notes:
				"+1.5{{SYSTEM:Curse}}。\r\n子弹射中障碍物或敌人，有几率触发小范围{{PICKUP:Blank}}效果。\r\n- 可以打开{{ROOM:Secret Room}}入口，即使使用的是无限弹药的枪。\r\n- 枪的射速越慢，触发{{PICKUP:Blank}}效果的概率越高，射速越快触发的概率越低。\r\n- 该{{PICKUP:Blank}}效果可以触发{{SYSTEM:Ammolet}}效果。\r\n- 光束类的枪不会触发该效果。\r\n- 不能触发{{SHRINE:Blank}}。\r\n- {{GUN:Bullet}}{{GUN:Shell}}可以频繁触发该效果，因为子弹发射的子弹也有几率触发该效果。\r\n- 如果拥有{{ITEM:Ser Junkan}}和{{ITEM:Gold Junk}}，机甲战士的机械枪每次射击都会触发该效果。",
			trivia:
				"物品简介引用自著名格言{进攻是最好的防御（The best defense is a good offense）}，很好地诠释了该道具的作用：你的攻击可以保护你。",
			keyword: "kongdanzidan kdzd 空彈子彈",
			unlock: "花费 28{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 54,
		colors: "blue,yellow",
		shapes: "bullet",
		synergies: ["Elder Blank Bullets"]
	},
	"Orbital Bullets": {
		id: 96,
		name: "Orbital Bullets",
		icon: "item/Orbital_Bullets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "环绕子弹",
			tips: "没有打中敌人的子弹在碰撞到墙壁后，会环绕玩家，类似于{{GUN:Mr. Accretion Jr.}}。",
			notes:
				"没有打中敌人的子弹在碰撞到墙壁后，会环绕玩家，类似于{{GUN:Mr. Accretion Jr.}}。\r\n凭空消失的子弹不会触发该效果，如射程太短无法打到墙壁的子弹、被{{ENEMY:Bombshee}}摧毁的子弹。\r\n{千万要注意！环绕的子弹可能摧毁未打开的{{SYSTEM:Chest}}或打爆炸药桶}。\r\n- {{GUN:Molotov Launcher}}射出的小燃烧瓶打中墙壁，环绕物是一个火球。\r\n- 环绕的子弹不能显示{{ROOM:Secret Room}}墙壁。\r\n- 如果环绕的子弹数量达到上限，则下一颗子弹会反弹。\r\n- 如果拥有{{ITEM:Snowballets}}，环绕的子弹会不断变大，这可以制造巨大伤害的子弹，但同时会遮挡视线。如果子弹带穿透效果，可能会造成游戏卡顿延迟。\r\n- 谨慎使用可能会对玩家造成伤害的武器，如{{GUN:Shotgun Full of Hate}}{{GUN:Molotov Launcher}}，它们的环绕子弹打到障碍物（如各种瓶瓶罐罐）会在地上生成毒液或火焰。\r\n- 小跟班打空的子弹也会环绕玩家。\r\n- 参加{{GAME_MODE:Winchester's Game}}之前，切记要丢出{{ITEM:Orbital Bullets}}，因为它会导致{{GUN:Prize Pistol}}射出的子弹无法反弹。\r\n- 对{{GUN:Casey}}射出的隐形子弹同样有效\r\n- 激光也会触发环绕效果，但环绕的激光不会穿透墙壁，会被墙壁挡住，导致激光类武器在小房间里难以使用。",
			keyword: "huanraozidan hrzd 環繞子彈",
			unlock: "花费 28{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 41,
		colors: "blue,yellow,red",
		shapes: "bullet",
		synergies: ["Battle Mode", "Orrery"]
	},
	"Homing Bullets": {
		id: 97,
		name: "Homing Bullets",
		icon: "item/Homing_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "自引导子弹",
			tips: "子弹有 20% 概率带((跟踪))效果",
			notes: "子弹有 20% 概率带((跟踪))效果。\r\n((跟踪))的效果比{{ITEM:Crutch}}的强。",
			keyword: "ziyindaozidan zydzd 自引導子彈"
		},
		sell: 30,
		colors: "yellow,red,black",
		shapes: "bullet",
		synergies: ["Dumb Smart Bullets", "Smart Bombs"]
	},
	"Shadow Bullets": {
		id: 98,
		name: "Shadow Bullets",
		icon: "item/Shadow_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "阴影子弹",
			tips: "每次射击有 15% 概率额外射出一颗子弹。",
			notes:
				"每次射击有 15% 概率额外射出一颗子弹。\r\n额外射出的子弹的弹道不会被改变，如{{ITEM:Helix Bullets}}{{ITEM:Remote Bullets}}。",
			trivia:
				"物品简介“双击（Double Tap）”引用自现实生活中士兵和刺客常用的一种枪战技巧，连续两次快速点射，提高打中目标的概率。这种技巧有个典型的应用是近战枪技{莫桑比克射击法（Mozambique Drill）}，先向目标身躯快速打两枪（Double tap），然后迅速向上往目标头部打一枪（Head shot）。前两枪的目的是为了更快更准确地击中目标，削弱目标的反抗能力，打胸部总比打头部容易，第三枪补射直接破坏大脑，确保击杀目标。",
			keyword: "yinyingzidan yyzd 陰影子彈"
		},
		sell: 30,
		colors: "blue,brown,white",
		shapes: "bullet",
		synergies: ["Chain Lightning", "Gruber's Bane", "Kage Bunshin", "Mr. Shadow", "Noxin Cannon"]
	},
	"Easy Reload Bullets": {
		id: 99,
		name: "Easy Reload Bullets",
		icon: "item/Easy_Reload_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "易装子弹",
			tips: "一次翻滚装弹一颗。\r\n对弹夹只有一颗或弹夹最后一颗子弹有特效的枪很有用，如{{GUN:H4mmer}}。",
			keyword: "yizhuangzidan yzzd 易裝子彈"
		},
		sell: 21,
		colors: "yellow,white",
		shapes: "bullet",
		synergies: ["Reload Roll"]
	},
	"Stout Bullets": {
		id: 100,
		name: "Stout Bullets",
		icon: "item/Stout_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "肥壮弹",
			tips: "子弹初始体积变大50%，弹速降低30%，伤害增加，随着飞出的距离越远，体积越小，伤害越低。\r\n不同的枪，伤害调整范围不同，加成范围为 +33%~+75%，降低范围为 -12.5~-33%",
			notes:
				"子弹初始体积变大50%，弹速降低30%，伤害增加，随着飞出的距离越远，体积越小，伤害越低。\r\n- 不同的枪，伤害调整幅度不同，加成范围为 33%~75%，降低范围为 12.5~33%。换个比较容易理解的说法，在极限情况下，子弹随着飞出的距离，伤害可能从一开始的 +75% 到最后 -33%\r\n- 枪丢出后会变大，重新拾取会保留变大状态，只是外观效果，对游戏没有影响。\r\n- 如果同时拥有{{ITEM:Fat Bullets}}，子弹会变得非常大，这有时不是好事儿，如在走廊或者靠近墙壁的位置，子弹射出时可能碰到墙壁，不能如愿飞向目标。",
			keyword: "feizhuangdan fzd 肥壯彈",
			unlock: "花费 12{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "yellow,black",
		shapes: "bullet",
		synergies: ["Dwarven Stout", "Iron Slug", "Massive Effect"]
	},
	Snowballets: {
		id: 101,
		name: "Snowballets",
		icon: "item/Snowballets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "雪球弹",
			tips: "子弹的大小和伤害随着飞出的距离增加",
			notes:
				"子弹的大小和伤害随着飞行的距离增加。\r\n- 几乎可以完全抵消{{ITEM:Stout Bullets}}随着飞行距离减小体积和伤害的负面效果。\r\n- 配合{{ITEM:Remote Bullets}}使用，可以控制子弹保留更久，不断积累伤害。",
			trivia:
				"来源于常用比喻“雪球越滚越大”。\r\n物品介绍中提到的“地牢中唯一的围巾（sole scarf in the Gungeon）”很可能是指{{ITEM:Bloodied Scarf}}，因为游戏中叫“围巾（scarf）”的物品只有这个。",
			keyword: "xueqiudan xqd 雪球彈",
			unlock: "花费 26{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 41,
		colors: "yellow,white",
		shapes: "bullet",
		synergies: ["Arctic Warfare", "Ice Accumulation", "Snowball Shotgun"]
	},
	"Remote Bullets": {
		id: 102,
		name: "Remote Bullets",
		icon: "item/Remote_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "远程子弹",
			tips: "增加 10% 伤害，子弹跟随枪的准星移动",
			notes:
				"增加 10% 伤害，子弹跟随枪的准星移动。\r\n使用键鼠时，准星即鼠标位置。\r\n使用手柄时，准星由右摇杆控制，如果不操作右摇杆，子弹默认飞向右侧。\r\n- 多数情况下，精准度变得没有意义，因为子弹都会飞向准星\r\n- 无法打到屏幕外的敌人，因为准星不可能移出屏幕\r\n- 可以控制子弹沿弧线飞行，所以可以躲在一个安全的角落输出\r\n- 对多方向射击的枪会有极大加成，如{{GUN:Crown of Guns}}{{GUN:Face Melter}}{{GUN:Directional Pad}}\r\n- 对被动道具产生的子弹有效，如{{ITEM:Gunboots}}\r\n- 对{{SYSTEM:Companion}}射出的子弹有效，如{{ITEM:Space Friend}}\r\n- 对{{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}有效\r\n- 对有多段伤害的枪的所有阶段有效，如{{GUN:Mass Shotgun}}，射出的大光球和大光球爆炸后射出的光束都会飞向准星\r\n- 对{{ITEM:Shadow Bullets}}产生的额外的子弹无效\r\n- 拥有{{ITEM:Helix Bullets}}时，子弹也会飞向准星，但螺旋弹道也会保留\r\n- 使用手柄时，{{GUN:Dark Marker}}的蓄力射击效果很难准确触发",
			keyword: "yuanchengzidanyaokongzidan yczd ykzd 遠程子彈 遙控子彈 遥控子弹"
		},
		sell: 21,
		colors: "gray",
		shapes: "bullet"
	},
	"Zombie Bullets": {
		id: 103,
		name: "Zombie Bullets",
		icon: "item/Zombie_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "僵尸子弹",
			tips: "打空的子弹有 25% 概率返还",
			notes:
				"打空的子弹有 25% 概率返还。\r\n{{ITEM:Super Space Turtle}}打空的子弹也可以触发该效果，返还到玩家当前使用的枪的弹药中。（纳尼？？）",
			keyword: "jiangshizidan jszd 僵屍子彈"
		},
		sell: 21,
		colors: "yellow,red,black",
		shapes: "bullet",
		synergies: ["Dawn of the Gundead", "Electron Pack"]
	},
	"Flak Bullets": {
		id: 104,
		name: "Flak Bullets",
		icon: "item/Flak_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "高射炮子弹",
			tips: "子弹打中敌人或障碍物，会分裂成几个小子弹，伤害平分，向外弹出一小段距离。",
			notes:
				"子弹打中敌人或障碍物，会分裂成几颗小子弹，伤害平分，向外弹出一小段距离。\r\n- 不同的枪分裂的数量不同，如{{GUN:Marine Sidearm}}分裂成 4 颗，{{GUN:Dungeon Eagle}}分裂成 3 颗，{{GUN:Winchester Rifle}}分裂成 7 颗。\r\n- {{GUN:Casey}}挥击会发出 3 颗高伤害子弹，被打回的敌人的子弹也会分裂成多个。\r\n- {{GUN:Alien Engine}}射击时会快速发射小子弹。\r\n- {{GUN:VertebraeK-47}}分裂的子弹之间不会有电链连接\r\n- 对光束类的枪无效，如{{GUN:Moonscraper}}{{GUN:Proton Backpack}}\r\n- 如果同时拥有 2 个{{ITEM:Flak Bullets}}（修改或游戏Bug），分裂出来的小子弹会继续分裂，直到游戏崩溃或者主动丢出{{ITEM:Flak Bullets}}。",
			keyword: "gaoshepaozidan gspzd 高射炮子彈",
			unlock: "花费 28{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 21,
		colors: "green,gray",
		shapes: "bullet",
		synergies: ["Anti-Aircraft"]
	},
	"Silver Bullets": {
		id: 105,
		name: "Silver Bullets",
		icon: "item/Silver_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "银子弹",
			tips: "对{{SYSTEM:Jammed Enemies}}造成的伤害增加 225%\r\n对 BOSS 造成的伤害增加 25%\r\n大部分子弹的外观会变成银灰色。",
			keyword: "yinzidan yzd 銀子彈",
			unlock: "花费 8{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 21,
		colors: "white,black",
		shapes: "bullet",
		synergies: ["Blessing and a Curse", "Chance On Hit", "Hell Singing", "Radiant"]
	},
	"Gilded Bullets": {
		id: 106,
		name: "Gilded Bullets",
		icon: "item/Gilded_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "镀金子弹",
			tips: "玩家拥有的{{PICKUP:Shell}}越多，伤害越高（上限500{{PICKUP:Shell}}，100%伤害增幅）。\r\n大部分子弹的外观会变成金色。",
			notes:
				'玩家拥有的{{PICKUP:Shell}}越多，伤害越高（上限500{{PICKUP:Shell}}，100%伤害增幅）。\r\n[["~{{PICKUP:Shell}}","50","100","150","200","250"],["~加成","19%","36%","51%","64%","75%"]]\r\n[["~{{PICKUP:Shell}}","300","350","400","450","500"],["~加成","84%","91%","96%","99%","100%"]]\r\n大部分子弹的外观会变成金色。',
			keyword: "dujinzidan djzd 鍍金子彈",
			unlock: "从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "yellow,red,blue",
		shapes: "bullet",
		synergies: [
			"Alternative Rock",
			"The Ecstasy Of Gold",
			"Gilded Tables",
			"Great Queen Ant",
			"King Bomber",
			"Resplendent"
		]
	},
	"Platinum Bullets": {
		id: 107,
		name: "Platinum Bullets",
		icon: "item/Platinum_Bullets.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "白金子弹",
			tips: "每次子弹击中敌人都增加伤害和射击频率（上限 3 倍）。\r\n大部分枪的外观会变成银色。",
			notes:
				"每次子弹击中敌人都增加伤害和射击频率（上限 3 倍）。\r\n增长效率受游戏进度影响，如果在很后面的关卡获得，会很快叠满。\r\n增加射击频率对光束类的枪来说是负面效果，会导致弹药消耗变快。\r\n大部分枪的外观会变成银色。",
			trivia:
				"物品简介“百万子弹（Over One Million Served）”引用自麦当劳的汉堡包销售量达到990亿时的口号“销量超过990亿啦（Over 99 Billion Served）”。\r\n物品说明“每打出一发子弹，他们就会变得更加强大（With each one served, they only grow more powerful）”其实是开发者想表达“每卖出一份游戏，我们就会变得更强大”，2017年7月《挺进地牢》销量突破 100 万，官方发了条推特：\r\n<g>Enter the Gungeon has gone {platinum} with {over 1 million copies sold} - thank you Gungeoneers!<br/>销量破百万，地牢已白金。感谢玩家！</g>",
			keyword: "baijinzidan bjzd 白金子彈",
			unlock: "花费 200{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 54,
		colors: "gray",
		shapes: "bullet",
		synergies: ["Alternative Rock"]
	},
	"Chaos Bullets": {
		id: 108,
		name: "Chaos Bullets",
		icon: "item/Chaos_Bullets.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "混沌子弹",
			tips: "子弹带有随机效果",
			notes:
				'子弹带有随机效果。\r\n各种效果的概率如下：\r\n- 反弹：10%\r\n- 穿透：10%\r\n- 变大：10%（体积+25%~+75%）\r\n- 有 10% 概率随机到下面的效果：\r\n[["~效果","~概率","~说明"],["减速","24.84%","让目标进入 10 秒的减速 60% 状态"],["中毒","24.84%","让目标在 10 秒内每秒受到 5 点伤害"],["燃烧","24.84%","让目标在 4 秒内每秒受到 4 点伤害"],["冰冻","12.24%","冰冻目标 10 秒"],["魅惑","12.42%","魅惑目标 10 秒"],["变形","0.62%","把目标变成鸡"]]\r\n可能同时随机到多种效果，使用{{ITEM:Ring of Triggers}}效果显著。\r\n对{{GAME_MODE:Winchester\'s Game}}的{{GUN:Prize Pistol}}有效，会导致弹速不确定，不好预判，建议扔出来。',
			trivia:
				"道具图标引用自混沌理论（chaos theory）里的蝴蝶效应（butterfly effect）。\r\n物品简介“品味痛苦的彩虹（Taste the Painbow）”引用自彩虹糖（Skittles）的广告语“Taste the Rainbow”。",
			keyword: "hundunzidan hdzd 混沌子彈",
			unlock:
				"{{GAME_MODE:Challenge Mode}}下击败{{BOSS:High Dragun}}\r\n或在{{GAME_MODE:Challenge Mode}}下进入游戏 30 次"
		},
		sell: 41,
		colors: "blue,yellow,brown",
		shapes: "bullet",
		synergies: ["Kaliber's Grip"]
	},
	"Cursed Bullets": {
		id: 109,
		name: "Cursed Bullets",
		icon: "item/Cursed_Bullets.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "被诅咒的子弹",
			tips: "每 1 点{{SYSTEM:Curse}}增加 10% 伤害（上限 10 点诅咒，100% 伤害增幅）。\r\n增加 1 点{{SYSTEM:Curse}}。\r\n子弹变紫并会冒出深蓝色的烟。",
			keyword: "beizuzhoudezidan bzzdzd 被詛咒的子彈",
			unlock: "击败{{ENEMY:Shadow Magician}} 5 次"
		},
		sell: 21,
		colors: "yellow,red,black",
		shapes: "bullet",
		synergies: ["Blessing and a Curse", "Kaliber k'pow uboom k'bhang", "Noxin Cannon"]
	},
	"Chance Bullets": {
		id: 110,
		name: "Chance Bullets",
		icon: "item/Chance_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "机会子弹",
			tips: "有概率射出背包中其它枪的子弹（不消耗那把枪的弹药）。",
			notes:
				"有概率射出背包中其它枪的子弹（不消耗那把枪的弹药）。\r\n- 对无限弹药的枪无效，只有一把枪时无效。\r\n- 不会射出{{GUN:Makeshift Cannon}}的子弹。\r\n- 光束类的枪只可能射出其它光束类子弹，且只会朝着触发时瞄准的方向发射，不会跟着准星移动，光束保留 1 秒。\r\n- 对{{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}有效，如果射出其它枪的子弹，不会摧毁靶子。",
			keyword: "jihuizidan jhzd 機會子彈",
			unlock: "{{GAME_MODE:Challenge Mode}}下进入{{CHAMBER:Black Powder Mine}}"
		},
		sell: 30,
		colors: "yellow,red",
		shapes: "bullet",
		synergies: ["Maximize Spell", "Turret Link"]
	},
	"Helix Bullets": {
		id: 111,
		name: "Helix Bullets",
		icon: "item/Helix_Bullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "螺旋子弹",
			tips: "射出的子弹分裂成两颗，每颗子弹伤害为原来的 66%，飞行轨迹变成螺旋弹道。\r\n如果所有子弹都打中，伤害增加 32%。",
			notes:
				"射出的子弹分裂成两颗，每颗子弹伤害为原来的 66%，飞行轨迹变成螺旋弹道。\r\n如果所有子弹都打中，伤害增加 32%。\r\n- 对带((跟踪))效果的枪是负面效果，会被修改成螺旋弹道，失去((跟踪))功能。如{{GUN:Bullet Bore}}{{GUN:Com4nd0}}。{{ITEM:Shadow Bullets}}产生的额外子弹会保留((跟踪))功能。\r\n- 对{{ITEM:Chance Bullets}}射出的其它枪的子弹无效。\r\n- 对于会射出多种类型子弹的枪，如{{GUN:Mr. Accretion Jr.}}{{GUN:Tetrominator}}，分裂出来的子弹类型随机。\r\n- {{GUN:Casey}}反弹的子弹不会分裂，但飞行轨迹会变成螺旋弹道。\r\n- 如果同时拥有{{ITEM:Remote Bullets}}，子弹会朝准星飞去，但过程中仍会保留螺旋弹道。\r\n- 对被动道具发射的子弹有效，如{{ITEM:Orange Guon Stone}}。\r\n- 对部分{{SYSTEM:Companion}}发射的子弹有效。\r\n- 如果同时拥有{{ITEM:Scattershot}}，不是发射 6 颗子弹，而是 4 对{{ITEM:Helix Bullets}}的子弹，每颗伤害为原来的 26.4%（在{{ITEM:Scattershot}}的数据里是 36%，存疑）。\r\n- 对{{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}有效，会导致弹道难以预计，强烈建议扔出来。\r\n- 对{{ITEM:Flak Bullets}}碰撞后分裂反弹的小子弹无效。\r\n- {{GUN:Zorgun}}弹夹最后一颗特殊子弹不会分裂，但会沿着螺旋弹道飞行。",
			trivia:
				"外观引用自《精灵宝可梦》初代的{螺贝化石（Helix Fossil）}，可以复活出菊石兽。物品说明印证了这点：\r\n<g>Fossilized bullets containing the DNA of some forgotten Gungeon creature.<br/>包含着一些生存在远古时期的被遗忘的地牢生物DNA的化石子弹。</g>\r\n物品简介“愿主保佑（Praise Be）”引用自 Twitch 多人协作模拟器游戏《口袋妖怪·红》（TwitchPlays Pokemon），每个人都可以在聊天室里输入希望执行的游戏指令——上、下、左、右、A、B、开始，最后统计出输入最多的指令，转换成游戏里的操作，10 万人历时 16 天终于通关了这个游戏。期间发生了件很有意思的事情，在该作宝可梦中，有个事件是从螺贝化石（Helix Fossil）和甲壳化石（Dome Fossil）中选择一个进行复活，两个选项在进行了一番激烈的竞争后，最终螺贝化石胜出，聊天室被“Praise Helix（赞美螺贝）”刷屏了。当螺贝化石成功复活出菊石兽时，又是满屏的“Lord Helix（我主螺贝）”，逐渐形成了一个梗，当指令出现分歧时，大家会发出“Praise Helix”和“Lord Helix”来祈祷或庆祝己方的胜利，类似于宗教里的“上帝保佑”。\r\n[(~data/Praise_Helix.jpg)]",
			keyword: "luoxuanzidan lxzd 螺旋子彈",
			unlock: "花费 16{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "brown",
		shapes: "bullet",
		synergies: ["Double Double Helix", "Dualing Pistol", "One Fish Two Fish"]
	},
	Bumbullets: {
		id: 112,
		name: "Bumbullets",
		icon: "item/Bumbullets.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "大黄蜂弹",
			tips: "射击时有概率生成蜜蜂((跟踪))敌人造成伤害。",
			notes:
				"射击时有概率生成蜜蜂((跟踪))敌人造成伤害。\r\n- 可以蓄力的枪在蓄力时，会定期生成蜜蜂，不消耗弹药，如{{GUN:Heroine}}。包括无限弹药的枪，如{{GUN:Casey}}。\r\n- {{GUN:Charmed Bow}}或拥有{{ITEM:Charming Rounds}}时，生成的蜜蜂可以((魅惑))敌人。\r\n- 生成的蜜蜂受{{ITEM:Scattershot}}影响，会分裂出更多蜜蜂。",
			keyword: "daihuangfengdan dhfd 大黃蜂彈",
			unlock: "花费 26{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "yellow,brown",
		shapes: "bullet",
		synergies: ["BEES", "Hidden Tech Bees"]
	},
	"Bloody 9mm": {
		id: 113,
		name: "Bloody 9mm",
		icon: "item/Bloody_9mm.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "血腥9毫米",
			tips: "每秒有 8% 概率射出一颗弹速快、带((跟踪))((穿透))((反弹))效果的子弹，在房间里飞来飞去对敌人造成伤害。",
			notes:
				"每秒有 8% 概率射出一颗弹速快、带((跟踪))((穿透))((反弹))效果的子弹，在房间里飞来飞去对敌人造成伤害。\r\n射击频率越低概率越大，如蓄满力的{{GUN:BSG}}几乎 100% 触发。",
			trivia:
				"引用自 Joe Abercrombie 的奇幻小说《The First Law》的主角 Logen Ninefingers，外号{The Bloody Nine}。",
			keyword: "xuexing9haomi xx9hm 血腥9毫米",
			unlock: "使用{{ITEM:Lament Configurum}} 20 次"
		},
		sell: 30,
		colors: "yellow,red",
		shapes: "bullet",
		synergies: ["Venom Veins"]
	},
	"Bionic Leg": {
		id: 114,
		name: "Bionic Leg",
		icon: "item/Bionic_Leg.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "仿生腿",
			tips: "+1.5 移速。\r\n获得一个{{PICKUP:Armor}}。",
			trivia:
				"物品简介“更像是机器而不是人类（More Machine Than Man）”引用自《星球大战6：绝地归来》的台词，阿纳金（Anakin）堕入邪恶，欧比旺（Obi-Wan）说：\r\n<g>he's more machine now than man. Twisted and evil.\r\n他现在更像是机器而不是人类，扭曲而邪恶。</g>",
			keyword: "fangshengtuijiatui fst jt 仿生腿 假腿 假腿"
		},
		sell: 21,
		colors: "gray,white",
		shapes: "shoe",
		synergies: [
			"Brave New World",
			"Future Gangster",
			"Neo Tech, Yo",
			"Pistol Machine",
			"Square Brace",
			"To Serve Android"
		]
	},
	"Shotgun Coffee": {
		id: 115,
		name: "Shotgun Coffee",
		icon: "item/Shotgun_Coffee.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "霰弹咖啡",
			tips: "+1.2 移速",
			trivia:
				"引用自“防弹咖啡（Bulletproof coffee）”，在咖啡中加入黄油和椰子油，难以消化，比较耐饿，可以像防弹一样防止肥胖。\r\n\r\n物品说明“含有的大量咖啡因，不要喝超过 99 杯”引用自美国喜剧动画片《飞出个未来（Futurama）》第 4 季第 16 集，主人公菲利浦·弗莱（Philip J. Fry）用退税的 $300 喝了 100 杯量的咖啡，从而拥有极快的速度。",
			keyword: "xiandankafei xdkf 霰彈咖啡"
		},
		sell: 21,
		colors: "yellow,red",
		shapes: "other",
		synergies: ["Five O'Clock Somewhere", "Shotgun Affinity"]
	},
	"Shotga Cola": {
		id: 116,
		name: "Shotga Cola",
		icon: "item/Shotga_Cola.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "霰弹可乐",
			tips: "+1.5 移速",
			trivia:
				"引用自德国希尔德布兰德巧克力厂 1936 年出品的黑巧克力{Scho-Ka-Kola}，含有大量咖啡因，有强烈的提神功效。二战期间 Scho-Ka-Kola 是德国国防军标准口粮之一。Scho-Ka-Kola 取自{Schokolade（巧克力）}{Kaffee（咖啡）}{Kolanuss（可乐果）}三个词的前缀。\r\n物品说明“把盖子留着”引用自《辐射（Fallout）》系列的核子可乐（Nuka Cola），它的瓶盖是废土上的通用货币。",
			keyword: "xiandankele xdkl 霰彈可樂"
		},
		sell: 21,
		colors: "yellow,red",
		shapes: "other",
		synergies: ["Five O'Clock Somewhere", "Shotgun Affinity"]
	},
	"Ballistic Boots": {
		id: 117,
		name: "Ballistic Boots",
		icon: "item/Ballistic_Boots.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "子弹靴",
			tips: "+2 移速",
			keyword: "zidanxuezidanxie zdx zdx 子彈靴 子彈鞋 子弹鞋"
		},
		sell: 30,
		colors: "red,yellow,black",
		shapes: "shoe",
		synergies: ["Knight Time", "Triple Jump"]
	},
	"Magic Sweet": {
		id: 118,
		name: "Magic Sweet",
		icon: "item/Magic_Sweet.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "魔术糖",
			tips: "+{{SYSTEM:Heart Container}}，+1.5 移速，+15% 伤害，+1{{SYSTEM:Coolness}}",
			trivia: "引用自《精灵宝可梦》系列的{神奇糖果（Rare Candy）}",
			keyword: "moshutang mst 魔術糖"
		},
		sell: 41,
		colors: "purple",
		shapes: "other",
		synergies: ["Sweetness and Light"]
	},
	"Disarming Personality": {
		id: 119,
		name: "Disarming Personality",
		icon: "item/Disarming_Personality.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "和善个性",
			tips: "商店打折 15%\r\n{{GUNGEONEER:The Pilot}}的初始被动道具。",
			notes:
				"商店打折 15%\r\n{{GUNGEONEER:The Pilot}}的初始被动道具。\r\n- {{ITEM:Gnawed Key}}{{ITEM:Prime Primer}}不会打折。\r\n- 如果商店售卖{{ITEM:Disarming Personality}}，它自身会打折。",
			keyword: "heshangexing hsgx 和善個性",
			unlock: "完成{{GUNGEONEER:The Pilot}}的{{CHAMBER:The Past}}"
		},
		sell: 21,
		colors: "blue,yellow",
		shapes: "other"
	},
	Mustache: {
		id: 120,
		name: "Mustache",
		icon: "item/Mustache.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "络腮胡",
			tips: "买东西有 50% 概率恢复{{PICKUP:Half Heart}}。",
			notes: "买东西有 50% 概率恢复{{PICKUP:Half Heart}}。",
			trivia:
				"物品图标和{{NPC:Bello}}的胡子一毛一样。\r\n物品说明“这个胡子会垂直整合你的购买协同效应”中的{垂直整合（vertically integrating）}是微观经济学和管理中的概念，指整合公司的价值链与供应商、经销商价值链，即整合一个产品的原料-生产-销售的各个阶段，从而减少总成本。",
			keyword: "luosaihu lsh 絡腮胡"
		},
		sell: 21,
		colors: "brown",
		shapes: "other",
		synergies: ["Block Party", "http://merch.devolverdigital.com", "Monsters and Monocles"]
	},
	"Lichy Trigger Finger": {
		id: 121,
		name: "Lichy Trigger Finger",
		icon: "item/Lichy_Trigger_Finger.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "死尸扳机指",
			tips: "+25% 射击频率",
			trivia:
				"引用自短语{itchy trigger finger（扳机手指发痒）}，指手指按在扳机上，就会有很强的欲望扣动扳机，难以控制地做出意料之外的事情。",
			keyword: "sishibanjizhi ssbjz 死屍扳機指"
		},
		sell: 16,
		colors: "blue,yellow,red",
		shapes: "other",
		synergies: ["Liches Get Stitches"]
	},
	"Lich's Eye Bullets": {
		id: 122,
		name: "Lich's Eye Bullets",
		icon: "item/Lich%27s_Eye_Bullets.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "巫妖之眼子弹",
			tips: "武器自动获得所有组合效果。\r\n{{GUNGEONEER:The Gunslinger}}的初始被动道具。",
			notes:
				"武器自动获得所有{{SYSTEM:Synergy}}效果。\r\n{{GUNGEONEER:The Gunslinger}}的初始被动道具。\r\n- 无法模拟不是作用在枪本身的组合效果，例如{{SYNERGY:Detective Mode}}，仍然需要{{ITEM:Badge}}召唤的警察叔叔来透视{{SYSTEM:Chest}}里的物品。\r\n- 所有双持组合效果无法模拟。\r\n- 会让枪变形的组合效果可能会覆盖其它组合效果。\r\n- 部分组合效果无法模拟，原因不明。",
			trivia:
				"引用自{万智牌（Magic: The Gathering）}克撒之眼（Urza's Eyes），两颗力量石是他无所不能的来源。\r\n杀死{{BOSS:Lich}}后的通过画面，在一堆灰烬中出现了该物品。",
			keyword: "wuyaozhiyanzidanqiangshou wyzyzd qs 巫妖之眼子彈 槍手 枪手",
			unlock: "解锁{{GUNGEONEER:The Gunslinger}}"
		},
		sell: 54,
		colors: "yellow,black",
		shapes: "bullet,heart"
	},
	"Enraging Photo": {
		id: 123,
		name: "Enraging Photo",
		icon: "item/Enraging_Photo.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "狂怒的照片",
			tips: "受伤后弹夹自动装满，短时间内伤害翻倍。\r\n{{GUNGEONEER:The Convict}}的初始被动道具。",
			notes:
				"受伤后弹夹自动装满，短时间内伤害翻倍。\r\n{{GUNGEONEER:The Convict}}的初始被动道具。\r\n可以带进角色的过去任务。",
			trivia:
				"照片上的人是{{BOSS:Black Stache}}，{{GUNGEONEER:The Convict}}过去任务里的 BOSS，背叛{{GUNGEONEER:The Convict}}为帝国效力。\r\n物品简介“不要相信他的谎言（Don't Believe His Lies）”引用自电影《记忆碎片（Memento）》，主角有一张拍立得照片，上面写着这句话。",
			keyword: "kuangnudezhaopian kndzp 狂怒的照片",
			unlock: "完成{{GUNGEONEER:The Convict}}的{{CHAMBER:The Past}}"
		},
		sell: 16,
		colors: "white,black,brown,red",
		shapes: "rect"
	},
	Ballot: {
		id: 124,
		name: "Ballot",
		icon: "item/Ballot.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "选票",
			tips: "+3{{SYSTEM:Coolness}}",
			keyword: "xuanpiao xp 選票"
		},
		sell: 21,
		colors: "gray,brown,red",
		shapes: "rect",
		synergies: ["Paperwork", "Revolution"]
	},
	"Live Ammo": {
		id: 125,
		name: "Live Ammo",
		icon: "item/Live_Ammo.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "活的子弹",
			tips: "免疫碰撞伤害，翻滚伤害提升为 15（原来为 3）。\r\n{{GUNGEONEER:The Bullet}}的专属初始被动道具。",
			notes:
				"免疫碰撞伤害，翻滚伤害提升为 15（原来为 3）。\r\n不能免疫{{BOSS:Wallmonger}}的碰撞伤害。\r\n如果同时拥有{{ITEM:Armor of Thorns}}，翻滚伤害提升为 105。如果同时拥有{{ITEM:Blast Helmet}}，翻滚伤害提升为 45。如果这 2 个同时拥有，翻滚伤害提升为 315。\r\n{{GUNGEONEER:The Bullet}}的专属初始被动道具，不能丢弃。",
			trivia: "物品名“Live Ammo”是“真实的子弹”和“活着的子弹”的双关语。",
			keyword: "huodezidan hdzd 活的子彈"
		},
		sell: 0,
		colors: "red,black",
		shapes: "other"
	},
	Eyepatch: {
		id: 126,
		name: "Eyepatch",
		icon: "item/Eyepatch.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "眼罩",
			tips: "+20%伤害，双倍子弹偏移，降低精准度",
			trivia:
				"物品说明引用自北欧神话中的众神之王{奥丁（Odin）}，他用右眼换取智慧之泉，获得鲁纳斯（Runes）的智慧，经常以戴眼罩的形象出现。",
			keyword: "yanzhao yz 眼罩",
			unlock: "花费 8{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 41,
		colors: "brown",
		shapes: "ring",
		synergies: ["Careful Iteration", "Iroquois"]
	},
	"Military Training": {
		id: 127,
		name: "Military Training",
		icon: "item/Military_Training.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "军事训练",
			tips: "-20% 装弹耗时。\r\n-17% 子弹偏移，增加精准度。\r\n-16.7% 蓄力耗时。\r\n{{GUNGEONEER:The Marine}}的初始被动道具。",
			notes:
				"-20% 装弹耗时。\r\n-17% 子弹偏移，增加精准度。\r\n-16.7% 蓄力耗时。\r\n{{GUNGEONEER:The Marine}}的初始被动道具。\r\n可以带进角色的过去任务。",
			keyword: "junshixunlian jsxl 軍事訓練",
			unlock: "完成{{GUNGEONEER:The Marine}}的{{CHAMBER:The Past}}"
		},
		sell: 21,
		colors: "green,yellow,white",
		shapes: "rect"
	},
	"Ring of the Resourceful Rat": {
		id: 128,
		name: "Ring of the Resourceful Rat",
		icon: "item/Ring_of_the_Resourceful_Rat.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "机智大鼠之戒",
			tips: "{{NPC:Resourceful Rat}}偷走枪或道具后，会还给你相同{{SYSTEM:Quality}}的枪或道具，每层最多使用一次，使用次数可累加。",
			notes:
				"{{NPC:Resourceful Rat}}偷走枪或道具后，会还给你相同{{SYSTEM:Quality}}的枪或道具，每层最多使用一次，使用次数可累加。\r\n- 被动道具只会换到被动道具，主动道具只会换到主动道具。\r\n- 如果老鼠偷走了{{ITEM:The Bullet That Can Kill The Past}}，会还给你一个S品质的被动道具。如果不是高品质的枪很烂，建议把交换次数累积到第五关，看能不能换到{{ITEM:Clone}}。\r\n- 如果玩家拥有{{SYNERGY:Resourceful Indeed}}变成了老鼠，老鼠不会出现，无法使用交换。可以离开要交换的物品所在的房间，然后丢出老鼠套装的部件，退出老鼠变身状态，这样老鼠就会重新出现。\r\n- 如果地上同时有多个物品，老鼠会和最后掉落（扔出）的物品交换。\r\n- 交换对{{ITEM:Junk}}和{{ITEM:Gnawed Key}}无效。\r\n- 不会换出无限弹药的枪。\r\n- 如果同一品质的物品都已交换过，会换到低一品质的物品。\r\n- 通过{{ITEM:Clone}}重生，交换次数会清空。",
			keyword: "jizhidashuzhijielaoshujiezhi jzdszj lsjz 機智大鼠之戒 老鼠戒指 老鼠戒指",
			unlock: "击败{{BOSS:Resourceful Rat}}的前2个阶段"
		},
		sell: 30,
		colors: "yellow,brown",
		shapes: "ring"
	},
	"Cartographer's Ring": {
		id: 129,
		name: "Cartographer's Ring",
		icon: "item/Cartographer%27s_Ring.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "制图师的戒指",
			tips: "下一层开始，有 50% 概率显示地图（不显示{{ROOM:Secret Room}}）。",
			keyword: "zhitushidejiezhi ztsdjz 製圖師的戒指"
		},
		sell: 21,
		colors: "yellow,brown,green",
		shapes: "ring"
	},
	"Amulet of the Pit Lord": {
		id: 130,
		name: "Amulet of the Pit Lord",
		icon: "item/Amulet_of_the_Pit_Lord.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "深坑之王的护身符",
			tips: "{免疫}((掉落))伤害",
			trivia:
				"引用自万智牌{Lord of the Pit（坑之王）}，卡的效果“要么牺牲一个其它生物，要么受到 7 点伤害”对应该道具的解锁方法“推 100 个敌人掉坑”，（获得后）掉坑就可以不受伤害。",
			keyword: "shenkengzhiwangdehushenfu skzwdhsf 深坑之王的護身符",
			unlock: "把敌人推进坑里 100 次"
		},
		sell: 16,
		colors: "purple,white",
		shapes: "ring",
		synergies: [
			"Bluer Guon Stone",
			"Clearer Guon Stone",
			"Firing With Flair",
			"Greener Guon Stone",
			"Oranger Guon Stone",
			"Pinker Guon Stone",
			"Redder Guon Stone",
			"Whiter Guon Stone"
		]
	},
	"Ring of Fire Resistance": {
		id: 131,
		name: "Ring of Fire Resistance",
		icon: "item/Ring_of_Fire_Resistance.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "耐火之戒",
			tips: "{免疫}((燃烧))伤害",
			keyword: "naihuozhijie nhzj 耐火之戒"
		},
		sell: 21,
		colors: "yellow,brown,red",
		shapes: "ring",
		synergies: ["Backdraft", "Great Queen Ant", "Hot Rolls", "Redder Guon Stone"]
	},
	"Ring of Miserly Protection": {
		id: 132,
		name: "Ring of Miserly Protection",
		icon: "item/Ring_of_Miserly_Protection.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "吝啬保护之戒",
			tips: "+{{SYSTEM:Heart Container}}{{SYSTEM:Heart Container}}，买东西或丢出后损坏。",
			notes:
				"+{{SYSTEM:Heart Container}}{{SYSTEM:Heart Container}}，买东西或丢出后损坏。\r\n- {{SYSTEM:Steal}}不会导致损坏。\r\n- 向{{NPC:Synergrace}}购买{{CHEST:Synergy Chest}}会导致损坏。\r\n- {{SYSTEM:co-op}}下，另一个玩家买东西不会导致损坏。\r\n- {{ITEM:Gnawed Key}}解锁前的支付行为不会导致损坏。\r\n- 参加{{GAME_MODE:Winchester's Game}}或使用{{SHRINE:Y.V.}}不会导致损坏。\r\n- {{GUNGEONEER:The Robot}}获得时不会增加{{PICKUP:Armor}}，只会获得 20{{PICKUP:Shell}}。",
			trivia:
				"引用自《黑暗之魂（Dark Souls）》的{宠爱庇佑戒指（Ring of Favor And Protection）}，能提升HP、精力和装备重量上限，但取下后便会损坏。",
			keyword: "linsebaohuzhijie lsbhzj 吝嗇保護之戒"
		},
		sell: 21,
		colors: "yellow,brown,purple",
		shapes: "ring",
		synergies: ["Porkulent"]
	},
	Unity: {
		id: 133,
		name: "Unity",
		icon: "item/Unity.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "统一",
			tips: "背包中每一把枪增加当前持有枪 2% 的伤害",
			notes: "背包中每一把枪增加当前持有枪 2% 的伤害。\r\n如背包中有 5 把枪，则当前持有枪伤害 +10%",
			trivia:
				"物品简介“力量合二为一（Our Powers Combined）”引用自环保主意动画影集《地球超人（Captain Planet）》（港译《星球队长》），拯救世界的环保英雄，必须集合5个戒指的力量才会出现。",
			keyword: "tongyi ty 統一",
			unlock: "集齐{{PAGE:The Breach}}所有 NPC"
		},
		sell: 30,
		colors: "yellow,brown,green",
		shapes: "ring",
		synergies: ["Captain Plant It", "Garbage Collecting", "what engine do you use"]
	},
	"Ring of Chest Vampirism": {
		id: 134,
		name: "Ring of Chest Vampirism",
		icon: "item/Ring_of_Chest_Vampirism.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "吸血鬼宝箱之戒",
			tips: "破坏未打开的箱子（包括{{ENEMY:Mimic}}）恢复{{PICKUP:Half Heart}} ",
			keyword: "xixueguibaoxiangzhijie xxgbxzj 吸血鬼寶箱之戒"
		},
		sell: 30,
		colors: "blue,white",
		shapes: "ring",
		synergies: ["blade"]
	},
	"Cloranthy Ring": {
		id: 135,
		name: "Cloranthy Ring",
		icon: "item/Cloranthy_Ring.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "克罗兰溪戒指",
			tips: "+20% 翻滚速度，减少翻滚硬直",
			trivia:
				"引用自《黑暗之魂》的同名道具{ClorantHy Ring（绿花戒指）}，在黑魂中，翻滚也是重要的移动和躲避敌人攻击的方式，翻滚会消耗精力，而绿花戒指可以提升精力的恢复速度。\r\n其实效果更像黑魂中另一个道具{Dark Wood Grain Ring（暗沉木纹戒指）}，改变翻滚的动作，加快翻滚帧数，缩短硬直帧数。",
			keyword: "keluolanxijiezhi kllxjz 克羅蘭溪戒指"
		},
		sell: 21,
		colors: "blue,brown",
		shapes: "ring",
		synergies: ["Hot Rolls"]
	},
	"Ring of Chest Friendship": {
		id: 136,
		name: "Ring of Chest Friendship",
		icon: "item/Ring_of_Chest_Friendship.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "宝箱友谊之戒",
			tips: "增加清空房间后{{SYSTEM:Pickup}}的掉落率。\r\n清空房间后掉落宝箱的概率翻倍。",
			keyword: "baoxiangyouyizhijie bxyyzj 寶箱友誼之戒"
		},
		sell: 30,
		colors: "yellow,brown,red",
		shapes: "ring"
	},
	"Ring of Mimic Friendship": {
		id: 137,
		name: "Ring of Mimic Friendship",
		icon: "item/Ring_of_Mimic_Friendship.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "宝箱怪友谊之戒",
			tips: "{{ENEMY:Mimic}}不会攻击玩家，如果是宝箱怪，可以不消耗{{PICKUP:Key}}直接打开。\r\n新版本因为打败宝箱怪会有额外掉落奖励，建议扔掉。",
			notes:
				"{{ENEMY:Mimic}}不会攻击玩家，如果是宝箱怪，可以不消耗{{PICKUP:Key}}直接打开。\r\n新版本因为打败宝箱怪会有额外掉落奖励，建议扔掉。\r\n如果同时拥有{{ITEM:Mimic Tooth Necklace}}，所有宝箱都可以不消耗{{PICKUP:Key}}直接打开。",
			keyword: "baoxiangguaiyouyizhijie bxgyyzj 寶箱怪友誼之戒"
		},
		sell: 16,
		colors: "yellow,brown,red",
		shapes: "ring"
	},
	"Ring of Triggers": {
		id: 138,
		name: "Ring of Triggers",
		icon: "item/Ring_of_Triggers.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "扳机之戒",
			tips: "使用主动道具时，逆时针向 12 个方向发射当前装备枪的子弹，不耗费弹药。\r\n10 秒冷却时间。",
			notes:
				"使用主动道具时，逆时针向 12 个方向发射当前装备枪的子弹，不耗费弹药。\r\n10 秒冷却时间。\r\n- 短 CD 的主动道具可以最大化{{ITEM:Ring of Triggers}}的收益，如 {{ITEM:Sense of Direction}}{{ITEM:Jetpack}}。\r\n- 带((反弹))或((跟踪))效果的枪或子弹，可以最大化{{ITEM:Ring of Triggers}}的收益，如{{GUN:Serious Cannon}}{{ITEM:Remote Bullets}}。\r\n- 该效果发射的子弹受所有子弹被动影响。\r\n- 该效果发射的子弹不会激怒{{NPC:Bello}}，可以在商店里找{{ROOM:Secret Room}}。\r\n- 会发射装备枪的所有可能射出的子弹，如{{GUN:Polaris}}所有等级的子弹，在没有满血的状态下也能发射出{{GUN:Blasphemy}}的剑气。\r\n- 如果装备枪使用过{{ITEM:Duct Tape}}，该效果只会发射出主枪（第二把枪）的子弹。\r\n- {{GUN:Makeshift Cannon}}史诗级加强\r\n- 如果没有好的主动道具，可以先捡{{CHAMBER:Gungeon Proper}}电梯井里的{{ITEM:Busted Television}}用着。",
			keyword: "banjizhijie bjzj 扳機之戒"
		},
		sell: 41,
		colors: "blue",
		shapes: "ring"
	},
	"Ring of Ethereal Form": {
		id: 139,
		name: "Ring of Ethereal Form",
		icon: "item/Ring_of_Ethereal_Form.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "以太之戒",
			tips: "使用后玩家进入((无敌))((隐形))((飞行))状态。\r\n可以用来{{SYSTEM:Steal}}。",
			keyword: "yitaizhijiewudi ytzj wd 以太之戒 無敵 无敌"
		},
		sell: 30,
		colors: "blue,red",
		shapes: "ring",
		synergies: ["Ghost With The Most"]
	},
	"Gundromeda Strain": {
		id: 140,
		name: "Gundromeda Strain",
		icon: "item/Gundromeda_Strain.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "天外来菌",
			tips: "降低所有敌人 25% 血量",
			notes:
				"降低所有敌人 25% 血量。\r\n- 包括小怪和 BOSS\r\n- 相当于增加 33.3% 伤害，但比增伤好，因为伤害受 DPS 上限影响",
			trivia:
				"物品图标和效果引用自游戏《废土之王（Nuclear Throne）》的变异技能{Scarier Face}（效果：敌人减少 20% 最大生命）。\r\n图标外观很像病毒{噬菌体（Bacteriophage）}。\r\n物品说明引用自电影《The Andromeda Strain（天外来菌）》",
			keyword: "tianwailaijunxijun twlj xj 天外來菌 細菌 细菌",
			unlock: "花费 25{{PICKUP:Hegemony Credit}}从{{NPC:Professor Goopton}}购买"
		},
		sell: 54,
		colors: "purple",
		shapes: "bullet",
		synergies: ["Pandemic Pistol"]
	},
	Broccoli: {
		id: 141,
		name: "Broccoli",
		icon: "item/Broccoli.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "西兰花",
			tips: "+10% 伤害，增加移速，有 10% 概率抵消伤害。",
			trivia: "物品说明引用自西蓝花的 wiki 词条第一句。",
			keyword: "xilanhua xlh 西蘭花",
			unlock: "花费 25{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 41,
		colors: "green",
		shapes: "other",
		synergies: ["Cactus Flower", "Hardwood", "Pea Cannon", "Plant Power", "Vegetables"]
	},
	Crutch: {
		id: 142,
		name: "Crutch",
		icon: "item/Crutch.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "拐杖",
			tips: "子弹带轻微((跟踪))效果",
			trivia:
				"在游戏中出现拐杖相关的物品，通常对技术要求低、同时效果和能力还不错。物品简介“你需要它（You Need It）”是在鄙视我吗？",
			keyword: "guaizhang gz 拐杖"
		},
		sell: 30,
		colors: "brown",
		shapes: "other",
		synergies: ["Pea Cannon", "Smart Bombs"]
	},
	Spice: {
		id: 143,
		name: "Spice",
		icon: "item/Spice.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "香料",
			tips: "一次性道具，可堆叠多个。\r\n不同的使用数量会有不同效果：\r\n1：+1{{SYSTEM:Heart Container}}，+20% 移速，-25% 子弹偏移，+0.5{{SYSTEM:Curse}}\r\n2：+1{{SYSTEM:Heart Container}}，+20% 射速，-10% 敌人弹速，+1{{SYSTEM:Curse}}\r\n3：-1{{SYSTEM:Heart Container}}，+20% 伤害，-5% 敌人弹速，+1{{SYSTEM:Curse}}\r\n4+：-1{{SYSTEM:Heart Container}}，+15% 伤害，+10% 子弹偏移，+1{{SYSTEM:Curse}}\r\n\r\n一旦使用，{{ITEM:Spice}}就会有概率替换掉宝箱物品、掉落物品、商店物品，第 2~4 次使用都会增加这个概率。",
			notes:
				'一次性道具，可堆叠多个。\r\n不同的使用数量会有不同效果：\r\n[["~使用<br/>数量","~效果"],["~1","+1{{SYSTEM:Heart Container}}，+20% 移速，-25% 子弹偏移，+0.5{{SYSTEM:Curse}}"],["~2","+1{{SYSTEM:Heart Container}}，+20% 射速，-10% 敌人弹速，+1{{SYSTEM:Curse}}"],["~3","-1{{SYSTEM:Heart Container}}，+20% 伤害，-5% 敌人弹速，+1{{SYSTEM:Curse}}"],["~4+","-1{{SYSTEM:Heart Container}}，+15% 伤害，+10% 子弹偏移，+1{{SYSTEM:Curse}}"]]\r\n说明：{4+}表示第 4 次使用及之后都是这个效果。\r\n\r\n一旦使用，{{ITEM:Spice}}就会有概率替换掉宝箱物品、掉落物品、商店物品，第 2~4 次使用都会增加这个概率。使用 4 次后，碰到的枪和道具大概率会被替换成{{ITEM:Spice}}，所以在获得足够的装备前，请谨慎使用。\r\n\r\n- 不会因为使用{{ITEM:Spice}}死亡，只剩 1 个{{SYSTEM:Heart Container}}时使用{{ITEM:Spice}}，{{SYSTEM:Heart Container}}会先欠着，获得增加{{SYSTEM:Heart Container}}的物品会优先偿还，直至还清，才会增加{{SYSTEM:Heart Container}}。\r\n- {{GUNGEONEER:The Robot}}使用{{ITEM:Spice}}不会增加或减少{{PICKUP:Armor}}。\r\n- 使用后，{{ITEM:Spice}}可能替换掉{{CHAMBER:Gungeon Proper}}商店柜台里的{{ITEM:Prime Primer}}或{{ITEM:Gnawed Key}}，卖 90{{PICKUP:Shell}}。\r\n- 如果道具栏已经堆叠了 40 个{{ITEM:Spice}}，则不会再替换掉物品。（{{GUN:Knight\'s Gun}}还是可以继续挖出{{ITEM:Spice}}）。\r\n- {{ITEM:Spice}}效果不会带进角色的过去关卡\r\n- {{GAME_MODE:Rainbow Mode}}里每关开始给的{{CHEST:Rainbow Chest}}里的道具不会被替换',
			trivia:
				"引用自《沙丘（Dune）》系列小说，香料是一种高度成瘾的药物，可以提高超感能力和延长寿命，但一旦使用就不能停下，停止使用会致命。",
			keyword: "xiangliao xl 香料",
			unlock: "花费 7{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 41,
		colors: "white,brown",
		shapes: "other"
	},
	"Liquid Valkyrie": {
		id: 144,
		name: "Liquid Valkyrie",
		icon: "item/Liquid_Valkyrie.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "液体奥丁女武神",
			tips: "敌人弹速 -20% ",
			notes:
				"敌人弹速 -20%\r\n同时拥有{{ITEM:Bloody Eye}}时，敌人弹速共降低 32%\r\n对密集弹幕来说可能是副作用，因为子弹扩散变慢，威胁时间变长，可能导致多波攻击复合，打弹幕密集的BOSS（如{{BOSS:Old King}}）时，可以考虑丢出来。",
			trivia:
				"引用自《马克思佩恩（Max Payne）》增强士兵能力的药品{Valkyr}，但最后会让人精神失常，残暴杀人。\r\n物品说明中强调“几乎没有副作用（with few side effects）”hhh！",
			keyword: "yetiaodingnvwushen ytadnws 液體奧丁女武神"
		},
		sell: 41,
		colors: "black,green",
		shapes: "bottle",
		synergies: ["Hidden Tech Time"]
	},
	"Bloody Eye": {
		id: 145,
		name: "Bloody Eye",
		icon: "item/Bloody_Eye.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "血红的眼睛",
			tips: "敌人弹速 -15% ",
			notes:
				"敌人弹速 -15%\r\n同时拥有{{ITEM:Liquid Valkyrie}}时，敌人弹速共降低 32%\r\n对密集弹幕来说可能是副作用，因为子弹扩散变慢，威胁时间变长，可能导致多波攻击复合，打弹幕密集的BOSS（如{{BOSS:Old King}}）时，可以考虑丢出来。",
			trivia:
				"引用自动画片《星际牛仔（Cowboy Bebop）》（又译《赏金猎人》）里的眼药毒品{Red Eye（红眼）}，喷到眼睛里会让眼睛变红，感知时间变慢，提高反应能力。",
			keyword: "xuehongdeyanjing xhdyj 血紅的眼睛",
			unlock: "花费 7{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "black,purple,red",
		shapes: "bottle",
		synergies: ["Fear the Old Blood", "Hidden Tech Time", "Tears of Blood", "Venom Veins"]
	},
	"Gunknight Helmet": {
		id: 146,
		name: "Gunknight Helmet",
		icon: "item/Gunknight_Helmet.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "枪骑士头盔",
			tips: "获得时增加 2 个{{PICKUP:Armor}}，每进入下一层增加 1 个{{PICKUP:Armor}}。\r\n增加其它 3 个部件的出现概率。",
			trivia: "物品说明中提到{{BOSS:Resourceful Rat}}偷走了骑士鸬鹚的头盔。",
			keyword: "qiangqishitoukui qqstk 槍騎士頭盔",
			unlock: "完成{{GAME_MODE:Hunting Quests}}"
		},
		sell: 41,
		colors: "yellow,black,gray",
		shapes: "other",
		synergies: ["Cormorant"]
	},
	"Gunknight Greaves": {
		id: 147,
		name: "Gunknight Greaves",
		icon: "item/Gunknight_Greaves.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "枪骑士护胫",
			tips: "获得时增加 1 个{{PICKUP:Armor}}，每进入下一层增加 1 个{{PICKUP:Armor}}。\r\n增加其它 3 个部件的出现概率。",
			keyword: "qiangqishihujing qqshj 槍騎士護脛"
		},
		sell: 21,
		colors: "yellow,brown",
		shapes: "shoe",
		synergies: ["Cormorant", "Knight Time"]
	},
	"Gunknight Armor": {
		id: 148,
		name: "Gunknight Armor",
		icon: "item/Gunknight_Armor.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "枪骑士盔甲",
			tips: "获得时增加 1 个{{PICKUP:Armor}}，每进入下一层增加 1 个{{PICKUP:Armor}}。\r\n增加其它 3 个部件的出现概率。",
			keyword: "qiangqishikuijia qqskj 槍騎士盔甲"
		},
		sell: 30,
		colors: "yellow,brown",
		shapes: "other",
		synergies: ["Cormorant"]
	},
	"Gunknight Gauntlet": {
		id: 149,
		name: "Gunknight Gauntlet",
		icon: "item/Gunknight_Gauntlet.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "枪骑士手套",
			tips: "获得时增加 1 个{{PICKUP:Armor}}，每进入下一层增加 1 个{{PICKUP:Armor}}。\r\n增加其它 3 个部件的出现概率。",
			keyword: "qiangqishishoutao qqsst 槍騎士手套"
		},
		sell: 21,
		colors: "yellow,brown",
		shapes: "other",
		synergies: ["Clawntlet", "Cormorant"]
	},
	"Old Knight's Shield": {
		id: 150,
		name: "Old Knight's Shield",
		icon: "item/Old_Knight%27s_Shield.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "老骑士的盾",
			tips: "获得时增加 2 个{{PICKUP:Armor}}",
			keyword: "laoqishidedun lqsdd 老騎士的盾",
			unlock: "进入{{CHAMBER:Hall of Knowledge}}的{{ROOM:Secret Room}}获得"
		},
		sell: 0,
		colors: "yellow,blue",
		shapes: "shield,other",
		synergies: ["Pea Cannon", "Tutorialized"]
	},
	"Old Knight's Helm": {
		id: 151,
		name: "Old Knight's Helm",
		icon: "item/Old_Knight%27s_Helm.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "老骑士的头盔",
			tips: "获得时增加 2 个{{PICKUP:Armor}}",
			keyword: "laoqishidetoukui lqsdtk 老騎士的頭盔",
			unlock: "进入{{CHAMBER:Hall of Knowledge}}的{{ROOM:Secret Room}}获得"
		},
		sell: 0,
		colors: "yellow,blue",
		shapes: "other",
		synergies: ["Pea Cannon", "Tutorialized"]
	},
	"Old Knight's Flask": {
		id: 152,
		name: "Old Knight's Flask",
		icon: "item/Old_Knight%27s_Flask.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "老骑士的酒壶",
			tips: "使用后恢复1颗{{PICKUP:Heart}}，获得时可以使用两次，进入新关卡回满两层充能。\r\n使用时无法移动，使用动画结束后回血效果才会生效。所以尽量在非战斗状态下使用。",
			trivia: "引用自《黑暗之魂（Dark Souls）》的{原素瓶（Estus Flask）}。",
			keyword: "laoqishidejiuhu lqsdjh 老騎士的酒壺",
			unlock: "击败{{BOSS:High Dragun}} 5 次"
		},
		sell: 41,
		colors: "yellow,red,black",
		shapes: "bottle",
		synergies: ["Five O'Clock Somewhere", "Praise the Gun", "\\o/"]
	},
	"Old Crest": {
		id: 153,
		name: "Old Crest",
		icon: "item/Old_Crest.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "古老纹章",
			tips: "获得时增加1个特殊的红色{{PICKUP:Armor}}，总是位于普通{{PICKUP:Armor}}外侧，受伤优先触发消耗掉。\r\n在{{CHAMBER:Oubliette}}获得，无法丢弃，在{{CHAMBER:Gungeon Proper}}的{祭坛房}献祭会换成普通{{PICKUP:Armor}}，并开启{{CHAMBER:Abbey of the True Gun}}入口。\r\n拥有{{ITEM:Full Metal Jacket}}时，受伤会先触发{{PICKUP:Blank}}（如果有的话）。",
			keyword: "gulaowenzhanghongdunlaoguowang glwz hd lgw 古老紋章 紅盾 老國王 红盾 老国王"
		},
		sell: 0,
		colors: "white,red",
		shapes: "shield,other"
	},
	"Armor of Thorns": {
		id: 154,
		name: "Armor of Thorns",
		icon: "item/Armor_of_Thorns.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "荆棘之甲",
			tips: "获得时增加 1 个{{PICKUP:Armor}}，免疫碰撞伤害，7 倍翻滚伤害（从原来的 3 提升为 21）。",
			notes:
				"获得时增加 1 个{{PICKUP:Armor}}，免疫碰撞伤害，7 倍翻滚伤害（从原来的3变成21）。\r\n如果同时拥有{{ITEM:Live Ammo}}，翻滚伤害提升为 105。如果同时拥有{{ITEM:Blast Helmet}}，翻滚伤害提升为 63。如果这 2 个同时拥有，翻滚伤害提升为 315。",
			trivia:
				"引用自《Dark Souls（黑暗之魂）》的Knight Kirk（针刺骑士寇克），他可以通过翻滚对敌人造成伤害：\r\n[(~data/Knight_Kirk.jpg)]",
			keyword: "jingjizhijia jjzj 荊棘之甲"
		},
		sell: 21,
		colors: "gray",
		shapes: "other",
		synergies: ["Backdraft", "Careful Iteration", "Devil's Plaything", "Thorn Bath, ooh!"]
	},
	"Full Metal Jacket": {
		id: 155,
		name: "Full Metal Jacket",
		icon: "item/Full_Metal_Jacket.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "全金属外衣",
			tips: "获得时增加 1 个{{PICKUP:Armor}}。\r\n受伤时自动触发{{PICKUP:Blank}}避免受伤。",
			notes:
				"获得时增加 1 个{{PICKUP:Armor}}。\r\n受伤时自动触发{{PICKUP:Blank}}避免受伤：\r\n- 可以触发{{ITEM:Elder Blank}}\r\n- 掉落伤害不会触发该效果\r\n- 因为避免了受伤，所以不会损失{{ITEM:Old Crest}}{{ITEM:Glass Guon Stone}}，避免{{GUN:Polaris}}掉级、{{ITEM:Metronome}}中断、{{ITEM:Meatbun}}的加成效果终止。对 BOSS 无伤也很有帮助，更容易获得{{SYSTEM:Master Round}}\r\n- 即使触发了{{ITEM:Crisis Stone}}，被子弹打中还是会触发{{ITEM:Full Metal Jacket}}\r\n\r\n{[BUG]} 拥有{{PICKUP:Blank}}时，打开大地图时免疫所有伤害（除了掉落伤害）。",
			trivia: "引用自电影《全金属外壳（Full Metal Jacket）》。",
			keyword: "quanjinshuwaiyiwaitao qjswy wt 全金屬外衣 外套 外套"
		},
		sell: 30,
		colors: "blue,yellow",
		shapes: "other",
		synergies: ["The Line Of Fire", "To Serve Android"]
	},
	Ticket: {
		id: 156,
		name: "Ticket",
		icon: "item/Ticket.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "票",
			tips: "使用后召唤一只{{BOSS:Gatling Gull}}盟友，清空房间后飞走。\r\n它可以抵挡子弹，可以把它当成肉盾，承受一定伤害后会死亡。\r\n- 它发射的子弹受大部分子弹被动效果影响。\r\n- 如果已经召唤了一只，再次召唤，原先的那只会飞走。（{{SYNERGY:Secret Twin}}是两只）",
			keyword:
				"piaojiatelinouxiongguiniaoniaoren p jtlo xgn nr 票 加特林鷗 兄貴鳥 鳥人 加特林鸥 兄贵鸟 鸟人",
			unlock: "打败{{BOSS:Gatling Gull}}20 次"
		},
		sell: 41,
		colors: "yellow,brown",
		shapes: "paper",
		synergies: ["Secret Twin"]
	},
	"Heavy Boots": {
		id: 157,
		name: "Heavy Boots",
		icon: "item/Heavy_Boots.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "重靴子",
			tips: "{免疫}外力导致的((强制移动))效果，包括：\r\n- 敌人的((击退))\r\n- 枪的((后坐力))\r\n- 输送带的((强制移动))\r\n- 冰面的((惯性移动))",
			notes:
				"{免疫}外力导致的((强制移动))效果，包括：\r\n- 敌人的((击退))\r\n- 枪的((后坐力))\r\n- 输送带的((强制移动))\r\n- 冰面的((惯性移动))\r\n\r\n可以避免{{GUN:Alien Engine}}的后坐力，最大化输出。\r\n{{GUN:Blasphemy}}的砍击、{{GUN:Casey}}的挥击不会前移。",
			keyword: "zhongxuezi zxz 重靴子"
		},
		sell: 16,
		colors: "gray,yellow",
		shapes: "shoe",
		synergies: ["Hardwood", "Heavy Metal", "Iron Slug", "Iron Stance"]
	},
	"Bug Boots": {
		id: 158,
		name: "Bug Boots",
		icon: "item/Bug_Boots.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "臭虫靴子",
			tips: "翻滚时身后留下毒液，{免疫}((中毒))",
			keyword: "chouchongxuezi ccxz 臭蟲靴子",
			unlock: "花费 7{{PICKUP:Hegemony Credit}}从{{NPC:Professor Goopton}}购买"
		},
		sell: 30,
		colors: "brown,red,yellow",
		shapes: "shoe",
		synergies: ["Buggin' Out"]
	},
	Gunboots: {
		id: 159,
		name: "Gunboots",
		icon: "item/Gunboots.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "长靴",
			tips: "增加 1 移速。\r\n翻滚时身后散射出 5 颗子弹，每颗 8 伤害，2 秒冷却时间。",
			notes:
				"增加 1 移速（大约 14%）。\r\n翻滚时身后散射出 5 颗子弹，每颗 8 伤害，2 秒冷却时间。\r\n射出的子弹可显示{{ROOM:Secret Room}}墙壁，在商店使用不会激怒{{NPC:Bello}}。\r\n射出的子弹受子弹被动影响。",
			trivia: "引用自游戏《坠落深井（Downwell）》",
			keyword: "changxue cx 長靴",
			unlock:
				"修好{{CHAMBER:Gungeon Proper}}的{{ROOM:Shortcuts}}\\n\\n材料：\\n- 3{{PICKUP:Blank}}\\n- 3{{PICKUP:Key}} + 120{{PICKUP:Shell}}\\n- 10{{PICKUP:Hegemony Credit}}\\n- {{ITEM:Master Round I}}"
		},
		sell: 21,
		colors: "blue,white",
		shapes: "shoe",
		synergies: ["Double Down", "Spelunker"]
	},
	"Springheel Boots": {
		id: 160,
		name: "Springheel Boots",
		icon: "item/Springheel_Boots.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "跳跟靴",
			tips: "可以连续翻滚 2 次，第二次翻滚可转向。",
			notes:
				"可以连续翻滚 2 次，第二次翻滚可转向。\r\n可以更容易跳过陷阱和坑，因为翻滚过程无敌，多次翻滚相当于延长无敌时间，可以更好的闪避子弹。如果使用熟练，是个非常好的道具，可以较大提升生存能力。\r\n效果和{{ITEM:Bloodied Scarf}}冲突，因为翻滚被替换成瞬移，导致 2 连跳无效。",
			trivia:
				"引用自英国维多利亚时代的都市传说“弹簧腿杰克（Spring-heeled Jack）”。\r\n物品说明引用自《上古卷轴4：湮没（The Elder Scrolls 4: Oblivion）》盗贼工会的弹簧腿杰克之靴任务（Boots of Springheel Jak）。",
			keyword: "tiaogenxue tgx 跳跟靴",
			unlock: "击杀 15 只{{ENEMY:Keybullet Kin}}"
		},
		sell: 16,
		colors: "brown",
		shapes: "shoe",
		synergies: ["Double Down", "Firing With Flair", "Triple Jump"]
	},
	"Rat Boots": {
		id: 161,
		name: "Rat Boots",
		icon: "item/Rat_Boots.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "老鼠靴",
			tips: "增加 1.5 移速。\r\n掉落判定前触发，获得短暂（约 1 秒）的((飞行))能力（避免((掉落伤害))）和((无敌))时间。",
			notes:
				"增加 1.5 移速。\r\n掉落判定前触发，获得短暂（约 1 秒）的((飞行))能力（避免((掉落伤害))）和((无敌))时间。\r\n- ((无敌))时间里不能触发{{ITEM:Cigarettes}}。\r\n- 拥有((飞行))能力时，无法触发该效果，因为不会有掉落判定。",
			trivia:
				"引用自《塞尔达传说：时之笛（The Legend of Zelda: Ocarina of Time）》的悬浮靴（Hover Boots），外形很像，效果也类似。\r\n[(~~data/Hover_Boots.png)]",
			keyword: "laoshuxue lsx 老鼠靴",
			unlock: "从{{CHEST:Rat Chest}}中开出"
		},
		sell: 21,
		colors: "yellow,brown",
		shapes: "shoe",
		synergies: ["Resourceful Indeed"]
	},
	"Coin Crown": {
		id: 162,
		name: "Coin Crown",
		icon: "item/Coin_Crown.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "硬币王冠",
			tips: "增加清空房间后{{PICKUP:Shell}}的掉落率。",
			trivia: "引用自《节奏地牢（Crypt of the NecroDancer）》的{贪婪皇冠（Corwn of Greed）}",
			keyword: "yingbiwangguan ybwg 硬幣王冠",
			unlock: "拥有 300{{PICKUP:Shell}}"
		},
		sell: 21,
		colors: "yellow,blue,red",
		shapes: "other",
		synergies: ["Great Queen Ant", "King Bomber", "Queen of Hearts", "Two Heavy"]
	},
	"Oiled Cylinder": {
		id: 163,
		name: "Oiled Cylinder",
		icon: "item/Oiled_Cylinder.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "油缸",
			tips: "装弹耗时 -50%",
			keyword: "yougang yg 油缸"
		},
		sell: 21,
		colors: "black,yellow,red",
		shapes: "circle",
		synergies: ["Hail To The King", "Not Quite As Mini", "Wound Up"]
	},
	"Ice Cube": {
		id: 164,
		name: "Ice Cube",
		icon: "item/Ice_Cube.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "冰块",
			tips: "+3 点{{SYSTEM:Coolness}}。\r\n主动道具激活期间可以正常充能。",
			keyword: "bingkuai bk 冰塊"
		},
		sell: 30,
		colors: "blue",
		shapes: "other",
		synergies: ["Ice To Meet You", "Willing To Sacrifice"]
	},
	"Rolling Eye": {
		id: 165,
		name: "Rolling Eye",
		icon: "item/Rolling_Eye.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "翻紫眼儿",
			tips: "反弹翻滚时穿过的子弹，每颗 10 伤害。",
			notes:
				"反弹翻滚时穿过的子弹，每颗 10 伤害。\r\n可以反弹{{ENEMY:Bombshee}}。\r\n可以反弹{{BOSS:High Dragun}}的大导弹，不过反弹的导弹没有伤害。",
			keyword: "fanziyaner fzye 翻紫眼兒"
		},
		sell: 21,
		colors: "blue,purple",
		shapes: "circle",
		synergies: ["Fear the Old Blood", "Full Circle", "Iroquois", "Lotus Bloom", "Mirror Shield"]
	},
	Cigarettes: {
		id: 166,
		name: "Cigarettes",
		icon: "item/Cigarettes.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "香烟",
			tips: "每使用一次，掉半颗血{{PICKUP:Half Heart}}，增加 1{{SYSTEM:Coolness}}。",
			notes:
				"每使用一次，掉半颗血{{PICKUP:Half Heart}}，增加 1{{SYSTEM:Coolness}}。\r\n- 抽烟掉血为受伤判定，有{{PICKUP:Armor}}时会优先触发{{PICKUP:Armor}}，打 BOSS 时使用会失去无伤。\r\n- 使用时丢出的烟头会点燃地上的油。\r\n- 使用时请注意血量，抽烟是会致死的！\r\n- 配合{{ITEM:Crisis Stone}}空弹夹装弹无敌的特性，可以实现无限抽烟。\r\n- 如果同时拥有{{GUN:Knight's Gun}}{{ITEM:Holey Grail}}也可以实现近乎无限抽烟，{{GUN:Knight's Gun}}可以挖出{{PICKUP:Half Heart}}{{PICKUP:Heart}}{{PICKUP:Armor}}，抽烟受伤会触发{{ITEM:Holey Grail}}恢复弹药。\r\n- 如果同时拥有{{GUN:GuNNER}}{{ITEM:Holey Grail}}原理类似，抽烟受伤时，{{GUN:GuNNER}}损失弹药掉出蓝色骷髅头，拾取骷髅头回血，而同时又会触发{{ITEM:Holey Grail}}恢复弹药，间接实现无限抽烟。\r\n吸烟有害健康，小孩子不要学哦~",
			trivia: "物品说明引用自《合金装备》里的香烟。",
			keyword: "xiangyanchouyan xy cy 香煙 抽煙 抽烟"
		},
		sell: 16,
		colors: "white,red,white",
		shapes: "rect",
		synergies: ["I need scissors! 61!", "Iroquois", "What A Thrill"]
	},
	"Magazine Rack": {
		id: 167,
		name: "Magazine Rack",
		icon: "item/Magazine_Rack.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "弹匣架",
			tips: "使用后制造一个圆形区域，在该范围内所有枪无限弹药。一小段时间后区域消失。",
			notes:
				"使用后制造一个圆形区域，在该范围内所有枪无限弹药。一小段时间后区域消失。\r\n- 对{{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}有效。\r\n- 对光束类的枪无效，仍然会消耗弹药。",
			keyword: "danxiajia dxj 彈匣架",
			unlock: "花费 25{{PICKUP:Hegemony Credit}}从{{NPC:Trorc}}购买"
		},
		sell: 21,
		colors: "red,yellow,blue",
		shapes: "paper",
		synergies: ["Junk Mail", "Just Shoot Me", "Magazine Clips"]
	},
	"Charm Horn": {
		id: 168,
		name: "Charm Horn",
		icon: "item/Charm_Horn.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "魔力号角",
			tips: "((魅惑))周围敌人 10 秒。\r\n可以用来{{SYSTEM:Steal}}。",
			notes:
				"((魅惑))周围敌人 10 秒。\r\n可以用来{{SYSTEM:Steal}}。\r\n如果魅惑{{ENEMY:Misfire Beast}}的分身，分身会跑向本体，和本体同归于尽。",
			trivia:
				"引用自《指环王（The Lord of the Rings）》刚铎（Gondor）的号角。\r\n物品简介“使命召唤（The Call Of Duty）”引用自呼叫同志们支援国家的经典用语。",
			keyword: "molihaojiao mlhj 魔力號角"
		},
		sell: 30,
		colors: "gray,yellow",
		shapes: "other",
		synergies: ["Hornucopia"]
	},
	"Cog of Battle": {
		id: 169,
		name: "Cog of Battle",
		icon: "item/Cog_of_Battle.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "战争嵌齿轮",
			tips: "装弹时有精准装弹判断条，如果能在标志处准确触发完成装弹操作（再次发出装弹命令或者开火），弹夹中的子弹增加 75% 伤害和精准度。\r\n精准装弹失败会增加装弹时间。",
			notes:
				"装弹时有精准装弹判断条，如果能在标志处准确触发完成装弹操作（再次发出装弹命令或者开火），弹夹中的子弹增加 75% 伤害和精准度。\r\n精准装弹失败会增加装弹时间。\r\n换枪会失去加成效果。\r\n{{GUN:Blasphemy}}的隐藏弹夹被判定为无限弹夹，精准装弹成功后，只要不换枪或重新装弹，将一直获得加成效果。",
			trivia: "引用自《战争机器（Gears of War）》系列。",
			keyword: "zhanzhengqianchilun zzqcl 戰爭嵌齒輪"
		},
		sell: 21,
		colors: "black,gray",
		shapes: "circle",
		synergies: ["Chest High is the Best High", "Ruby Carbine", "unnamed"]
	},
	Metronome: {
		id: 170,
		name: "Metronome",
		icon: "item/Metronome.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "节拍器",
			tips: "每击杀一个敌人增加 2% 伤害（上限 75 个敌人，150% 伤害增幅）。\r\n受伤或主动切枪，加成效果消失。",
			notes:
				"每击杀一个敌人增加 2% 伤害（上限 75 个敌人，150% 伤害增幅）。\r\n受伤或主动切枪，加成效果消失。\r\n拾取新枪时，新枪继承加成效果。\r\n- 丢出{{ITEM:Metronome}}切枪不会丢失伤害叠加层数。\r\n- 直接杀死任意敌人都会触发伤害叠加，包括{{ENEMY:Misfire Beast}}和{{ENEMY:Killithid}}的分身、无害的小鸡和老鼠。\r\n- 间接杀死敌人不会触发伤害叠加，如中毒燃烧等异常状态、打爆炸桶炸死、击退掉坑等。\r\n- {{GUN:Stinger}}爆炸后的生成的蜜蜂击杀敌人会触发伤害叠加。\r\n- {{ITEM:Space Friend}}击杀敌人会触发伤害叠加。\r\n- {{ITEM:Gunboots}}击杀敌人会触发伤害叠加。\r\n- {{GUN:Strafe Gun}}{{GUN:Cat Claw}}通过爆炸击杀敌人不会触发伤害叠加。\r\n- 在{{GAME_MODE:Blessing Mode}}下，祝福效果导致的换枪不会丢失伤害叠加层数，这个道具很好用。",
			keyword: "jiepaiqi jpq 節拍器"
		},
		sell: 30,
		colors: "blue",
		shapes: "other",
		synergies: ["Keeping The Beat", "Shredder", "Three Part Harmony"]
	},
	Honeycomb: {
		id: 171,
		name: "Honeycomb",
		icon: "item/Honeycomb.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "蜂窝",
			tips: "受伤时生成蜜蜂攻击敌人。",
			trivia:
				"引用自《泰拉瑞亚（Terraria）》的{蜂窝（Honey Comb）}，一样的效果，受伤时释放小蜜蜂自动攻击周围的敌人。",
			keyword: "fengwo fw 蜂窩"
		},
		sell: 21,
		colors: "yellow,brown",
		shapes: "circle",
		synergies: ["Bee Plus", "BEES"]
	},
	Map: {
		id: 172,
		name: "Map",
		icon: "item/Map.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "地图",
			tips: "获得后显示当前关卡地图，包括{{ROOM:Secret Room}}。\r\n清图后小概率掉落，小BOOS大概率掉落。",
			notes:
				"获得后显示当前关卡地图，包括{{ROOM:Secret Room}}。\r\n清图后小概率掉落，小BOOS大概率掉落。\r\n拾取后立即消耗，不会出现在背包中。\r\n不会显示{{CHAMBER:Resourceful Rat's Lair}}的地板门。",
			keyword: "ditu dt 地圖"
		},
		sell: 16,
		colors: "brown,blue,red",
		shapes: "rect",
		synergies: ["Parchmental"]
	},
	"Gungeon Blueprint": {
		id: 173,
		name: "Gungeon Blueprint",
		icon: "item/Gungeon_Blueprint.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "地牢蓝图",
			tips: "获得后所有关卡都会显示完整地图，包括{{ROOM:Secret Room}}。",
			notes:
				"获得后所有关卡都会显示完整地图，包括{{ROOM:Secret Room}}。\r\n不会显示{{CHAMBER:Resourceful Rat's Lair}}的地板门。",
			keyword: "dilaolantu dllt 地牢藍圖",
			unlock: "击败{{BOSS:Lich}}"
		},
		sell: 54,
		colors: "blue,white",
		shapes: "rect"
	},
	"Sense of Direction": {
		id: 174,
		name: "Sense of Direction",
		icon: "item/Sense_of_Direction.png",
		type: "Active",
		quality: "D",
		locale: {
			type: "主动",
			name: "方向指针",
			tips: "使用后出现一个箭头指向进入下一关卡的电梯口。",
			notes:
				"使用后出现一个箭头指向进入下一关卡的电梯口。\r\n配合{{ITEM:Blank Companion's Ring}}或{{ITEM:Ring of Triggers}}使用，可以最大化它们的收益。\r\n在{{CHAMBER:Resourceful Rat's Lair}}使用，会随机指一个方向，没有实际意义。\r\n在{{CHAMBER:R&G Dept.}}没有作用，可能是因为该关卡地图固定，且不是通过电梯通往下个关卡。",
			trivia: "引用自《塞尔达传说》系列的{指南针（Compass）}，可以显示迷宫BOSS的位置。",
			keyword: "fangxiangzhizhen fxzz 方向指針"
		},
		sell: 16,
		colors: "blue,yellow,red,white",
		shapes: "circle",
		synergies: ["Swift Sloop"]
	},
	"Duct Tape": {
		id: 175,
		name: "Duct Tape",
		icon: "item/Duct_Tape.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "胶带",
			tips: "选择 2 把枪粘在一起，第二把枪（主枪）射击时会附加第一把枪（副枪）的子弹。",
			notes:
				"选择 2 把枪粘在一起，第二把枪（主枪）射击时会附加第一把枪（副枪）的子弹。\r\n\r\n使用时需要分两步：\r\n- 切换到要粘的第一把枪，触发{{ITEM:Duct Tape}}，选为副枪\r\n- 切换到要粘的第二把枪，触发{{ITEM:Duct Tape}}，选为主枪\r\n这样副枪就会粘到主枪上（会失去副枪），主枪同时显示两把枪的弹夹，射击时会附加副枪的子弹。子弹容量显示为两枪之和，射击时弹药消耗也是两枪之和。\r\n\r\n- 无限弹药的枪无法使用，包括初始枪和{{GUN:Gunther}}{{GUN:Blasphemy}}{{GUN:Dueling Laser}}{{GUN:Elimentaler}}{{GUN:Casey}}。\r\n- 两把枪的弹夹容量和射击频率不受影响。\r\n- 副枪在粘贴前已形成的组合效果会保留，但无法再和其它物品形成新的组合。\r\n- 蓄力枪和非蓄力枪粘在一起，蓄力枪射击还是需要蓄力。\r\n- {{GAME_MODE:Blessing Mode}}下该道具无用，因为你只能拥有一把枪。\r\n- 售卖价格以主枪为准（卖一送一啊喂）。\r\n- 如果获得多个{{ITEM:Duct Tape}}，可以把多个枪粘在一起，同时射出这些枪的子弹。\r\n- 无限弹药组合，如{{SYNERGY:Akey Breaky}}，先扔出{{ITEM:Shelleton Key}}，{{GUN:AKEY-47}}变回非无限弹药，把它作为主枪（第二把枪）粘好后，拾回{{ITEM:Shelleton Key}}，这样就变成无限弹药了。{{GUN:Betrayer's Shield}}的{{SYNERGY:Betrayer's Lies}}操作类似。\r\n- 可以切换子弹类型的枪作为主枪时（如{{GUN:M16}}），只有处在粘贴时的子弹类型状态下，才会有{{ITEM:Duct Tape}}效果。\r\n- 不需要装弹的枪作为主枪时（如{{GUN:Demon Head}}），射击可以一直按不需要装弹，但副枪弹夹打空了会停止射击，需要手动装弹。\r\n- 如果把{{GUN:Patriot}}粘到别的枪上，射击时不再提高射击频率。\r\n- {{GUN:AC-15}}在有{{PICKUP:Armor}}的状态下粘到别的枪上，即使后面失去了所有的{{PICKUP:Armor}}，也会保留该状态。\r\n- 如果把{{GUN:Crown of Guns}}粘到别的枪上，每次射击会消耗 4 弹药，而不是 2 弹药，因为{{GUN:Crown of Guns}}每次射击消耗 3 弹药。\r\n- 如果把其它枪粘到{{GUN:Hyper Light Blaster}}上，只会返还{{GUN:Hyper Light Blaster}}打中敌人的子弹。\r\n- 如果把{{GUN:Microtransaction Gun}}粘到别的枪上，则它的射击不再消耗{{PICKUP:Shell}}。\r\n- 如果把其它射击频率更高的枪（如{{GUN:Vulcan Cannon}}{{GUN:AK-47}}）粘到{{GUN:Microtransaction Gun}}上，只要按住射击键不放，则只有一开始消耗的 1{{PICKUP:Shell}}，将不再消耗{{PICKUP:Shell}}和弹药（相当于无限子弹）\r\n\r\n<h3>BUG</h3>\r\n- 如果把{{GUN:Polaris}}粘到别的枪上，每次射击都会射出 3 个等级的子弹。\r\n- 如果把{{GUN:Rad Gun}}粘到别的枪上，每次射击都会射出 5 个等级的子弹。\r\n- 使用{{NPC:Save Button}}保存并退出，重新进入游戏可能出现副枪消失的情况。",
			keyword: "jiaodai jd 膠帶",
			unlock: "花费 10{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 41,
		colors: "gray",
		shapes: "circle"
	},
	"Gungeon Pepper": {
		id: 176,
		name: "Gungeon Pepper",
		icon: "item/Gungeon_Pepper.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "地牢胡椒",
			tips: "持续对附近的敌人造成伤害。",
			keyword: "dilaohujiao dlhj 地牢胡椒"
		},
		sell: 21,
		colors: "red,yellow,green",
		shapes: "other",
		synergies: ["Maximize Spell", "Phoenix Up", "Sausage and Peppers"]
	},
	Antibody: {
		id: 177,
		name: "Antibody",
		icon: "item/Antibody.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "抗体",
			tips: "获得治疗时，有 50% 概率额外恢复{{PICKUP:Half Heart}}。",
			keyword: "kangti kt 抗體"
		},
		sell: 30,
		colors: "red,white,black",
		shapes: "other",
		synergies: ["Antichamber", "Powerhouse of the Cell"]
	},
	"Resourceful Sack": {
		id: 178,
		name: "Resourceful Sack",
		icon: "item/Resourceful_Sack.png",
		type: "Active",
		quality: "A",
		locale: {
			type: "主动",
			name: "百宝袋",
			tips: "\r\n获得 3 个额外的主动道具槽。\r\n\r\n翻滚穿过子弹时，会把子弹吸进袋子里，最多收集 30 颗子弹。\r\n\r\n使用时会清空袋子里收集的子弹，发射为一个会爆炸的奶酪，收集的每一颗子弹都会触发一次爆炸，带有((奶酪凝固))效果。",
			notes:
				"\r\n获得 3 个额外的主动道具槽。\r\n\r\n翻滚穿过子弹时，会把子弹吸进袋子里：\r\n- 即使{{ITEM:Resourceful Sack}}不是当前选中道具，该效果也会生效。\r\n- 最多收集 30 颗子弹，收集满后，翻滚过的子弹会被丢弃，直接消失。\r\n- 不会收集陷阱发射的子弹。\r\n- 和{{ITEM:Bloodied Scarf}}效果冲突，翻滚变成瞬移，且瞬移时会消除附近子弹，导致{{ITEM:Resourceful Sack}}无法收集子弹。\r\n- 和{{ITEM:Rolling Eye}}{{ITEM:Daruma}}条件冲突，滚过的子弹时，它们会优先判定，导致{{ITEM:Resourceful Sack}}无法收集子弹。\r\n\r\n使用时会清空袋子里收集的子弹，发射为一个会爆炸的奶酪，收集的每一颗子弹都会触发一次爆炸，带有((奶酪凝固))效果。",
			keyword: "baibaodailaoshu bbd ls 百寶袋 老鼠 老鼠",
			unlock: "从{{CHEST:Rat Chest}}中开出"
		},
		sell: 41,
		colors: "brown,black",
		shapes: "other",
		synergies: ["Resourceful Indeed"]
	},
	"Pink Guon Stone": {
		id: 179,
		name: "Pink Guon Stone",
		icon: "item/Pink_Guon_Stone.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "桃红色滚石",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n环绕玩家，可以抵挡子弹。",
			trivia:
				"引用自《泰拉瑞亚（Terraria）》的{生命水晶（heart crystal）}。\r\n{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "taohongsegunshi thsgs 桃紅色滾石"
		},
		sell: 30,
		colors: "purple",
		shapes: "heart",
		synergies: ["Pinker Guon Stone", "Tile Match", "Unbelievably Charming"]
	},
	"White Guon Stone": {
		id: 180,
		name: "White Guon Stone",
		icon: "item/White_Guon_Stone.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "白色滚石",
			tips: "每个关卡获得 1 个额外的{{PICKUP:Blank}}。\r\n环绕玩家，可以抵挡子弹。",
			trivia:
				"{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "baisegunshi bsgs 白色滾石"
		},
		sell: 30,
		colors: "white",
		shapes: "bullet",
		synergies: ["Tile Match", "Whiter Guon Stone"]
	},
	"Orange Guon Stone": {
		id: 181,
		name: "Orange Guon Stone",
		icon: "item/Orange_Guon_Stone.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "橙色滚石",
			tips: "向敌人射击，每颗子弹造成 5 伤害。\r\n环绕玩家，可以抵挡子弹。",
			notes:
				"向敌人射击，每颗子弹造成 5 伤害。\r\n- 受所有子弹被动影响\r\n- 不会攻击{{ENEMY:Red-Caped Bullet Kin}}\r\n环绕玩家，可以抵挡子弹。",
			trivia:
				"{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "chengsegunshi csgs 橙色滾石"
		},
		sell: 41,
		colors: "red",
		shapes: "bullet",
		synergies: ["Enter the Fruitgeon", "Oranger Guon Stone", "Tile Match"]
	},
	"Clear Guon Stone": {
		id: 182,
		name: "Clear Guon Stone",
		icon: "item/Clear_Guon_Stone.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "透明滚石",
			tips: "{免疫}((中毒))伤害。\r\n环绕玩家，可以抵挡子弹。",
			trivia:
				"外观和{{ENEMY:Skullet}}很像。\r\n蓝色色调和物品说明中强调的高纯度（零杂质）引用自美剧《绝命毒师（Breaking Bad）》中提及的超高纯度冰毒{蓝色冰毒（Blue Sky）}。\r\n{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "touminggunshi tmgs 透明滾石"
		},
		sell: 16,
		colors: "blue",
		shapes: "bullet",
		synergies: ["Clearer Guon Stone", "Gungeonite", "Tile Match"]
	},
	"Green Guon Stone": {
		id: 183,
		name: "Green Guon Stone",
		icon: "item/Green_Guon_Stone.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "绿色滚石",
			tips: "受伤时有 20% 概率获得治疗，受到致命伤害（即受伤就挂掉）时，有 50% 概率获得治疗。\r\n对{{GUNGEONEER:The Robot}}无效。\r\n环绕玩家，可以抵挡子弹。",
			trivia:
				"{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "lvsegunshilvgun lsgs lg 綠色滾石 綠滾 绿滚"
		},
		sell: 41,
		colors: "green,red",
		shapes: "bullet",
		synergies: ["Greener Guon Stone", "Tile Match"]
	},
	"Red Guon Stone": {
		id: 184,
		name: "Red Guon Stone",
		icon: "item/Red_Guon_Stone.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "红色滚石",
			tips: "增加翻滚的距离和速度。\r\n环绕玩家，可以抵挡子弹。",
			notes:
				"增加翻滚的距离和速度。\r\n环绕玩家，可以抵挡子弹。\r\n{{GUN:Really Special Lute}}会把{{ITEM:Red Guon Stone}}当成一个同伴。",
			trivia:
				"{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "hongsegunshi hsgs 紅色滾石"
		},
		sell: 30,
		colors: "red",
		shapes: "bullet",
		synergies: ["Redder Guon Stone", "Tile Match"]
	},
	"Blue Guon Stone": {
		id: 185,
		name: "Blue Guon Stone",
		icon: "item/Blue_Guon_Stone.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "蓝色滚石",
			tips: "受伤时降低敌人 33% 射速，持续 5 秒。\r\n环绕玩家，可以抵挡子弹。环绕速度为其它{{SYSTEM:Guon Stones}}的 2 倍。",
			trivia:
				"物品简介“于我有利（On My Side）”引用自成语“time is on my side”，即“天时地利”中的“天时”。\r\n{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "lansegunshi lsgs 藍色滾石"
		},
		sell: 30,
		colors: "blue,black",
		shapes: "bullet",
		synergies: ["Bluer Guon Stone", "Tile Match"]
	},
	"Glass Guon Stone": {
		id: 186,
		name: "Glass Guon Stone",
		icon: "item/Glass_Guon_Stone.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "玻璃滚石",
			tips: "环绕玩家，可以抵挡子弹，受伤后消失。\r\n可叠加多个，无数量上限。",
			notes:
				"环绕玩家，可以抵挡子弹，受伤后破碎消失。\r\n可叠加多个，无数量上限。\r\n- 解锁后商店有概率出售、清空房间有概率掉落。\r\n- 使用{{SHRINE:Glass}}可以获得 3 个{{ITEM:Glass Guon Stone}}。\r\n- {{GUN:Knight's Gun}}有概率挖出。\r\n- 通过{{SYNERGY:Bullet Kiln}}最多可以同时获得 4 个{{ITEM:Glass Guon Stone}}，因为{{ITEM:Glass Guon Stone}}可以丢出，所以理论上无限。\r\n- 卖血给{{NPC:Vampire}}不会导致{{ITEM:Glass Guon Stone}}破碎。",
			trivia:
				"物品说明中“来自窗格夫人的礼物（A gift from the Lady of Pane）”的翻译不是很合理，应该是引用自《龙与地下城》战役设定{异度风景（Planescape）}的{痛苦女王（Lady of Pain）}。\r\n{{SYSTEM:Guon Stones}}引用自《龙与地下城》的{伊奥恩之石（Ioun Stone）}，这些魔法石能在主人的头顶上漂浮着，赋予他们各种特殊的力量。",
			keyword: "boligunshi blgs 玻璃滾石",
			unlock: "使用{{SHRINE:Glass}}"
		},
		sell: 0,
		colors: "gray,white",
		shapes: "bullet",
		synergies: ["Max Pane"]
	},
	"Iron Coin": {
		id: 187,
		name: "Iron Coin",
		icon: "item/Iron_Coin.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "铁硬币",
			tips: "被动效果：拥有时商店打折 20%，增加 2 点{{SYSTEM:Coolness}}。\r\n\r\n主动效果：可使用3次，全部用完后消失。\r\n使用后消灭当前关卡随机一个未探索的房间的所有敌人。",
			notes:
				"被动效果：拥有时商店打折 20%，增加 2 点{{SYSTEM:Coolness}}。\r\n- 如果同时拥有{{ITEM:Disarming Personality}}，会获得共 32% 折扣。\r\n- 不管剩余多少使用次数，都只会增加 2 点{{SYSTEM:Coolness}}。\r\n\r\n主动效果：可使用3次，全部用完后消失。\r\n使用后消灭当前关卡随机一个未探索的房间的所有敌人：\r\n- 不会随机到 BOSS 房。\r\n- 不会有{{PICKUP:Shell}}和物品掉落（{{SYSTEM:Chest}}有概率掉落）。\r\n- {{ITEM:Dog}}可以在房间里挖出{{SYSTEM:Pickup}}。\r\n- {{ITEM:Master of Unlocking}}可以在房间里获得{{PICKUP:Key}}。\r\n- 可重复获得，每次获得，增加 3 次使用次数。",
			trivia:
				"引用自《冰与火之歌（A Song of Ice and Fire）》（《权利的游戏（Game of Thrones）》），神秘刺客 Jaqen H'ghar（贾昆·赫加尔）给了Arya Stark（艾莉亚·屎大颗，简称二丫）一枚硬币和 3 个暗杀名额。\r\n物品简介“凡人皆吃一枪子儿（Valar Morgunis）”引用自座右铭“人皆有一死（Valar Morghulis）”。",
			keyword: "tieyingbi tyb 鐵硬幣",
			unlock: "无伤击败{{CHAMBER:Gungeon Proper}}BOSS"
		},
		sell: 21,
		colors: "brown",
		shapes: "circle"
	},
	"Super Hot Watch": {
		id: 188,
		name: "Super Hot Watch",
		icon: "item/Super_Hot_Watch.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "超级热的手表",
			tips: "角色不动时，时间几乎静止。\r\n对游戏节奏有较大影响。\r\n某些情况下有奇效，如配合{{SHRINE:Blood}}的吸血效果。",
			notes:
				"角色不动时，时间几乎静止。\r\n对游戏节奏有较大影响。\r\n- 切枪模式下，时间流动速度比不移动稍快一丢丢。\r\n- 翻滚过程时间正常流动。\r\n- 坐在矿车上移动，时间正常流动。\r\n某些情况下有奇效，如配合{{SHRINE:Blood}}的吸血效果。",
			trivia:
				"引用自游戏《燥热（Superhot）》，玩家在游戏中扮演一个特工，任务就是杀敌，游戏特色是你每行动一步世界才跟着动，你不动世界就变得异常缓慢，和进入子弹时间一般。\r\n物品简介“超超超超级！！！！（Suuuuuuper）”引用自该游戏过关时都会鬼畜循环“SUPERHOT”的文字和配音。",
			keyword: "chaojiredeshoubiaochaorerebiao cjrdsb cr rb 超級熱的手表 超熱 熱表 超热 热表",
			unlock:
				"同时拥有 5 个{{SYSTEM:Master Round}}（可以重复，如 2 个{{ITEM:Master Round I}}，拿到{{ITEM:Clone}}比较容易达成条件。也可以通过{{GAME_MODE:Boss Rush}}解锁，关卡有多个BOSS，只要打败一个就能获得{{SYSTEM:Master Round}}。"
		},
		sell: 54,
		colors: "yellow,white,black",
		shapes: "circle"
	},
	"Drum Clip": {
		id: 189,
		name: "Drum Clip",
		icon: "item/Drum_Clip.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "鼓夹",
			tips: "增加所有枪 50% 的弹夹上限。\r\n对弹夹为 1 的枪无效。",
			keyword: "gujia gj 鼓夾"
		},
		sell: 30,
		colors: "red,white,yellow,gray",
		shapes: "other",
		synergies: [
			"Alternative Rock",
			"Dr Worm",
			"Hegemony Special Forces",
			"Keeping The Beat",
			"M1 Multi-Tool",
			"Magazine Clips",
			"Not Quite As Mini"
		]
	},
	"Holey Grail": {
		id: 190,
		name: "Holey Grail",
		icon: "item/Holey_Grail.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "剩杯",
			tips: "增加 1 点{{SYSTEM:Curse}}。\r\n受伤时触发全屏{{PICKUP:Blank}}效果，并恢复所有枪 50% 子弹。",
			keyword: "shengbei sb 剩杯",
			unlock: "击败{{SYSTEM:Advanced Dragun}}"
		},
		sell: 16,
		colors: "gray",
		shapes: "other",
		synergies: [
			"Empty Vessels",
			"Hellhole",
			"Just Like The Real Thing",
			"Kaliber k'pow uboom k'bhang",
			"Kaliber's Grip",
			"Kalibreath",
			"Pitch Perfect"
		]
	},
	"Blood Brooch": {
		id: 191,
		name: "Blood Brooch",
		icon: "item/Blood_Brooch.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "鲜血胸针",
			tips: "增加 1 点{{SYSTEM:Curse}}。\r\n玩家每造成 1200 点伤害，恢复{{PICKUP:Half Heart}}。",
			trivia:
				"引用自《血源诅咒（Bloodborne）》的红宝石胸针（Red Jeweled Brooch）。\r\n物品简介“这音乐真动听（What Music They Make!）”引用自《德古拉（Dracula）》的台词：\r\n<g>Listen to them — children of the night. What music they make.\r\n快点来听！黑夜中孩子的声音是他们缔造的美妙音乐。</g>",
			keyword: "xianxuexiongzhen xxxz 鮮血胸針",
			unlock: "进入{{CHAMBER:Abbey of the True Gun}}"
		},
		sell: 41,
		colors: "yellow,red",
		shapes: "circle",
		synergies: ["blade", "Fear the Old Blood"]
	},
	"Backup Gun": {
		id: 192,
		name: "Backup Gun",
		icon: "item/Backup_Gun.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "备用枪",
			tips: "射击时会同时向反方向发射相同的子弹。",
			notes:
				"射击时会同时向反方向发射相同的子弹。\r\n- 向后射出的子弹精准度明显降低。\r\n- 抵消{{GUN:Mutation}}{{GUN:Grasschopper}}的后坐力。\r\n- 对带有((反弹))或((跟踪))效果的枪有明显增强，如{{GUN:The Scrambler}}{{GUN:Bee Hive}}{{GUN:Moonscraper}}。\r\n- 对{{GUN:Alien Engine}}无效。\r\n- 对{{GUN:Composite Gun}}的蓄力射击无效。\r\n- 对{{GUN:Zorgun}}弹夹最后的特殊子弹无效。\r\n- 向后射出的子弹可以触发{{SHRINE:Y.V.}}效果。",
			trivia:
				"引用自电影《虎胆龙威（Die Hard）》，主角约翰·麦卡伦（John McClane）用胶带把贝瑞塔92手枪（Beretta 92F）粘贴在后背上。",
			keyword: "beiyongqiangbeihouqiang byq bhq 備用槍 背後槍 背后枪"
		},
		sell: 30,
		colors: "gray,black",
		shapes: "other",
		synergies: ["Gruber's Bane", "Like Shooting Fish"]
	},
	Sunglasses: {
		id: 193,
		name: "Sunglasses",
		icon: "item/Sunglasses.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "墨镜",
			tips: "增加 2 点{{SYSTEM:Coolness}}。\r\n爆炸时触发子弹时间，13 秒冷却时间。",
			trivia:
				"引用自电影中的经典镜头{Unflinching Walk（闲庭信步）}，狂拽酷炫吊炸天的主角在慢镜头中闲庭信步，对身后的爆炸不屑一顾，常搭配墨镜出现，酷的一匹（可参考《英雄本色》小马哥），后演变出“Cool Guys Don't Look At Explosions（真男人从不回头看爆炸）”文化，通过 The Lonely Island 乐团的同名歌曲普及。\r\n[(~data/Sunglasses_Unflinching_Walk_c.gif)]\r\n\r\n道具图标引用自美剧《犯罪现场调查：迈阿密（CSI: Miami）》主角霍雷肖·凯恩（Horatio Caine）的 Silhouette 太阳镜。\r\n\r\n物品简介“光明的未来（Bright Future）”引用自 Timbuk 3 的歌曲《The Future's So Bright, I Gotta Wear Shades（未来亮瞎我的狗眼，我需要戴墨镜）》。",
			keyword: "mojing mj 墨鏡",
			unlock: "花费 10{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 21,
		colors: "white,gray",
		shapes: "other",
		synergies: [
			"Kung Fu Hippie, Rappin' Surfer",
			"The Line Of Fire",
			"Nailed It!",
			"Spicy D-Boys",
			"Thermal Imaging"
		]
	},
	"Mimic Tooth Necklace": {
		id: 194,
		name: "Mimic Tooth Necklace",
		icon: "item/Mimic_Tooth_Necklace.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "拟身怪牙齿项链",
			tips: "{{SYSTEM:Chest}}会变成{{ENEMY:Mimic}}，底座会变成{{ENEMY:Pedestal Mimic}}。",
			notes:
				"{{SYSTEM:Chest}}会变成{{ENEMY:Mimic}}，底座会变成{{ENEMY:Pedestal Mimic}}。\r\n- 不会把{{CHEST:Rainbow Chest}}{{CHEST:Synergy Chest}}{{CHEST:Glitch Chest}}变成宝箱怪（但它们有可能自己变成宝箱怪）。\r\n- {{CHEST:Rat Chest}}不会变成{{ENEMY:Rat Chest Mimic}}，并且会出现一只{{ENEMY:Googly-eyed Mimic}}告诉你这个消息。\r\n- {{GAME_MODE:Winchester's Game}}奖励的宝箱不会变成宝箱怪。\r\n- {{SYSTEM:Master Round}}和{{ITEM:Old Crest}}的底座。\r\n- 同时拥有{{ITEM:Ring of Mimic Friendship}}时，不会出现{{ENEMY:Mimic}}，所有宝箱都可以不耗费{{PICKUP:Key}}打开。新版本因为打败宝箱怪会有额外掉落奖励，建议扔掉{{ITEM:Ring of Mimic Friendship}}。\r\n- {{ENEMY:Mimic}}不会掉落{{ITEM:Junk}}。\r\n- 已发现的正常{{SYSTEM:Chest}}，在捡到{{ITEM:Mimic Tooth Necklace}}后也会变成{{ENEMY:Mimic}}。\r\n- 使用{{ITEM:Trusty Lockpicks}}开锁失败被封印的宝箱，在捡到{{ITEM:Mimic Tooth Necklace}}后也会变成宝箱怪。\r\n- {{SYSTEM:Mirror}}的{{SYSTEM:Chest}}也会变成{{ENEMY:Mimic}}。\r\n- {{ITEM:Trusty Lockpicks}}开锁失败被封印的{{SYSTEM:Chest}}，获得{{ITEM:Mimic Tooth Necklace}}后也会变成{{ENEMY:Mimic}}。\r\n- 不会把{{ROOM:Secret Room}}里的{{CHEST:Red Chest}}变成宝箱怪。",
			keyword: "nishenguaiyachixianglian nsgycxl 擬身怪牙齒項鏈",
			unlock: "完成{{GAME_MODE:Hunting Quests}}"
		},
		sell: 41,
		colors: "purple,yellow",
		shapes: "ring",
		synergies: ["Ruby Carbine"]
	},
	"Escape Rope": {
		id: 195,
		name: "Escape Rope",
		icon: "item/Escape_Rope.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "逃生绳",
			tips: "使用后传送至本层商店房（如果没有商店房则传送回本层开始的房间）",
			notes:
				"使用后传送至本层商店房（如果没有商店房则传送回本层开始的房间）。\r\n- 在BOSS房受伤后使用并不会重置BOSS战，无法用于刷{{SYSTEM:Master Round}}。\r\n- 挑战模式下，逃离房间后重新进入，房间内的挑战条件会改变（挑战条件个数不会变）。",
			trivia: "引用自《宝可梦》系列的同名道具",
			keyword: "taoshengsheng tss 逃生繩"
		},
		sell: 21,
		colors: "brown,yellow",
		shapes: "other",
		synergies: ["All Out Of Law", "Hydro Pump"]
	},
	Jetpack: {
		id: 196,
		name: "Jetpack",
		icon: "item/Jetpack.png",
		type: "Active",
		quality: "C",
		locale: {
			type: "主动",
			name: "喷气包",
			tips: "可以随时开关。激活时增加 2.5 移速，获得((飞行))能力，但不能翻滚，飞过油时会点燃油。",
			notes:
				"可以随时开关。激活时增加 2.5 移速，获得((飞行))能力，但不能翻滚，飞过油时会点燃油。\r\n- 如果同时拥有其它带有飞行能力的物品，如{{ITEM:Wax Wings}}{{GUN:Balloon Gun}}，激活{{ITEM:Jetpack}}时会获得移速加成，且保留翻滚能力。",
			keyword: "penqibao pqb 噴氣包"
		},
		sell: 21,
		colors: "brown,white,black",
		shapes: "bullet",
		synergies: ["Barrage Shot", "MM6 Mini Rocket"]
	},
	"Wax Wings": {
		id: 197,
		name: "Wax Wings",
		icon: "item/Wax_Wings.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "蜡翅膀",
			tips: "获得((飞行))能力",
			notes:
				"获得((飞行))能力。\r\n- 免疫地面的毒液和火焰伤害，免疫地刺陷阱[(~~trap/Spikes.png)]、喷火孔陷阱[(~~trap/Fire.png)]。",
			trivia:
				"引用自希腊神话，{伊卡洛斯（Icarus）}与父亲{代达洛斯（Daedalus）}使用蜡造的翅膀逃离克里特岛。",
			keyword: "lachibang lcb 蠟翅膀"
		},
		sell: 30,
		colors: "yellow",
		synergies: ["Peripheral Vision", "Vulcan Raving"]
	},
	"Cat Bullet King Throne": {
		id: 198,
		name: "Cat Bullet King Throne",
		icon: "item/Cat_Bullet_King_Throne.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "猫咪子弹王座",
			tips: "获得((飞行))能力。\r\n翻滚时以玩家为中心向四周发射子弹，每 2 秒可以触发一次。",
			notes:
				"获得((飞行))能力。\r\n翻滚时以玩家为中心向四周发射子弹，每 2 秒可以触发一次。这些子弹：\r\n- 受所有子弹被动效果影响\r\n- 可以触发{{ITEM:Orbital Bullets}}效果\r\n- 受{{ITEM:Remote Bullets}}控制，可以集中火力造成更高伤害\r\n- 不会激怒{{NPC:Bello}}",
			keyword: "maomizidanwangzuo mmzdwz 貓咪子彈王座",
			unlock: "打败{{BOSS:Bullet King}}10 次"
		},
		sell: 30,
		colors: "brown,gray",
		shapes: "other",
		synergies: ["Mad Cats", "Usurper"]
	},
	"Blast Helmet": {
		id: 199,
		name: "Blast Helmet",
		icon: "item/Blast_Helmet.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "爆炸头盔",
			tips: "减小((爆炸))对玩家造成伤害的判定范围。\r\n免疫碰撞伤害，3 倍翻滚伤害（从原来 3 提升为 9 ）。",
			notes:
				"减小((爆炸))对玩家造成伤害的判定范围。\r\n免疫碰撞伤害，3 倍翻滚伤害（从原来 3 提升为 9 ）。\r\n\r\n如果同时拥有{{ITEM:Live Ammo}}，翻滚伤害提升为 45。如果同时拥有{{ITEM:Armor of Thorns}}，翻滚伤害提升为 63。如果这 2 个同时拥有，翻滚伤害提升为 315。",
			keyword: "baozhatoukui bztk 爆炸頭盔",
			unlock: "解救{{NPC:Ledge Goblin}} 4 次"
		},
		sell: 16,
		colors: "green,blue,brown",
		shapes: "other",
		synergies: ["Blast Crown", "Fightsabre Training", "Nailed It!", "Spelunker"]
	},
	"Lament Configurum": {
		id: 200,
		name: "Lament Configurum",
		icon: "item/Lament_Configurum.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "悲伤拼图盒",
			tips: "增加1{{SYSTEM:Curse}}。\r\n\r\n使用后召唤3~5只小怪，有概率掉落 B~S 品质的枪或道具，拾取会增加 1 点{{SYSTEM:Curse}}。掉落枪或道具时，有20%概率会损失{{PICKUP:Half Heart}}，每次使用的损失增加{{PICKUP:Half Heart}}。",
			notes:
				"增加1{{SYSTEM:Curse}}。\r\n虽然是{{QUALITY:B}}级道具，但会增加 1 {M值}（M值定义参考{{SYSTEM:Quality}}）。\r\n\r\n使用后召唤3~5只小怪，有概率掉落枪或道具：\r\n- 召唤的敌人种类包括：<g>{{ENEMY:Ashen Bullet Kin}}{{ENEMY:Fallen Bullet Kin}}{{ENEMY:Creech}}{{ENEMY:Executioner}}{{ENEMY:Bloodbulon}}{{ENEMY:Poopulon}}</g>\r\n- 掉落的枪或道具品质为{{QUALITY:B}}{{QUALITY:A}}{{QUALITY:S}}\r\n- 拾取掉落的枪或道具，会增加 1 点{{SYSTEM:Curse}}，如果不想增长{{SYSTEM:Curse}}，掉落的不是想要的，建议不拾取\r\n- 掉落枪或道具时，有20%概率会损失{{PICKUP:Half Heart}}，每次使用的损失增加{{PICKUP:Half Heart}}（每次只掉一个{{PICKUP:Armor}}）。\r\n\r\n<h3>BUG</h3>\r\n在{{CHAMBER:Forge}}BOSS房里的走廊上（未触发BOSS战）使用{{ITEM:Lament Configurum}}，无伤击杀召唤的小怪后，会直接出现{{ITEM:Master Round V}}，可能是判定到BOSS房里的敌人被击杀，且角色没有受伤。另外，奖励的底座可以挡住{{BOSS:High Dragun}}第二阶段的全屏掉落弹幕，可以躲在底座后面。",
			trivia:
				"引用自电影《Hellraiser（猛鬼追魂）》（原著《The Hellbound Heart（地狱羁绊之心）》）里的{拉蒙之迷魔方(Lament Configuration)}，一个可怕的魔方，只要正确的拼对它，地狱之门就会打开，引来地狱的魔鬼追杀：\r\n[(~data/Lament_Configuration.jpg)]\r\n\r\n{{SYNERGY:Heart-Shaped Box}}的名字{Heart-Shaped Box}引用自 Kurt Cobain 创作的同名歌曲《heart-shaped box》，歌名源于他妻子送给他的一个心形盒子，Cobain 最初给这首歌取名为《Heart-Shaped Coffin（心形棺材）》。",
			keyword: "beishangpintuhemohexiaoheihe bspth mh xhh 悲傷拚圖盒 魔盒 小黑盒 魔盒 小黑盒",
			unlock: "解救{{NPC:Daisuke}}"
		},
		sell: 30,
		colors: "brown,yellow,gray",
		shapes: "other",
		synergies: ["Heart-Shaped Box"]
	},
	"Monster Blood": {
		id: 201,
		name: "Monster Blood",
		icon: "item/Monster_Blood.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "怪物血",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n{免疫}((中毒))伤害，受伤时留下一大滩毒。",
			trivia:
				"引用自美国作家{R.L.斯坦（R. L. Stine）}所著惊险小说《鸡皮疙瘩（Goosebumps）》系列之《怪兽之血（Monster Blood）》。\r\n物品说明“无国界医生”引用自非牟利团体“无国界医生组织”，调皮地改成了“无证件医生”。",
			keyword: "guaiwuxie gwx 怪物血",
			unlock: "花费 5{{PICKUP:Hegemony Credit}}从{{NPC:Professor Goopton}}购买"
		},
		sell: 21,
		colors: "green,yellow",
		shapes: "other",
		synergies: [
			"Deadly Distraction",
			"Deadlier Distraction",
			"Monster Grub",
			"Natural Selection",
			"Pandemic Pistol",
			"Venom Veins"
		]
	},
	Nanomachines: {
		id: 202,
		name: "Nanomachines",
		icon: "item/Nanomachines.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "纳米机械",
			tips: "获得时增加 2 个{{PICKUP:Armor}}。\r\n每受 4 次伤害增加 1 个{{PICKUP:Armor}}。",
			trivia:
				"引用自《合金装备》系列中的纳米技术，如果士兵大量失血，纳米机器人会释放血液凝结素和抗菌素促进伤口愈合。\r\n物品名引用自《合金装备崛起：复仇（Metal Gear Rising: Revengeance）》最终战中参议员{阿姆斯特朗（Armstrong）}的著名台词“纳米机器，小子（Nanomachines, son!）”。",
			keyword: "namijixie nmjx 納米機械",
			unlock: "花费 10{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "blue",
		shapes: "other",
		synergies: [
			"Future Gangster",
			"Pistol Machine",
			"Pretty Good",
			"Production Model",
			"Steel Skin"
		]
	},
	"Seven-Leaf Clover": {
		id: 203,
		name: "Seven-Leaf Clover",
		icon: "item/Seven-Leaf_Clover.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "七叶幸运草",
			tips: "获得后，下关开始{{ROOM:Chest Room}}里的宝箱、{{SYSTEM:Mirror}}里的宝箱、{{ROOM:Secret Room}}里的一些宝箱会变成{{CHEST:Red Chest}}或{{CHEST:Black Chest}}，概率各 50%。\r\n- 对清怪掉落的宝箱无效\r\n- 对非宝箱开出来的物品无效\r\n- 对{{CHEST:Synergy Chest}}无效",
			trivia:
				"引用自美国搞笑动画片《飞出个未来（Futurama）》第三季第四集“弗莱的运气（The Luck of the Fryrish）”：\r\n- 物品引用自主角弗莱（Philip J.Fry）的幸运七叶草（Seven Leaf Clover），一个可以给他带来好运的东西。\r\n- {{SYNERGY:Breakfast Club}}引用自该集中弗莱把幸运七叶草藏在《早餐俱乐部（The Breakfast Club）》的电影录像带里。\r\n- 和{{GUN:Wind Up Gun}}组合引用自另外一集“War Is the H-Word”里的发条枪（wind-up gun）。\r\n[(~data/Seven_Leaf_Clover.jpg)]",
			keyword: "qiyexingyuncaosiyecaoqiyecao qyxyc syc qyc 七葉幸運草 四葉草 七葉草 四叶草 七叶草",
			unlock:
				"在{{GAME_MODE:Winchester's Game}}中击碎所有头像 3 次，回到{{PAGE:The Breach}}和{{NPC:Winchester}}对话解锁"
		},
		sell: 54,
		colors: "green",
		shapes: "circle",
		synergies: ["Breakfast Club"]
	},
	"Number 2": {
		id: 204,
		name: "Number 2",
		icon: "item/Number_2.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "二号",
			tips: "队友死亡后增加 2 移速和 41% 伤害。（单人模式下也可以获得加成效果）\r\n{{GUNGEONEER:The Cultist}}的初始被动道具。",
			notes:
				"队友死亡后增加 2 移速和 41% 伤害。（单人模式下也可以获得加成效果）\r\n{{GUNGEONEER:The Cultist}}的初始被动道具，如果其他角色获得，可以带进角色的{{CHAMBER:The Past}}。\r\n获得后无法丢弃。\r\n非解锁{{GUN:Finished Gun}}的必要条件。",
			trivia:
				"引用自《爆炸头武士（Afro Samurai）》主角的头带，主角 Afro Samurai 是排名第二的战士（Number 2），为了手刃杀父仇敌 Justice——世界上最强的战士，并夺回父亲的头巾“Number 1”，踏上了漫漫征途。\r\n[(~data/Number_2_Afro_Samurai.jpg)]",
			keyword: "erhao2hao eh 2h 二號 2號 2号",
			unlock: "进入{{GUNGEONEER:The Cultist}}的{{CHAMBER:The Past}}"
		},
		sell: 0,
		colors: "white,red,black",
		shapes: "ammolet"
	},
	"Gold Ammolet": {
		id: 205,
		name: "Gold Ammolet",
		icon: "item/Gold_Ammolet.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "金手镯",
			tips: "{{PICKUP:Blank}}伤害增加为 60。\r\n每层开始时多给一个{{PICKUP:Blank}}。",
			keyword: "jinshouzhuo jsz 金手鐲"
		},
		sell: 30,
		colors: "yellow,gray",
		shapes: "ammolet",
		synergies: ["Don't Worry About The Vase", "Relodestar"]
	},
	"Chaos Ammolet": {
		id: 206,
		name: "Chaos Ammolet",
		icon: "item/Chaos_Ammolet.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "混沌弹",
			tips: "{{PICKUP:Blank}}带有随机效果（((中毒))((冰冻))((晕眩))((燃烧))）。\r\n每层开始时多给一个{{PICKUP:Blank}}。",
			notes:
				"{{PICKUP:Blank}}带有随机效果（((中毒))((冰冻))((晕眩))((燃烧))）。\r\n每层开始时多给一个{{PICKUP:Blank}}。\r\n\r\n所有{{PICKUP:Blank}}效果都可以触发该效果：\r\n<g>{{PICKUP:Armor}}{{ITEM:Blank Companion's Ring}}{{ITEM:Elder Blank}}{{GUN:Dark Marker}}{{ITEM:Owl}}{{ITEM:Table Tech Blanks}}{{ITEM:Ser Junkan}}（6{{ITEM:Junk}}）{{ITEM:Clown Mask}}（粉眼小丑）{{GUN:Composite Gun}}{{ITEM:Blank Bullets}}</g>",
			trivia:
				"物品简介“有可能发生的事必会发生（What Can Will）”引用自{墨菲定律（Murphy's law）}：\r\n<g>Anything that can go wrong will go wrong.\r\n有可能出错的事，必会出错。</g>",
			keyword: "hundundan hdd 混沌彈"
		},
		sell: 41,
		colors: "gray",
		shapes: "ammolet",
		synergies: ["Don't Worry About The Vase", "Relodestar"]
	},
	"Lodestone Ammolet": {
		id: 207,
		name: "Lodestone Ammolet",
		icon: "item/Lodestone_Ammolet.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "磁石弹",
			tips: "增加{{PICKUP:Blank}}的((击退))效果，并((晕眩))敌人 3 秒。\r\n每层开始时多给一个{{PICKUP:Blank}}。",
			keyword: "cishidan csd 磁石彈"
		},
		sell: 16,
		colors: "purple,blue,brown",
		shapes: "ammolet",
		synergies: ["Don't Worry About The Vase", "Relodestar"]
	},
	"Uranium Ammolet": {
		id: 208,
		name: "Uranium Ammolet",
		icon: "item/Uranium_Ammolet.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "铀弹药",
			tips: "{{PICKUP:Blank}}有几率使敌人((中毒))。\r\n每层开始时多给一个{{PICKUP:Blank}}。",
			notes:
				"{{PICKUP:Blank}}有几率使敌人((中毒))。\r\n每层开始时多给一个{{PICKUP:Blank}}。\r\n- {{ITEM:Owl}}{{ITEM:Clown Mask}}（粉眼小丑）{{ITEM:Blank Bullets}}也可以触发该效果。",
			trivia:
				"物品介绍引用自{居里夫人（Marie Curie）}，在放射性的研究上做出了杰出贡献，由于长期接触放射性物质，于1934年7月4日因恶性白血病逝世。",
			keyword: "youdanyao ydy 鈾彈藥"
		},
		sell: 30,
		colors: "green,yellow",
		shapes: "ammolet",
		synergies: ["Don't Worry About The Vase", "Relodestar"]
	},
	"Copper Ammolet": {
		id: 209,
		name: "Copper Ammolet",
		icon: "item/Copper_Ammolet.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "铜制护身符",
			tips: "{{PICKUP:Blank}}有几率使敌人((燃烧))。\r\n每层开始时多给一个{{PICKUP:Blank}}。",
			notes:
				"{{PICKUP:Blank}}有几率使敌人((燃烧))。\r\n每层开始时多给一个{{PICKUP:Blank}}。\r\n- {{ITEM:Owl}}{{ITEM:Clown Mask}}（粉眼小丑）也可以触发该效果。",
			keyword: "tongzhihushenfu tzhsf 銅製護身符"
		},
		sell: 30,
		colors: "red,yellow",
		shapes: "ammolet",
		synergies: [
			"Backdraft",
			"Don't Worry About The Vase",
			"Firing With Flair",
			"Hot Ones",
			"Phoenix Up",
			"Relodestar"
		]
	},
	"Frost Ammolet": {
		id: 210,
		name: "Frost Ammolet",
		icon: "item/Frost_Ammolet.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "寒霜护身符",
			tips: "{{PICKUP:Blank}}有几率使敌人((冰冻))。\r\n每层开始时多给一个{{PICKUP:Blank}}。",
			notes:
				"{{PICKUP:Blank}}有几率使敌人((冰冻))。\r\n每层开始时多给一个{{PICKUP:Blank}}。\r\n- {{ITEM:Owl}}{{ITEM:Clown Mask}}（粉眼小丑）也可以触发该效果。",
			keyword: "hanshuanghushenfu hshsf 寒霜護身符"
		},
		sell: 30,
		colors: "blue,purple",
		shapes: "ammolet",
		synergies: ["Arctic Warfare", "Cold Ones", "Don't Worry About The Vase", "Relodestar"]
	},
	"Table Tech Sight": {
		id: 211,
		name: "Table Tech Sight",
		icon: "item/Table_Tech_Sight.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "桌技：视域",
			tips: "掀桌后，短时间内进入子弹时间，且射出的子弹变为 3 倍。",
			keyword: "zhuoji：shiyu zj：sy 桌技：視域"
		},
		sell: 16,
		colors: "brown,black",
		shapes: "rect",
		synergies: ["All Out Of Law", "Hidden Tech Time", "Paperwork"]
	},
	"Table Tech Money": {
		id: 212,
		name: "Table Tech Money",
		icon: "item/Table_Tech_Money.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "桌技：金钱",
			tips: "掀桌后，房间里桌子依次掀起，有概率掉落{{PICKUP:Shell}}。",
			keyword: "zhuoji：jinqian zj：jq 桌技：金錢"
		},
		sell: 16,
		colors: "brown,black",
		shapes: "rect",
		synergies: ["Gilded Tables", "Paperwork"]
	},
	"Table Tech Rocket": {
		id: 213,
		name: "Table Tech Rocket",
		icon: "item/Table_Tech_Rocket.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "桌技：火箭",
			tips: "掀桌后，生成火箭推着桌子向前飞出，碰撞后((爆炸))。",
			notes:
				"掀桌后，生成火箭推着桌子向前飞出，碰撞后((爆炸))。\r\n- 如果拥有改变子弹大小的道具，飞出的桌子也会变大。\r\n- 如果拥有{{ITEM:Bouncy Bullets}}，飞出的桌子会反弹。\r\n- 对{{ITEM:Portable Table Device}}的桌子有效。",
			keyword: "zhuoji：huojian zj：hj 桌技：火箭",
			unlock: "把桌子推进坑里"
		},
		sell: 21,
		colors: "brown,black",
		shapes: "rect",
		synergies: ["Hunter-Seeker Tables", "Paperwork"]
	},
	"Table Tech Shotgun": {
		id: 214,
		name: "Table Tech Shotgun",
		icon: "item/Table_Tech_Shotgun.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "桌技：霰弹枪",
			tips: "掀桌时桌子会射出一堆带((跟踪))效果的方形子弹。",
			keyword: "zhuoji：xiandanqiang zj：xdq 桌技：霰彈槍"
		},
		sell: 16,
		colors: "brown,black",
		shapes: "paper",
		synergies: ["Hidden Tech Big Shotgun"]
	},
	"Table Tech Heat": {
		id: 215,
		name: "Table Tech Heat",
		icon: "item/Table_Tech_Heat.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "桌技：掀桌灼热",
			tips: "掀桌后会生成一个很大的圆形区域，使范围内的敌人((燃烧))。",
			keyword: "zhuoji：xianzhuozhuore zj：xzzr 桌技：掀桌灼熱"
		},
		sell: 16,
		colors: "brown,black",
		shapes: "paper",
		synergies: ["Hidden Tech Flare"]
	},
	"Table Tech Rage": {
		id: 216,
		name: "Table Tech Rage",
		icon: "item/Table_Tech_Rage.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "桌技：愤怒",
			tips: "掀桌后，短时间内双倍伤害。",
			keyword: "zhuoji：fennu zj：fn 桌技：憤怒"
		},
		sell: 16,
		colors: "brown,black",
		shapes: "rect",
		synergies: ["Needless Acrimony", "Paperwork"]
	},
	"Table Tech Blanks": {
		id: 217,
		name: "Table Tech Blanks",
		icon: "item/Table_Tech_Blanks.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "桌技：空响弹",
			tips: "掀桌后，触发{{PICKUP:Blank}}效果（不消耗玩家的{{PICKUP:Blank}}），可以打开{{ROOM:Secret Room}}。",
			keyword: "zhuoji：kongxiangdan zj：kxd 桌技：空響彈"
		},
		sell: 21,
		colors: "brown,black",
		shapes: "rect",
		synergies: ["Hidden Tech Bees", "Paperwork"]
	},
	"Table Tech Stun": {
		id: 218,
		name: "Table Tech Stun",
		icon: "item/Table_Tech_Stun.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "桌技：眩晕",
			tips: "掀桌后，((晕眩))附近的敌人。",
			keyword: "zhuoji：xuanyun zj：xy 桌技：眩暈"
		},
		sell: 21,
		colors: "brown,black",
		shapes: "rect",
		synergies: ["Paperwork"]
	},
	"Heart Holster": {
		id: 219,
		name: "Heart Holster",
		icon: "item/Heart_Holster.png",
		type: "Passive",
		quality: "CBA",
		locale: {
			type: "被动",
			name: "心形皮套",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n{{GUNGEONEER:The Robot}}获得时，{{SYSTEM:Heart Container}}折算为 5~10{{PICKUP:Shell}}。\r\n回收时作为{{QUALITY:B}}品质道具。",
			keyword: "xinxingpitao xxpt 心形皮套"
		},
		sell: 30,
		colors: "brown",
		shapes: "heart",
		synergies: ["All Out Of Law", "Finger on the Pulse", "Quick and the Gundead"]
	},
	"Heart Lunchbox": {
		id: 220,
		name: "Heart Lunchbox",
		icon: "item/Heart_Lunchbox.png",
		type: "Passive",
		quality: "CBA",
		locale: {
			type: "被动",
			name: "心形饭盒",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n{{GUNGEONEER:The Robot}}获得时，{{SYSTEM:Heart Container}}折算为 5~10{{PICKUP:Shell}}。\r\n回收时作为{{QUALITY:B}}品质道具。",
			keyword: "xinxingfanhe xxfh 心形飯盒",
			unlock: "花费 5{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "red,gray",
		shapes: "heart",
		synergies: ["Finger on the Pulse", "Heart-Shaped Box"]
	},
	"Heart Locket": {
		id: 221,
		name: "Heart Locket",
		icon: "item/Heart_Locket.png",
		type: "Passive",
		quality: "CBA",
		locale: {
			type: "被动",
			name: "心形小盒",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n{{GUNGEONEER:The Robot}}获得时，{{SYSTEM:Heart Container}}折算为 5~10{{PICKUP:Shell}}。\r\n回收时作为{{QUALITY:B}}品质道具。",
			trivia:
				"物品简介“死的警告（Memento Mori）”是拉丁语词组，意思为“勿忘人终有一死”，是中世纪拉丁语理论及对死亡率的反思习惯，常用来警惕尘世虚幻与短暂物质追求。",
			keyword: "xinxingxiaohe xxxh 心形小盒",
			unlock: "花费 4{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "blue,yellw",
		shapes: "heart",
		synergies: ["Finger on the Pulse"]
	},
	"Heart Bottle": {
		id: 222,
		name: "Heart Bottle",
		icon: "item/Heart_Bottle.png",
		type: "Passive",
		quality: "CBA",
		locale: {
			type: "被动",
			name: "红心之瓶",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n{{GUNGEONEER:The Robot}}获得时，{{SYSTEM:Heart Container}}折算为 5~10{{PICKUP:Shell}}。\r\n回收时作为{{QUALITY:B}}品质道具。",
			keyword: "hongxinzhiping hxzp 紅心之瓶",
			unlock: "花费 2{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "blue,brown",
		shapes: "heart",
		synergies: ["Finger on the Pulse"]
	},
	"Heart Purse": {
		id: 223,
		name: "Heart Purse",
		icon: "item/Heart_Purse.png",
		type: "Passive",
		quality: "CBA",
		locale: {
			type: "被动",
			name: "心形钱包",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n{{GUNGEONEER:The Robot}}获得时，{{SYSTEM:Heart Container}}折算为 5~10{{PICKUP:Shell}}。\r\n回收时作为{{QUALITY:B}}品质道具。",
			keyword: "xinxingqianbao xxqb 心形錢包",
			unlock: "花费 4{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "purple,yellow",
		shapes: "heart",
		synergies: ["Finger on the Pulse", "Queen of Hearts"]
	},
	"Ruby Bracelet": {
		id: 224,
		name: "Ruby Bracelet",
		icon: "item/Ruby_Bracelet.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "红宝石手链",
			tips: "<h3>加强前</h3>\r\n扔枪会产生((爆炸))效果，对附近敌人造成30伤害。\r\n- 手持空弹药的枪，长按射击键可以扔枪\r\n- 扔出去的枪不会消失，可以捡回来\r\n带给{{NPC:Blacksmith}}可以获得永久加强。\r\n\r\n<h3>加强后</h3>\r\n- 依然拥有加强前的能力\r\n- 免疫碰撞伤害\r\n- 在不翻滚不受伤的前提下，不断移动 4 秒，会获得粉色鸡血效果，翻滚造成 300 伤害",
			keyword: "hongbaoshishoulian hbssl 紅寶石手鏈"
		},
		sell: 16,
		colors: "gray,purple,black",
		shapes: "ring",
		synergies: ["Alternative Rock", "Backdraft", "Ruby Carbine", "Saved the Best for Last"]
	},
	"Sixth Chamber": {
		id: 225,
		name: "Sixth Chamber",
		icon: "item/Sixth_Chamber.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "第六膛室",
			tips: "增加2点{{SYSTEM:Curse}}。\r\n取消{{SYSTEM:Curse}}带来的物品掉落的减益效果。\r\n每点{{SYSTEM:Curse}}增加2点{{SYSTEM:Coolness}}。",
			trivia:
				"在西方文化中，666是不吉祥的数字，《圣经·启示录》中，666表示兽名数目，是魔鬼的数字，与撒旦或反基督有关，甚至产生了666恐惧症。444则是天使数字，幸运数字。\r\n（在中国刚好相反，6有一帆风顺的意思（六六大顺），是吉利、幸运数字，4因谐音“死”，是不吉利的数字。网络时代，6因谐音“溜”，666或者更多6表示很厉害。）",
			keyword: "diliutangshi666 dlts 666 第六膛室 666 666",
			unlock: "击杀{{SYSTEM:Jammed}}BOSS"
		},
		sell: 41,
		colors: "red,yellow,black",
		shapes: "circle",
		synergies: ["Hellhole", "Just Like The Real Thing", "Pitch Perfect"]
	},
	"Busted Television": {
		id: 226,
		name: "Busted Television",
		icon: "item/Busted_Television.png",
		type: "Active",
		quality: "N",
		locale: {
			type: "主动",
			name: "损坏的电视",
			tips: "翻滚时会掉落。\r\n使用时向前扔出一段距离（不会对敌人造成伤害）。\r\n交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}可以解锁{{GUNGEONEER:The Robot}}。",
			notes:
				"修理好{{CHAMBER:Gungeon Proper}}的{{ROOM:Shortcuts}}后，会出现在该层电梯井。\r\n翻滚时会掉落。\r\n使用时向前扔出一段距离（不会对敌人造成伤害）。\r\n交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}可以解锁{{GUNGEONEER:The Robot}}。\r\n- 扔到坑里会消失\r\n- 会被{{NPC:Resourceful Rat}}偷走\r\n- 获得((飞行))能力会比较容易带给{{NPC:Blacksmith}}\r\n- 解锁{{GUNGEONEER:The Robot}}后依然可以在{{CHAMBER:Gungeon Proper}}电梯井捡到。\r\n- 如果有{{ITEM:Escape Rope}}，在{{CHAMBER:Forge}}使用，直接到{{NPC:Blacksmith}}处。\r\n- 把{{ITEM:Busted Television}}交给{{NPC:Blacksmith}}时会有一个过场动画，如果你引出了{{ENEMY:Lord of the Jammed}}，它可能会在一旁暴打你，这点要注意哦。",
			keyword: "sunhuaidedianshipodianshi shdds pds 損壞的電視 破電視 破电视"
		},
		sell: 0,
		colors: "blue,gray,white",
		shapes: "other"
	},
	"Coolant Leak": {
		id: 227,
		name: "Coolant Leak",
		icon: "item/Coolant_Leak.png",
		type: "Active",
		quality: "N",
		locale: {
			type: "主动",
			name: "冷却液泄露",
			tips: "向前撒出一滩水。\r\n{{GUNGEONEER:The Robot}}的专属初始主动道具，其他角色无法获得。",
			notes:
				"向前撒出一滩水。\r\n{{GUNGEONEER:The Robot}}的专属初始主动道具，其他角色无法获得。\r\n- 可以用来浇灭壁炉，打开{{CHAMBER:Oubliette}}的入口房，所以{{GUNGEONEER:The Robot}}不用担心打破水桶。\r\n- 可以浇灭{{SYSTEM:Chest}}的导火索。\r\n- 不能让伪装成{{CHEST:Brown Chest}}的{{CHEST:Rainbow Chest}}现出原形。\r\n- 不能让{{ROOM:Demon Face}}吐出道具。",
			keyword: "lengqueyexielou lqyxl 冷卻液泄露"
		},
		sell: 0,
		colors: "blue",
		shapes: "bottle"
	},
	"Heart of Ice": {
		id: 228,
		name: "Heart of Ice",
		icon: "item/Heart_of_Ice.png",
		type: "Passive",
		quality: "CBA",
		locale: {
			type: "被动",
			name: "冰之心",
			tips: "增加 1 点{{SYSTEM:Coolness}}。\r\n增加 1 个{{SYSTEM:Heart Container}}。\r\n受伤时会((冰冻))全屏敌人，并释放出带((反弹))效果的冰块对敌人造成伤害，冰块会使地面的水结冰。\r\n回收时作为{{QUALITY:A}}品质道具。",
			keyword: "bingzhixinbingxin bzx bx 冰之心 冰心 冰心"
		},
		sell: 41,
		colors: "blue",
		shapes: "heart",
		synergies: [
			"Arctic Warfare",
			"Dragunice",
			"Frosty Distraction",
			"Frostier Distraction",
			"Ice To Meet You",
			"Jotun Time",
			"Willing To Sacrifice"
		]
	},
	"Ancient Hero's Bandana": {
		id: 229,
		name: "Ancient Hero's Bandana",
		icon: "item/Ancient_Hero%27s_Bandana.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "古代英雄的头巾",
			tips: "所有枪的子弹容量为原来的 4 倍。",
			notes:
				"所有枪的子弹容量为原来的 4 倍。\r\n- 只会增加子弹容量，不会改变原来的弹药量，如原来是 50/100，加成后为 50/400，弹药量是不变的。\r\n- 获得多个时为倍数叠加，如获得两个{{ITEM:Ancient Hero's Bandana}}，则子弹容量为原来的 16 倍。\r\n- 对{{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}无效。\r\n- 在角色的{{CHAMBER:The Past}}，只要不切枪，也会保留该效果。（即一开始手上拿的枪会有子弹容量加成，但切枪后会失去该效果）。",
			trivia:
				"引用自《合金装备》系列的道具{无限头带（Infinity Bandana）}，全部武器（包括陷阱、手雷等）全部无限弹药。",
			keyword: "gudaiyingxiongdetoujinlantoujin gdyxdtj ltj 古代英雄的頭巾 藍頭巾 蓝头巾",
			unlock: "完成{{CHAMBER:Forge}} 10 次"
		},
		sell: 54,
		colors: "blue",
		shapes: "ammolet",
		synergies: ["I need scissors! 61!", "What A Thrill"]
	},
	"Bloodied Scarf": {
		id: 230,
		name: "Bloodied Scarf",
		icon: "item/Bloodied_Scarf.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "浸血的围巾",
			tips: "减少 30% 的装弹耗时。\r\n\r\n翻滚改为瞬移，瞬移后消除附近子弹：\r\n- 点击翻滚键，会向角色移动方向短距离瞬移\r\n- 长按翻滚键，会出现角色影子，通过准星控制影子位置，松开翻滚键，瞬移到影子位置",
			notes:
				"减少 30% 的装弹耗时。\r\n\r\n翻滚改为瞬移，瞬移后消除附近子弹：\r\n- 点击翻滚键，会向角色移动方向短距离瞬移\r\n- 长按翻滚键，会出现角色影子，通过准星控制影子位置，松开翻滚键，瞬移到影子位置\r\n\r\n<h3>说明</h3>\r\n- 不断原地瞬移，可以达到几乎免疫子弹的效果。\r\n- 可以瞬移进入上锁的门，节省一把{{PICKUP:Key}}。\r\n- 可以用来找{{ROOM:Secret Room}}。影子移到不可到达的地方时会显示为红色，如果墙后的影子为灰色，表示墙后有空间。可以直接瞬移进隐藏房，但里面会一片漆黑，考虑到可能会有坑或陷阱，仍需要一个{{PICKUP:Blank}}来打开入口。\r\n- {{CHAMBER:Resourceful Rat's Lair}}入口需要 2 个{{PICKUP:Blank}}来打开通道，可以直接瞬移进去节省{{PICKUP:Blank}}，虽然一片黑，但仍然可以用{{ITEM:Gnawed Key}}打开地板门进入老鼠关。\r\n- 可以瞬移到{{BOSS:Wallmonger}}后面，让它打不到你。\r\n- 效果和{{ITEM:Resourceful Sack}}{{ITEM:Rolling Eye}}冲突，导致这 2 个道具的翻滚效果无效。\r\n- 瞬移也会导致{{ITEM:Busted Television}}掉落。\r\n- 处于((燃烧))状态时，瞬移会直接退出该状态，翻滚则可能需要多次。\r\n- 瞬移判定上也是翻滚，如果{{GAME_MODE:King's Game}}的挑战条件为{不能翻滚}，瞬移也会导致挑战失败。\r\n- {{GAME_MODE:Winchester's Game}}可以瞬移到打靶区域内，寻找更好的射击位置。\r\n- 不可回收。\r\n\r\n<h3>BUG</h3>\r\n- {{SYSTEM:co-op}}下，如果在队友死亡的情况下，瞬移进一个未进入过的房间，会导致无法对敌人造成伤害，也无法死亡，退出这种困境唯一的办法，是通过死亡的队友触发小范围{{PICKUP:Blank}}杀死所有敌人。\r\n- 在商店中，向柜台内瞬移，可能可以瞬移进去，这个没什么影响，可以正常走出来。\r\n- 在进入下一关卡的电梯关门时瞬移出去会导致bug，随机传送到一个房间且无法控制角色。\r\n- 尝试瞬移到一个不可到达的位置，然后通过地图传送，会导致镜头移回到瞬移位置，只有再次传送才会恢复正常。\r\n- 进入BOSS房时，在恰当的时机可以瞬移出去，导致BOSS房入口不关闭。\r\n- 进入{{BOSS:High Dragun}}的BOSS房时，在恰当的时机可以瞬移回那条长长的走廊，在走廊里可以打到BOSS，但不会造成伤害。\r\n- 瞬移穿过{{BOSS:The Gorgun}}的石化波，仍然会被石化（只能移动，无法攻击），而翻滚过去却不会。\r\n- 如果瞬移穿过{{ROOM:Aimless Void}}入口的瀑布，会卡在瀑布后面的一个小空间，不会进入{{ROOM:Aimless Void}}，只能重新瞬移出来。\r\n- 使用{{ITEM:Drill}}时，杀死召唤的所有敌人后，在宝箱附近瞬移，会导致宝箱消失并卡关。\r\n- 在{{CHAMBER:Resourceful Rat's Lair}}瞬移进另一个房间，会导致卡关。",
			trivia:
				"引用自世嘉（SEGA）的动作游戏《忍（shinobi）》。\r\n[(~data/Shinobi.jpg)]\r\n可能也引用自《洛克人zero》的潘恩托姆（PHANTOM）。\r\n物品说明中“熟练的刺客（skilled assassin）”可能指废弃的角色{忍者（the Ninja）}。\r\n{{ITEM:Snowballets}}的物品说明中提及的“地牢中唯一的一条围巾引起了不少争论”可能就是指{{ITEM:Bloodied Scarf}}。",
			keyword: "jinxiedeweijinhongtoujin jxdwj htj 浸血的圍巾 紅頭巾 红头巾",
			unlock: "击败{{BOSS:Old King}}"
		},
		sell: 0,
		colors: "red",
		shapes: "ammolet",
		synergies: ["Raizo's Stuff", "Venom Veins"]
	},
	"Muscle Relaxant": {
		id: 231,
		name: "Muscle Relaxant",
		icon: "item/Muscle_Relaxant.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "肌肉松弛剂",
			tips: "降低 66% 子弹偏移，增加精准度",
			trivia:
				"引用自《合金装备》系列里的肌肉松弛药物，如安定剂（Diazepam）、镇静剂（Pentazemin）。",
			keyword: "jirousongchiji jrscj 肌肉鬆弛劑"
		},
		sell: 30,
		colors: "red,yellow",
		shapes: "other",
		synergies: ["Diazepam"]
	},
	"Hip Holster": {
		id: 232,
		name: "Hip Holster",
		icon: "item/Hip_Holster.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "臀部皮套",
			tips: "装弹时额外发射一颗子弹。\r\n对弹夹只有 1 颗子弹的枪有较大加成。",
			notes:
				"装弹时额外发射一颗子弹。\r\n对弹夹只有 1 颗子弹的枪有较大加成。\r\n- 额外射出的子弹不会激怒{{NPC:Bello}}，可以用来在商店里找{{ROOM:Secret Room}}。\r\n- 对一次发射多颗子弹的枪无效。{{GUN:Mass Shotgun}}虽然是霰弹枪，但发射的是一个球，可以触发该效果。\r\n- 对{{GAME_MODE:Winchester's Game}}的{{GUN:Prize Pistol}}有效。\r\n- {{ITEM:Metronome}}的伤害加成对额外射出的子弹无效。",
			keyword: "tunbupitao tbpt 臀部皮套"
		},
		sell: 30,
		colors: "brown",
		shapes: "ring",
		synergies: ["All Out Of Law", "Quick and the Gundead", "Saved the Best for Last", "Pretty Good"]
	},
	Clone: {
		id: 233,
		name: "Clone",
		icon: "item/Clone.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "克隆人",
			tips: "角色死亡会回到初始关卡的第一个房间，保留所有状态、{{PICKUP:Blank}}、枪、道具（{{ITEM:Clone}}会被消耗掉）。",
			notes:
				'角色死亡会回到初始关卡的第一个房间，保留所有状态、{{PICKUP:Blank}}、枪、道具（{{ITEM:Clone}}会被消耗掉）。\r\n\r\n- 如果气跑了{{NPC:Bello}}，他不会回来开店。\r\n- {{SYSTEM:Curse}}会保留，不会被重置。\r\n- {{SYSTEM:Master Round}}可以重复获得，更容易解锁{{ITEM:Super Hot Watch}}。\r\n- 如果同时拥有{{ITEM:Gun Soul}}时，死亡会优先触发{{ITEM:Gun Soul}}，在跑尸体过程中死亡，会正常触发{{ITEM:Clone}}，但是复活后会继承{{ITEM:Gun Soul}}的状态（只有 1 个{{SYSTEM:Heart Container}}，所有增加{{SYSTEM:Heart Container}}的效果无效）。如果同时拥有，建议扔掉{{ITEM:Gun Soul}}。\r\n- 如果同时拥有{{ITEM:Pig}}，死亡会优先触发{{ITEM:Pig}}。\r\n- 如果通过{{ROOM:Shortcuts}}直接进入后面的关卡，复活会回到进入时的那个关卡而不是第一关。\r\n- 因为{{GUNGEONEER:The Robot}}没有{{SYSTEM:Heart Container}}，复活后还是 6 个{{PICKUP:Armor}}，血量上没有优势。\r\n- 不能带进角色的过去关卡，所以在过去关卡中死亡是无法复活的。\r\n- 如果打败了{{BOSS:Resourceful Rat}}，复活后它也不会出来偷东西，但可以进入{{CHAMBER:Resourceful Rat\'s Lair}}再打一次。\r\n- 如果拥有多个{{ITEM:Clone}}，死亡后会全部被消耗掉。\r\n- 通过{{ITEM:Clone}}复活后，有可能再次获得{{ITEM:Clone}}。\r\n- 如果带着{{SYSTEM:Serpent}}，复活后它会跟过来。\r\n- 死亡前如果身上有{{ITEM:Glass Guon Stone}}，复活后还在，不会碎掉。\r\n\r\n<h3>BUG</h3>\r\n- 如果在干掉{{BOSS:Lich}}第一阶段后死亡，不会触发{{ITEM:Clone}}，还是会被他的爪子抓到下一层，但不会进入第二阶段的战斗，导致游戏假死卡关。（干掉第二阶段后原地去世同理。）\r\n- 如果在((燃烧))状态下死亡，复活后((燃烧))状态还在，记得原地打滚。\r\n- {{SYSTEM:co-op}}下，如果带着{{ITEM:Clone}}的角色先死亡，{{ITEM:Clone}}会直接消失，不会掉出来。\r\n- 如果在{{ITEM:Clone}}生效的一瞬间暂停游戏，会导致游戏假死。\r\n\r\n<span style="text-decoration:line-through">你看它一脸痴呆的样子，那是打多个周目身体被掏空了</span>',
			keyword:
				"kelongrenxiaolvrenshentibeitaokongxiaozhizhangjiabanren klr xlr stbtk xzz jbr 克隆人 小綠人 身體被掏空 小智障 加班人 小绿人 身体被掏空 小智障 加班人",
			unlock:
				"把{{NPC:Ox}}的手臂运输到{{PAGE:The Breach}}，具体见{{NPC:Ox and Cadence}}\r\n[(~data/Delivery.jpg)]"
		},
		sell: 54,
		colors: "green,yellow",
		shapes: "other"
	},
	Sponge: {
		id: 234,
		name: "Sponge",
		icon: "item/Sponge.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "海绵",
			tips: "吸收附近地上的液体",
			notes:
				"吸收附近地上的液体。\r\n不能出售。\r\n正常情况下，无法和{{NPC:Professor Goopton}}沟通（说的话是乱码），有{{ITEM:Sponge}}时可以听懂它在话。（中文因为翻译原因，不管有没有{{ITEM:Sponge}}，它说的都是中文）。\r\n- 效果和{{ITEM:Bug Boots}}冲突，会导致无法留下毒液。\r\n- 效果和{{GUN:Plunger}}冲突，会导致无法通过站在液体上装弹来恢复弹药。",
			trivia:
				"物品简介“敬虔（Godliness）”引用自俗语“Cleanliness is next to Godliness（洁净近虔敬）”，意思是清洁仅次于圣洁，清洁是一种美德。\r\n\r\n可以听懂{{NPC:Professor Goopton}}的话引用自《哆啦A梦》里的{翻译魔芋}。\r\n[(~data/Translation_konjak.jpg)]",
			keyword: "haimian hm 海綿",
			unlock: "花费 6{{PICKUP:Hegemony Credit}}从{{NPC:Professor Goopton}}购买"
		},
		sell: 21,
		colors: "brown",
		shapes: "other",
		synergies: ["Soft Air", "Spengbab"]
	},
	"Gas Mask": {
		id: 235,
		name: "Gas Mask",
		icon: "item/Gas_Mask.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "防毒面具",
			tips: "{免疫}((中毒))伤害",
			keyword: "fangdumianju fdmj 防毒麵具"
		},
		sell: 16,
		colors: "yellow,gray,red",
		shapes: "other",
		synergies: ["Super Serum"]
	},
	"Hazmat Suit": {
		id: 236,
		name: "Hazmat Suit",
		icon: "item/Hazmat_Suit.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "防护服",
			tips: "{免疫}((燃烧))((中毒))((电流))伤害",
			notes:
				"{免疫}((燃烧))((中毒))((电流))伤害。\r\n{{GAME_MODE:Challenge Mode}}中如果获得，会轻松很多。",
			keyword: "fanghufu fhf 防護服",
			unlock: "无伤击败{{CHAMBER:Black Powder Mine}}BOSS"
		},
		sell: 30,
		colors: "black,yellow,red",
		shapes: "other",
		synergies: ["Super Serum"]
	},
	"Book of Chest Anatomy": {
		id: 237,
		name: "Book of Chest Anatomy",
		icon: "item/Book_of_Chest_Anatomy.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "宝箱构造指南",
			tips: "提高击碎未开启{{SYSTEM:Chest}}掉落物品的质量。",
			notes:
				"提高击碎未开启{{SYSTEM:Chest}}掉落物品的质量。\r\n如果提前透视了宝箱内的物品（如通过{{GUN:The Exotic}}或部分{{SYSTEM:Synergy}}效果），则有很高概率直接掉落该物品。",
			keyword: "baoxianggouzaozhinan bxgzzn 寶箱構造指南",
			unlock: "在{{ENEMY:Mimic}}变身前先攻击它"
		},
		sell: 21,
		colors: "brown,yellow",
		shapes: "rect",
		synergies: ["Research"]
	},
	"Gun Soul": {
		id: 238,
		name: "Gun Soul",
		icon: "item/Gun_Soul.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "枪灵",
			tips: "增加 1 个{{SYSTEM:Heart Container}}。\r\n角色死亡后，可以跑去捡尸体复活。",
			notes:
				"增加 1 个{{SYSTEM:Heart Container}}。\r\n死亡后，角色回到该层的第一个房间，保留所有物品，变为只有1个{{SYSTEM:Heart Container}}（{{GUNGEONEER:The Robot}}为2个{{PICKUP:Armor}}），需要回到死亡的地点捡回尸体后，才可以恢复所有的{{SYSTEM:Heart Container}}。之前打过的房间都需要重新打，且没有{{PICKUP:Shell}}掉落。\r\n如果在捡尸体途中再次死亡，就真的GG了。\r\n捡尸体复活后再次死亡，可以重新跑尸体。\r\n同时拥有{{ITEM:Clone}}，死亡会优先触发{{ITEM:Gun Soul}}，跑尸体过程中死亡，才会触发{{ITEM:Clone}}，但复活后会继承{{ITEM:Gun Soul}}的状态（只有 1 个{{SYSTEM:Heart Container}}，所有增加{{SYSTEM:Heart Container}}的效果无效）。如果同时拥有，建议扔掉{{ITEM:Gun Soul}}。",
			trivia: "引用自《黑暗之魂（Dark Souls）》",
			keyword: "qiangling ql 槍靈",
			unlock: "击败{{BOSS:High Dragun}}"
		},
		sell: 41,
		colors: "blue,white",
		shapes: "circle",
		synergies: ["Crestfallen Soul", "Praise the Gun", "\\o/"]
	},
	"Shelleton Key": {
		id: 239,
		name: "Shelleton Key",
		icon: "item/Shelleton_Key.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "骷髅钥匙",
			tips: "打开上锁的门和{{SYSTEM:Chest}}不需要消耗{{PICKUP:Key}}。\r\n增加 1 点{{SYSTEM:Curse}}。",
			notes:
				"打开上锁的门和{{SYSTEM:Chest}}不需要消耗{{PICKUP:Key}}。\r\n增加 1 点{{SYSTEM:Curse}}。\r\n- 不能打开需要{{ITEM:Gnawed Key}}打开的{{CHAMBER:Resourceful Rat's Lair}}入口地板门和{{CHEST:Rat Chest}}。",
			trivia:
				"道具名{Shelleton Key}是{{ENEMY:Shelleton}}{Shelleton}和{Skeleton key（万能钥匙）}的混合词。",
			keyword: "kulouyaoshi klys 骷髏鑰匙",
			unlock: "{{SYSTEM:Steal}} 10 次"
		},
		sell: 54,
		colors: "brown,yellow,black",
		shapes: "other",
		synergies: ["Akey Breaky", "Key Witness", "Shell-A-Ton"]
	},
	"Brick of Cash": {
		id: 240,
		name: "Brick of Cash",
		icon: "item/Brick_of_Cash.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "现金砖",
			tips: "{{ROOM:Secret Room}}入口会有一个[(~~data/Brick_of_Cash_baby.png)]提示位置",
			keyword: "xianjinzhuan xjz 現金磚"
		},
		sell: 30,
		colors: "purple,black",
		shapes: "other",
		synergies: ["Cash Rules Everygun Around Me"]
	},
	"Battle Standard": {
		id: 241,
		name: "Battle Standard",
		icon: "item/Battle_Standard.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "战旗",
			tips: "{{SYSTEM:Companion}}和被((魅惑))的敌人增加 80% 伤害。\r\n增加小怪被((魅惑))的时间。\r\n增加获得{{SYSTEM:Companion}}的概率。",
			trivia:
				"获得后会出现在角色背后，是为数不多会改变角色模型的物品。\r\n引用自《暗黑破坏神III》，玩家可以把旗帜背在背上。\r\n也可能引用自《激战2（Guild Wars 2）》，玩家可以装备一个同名的红色旗帜。\r\n也可能引用自《战锤40000（Warhammer 40,000）》，指挥官带着战旗，可以鼓舞士气，增加士兵的伤害。",
			keyword: "zhanqi zq 戰旗",
			unlock: "同时拥有 2 个{{SYSTEM:Companion}}"
		},
		sell: 16,
		colors: "yellow,red",
		shapes: "rect"
	},
	Wingman: {
		id: 242,
		name: "Wingman",
		icon: "item/Wingman.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "僚机驾驶员",
			tips: "每隔 5 秒发射 20 伤害的((跟踪))导弹。\r\n环绕玩家，可以抵挡子弹。",
			notes:
				"每隔 5 秒发射 20 伤害的((跟踪))导弹。\r\n环绕玩家，可以抵挡子弹。\r\n- 导弹可以被{{ITEM:Remote Bullets}}控制。\r\n- 如果敌人在导弹击中前死亡，导弹不会重新寻找目标。\r\n- 受{{ITEM:Battle Standard}}影响。",
			trivia: "僚机驾驶员可能是{{GUNGEONEER:The Pilot}}{{CHAMBER:The Past}}里的{Z}",
			keyword: "liaojijiashiyuan ljjsy 僚機駕駛員",
			unlock: "完成{{GUNGEONEER:The Pilot}}的{{CHAMBER:The Past}}"
		},
		sell: 41,
		colors: "purple,yellow",
		shapes: "circle",
		synergies: ["Pilot Wingsman"]
	},
	Wolf: {
		id: 243,
		name: "Wolf",
		icon: "item/Wolf.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "狼",
			tips: "追赶并攻击敌人，每次攻击造成 5 伤害。",
			notes:
				"追赶并攻击敌人，每次攻击造成 5 伤害。\r\n- 会攻击隐身的{{BOSS:High Priest}}{{BOSS:Cannonbalrog}}。\r\n- 不会攻击{{BOSS:Resourceful Rat}}第二阶段的机甲。\r\n- 不会攻击{{BOSS:High Dragun}}。\r\n- {{ITEM:Dog}}狗可以跳过坑，而{{ITEM:Wolf}}狼不行。",
			trivia:
				"引用自日本历史上具有传奇色彩的{忠犬八公}，一只以忠心闻名的秋田犬，每天早上都会在家门口目送主人上班，傍晚到涩谷站去迎接主人下班。在主人去世后，依然每天到涩谷站去等候主人的归来。直到最后死去，一共等了十年。\r\n手帕图标引用自《合金装备》，Otacon 在越狱期间给了撕内裤一条相同的手帕，它原本属于女狙击手 Sniper Wolf。",
			keyword: "lang l 狼",
			unlock: "完成{{GUNGEONEER:The Hunter}}的{{CHAMBER:The Past}}"
		},
		sell: 30,
		colors: "gray",
		shapes: "paper",
		synergies: ["I need scissors! 61!", "The Red Hood", "Sniper Woof", "Tea for Two"]
	},
	Dog: {
		id: 244,
		name: "Dog",
		icon: "item/Dog.png",
		type: "Passive",
		quality: "D",
		locale: {
			type: "被动",
			name: "狗",
			tips: "跟随玩家，清空房间后有 5% 概率挖出一个{{SYSTEM:Pickup}}。\r\n发现{{ENEMY:Mimic}}会叫。\r\n{{GUNGEONEER:The Hunter}}的初始被动道具。",
			notes:
				"跟随玩家，清空房间后有 5% 概率挖出一个{{SYSTEM:Pickup}}。\r\n发现{{ENEMY:Mimic}}会叫（不会对着{{ENEMY:Pedestal Mimic}}和{{ENEMY:Wall Mimic}}叫）。\r\n{{GUNGEONEER:The Hunter}}的初始被动道具。\r\n- 角色为{{GUNGEONEER:The Hunter}}时无法丢弃。\r\n- 和它互动可以{撸狗}。战斗状态下不能撸狗。多数角色撸狗时会露出笑脸，{{GUNGEONEER:The Robot}}撸狗时显示器上会显示一个爱心，{{GUNGEONEER:The Convict}}撸狗会比较温柔（动作比别的角色慢）。\r\n- {{ITEM:Dog}}狗可以跳过坑，而{{ITEM:Wolf}}狼不行。\r\n- 如果拥有{{ITEM:Baby Good Mimic}}且模仿了{{ITEM:Dog}}，清空房间后两只狗都有概率挖出{{SYSTEM:Pickup}}。",
			trivia:
				"{{ITEM:Wolf}}的简介是“初级（Junior）”，{{ITEM:Dog}}的简介是“二世（Junior II）”，暗示着{{GUNGEONEER:The Hunter}}对曾经的小伙伴的思念。（感觉翻译成“小东西”和“小东西二世”更好些）",
			keyword: "gou g 狗",
			unlock: "完成{{GUNGEONEER:The Hunter}}的{{CHAMBER:The Past}}"
		},
		sell: 16,
		colors: "green,white",
		shapes: "circle"
	},
	Owl: {
		id: 245,
		name: "Owl",
		icon: "item/Owl.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "猫头鹰",
			tips: "当敌人的子弹接近时，会触发小范围{{PICKUP:Blank}}效果。\r\n偶尔发射一颗子弹随机攻击一个敌人。\r\n环绕玩家，可以抵挡子弹。",
			notes:
				"当敌人的子弹接近时，会触发小范围{{PICKUP:Blank}}效果。\r\n偶尔发射一颗子弹随机攻击一个敌人。\r\n环绕玩家，可以抵挡子弹。\r\n- 触发的小{{PICKUP:Blank}}效果不能打开{{ROOM:Secret Room}}。\r\n- 触发的小{{PICKUP:Blank}}效果可以触发{{SYSTEM:Ammolet}}。\r\n- 发射的子弹受子弹被动影响。",
			trivia:
				"引用自《杀戮地带:暗影坠落（Killzone:Shadow Fall）》的{猫头鹰无人机（OWL Drone）}，会攻击敌人和保护玩家。",
			keyword: "maotouying mty 貓頭鷹",
			unlock: "获得 10 次{{GAME_MODE:King's Game}}的胜利"
		},
		sell: 54,
		colors: "brown,white,yellow",
		shapes: "ammolet",
		synergies: ["Don't Hoot the Messenger", "Special Delivery", "The Elephant in the Room"]
	},
	"Super Space Turtle": {
		id: 246,
		name: "Super Space Turtle",
		icon: "item/Super_Space_Turtle.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "超级太空龟",
			tips: "跟随玩家，向敌人发射子弹，每颗子弹造成 5 伤害。",
			notes:
				"跟随玩家，向敌人发射子弹，每颗子弹造成 5 伤害。\r\n- 玩家隐身时，太空龟会穿上侦探服。\r\n- 在玩家攻击{{ENEMY:Mimic}}前不会主动攻击它。\r\n- 不会攻击{{BOSS:Mine Flayer}}放出的铃铛。\r\n- 太空龟的攻击受{{SHRINE:Y.V.}}效果影响。\r\n- 太空龟发射的子弹不会被{{ENEMY:Gunjurer}}吸收。\r\n- 太空龟的射击会计算为玩家的射击，有{{ITEM:Turkey}}时可以让太空龟去攻击敌人来恢复弹药。（{{GUN:Makeshift Cannon}}：？？？）",
			trivia: "物品介绍中提到的“微小的武器”指的是废弃枪{超级太空龟枪}。",
			keyword: "chaojitaikonggui cjtkg 超級太空龜",
			unlock: "击败{{BOSS:Blobulord}}"
		},
		sell: 30,
		colors: "yellow,green",
		shapes: "other",
		synergies: [
			"Super Space Turtle DX",
			"Tea for Two",
			"The Elephant in the Room",
			"Turtle Solutions"
		]
	},
	Junk: {
		id: 247,
		name: "Junk",
		icon: "item/Junk.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "垃圾",
			tips: "击碎{{SYSTEM:Chest}}时有概率掉落。",
			notes:
				"击碎{{SYSTEM:Chest}}时有概率掉落。\r\n- 没有{{PICKUP:Key}}时，摧毁宝箱有 60% 概率掉落{{ITEM:Junk}}，有{{PICKUP:Key}}时有 72% 概率。\r\n- 如果还没有解锁{{ITEM:Ser Junkan}}，{{ITEM:Junk}}有 20% 概率变成{{ITEM:Ser Junkan}}，解锁后概率为 1%。\r\n- 拥有{{ITEM:Ser Junkan}}时，收集{{ITEM:Junk}}可以让{{ITEM:Ser Junkan}}不断变强。\r\n- {{GUNGEONEER:The Robot}}每个{{ITEM:Junk}}可以增加 5% 的伤害，加成效果在拾取时生效，即使失去该{{ITEM:Junk}}，加成效果依然会保留，同个{{ITEM:Junk}}只会加成 1 次。\r\n- 可以卖 3{{PICKUP:Shell}}。",
			keyword: "laji lj 垃圾"
		},
		sell: 0,
		colors: "brown",
		shapes: "rect",
		synergies: ["Grouch"]
	},
	"Gold Junk": {
		id: 248,
		name: "Gold Junk",
		icon: "item/Gold_Junk.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "金垃圾",
			tips: "拾取后获得 500{{PICKUP:Shell}}，金坷垃！\r\n如果拥有{{ITEM:Ser Junkan}}，{{ITEM:Ser Junkan}}会直接进化成机甲战士形态[(~~data/Ser_Junkan_Golden.png)]。",
			notes:
				"拾取后获得 500{{PICKUP:Shell}}，金坷垃！\r\n- 如果拥有{{ITEM:Ser Junkan}}，{{ITEM:Ser Junkan}}会直接进化成机甲战士形态[(~~data/Ser_Junkan_Golden.png)]。\r\n- 和普通的{{ITEM:Junk}}一样可以增加{{GUNGEONEER:The Robot}}5% 伤害。",
			trivia:
				"物品简介“吾之蜜糖（One Man's Trash）”引用自俗语“one man's trash is another man's treasure（彼之砒霜，吾之蜜糖）”。",
			keyword: "jinlajijinkela jlj jkl 金垃圾 金坷垃 金坷垃",
			unlock:
				"摧毁任意{{CHEST:Red Chest}}{{CHEST:Black Chest}}{{CHEST:Rainbow Chest}}解锁（已打开的或变成宝箱怪的也可以）。\\n注意是解锁，不是摧毁这几种宝箱必出{{ITEM:Gold Junk}}，解锁后摧毁任意宝箱都有概率掉落。"
		},
		sell: 0,
		colors: "brown,yellow",
		shapes: "rect"
	},
	Lies: {
		id: 249,
		name: "Lies",
		icon: "item/Junk.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "谎言",
			tips: "只能通过摧毁{{CHEST:Truth Chest}}获得。",
			notes:
				"只能通过摧毁{{CHEST:Truth Chest}}获得。\r\n- 和普通{{ITEM:Junk}}一样可以让{{ITEM:Ser Junkan}}变强。\r\n- 不能献祭给{{SHRINE:Junk}}。\r\n非解锁{{GUN:Finished Gun}}的必要条件。",
			keyword: "huangyan hy 謊言"
		},
		sell: 0,
		colors: "brown",
		shapes: "rect",
		synergies: ["Betrayer's Lies", "Wicked Sister"]
	},
	"Ser Junkan": {
		id: 250,
		name: "Ser Junkan",
		icon: "item/Ser_Junkan_1.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "垃圾宝宝",
			tips: "召唤垃圾宝宝，拥有的{{ITEM:Junk}}都会成为垃圾宝宝的装备，改变形态，增加伤害。\r\n未解锁前，{{ITEM:Junk}}有 20% 概率转化为{{ITEM:Ser Junkan}}，解锁后概率为 1%。",
			notes:
				'召唤垃圾宝宝，拥有的{{ITEM:Junk}}{{ITEM:Lies}}都会成为垃圾宝宝的装备，改变形态，增加伤害。\r\n[["~{{ITEM:Junk}}\\n数量","~形态","~能力"],["~0","~[(~data/Ser_Junkan_1.png)]农民","推开敌人，无伤害"],["~1","~[(~data/Ser_Junkan_2.png)]小兵","缓慢攻击，3点伤害"],["~2","~[(~data/Ser_Junkan_3.png)]士兵","正常攻击，5点伤害"],["~3","~[(~data/Ser_Junkan_4.png)]骑士","快速攻击，7点伤害"],["~4","~[(~data/Ser_Junkan_5.png)]中尉","9点伤害"],["~5","~[(~data/Ser_Junkan_6.png)]司令","进行旋转攻击，造成10x2点伤害，可同时攻击多个敌人"],["~6","~[(~data/Ser_Junkan_7.png)]圣骑士","13.33伤害，偶尔会瞬移到玩家身边触发小范围{{PICKUP:Blank}}效果。\\n玩家死亡时，会牺牲自己使玩家复活"],["~7","~[(~data/Ser_Junkan_Final.png)]天使骑士","10点伤害，攻击频率非常快，失去复活玩家的能力，自身可以飞"],["~{{ITEM:Gold Junk}}","~[(~data/Ser_Junkan_Golden.png)]机甲战士","- 使用机械枪快速射击，每次2.2点伤害，诅咒怪被击中会变回普通怪\\n- 使用激光剑攻击，20点伤害\\n- 迅速射出跟踪导弹，每颗8点伤害"]]\r\n\r\n- 未解锁前，{{ITEM:Junk}}有 20% 概率转化为{{ITEM:Ser Junkan}}，解锁后概率为 1%。\r\n- 如果带着{天使骑士}形态的垃圾宝宝通关，结算界面会有它的大特写，角色在角落里默默点了个赞。\r\n- {{SYSTEM:co-op}}下，如果带着{圣骑士}形态垃圾宝宝的玩家先死亡，垃圾宝宝会正常消耗掉，但玩家不会复活。\r\n- {圣骑士}形态的垃圾宝宝触发的小{{PICKUP:Blank}}效果可以触发{{SYSTEM:Ammolet}}。\r\n- {天使骑士}形态的垃圾宝宝发射的子弹受{{ITEM:Chaos Bullets}}{{ITEM:Flak Bullets}}影响。\r\n- 如果失去{{ITEM:Junk}}，垃圾宝宝会退化形态（始终以当前拥有的{{ITEM:Junk}}数量为准）。',
			trivia:
				"道具名{Ser Junkan}可能引用自{Sir Juncan}，《冰与火之歌（A Song of Ice and Fire）》外传《Tales of Dunk and Egg（邓克和伊戈）》里的主角。\r\n也可能引用自{Sir Juncan}，《上古卷轴IV：湮没（The Elder Scrolls IV: Oblivion）》第一个官方资料片《九骑士（Knights of the Nine）》里的一个角色。",
			keyword: "lajibaobao ljbb 垃圾寶寶",
			unlock:
				"带着{{ITEM:Ser Junkan}}的[(~~data/Ser_Junkan_4.png)]（3个{{ITEM:Junk}}）以上形态击败BOSS"
		},
		sell: 21,
		colors: "brown",
		shapes: "rect",
		synergies: ["Tea for Two"]
	},
	R2G2: {
		id: 251,
		name: "R2G2",
		icon: "item/R2G2.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "R2G2",
			tips: "召唤一个机器人跟随玩家，当敌人进入射程时，会跟踪敌人并定期向敌人发射 6 颗子弹。",
			notes:
				"召唤一个机器人跟随玩家，当敌人进入射程时，会跟踪敌人并定期向敌人发射 6 颗子弹。\r\n- 自带火箭喷射器，碰到坑时可以自己飞过去。\r\n- 发射的子弹受子弹被动影响。\r\n- 如果受到过大的伤害会死掉，把背包中的{{ITEM:R2G2}}扔出来重新拾取会复活。\r\n- {{ITEM:Scouter}}可以显示{{ITEM:R2G2}}的血条。",
			trivia:
				"引用自《星球大战（Star Wars）》里的机器人{R2-D2}。\r\n物品说明中的“这个机器人为子弹怪提供饮料”引用自《星球大战6：绝地归来》里的一个场景，R2-D2 被迫在赫特人贾巴的飞船上供应饮料。\r\n[(~data/R2_D2.jpg)]",
			keyword: "R2G2 R2G2 R2G2",
			unlock:
				"修好{{CHAMBER:Black Powder Mine}}的{{ROOM:Shortcuts}}\\n\\n材料：\\n- 3{{PICKUP:Armor}}（{{GUNGEONEER:The Robot}}需要 6 个）\\n- 4{{PICKUP:Key}} + 180{{PICKUP:Shell}}\\n- 15{{PICKUP:Hegemony Credit}}\\n- {{ITEM:Master Round II}}"
		},
		sell: 54,
		colors: "yellow,blue",
		shapes: "other",
		synergies: ["Battery Powered", "Tea for Two"]
	},
	"Baby Good Shelleton": {
		id: 252,
		name: "Baby Good Shelleton",
		icon: "item/Baby_Good_Shelleton.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "弹壳骷髅宝宝",
			tips: "召唤一只萌萌的小弹壳骷髅宝宝，跟随玩家，眼睛发射绿色激光攻击敌人，biubiubiu~\r\n小伙子挺有骨气的！",
			trivia: "物品说明引用自{{ENEMY:Shelleton}}。",
			keyword: "dankekuloubaobao dkklbb 彈殼骷髏寶寶",
			unlock: "获得{{ITEM:Baby Good Mimic}}"
		},
		sell: 54,
		colors: "brown,yellow",
		shapes: "other",
		synergies: ["Birthright", "Shell-A-Ton", "Tea for Two"]
	},
	Badge: {
		id: 253,
		name: "Badge",
		icon: "item/Badge.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "警徽",
			tips: "召唤一个警察叔叔跟随玩家，向敌人发射子弹，受到一定伤害会死亡，和尸体对话，会增加 2 点{{SYSTEM:Curse}} 和 20% 伤害。",
			notes:
				"召唤一个警察叔叔跟随玩家，向敌人发射子弹，受到一定伤害会死亡，和尸体对话，会增加 2 点{{SYSTEM:Curse}} 和 20% 伤害。\r\n- 可以和警察叔叔交谈。\r\n- 玩家的一些行为也会对警察叔叔造成伤害（如水电或爆炸）。\r\n- 在进入{{BOSS:High Dragun}}BOSS房时，警察叔叔会原地去世，除非拥有{{SYNERGY:To Serve Android}}。\r\n- 警察叔叔死亡后，和尸体对话，{{ITEM:Badge}}会被消耗掉。如果不对话，丢出{{ITEM:Badge}}，尸体会直接消失（但地图上还是会有图标），重新捡回也不会再次出现。\r\n- 如果拥有{{ITEM:Snowballets}}，警察叔叔发射的子弹会迅速变大。\r\n\r\n<h3>BUG</h3>\r\n- 如果{{ITEM:Baby Good Mimic}}变成警察叔叔，并且先死亡，和他对话会导致卡关。\r\n- 如果BOSS战结束时马上和警察叔叔的尸体对话，会导致卡关。如果{{BOSS:Blobulord}}死后留下的小形态没有打掉，和尸体对话也会卡关。",
			trivia: "引用自警察剧中经常出现的“退休前的最后一天”梗。",
			keyword: "jinghuijingchashushu jh jcss 警徽 警察叔叔 警察叔叔",
			unlock: "击败{{BOSS:Blockner}}"
		},
		sell: 41,
		colors: "yellow,brown",
		shapes: "shield,other",
		synergies: ["Detective Mode", "Tea for Two", "To Serve Android"]
	},
	"Chicken Flute": {
		id: 254,
		name: "Chicken Flute",
		icon: "item/Chicken_Flute.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "鸡长笛",
			tips: "召唤一只鸡神跟随玩家，抵挡子弹，并对碰撞到的敌人造成 2.5 伤害。\r\n受到一定伤害会召唤鸡群攻击敌人。",
			notes:
				"召唤一只鸡神跟随玩家，抵挡子弹，并对碰撞到的敌人造成 2.5 伤害。\r\n受到一定伤害会呼叫鸡神军团攻击敌人。\r\n- 在带电的水上可以快速触发鸡群效果。\r\n- {{ITEM:Shock Rounds}}的电链会对鸡神造成伤害。",
			trivia:
				"引用自《塞尔达传说》系列，如果攻击一只{库克鸡（Cucco）}3 次，就会出现一大群库克鸡攻击玩家。\r\n图标引用自该游戏系列中的{精灵之笛（Fairy Ocarina）}。",
			keyword: "jichangdijishen jcd js 雞長笛 雞神 鸡神",
			unlock: "完成{{GUNGEONEER:The Bullet}}的{{CHAMBER:The Past}}"
		},
		sell: 30,
		colors: "brown",
		shapes: "other",
		synergies: ["Bullet or the Egg", "Tea for Two", "The Elephant in the Room"]
	},
	"Space Friend": {
		id: 255,
		name: "Space Friend",
		icon: "item/Space_Friend.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "太空朋友",
			tips: "跟随玩家，向敌人发射激光，每次造成 5 伤害。\r\n可以抵挡子弹。",
			notes:
				"跟随玩家，向敌人发射激光，每次造成 5 伤害。\r\n可以抵挡子弹。\r\n- 如果小心调整{{ITEM:Space Friend}}的位置，可以挡住{{BOSS:Wallmonger}}的大部分攻击和{{BOSS:High Dragun}}的满屏弹幕阶段。\r\n- 激光受{{ITEM:Magic Bullets}}影响。\r\n- 拥有{{ITEM:Helix Bullets}}时，激光会变成螺旋弹道，但不会分裂成 2 道，伤害也没有影响。\r\n- 激光会被{{ENEMY:Gunjurer}}吸收。",
			trivia:
				"图标引用自街机游戏《雷电（Raiden）》，默认图标为 1P 的红色飞机，拥有{{SYNERGY:Space Best Friend}}时会变成 2P 的蓝色飞机。\r\n[(~data/Raiden.jpg)]",
			keyword: "taikongpengyoufeiji tkpy fj 太空朋友 飛機 飞机",
			unlock: "花费 25{{PICKUP:Hegemony Credit}}从{{NPC:Ox and Cadence}}购买"
		},
		sell: 30,
		colors: "gray,red,yellow",
		shapes: "other",
		synergies: ["RAIDEN", "Space Best Friend"]
	},
	Pig: {
		id: 256,
		name: "Pig",
		icon: "item/Pig.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "英雄猪",
			tips: "召唤一只小猪跟随玩家，玩家死亡时，会牺牲自己让玩家满血复活。",
			notes:
				"召唤一只小猪跟随玩家，玩家死亡时，会牺牲自己让玩家满血复活。\r\n- {{SYSTEM:co-op}}下，如果带着{{ITEM:Pig}}的玩家先死，不会被小猪复活，且可能导致卡关。\r\n- 如果{{ITEM:Baby Good Mimic}}模仿了小猪，玩家死亡时{{ITEM:Baby Good Mimic}}会优先牺牲自己复活玩家。\r\n- 如果同时拥有{{ITEM:Ration}}，死亡时{{ITEM:Pig}}和{{ITEM:Ration}}都会被消耗掉。\r\n- {{GUN:Fightsabre}}装弹时，小猪会被推出很远。",
			trivia:
				"引用自德国电影《Siegfried》，一只猪跳起来替主人挡了一箭，救了主人。\r\n\r\n解锁的时候名字为{猪（Pig）}，简介为“机灵的”，说明为“一只奇怪的猪，看起来没什么问题，但它机灵的目光和怪异的凝视让人怀疑它的目的，也许不是一只好猪。”\r\n在触发一次效果后，名字会变成{英雄猪（Hero Pig）}，物品简介和说明也会更新，变成“它很年轻”和“一只英雄猪，你不应该怀疑这只猪，它是一个真正的英雄”。",
			keyword: "yingxiongzhu yxz 英雄豬",
			unlock: "完成{{GAME_MODE:Hunting Quests}}"
		},
		sell: 41,
		colors: "blue,yellow",
		shapes: "other",
		synergies: [
			"Bacon and Eggs",
			"Hyper Beam",
			"The Line Of Fire",
			"Porkulent",
			"Tea for Two",
			"The Elephant in the Room",
			"The Return"
		]
	},
	Turkey: {
		id: 257,
		name: "Turkey",
		icon: "item/Turkey.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "火鸡球",
			tips: "每 3 次射击，恢复 1 颗子弹。\r\n召唤一只火鸡跟随玩家。",
			notes:
				"每 3 次射击，恢复 1 颗子弹。\r\n召唤一只火鸡跟随玩家。\r\n- {{ITEM:Super Space Turtle}}的射击会计算为玩家的射击，可以让太空龟去攻击敌人来恢复弹药。（可能有其它小跟班的攻击也算）\r\n- 切枪不会中断该效果，可以利用这点来减少子弹容量较少的枪的弹药消耗，比如先用其它枪开 2 枪，然后切换{{GUN:Makeshift Cannon}}，你懂的。。。",
			trivia:
				"道具及其说明引用自保龄球运动，连续三次全倒的专业术语为“火鸡”。保龄球是中世纪欧洲的农民在农闲或节庆时的休闲运动，当时要完成连续三次全倒非常困难，所以在感恩节时大家就拿火鸡当做实现这个奇迹的奖品，从而流传下来。\r\n道具图标像一只火鸡，是沿着右手的轮廓画出来的。\r\n\r\n道具效果和简介“三次全中（Triple Tap）”引用自《命运（Destiny）》系列的武器技能{Triple-Tap}，三发暴击回一颗弹药。",
			keyword: "huojiqiu hjq 火雞球",
			unlock: "使用 2 次{{SHRINE:Companion}}"
		},
		sell: 21,
		colors: "gray,black",
		shapes: "rect",
		synergies: ["Tea for Two", "The Elephant in the Room"]
	},
	"Turtle Problem": {
		id: 258,
		name: "Turtle Problem",
		icon: "item/Turtle_Problem.png",
		type: "Passive",
		quality: "C",
		locale: {
			type: "被动",
			name: "乌龟成灾",
			tips: "清空房间后会生成一只乌龟跟班，可以抵挡子弹和冲撞敌人，承受一定伤害后死亡。",
			trivia: "引用自 Terry Pratchett 的奇幻小说《Small Gods》里的至高神 Om。",
			keyword: "wuguichengzai wgcz 烏龜成災",
			unlock: "带着{{ITEM:Super Space Turtle}}打败{{BOSS:High Dragun}}"
		},
		sell: 21,
		colors: "yellow,green",
		shapes: "other",
		synergies: ["Turtle Solutions"]
	},
	Sprun: {
		id: 259,
		name: "Sprun",
		icon: "item/Sprun.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "弹簧支撑",
			tips: "跟随玩家抵挡子弹。\r\n拾取后触发特定条件，会奖励玩家一把临时的{{GUN:Windgunner}}。",
			notes:
				"跟随玩家抵挡子弹。\r\n拾取后触发特定条件，会奖励玩家一把临时的{{GUN:Windgunner}}。每局游戏会在下面的条件中随机一种：\r\n- 用掉最后一个{{PICKUP:Blank}}\r\n- 失去最后一个{{PICKUP:Armor}}\r\n- 掉血后只剩半颗心{{PICKUP:Half Heart}}\r\n- 用完一把枪的弹药\r\n- 触发((燃烧))/((触电))/((中毒))状态（免疫也能触发）\r\n- 掉坑里\r\n- 掉血\r\n- 掀桌\r\n- 使用主动道具",
			trivia:
				"引用自布兰登·桑德森（Brandon Sanderson）的小说《飓光志（Stormlight Archive）》，灵体（Spren）引导主角成为风行者（Windrunner）。",
			keyword: "danhuangzhicheng dhzc 彈簧支撐 tanhuangzhicheng thzc",
			unlock: "进行 6 局游戏"
		},
		sell: 41,
		colors: "green,white",
		shapes: "circle"
	},
	"Baby Good Mimic": {
		id: 260,
		name: "Baby Good Mimic",
		icon: "item/Baby_Good_Mimic.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "拟身怪乖宝宝",
			tips: "跟随玩家，不主动攻击，受到伤害时才会反抗。\r\n如果拥有其它{{SYSTEM:Companion}}，会模仿为最后获得的一个，模仿后会一直保留该状态。",
			notes:
				"跟随玩家。当进入一个有敌人的房间时，它会锁上自己安静的坐在一旁。被敌人打到时会打开并随便射击几下以示不满，然后重新上锁坐着，直至清空房间再次跟随玩家。\r\n有时会随机咬敌人几下，老用力了。\r\n会对碰撞到的敌人造成接触伤害，顶你个肺。\r\n如果玩家同时拥有其它{{SYSTEM:Companion}}，{{ITEM:Baby Good Mimic}}会模仿成其中一个，获得相同的外观、效果和能力，之后无论模仿对象是否还在，会一直保留模仿状态。\r\n- 优先模仿已拥有的最后获得的{{SYSTEM:Companion}}。\r\n- 如果获得{{ITEM:Clown Mask}}时，身上已经有{{ITEM:Drill}}或{{ITEM:Loot Bag}}，{{ITEM:Baby Good Mimic}}会模仿第一个出现的小丑。\r\n- 不会模仿{{ITEM:Owl}}。\r\n- 发射的子弹受子弹被动影响。\r\n- 如果模仿了{{ITEM:Pig}}，玩家死亡时{{ITEM:Baby Good Mimic}}会优先牺牲自己复活玩家。\r\n- 用{{ITEM:Grappling Hook}}攻击{{ITEM:Baby Good Mimic}}，它会被打晕，然后开始发动攻击。\r\n- 模仿的对象在获得{{SYSTEM:Synergy}}时，{{ITEM:Baby Good Mimic}}不会获得新组合效果。但如果在模仿时，模仿对象已经有组合了，则模仿的是带有组合效果的。\r\n- 如果拥有{{ITEM:Shock Rounds}}，{{ITEM:Baby Good Mimic}}会一直处于攻击状态。\r\n- 游戏崩溃或保存退出后重进游戏，{{ITEM:Baby Good Mimic}}模仿的对象可能会变。",
			keyword: "nishenguaiguaibaobao nsggbb 擬身怪乖寶寶"
		},
		sell: 30,
		colors: "brown,gray",
		shapes: "other",
		synergies: ["Tea for Two"]
	},
	"Blank Companion's Ring": {
		id: 261,
		name: "Blank Companion's Ring",
		icon: "item/Blank_Companion%27s_Ring.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "空响弹伙伴之戒指",
			tips: "召唤一个空响弹伙伴跟随玩家，使用主动道具时会释放{{PICKUP:Blank}}，该效果每 10 秒可以触发一次。",
			notes:
				"召唤一个空响弹伙伴跟随玩家，使用主动道具时会释放{{PICKUP:Blank}}，该效果每 10 秒可以触发一次。\r\n- 当拥有短CD的主动道具时，相当于每 10 秒有一个免费的{{PICKUP:Blank}}，如：\r\n<g>{{ITEM:Melted Rock}}{{ITEM:Shield of the Maiden}}{{ITEM:Jetpack}}{{ITEM:Sense of Direction}}{{ITEM:iBomb Companion App}}{{ITEM:Grappling Hook}}</g>\r\n{{ITEM:Busted Television}}：看我看我\r\n- 不能触发{{SHRINE:Blank}}。",
			keyword: "kongxiangdanhuobanzhijiezhi kxdhbzjz 空響彈夥伴之戒指"
		},
		sell: 41,
		colors: "yellow,brown",
		shapes: "ring",
		synergies: ["Blank Generation", "Keep The Change", "Tea for Two"]
	},
	"Briefcase of Cash": {
		id: 262,
		name: "Briefcase of Cash",
		icon: "item/Briefcase_of_Cash.png",
		type: "Passive",
		quality: "A",
		locale: {
			type: "被动",
			name: "一公文包的现金",
			tips: "获得的 250{{PICKUP:Shell}}和 3{{PICKUP:Hegemony Credit}}。",
			notes:
				"获得的 250{{PICKUP:Shell}}和 3{{PICKUP:Hegemony Credit}}。\r\n- 获得的奖励永久生效，也就是说，你可以把它卖了获得额外的 41{{PICKUP:Shell}}。",
			keyword: "yigongwenbaodexianjin ygwbdxj 一公文包的現金",
			unlock: "完成{{GUNGEONEER:The Convict}}的{{CHAMBER:The Past}}"
		},
		sell: 41,
		colors: "black,green",
		shapes: "other",
		synergies: ["Cash Rules Everygun Around Me", "Wicked Sister"]
	},
	"Galactic Medal of Valor": {
		id: 263,
		name: "Galactic Medal of Valor",
		icon: "item/Galactic_Medal_of_Valor.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "银河勇士奖章",
			tips: "+30% 对BOSS的伤害\r\n-50% 装弹时间\r\n-50% 子弹偏移，增加精准度",
			notes:
				"+30% 对BOSS的伤害\r\n-50% 装弹时间\r\n-50% 子弹偏移，增加精准度\r\n- 不能丢弃\r\n- 可以带进{{CHAMBER:The Past}}",
			keyword: "yinheyongshijiangzhang yhysjz 銀河勇士獎章",
			unlock: "完成{{GUNGEONEER:The Marine}}的{{CHAMBER:The Past}}"
		},
		sell: 30,
		colors: "red,blue,yellow",
		shapes: "ammolet",
		synergies: ["Decorated", "Hegemony Special Forces"]
	},
	"Bullet Idol": {
		id: 264,
		name: "Bullet Idol",
		icon: "item/Bullet_Idol.png",
		type: "Passive",
		quality: "B",
		locale: {
			type: "被动",
			name: "子弹偶像",
			tips: "受伤时对房间内所有敌人造成 45 伤害",
			keyword: "zidanouxiang zdox 子彈偶像"
		},
		sell: 30,
		colors: "red,green,brown",
		shapes: "bullet",
		synergies: ["Criticaliber", "Devil's Plaything", "Just Like The Real Thing"]
	},
	"Riddle of Lead": {
		id: 265,
		name: "Riddle of Lead",
		icon: "item/Riddle_of_Lead.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "铅谜",
			tips: "+1 个{{SYSTEM:Heart Container}}，并回满{{PICKUP:Heart}}。\r\n+30% 伤害，+10% 移速，+15% 翻滚速度。\r\n当血量 ≤1 个{{PICKUP:Heart}}时，有 50% 概率抵消伤害。\r\n{{GUNGEONEER:The Robot}}获得时可以一直有 50% 概率抵消伤害效果。",
			notes:
				"+1 个{{SYSTEM:Heart Container}}，并回满{{PICKUP:Heart}}。\r\n+30% 伤害，+10% 移速，+15% 翻滚速度。\r\n当血量 ≤1 个{{PICKUP:Heart}}时，有 50% 概率抵消伤害。\r\n- {{GUNGEONEER:The Robot}}获得时会一直有 50% 概率抵消伤害。\r\n- 丢出重新拾取，不会重复获得治疗。\r\n- 伤害抵消对掉落伤害有效。\r\n- 伤害抵消只是不掉血，还是会有受伤判定。如果在BOSS战中触发，虽然没有掉血，但也无法获得{{SYSTEM:Master Round}}。",
			trivia:
				"引用自 1982 年的魔幻电影《野蛮人柯南（Conan the Barbarian）》中的“Riddle of Steel（钢铁之谜）”。",
			keyword: "qianmi qm 鉛謎",
			unlock: "击败{{BOSS:Lich}}"
		},
		sell: 54,
		colors: "gray,red,black",
		shapes: "bullet",
		synergies: ["Liches Get Stitches"]
	},
	"Bracket Key": {
		id: 266,
		name: "Bracket Key",
		icon: "item/Bracket_Key.png",
		type: "Active",
		quality: "S",
		locale: {
			type: "主动",
			name: "支架钥匙",
			tips: "+1{{SYSTEM:Curse}}。\r\n使用后对房间内所有敌人造成 75 伤害，且不会出现下一波敌人。",
			notes:
				"+1{{SYSTEM:Curse}}。\r\n使用后对房间内所有敌人造成 75 伤害，且不会出现下一波敌人。\r\n- 可以对隐身的BOSS造成伤害，如{{BOSS:Cannonbalrog}}{{BOSS:High Priest}}。",
			trivia:
				"汉化翻车现场，“Bracket Key”应该作为一个词组翻译为“括号键”而不是拆开直译成“支架钥匙”。\r\n该道具引用自本游戏开发组自己的开发过程。为了便于调试，开发小哥使用键盘上的“]”键来自动清空房间并阻止生成新的敌人。",
			keyword: "zhijiayaoshifangkuohaojian zjys fkhj 支架鑰匙 方括號鍵 方括号键",
			unlock: "完成{{GAME_MODE:Boss Rush}}"
		},
		sell: 54,
		colors: "gray,black",
		shapes: "other",
		synergies: ["Hacker", "Square Brace"]
	},
	"Elder Blank": {
		id: 267,
		name: "Elder Blank",
		icon: "item/Elder_Blank.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "旧式空响弹",
			tips: "+2{{SYSTEM:Curse}}。\r\n使用后触发{{PICKUP:Blank}}效果。",
			notes:
				"+2{{SYSTEM:Curse}}。\r\n使用后触发{{PICKUP:Blank}}效果。\r\n- 同时拥有{{ITEM:Full Metal Jacket}}时，受伤可自动触发。该方式不会触发{{SYNERGY:Bullet Kiln}}。\r\n- 不能触发{{SHRINE:Blank}}。\r\n- 可以在翻滚过程中使用。",
			keyword:
				"jiushikongxiangdanlaoBdanlaokongxiangdan jskxd lBd lkxd 舊式空響彈 老B彈 老空響彈 老B弹 老空响弹"
		},
		sell: 30,
		colors: "black,white",
		shapes: "other",
		synergies: ["Blank Generation", "Bullet Kiln", "Elder Blank Bullets"]
	},
	"Teleporter Prototype": {
		id: 268,
		name: "Teleporter Prototype",
		icon: "item/Teleporter_Prototype.png",
		type: "Active",
		quality: "B",
		locale: {
			type: "主动",
			name: "传送原型机",
			tips: "使用后随机传送到一个房间。\r\n如果传送到有敌人的房间，会随机秒杀 1 个敌人。\r\n有概率传送到{{ROOM:Secret Room}}。\r\n有极小概率传送到下一关卡（包括隐藏关卡）。\r\n有极小概率传送到{{ROOM:The Eyeball Room}}，可以解锁{{ITEM:Yellow Chamber}}。",
			notes:
				"使用后随机传送到一个房间。\r\n如果传送到有敌人的房间，会随机秒杀 1 个敌人。\r\n- 有概率传送到{{ROOM:Secret Room}}。\r\n- 有极小概率传送到下一关卡。\r\n- 在{{CHAMBER:Keep of the Lead Lord}}使用有概率传送到{{CHAMBER:Oubliette}}。\r\n- 在{{CHAMBER:Gungeon Proper}}使用有概率传送到{{CHAMBER:Abbey of the True Gun}}。\r\n- 有极小概率传送到{{ROOM:The Eyeball Room}}，可以解锁{{ITEM:Yellow Chamber}}。\r\n- 在 BOSS 战开始后传送出去，重新进去打 BOSS，即使全程无伤也不会给{{SYSTEM:Master Round}}。\r\n- 在{{GAME_MODE:Boss Rush}}和{{CHAMBER:Resourceful Rat's Lair}}中无效。",
			keyword: "chuansongyuanxingjichuansongji csyxj csj 傳送原型機 傳送機 传送机",
			unlock: "花费 22{{PICKUP:Hegemony Credit}}从{{NPC:Doug}}购买"
		},
		sell: 30,
		colors: "black,green",
		shapes: "circle",
		synergies: ["Production Model", "Second Accident", "Telefrag"]
	},
	"Yellow Chamber": {
		id: 269,
		name: "Yellow Chamber",
		icon: "item/Yellow_Chamber.png",
		type: "Passive",
		quality: "S",
		locale: {
			type: "被动",
			name: "黄色膛室",
			tips: "+2{{SYSTEM:Curse}}。\r\n+2个{{SYSTEM:Heart Container}}。\r\n+15% 射击频率。\r\n每进入一个房间，大概率永久((魅惑))其中一个敌人，清空房间后该敌人会自动被杀（不掉落{{PICKUP:Shell}}）。",
			notes:
				"+2{{SYSTEM:Curse}}。\r\n+2个{{SYSTEM:Heart Container}}。\r\n+15% 射击频率。\r\n每进入一个房间，大概率永久((魅惑))其中一个敌人，清空房间后该敌人会自动被杀（不掉落{{PICKUP:Shell}}）。\r\n- 对只有一个敌人的房间无效。\r\n- 只对每个房间的第一波敌人有效。\r\n- 对{{ITEM:Lament Configurum}}{{SHRINE:Challenge}}{{ITEM:Drill}}召唤的敌人有效。\r\n- 不会魅惑{{ENEMY:Red-Caped Bullet Kin}}。",
			trivia: "引用自 Robert W. Chambers 的短篇小说集《The King In Yellow（黄袍国王）》。",
			keyword: "huangsetangshihuangtang hsts ht 黃色膛室 黃膛 黄膛",
			unlock:
				"击杀 10 只{{ENEMY:Confirmed}}\r\n或通过{{ITEM:Teleporter Prototype}}进入{{ROOM:The Eyeball Room}}"
		},
		sell: 54,
		colors: "yellow,red,black",
		shapes: "circle",
		synergies: [
			"Hellhole",
			"Just Like The Real Thing",
			"Kaliber k'pow uboom k'bhang",
			"Kaliber's Grip",
			"Kalibreath",
			"Pitch Perfect",
			"Super Space Turtle DX"
		]
	},
	"Infuriating Note": {
		id: 270,
		name: "Infuriating Note",
		icon: "item/Infuriating_Note.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "令人气愤的纸条",
			tips: "一共有 6 张，开箱子有几率开出，最后一张只会从{{ENEMY:Mimic}}身上掉落。集齐后不会再出现。\r\n道具说明最后一行的奶酪尖角的方向，是{{CHAMBER:Resourceful Rat's Lair}}的线索。",
			keyword: "lingrenqifendezhitiaolaoshu lrqfdzt ls 令人氣憤的紙條 老鼠 老鼠"
		},
		sell: 0,
		colors: "brown,yellow",
		shapes: "rect"
	},
	"The Bullet That Can Kill The Past": {
		id: 1001,
		name: "The Bullet That Can Kill The Past",
		icon: "item/Bullet_That_Can_Kill_The_Past.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "可以抹掉过去的子弹",
			tips: "携带{{ITEM:The Bullet That Can Kill The Past}}使用{{GUN:The Gun That Can Kill The Past}}通关，可以进入角色的{{CHAMBER:The Past}}，{{SYSTEM:Kill The Past}}。\r\n解锁后和{{CHAMBER:Forge}}的{{NPC:Blacksmith}}对话获得。",
			notes:
				"携带{{ITEM:The Bullet That Can Kill The Past}}使用{{GUN:The Gun That Can Kill The Past}}通关（不进入{{CHAMBER:Bullet Hell}}），可以进入角色的过去关卡，{{SYSTEM:Kill The Past}}。\r\n解锁后和{{CHAMBER:Forge}}的{{NPC:Blacksmith}}对话获得。\r\n{{ITEM:The Bullet That Can Kill The Past}}可以被{{NPC:Resourceful Rat}}偷走，如果拥有{{ITEM:Ring of the Resourceful Rat}}，会换成一个{{QUALITY:S}}级的被动道具。\r\n<h3>解锁方法</h3>\r\n把下面四个材料交给{{CHAMBER:Forge}}的{{NPC:Blacksmith}}（可以分多局游戏给，每个只需给一次）：\r\n<g>{{ITEM:Prime Primer}}{{ITEM:Arcane Gunpowder}}{{ITEM:Planar Lead}}{{ITEM:Obsidian Shell Casing}}</g>\r\n材料的具体获得方法，请进入材料的详细信息查看。",
			keyword:
				"keyimodiaoguoqudezidanguoquzidan kymdgqdzd gqzd 可以抹掉過去的子彈 過去子彈 过去子弹"
		},
		sell: 0,
		colors: "gray,black",
		shapes: "bullet"
	},
	"Gnawed Key": {
		id: 1002,
		name: "Gnawed Key",
		icon: "item/Gnawed_Key.png",
		type: "Passive",
		quality: "N",
		locale: {
			type: "被动",
			name: "被咬的钥匙",
			tips: "打开{{CHAMBER:Resourceful Rat's Lair}}的入口。",
			notes:
				"打开{{CHAMBER:Resourceful Rat's Lair}}的入口。\r\n解锁{{ITEM:The Bullet That Can Kill The Past}}后，会在{{CHAMBER:Gungeon Proper}}{{NPC:Bello}}的商店出售，第一次购买需要 1000{{PICKUP:Shell}}（可以分多局游戏支付），买过之后，价格会变成 115{{PICKUP:Shell}}",
			keyword: "beiyaodeyaoshilaoshu bydys ls 被咬的鑰匙 老鼠 老鼠"
		},
		sell: 0,
		colors: "brown,yellow,black",
		shapes: "other"
	}
};
