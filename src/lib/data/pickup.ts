export default {
	Shell: {
		name: "Shell",
		local_icon: "pickup/Money.png",
		icon_size: 32,
		locale: {
			name: "弹壳币",
			tips: "地牢内的主要货币形式，主要用于向各种商人NPC购买物品\r\n敌人死亡有较大概率掉落，清空房间后自动飞向玩家，也可主动拾取。如果掉落时刚好掉进坑里，会判定为被拾取，自动计入玩家钱包\r\n{{PICKUP:Shellx5}} = {{PICKUP:Shell}}x5\r\n{{PICKUP:Shellx50}} = {{PICKUP:Shell}}x50"
		}
	},
	Shellx5: {
		name: "Shellx5",
		local_icon: "pickup/Money_5.png",
		icon_size: 32,
		locale: {
			name: "银弹壳币",
			tips: "地牢内的货币\r\n{{PICKUP:Shellx5}} = {{PICKUP:Shell}}x5"
		}
	},
	Shellx50: {
		name: "Shellx50",
		local_icon: "pickup/Golden_Shell.png",
		icon_size: 32,
		locale: {
			name: "金弹壳币",
			tips: "地牢内的货币\r\n{{PICKUP:Shellx50}} = {{PICKUP:Shell}}x50"
		}
	},
	"Half Heart": {
		name: "Half Heart",
		local_icon: "pickup/Half_Heart.png",
		icon_size: 32,
		locale: {
			name: "半颗心",
			tips: "角色生命值（血量）的表现形式"
		}
	},
	Heart: {
		name: "Heart",
		local_icon: "pickup/Heart.png",
		icon_size: 32,
		locale: {
			name: "心",
			tips: "角色生命值（血量）的表现形式\r\n{{PICKUP:Heart}} = {{PICKUP:Half Heart}} x 2"
		}
	},
	Armor: {
		name: "Armor",
		local_icon: "pickup/Armor.png",
		icon_size: 32,
		locale: {
			name: "护甲",
			tips: "获得后追加在生命值后面，受伤时自动消耗一个{{PICKUP:Armor}}，抵消伤害并触发{{PICKUP:Blank}}效果"
		}
	},
	Blank: {
		name: "Blank",
		local_icon: "pickup/Blank.png",
		icon_size: 32,
		locale: {
			name: "空响弹",
			tips: "使用后清除整个房间的敌人子弹，短时间内阻止敌人子弹移动，推开附近的敌人并对他们造成10伤害\r\n如果当前房间连接着{{ROOM:Secret Room}}，会打开入口",
			notes:
				"使用后清除整个房间的敌人子弹，短时间内阻止敌人子弹移动，推开附近的敌人并对他们造成10伤害\r\n如果当前房间连接着{{ROOM:Secret Room}}，会打开入口\r\n进入下一层时，如果玩家少于2个{{PICKUP:Blank}}，会恢复满2个。\r\n以下道具每个可以提高1个{{PICKUP:Blank}}恢复上限：<g>{{ITEM:White Guon Stone}}{{ITEM:Chaos Ammolet}}{{ITEM:Uranium Ammolet}}{{ITEM:Copper Ammolet}}{{ITEM:Lodestone Ammolet}}{{ITEM:Gold Ammolet}}{{ITEM:Frost Ammolet}}</g>"
		}
	},
	Key: {
		name: "Key",
		local_icon: "pickup/Key.png",
		icon_size: 32,
		locale: {
			name: "钥匙",
			tips: "用于打开上锁的宝箱和门，一层和二层的商店经常会出售\r\n也可以用来向{{NPC:Flynt}}购买商品，这货只要{{PICKUP:Key}}不要{{PICKUP:Shell}}"
		}
	},
	"Cell Key": {
		name: "Cell Key",
		local_icon: "pickup/Cell_Key.png",
		icon_size: 32,
		locale: {
			name: "牢房钥匙",
			tips: "（专门）用于打开牢房的门，解救（解锁）被囚禁的{NPC}\r\n存在牢房的层，必出{{PICKUP:Cell Key}}，可能会从任意敌人身上掉落（较大概率在BOSS身上）"
		}
	},
	"Rat Key": {
		name: "Rat Key",
		local_icon: "pickup/Ratkey.png",
		icon_size: 32,
		locale: {
			name: "老鼠钥匙",
			tips: "用于打开{{CHEST:Rat Chest}}和特定的门，通过和{{CHAMBER:Resourceful Rat's Lair}}的BOSS{{BOSS:Resourceful Rat}}打架获得"
		}
	},
	Ammo: {
		name: "Ammo",
		local_icon: "pickup/Ammo.png",
		icon_size: 32,
		locale: {
			name: "弹药包",
			tips: "拾取（使用）后恢复满当前装备枪的子弹\r\n当装备的抢子弹已满或无限子弹时，无法拾取\r\n玩家离开房间后，未拾取的{弹药包}会被{{NPC:Resourceful Rat}}偷走"
		}
	},
	"Spread Ammo": {
		name: "Spread Ammo",
		local_icon: "pickup/Spread_Ammo.png",
		icon_size: 32,
		locale: {
			name: "弹药包",
			tips: "拾取（使用）后恢复当前装备枪50%的子弹和其它枪20%的子弹"
		}
	},
	"Hegemony Credit": {
		name: "Hegemony Credit",
		local_icon: "pickup/Hegemony_Credit.png",
		icon_size: 32,
		locale: {
			name: "帝国币",
			tips: "用于：\r\n- 在{{ROOM:The Breach}}购买（解锁）枪和道具\r\n- 修理电梯需要用到\r\n- 进入{{GAME_MODE:Boss Rush}}\r\n- 进入{{GAME_MODE:Blessing Mode}}\r\n- 进入{{GAME_MODE:Challenge Mode}}\r\n- 使用付费角色{{GUNGEONEER:The Paradox}}{{GUNGEONEER:The Gunslinger}}",
			notes:
				'用于：\r\n- 在{{ROOM:The Breach}}购买（解锁）枪和道具\r\n- 修理电梯需要用到\r\n- 通过电梯，进入{{GAME_MODE:Boss Rush}}\r\n- 进入{{GAME_MODE:Blessing Mode}}\r\n- 进入{{GAME_MODE:Challenge Mode}}\r\n- 使用付费角色{{GUNGEONEER:The Paradox}}{{GUNGEONEER:The Gunslinger}}\r\n\r\n获得途径：\r\n- 击杀BOSS（无伤击杀会掉落更多）\r\n- 完成{{GAME_MODE:Hunting Quests}}\r\n- 极小概率清空房间后掉落\r\n- 游戏中获得{{ITEM:Briefcase of Cash}}\r\n- 第一次完成{{CHAMBER:Hall of Knowledge}}\r\n\r\nBOSS掉落{{PICKUP:Hegemony Credit}}的数量随机，各关卡范围如下：\r\n[["~关卡","~最小值","~最大值"],["~1","1","3"],["~2/隐藏1","1","4"],["~3/隐藏2/4","2","5"]]\r\n无伤击杀BOSS会掉落更多\r\n{{GAME_MODE:Blessing Mode}}和{{GAME_MODE:Boss Rush}}BOSS不会掉落'
		}
	}
};
