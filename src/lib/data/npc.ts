export default {
    Bello: {
        id: 1,
        name: "Bello",
        icon: "npc/Shopkeeper.png",
        locale: {
            name: "地牢商店",
            tips: "在{{ROOM:Gungeon}}的1~4层开店，卖各种补给、枪、道具和一些任务道具",
            notes: '在{{ROOM:Gungeon}}的1~4层开店，卖各种补给、枪、道具和一些任务道具。\r\n柜台最左边的 3 个位置卖{{SYSTEM:Pickup}}，其它位置可能是枪、道具或{{SYSTEM:Pickup}}。\r\n商店里还可能多一张桌子卖{{PICKUP:Blank}}{{ITEM:Glass Guon Stone}}{{ITEM:Map}}，概率如下：\r\n[["~{{PICKUP:Blank}}","~{{ITEM:Glass Guon Stone}}","~{{ITEM:Map}}","~空着"],["40.82%","8.16%","2.04%","48.98%"]]\r\n商店里也可能出现其它商人NPC、{{SYSTEM:Muncher}}、{{NPC:Sell Creep}}。\r\n如果玩家还没吃过{{ITEM:Spice}}，商店可能会额外售卖。\r\n<h3>特殊柜台</h3>\r\n如果{{ITEM:Prime Primer}}还未护送到{{CHAMBER:Forge}}交给{{NPC:Blacksmith}}，{{CHAMBER:Gungeon Proper}}的商店总是有一个独立的柜台售卖，价格 110{{PICKUP:Shell}}。\r\n解锁{{ITEM:The Bullet That Can Kill The Past}}后，{{CHAMBER:Gungeon Proper}}原来售卖{{ITEM:Prime Primer}}的柜台会变成{{ITEM:Gnawed Key}}，第一次购买需要 1000{{PICKUP:Shell}}（可以分多局游戏支付），买过之后，价格会变成 115{{PICKUP:Shell}}\r\n<h3>收获日2三件套</h3>\r\n<g>{{ITEM:Clown Mask}}{{ITEM:Drill}}{{ITEM:Loot Bag}}</g>未解锁前有概率替换一个商品出现在商店，卖 <span style="color:red;font-weight:bold;">9999</span>{{PICKUP:Shell}}：在解锁{{ITEM:Coin Crown}}前，有 5% 概率，解锁{{ITEM:Coin Crown}}后 100% 概率。\r\n对于这个价格，不是针对谁，在座的各位都是穷逼。可以通过{{SYSTEM:Steal}}来获得，或者开枪激怒{{NPC:Bello}}让他关店跑路，这几个会留下来。\r\n解锁后加入正常道具池。\r\n<h3>别在商店里开枪</h3>\r\n如果在商店里开枪，会惹怒{{NPC:Bello}}：\r\n- 第一次开枪，他会给你警告\r\n- 第二次开枪，他会很生气，把商品价格翻倍\r\n- 第三次开枪，他会暴怒并朝你开枪，然后收拾商品跑路，后面的关卡也不会再开张\r\n如果玩家被{{NPC:Bello}}杀死，结算界面的击杀者显示为“正义”。如果没死，会被传送到别的房间。\r\n如果你带个{{ENEMY:Lord of the Jammed}}进商店，{{NPC:Bello}}会直接关店跑路。\r\n<h3>商品价格</h3>\r\n[["~商品","~价格{{PICKUP:Shell}}"],["~{{QUALITY:S}}","120"],["~{{QUALITY:A}}","90"],["~{{QUALITY:B}}","65"],["~{{QUALITY:C}}","45"],["~{{QUALITY:D}}","35"],["~{{PICKUP:Ammo}}{{PICKUP:Heart}}","30"],["~{{PICKUP:Armor}}{{PICKUP:Key}}","25"],["~{{PICKUP:Blank}}{{PICKUP:Half Heart}}","20"],["~{{ITEM:Glass Guon Stone}}","10"]]\r\n商品会随着关卡进度涨价：\r\n[["~关卡","~通货膨胀"],["~1","x1"],["~2/隐藏1","x1.2"],["~3/隐藏2","x1.4"],["~4","x1.5"],["~5","x1.6"],["~6","x2"]]\r\n{{ITEM:Table Tech Money}}虽然是{{QUALITY:D}}级道具，但卖 50{{PICKUP:Shell}}（因为可以生钱？）\r\n带着某些枪或道具买东西会打折：\r\n<g>{{ITEM:Disarming Personality}}x0.85</g><g>{{ITEM:Iron Coin}}x0.8</g><g>{{GUN:Smiley\'s Revolver}}x0.85</g>',
            trivia: "{{NPC:Bello}}的猫叫{Ocelot}，他说 Ocelot 跟他来到地牢是因为 Ocelot 也有她自己的恶魔要战斗。"
        }
    },
    "Ox and Cadence": {
        id: 2,
        name: "Ox and Cadence",
        icon: "npc/Ox_and_Cadence.png",
        locale: {
            name: "裂隙商店",
            tips: "在{{PAGE:The Breach}}左上角的房间开店卖各种枪和道具，用{{PICKUP:Hegemony Credit}}购买后即可解锁，解锁的枪和道具可能在{{ROOM:Gungeon}}中获得。",
            notes: '从{{CHAMBER:Gungeon Proper}}的牢房救出后会来到{{PAGE:The Breach}}左上角的房间开店卖各种枪和道具，用{{PICKUP:Hegemony Credit}}购买后即可解锁，解锁的枪和道具可能在{{ROOM:Gungeon}}中获得。\r\n\r\n<h3>运送手臂任务</h3>\r\n{{NPC:Ox}}被救出时左臂遗失，击败{{BOSS:High Dragun}}后，在{{CHAMBER:Forge}}{{NPC:Blacksmith}}的左边会出现{备用手臂}。\r\n拾取备用手臂后，关卡中会有一个随机的敌人会掉落<span style="color:red">红色气球</span>，可以把手臂带到上一层。\r\n[(~data/Enemywithballoon.jpg)]\r\n重新进入{{ROOM:Gungeon}}，可以在{{CHAMBER:Hollow}}中找到手臂和气球，继续往上运送，一层一层直到送回{{PAGE:The Breach}}，{{NPC:Ox}}收到后装上备用手臂，作为报答{{NPC:Cadence}}会给你解锁{{ITEM:Clone}}（游戏中最牛叉的道具之一）。\r\n如果已经修理了电梯，可以在{{PAGE:The Breach}}{{NPC:Tinker}}那坐电梯直接到手臂和气球所在的关卡来快速完成任务。甚至在{{GAME_MODE:Boss Rush}}中，如果出现{{ENEMY:Wall Mimic}}也可能实现运送手臂。\r\n\r\n<h3>售卖物品</h3>\r\n- 枪\r\n<g>{{GUN:Thompson Sub-Machinegun}}1{{PICKUP:Hegemony Credit}}</g><g>{{GUN:RPG}}5{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Gamma Ray}}2{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Hegemony Carbine}}3{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Freeze Ray}}7{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Mailbox}}5{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Siren}}?{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Origuni}}6{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Grasschopper}}8{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Flash Ray}}6{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Science Cannon}}6{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Ice Breaker}}8{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Tangler}}10{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Magic Lamp}}8{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Face Melter}}10{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Heroine}}13{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Mass Shotgun}}9{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Bullet Bore}}14{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Raiden Coil}}8{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Black Hole Gun}}20{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Yari Launcher}}25{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Railgun}}30{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Microtransaction Gun}}100{{PICKUP:Hegemony Credit}}</g>\r\n- 道具\r\n<g>{{ITEM:Rocket-Powered Bullets}}4{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Heart Bottle}}2{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Heart Locket}}4{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Hot Lead}}5{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Heart Lunchbox}}5{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Box}}8{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Fat Bullets}}6{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:+1 Bullets}}6{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Angry Bullets}}8{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Heart Purse}}4{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Eyepatch}}8{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Bloody Eye}}7{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Spice}}7{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Sunglasses}}10{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Singularity}}12{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Nanomachines}}10{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Portable Turret}}12{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Duct Tape}}10{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Space Friend}}25{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Broccoli}}25{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Platinum Bullets}}200{{PICKUP:Hegemony Credit}}</g>\r\n<h3>商品刷新</h3>\r\n商店里只有6个柜台，商品全部售出后，当玩家下次进入{{PAGE:The Breach}}（可以从{{ROOM:Gungeon}}出来，也可以从游戏主界面进入），会上架一批新的商品。',
            trivia: "{{NPC:Ox}}是{{NPC:Cadence}}的姐姐{{NPC:Blacksmith}}为了保护{{NPC:Cadence}}制造的，{{NPC:Ox}}的程序设定就是照顾好{{NPC:Cadence}}。\r\n\r\n{运送手臂任务}引用自《合金装备V 幻痛（Metal Gear Solid V: The Phantom Pain）》主角Venom Snake的机械臂梗。"
        }
    },
    Ox: {
        id: 3,
        name: "Ox",
        icon: "npc/Ox.png",
        locale: {
            tips: "见{{NPC:Ox and Cadence}}",
            notes: "见{{NPC:Ox and Cadence}}"
        },
        hidden: 1
    },
    Cadence: {
        id: 4,
        name: "Cadence",
        icon: "npc/Cadence.png",
        locale: {
            tips: "见{{NPC:Ox and Cadence}}",
            notes: "见{{NPC:Ox and Cadence}}"
        },
        hidden: 1
    },
    Drunkard: {
        id: 5,
        name: "Drunkard",
        icon: "npc/Drunkard.png",
        locale: {
            name: "醉汉",
            tips: "坐在{{PAGE:The Breach}}教学房间门口浪费人生的咸鱼，打败BOSS或者解救NPC后和他对话，他会跟你讲相关的故事。",
            trivia: "{{NPC:Drunkard}}以及他说话的语气引用自《黑暗之魂》里的垂头丧气的战士"
        }
    },
    Tinker: {
        id: 6,
        name: "Tinker",
        icon: "npc/Sherpa.png",
        locale: {
            name: "修理匠",
            tips: "修理和操作{{ROOM:Shortcuts}}",
            notes: "修理和操作{{ROOM:Shortcuts}}"
        }
    },
    "Frifle and the Grey Mauser": {
        id: 7,
        name: "Frifle and the Grey Mauser",
        icon: "npc/Frifle_and_the_Grey_Mauser.png",
        locale: {
            name: "猎人",
            tips: "解救后出现在{{PAGE:The Breach}}右下角，发布{{GAME_MODE:Hunting Quests}}，完成任务后可以获得 5 {{PICKUP:Hegemony Credit}}和解锁相应的枪或道具",
            trivia: "引用自{Fafhrd 和 Gray Mouser}（美国作家 Fritz Leiber 作品中的两个英雄），{Frifle}是一个双关语，包含术士（Fafhrd）和步枪（Rifle）之意，{Grey Mauser}也引用自Mauser（一个德国枪械制造商）。\r\n官方{{PAGE:Comic}}解释了 Frifle 和 Grey Mauser 为何进入地牢，他们因为一些意外，来到地牢的目的是想要抹掉过去。"
        }
    },
    Frifle: {
        id: 8,
        name: "Frifle",
        icon: "npc/Frifle.png",
        locale: {
            tips: "见{{NPC:Frifle and the Grey Mauser}}",
            notes: "见{{NPC:Frifle and the Grey Mauser}}"
        },
        hidden: 1
    },
    "Grey Mauser": {
        id: 9,
        name: "Grey Mauser",
        icon: "npc/Grey_Mauser.png",
        locale: {
            tips: "见{{NPC:Frifle and the Grey Mauser}}",
            notes: "见{{NPC:Frifle and the Grey Mauser}}"
        },
        hidden: 1
    },
    Winchester: {
        id: 10,
        name: "Winchester",
        icon: "npc/NPC_Winchester.png",
        locale: {
            name: "温彻斯特",
            tips: "解救后出现在{{PAGE:The Breach}}右边，偶尔出现在{{ROOM:Gungeon}}，遇到时可以缴纳{{PICKUP:Shell}}参加他的{{GAME_MODE:Winchester's Game}}。",
            notes: "解救后出现在{{PAGE:The Breach}}右边，偶尔出现在{{ROOM:Gungeon}}，遇到时可以缴纳{{PICKUP:Shell}}参加他的{{GAME_MODE:Winchester's Game}}。\r\n和{{PAGE:The Breach}}中的{{NPC:Winchester}}对话，一开始他很冷淡，随着在他的{{GAME_MODE:Winchester's Game}}中{全部射中}的次数越多，他的态度会变得越来越缓和。",
            trivia: "{Winchester}的名字引用自{温彻斯特连发武器公司（Winchester Repeating Arms Company）}，另外也是个双关语，指代玩家可以{赢得宝箱（win a chest）}。\r\n遇到{{NPC:Winchester}}时候，他会叫你的昵称，如果在{{SYSTEM:Steal}}后遇到他，称呼会变成{小偷}，引用自《塞尔达传说 梦见岛（The Legend of Zelda: Link's Awakening）》，林克从商店偷东西后昵称会变成{小偷}。\r\n打靶游戏房间的特殊BGM没有收录在官方原声带中。"
        }
    },
    "Gunsling King and Manservantes": {
        id: 11,
        name: "Gunsling King and Manservantes",
        icon: "npc/Gunsling_King_and_Manservantes.png",
        locale: {
            name: "神枪王和他的仆从",
            tips: "解救后出现在{{PAGE:The Breach}}左上角，偶尔出现在{{ROOM:Gungeon}}，遇到时可以用{{PICKUP:Shell}}参加他们的{{GAME_MODE:King's Game}}。",
            trivia: "{Manservantes}是 Manservant 和 Cervantes 的复合词，引用自{Miguel de Cervantes}（一个西班牙浪漫主义作家）。"
        }
    },
    "Gunsling King": {
        id: 12,
        name: "Gunsling King",
        icon: "npc/Gunsling_King.png",
        locale: {
            name: "神枪王",
            tips: "见{{NPC:Gunsling King and Manservantes}}",
            notes: "见{{NPC:Gunsling King and Manservantes}}"
        },
        hidden: 1
    },
    Manservantes: {
        id: 13,
        name: "Manservantes",
        icon: "npc/Manservantes.png",
        locale: {
            name: "神枪王的仆从",
            tips: "见{{NPC:Gunsling King and Manservantes}}",
            notes: "见{{NPC:Gunsling King and Manservantes}}"
        },
        hidden: 1
    },
    "Ser Manuel": {
        id: 14,
        name: "Ser Manuel",
        icon: "npc/Ser_Manuel.png",
        locale: {
            name: "曼努埃尔爵士",
            tips: "教学关卡里的导师和关底 BOSS，教玩家游戏的基础操作。\r\n偶尔会假扮成猫头鹰{{NPC:Monster Manuel}}出现在地牢的{{ROOM:Secret Room}}，送给玩家一个道具或枪（真是个好老师呢）。",
            notes: "教学关卡里的导师和关底 BOSS，教玩家游戏的基础操作。\r\n第一次打败{{NPC:Ser Manuel}}会掉落 10{{PICKUP:Hegemony Credit}}，无伤 20{{PICKUP:Hegemony Credit}}。\r\n\r\n{{NPC:Ser Manuel}}偶尔会假扮成猫头鹰{{NPC:Monster Manuel}}出现在地牢的{{ROOM:Secret Room}}，送给玩家一个道具或枪（真是个好老师呢）。\r\n\r\n打败{{NPC:Blockner}}后进入{{CHAMBER:Hall of Knowledge}}和{{NPC:Ser Manuel}}对话可以解锁{{GUN:Betrayer's Shield}}和{{ITEM:Badge}}，然后{{NPC:Ser Manuel}}会来到{{PAGE:The Breach}}教学房间门口。",
            trivia: "{{NPC:Ser Manuel}}{Ser Manuel}名字引用自{User Manual}（用户手册）。\r\n{{NPC:Monster Manuel}}{Monster Manuel}名字引用自《以撒的结合（Binding of Isaac）》里的道具{Monster Manual}（怪物手册），以撒的结合初始版本{Manual}拼错成{Manuel}，在论坛里成为一个梗。\r\n{{NPC:Ser Manuel}}说被{{NPC:Blockner}}从背后刺伤后在一个宝箱中苏醒，引用自双人游戏时2P{{GUNGEONEER:The Cultist}}开宝箱可以开出死亡的队友。"
        }
    },
    "Monster Manuel": {
        id: 15,
        name: "Monster Manuel",
        icon: "npc/Monster_Manuel.png",
        locale: {
            name: "曼努埃尔爵士的马甲"
        },
        hidden: 1
    },
    Blockner: {
        id: 16,
        name: "Blockner",
        icon: "npc/NPC_Blockner.png",
        locale: {
            name: "封锁者布洛克纳",
            tips: "{{NPC:Ser Manuel}}的劲敌，游戏的一个支线任务。",
            notes: "{{NPC:Ser Manuel}}的劲敌，游戏的一个支线任务。\r\n\r\n在教学关卡{{CHAMBER:Hall of Knowledge}}中发现{{ROOM:Secret Room}}并拾取{{ITEM:Old Knight's Helm}}{{ITEM:Old Knight's Shield}}，击败{{NPC:Ser Manuel}}后和他对话，可以开启{{NPC:Blockner}}的支线任务（{{NPC:Blockner}}会出现在{{CHAMBER:Black Powder Mine}}）。\r\n打败{{NPC:Blockner}}后，进入{{CHAMBER:Hall of Knowledge}}和{{NPC:Ser Manuel}}对话可以解锁{{GUN:Betrayer's Shield}}和{{ITEM:Badge}}。另外，{{NPC:Blockner}}会以灵魂的形式出现在{{PAGE:The Breach}}教学房间门口，同时作为一个小BOSS（类似于{{ENEMY:Shadow Magician}}）出现在{{ROOM:Gungeon}}。"
        }
    },
    "Sell Creep": {
        id: 17,
        name: "Sell Creep",
        icon: "npc/TheSellCreep.png",
        locale: {
            name: "收破烂",
            tips: "偶尔出现在{{NPC:Bello}}的商店，可以把不用的枪或道具卖它（丢给他），换成{{PICKUP:Shell}}。\r\n也出现在{{CHAMBER:Hollow}}一个单独的小房间，卖它 1 个{{SYSTEM:Master Round}}和 2 个任意物品后打开{{CHAMBER:R&G Dept.}}的入口。",
            notes: '偶尔出现在{{NPC:Bello}}的商店，可以把不用的枪或道具卖它（丢给他），换成{{PICKUP:Shell}}，价格大约是购买价的 45%。\r\n主动道具和枪怎么扔出来请自行查看控制器设置，被动道具在地图界面可以丢出。\r\n它也出现在{{CHAMBER:Hollow}}一个单独的小房间，卖它 1 个{{SYSTEM:Master Round}}和 2 个任意物品后打开{{CHAMBER:R&G Dept.}}的入口。\r\n<h3>出售价格</h3>\r\n[["~物品","~价格{{PICKUP:Shell}}"],["{{QUALITY:S}}","54"],["{{QUALITY:A}}","41"],["{{QUALITY:B}}","30"],["{{QUALITY:C}}","21"],["{{QUALITY:D}}","16"],["{{ITEM:Glass Guon Stone}}","5"],["{{ITEM:Junk}}{{ITEM:Friendship Cookie}}{{ITEM:Gnawed Key}}","3"]]'
        }
    },
    "The Lost Adventurer": {
        id: 18,
        name: "The Lost Adventurer",
        icon: "npc/The_Lost_Adventurer.png",
        locale: {
            name: "迷失的探险家",
            tips: "解救后偶尔出现在{{ROOM:Gungeon}}的随机关卡，让玩家帮忙绘制当前关卡的完整地图，探索完所有房间（不包括BOSS房和{{ROOM:Secret Room}}）后和他对话，会奖励一个道具或枪。\r\n帮助他完成 1~5 层的地图，他会来到{{PAGE:The Breach}}（{{ROOM:Gungeon}}里仍然可以正常遇到），和他对话解锁{{GUN:Excaliber}}，他也会告诉你{{ROOM:Gungeon}}里的一些秘密（隐藏关卡的信息等），每次回到{{PAGE:The Breach}}和他对话可以获得不同的信息。",
            notes: "解救后偶尔出现在{{ROOM:Gungeon}}的随机关卡，让玩家帮忙绘制当前关卡的完整地图，探索完所有房间（不包括BOSS房和{{ROOM:Secret Room}}）后和他对话，会奖励一个道具或枪。\r\n帮助他完成 1~5 层的地图，他会来到{{PAGE:The Breach}}（{{ROOM:Gungeon}}里仍然可以正常遇到），和他对话解锁{{GUN:Excaliber}}，他也会告诉你{{ROOM:Gungeon}}里的一些秘密（隐藏关卡的信息等），每次回到{{PAGE:The Breach}}和他对话可以获得不同的信息。\r\n\r\n<h3>提示</h3>\r\n- 在{{ROOM:Gungeon}}中遇到他时，如果在和他对话前攻击他，他就不会向你求助了\r\n- 如果拥有显示所有房间的道具（{{ITEM:Map}}{{ITEM:Gungeon Blueprint}}{{ITEM:Cartographer's Ring}}），可以直接绘制出完整地图\r\n- 如果关卡中有{{ROOM:Demon Face}}，黑市房间也需要进入才能完成地图\r\n喂，说你呢，别想着拿他旁边的剑盾了，那只是摆设。",
            trivia: "迷失的探险家以及他的许多对话引用自《塞尔达传说（ Legend of Zelda series）》系列。\r\n{{NPC:The Lost Adventurer}}说“那些壶里面没有东西，我检查过了”是骗你的，其实可能会有{{ENEMY:Gun Fairy}}。\r\n"
        }
    },
    "Ledge Goblin": {
        id: 19,
        name: "Ledge Goblin",
        icon: "npc/Ledge_Goblin.png",
        locale: {
            name: "找头盔的哥布林",
            tips: "从{{CHAMBER:Gungeon Proper}}解救后来到{{PAGE:The Breach}}，坐在快捷电梯房前面的悬崖边缘，旁边放着她的头盔。\r\n和她的头盔互动，会把头盔踢下悬崖，然后她会跑到{{ROOM:Gungeon}}里找头盔，你需要重新救她，当她第四次回到{{PAGE:The Breach}}，她会给你解锁{{ITEM:Blast Helmet}}，然后机智的用链子把头盔连在地板上，你再也没办法把头盔踢下去了。",
            notes: "从{{CHAMBER:Gungeon Proper}}解救后来到{{PAGE:The Breach}}，坐在快捷电梯房前面的悬崖边缘，旁边放着她的头盔。\r\n和她的头盔互动，会把头盔踢下悬崖，然后她会跑到{{ROOM:Gungeon}}里找头盔，你需要重新救她，当她第四次回到{{PAGE:The Breach}}，她会给你解锁{{ITEM:Blast Helmet}}，然后机智的用链子把头盔连在地板上，你再也没办法把头盔踢下去了。"
        }
    },
    Blacksmith: {
        id: 20,
        name: "Blacksmith",
        icon: "npc/Blacksmith.png",
        locale: {
            name: "铁匠姐姐",
            tips: "- 在{{CHAMBER:Forge}}开商店\r\n- 制作{{ITEM:The Bullet That Can Kill The Past}}\r\n- 解锁{{GUNGEONEER:The Robot}}\r\n- {{NPC:Ox}}的备用手臂任务",
            notes: "<h3>在{{CHAMBER:Forge}}开商店</h3>\r\n通常会有 3 个{{SYSTEM:Pickup}}和 3 个枪或道具。可能售卖{{QUALITY:A}}或{{QUALITY:S}}品质的枪或道具（如{{ITEM:Broccoli}}）。\r\n\r\n<h3>制作{{ITEM:The Bullet That Can Kill The Past}}</h3>\r\n需要把下面 4 个材料交给她（可分多局游戏给）：\r\n<g>{{ITEM:Prime Primer}}{{ITEM:Arcane Gunpowder}}{{ITEM:Planar Lead}}{{ITEM:Obsidian Shell Casing}}</g>\r\n每个材料只需给 1 次，集齐之后每局游戏和她对话她都会给你{{ITEM:The Bullet That Can Kill The Past}}。\r\n\r\n<h3>解锁{{GUNGEONEER:The Robot}}</h3>\r\n把{{CHAMBER:Gungeon Proper}}电梯井里（关卡第一个房间，电梯走后的洞可以下去）的{{ITEM:Busted Television}}交给她，可以解锁{{GUNGEONEER:The Robot}}，详情见{{GUNGEONEER:The Robot}}。\r\n\r\n<h3>{{NPC:Ox}}的备用手臂任务</h3>\r\n打败{{BOSS:High Dragun}}后，她的左边会有{{NPC:Ox}}的备用手臂，把手臂运送到{{PAGE:The Breach}}，可以解锁{{ITEM:Clone}}，详情见{{NPC:Ox and Cadence}}。"
        }
    },
    "Resourceful Rat": {
        id: 21,
        name: "Resourceful Rat",
        icon: "npc/Resourceful_Rat.png",
        locale: {
            name: "机智大鼠",
            tips: "出现在{{ROOM:Gungeon}}中偷玩家遗留的物品。\r\n通过{{ROOM:Shortcuts}}进入地牢，它会在第一个房间，随机摆着 3 把枪让你选。",
            notes: "<h3>出现在{{ROOM:Gungeon}}中偷玩家遗留的物品。</h3>\r\n当玩家离开房间时，如果地上的{{PICKUP:Armor}}、{{PICKUP:Ammo}}、枪、道具没有拾取，会被老鼠偷走，然后留下一张带有嘲讽语句的纸条。\r\n以下物品不会被老鼠偷走：\r\n<g>{{PICKUP:Half Heart}}{{PICKUP:Heart}}{{PICKUP:Blank}}{{PICKUP:Key}}{{PICKUP:Cell Key}}{{PICKUP:Hegemony Credit}}{{ITEM:Glass Guon Stone}}{{ITEM:Master Round I}}{{ITEM:Master Round II}}{{ITEM:Master Round III}}{{ITEM:Master Round IV}}{{ITEM:Master Round V}}</g>\r\n如果攻击正在偷东西的老鼠，它会逃跑，等你离开后再重新回来偷。攻击老鼠后，它会等你走得更远（下下个房间）再回来偷。\r\n如果在{{CHAMBER:Resourceful Rat's Lair}}打败{{BOSS:Resourceful Rat}}，本局游戏物品不会再被它偷走。\r\n如果同时拥有<g>{{ITEM:Resourceful Sack}}{{ITEM:Partially-Eaten Cheese}}{{ITEM:Rat Boots}}{{GUN:Elimentaler}}</g>，玩家会变成老鼠，可以避免物品被它偷走。\r\n\r\n<h3>通过{{ROOM:Shortcuts}}进入{{ROOM:Gungeon}}，它会在第一个房间，随机摆着 3 把枪让玩家选择。</h3>\r\n- {{CHAMBER:Gungeon Proper}}：枪的品质为{{QUALITY:D}}，可选择 1 把\r\n- {{CHAMBER:Black Powder Mine}}：枪的品质为{{QUALITY:C}}，可选择 1 把\r\n- {{CHAMBER:Hollow}}：枪的品质为{{QUALITY:B}}，可选择 2 把\r\n- {{CHAMBER:Forge}}：枪的品质为{{QUALITY:B}}，3 把枪可全部拿走\r\n老鼠提供的枪在击败当前关卡的BOSS后才会刷新。比如通过{{ROOM:Shortcuts}}进入{{CHAMBER:Gungeon Proper}}，在打败这一层的BOSS前，退出地牢再次直接进入该层，老鼠提供的枪还是原来那 3 把，在打败BOSS后，才会刷新。\r\n老鼠提供的枪可以{{SYSTEM:Steal}}。"
        }
    },
    "Professor Goopton": {
        id: 22,
        name: "Professor Goopton",
        icon: "npc/Professor_Goopton.png",
        locale: {
            name: "液体商人",
            tips: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{液体}相关的枪和道具，价格八折（{{NPC:Bello}}商店价格{x0.8}）。\r\n{{PICKUP:Shell}}购买过他的商品后，他也会来到{{PAGE:The Breach}}摆摊，使用{{PICKUP:Hegemony Credit}}购买解锁物品。\r\n需从{{CHAMBER:Gungeon Proper}}或{{CHAMBER:Oubliette}}的牢房救出。",
            notes: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{液体}相关的枪和道具，价格八折（{{NPC:Bello}}商店价格{x0.8}）。\r\n{{PICKUP:Shell}}购买过他的商品后，他也会来到{{PAGE:The Breach}}摆摊，使用{{PICKUP:Hegemony Credit}}购买解锁物品。\r\n需从{{CHAMBER:Gungeon Proper}}或{{CHAMBER:Oubliette}}的牢房救出。\r\n\r\n<h3>地牢商品</h3>\r\n- 枪\r\n<g>{{GUN:Abyssal Tentacle}}{{GUN:Barrel}}{{GUN:Gungeon Ant}}{{GUN:Mega Douser}}{{GUN:Plague Pistol}}{{GUN:Plunger}}{{GUN:The Membrane}}{{GUN:Mutation}}{{GUN:Fossilized Gun}}{{GUN:Compressed Air Tank}}{{GUN:Strafe Gun}}</g>\r\n- 道具\r\n<g>{{ITEM:Bug Boots}}{{ITEM:Duct Tape}}{{ITEM:Gundromeda Strain}}{{ITEM:Monster Blood}}{{ITEM:Poison Vial}}{{ITEM:Bottle}}{{ITEM:Potion of Gun Friendship}}{{ITEM:Potion of Lead Skin}}{{ITEM:Sponge}}{{ITEM:Napalm Strike}}</g>\r\n\r\n<h3>裂隙商品</h3>\r\n- 枪\r\n<g>{{GUN:Fossilized Gun}}12{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Plague Pistol}}6{{PICKUP:Hegemony Credit}}</g><g>{{GUN:The Membrane}}10{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Plunger}}7{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Abyssal Tentacle}}15{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Evolver}}35{{PICKUP:Hegemony Credit}}</g>\r\n- 道具\r\n<g>{{ITEM:Bug Boots}}7{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Monster Blood}}5{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Sponge}}6{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Napalm Strike}}18{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Gundromeda Strain}}25{{PICKUP:Hegemony Credit}}</g>"
        }
    },
    Trorc: {
        id: 23,
        name: "Trorc",
        icon: "npc/Truck_Shopkeeper.png",
        locale: {
            name: "军火商人",
            tips: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{军火}相关的枪和道具，价格八折（{{NPC:Bello}}商店价格{x0.8}）。\r\n{{PICKUP:Shell}}购买过他的商品后，他也会来到{{PAGE:The Breach}}摆摊，使用{{PICKUP:Hegemony Credit}}购买解锁物品。",
            notes: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{军火}相关的枪和道具，价格八折（{{NPC:Bello}}商店价格{x0.8}）。\r\n{{PICKUP:Shell}}购买过他的商品后，他也会来到{{PAGE:The Breach}}摆摊，使用{{PICKUP:Hegemony Credit}}购买解锁物品。\r\n\r\n<h3>地牢商品</h3>\r\n- 枪\r\n<g>{{GUN:Com4nd0}}{{GUN:Bullet}}{{GUN:M16}}{{GUN:Machine Pistol}}{{GUN:Shell}}{{GUN:Patriot}}{{GUN:RC Rocket}}{{GUN:A.W.P.}}{{GUN:Casey}}{{GUN:Mourning Star}}</g>\r\n- 道具\r\n<g>{{ITEM:Ration}}{{ITEM:Stout Bullets}}{{ITEM:C4}}{{ITEM:Cluster Mine}}{{ITEM:Cigarettes}}{{ITEM:Double Vision}}{{ITEM:Laser Sight}}{{ITEM:Drum Clip}}{{ITEM:Chaff Grenade}}{{ITEM:Air Strike}}{{ITEM:Remote Bullets}}{{ITEM:Big Boy}}{{ITEM:Full Metal Jacket}}</g>\r\n\r\n<h3>裂隙商品</h3>\r\n- 枪\r\n<g>{{GUN:M16}}5{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Patriot}}12{{PICKUP:Hegemony Credit}}</g><g>{{GUN:A.W.P.}}10{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Com4nd0}}8{{PICKUP:Hegemony Credit}}</g><g>{{GUN:RC Rocket}}15{{PICKUP:Hegemony Credit}}</g>\r\n- 道具\r\n<g>{{ITEM:Chaff Grenade}}13{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Cluster Mine}}3{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Ration}}7{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Air Strike}}6{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Big Boy}}20{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Magazine Rack}}25{{PICKUP:Hegemony Credit}}</g>",
            trivia: "{Trorc}名字是{trader（商人）}和{orc（兽人）}的合成词"
        }
    },
    "Old Red": {
        id: 24,
        name: "Old Red",
        icon: "npc/Blank_Shopkeeper.png",
        locale: {
            name: "空响弹商人",
            tips: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖{{PICKUP:Blank}}{{PICKUP:Armor}}以及一些{空响弹}相关的道具，价格八折（{{NPC:Bello}}商店价格{x0.8}）。\r\n需从{{CHAMBER:Gungeon Proper}}或{{CHAMBER:Oubliette}}或{{CHAMBER:Black Powder Mine}}的牢房救出。",
            notes: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖{{PICKUP:Blank}}{{PICKUP:Armor}}以及一些{空响弹}相关的道具，价格八折（{{NPC:Bello}}商店价格{x0.8}）。\r\n需从{{CHAMBER:Gungeon Proper}}或{{CHAMBER:Oubliette}}或{{CHAMBER:Black Powder Mine}}的牢房救出。\r\n\r\n<h3>地牢商品</h3>\r\n- 枪\r\n<g>{{GUN:Huntsman}}</g>\r\n- 道具\r\n<g>{{ITEM:Chaos Ammolet}}{{ITEM:Copper Ammolet}}{{ITEM:Gold Ammolet}}{{ITEM:Lodestone Ammolet}}{{ITEM:Uranium Ammolet}}{{ITEM:Frost Ammolet}}{{ITEM:Full Metal Jacket}}{{ITEM:Elder Blank}}{{ITEM:Table Tech Blanks}}{{ITEM:Owl}}{{ITEM:Relodestone}}{{ITEM:Holey Grail}}</g>",
            trivia: "{{NPC:Old Red}}说自己老得快看不清东西了，怪不得会叫自己{Old Red（老红）}而不是{Old Blue（老蓝）}，他甚至把玩家误认为是子弹怪。"
        }
    },
    Cursula: {
        id: 25,
        name: "Cursula",
        icon: "npc/Curse_Shopkeeper.png",
        locale: {
            name: "商人女巫",
            tips: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{诅咒}{魅惑}{心之容器}相关的枪和道具，价格五折，但购买她的任意商品都会额外增加 2.5{{SYSTEM:Curse}}。{{SYSTEM:Steal}}是增加 1{{SYSTEM:Curse}}，所以在她这里能偷就偷。\r\n需从{{CHAMBER:Gungeon Proper}}的牢房救出。",
            notes: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{诅咒}{魅惑}{心之容器}相关的枪和道具，价格五折，但购买她的任意商品都会额外增加 2.5{{SYSTEM:Curse}}。{{SYSTEM:Steal}}是增加 1{{SYSTEM:Curse}}，所以在她这里能偷就偷。\r\n需从{{CHAMBER:Gungeon Proper}}的牢房救出。\r\n\r\n<h3>地牢商品</h3>\r\n- 枪\r\n<g>{{GUN:Charmed Bow}}{{GUN:Casey}}{{GUN:Gunslinger's Ashes}}{{GUN:Huntsman}}{{GUN:Pitchfork}}{{GUN:Shotgun Full of Love}}{{GUN:Unicorn Horn}}</g>\r\n- 道具\r\n<g>{{ITEM:Badge}}{{ITEM:Big Boy}}{{ITEM:Blood Brooch}}{{ITEM:Bracket Key}}{{ITEM:Charm Horn}}{{ITEM:Disarming Personality}}{{ITEM:Elder Blank}}{{ITEM:Heart Locket}}{{ITEM:Heart Purse}}{{ITEM:Knife Shield}}{{ITEM:Monster Blood}}{{ITEM:Sixth Chamber}}{{ITEM:Stuffed Star}}{{ITEM:Wax Wings}}{{ITEM:Cursed Bullets}}{{ITEM:Lament Configurum}}{{ITEM:Spice}}{{ITEM:Yellow Chamber}}{{ITEM:Holey Grail}}</g>"
        }
    },
    Flynt: {
        id: 26,
        name: "Flynt",
        icon: "npc/Key_Shopkeeper.png",
        locale: {
            name: "锁头商人",
            tips: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{钥匙}{宝箱}相关的枪和道具。\r\n和其他地牢商人不同，购买他的物品使用的货币是{{PICKUP:Key}}而不是{{PICKUP:Shell}}。\r\n需从{{CHAMBER:Gungeon Proper}}的牢房救出。",
            notes: "偶尔出现在{{ROOM:Gungeon}}中摆摊，主要卖一些{钥匙}{宝箱}相关的枪和道具。\r\n和其他地牢商人不同，购买他的物品使用的货币是{{PICKUP:Key}}而不是{{PICKUP:Shell}}。\r\n需从{{CHAMBER:Gungeon Proper}}的牢房救出。\r\n\r\n<h3>地牢商品</h3>\r\n- 枪\r\n<g>{{GUN:AKEY-47}}3{{PICKUP:Key}}</g><g>{{GUN:Vorpal Gun}}1{{PICKUP:Key}}</g>\r\n- 道具\r\n<g>{{ITEM:Shelleton Key}}3{{PICKUP:Key}}</g><g>{{ITEM:Brick of Cash}}1{{PICKUP:Key}}</g><g>{{ITEM:Baby Good Mimic}}1{{PICKUP:Key}}</g><g>{{ITEM:Ballot}}1{{PICKUP:Key}}</g><g>{{ITEM:Ring of Mimic Friendship}}1{{PICKUP:Key}}</g><g>{{ITEM:Mimic Tooth Necklace}}2{{PICKUP:Key}}</g><g>{{ITEM:Ring of Chest Friendship}}1{{PICKUP:Key}}</g><g>{{ITEM:Ring of Chest Vampirism}}1{{PICKUP:Key}}</g><g>{{ITEM:Book of Chest Anatomy}}1{{PICKUP:Key}}</g><g>{{ITEM:Heart Locket}}1{{PICKUP:Key}}</g><g>{{ITEM:Bracket Key}}3{{PICKUP:Key}}</g><g>{{ITEM:Trusty Lockpicks}}1{{PICKUP:Key}}</g><g>{{ITEM:Lament Configurum}}1{{PICKUP:Key}}</g><g>{{ITEM:Chest Teleporter}}2{{PICKUP:Key}}</g><g>{{ITEM:Daruma}}1{{PICKUP:Key}}</g>",
            trivia: "{Flynt}的名字引用自{Flintlock（燧发枪）}，一种过时的发射黑色粉末的枪。"
        }
    },
    Doug: {
        id: 27,
        name: "Doug",
        icon: "npc/Doug.png",
        locale: {
            name: "外星商人",
            tips: "偶尔出现在{{PAGE:The Breach}}摆摊，使用{{PICKUP:Hegemony Credit}}购买解锁物品。\r\n在{{ROOM:Gungeon}}中打到越后面，返回{{PAGE:The Breach}}后出现{{NPC:Doug}}的概率就越高。\r\n{{NPC:Doug}}的地摊会摆着 2 个商品，都卖出后才会重新摆货。购买他的全部商品后，会解锁{{ITEM:Gilded Bullets}}。\r\n需从{{CHAMBER:Gungeon Proper}}或{{CHAMBER:Black Powder Mine}}的牢房救出。",
            notes: "偶尔出现在{{PAGE:The Breach}}摆摊，使用{{PICKUP:Hegemony Credit}}购买解锁物品。\r\n在{{ROOM:Gungeon}}中打到越后面，返回{{PAGE:The Breach}}后出现{{NPC:Doug}}的概率就越高。\r\n{{NPC:Doug}}的地摊会摆着 2 个商品，都卖出后才会重新摆货。购买他的全部商品后，会解锁{{ITEM:Gilded Bullets}}。\r\n需从{{CHAMBER:Gungeon Proper}}或{{CHAMBER:Black Powder Mine}}的牢房救出。\r\n\r\n<h3>裂隙商品</h3>\r\n- 枪\r\n<g>{{GUN:Devolver}}10{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Casey}}12{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Starpew}}20{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Dueling Laser}}20{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Vorpal Gun}}20{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Hyper Light Blaster}}22{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Mourning Star}}22{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Strafe Gun}}26{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Stone Dome}}26{{PICKUP:Hegemony Credit}}</g><g>{{GUN:The Exotic}}26{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Big Shotgun}}26{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Combined Rifle}}26{{PICKUP:Hegemony Credit}}</g><g>{{GUN:3rd Party Controller}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:GuNNER}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Tetrominator}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Triple Gun}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Void Core Cannon}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Really Special Lute}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Kruller Glaive}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Knight's Gun}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:The Predator}}28{{PICKUP:Hegemony Credit}}</g><g>{{GUN:Gunderfury}}28{{PICKUP:Hegemony Credit}}</g>\r\n- 道具\r\n<g>{{ITEM:Silver Bullets}}8{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Stout Bullets}}12{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Roll Bomb}}12{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Charming Rounds}}14{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Helix Bullets}}16{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Teleporter Prototype}}22{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Flak Bullets}}28{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Magic Bullets}}18{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Vorpal Bullets}}26{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Snowballets}}26{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Bumbullets}}26{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Devolver Rounds}}26{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Scouter}}26{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Orbital Bullets}}28{{PICKUP:Hegemony Credit}}</g><g>{{ITEM:Blank Bullets}}28{{PICKUP:Hegemony Credit}}</g>"
        }
    },
    Sorceress: {
        id: 28,
        name: "Sorceress",
        icon: "npc/Sorceress.png",
        locale: {
            name: "祝福女巫",
            tips: "缴纳 6{{PICKUP:Hegemony Credit}}后会获得一个祝福，下一次进入地牢为{{GAME_MODE:Blessing Mode}}",
            notes: "击败{{BOSS:High Dragun}}后，{{NPC:Sorceress}}会出现在某关卡的牢房中，解救后出现在{{PAGE:The Breach}}右上角的房间中。\r\n和她对话，缴纳 6{{PICKUP:Hegemony Credit}}后会获得一个祝福，下一次进入地牢为{{GAME_MODE:Blessing Mode}}。"
        }
    },
    Tonic: {
        id: 29,
        name: "Tonic",
        icon: "npc/Tonic.png",
        locale: {
            name: "加速狗",
            tips: "开启和关闭{{GAME_MODE:Turbo Mode}}",
            notes: "解救后会出现在{{PAGE:The Breach}}右上角的房间中。\r\n和{{NPC:Tonic}}对话可以开启{{GAME_MODE:Turbo Mode}}，再次对话则关闭该模式。",
            trivia: "{Tonic}名字来源于索尼克{Sonic}。\r\n{加速模式}来源于索尼克的速度能力。\r\n拥有 5000 以上的{{PICKUP:Hegemony Credit}}时，和{{NPC:Tonic}}对话，他会敲诈你 90% 的{{PICKUP:Hegemony Credit}}，然后买一个新的黄色皮肤[(~~data/Yellow_Tonic.png)]，来源于索尼克使用混乱宝石后变黄。\r\n通关加速模式后，Tonic 的身后会出现一个金色的辣味热狗雕像，来源于索尼克最喜欢的食物。\r\n\r\n<h3>附：{{GAME_MODE:Rainbow Mode}}+{{GUNGEONEER:The Robot}}速刷{{PICKUP:Hegemony Credit}}</h3>\r\n最快获取{{PICKUP:Hegemony Credit}}的方式无疑是无伤BOSS，而强力的输出快速击杀，是无伤BOSS最好的保障，拖得越久越容易失误。\r\n通过{{GAME_MODE:Rainbow Mode}}刷强力武器开局，首选是无视DPS上限的{{GUN:Makeshift Cannon}}{{GUN:Yari Launcher}}，但如果后面没开到方便清怪的枪，会打的比较辛苦。操作好些的可以刷{{GUN:Gunther}}Lv60{{GUN:Gunderfury}}{{GUN:Finished Gun}}，打起来会比较轻松。\r\n角色推荐{{GUNGEONEER:The Robot}}，彩虹模式宝箱不能开，但打坏会概率掉{{ITEM:Junk}}，{{GUNGEONEER:The Robot}}可以获得低保增伤。\r\n- 不用强求探索全部房间，反正宝箱开不了，一般也不会很缺钱。\r\n- {{CHAMBER:Oubliette}}要打，{{CHAMBER:Abbey of the True Gun}}尽量打。\r\n- 不用强求打老鼠，钱够可以买钥匙进去多开个彩虹箱，然后故意走错路线退出。装备太烂可以考虑打（打得过的话）。\r\n- 进{{CHAMBER:Bullet Hell}}但不打巫妖，反正不给{{PICKUP:Hegemony Credit}}，进关卡主要是看能不能开到{{ITEM:Clone}}，没有就直接重开。\r\n- {{PICKUP:Shell}}主要用来买{{PICKUP:Ammo}}和{{PICKUP:Blank}}，目的是要无伤BOSS，稍微有一点受伤的可能就直接开{{PICKUP:Blank}}，不要省。\r\n- 如果开到{{ITEM:Full Metal Jacket}}，不用考虑，秒选。\r\n- 如果开到{{ITEM:Clone}}，不用考虑，秒选。\r\n- 如果开出来没有特别好的东西，但是有{{SYSTEM:Ammolet}}，可以考虑拿，每层多给{{PICKUP:Blank}}。\r\n- 开到{{ITEM:Ancient Hero's Bandana}}{{ITEM:Holey Grail}}{{ITEM:Relodestone}}，可以优先选，不用担心弹药不够。\r\n这个方法基本30分钟可以打完一局，能得多少{{PICKUP:Hegemony Credit}}看脸，但个人感觉平均最少也有 30~40 个"
        }
    },
    Daisuke: {
        id: 30,
        name: "Daisuke",
        icon: "npc/Daisuke.png",
        locale: {
            name: "挑战骰子",
            tips: "缴纳 6{{PICKUP:Hegemony Credit}}后，下一次进入地牢为{{GAME_MODE:Challenge Mode}}",
            trivia: "{{NPC:Daisuke}}是一个 20 面的骰子，引用自《龙与地下城（Dungeons and Dragons）》。"
        }
    },
    "Patches and Mendy": {
        id: 31,
        name: "Patches and Mendy",
        icon: "npc/Doctors.png",
        locale: {
            name: "护士姐妹",
            tips: "偶尔出现在{{ROOM:Gungeon}}的一种特殊房间，搭着一个破帐篷，和右边的护士小姐姐对话可以回满{{PICKUP:Heart}}。\r\n{{GUNGEONEER:The Robot}}则是给一个{{ITEM:Junk}}或{{ITEM:Bottle}}或{{PICKUP:Armor}}。\r\n她们只会帮你治疗一次。",
            notes: "偶尔出现在{{ROOM:Gungeon}}的一种特殊房间，搭着一个破帐篷，和右边的护士小姐姐对话可以回满{{PICKUP:Heart}}。\r\n{{GUNGEONEER:The Robot}}则是给一个{{ITEM:Junk}}或{{ITEM:Bottle}}或{{PICKUP:Armor}}。\r\n她们只会帮你治疗一次。\r\n如果{{SYSTEM:Curse}}达到 10 点，引出了{{ENEMY:Lord of the Jammed}}，护士小姐姐在帮你治疗的过程中，它依然会向你攻击造成伤害，这种情况最好跑远点再传送过来治疗。",
            trivia: "护士小姐姐的治疗方式是拿个装着小精灵的瓶子砸碎在你头上，引用自《塞尔达传说（Legend of Zelda）》系列，玩家可以使用装在瓶子里的小精灵恢复生命值。"
        }
    },
    Synergrace: {
        id: 32,
        name: "Synergrace",
        icon: "npc/Synergrace.png",
        locale: {
            name: "组合商人",
            tips: "偶尔出现在{{ROOM:Gungeon}}的一种特殊房间，摆着两台老虎机，和她对话可以使用{{PICKUP:Shell}}购买一个{{CHEST:Synergy Chest}}。\r\n购买 3 次{{CHEST:Synergy Chest}}会解锁{{ITEM:Macho Brace}}。",
            notes: "偶尔出现在{{ROOM:Gungeon}}的一种特殊房间，摆着两台老虎机，和她对话可以使用{{PICKUP:Shell}}购买一个{{CHEST:Synergy Chest}}。\r\n购买 3 次{{CHEST:Synergy Chest}}会解锁{{ITEM:Macho Brace}}。\r\n当你拥有的枪没有任何组合时，她不会卖你{{CHEST:Synergy Chest}}。"
        }
    },
    Vampire: {
        id: 33,
        name: "Vampire",
        icon: "npc/Vampire.png",
        locale: {
            name: "吸血鬼",
            tips: "用血换钱，每次交易：\r\n半颗心{{PICKUP:Half Heart}} = 20{{PICKUP:Shell}}{x 关卡物价增长率}",
            notes: "用血换钱，每次交易：\r\n半颗心{{PICKUP:Half Heart}} = 20{{PICKUP:Shell}}{x 关卡物价增长率}\r\n有极小概率获得{{SHRINE:Blood}}相同效果"
        }
    },
    Witches: {
        id: 34,
        name: "Witches",
        icon: "npc/Witches.png",
        locale: {
            name: "换枪女巫",
            tips: "用枪换枪，+2{{SYSTEM:Curse}}\r\n换到的枪为同品质或高一品级"
        }
    },
    "Old Man": {
        id: 35,
        name: "Old Man",
        icon: "npc/Old_Man.png",
        locale: {
            name: "送礼老头",
            tips: "送玩家一个道具或枪（双人游戏时不给）"
        }
    },
    "Brother Albern": {
        id: 36,
        name: "Brother Albern",
        icon: "npc/Brother_Albern.png",
        locale: {
            name: "真理小子",
            tips: "必然出现在{{CHAMBER:Abbey of the True Gun}}的特殊{{ROOM:Secret Room}}，回答问题后（不管选哪个答案），旁边的{{CHEST:Truth Chest}}会自动开锁，可以开出 1~2 个{{SYSTEM:Pickup}} 或随机品质的枪或道具，如果摧毁{{CHEST:Truth Chest}}，则有概率掉落{{ITEM:Lies}}或{{ITEM:Ser Junkan}}",
            notes: "必然出现在{{CHAMBER:Abbey of the True Gun}}的特殊{{ROOM:Secret Room}}，有极小概率出现在普通{{ROOM:Secret Room}}。\r\n他会问玩家一个问题（不管选哪个答案），然后给旁边的{{CHEST:Truth Chest}}开锁。\r\n{{CHEST:Truth Chest}}可以开出 1~2 个{{SYSTEM:Pickup}} 或随机品质的枪或道具。\r\n如果摧毁{{CHEST:Truth Chest}}，有一定概率掉落{{ITEM:Lies}}或{{ITEM:Ser Junkan}}。",
            trivia: "{Albern}是德语{傻瓜}的意思"
        }
    },
    "Save Button": {
        id: 37,
        name: "Save Button",
        icon: "npc/Save_Button.png",
        locale: {
            name: "存档按钮",
            tips: "每个关卡过关后的存档点",
            notes: "每个关卡过关后的存档点，出现在：\r\n- BOSS房后面的电梯房（击败BOSS后出现）\r\n- {{CHAMBER:Oubliette}}入口活板门旁\r\n- {{CHAMBER:Abbey of the True Gun}}的{{ROOM:Secret Room}}\r\n- {{CHAMBER:Bullet Hell}}入口裂口旁\r\n- {{CHAMBER:Resourceful Rat's Lair}}没有\r\n和它对话，选择要保存，电梯会变成结冰的电梯，进入即可退出到游戏主界面。如果不想退出，重新对话可以恢复成普通电梯。\r\n退出后重新进入，会直接进入下一关，所以尽量在清空所有房间后再使用。\r\n{{GAME_MODE:Boss Rush}}无法使用。"
        }
    },
    Bowler: {
        id: 38,
        name: "Bowler",
        icon: "npc/Bowler.png",
        locale: {
            name: "虹虹帽子侠",
            tips: "开启和关闭{{GAME_MODE:Rainbow Mode}}",
            notes: "解救后会出现在{{PAGE:The Breach}}右上角的房间中。\r\n和{{NPC:Bowler}}对话可以开启{{GAME_MODE:Rainbow Mode}}，再次对话则关闭该模式。"
        }
    }
};
