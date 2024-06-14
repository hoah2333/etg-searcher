export default {
	"Brown Chest": {
		name: "Brown Chest",
		local_icon: "chest/Brown_Chest.png",
		quality: "D",
		locale: {
			name: "棕色宝箱",
			tips: "可以开出{{QUALITY:D}}品质的枪或道具\r\n可能附加{{SYSTEM:Pickup}}"
		}
	},
	"Blue Chest": {
		name: "Blue Chest",
		local_icon: "chest/Blue_Chest.png",
		quality: "C",
		locale: {
			name: "蓝色宝箱",
			tips: "可以开出{{QUALITY:C}}品质的枪或道具\r\n大概率开出道具"
		}
	},
	"Green Chest": {
		name: "Green Chest",
		local_icon: "chest/Green_Chest.png",
		quality: "B",
		locale: {
			name: "绿色宝箱",
			tips: "可以开出{{QUALITY:B}}品质的枪或道具"
		}
	},
	"Red Chest": {
		name: "Red Chest",
		local_icon: "chest/Red_Chest.png",
		quality: "A",
		locale: {
			name: "红色宝箱",
			tips: "可以开出{{QUALITY:A}}品质的枪或道具"
		}
	},
	"Black Chest": {
		name: "Black Chest",
		local_icon: "chest/Black_Chest.png",
		quality: "S",
		locale: {
			name: "黑色宝箱",
			tips: "可以开出{{QUALITY:S}}品质的枪或道具"
		}
	},
	"Rainbow Chest": {
		name: "Rainbow Chest",
		local_icon: "chest/Rainbow_Chest.png",
		quality: "N",
		locale: {
			name: "彩虹宝箱",
			tips: "可以开出 8 个枪和道具，品质分别大约为：\r\n15%{{QUALITY:S}}+54%{{QUALITY:A}}+31%{{QUALITY:B}}",
			notes:
				"{彩虹宝箱}可以开出 8 个枪和道具，品质分别大约为：\r\n15%{{QUALITY:S}}+54%{{QUALITY:A}}+31%{{QUALITY:B}}\r\n\r\n普通宝箱有 0.0333% 概率替换为彩虹宝箱，清空房间后有 0.001% 概率直接掉落彩虹宝箱。\r\n{{CHEST:Rainbow Chest}}有概率伪装成{{CHEST:Brown Chest}}，只有在打开、破坏、使用可以产生液体的枪射击才会现出原形。\r\n{{CHEST:Rainbow Chest}}打开时有概率转变成{{CHEST:Synergy Chest}}，开出 8 件组合道具和枪。"
		}
	},
	"Glitch Chest": {
		name: "Glitch Chest",
		quality: "N",
		locale: {
			name: "故障宝箱",
			tips: "如果尝试打开，玩家会被带到有故障的下一关卡，只有BOSS房，BOSS是合体的 2 只{{BOSS:Beholster}}，击败BOSS除了普通的BOSS奖励，还会获得额外的 7 个道具或枪，以及满地的补给",
			notes:
				"{故障宝箱}又叫{Bug宝箱}，如果尝试打开故障宝箱，玩家会被带到有故障的下一关卡，只有BOSS房，BOSS是合体的 2 只{{BOSS:Beholster}}，击败BOSS除了普通的BOSS奖励，还会获得额外的 7 个枪或道具，以及满地的{{SYSTEM:Pickup}}。\r\n\r\n<span style='color:red'>注意：奖励物品的底座有很大概率是</span>{{ENEMY:Pedestal Mimic}}\r\n\r\n满足以下条件，会有 0.1% 概率出现故障宝箱：\r\n- 击败{{BOSS:Beholster}}至少1次\r\n- 进入地牢至少 10 次\r\n- 故障宝箱只会出现在{{CHAMBER:Keep of the Lead Lord}}{{CHAMBER:Gungeon Proper}}{{CHAMBER:Black Powder Mine}}\r\n\r\n在故障关卡死亡，击杀者会显示成乱码。\r\n双人游戏时，如果一个玩家已死亡，另一个玩家进入故障关卡，死亡的玩家会复活并一起传送。"
		},
		icon: "data/Glitch_Chest.gif"
	},
	"Synergy Chest": {
		name: "Synergy Chest",
		local_icon: "chest/Synergy_Chest.png",
		quality: "N",
		locale: {
			name: "组合宝箱",
			tips: "打开时会在 <span style='color:red'>红色</span> 和 <span style='color:blue'>蓝色</span> 间不断变换，变换结束后，如果是 <span style='color:red'>红色</span>，会随机掉落一个道具或枪，如果是 <span style='color:blue'>蓝色</span>，会掉落一个可以和玩家拥有的道具或枪形成{{SYSTEM:Synergy}}的道具或枪",
			notes:
				"打开时会在 <span style='color:red'>红色</span> 和 <span style='color:blue'>蓝色</span> 间不断变换，变换结束后，如果是 <span style='color:red'>红色</span>，会随机掉落一个道具或枪，如果是 <span style='color:blue'>蓝色</span>，会掉落一个可以和玩家拥有的道具或枪形成{{SYSTEM:Synergy}}的道具或枪。\r\n开出的道具或枪品质随机。\r\n组合宝箱偶尔会替换普通宝箱出现，并经常带有{导火索}，也可以在{{NPC:Synergrace}}购买。\r\n组合宝箱不会变成{{ENEMY:Mimic}}，即使玩家拥有{{ITEM:Mimic Tooth Necklace}}。"
		}
	},
	"Rat Chest": {
		name: "Rat Chest",
		local_icon: "chest/Rat_Chest.png",
		quality: "N",
		locale: {
			name: "老鼠宝箱",
			tips: "{{CHAMBER:Resourceful Rat's Lair}}特有的宝箱，使用{{PICKUP:Rat Key}}打开。\r\n可以开出{老鼠套装}部件，集齐 4 个玩家的外观会变成{{NPC:Resourceful Rat}}",
			notes:
				"{老鼠宝箱}是{{CHAMBER:Resourceful Rat's Lair}}特有的宝箱，击败{{BOSS:Resourceful Rat}}后的奖励房里会有 4 个。\r\n- 需要使用{{BOSS:Resourceful Rat}}{拳击阶段}掉落的{{PICKUP:Rat Key}}打开\r\n- 不能通过{{GUN:AKEY-47}}或{{ITEM:Shelleton Key}}打开\r\n- 可以使用{{ITEM:Trusty Lockpicks}}或{{ITEM:Drill}}（Switch版）打开\r\n老鼠宝箱可以开出{老鼠套装}部件<g>{{GUN:Elimentaler}}{{ITEM:Partially-Eaten Cheese}}{{ITEM:Resourceful Sack}}{{ITEM:Rat Boots}}</g>，同时拥有 4 个部件，玩家的外观会变成{{NPC:Resourceful Rat}}。\r\n如果玩家已经拥有老鼠套装的部件，打开相应的老鼠宝箱会随机给一个道具或枪。\r\n老鼠宝箱可能变成{{ENEMY:Mimic}}。"
		}
	},
	"Truth Chest": {
		name: "Truth Chest",
		local_icon: "chest/Truth_Chest.png",
		quality: "N",
		locale: {
			name: "真理宝箱",
			tips: "和{{NPC:Brother Albern}}一起出现，必然出现在{{CHAMBER:Abbey of the True Gun}}的特殊{{ROOM:Secret Room}}，有极小概率出现在普通{{ROOM:Secret Room}}。\r\n回答{{NPC:Brother Albern}}的问题后（不管选哪个答案）自动开锁。\r\n可以开出 1~2 个{{SYSTEM:Pickup}} 或随机品质的枪或道具\r\n如果摧毁这个宝箱，有一定概率掉落{{ITEM:Lies}}或{{ITEM:Ser Junkan}}"
		}
	},
	"Revival Chest": {
		name: "Revival Chest",
		local_icon: "chest/Revival_Chest.png",
		quality: "N",
		locale: {
			name: "复活宝箱",
			tips: "{{SYSTEM:co-op}}模式下，任一角色死亡，当前关卡中所有未打开的{{SYSTEM:Chest}}都会变成{{CHEST:Revival Chest}}，打开无需{{PICKUP:Key}}，死亡的队友会从里面中跳出来，满血复活。队友复活后，所有宝箱恢复原状。"
		}
	}
};
