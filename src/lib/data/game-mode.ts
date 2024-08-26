export default {
    Beastmode: {
        name: "Beastmode",
        locale: {
            name: "野兽模式",
            tips: "通过{系统菜单>选项>野兽模式}开启。\r\n启用野兽模式进行游戏，可以获得{Beast Master}成就，并解锁{{GUN:Bait Launcher}}。\r\n该选项在游戏中没有任何实际效果，只是调侃某些游戏把困难难度命名为“野兽模式”。"
        }
    },
    "Curse Mode": {
        name: "Curse Mode",
        locale: {
            name: "诅咒模式",
            tips: "角色{{SYSTEM:Kill The Past}}后，解锁该角色的{诅咒模式}。\r\n进入{{ROOM:Gungeon}}，如果和第一关第一个房间的{{SHRINE:Hero}}对话，会直接把{{SYSTEM:Curse}}设置为 9，让地牢之旅更加刺激。",
            notes: "角色{{SYSTEM:Kill The Past}}后，解锁该角色的{诅咒模式}。\r\n进入{{ROOM:Gungeon}}，如果和第一关第一个房间的{{SHRINE:Hero}}对话，会直接把{{SYSTEM:Curse}}设置为 9，让地牢之旅更加刺激。"
        }
    },
    "Blessing Mode": {
        name: "Blessing Mode",
        locale: {
            name: "祝福模式",
            tips: "和{{NPC:Sorceress}}对话，缴纳 6{{PICKUP:Hegemony Credit}}获得一个((祝福))后进入{{ROOM:Gungeon}}。\r\n死亡、{回到裂隙}、{快速重新开始}都会结束祝福效果。\r\n祝福模式下，玩家只能拥有一把枪，造成一定量的伤害、用完弹药、或者拾取新枪，都会触发换枪效果，让所持枪随机变成其它枪。\r\nBOSS不会掉落{{PICKUP:Hegemony Credit}}。\r\n{祝福模式}下击败{{BOSS:High Dragun}}会解锁{{GUN:Gunther}}。",
            notes: "和{{NPC:Sorceress}}对话，缴纳 6{{PICKUP:Hegemony Credit}}获得一个((祝福))后进入地牢。\r\n死亡、{回到裂隙}、{快速重新开始}都会结束祝福效果。\r\n在祝福模式下，造成一定量的伤害、或用完弹药后，玩家的枪会随机变化成其它枪（角色的初始枪也受此效果影响）。\r\n玩家只能拥有一把枪，拾取新枪时，只是触发换枪效果，让所持枪随机变成其它枪。\r\nBOSS不会掉落{{PICKUP:Hegemony Credit}}。\r\n{祝福模式}下击败{{BOSS:High Dragun}}会解锁{{GUN:Gunther}}。\r\n\r\n- 如果带着((祝福))状态进入{{CHAMBER:Hall of Knowledge}}，因为手里没枪，开箱捡枪时，无法触发换枪，导致卡关。\r\n- {{SHRINE:Peace}}可以无限使用。\r\n- {{GUN:Dueling Laser}}不会像主动道具那样充能，而是变成 7 秒后自动充能。\r\n- ((祝福))状态下，裂隙中{{NPC:Tinker}}的电梯不能使用。\r\n- {{SYSTEM:Muncher}}和{{SYSTEM:Evil Muncher}}不能使用。\r\n- ((祝福))效果导致的换枪，不会中断{{ITEM:Metronome}}的效果。\r\n- 进入{BOSS房}会立刻触发换枪。\r\n- {激光}类武器会比其它类型的武器更快触发换枪，有时只是射击几秒钟。\r\n- {{GUN:Directional Pad}}子弹用光后依然会生成一个{{SYSTEM:Chest}}。\r\n- {{GUN:AKEY-47}}依然可以开锁。"
        }
    },
    "Turbo Mode": {
        name: "Turbo Mode",
        locale: {
            name: "加速模式",
            tips: "和{{NPC:Tonic}}对话可以开启{加速模式}，游戏速度加快\r\n可以和{系统菜单 > 选项 > 游戏 > 非战斗模式下速度加快}效果叠加，跑得飞快。\r\n在角色的过去任务关卡中无效。\r\n开启{加速模式}后，地图的右上角会出现{{NPC:Tonic}}的头像。",
            notes: "和{{NPC:Tonic}}对话可以开启{加速模式}，游戏速度加快\r\n可以和{系统菜单 > 选项 > 游戏 > 非战斗模式下速度加快}效果叠加，跑得飞快。\r\n在角色的过去任务关卡中无效。\r\n开启{加速模式}后，地图的右上角会出现{{NPC:Tonic}}的头像。"
        }
    },
    "Challenge Mode": {
        name: "Challenge Mode",
        locale: {
            name: "挑战模式",
            tips: "和{{NPC:Daisuke}}对话，缴纳 6{{PICKUP:Hegemony Credit}}后进入{{ROOM:Gungeon}}。\r\n挑战模式下，每进入一个房间，都会随机附加1~3个挑战条件，界面右侧会显示挑战条件的图标。\r\n通关{挑战模式}解锁{{ITEM:Chaos Bullets}}和{双倍挑战模式}。",
            notes: '和{{NPC:Daisuke}}对话，缴纳 6{{PICKUP:Hegemony Credit}}后进入地牢。\r\n挑战模式下，每进入一个房间，都会随机附加1~3个挑战条件，界面右侧会显示挑战条件的图标。\r\n{{CHAMBER:Hollow}}和{{CHAMBER:Forge}}的BOSS有特殊的挑战条件。\r\n{挑战模式}下击败{{BOSS:High Dragun}}会解锁{{ITEM:Chaos Bullets}}，并解锁{双倍挑战模式}，使每个房间的挑战条件数量翻倍（传说中的{真挑战模式}）。\r\n进行 30 次{挑战模式}后，该模式需要缴纳的{{PICKUP:Hegemony Credit}}{-1}，并自动解锁{{ITEM:Chaos Bullets}}（如果此时还未解锁的话）。\r\n\r\n<h3>挑战条件种类：</h3>\r\n<view class="large-icon">[["~图标","~说明"],["[(~challenge/Icon_adrenaline_rush.png)]","每滚动一次，游戏速度都会加快，直到清空当前房间"],["[(~challenge/Icon_blobulin_rancher.png)]","没有打中敌人的子弹都会变成{{ENEMY:Blobulin}}"],["[(~challenge/Icon_cursed_ceramics.png)]","整个房间随机生成{{SYSTEM:Cursed Pot}}"],["[(~challenge/Icon_dark_was_night.png)]","房间变黑，视野只有正前方的扇形范围，部分敌人在黑暗中会发光"],["[(~challenge/Icon_dont_blink.png)]","房间变黑，视野只有正前方的扇形范围，被看到的敌人都惊呆了（好吧就是((眩晕))），视野外的敌人会变成{诅咒怪}，对BOSS无效"],["[(~challenge/Icon_explosive_pyre.png)]","敌人死掉的时候会爆炸"],["[(~challenge/Icon_final_attack.png)]","敌人死掉的时候会向四周爆出子弹"],["[(~challenge/Icon_ghost_of_the_shell.png)]","被杀死的敌人有几率变成{{ENEMY:Hollowpoint}}"],["[(~challenge/Icon_gorguns_gaze.png)]","{{BOSS:The Gorgun}}的眼睛会定期出现在房间的随机位置，并发出((石化))波纹，玩家面朝波纹被扫中会进入((石化))状态（可移动，不能射击），可以通过滚动或者背对波纹来躲开"],["[(~challenge/Icon_gulls_revenge.png)]","定期在房间的随机位置落下{{BOSS:Gatling Gull}}的导弹"],["[(~challenge/Icon_gun_gueue.png)]","玩家不能主动换枪，弹夹用光、装弹、或者等待30秒后，会自动换成背包中的下一把枪"],["[(~challenge/Icon_hammer_time.png)]","房间出现一个{{ENEMY:Dead Blow}}"],["[(~challenge/Icon_high_stress.png)]","接下来 5 秒中受伤，会只剩下半颗心{{PICKUP:Half Heart}}"],["[(~challenge/Icon_last_bullet_standing.png)]","有一个敌人在其它敌人死光之前是无敌的"],["[(~challenge/Icon_long_live_the_king.png)]","在杀死带标记的敌人之前，其它敌人都是无敌的"],["[(~challenge/Icon_poison_pursuit.png)]","地上有一道毒液追赶玩家"],["[(~challenge/Icon_pot_shots.png)]","壶会朝玩家射击"],["[(~challenge/Icon_rats_revenge.png)]","在房间随机位置生成火海"],["[(~challenge/Icon_shockwave.png)]","定期出现电流连接的子弹，并向外扩大，碰到子弹或电流都会受到伤害"],["[(~challenge/Icon_thermal_clips.png)]","空弹夹状态装弹，玩家的脚下会生成火海"],["[(~challenge/Icon_unfriendly_fire.png)]","玩家的子弹打到墙上会反弹并变成敌人的子弹，会对玩家造成伤害。\\n双人模式时，子弹就算在反弹前也会对队友造成伤害。"],["[(~challenge/Icon_zone_control.png)]","房间内生成几个补给箱，玩家只有站着补给箱圈定的范围内才能射击，站在圈内一定时间后，所有补给箱消失，玩家可以重新正常射击"]]</view>\r\n\r\n<h3>BOSS特有条件：</h3>\r\n<view class="large-icon">[["~BOSS","~说明"],["{{BOSS:High Priest}}","BOSS房里面的蜡烛被摧毁时会变成火焰，这些火焰会持续到BOSS被击败"],["{{BOSS:Kill Pillars}}","地上会随机出现矩形毒液"],["{{BOSS:Wallmonger}}","BOSS上面有2个无敌的{{ENEMY:Sniper Shell}}定期向玩家射击"],["{{BOSS:High Dragun}}","所有攻击都更变态：\\n- 许多子弹变快\\n- 火子弹打到墙壁会反弹\\n- 射出更多的反弹子弹\\n- 发出 2 枚导弹而不是 1 颗\\n- 发出 9 个骷髅头而不是 4 个\\n- 第二阶段弹幕中的空白圈变小"]]</view>',
            trivia: "[(~~challenge/Icon_blobulin_rancher.png)]引用自游戏《史莱姆牧场（Slime Rancher）》\r\n[(~~challenge/Icon_cursed_ceramics.png)]引用自《黑暗之魂II（Dark Souls II）》的诅咒坛\r\n[(~~challenge/Icon_explosive_pyre.png)]引用自游戏《命运（Destiny）》\r\n[(~~challenge/Icon_ghost_of_the_shell.png)]引用自动漫《攻壳机动队（Ghost in the Shell）》\r\n[(~~challenge/Icon_high_stress.png)]的效果和图标引用自游戏《暗黑地牢（Darkest Dungeon）》\r\n[(~~challenge/Icon_long_live_the_king.png)]引用自游戏《王权（Reigns）》\r\n{{BOSS:Kill Pillars}}的特有条件引用自游戏《Really Bad Chess》\r\n[(~~challenge/Icon_dont_blink.png)]引用自BBC剧集《神秘博士（Doctor Who）》的一个片段\r\n[(~~challenge/Icon_thermal_clips.png)]引用自《质量效应（Mass Effect）》系列"
        }
    },
    "Boss Rush": {
        name: "Boss Rush",
        locale: {
            name: "BOSS模式",
            tips: "只打BOSS的模式。\r\n修理好{{CHAMBER:Forge}}的{{ROOM:Shortcuts}}后解锁，V号电梯继续右转会有个画着骷髅头的电梯，进去前{{NPC:Tinker}}会向你要 3{{PICKUP:Hegemony Credit}}，通过骷髅头电梯进入{{ROOM:Gungeon}}。\r\nBOSS模式下，每个关卡都只有（几个）BOSS房，BOSS没有{每秒伤害上限}，不掉落{{PICKUP:Hegemony Credit}}，其它BOSS奖励和普通模式相同。",
            notes: "只打BOSS的模式。\r\n修理好{{CHAMBER:Forge}}的{{ROOM:Shortcuts}}后解锁，V号电梯继续右转会有个画着骷髅头的电梯，进去前{{NPC:Tinker}}会向你要 3{{PICKUP:Hegemony Credit}}，通过骷髅头电梯进入{{ROOM:Gungeon}}。\r\nBOSS模式下，每个关卡都只有（几个）BOSS房，BOSS没有{每秒伤害上限}，不掉落{{PICKUP:Hegemony Credit}}，其它BOSS奖励和普通模式相同。\r\n\r\n<h3>各关卡需要打的BOSS（顺序固定）</h3>\r\n- 第一层：{{BOSS:Gatling Gull}}{{BOSS:Trigger Twins}}{{BOSS:Bullet King}}\r\n- 第二层：{{BOSS:Beholster}}{{BOSS:Ammoconda}}{{BOSS:The Gorgun}}\r\n- 第三层：{{BOSS:Cannonbalrog}}{{BOSS:Treadnaught}}{{BOSS:Mine Flayer}}{{BOSS:Door Lord}}\r\n- 第四层：{{BOSS:Wallmonger}}{{BOSS:High Priest}}{{BOSS:Kill Pillars}}\r\n- 第五层：{{BOSS:High Dragun}}\r\n\r\n<h3>提示</h3>\r\n- 每层只能获得一个{{SYSTEM:Master Round}}（比如第一层你只能获得一个{{ITEM:Master Round I}}，即使你 3 个BOSS都无伤）\r\n- BOSS模式下也可能会出现{{ENEMY:Wall Mimic}}{{ENEMY:Keybullet Kin}}{{ENEMY:Chance Kin}}\r\n- BOSS模式下如果出现{{ENEMY:Lord of the Jammed}}，在打败{{BOSS:High Dragun}}后的胜利画面，因为游戏没有暂停，你可能会被杀死，不过不计入死亡次数\r\n- 缴纳BOSS模式所需的 3{{PICKUP:Hegemony Credit}}后退出游戏，再次进入游戏需要重新缴纳"
        }
    },
    "King's Game": {
        name: "King's Game",
        locale: {
            name: "神枪王考验",
            tips: "如果在{{ROOM:Gungeon}}中遇到{{NPC:Gunsling King and Manservantes}}，可以用{{PICKUP:Shell}}和他们打赌，如果能在他们的限制条件下清空下个房间（地图上会有特殊标记），他们会返还{{PICKUP:Shell}}，并给你一个枪或道具作为奖励。如果失败则失去作为赌注的{{PICKUP:Shell}}。\r\n完成 10 次{神枪王考验}会解锁{{ITEM:Owl}}。",
            notes: "如果在{{ROOM:Gungeon}}中遇到{{NPC:Gunsling King and Manservantes}}，可以用{{PICKUP:Shell}}和他们打赌，如果能在他们的限制条件下清空下个房间（地图上会有特殊标记），他们会返还{{PICKUP:Shell}}，并给你一个枪或道具作为奖励。如果失败则失去作为赌注的{{PICKUP:Shell}}。\r\n完成 10 次{神枪王考验}会解锁{{ITEM:Owl}}。\r\n限制条件有下面 4 种可能：\r\n- 无伤\r\n- 不能翻滚（也不能通过{{ITEM:Bloodied Scarf}}瞬移）\r\n- 只能使用他们提供的枪（在以下枪中随机，挑战中不可丢弃）<g>{{GUN:Klobbe}}{{GUN:Pea Shooter}}{{GUN:Derringer}}{{GUN:Nail Gun}}{{GUN:Casey}}</g>\r\n- {{GAME_MODE:Challenge Mode}}的条件（解救{{NPC:Daisuke}}后才有可能出现这个限制条件）\r\n\r\n<h3>提示</h3>\r\n- 和{{NPC:Gunsling King}}对话开启打赌，胜利后和{{NPC:Manservantes}}对话领取奖励\r\n- 如果先把下个房间清空后，再回来和他们打赌，会直接判断为失败\r\n- 如果他们给的枪是{{GUN:Casey}}，完成挑战后他们收回了{{GUN:Casey}}，但{{SYSTEM:Curse}}不会减掉\r\n- 如果下个房间没有敌人，地图上不会有标记，挑战自动完成。"
        }
    },
    "Winchester's Game": {
        name: "Winchester's Game",
        locale: {
            name: "打靶游戏",
            tips: "如果在{{ROOM:Gungeon}}中遇到{{NPC:Winchester}}，可以缴纳{{PICKUP:Shell}}参加他的打靶小游戏，他会给你一把打靶游戏的专用枪{{GUN:Prize Pistol}}，4个目标，4次射击机会，根据射中的次数奖励相应{{SYSTEM:Quality}}的{{SYSTEM:Chest}}。\r\n完成 3 次{全部射中}会解锁{{ITEM:Seven-Leaf Clover}}（灰常好的道具）。",
            notes: "如果在{{ROOM:Gungeon}}中遇到{{NPC:Winchester}}，可以缴纳{{PICKUP:Shell}}参加他的打靶小游戏，他会给你一把打靶游戏的专用枪{{GUN:Prize Pistol}}，4个目标，4次射击机会，根据射中的次数奖励相应{{SYSTEM:Quality}}的{{SYSTEM:Chest}}：\r\n- 射中 1 次：{{CHEST:Brown Chest}}或{{CHEST:Blue Chest}}\r\n- 射中 2 次：{{CHEST:Blue Chest}}或{{CHEST:Green Chest}}\r\n- 射中 3 次：{{CHEST:Green Chest}}或{{CHEST:Red Chest}}\r\n- 全部射中：{{CHEST:Red Chest}}或{{CHEST:Black Chest}}\r\n完成 3 次{全部射中}会解锁{{ITEM:Seven-Leaf Clover}}（灰常好的道具）。\r\n\r\n<h3>提示</h3>\r\n- 使用下面的道具来靠近射击目标不会被判定为作弊：\r\n<g>{{ITEM:Grappling Hook}}{{ITEM:Bloodied Scarf}}{{ITEM:Wax Wings}}{{ITEM:Ring of Ethereal Form}}{{ITEM:Partially-Eaten Cheese}}{{ITEM:Jetpack}}{{ITEM:Cat Bullet King Throne}}</g>\r\n- 使用其它枪射击会被判定为作弊，不会得到任何奖励\r\n- 切换成其它枪再切回{{GUN:Prize Pistol}}，会只剩下一次射击机会\r\n- 所有子弹被动效果在打靶游戏中依然会生效：\r\n<g>{{ITEM:Hip Holster}}{{ITEM:Backup Gun}}{{ITEM:Scattershot}}{{ITEM:Flak Bullets}}{{ITEM:Remote Bullets}}{{ITEM:Fat Bullets}}{{ITEM:Heavy Bullets}}{{ITEM:Rocket-Powered Bullets}}{{ITEM:Ghost Bullets}}{{ITEM:Bouncy Bullets}}{{ITEM:Angry Bullets}}{{ITEM:Stout Bullets}}{{ITEM:Helix Bullets}}{{ITEM:Eyepatch}}{{ITEM:Orbital Bullets}}</g>\r\n- {{ITEM:Backup Gun}}和{{ITEM:Helix Bullets}}可能会让射击路线变得难以预测，建议在和{{NPC:Winchester}}对话前先丢出来\r\n- {{ITEM:Orbital Bullets}}会导致子弹无法反弹，丢出来丢出来\r\n- {{ITEM:Magazine Rack}}对{{GUN:Prize Pistol}}有用，会变成无限弹药\r\n- {{ITEM:Duct Tape}}可以用于{{GUN:Prize Pistol}}，射击次数会变成绑定枪的子弹容量\r\n- {{ITEM:Ancient Hero's Bandana}}的效果对{{GUN:Prize Pistol}}无效\r\n- {{ITEM:Gunboots}}会摧毁射击目标，但不计算射中次数\r\n- 奖励的{{SYSTEM:Chest}}不会变成{{ENEMY:Mimic}}，即使你带着{{ITEM:Mimic Tooth Necklace}}\r\n- 和{{PAGE:The Breach}}中的{{NPC:Winchester}}对话，一开始他很冷淡，随着在他的打靶游戏中{全部射中}的次数越多，他的态度会变得越来越缓和。\r\n- 双人模式下，死亡的玩家可以用尸体卡住打靶游戏中移动的障碍方块，让它们无法移动"
        }
    },
    "Hunting Quests": {
        name: "Hunting Quests",
        locale: {
            name: "狩猎任务",
            tips: "在{{NPC:Frifle and the Grey Mauser}}处领取狩猎任务，完成后获得 5 {{PICKUP:Hegemony Credit}}和解锁相应的枪或道具。",
            notes: '在{{NPC:Frifle and the Grey Mauser}}处领取狩猎任务，完成后获得 5 {{PICKUP:Hegemony Credit}}和解锁相应的枪或道具。\r\n狩猎任务列表：\r\n[["~目标","~数量","~解锁","~提示"],["~子弹怪","200","{{GUN:Sling}}","包括:\\n{{ENEMY:Bullet Kin}}{{ENEMY:Veteran Bullet Kin}}{{ENEMY:Bandana Bullet Kin}}{{ENEMY:Tanker}}{{ENEMY:Minelet}}{{ENEMY:Cardinal}}{{ENEMY:Shroomer}}{{ENEMY:Ashen Bullet Kin}}{{ENEMY:Mutant Bullet Kin}}{{ENEMY:Fallen Bullet Kin}}{{ENEMY:Red-Caped Bullet Kin}}"],["~分裂怪","60","{{GUN:Elephant Gun}}","包括：\\n{{ENEMY:Blobulon}}{{ENEMY:Poisbulon}}{{ENEMY:Blizzbulon}}{{ENEMY:Leadbulon}}{{ENEMY:Poopulon}}{{ENEMY:Bloodbulon}}\\n\\n不包括：\\n{{ENEMY:Blobuloid}}{{ENEMY:Blobulin}}{{ENEMY:Poisbuloid}}{{ENEMY:Poisbulin}}"],["~幽灵","40","{{GUN:Unicorn Horn}}","{{ENEMY:Hollowpoint}}\\n\\n{{CHAMBER:Hollow}}较多"],["~巫师","40","{{GUN:Bundle of Wands}}","包括：\\n{{ENEMY:Gunjurer}}{{ENEMY:Apprentice Gunjurer}}{{ENEMY:High Gunjurer}}{{ENEMY:Lore Gunjurer}}\\n\\n{{CHAMBER:Hollow}}较多"],["~嗜枪怪","3","{{ITEM:Pig}}","{{BOSS:Beholster}}\\n\\n可以通过电梯直达{{CHAMBER:Gungeon Proper}}，或者在{{GAME_MODE:Boss Rush}}中击杀"],["~拟身怪","3","{{ITEM:Mimic Tooth Necklace}}","包括：\\n{{ENEMY:Mimic}}{{BOSS:Door Lord}}\\n\\n养成开宝箱前先打一枪的习惯\\n{{SYSTEM:Curse}}越高，宝箱变成{{ENEMY:Mimic}}的概率越高\\n不要带着{{ITEM:Ring of Mimic Friendship}}\\n可以使用{{GUNGEONEER:The Hunter}}，自带的小狗{{ITEM:Dog}}遇到伪装成宝箱的{{ENEMY:Mimic}}会叫\\n墙壁和奖励底座伪装的怪也算"],["~枪械狂","25","{{ITEM:Gunknight Helmet}}","包括：\\n{{ENEMY:Gun Nut}}{{ENEMY:Spectral Gun Nut}}\\n\\n{{CHAMBER:Forge}}较多"],["~鲨鱼","35","{{GUN:Compressed Air Tank}}","包括：\\n{{ENEMY:Bullet Shark}}{{ENEMY:Great Bullet Shark}}\\n\\n{{CHAMBER:Gungeon Proper}}较多"],["~铅处女","25","{{GUN:Rattler}}","{{ENEMY:Lead Maiden}}\\n\\n{{CHAMBER:Gungeon Proper}}较多"],["~青蛙","30","{{GUN:Snakemaker}}","包括：\\n{{ENEMY:Gunzookie}}{{ENEMY:Gunzockie}}\\n\\n出现在{{CHAMBER:Black Powder Mine}}和{{CHAMBER:Forge}}"],["~图腾","20","{{GUN:Cat Claw}}","{{ENEMY:Shambling Round}}\\n\\n主要出现在{{CHAMBER:Black Powder Mine}}"],["~骷髅","20","{{GUN:Shellegun}}","{{ENEMY:Shelleton}}\\n\\n主要出现在{{CHAMBER:Hollow}}\\n当房间内还有其它小怪时，{{ENEMY:Ammomancer}}会持续召唤{{ENEMY:Shelleton}}（最多 3 个）"],["~蘑菇","30","{{GUN:Makeshift Cannon}}","{{ENEMY:Shroomer}}\\n\\n{{CHAMBER:Oubliette}}和{{CHAMBER:Forge}}较多"],["~石像","3","{{GUN:Gunzheng}}","{{BOSS:Kill Pillars}}\\n\\n可以通过电梯直达{{CHAMBER:Hollow}}，或者在{{GAME_MODE:Boss Rush}}中击杀"],["~龙","5","{{GUN:Grey Mauser}}","{{BOSS:High Dragun}}\\n\\n可以通过电梯直达{{CHAMBER:Forge}}，或者在{{GAME_MODE:Boss Rush}}中击杀"],["~随机","","5 {{PICKUP:Hegemony Credit}}",""]]'
        }
    },
    "Rainbow Mode": {
        name: "Rainbow Mode",
        locale: {
            name: "彩虹模式",
            tips: "和{{NPC:Bowler}}对话可以开启{彩虹模式}。\r\n\r\n{彩虹模式}下，获得枪和道具的途径只有关卡开始给的{{CHEST:Rainbow Chest}}，其它途径产生的枪和道具会被{{NPC:Bowler}}取走。\r\n\r\n每个关卡开始都会有一个{{CHEST:Rainbow Chest}}，可以开出 8 个各种{{SYSTEM:Quality}}的枪和道具，但只能选择其中一个，选择后其它 7 个会消失。",
            notes: '和{{NPC:Bowler}}对话可以开启{彩虹模式}。\r\n\r\n{彩虹模式}下，获得枪和道具的途径只有关卡开始给的{{CHEST:Rainbow Chest}}，其它途径产生的枪和道具会被{{NPC:Bowler}}取走，并留下的纸条告诉你东西他拿走了。\r\n\r\n每个关卡开始都会有一个{{CHEST:Rainbow Chest}}，可以开出 8 个各种{{SYSTEM:Quality}}的枪和道具，但只能选择其中一个，选择后其它 7 个会消失。\r\n这个彩虹宝箱区别于普通的彩虹宝箱，各品质物品概率大约为：\r\n[["{{QUALITY:S}}","{{QUALITY:A}}","{{QUALITY:B}}","{{QUALITY:C}}","{{QUALITY:D}}"],["12%","41%","23%","12%","12%"]]\r\n至少会有 1 个{{QUALITY:S}}和 1 个{{QUALITY:A}}。\r\n\r\n商店和商人不再出售枪和道具。\r\nBOSS 奖励除了{{SYSTEM:Master Round}}，其它物品会被{{NPC:Bowler}}拿走。\r\n{{GAME_MODE:King\'s Game}}和{{NPC:The Lost Adventurer}}给的东西会被{{NPC:Bowler}}拿走。\r\n\r\n除了{{CHEST:Rainbow Chest}}，其它{{SYSTEM:Chest}}都会有{{NPC:Bowler}}会坐在上面：\r\n- 包括{{GAME_MODE:Winchester\'s Game}}奖励的宝箱、{{CHEST:Truth Chest}}、{{CHEST:Rat Chest}}、从{{NPC:Synergrace}}购买的{{CHEST:Synergy Chest}}。\r\n- 尝试打开上锁的宝箱，依然会消耗{{PICKUP:Key}}，然后宝箱被破坏，枪和道具会被{{NPC:Bowler}}拿走。\r\n- 摧毁宝箱，{{SYSTEM:Pickup}}、{{ITEM:Junk}}、{{ITEM:Gold Junk}}仍会正常掉落，但不会掉落{{ITEM:Ser Junkan}}和其它枪和道具。\r\n- 如果宝箱是{{ENEMY:Mimic}}，击杀后掉落的枪和道具会被{{NPC:Bowler}}拿走。\r\n\r\n雕像奖励的枪或道具会被{{NPC:Bowler}}拿走，但代价（如献祭{{SYSTEM:Heart Container}}）仍会正常支付。\r\n掉落的宝箱会被替换成{{NPC:Bowler}}的纸条。\r\n\r\n<h3>例外情况</h3>\r\n- {{SYSTEM:Master Round}}会正常掉落。\r\n- 任务物品不会被{{NPC:Bowler}}拿走，如{{ITEM:Busted Television}}{{ITEM:Obsidian Shell Casing}}。\r\n- {{ITEM:Junk}}、{{ITEM:Lies}}、{{ITEM:Gold Junk}}不会被{{NPC:Bowler}}拿走。\r\n- {{BOSS:Resourceful Rat}}拳击阶段仍会正常掉落物品。\r\n- {{SYSTEM:Muncher}}{{SYSTEM:Evil Muncher}}吐出的枪、{{NPC:Witches}}交换的枪不会被{{NPC:Bowler}}拿走。\r\n- 正常游戏中出现的{{CHEST:Rainbow Chest}}（不是关卡开始时给的那个）可以正常打开并取走所有 8 个物品\r\n- 使用{{ROOM:Shortcuts}}除了关卡开始给的{{CHEST:Rainbow Chest}}，提供选择的 3 把枪仍会保留。\r\n- 使用{{ITEM:Spice}}后，小怪和小BOSS仍有可能正常掉落{{ITEM:Spice}}，商店仍有可能出售。\r\n- {{GUN:Knight\'s Gun}}挖出的物品不会被{{NPC:Bowler}}拿走。\r\n- 清空房间后掉落的物品会正常掉落，如{{ITEM:Glass Guon Stone}}。\r\n\r\n{{CHEST:Rainbow Chest}}开出的物品{{SYSTEM:Quality}}不受{Magnificence}值影响，所以{彩虹模式}下你可以更容易获得更多{{QUALITY:S}}和{{QUALITY:A}}品质的物品（包括{{ITEM:Clone}}！）。\r\n\r\n每关开始给的{{CHEST:Rainbow Chest}}不会开出：\r\n<g>{{ITEM:Gungeon Blueprint}}{{ITEM:Seven-Leaf Clover}}{{ITEM:Shelleton Key}}{{ITEM:Chest Teleporter}}{{ITEM:Old Knight\'s Flask}}{{ITEM:Mimic Tooth Necklace}}{{ITEM:Gun Soul}}{{ITEM:Ballistic Boots}}{{ITEM:Ring of Chest Friendship}}{{ITEM:Lament Configurum}}{{ITEM:Book of Chest Anatomy}}{{ITEM:Medkit}}{{ITEM:Chaff Grenade}}{{ITEM:Cluster Mine}}{{ITEM:Iron Coin}}{{ITEM:Escape Rope}}</g>\r\n\r\n{{CHEST:Glitch Chest}}可以正常打开并进入{故障关卡}，但不建议打开，因为 BOSS 奖励的 8 个枪和道具全部都会被{{NPC:Bowler}}拿走，只能拾取{{SYSTEM:Pickup}}。\r\n\r\n{{SYSTEM:co-op}}中，如果队友死亡，普通宝箱仍会变成{{CHEST:Revival Chest}}，打开可以复活队友。\r\n\r\n{彩虹模式}下，有概率碰到{{SYSTEM:Burning Chest}}，{{NPC:Bowler}}站在上面赞美太阳{\\o/}。'
        }
    }
};
