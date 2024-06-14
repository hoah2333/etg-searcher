export default {
	Ammo: {
		id: 1,
		name: "Ammo",
		icon: "shrine/Ammo_Shrine.png",
		locale: {
			name: "弹药",
			tips: "+3.5 {{SYSTEM:Curse}}，所有枪支补满弹药。",
			trivia: "雕像的形象是{{BOSS:Lich}}的第二形态，对话内容为“Deal with the Devil”。"
		}
	},
	Angel: {
		id: 2,
		name: "Angel",
		icon: "shrine/Angel_Shrine.png",
		locale: {
			name: "天使",
			tips: "-1 个{{SYSTEM:Heart Container}}（{{GUNGEONEER:The Robot}}-2{{PICKUP:Armor}}），+1.5 {{SYSTEM:Curse}}，+25% 伤害。"
		}
	},
	Blank: {
		id: 3,
		name: "Blank",
		icon: "shrine/Blank_Shrine.png",
		locale: {
			name: "空响弹",
			tips: "雕像附近触发{{PICKUP:Blank}}效果，有 90% 几率给 1 个宝箱，再次触发概率 -45%，最低为 25%。\r\n给的宝箱可能是{{ENEMY:Mimic}}。\r\n主动道具{{ITEM:Elder Blank}}不能触发。",
			trivia:
				"雕像形象是{{NPC:Old Red}}，他偶尔会出现在{{ROOM:Gungeon}}，卖一些{{PICKUP:Blank}}相关的物品。"
		}
	},
	Blood: {
		id: 4,
		name: "Blood",
		icon: "shrine/Blood_Shrine.png",
		locale: {
			name: "血液",
			tips: "-1 个{{SYSTEM:Heart Container}}（{{GUNGEONEER:The Robot}}-2{{PICKUP:Armor}}），部分敌人会((发红光))，靠近它们可以造成伤害并((吸血))，吸血量够时获得治疗。\r\n对隐身的敌人有效（如{{BOSS:Cannonbalrog}}）。\r\n该效果可以带进角色的过去任务。",
			trivia:
				"引用自电影《夺宝奇兵2之魔宫传奇（Indiana Jones and the Temple of Doom）》，失去{{SYSTEM:Heart Container}} 引用自 Mola Ram 挖出祭品的心脏，对话“Kaliber Mah Shakti De”引用自台词“Kali Ma Shakti De”。"
		}
	},
	Challenge: {
		id: 5,
		name: "Challenge",
		icon: "shrine/Challenge_Shrine.png",
		locale: {
			name: "挑战",
			tips: "打败召唤的 3 波敌人，给 1 个宝箱。\r\n给的宝箱可能是{{ENEMY:Mimic}}。"
		}
	},
	Cleanse: {
		id: 6,
		name: "Cleanse",
		icon: "shrine/Cleanse_Shrine.png",
		locale: {
			name: "净化",
			tips: "花钱去除{{SYSTEM:Curse}}，每点{{SYSTEM:Curse}}耗费 5 {{PICKUP:Shell}}。",
			trivia: "雕像中的女人摆了个“打枪”的手势"
		}
	},
	Companion: {
		id: 7,
		name: "Companion",
		icon: "shrine/Familiar_Shrine.png",
		locale: {
			name: "同伴",
			tips: "-1 个{{SYSTEM:Heart Container}}（{{GUNGEONEER:The Robot}}-2{{PICKUP:Armor}}），随机获得 1 个{{SYSTEM:Companion}}。\r\n{{GAME_MODE:Rainbow Mode}}下触发，代价会正常支付，但不会获得{{SYSTEM:Companion}}。",
			trivia:
				"出现在雕像里的同伴有：<g>{{ITEM:Super Space Turtle}}{{ITEM:Blank Companion's Ring}}{{ITEM:Baby Good Mimic}}{{ITEM:R2G2}}{{ITEM:Pig}}{{ITEM:Wolf}}{{ITEM:Dog}}{{ITEM:Badge}}</g>"
		}
	},
	Dice: {
		id: 8,
		name: "Dice",
		icon: "shrine/Dice_Shrine.png",
		locale: {
			name: "骰子",
			tips: "随机获得 1 个好效果和 1 个坏效果。",
			notes:
				'随机获得 1 个好效果和 1 个坏效果。\r\n<h3>好效果</h3>\r\n[["~英文","~中文","~效果"],["Renewed","打起精神","恢复随机数量的血"],["Bolstered","鼓舞","增加 1-2 个{{SYSTEM:Heart Container}}"],["Hasted","匆忙","增加移动速度"],["Paid","支付","获得 20-99 {{PICKUP:Shell}}"],["Shielded","屏蔽","获得 1-3 个{{PICKUP:Armor}}"],["Cleansed","干净","去除最多 10 点{{SYSTEM:Curse}}"],["Gift","礼物","获得 1 个宝箱"],["Reloaded","重装","弹药容量提升为 125%，\\r\\n或者所有枪支补满弹药"],["Blanked","空白","获得 1-10 个{{PICKUP:Blank}}"]]\r\n<h3>坏效果</h3>\r\n[["~英文","~中文","~效果"],["Pained","痛苦","失去 1-2 个红心{{PICKUP:Heart}}"],["Enfeebled","衰弱","减少 1 个{{SYSTEM:Heart Container}}"],["Robbed","抢劫","失去 25-100% 的{{PICKUP:Shell}}"],["Disarmed","解除武装","失去当前使用的枪械"],["Limited","有限","弹药容量减少 30%"],["De-Blanked","删除","减少随机数量的{{PICKUP:Blank}}"],["Cursed","诅咒","增加 5 点{{SYSTEM:Curse}}"],["Unsteady","不稳定","增加装弹时间"],["Priceless","无价","无坏效果"]]\r\n- 有 0.1% 的几率发生爆炸把你推开，减少为只有 1 个{{SYSTEM:Heart Container}}，提升为 4 倍伤害。\r\n- {{PICKUP:Heart}}和{{SYSTEM:Heart Container}}相关的效果对{{GUNGEONEER:The Robot}}无效。\r\n- 有可能随机到作用刚好相反的效果，如回血和掉血、获得金钱和损失金钱、减少诅咒值和增加诅咒值、获得空响弹和失去空响弹。'
		}
	},
	Glass: {
		id: 9,
		name: "Glass",
		icon: "shrine/Glass_Shrine.png",
		locale: {
			name: "玻璃",
			tips: "获得 3 个{{ITEM:Glass Guon Stone}}。\r\n首次使用该雕像解锁{{ITEM:Glass Guon Stone}}。"
		}
	},
	Hero: {
		id: 10,
		name: "Hero",
		icon: "shrine/Hero_Shrine.png",
		locale: {
			name: "英雄",
			tips: "{{SYSTEM:Curse}}变为 9 点。\r\n{{SYSTEM:Kill The Past}}的角色才可以使用。\r\n{{SYSTEM:Curse}}已超过 9 点时不能使用。",
			trivia: "雕像里的人是失去头部的{{BOSS:Lich}}"
		}
	},
	Junk: {
		id: 11,
		name: "Junk",
		icon: "shrine/Junk_Shrine.png",
		locale: {
			name: "垃圾",
			tips: "1 个{{ITEM:Junk}}换 1 个{{PICKUP:Armor}}。"
		}
	},
	Peace: {
		id: 12,
		name: "Peace",
		icon: "shrine/Peace_Shrine.png",
		locale: {
			name: "和平",
			tips: "失去当前使用的枪械，恢复 1 个红心{{PICKUP:Heart}}。\r\n{{GUNGEONEER:The Robot}}没有{{SYSTEM:Heart Container}}不能回血。\r\n无限弹药的枪无法触发。\r\n{{GAME_MODE:Blessing Mode}}下，只要不是满血状态或换到无限弹药的枪，可以不断触发。"
		}
	},
	"Y.V.": {
		id: 13,
		name: "Y.V.",
		icon: "shrine/YV_Shrine.png",
		locale: {
			tips: "首次使用花费 10 {{PICKUP:Shell}}，每次开枪有 3.7% 几率迅速追加 2-4 次射击（不消耗弹药）。\r\n继续使用雕像，每次花费 +10 {{PICKUP:Shell}}，几率 +3.7%。",
			notes:
				'首次使用花费 10 {{PICKUP:Shell}}，每次射击有 3.7% 几率迅速追加 2-4 次射击（不消耗弹药）。\r\n继续使用雕像，每次花费 +10 {{PICKUP:Shell}}，几率 +3.7%。\r\n[["~使用次数","~触发几率","~当次花费{{PICKUP:Shell}}","~总花费{{PICKUP:Shell}}"],["~1","3.7%","10","10"],["~2","7.4%","20","30"],["~3","11.1%","30","60"],["~4","14.8%","40","100"],["~5","18.5%","50","150"],["~6","22.2%","60","210"],["~7","25.9%","70","280"],["~8","29.6%","80","360"],["~9","33.3%","90","450"],["~10","37.0%","100","550"],["~27","99.9%","270","3780"]]\r\n通常会使用 4 次（100{{PICKUP:Shell}}），有 15 % 触发几率。钱比较多的话可以考虑使用 7 次（280{{PICKUP:Shell}}），有 1/4 的触发几率，性价比不错。\r\n使用 27 次后，每次射击都能触发效果，但总花费需要 3780{{PICKUP:Shell}}，一般情况下很难获得这么多金钱，需要有{{SYSTEM:Curse}}来增加金钱掉落，以及其它获得金钱的途径，如{{ITEM:Gold Junk}}{{ITEM:Briefcase of Cash}}{{ITEM:Loot Bag}}{{ITEM:Coin Crown}}{{SYNERGY:King Bomber}}，{{GAME_MODE:Challenge Mode}}下可以利用[(~~challenge/Icon_blobulin_rancher.png)]（没有打中敌人的子弹都会变成{{ENEMY:Blobulin}}）+[(~~challenge/Icon_dont_blink.png)]（视野外的敌人会变成{{SYSTEM:Jammed Enemies}}）的挑战条件来刷钱。',
			trivia:
				"引用自《废土之王（Nuclear Throne）》的角色{Y.V.（Yung Venuz）}[(~~shrine/Y_V_Yung_Venuz.gif)]，它的技能{Pop Pop}效果为 1 次射击打出 2 倍子弹（升级后是 4 倍）。\r\n通过支付{{PICKUP:Shell}}来获得效果、以及雕像的形象是 Y.V. 站在一堆纸币上，引用自该角色很喜欢钱并且超级有钱。\r\n《废土之王》中该角色的配音是《挺进地牢》的作曲家{Doseone}。"
		}
	},
	Beholster: {
		id: 14,
		name: "Beholster",
		icon: "shrine/Beholster_Shrine.png",
		locale: {
			name: "嗜枪怪",
			tips: "献祭{{BOSS:Beholster}}使用的 6 把枪（可分多局游戏给）。\r\n集齐后，{{SHRINE:Beholster}}会把 6 把枪还给你，并获得{{SYNERGY:Behold!}}效果。",
			notes:
				"献祭{{BOSS:Beholster}}使用的 6 把枪（可分多局游戏给）：\r\n<g>{{GUN:Com4nd0}}{{GUN:M1911}}{{GUN:Void Marshal}}{{GUN:Machine Pistol}}{{GUN:Eye of the Beholster}}{{GUN:Trank Gun}}</g>\r\n集齐后，{{SHRINE:Beholster}}会把 6 把枪还给你，并获得{{SYNERGY:Behold!}}效果。"
		}
	}
};
