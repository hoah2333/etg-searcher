export default {
    "Heart Container": {
        id: 1,
        name: "Heart Container",
        local_icon: "data/Heart_Container.png",
        icon_size: 32,
        locale: {
            name: "心之容器",
            tips: "{{PICKUP:Half Heart}}的容器，决定角色的生命值上限，可以理解为血槽"
        }
    },
    "Heart Machine": {
        id: 2,
        name: "Heart Machine",
        icon: "object/Heart_Machine.png",
        icon_size: 128,
        locale: {
            name: "红心存储机",
            tips: "满血状态下，掉落的{{PICKUP:Half Heart}}{{PICKUP:Heart}}会提示{留着以后用}，拾取后存储到{{SYSTEM:Heart Machine}}里，然后{{SYSTEM:Heart Machine}}会出现在商店和通往下层的电梯房里，便于玩家取用。\r\n地图界面会显示当前存储了多少个{{PICKUP:Half Heart}}。\r\n{存储的血当层可用，不能带到下一关}。",
            notes: "满血状态下，掉落的{{PICKUP:Half Heart}}{{PICKUP:Heart}}会提示{留着以后用}，拾取后存储到{{SYSTEM:Heart Machine}}里，然后{{SYSTEM:Heart Machine}}会出现在商店和通往下层的电梯房里，便于玩家取用。\r\n地图界面会显示当前存储了多少个{{PICKUP:Half Heart}}。\r\n{存储的血当层可用，不能带到下一关}。\r\n- 可以把{{PICKUP:Heart}}拆分成{{PICKUP:Half Heart}}，比如你存储了一个{{PICKUP:Heart}}，掉血后使用机器，它会给你拆成{{PICKUP:Half Heart}}，而不是整个{{PICKUP:Heart}}\r\n- 如果商店里刚好有{{NPC:Vampire}}，卖血就方便多了\r\n- 计时速通时比较有用，不用返回之前的房间拾取红心，可以节省一点时间"
        }
    },
    "Enter the Gungeon": {
        id: 3,
        name: "Enter the Gungeon",
        locale: {
            name: "挺进地牢",
            tips: "挺进地牢是一款 Roguelike 射击冒险游戏，地图随机生成，有各种各样的枪、道具和组合，游戏内各种玩梗，到处甩包袱，有趣又不乏难度。\r\n",
            notes: '<view style="text-align:center;">[(~data/enter_the_gungeon.jpg)]</view>\r\n\r\n挺进地牢是一款 Roguelike 射击冒险游戏，有各种各样的枪、道具和组合，游戏内各种玩梗，到处甩包袱，有趣又不乏难度。\r\n目前有 5 个普通关卡，5 个隐藏关卡，关卡地图随机生成，每局游戏都是新的开始。\r\n\r\n进入游戏后，可以先到{{PAGE:The Breach}}的教学房间学习基本操作，翻滚、掀桌等技巧在冒险过程中十分重要，需要不断练习。\r\n\r\n游戏主线是帮助角色{{SYSTEM:Kill The Past}}，另外还需要：{{SYSTEM:Rescue NPCs}}{{SYSTEM:Unlock Guns And Items}}{{SYSTEM:Unlock Gungeoneers}}。'
        }
    },
    Language: {
        id: 4,
        name: "Language",
        locale: {
            name: "语言",
            tips: "{OPTIONS>GAMEPLAY>Language}，点一下左箭头。",
            notes: "{OPTIONS>GAMEPLAY>Language}，点一下左箭头：\r\n[(~data/language_en.jpg)]\r\n[(~data/language_zh.jpg)]"
        }
    },
    "Save Game": {
        id: 5,
        name: "Save Game",
        locale: {
            name: "存档",
            tips: "每个关卡过关后才能存档，存档后会退出到主界面，{继续}游戏会直接从下一关开始。详情见{{NPC:Save Button}}。",
            notes: "每个关卡过关后才能存档，存档后会退出到主界面，{继续}游戏会直接从下一关开始。详情见{{NPC:Save Button}}。"
        }
    },
    DLC: {
        id: 6,
        name: "DLC",
        locale: {
            name: "DLC",
            tips: "Steam 挺进地牢目前有 3 个付费 DLC：\r\n- SOUNDTRACK：原声带\r\n- COMIC：漫画\r\n- MTX GUN：解锁{{GUN:Microtransaction Gun}}\r\n（正常游戏中也能解锁）"
        }
    },
    "Kill The Past": {
        id: 7,
        name: "Kill The Past",
        locale: {
            name: "抹掉过去",
            tips: "携带{{ITEM:The Bullet That Can Kill The Past}}使用{{GUN:The Gun That Can Kill The Past}}通关（不进入{{CHAMBER:Bullet Hell}}），可以进入角色的过去关卡，抹掉过去。",
            notes: "携带{{ITEM:The Bullet That Can Kill The Past}}使用{{GUN:The Gun That Can Kill The Past}}通关（不进入{{CHAMBER:Bullet Hell}}），可以进入角色的过去关卡，抹掉过去。\r\n进入过去关卡会失去所有的枪和道具（除了{{ITEM:Galactic Medal of Valor}}{{ITEM:Enraging Photo}}），重新获得特定的初始枪和道具，不过{{PICKUP:Blank}}{{PICKUP:Armor}}会保留。"
        }
    },
    Synergy: {
        id: 8,
        name: "Synergy",
        locale: {
            name: "组合",
            tips: "有些枪或道具可以和其它枪或道具形成组合，当同时拥有时，会产生特殊的效果（自动生效，部分效果需要把枪拿在手上）。\r\n出现组合时，会短暂显示[(~~data/Synergy.png)]图标提示。\r\n在{物品栏}中，选中某个枪或道具，与其形成组合的枪或道具也会高亮显示。"
        }
    },
    Steal: {
        id: 9,
        name: "Steal",
        locale: {
            name: "偷窃",
            tips: "通过某些道具或枪的隐身、魅惑等效果，可以在商店或商人处偷取物品，不花费{{PICKUP:Shell}}，但每次偷窃成功都会增加 1 点{{SYSTEM:Curse}}。",
            notes: "通过某些道具或枪的隐身、魅惑等效果，可以在商店或商人处偷取物品，不花费{{PICKUP:Shell}}，但每次偷窃成功都会增加 1 点{{SYSTEM:Curse}}：\r\n<g>{{ITEM:Aged Bell}}{{ITEM:Box}}{{ITEM:Chaff Grenade}}{{ITEM:Charm Horn}}{{ITEM:Decoy}}{{ITEM:Explosive Decoy}}{{ITEM:Grappling Hook}}{{ITEM:Smoke Bomb}}{{ITEM:Ring of Ethereal Form}}{{GUN:Directional Pad}}{{GUN:Grey Mauser}}{{GUN:The Predator}}</g>\r\n\r\n<h3>偷窃成功率</h3>\r\n- 在任意NPC处的第一次偷窃必定成功\r\n- 在{{NPC:Bello}}的商店里，第二次偷窃有 50% 的成功率，继续偷窃只有 10% 的成功率。该偷窃记录会带到下一层，比如你在一层商店偷了一次，二层商店再偷就算第二次，即使通过{{ITEM:Clone}}复活该记录也会保留。如果偷窃失败被发现，{{NPC:Bello}}会关店跑路，后面的关卡也不会再开张。\r\n- 其他商人，偷了一次之后，再偷就只有 10% 的成功率。该偷窃记录不会带到下一层。\r\n- {{ROOM:Demon Face}}里不同商人的偷窃记录是分开计算的，即使他们在同个房间内。如果不在乎{{SYSTEM:Curse}}的话，就尽情地偷吧2333。"
        }
    },
    Quality: {
        id: 10,
        name: "Quality",
        locale: {
            name: "品质",
            tips: "游戏中枪和道具有 5 个品级，品质从低到高为：\r\n{{QUALITY:D}}{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}{{QUALITY:S}}\r\n品质越高越稀有",
            notes: '游戏中枪和道具有 5 个品级，品质从低到高为：\r\n{{QUALITY:D}}{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}{{QUALITY:S}}\r\n品质越高越稀有\r\n\r\n不同关卡出现的宝箱和击败BOSS后的奖励品级概率不同，越后面的关卡出现高品级的概率越大\r\n宝箱品级有 2 种不同的掉落设定，可以在游戏外通过{游戏菜单 > 选项 > 游戏 > 战利品掉落设定}进行设置（只影响宝箱，不影响BOSS奖励）\r\n<h3>宝箱（AG&D更新）：</h3>\r\n<view>[["~关卡","~{{QUALITY:D}}","~{{QUALITY:C}}","~{{QUALITY:B}}","~{{QUALITY:A}}","~{{QUALITY:S}}"],["~1","35%","32%","20%","9%","4%"],["~2/隐藏1","10%","37%","40%","9%","4%"],["~3/隐藏2","2%","26%","54%","12.5%","5.5%"],["~4","2%","20%","50%","20%","8%"],["~5","0%","10%","42.5%","35%","12.5%"]]</view>\r\n<h3>宝箱（原版）</h3>\r\n<view>[["~关卡","~{{QUALITY:D}}","~{{QUALITY:C}}","~{{QUALITY:B}}","~{{QUALITY:A}}","~{{QUALITY:S}}"],["~1","42.5%","35%","15%","5%","2.5%"],["~2/隐藏1","20%","32.5%","35%","9%","3.5%"],["~3/隐藏2","10%","22%","50%","12.5%","5.5%"],["~4","2%","20%","50%","20%","8%"],["~5","0%","10%","42.5%","35%","12.5%"]]</view>\r\n<h3>BOSS奖励</h3>\r\n<view>[["~关卡","~{{QUALITY:D}}","~{{QUALITY:C}}","~{{QUALITY:B}}","~{{QUALITY:A}}","~{{QUALITY:S}}"],["~1","10%","50%","35%","4%","1%"],["~2/隐藏1","0%","40%","44%","11%","8%"],["~3/隐藏2","0%","20%","40%","30%","10%"],["~4","0%","10%","50%","30%","10%"]]</view>\r\n\r\n{Magnificence}是游戏的一个隐藏属性（我们暂且简称为{M值}），用于避免在一局游戏中出现过多数量的{{QUALITY:A}}和{{QUALITY:S}}品质的道具和枪，有 2 个因素会影响到{M值}：\r\n- 拾取任何{{QUALITY:A}}或{{QUALITY:S}}的道具和枪，{物品M值}+1（在第一次拾取时计算，丢弃后再拾取不会重新计算，丢弃、卖出、销毁物品不会减掉）。{物品M值}会带到下一关卡\r\n- 出现{{CHEST:Red Chest}}或{{CHEST:Black Chest}}时，{宝箱M值}+1。打开该宝箱后，{宝箱M值}-1。目前未知{宝箱M值}是否会带到下一关卡\r\n当游戏要生成宝箱或物品时（房间宝箱、清空房间后掉落的宝箱、BOSS奖励、商店物品），如果品级的计算结果为{{QUALITY:A}}或{{QUALITY:S}}：\r\n- {物品M值}+{宝箱M值}=0，不影响结果\r\n- {物品M值}+{宝箱M值}>0，有一定概率降级，计算公式为：\r\n{(1 - (0.006260342 + 0.9935921 * e^(-1.626339 * [总M值]))) * 100%}\r\n知道你看不懂，帮你算出前几个值：\r\n<view>[["~总M值","~降级概率"],["0","0%"],["1","79.84%"],["2","95.53%"],["3","98.62%"],["4","99.23%"],["5","99.34%"]]</view>\r\n如果计算结果是降级，宝箱或物品的品质会在{{QUALITY:D}}{{QUALITY:C}}{{QUALITY:B}}中重新随机\r\n\r\n- 未打开的{{CHEST:Red Chest}}或{{CHEST:Black Chest}}增加{M值}，看似会影响接下来生成宝箱或物品的品级，但其实是一样的，打开宝箱减少{M值}，拾取开出的物品后{M值}又加回来了，除非不拾取或者开出多品级的物品（见下方表格）。\r\n- 多品级的物品以最低品级计算，低于{{QUALITY:A}}不会增加{M值}，即使它是从{{CHEST:Red Chest}}或{{CHEST:Black Chest}}中开出来的\r\n- {{ITEM:Lament Configurum}}会使{M值}+1，即使它只是{{QUALITY:B}}级道具\r\n- {{ITEM:Seven-Leaf Clover}}会移除{M值}对{{ROOM:Chest Room}}生成的宝箱品级的影响\r\n- 开宝箱不受{M值}影响，{{CHEST:Black Chest}}一定会开出{{QUALITY:S}}级物品\r\n\r\n<h3>多品级的道具</h3>\r\n部分道具为多品级，可以从多种箱子中开出：\r\n<view>[["~道具","~品质"],["{{ITEM:Heart Holster}}","{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}"],["{{ITEM:Heart Lunchbox}}","{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}"],["{{ITEM:Heart Locket}}","{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}"],["{{ITEM:Heart Bottle}}","{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}"],["{{ITEM:Heart Purse}}","{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}"],["{{ITEM:Heart of Ice}}","{{QUALITY:C}}{{QUALITY:B}}{{QUALITY:A}}{{QUALITY:S}}"]]</view>'
        }
    },
    Pickup: {
        id: 11,
        name: "Pickup",
        locale: {
            name: "基础掉落",
            tips: "基础掉落主要是一些补给类的物品，包括：\r\n{{PICKUP:Shell}}{{PICKUP:Shellx5}}{{PICKUP:Shellx50}}{{PICKUP:Half Heart}}{{PICKUP:Heart}}{{PICKUP:Armor}}{{PICKUP:Blank}}{{PICKUP:Key}}{{PICKUP:Cell Key}}{{PICKUP:Rat Key}}{{PICKUP:Ammo}}{{PICKUP:Spread Ammo}}{{PICKUP:Hegemony Credit}}",
            notes: '基础掉落主要是一些补给类的物品，包括：\r\n{{PICKUP:Shell}}{{PICKUP:Shellx5}}{{PICKUP:Shellx50}}{{PICKUP:Half Heart}}{{PICKUP:Heart}}{{PICKUP:Armor}}{{PICKUP:Blank}}{{PICKUP:Key}}{{PICKUP:Cell Key}}{{PICKUP:Rat Key}}{{PICKUP:Ammo}}{{PICKUP:Spread Ammo}}{{PICKUP:Hegemony Credit}}\r\n\r\n可能出现基础掉落的场景有：\r\n- 清空房间\r\n- 商店物品\r\n- 打开宝箱\r\n- 摧毁宝箱\r\n- 击败BOSS\r\n\r\n清空房间后有 20% 概率出现基础掉落，出现掉落时，会进行 2 次判定：\r\n<h3>第 1 次判定：</h3>\r\n<view>[["~物品","~概率"],["血","13%"],["其它","87%"]]</view>\r\n<h3>第 2 次判定</h3>\r\n第 1 次判定结果为{血}：\r\n<view>[["~物品","~概率"],["{{PICKUP:Half Heart}}","90%"],["{{PICKUP:Heart}}","10%"]]</view>\r\n第 1 次判定结果为{其它}：\r\n<view>[["~物品","~概率"],["{{PICKUP:Half Heart}}","28%"],["{{PICKUP:Key}}","28%"],["{{PICKUP:Heart}}","3.5%"],["{{PICKUP:Armor}}","7%"],["{{ITEM:Supply Drop}}","0.035%"],["{{ITEM:Map}}","0.035%"],["{{PICKUP:Blank}}","12.23%"],["{{PICKUP:Ammo}}","3.5%"],["{{PICKUP:Hegemony Credit}}","0.17%"],["{{PICKUP:Shellx5}}","7%"],["{{PICKUP:Shellx50}}","0.17%"],["{{ITEM:Glass Guon Stone}}","10.48%"]]</view>\r\n\r\n<h3>弹药补给{{PICKUP:Ammo}}{{PICKUP:Spread Ammo}}</h3>\r\n清空房间后有几率掉落弹药补给，如果拥有非无限弹药的枪支，相应关卡掉落弹药补给的概率如下表：\r\n<view>[["~关卡","~概率"],["~1","6%"],["~2/隐藏1/3/隐藏2","8.5%"],["~4/5/6","9%"]]</view>\r\n- 双人游戏时，概率{x1.5}\r\n- 有{{SYSTEM:Curse}}时，概率{x(1+(诅咒值/20))}\r\n- {{PICKUP:Ammo}}和{{PICKUP:Spread Ammo}}的掉落概率各占 50%\r\n'
        }
    },
    Coolness: {
        id: 12,
        name: "Coolness",
        locale: {
            name: "幸运值",
            tips: "{幸运值}（{酷值}）是游戏的一个隐藏属性，主要影响有：\r\n- 减少{主动道具}的冷却时间\r\n- 降低{{SYSTEM:Chest}}出现导火索的概率\r\n- 提高清空房间后掉落{{SYSTEM:Chest}}的概率\r\n- 增加暴击装备的暴击率",
            notes: "{幸运值}（{酷值}）是游戏的一个隐藏属性，主要有以下影响：\r\n- 减少{主动道具}的冷却时间，每点{幸运值}减少 5%，上限为 50%\r\n- 降低{{SYSTEM:Chest}}出现导火索的概率，每点{幸运值}降低 2.5%，上限为 1%\r\n- 提高清空房间后掉落{{SYSTEM:Chest}}的概率\r\n初始掉落概率为：{(1+幸运值-诅咒值)%}，如果清空房间后未掉落，则概率增加 9%，{{CHAMBER:Keep of the Lead Lord}}上限为 85%，其它关卡上限为 80%，掉落宝箱后，概率重置\r\n- {幸运值}越高，{{GUN:Vorpal Gun}}和{{ITEM:Vorpal Bullets}}触发暴击的概率越高\r\n\r\n<h3>增加{幸运值}的道具：</h3>\r\n<g>{{ITEM:Ballot}}+3</g><g>{{ITEM:Cigarettes}}每次使用 +1</g><g>{{ITEM:Heart of Ice}}+1</g><g>{{ITEM:Ice Cube}}+3</g><g>{{ITEM:Iron Coin}}+2</g><g>{{ITEM:Magic Sweet}}+1</g><g>{{ITEM:Orange}}使用 +2</g><g>{{ITEM:Sixth Chamber}}每点{诅咒值}+2</g><g>{{ITEM:Sunglasses}}+2</g>\r\n\r\n<h3>增加{幸运值}的枪：</h3>\r\n<g>{{GUN:Old Goldie}}+1</g><g>{{GUN:Rad Gun}}+2</g><g>{{GUN:Shades's Revolver}}+3</g>\r\n\r\n<h3>增加{幸运值}的组合：</h3>\r\n- {{SYNERGY:Kung Fu Hippie, Rappin' Surfer}}（+1.33）\r\n- {{SYNERGY:Pretty Good}}（+2）\r\n- {{SYNERGY:Spicy D-Boys}}（+2）"
        }
    },
    Curse: {
        id: 13,
        name: "Curse",
        locale: {
            name: "诅咒值",
            tips: "{诅咒值}是游戏的一个隐藏属性，主要影响有：\r\n- 敌人掉落更多的{{PICKUP:Shell}}\r\n- 降低清空房间后掉落{{SYSTEM:Chest}}的概率\r\n- 增加清空房间后掉落{{PICKUP:Ammo}}{{PICKUP:Spread Ammo}}的概率\r\n- 增加{{SYSTEM:Chest}}变成{{ENEMY:Mimic}}的概率\r\n- 增加{{SYSTEM:Chest}}出现导火索的概率\r\n- 增加{{SYSTEM:Jammed Enemies}}出现的概率\r\n- {诅咒值}到达 10 点会出现{{ENEMY:Lord of the Jammed}}不断追杀你",
            notes: '{诅咒值}是游戏的一个隐藏属性，会有以下影响：\r\n- 敌人掉落更多的{{PICKUP:Shell}}\r\n- 降低清空房间后掉落{{SYSTEM:Chest}}的概率\n{{SYSTEM:Chest}}的掉落概率计算公式为：{(1+幸运值-诅咒值)%}，如果清空房间后未掉落，则概率增加 9%，{{CHAMBER:Keep of the Lead Lord}}上限为 85%，其它关卡上限为 80%，掉落宝箱后，概率重置\r\n- 增加清空房间后掉落{{PICKUP:Ammo}}{{PICKUP:Spread Ammo}}的概率\r\n- 增加{{SYSTEM:Chest}}变成{{ENEMY:Mimic}}的概率，每点{诅咒值}增加 2.1%\r\n- 增加{{SYSTEM:Chest}}出现导火索的概率，每点{诅咒值}增加 5%\r\n- 增加{{SYSTEM:Jammed Enemies}}出现的概率\r\n- 只要有 1 点{诅咒值}，就可以进入{{ROOM:Demon Face}}\r\n- {诅咒值}到达 10 点会出现{{ENEMY:Lord of the Jammed}}不断追杀你，且不能被杀死。如果把诅咒值降回 10 点以下，它不会马上消失，需要进入下一关卡它才不会出现。\r\n<view class="mini">[["~诅咒\\n点数","~诅咒\\n小怪","~诅咒\\nBOSS","~宝箱变\\n宝箱怪","~宝箱有\\n导火索","~基础\\n掉落","~弹药\\n掉落"],["~0","0%","0%","2.25%","+0%","-0%","+0%"],["~1","0%","0%","4.35%","+5%","-1%","+5%"],["~2","1%","0%","6.45%","+10%","-2%","+10%"],["~3","2%","0%","8.55%","+15%","-3%","+15%"],["~4","2%","0%","10.65%","+20%","-4%","+20%"],["~5","5%","0%","12.75%","+25%","-5%","+25%"],["~6","5%","0%","14.85%","+30%","-6%","+30%"],["~7","10%","20%","16.95%","+35%","-7%","+35%"],["~8","10%","20%","19.05%","+40%","-8%","+40%"],["~9","25%","30%","21.15%","+45%","-9%","+45%"],["~10","50%","50%","23.25%","+50%","-10%","+50%"]]</view>\r\n{诅咒值}超过 10 点时，小怪和BOSS变诅咒怪的概率上限为 50%，其它影响继续线性增长。\r\n\r\n<h3>增加{诅咒值}的道具：</h3>\r\n<g>{{ITEM:Big Boy}}+1</g><g>{{ITEM:Blood Brooch}}+1</g><g>{{ITEM:Bracket Key}}+1</g><g>{{ITEM:Cursed Bullets}}+1</g><g>{{ITEM:Elder Blank}}+2</g><g>{{ITEM:Holey Grail}}+1</g><g>{{ITEM:Knife Shield}}+1</g><g>{{ITEM:Lament Configurum}}+1</g><g>{{ITEM:Shelleton Key}}+1</g><g>{{ITEM:Sixth Chamber}}+2</g><g>{{ITEM:Yellow Chamber}}+2</g><g>{{ITEM:Blank Bullets}}+1.5</g><g>{{ITEM:Katana Bullets}}+1</g><g>{{ITEM:Scouter}}+1</g>\r\n\r\n<h3>增加{诅咒值}的枪：</h3>\r\n<g>{{GUN:Boxing Glove}}+1</g><g>{{GUN:Casey}}+2</g><g>{{GUN:Excaliber}}+2.5</g><g>{{GUN:Fightsabre}}+2</g><g>{{GUN:Huntsman}}+1</g><g>{{GUN:Shellegun}}+1</g><g>{{GUN:Stone Dome}}+1</g><g>{{GUN:Unicorn Horn}}+1</g><g>{{GUN:Wood Beam}}+1</g><g>{{GUN:Finished Gun}}+5</g>\r\n\r\n<h3>影响{诅咒值}的雕像：</h3>\r\n<g>{{SHRINE:Ammo}}+3.5</g><g>{{SHRINE:Angel}}+1.5</g><g>{{SHRINE:Dice}}有个坏效果是 +5</g><g>{{SHRINE:Hero}}设置为 9</g>\r\n\r\n<h3>其它增加{诅咒值}的情况：</h3>\r\n- 从{{NPC:Cursula}}购买东西（+2.5）（{{SYSTEM:Steal}}是 +1，在这能偷就偷）\r\n- 给{{NPC:Witches}}一把枪（+2）\r\n- 打碎{{SYSTEM:Mirror}}或者打开它的{{SYSTEM:Chest}}（+3.5）\r\n- 从{{ROOM:Shop}}{{SYSTEM:Steal}}东西（+1）\r\n- 获得{{ITEM:Badge}}，警察蜀黍挂掉后跟他对话（+2）\r\n- 使用{{ITEM:Spice}}（第一次使用 +0.5，后面每次使用 +1）\r\n- 同时拥有<g>{{ITEM:Gunknight Helmet}}{{ITEM:Gunknight Armor}}{{ITEM:Gunknight Gauntlet}}{{ITEM:Gunknight Greaves}}</g>，变身为{{SYSTEM:Cormorant}}（+3）\r\n- 站在{{SYSTEM:Cursed Pot}}附近（+1）\r\n- 拾取{{ITEM:Lament Configurum}}产生的枪或道具（+1）\r\n\r\n<h3>减少{诅咒值}的方法：</h3>\r\n- 丢弃带{诅咒值}的枪或道具\r\n- 和{{SHRINE:Cleanse}}对话，清除所有诅咒值（每点花费 5{{PICKUP:Shell}}），诅咒值超过 10 点无法使用\r\n- 在{{SHRINE:Dice}}随机到减少诅咒值的好效果（最多 10 点）\r\n<br/><br/>\r\n{诅咒值}会带进角色的过去关卡'
        }
    },
    "Jammed Enemies": {
        id: 14,
        name: "Jammed Enemies",
        icon: "status/Status_Enemy_Jammed.png",
        locale: {
            name: "诅咒怪",
            tips: "{诅咒怪}是会发出红色和黑色光的怪，移动和射击速度变快，生命值变高，发射红黑色的{诅咒子弹}，造成 1 整颗{{PICKUP:Heart}}的伤害。\r\n诅咒怪通常会掉落更多的{{PICKUP:Shell}}。\r\n{{SYSTEM:Curse}}越高，出现{诅咒怪}的概率越大。",
            notes: "{诅咒怪}是会发出红色和黑色光的怪，移动和射击速度变快，生命值变高，发射红黑色的{诅咒子弹}，造成 1 整颗{{PICKUP:Heart}}的伤害。\r\n诅咒怪通常会掉落更多的{{PICKUP:Shell}}。\r\n{小怪}和{BOSS}都有可能变成{诅咒怪}，{小怪}变成{诅咒怪}后拥有 3 倍的生命值，{BOSS}变成{诅咒怪}后生命值为{原生命值x1.2+100}。\r\n无碰撞伤害的敌人（如变成小鸡、击杀后产生的小型状态）变成{诅咒怪}后，碰撞会造成伤害。\r\n玩家的{{SYSTEM:Curse}}越高，出现{诅咒怪}的概率越大。\r\n诅咒怪被{{GUN:Heck Blaster}}{{SYNERGY:blade}}打到会变回普通状态，当然金钱掉落也会变回普通怪的数值。\r\n{{CHAMBER:Abbey of the True Gun}}{{CHAMBER:Forge}}{{CHAMBER:Bullet Hell}} 的部分敌人变成诅咒怪的概率不受{诅咒值}影响。\r\n年龄大的敌人有更高的概率变成诅咒怪，如：\r\n{{ENEMY:Veteran Bullet Kin}}{{ENEMY:Veteran Shotgun Kin}}{{ENEMY:Blue Bookllet}}{{ENEMY:Green Bookllet}}"
        }
    },
    Jammed: {
        id: 15,
        name: "Jammed",
        locale: {
            name: "诅咒",
            tips: "{诅咒怪}是会发出红色和黑色光的怪，移动和射击速度变快，生命值变高，发射红黑色的{诅咒子弹}，造成 1 整颗{{PICKUP:Heart}}的伤害。\r\n诅咒怪通常会掉落更多的{{PICKUP:Shell}}。\r\n{{SYSTEM:Curse}}越高，出现{诅咒怪}的概率越大。"
        }
    },
    Chest: {
        id: 16,
        name: "Chest",
        locale: {
            name: "宝箱",
            tips: "宝箱可以开出补给、相应品质的枪或道具，上锁的宝箱需要消耗一个{{PICKUP:Key}}来开锁：\r\n{{CHEST:Brown Chest}}{{CHEST:Blue Chest}}{{CHEST:Green Chest}}{{CHEST:Red Chest}}{{CHEST:Black Chest}}{{CHEST:Rainbow Chest}}{{CHEST:Glitch Chest}}{{CHEST:Synergy Chest}}{{CHEST:Rat Chest}}",
            notes: '宝箱可以开出补给、相应品质的枪或道具，游戏中的宝箱有：\r\n{{CHEST:Brown Chest}}{{CHEST:Blue Chest}}{{CHEST:Green Chest}}{{CHEST:Red Chest}}{{CHEST:Black Chest}}{{CHEST:Rainbow Chest}}{{CHEST:Glitch Chest}}{{CHEST:Synergy Chest}}{{CHEST:Rat Chest}}\r\n\r\n可能获得宝箱的场景：\r\n- 出现在{{ROOM:Chest Room}}\r\n- 清空房间后有概率掉落\r\n- 出现在{{ROOM:Secret Room}}\r\n- 触发部分雕像\r\n- 完成{{GAME_MODE:Winchester\'s Game}}\r\n\r\n宝箱出现时可能是上锁或未上锁，上锁的宝箱需要消耗一个{{PICKUP:Key}}来开锁，未上锁的宝箱可以直接打开。\r\n{{ROOM:Chest Room}}里的宝箱一般是上锁状态，可以开出一个道具或者枪。\r\n\r\n每层都会有2个{{ROOM:Chest Room}}，一个开出道具，另一个开出枪。\r\n进入一个有宝箱的房间时，宝箱有概率出现引燃的导火索，燃尽后宝箱爆炸，不会掉落物品。使用产生液体的枪或道具，可以熄灭导火索，避免宝箱爆炸。\r\n攻击可以破坏宝箱，破坏后可能掉落低级物品（如补给或{{ITEM:Junk}}），也可能什么都木有。如果玩家靠得太近，宝箱可能爆炸，对玩家造成伤害。\r\n没有钥匙时破坏宝箱有60%概率掉落{{ITEM:Junk}}，有钥匙时有72%概率掉落{{ITEM:Junk}}。\r\n\r\n宝箱有一定概率变成{{ENEMY:Mimic}}，{{SYSTEM:Curse}}越高概率越大。\r\n\r\n宝箱稀有度从多到少如下：\r\n[["~宝箱","~开出的物品品级"],["{{CHEST:Brown Chest}}","{{QUALITY:D}}\\n可能附加{{SYSTEM:Pickup}}"],["{{CHEST:Blue Chest}}","{{QUALITY:C}}\\n大概率开出道具"],["{{CHEST:Green Chest}}","{{QUALITY:B}}"],["{{CHEST:Red Chest}}","{{QUALITY:A}}"],["{{CHEST:Black Chest}}","{{QUALITY:S}}"],["{{CHEST:Rainbow Chest}}","15%{{QUALITY:S}}+54%{{QUALITY:A}}+31%{{QUALITY:B}}"]]\r\n\r\n宝箱品级有 2 种不同的掉落设定，可以在游戏外通过{游戏菜单 > 选项 > 游戏 > 战利品掉落设定}进行设置\r\n不同关卡掉落的宝箱品质概率如下：\r\n<h3>AG&D更新：</h3>\r\n[["~关卡","~{{QUALITY:D}}","~{{QUALITY:C}}","~{{QUALITY:B}}","~{{QUALITY:A}}","~{{QUALITY:S}}"],["~1","35%","32%","20%","9%","4%"],["~2/隐藏1","10%","37%","40%","9%","4%"],["~3/隐藏2","2%","26%","54%","12.5%","5.5%"],["~4","2%","20%","50%","20%","8%"],["~5","0%","10%","42.5%","35%","12.5%"]]\r\n<h3>原版：</h3>\r\n[["~关卡","~{{QUALITY:D}}","~{{QUALITY:C}}","~{{QUALITY:B}}","~{{QUALITY:A}}","~{{QUALITY:S}}"],["~1","42.5%","35%","15%","5%","2.5%"],["~2/隐藏1","20%","32.5%","35%","9%","3.5%"],["~3/隐藏2","10%","22%","50%","12.5%","5.5%"],["~4","2%","20%","50%","20%","8%"],["~5","0%","10%","42.5%","35%","12.5%"]]'
        }
    },
    Muncher: {
        id: 17,
        name: "Muncher",
        icon: "object/Muncher.png",
        locale: {
            name: "吃枪人",
            tips: "喂 2 把枪给 1 把新枪",
            notes: '喂 2 把枪给 1 把新枪，给的枪的品质一般为喂的 2 把枪的品质范围，小概率（5%）给高一级的枪\\n如喂的是{{QUALITY:D}} + {{QUALITY:B}}，那么给的枪可能是{{QUALITY:D}}{{QUALITY:C}}{{QUALITY:B}}，5% 概率给{{QUALITY:A}}\r\n\r\n{{SYSTEM:Muncher}}不吃无限弹药的枪，如初始枪和{{GUN:Gunther}}{{GUN:Casey}}{{GUN:Dueling Laser}}\r\n\r\n{{SYSTEM:Evil Muncher}}有小概率替换{{SYSTEM:Muncher}}出现在商店\r\n\r\n<h3>特定组合</h3>\r\n某些组合会给特定的枪（喂的顺序无影响）：[["~枪1","~枪2","~结果"],["{{GUN:38 Special}}{{GUN:Colt 1851}}{{GUN:Devolver}}{{GUN:Magnum}}{{GUN:SAA}}{{GUN:Smiley\'s Revolver}}{{GUN:Shades\'s Revolver}}","{{GUN:Crestfaller}}{{GUN:Freeze Ray}}{{GUN:Frost Giant}}{{GUN:Glacier}}{{GUN:Ice Breaker}}","{{GUN:Cold 45}}"],["{{GUN:Crossbow}}{{GUN:Shotbow}}{{GUN:Triple Crossbow}}","{{GUN:Hexagun}}{{GUN:Staff of Firepower}}{{GUN:Unicorn Horn}}{{GUN:Witch Pistol}}","{{GUN:Crescent Crossbow}}"],["{{GUN:Flame Hand}}{{GUN:Megahand}}","{{GUN:AK-47}}{{GUN:M16}}{{GUN:MAC10}}{{GUN:Machine Pistol}}","{{GUN:Machine Fist}}"],["{{GUN:Flame Hand}}{{GUN:Machine Fist}}{{GUN:Megahand}}","{{GUN:Gamma Ray}}{{GUN:Plague Pistol}}{{GUN:Plunger}}{{GUN:Rattler}}{{GUN:Shotgrub}}","{{GUN:Mutation}}"],["{{GUN:Bee Hive}}","{{GUN:RPG}}","{{GUN:Stinger}}"]]'
        }
    },
    "Evil Muncher": {
        id: 18,
        name: "Evil Muncher",
        icon: "object/Evil_Muncher.png",
        locale: {
            name: "邪恶吃枪人",
            tips: "第一次使用时，它会吃掉 10 把枪（可多局游戏分期付款），然后吐出{{GUN:Gunslinger's Ashes}}，并解锁该枪\r\n之后再使用，会吞食随机数量的枪，有 25% 概率给{{QUALITY:S}}品质的枪，75% 概率给{{QUALITY:A}}品质的枪",
            notes: "常见于{{CHAMBER:Bullet Hell}}和骷髅头形状的{{ROOM:Secret Room}}，小概率替换{{SYSTEM:Muncher}}出现在商店\r\n\r\n第一次使用时，它会吃掉 10 把枪（可多局游戏分期付款），然后吐出{{GUN:Gunslinger's Ashes}}，并解锁该枪\r\n之后再使用，会吞食随机数量的枪，有 25% 概率给{{QUALITY:S}}品质的枪，75% 概率给{{QUALITY:A}}品质的枪"
        }
    },
    Mirror: {
        id: 19,
        name: "Mirror",
        icon: "object/Mirror.png",
        icon_size: 128,
        locale: {
            name: "魔镜",
            tips: "出现在一种特殊的房间中（通常叫为{镜子房}），房间内会有一个不可见的、未上锁的{{SYSTEM:Chest}}，镜子里可以看到该宝箱，走到宝箱的大致位置发出交互命令即可打开宝箱。\r\n打开宝箱或者打碎镜子都会增加 3.5 点{{SYSTEM:Curse}}。如果先打碎镜子，宝箱就无法打开了，即使你走到了相应的位置。\r\n- 宝箱可能是{{ENEMY:Mimic}}\r\n- 宝箱可能是{{CHEST:Glitch Chest}}，但没有普通{{CHEST:Glitch Chest}}的错乱动画",
            trivia: "魔镜引用自《哈利·波特与魔法石》中的{厄里斯魔镜（the Mirror of Erised）}，一个未上锁的宝箱将勾起玩家最大的欲望。\r\n打碎镜子增加诅咒值引用自民间传说{打碎镜子将带来七年厄运}（3.5=7 x 0.5）。"
        }
    },
    "Cursed Pot": {
        id: 20,
        name: "Cursed Pot",
        icon: "object/Cursed_Pot.png",
        locale: {
            name: "诅咒壶",
            tips: '以诅咒壶为中心有一个<span style="color:purple"> 紫色</span> 的圆形范围，如果玩家停留在这个范围内太久，诅咒壶会自动破碎，并使玩家增加 1 点{{SYSTEM:Curse}}。\r\n射击和碰撞可以使诅咒壶破碎，打碎诅咒壶会计算击杀数，如果有{{GUN:Polaris}}这类枪记得利用。',
            trivia: "{诅咒壶}引用自《黑暗之魂II（Dark Souls II）》的诅咒坛子"
        }
    },
    Statu: {
        id: 21,
        name: "Statu",
        locale: {
            name: "状态",
            tips: "玩家的状态：\r\n[(~~status/Status_Player_Burn.png)][(~~status/Status_Player_Poison.png)][(~~status/True_curse_status.jpg)]\r\n\r\n敌人的状态：\r\n[(~~status/Status_Enemy_Buffed.png)][(~~status/Status_Enemy_Burn.png)][(~~status/Status_Enemy_Green_Burn.png)][(~~status/Status_Enemy_Poison.png)][(~~status/Status_Enemy_Charm.png)][(~~status/Status_Enemy_Encheesed.png)][(~~status/Status_Enemy_Fear.png)][(~~status/Status_Enemy_Jammed.png)][(~~status/Status_Enemy_Freeze.png)][(~~status/Status_Enemy_Stun.png)][(~~status/Status_Enemy_Weakened.png)]",
            notes: '<h3>玩家的状态：</h3>\r\n<view class="large-icon">[["~状态","~说明"],["~[(~status/Status_Player_Burn.png)]\\n燃烧","如果玩家没有脱离((燃烧))状态，{燃烧图标}会重复读条，每次读条完成，玩家都会损失半颗血{{PICKUP:Half Heart}}。\\n{翻滚}可以降低读条，降到最低即可脱离((燃烧))状态。\\n\\n以下道具和组合可以{免疫}((燃烧))：\\n{{ITEM:Ring of Fire Resistance}}{{ITEM:Hazmat Suit}}{{SYNERGY:Buggin\' Out}}{{SYNERGY:Clearer Guon Stone}}{{SYNERGY:Cryptic Cryptids}}{{SYNERGY:Hotter Than Heck}}"],["~[(~status/Status_Player_Poison.png)]\\n中毒","如果玩家没有脱离((中毒))状态，{中毒图标}会重复读条，每次读条完成，玩家都会损失半颗血{{PICKUP:Half Heart}}。\\n离开毒液和{排水沟}范围，即可脱离((中毒))状态。\\n\\n以下道具可以{免疫}((中毒))：\\n{{ITEM:Monster Blood}}{{ITEM:Bug Boots}}{{ITEM:Clear Guon Stone}}{{ITEM:Gas Mask}}{{ITEM:Hazmat Suit}}"],["~[(~status/True_curse_status.jpg)]\\n诅咒","{诅咒图标}读条完成时，玩家会增加 1 点{{SYSTEM:Curse}}。\\n离开{{SYSTEM:Cursed Pot}}和{排水沟}范围即可脱离读条状态。"]]</view>\r\n\r\n- 当拥有((飞行))能力时，可以避免接触到地面，相当于间接免疫((燃烧))和((中毒))：\r\n{{ITEM:Wax Wings}}{{ITEM:Jetpack}}{{ITEM:Ring of Ethereal Form}}{{GUN:Balloon Gun}}{{SYNERGY:Contrail}}\r\n- {{ITEM:Sponge}}可以清除地面状态，相当于间接免疫((燃烧))和((中毒))\r\n- 手持{{GUN:Siren}}时，免疫((燃烧))和((中毒))\r\n\r\n<h3>敌人的状态：</h3>\r\n<view class="large-icon">[["~状态","~说明"],["~[(~status/Status_Enemy_Buffed.png)]\\n鸡血","敌人的生命值和速度显著提升，由{{ENEMY:Gunsinger}}{{ENEMY:Aged Gunsinger}}提供该状态，所以碰到这俩货，优先撸死它们"],["~[(~status/Status_Enemy_Burn.png)]\\n燃烧","持续对敌人造成伤害"],["~[(~status/Status_Enemy_Green_Burn.png)]\\n持续燃烧","只有一些{{SYSTEM:Synergy}}可以发出该火焰，对小怪造成永久燃烧，对BOSS比普通燃烧持续更久，可以对免疫普通燃烧的怪造成伤害（如{{ENEMY:Skullet}}）。\\n{{SYNERGY:Firing With Flair}}{{SYNERGY:Maximize Spell}}{{SYNERGY:Pitch Perfect}}{{SYNERGY:Special Reserve}}可以造成该效果。"],["~[(~status/Status_Enemy_Poison.png)]\\n中毒","持续对敌人造成伤害"],["~[(~status/Status_Enemy_Charm.png)]\\n魅惑","被魅惑的敌人不会主动攻击玩家，而是帮玩家攻击其它敌人，如果没有其它敌人，被魅惑的敌人会停止攻击。\\n被魅惑的敌人发出的子弹，会对玩家造成伤害，即使不是朝玩家攻击的。\\n被魅惑的{{ENEMY:Gunsinger}}不会给玩家加Buff。\\nBOSS不会被魅惑。\\n{{ENEMY:Lore Gunjurer}}或BOSS召唤的小怪可以被魅惑。"],["~[(~status/Status_Enemy_Encheesed.png)]\\n奶酪凝固","降低敌人移速，不断叠加最终会使其((凝固))无法行动。被凝固的敌人死亡会留下一大摊奶酪，站在奶酪上的敌人会被附加奶酪状态。\\nBOSS只会被减速，不会被凝固。\\n只有{{GUN:Elimentaler}}{{ITEM:Resourceful Sack}}和奶酪凝固死亡的敌人留下的奶酪，可以造成该效果。"],["~[(~status/Status_Enemy_Fear.png)]\\n怕怕","让敌人远离玩家，{{GUN:Stone Dome}}{{GUN:JK-47}}可以造成该效果。"],["~[(~status/Status_Enemy_Jammed.png)]\\n诅咒","敌人的生命值和移速显著提升。\\n{{GUN:Heck Blaster}}击中被诅咒的敌人或子弹，会使它们恢复正常状态。"],["~[(~status/Status_Enemy_Slow.png)]\\n减速","降低敌人移速，{{GUN:Triple Crossbow}}{{SYNERGY:Tears of Blood}}{{SYNERGY:Chance On Hit}}{{SYNERGY:I need scissors! 61!}}可以造成该效果。"],["~[(~status/Status_Enemy_Freeze.png)]\\n冰冻","降低敌人移速，不断叠加最终会使其((冻结))无法行动。冰冻状态会随时间逐渐恢复。\\n冻结的敌人一定时间后会发出“嘭”的一声，脱离冻结状态并造成大量伤害。攻击或翻滚过冻结的敌人，可以粉碎它们。\\nBOSS只会被减速，不会被冻结，且会逐渐产生抵抗，减速效果越来越不明显。"],["~[(~status/Status_Enemy_Stun.png)]\\n晕眩","晕眩的敌人会无法行动。\\nBOSS不会被晕眩。"],["~[(~status/Status_Enemy_Weakened.png)]\\n虚弱","敌人的生命值显著减少。只有{{SYNERGY:The Red Hood}}可以造成该效果。"]]</view>\r\n- 敌人可以同时处于((冰冻))和((燃烧))状态\r\n- 粉碎((冻结))状态的敌人，通常可以避免它们的死亡效果，如爆炸、生成液体、分裂成小怪等。'
        }
    },
    Trap: {
        id: 22,
        name: "Trap",
        locale: {
            name: "陷阱",
            tips: "[(~~trap/Chandelier.png)][(~~trap/Sawblade.png)][(~~trap/Spikes.png)][(~~trap/Rolling_Spikes.png)][(~~trap/Fire.png)][(~~trap/Rotating_Fire.png)][(~~trap/Trapdoor.png)][(~~trap/Boulder.png)][(~~trap/Turret.png)][(~~trap/Minecart_Turret.png)][(~~trap/Crush.png)][(~~trap/Fire_ring.png)]",
            notes: '<view class="large-icon">[["~陷阱","~说明"],["~[(~~trap/Chandelier.png)]\\n吊灯","吊灯只出现在{{CHAMBER:Keep of the Lead Lord}}，悬挂在天花板，连接着房间内墙上的一个开关，射击开关或者和开关互动，吊灯会掉下来，对掉落点的物体造成伤害和击退效果"],["~[(~~trap/Sawblade.png)]\\n锯片","高速旋转的锯片在一面墙体上绕圈运动，对接触的玩家造成伤害"],["~[(~~trap/Spikes.png)]\\n地刺","当玩家踩在地刺陷阱上，短暂延迟后会有钉子刺出，对玩家造成伤害"],["~[(~~trap/Rolling_Spikes.png)]\\n滚动钉桩","滚动钉桩会在固定轨迹上来回滚动，对接触的玩家或敌人造成伤害和击退效果"],["~[(~~trap/Fire.png)]\\n喷火孔","喷火孔会定期喷出火焰，对玩家造成伤害"],["~[(~~trap/Rotating_Fire.png)]\\n旋转火球串","只出现在{{CHAMBER:Forge}}，两串火球连接着骷髅头并绕着骷髅头旋转"],["~[(~~trap/Trapdoor.png)]\\n活板地洞","当玩家踩在活板上面，短暂延迟后活板会自动打开，使玩家掉入坑中造成伤害"],["~[(~~trap/Boulder.png)]\\n落石","只出现在{{CHAMBER:Black Powder Mine}}，和吊灯类似，房间内的地上会有一些开关，射击开关或者和开关互动，会有石头从天上落下，掉落在{红色X} 标记的位置，对下方的玩家和敌人造成伤害和击退效果"],["~[(~~trap/Turret.png)]\\n炮台","炮台会定期像前方射出子弹"],["~[(~~trap/Minecart_Turret.png)]\\n矿车炮台","只出现在{{CHAMBER:Black Powder Mine}}，沿着铁轨移动并不断朝玩家射击，清空房间后静止。可以被{爆炸}效果破坏。"],["~[(~~trap/Crush.png)]\\n机关墙","走进陷阱范围，两块墙会合在一起，造成伤害"],["~[(~~trap/Fire_ring.png)]\\n一圈火球","只出现在{{CHAMBER:Bullet Hell}}，骷髅头定期发出一圈火球，类似于{{ENEMY:Muzzle Wisp}}"]]<view>'
        }
    },
    Companion: {
        id: 23,
        name: "Companion",
        locale: {
            name: "同伴",
            tips: "这些道具可以召唤小跟班：\r\n{{ITEM:Baby Good Mimic}}{{ITEM:Badge}}{{ITEM:Blank Companion's Ring}}{{ITEM:Chicken Flute}}{{ITEM:Clown Mask}}{{ITEM:Dog}}{{ITEM:Owl}}{{ITEM:Pig}}{{ITEM:R2G2}}{{ITEM:Ser Junkan}}{{ITEM:Space Friend}}{{ITEM:Super Space Turtle}}{{ITEM:Turkey}}{{ITEM:Wingman}}{{ITEM:Wolf}}{{ITEM:Baby Good Shelleton}}{{ITEM:Ticket}}{{ITEM:Turtle Problem}}",
            notes: "这些道具可以召唤小跟班：\r\n{{ITEM:Baby Good Mimic}}{{ITEM:Badge}}{{ITEM:Blank Companion's Ring}}{{ITEM:Chicken Flute}}{{ITEM:Clown Mask}}{{ITEM:Dog}}{{ITEM:Owl}}{{ITEM:Pig}}{{ITEM:R2G2}}{{ITEM:Ser Junkan}}{{ITEM:Space Friend}}{{ITEM:Super Space Turtle}}{{ITEM:Turkey}}{{ITEM:Wingman}}{{ITEM:Wolf}}{{ITEM:Baby Good Shelleton}}{{ITEM:Ticket}}{{ITEM:Turtle Problem}}"
        }
    },
    Cormorant: {
        id: 24,
        name: "Cormorant",
        icon: "data/Cormorant.png",
        locale: {
            name: "枪骑士",
            tips: "同时拥有下面四个道具，会变身为{枪骑士}：\r\n<g>{{ITEM:Gunknight Helmet}}{{ITEM:Gunknight Armor}}{{ITEM:Gunknight Gauntlet}}{{ITEM:Gunknight Greaves}}</g>\r\n+3 {{SYSTEM:Curse}}，所有枪支取消装弹时间。\r\n每获得一个枪骑士套装部件，都会增加其它部件出现的概率，集齐后部件不可丢弃。\r\n{枪骑士}的效果会使{{GUN:Blasphemy}}的{双重装弹}无法使用。"
        }
    },
    Serpent: {
        id: 25,
        name: "Serpent",
        icon: "data/Serpent.png",
        locale: {
            name: "小蛇",
            tips: "可在{{CHAMBER:Resourceful Rat's Lair}}的隐藏房遇到，或者把{{ITEM:Weird Egg}}丢到火上也可孵化出来。\r\n喂食 4 个物品（丢给它）后苏醒。\r\n小蛇苏醒后会跟随玩家抵挡子弹，在进入{{BOSS:High Dragun}}的 BOSS 房时叛变，跟在枪龙旁边朝玩家发射子弹。枪龙第二阶段会抓住小蛇，变成{{SYSTEM:Advanced Dragun}}，进入第三阶段。",
            notes: "在{{CHAMBER:Resourceful Rat's Lair}}击败{{BOSS:Resourceful Rat}}后的奖励房会连接着一个{{ROOM:Secret Room}}，该房内有 2 个上锁的门，需要使用{{PICKUP:Rat Key}}打开，门后有一条小蛇。\r\n如果拥有{{ITEM:Weird Egg}}，把蛋丢到火上，也可以孵化出这条小蛇。\r\n需要喂它 4 个物品（丢给它）来唤醒它。\r\n- 如果有{{ITEM:Junk}}或{{ITEM:Glass Guon Stone}}，拿来喂很划算\r\n- 它不吃{{ITEM:Busted Television}}\r\n- 如果干掉了{{BOSS:Resourceful Rat}}，它的尸体也可以喂小蛇\r\n小蛇苏醒后会跟随玩家抵挡子弹，在进入{{BOSS:High Dragun}}的 BOSS 房时叛变，跟在枪龙旁边朝玩家发射子弹。枪龙第二阶段会抓住小蛇，变成{{SYSTEM:Advanced Dragun}}，进入第三阶段。"
        }
    },
    "Advanced Dragun": {
        id: 26,
        name: "Advanced Dragun",
        locale: {
            name: "金枪龙",
            tips: "带着{{SYSTEM:Serpent}}进入{{BOSS:High Dragun}}BOSS 房，小蛇会叛变，跟在枪龙旁边朝玩家发射子弹。枪龙第二阶段会抓住小蛇，变成金枪龙，进入第三阶段。",
            notes: "带着{{SYSTEM:Serpent}}进入{{BOSS:High Dragun}}BOSS 房，小蛇会叛变，跟在枪龙旁边朝玩家发射子弹。枪龙第二阶段会抓住小蛇，变成金枪龙，进入第三阶段。"
        }
    },
    "Rescue NPCs": {
        id: 27,
        name: "Rescue NPCs",
        locale: {
            name: "解救NPC",
            tips: "游戏中有许多不同功能的NPC，如商人、解锁游戏模式等。其中部分NPC一开始被囚禁在{{ROOM:Gungeon}}，需要在牢房所在的关卡获得{{PICKUP:Cell Key}}来解救他们。具体请查看NPC的详细信息。"
        }
    },
    "Unlock Guns And Items": {
        id: 28,
        name: "Unlock Guns And Items",
        locale: {
            name: "解锁枪和道具",
            tips: "大部分枪和道具需要解锁后才可以在{{ROOM:Gungeon}}中正常获得（打开宝箱、BOSS奖励、商人出售）。\r\n多数枪和道具是在{{PAGE:The Breach}}的不同NPC处通过{{PICKUP:Hegemony Credit}}购买解锁，部分是特殊的解锁条件，如完成{{GAME_MODE:Hunting Quests}}等，具体请查看枪和道具的详细信息。"
        }
    },
    "Unlock Gungeoneers": {
        id: 29,
        name: "Unlock Gungeoneers",
        locale: {
            name: "解锁角色",
            tips: "有部分隐藏角色需要满足一定条件才会解锁，具体请查看角色的详细信息：\r\n<g>{{GUNGEONEER:The Bullet}}{{GUNGEONEER:The Robot}}{{GUNGEONEER:The Paradox}}{{GUNGEONEER:The Gunslinger}}</g>"
        }
    },
    "The Bullet That Can Kill The Past's Parts": {
        id: 30,
        name: "The Bullet That Can Kill The Past's Parts",
        locale: {
            name: "抹掉过去子弹的部件",
            tips: "已收集的{{ITEM:The Bullet That Can Kill The Past}}的部件会摆放在这里：\r\n<g>{{ITEM:Prime Primer}}{{ITEM:Arcane Gunpowder}}{{ITEM:Planar Lead}}{{ITEM:Obsidian Shell Casing}}</g>\r\n\r\n击败{{SYSTEM:Advanced Dragun}}后，台子会变成金色龙头。",
            notes: "已收集的{{ITEM:The Bullet That Can Kill The Past}}的部件会摆放在这里：\r\n<g>{{ITEM:Prime Primer}}{{ITEM:Arcane Gunpowder}}{{ITEM:Planar Lead}}{{ITEM:Obsidian Shell Casing}}</g>\r\n\r\n击败{{SYSTEM:Advanced Dragun}}后，台子会变成金色龙头。"
        }
    },
    "co-op": {
        id: 31,
        name: "co-op",
        locale: {
            name: "双人模式",
            tips: "和{{PAGE:The Breach}}角色区旁边的{{GUNGEONEER:The Cultist}}对话即可开启双人模式。\r\n双人模式下，敌人的血量 +40%",
            notes: "和{{PAGE:The Breach}}角色区旁边的{{GUNGEONEER:The Cultist}}对话即可开启双人模式。\r\n双人模式下：\r\n- 敌人的血量 +40%\r\n- 2 个角色的枪和道具可以交易（丢出来给另外一个角色捡）\r\n- 被动道具的效果只对拥有的角色生效\r\n- {{SYSTEM:Synergy}}可以跨角色生效，如 1P 有组合的一部分，2P 有另一部分，也能形成组合\r\n\r\n<h3>角色死亡：</h3>\r\n死亡的角色会变成蓝色幽灵状态，可以移动、掀桌，其它操作会表现为小范围的{{PICKUP:Blank}}效果，触发后角色幽灵变成灰色，需要等几秒钟慢慢恢复成蓝色，才能重新触发。\r\n角色死亡时，所有的枪和道具会掉出来，队友记得捡，不然会被{{NPC:Resourceful Rat}}偷走。\r\n\r\n<h3>复活死亡角色的 3 个方法：</h3>\r\n- 任一角色死亡，当前关卡中所有未打开的{{SYSTEM:Chest}}都会变成{{CHEST:Revival Chest}}，打开无需{{PICKUP:Key}}，死亡的队友会从里面中跳出来。队友复活后，所有宝箱恢复原状\r\n- 打败关卡BOSS\r\n- 使用{{ITEM:Friendship Cookie}}\r\n死亡复活的角色为满血状态。\r\n\r\n<h3>说明</h3>\r\n- 在{{GAME_MODE:Winchester's Game}}中，死亡的角色可以用身体挡住移动的障碍方块。奖励的箱子会变成{{CHEST:Revival Chest}}，如果通过其它方式复活队友，该箱子恢复原状后为上锁状态\r\n- 如果有角色死亡，打败{{BOSS:Resourceful Rat}}后的 4 个{{CHEST:Rat Chest}}都可以打开，即使没有{{PICKUP:Rat Key}}\r\n- 在{{GUNGEONEER:The Cultist}}的{{SYSTEM:Kill The Past}}关卡中，一个角色可以把底座上的 2 把枪都拾取，后拾取的枪无法使用也无法丢出，这会导致另一个角色没有枪"
        }
    },
    Achievement: {
        id: 32,
        name: "Achievement",
        locale: {
            name: "成就",
            tips: "五十多个成就等着你来完成！",
            notes: '<view class="large-icon">[["~图标","~名字","~条件"],["~[(~~achievement/Achievement_Gungeon_Acolyte.png)]","枪牢新手","完成教学关卡{{CHAMBER:Hall of Knowledge}}"],["~[(~~achievement/Achievement_I_Knew_Someone_Would_Do_It.png)]","我早知道有人会这么干","把桌子推到坑里"],["~[(~~achievement/Achievement_Biggest_Wallet.png)]","最大钱包","拥有 300{{PICKUP:Shell}}"],["~[(~~achievement/Achievement_Demolition_Man.png)]","摧毁狂","通过翻滚击杀((冰冻))状态的敌人"],["~[(~~achievement/Achievement_Patron.png)]","主顾","累计在{{PAGE:The Breach}}消费 100{{PICKUP:Hegemony Credit}}"],["~[(~~achievement/Achievement_Pit_Lord.png)]","坑王","将 100 个敌人推到坑里"],["~[(~~achievement/Achievement_Sworn_Gun.png)]","不共戴天之枪","击败{{NPC:Blockner}}"],["~[(~~achievement/Achievement_Hedge_Slinger.png)]","赌徒神手","赢得 4 次{{GAME_MODE:King\'s Game}}"],["~[(~~achievement/Achievement_Cartographer%27s_Assistant.png)]","制图助手","帮助{{NPC:The Lost Adventurer}}完成前5层的地图，回到{{PAGE:The Breach}}和他对话"],["~[(~~achievement/Achievement_Trickshot.png)]","花式射击","在{{GAME_MODE:Winchester\'s Game}}中完成 3 次{全部射中}"],["~[(~~achievement/Achievement_Weird_Tale.png)]","怪诞奇谈","完成全部{{GAME_MODE:Hunting Quests}}"],["~[(~~achievement/Achievement_Re-Armed.png)]","重新武装","完成运送{{NPC:Ox}}手臂任务，具体见{{NPC:Ox and Cadence}}"],["~[(~~achievement/Achievement_Not_Just_A_Box.png)]","不只是箱子","在{{ENEMY:Mimic}}现出原形前先攻击它"],["~[(~~achievement/Achievement_Rage_Mode.png)]","狂怒模式","掀桌 500 次"],["~[(~~achievement/Achievement_Day_Ruiner.png)]","糟蹋他的一天","用{{GUN:Mailbox}}的最后一颗包裹子弹让BOSS金光闪闪，然后击败它"],["~[(~~achievement/Achievement_Going_Down.png)]","往下","修好{{CHAMBER:Gungeon Proper}}的{{ROOM:Shortcuts}}"],["~[(~~achievement/Achievement_Going_Downer.png)]","更往下","修好{{CHAMBER:Black Powder Mine}}的{{ROOM:Shortcuts}}"],["~[(~~achievement/Achievement_Going_Downest.png)]","往最下","修好{{CHAMBER:Hollow}}的{{ROOM:Shortcuts}}"],["~[(~~achievement/Achievement_Last_Stop.png)]","最后一站","修好{{CHAMBER:Forge}}的{{ROOM:Shortcuts}}"],["~[(~~achievement/Achievement_Grate_Hall.png)]","Grate大厅","进入{{CHAMBER:Oubliette}}"],["~[(~~achievement/Achievement_Reverence_for_the_Dead.png)]","敬畏死亡","进入{{CHAMBER:Abbey of the True Gun}}"],["~[(~~achievement/Achievement_Lion_Leap.png)]","狮子飞跃","通关后在通往{{GUN:The Gun That Can Kill The Past}}那条路上（界面上没有血量等）掉下深渊"],["~[(~~achievement/Achievement_The_Password.png)]","通关密语","进入{{ROOM:Demon Face}}"],["~[(~~achievement/Achievement_Great_Hall.png)]","大堂","集齐{{PAGE:The Breach}}的所有NPC"],["~[(~~achievement/Achievement_Rider.png)]","司机","乘坐矿车时击杀 100 个敌人（最蛋疼的成就）"],["~[(~~achievement/Achievement_Beast_Master.png)]","野兽大师","完成{{GAME_MODE:Beastmode}}"],["~[(~~achievement/Achievement_Woodsie_Lord.png)]","义贼","{{SYSTEM:Steal}} 10 次"],["~[(~~achievement/Achievement_Money_Pit.png)]","钱坑","通过落下的吊灯[(~~trap/Chandelier.png)]击杀 100 个敌人吊灯只出现在{{CHAMBER:Keep of the Lead Lord}}"],["~[(~~achievement/Achievement_Time_Paradox.png)]","时间悖论","在角色的过去任务中死亡，见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Slayer.png)]","屠杀者","击败{{BOSS:High Dragun}}"],["~[(~~achievement/Achievement_Gunsmith.png)]","枪匠","解锁{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Double_Jeopardy.png)]","双重审判原则","完成{{GUNGEONEER:The Convict}}的过去任务，详情见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Deadliest_Game.png)]","致命游戏","完成{{GUNGEONEER:The Hunter}}的过去任务，详情见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Squad_Captain.png)]","小队队长","完成{{GUNGEONEER:The Marine}}的过去任务，详情见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Wingman.png)]","操舵手","完成{{GUNGEONEER:The Pilot}}的过去任务，详情见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Historian.png)]","历史学家","完成四个基础角色的过去任务，详情见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Hero_of_Gun.png)]","枪的英雄","完成{{GUNGEONEER:The Bullet}}的过去任务，详情见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Terminated.png)]","终止","完成{{GUNGEONEER:The Robot}}的过去任务，详情见{{ITEM:The Bullet That Can Kill The Past}}"],["~[(~~achievement/Achievement_Castle_Crasher.png)]","城堡毁灭者","完成{{CHAMBER:Keep of the Lead Lord}}50次"],["~[(~~achievement/Achievement_Dungeon_Diver.png)]","地牢潜入者","完成{{CHAMBER:Gungeon Proper}}40次"],["~[(~~achievement/Achievement_Mine_Master.png)]","矿坑大师","完成{{CHAMBER:Black Powder Mine}}30次"],["~[(~~achievement/Achievement_Hollowed_Out.png)]","掏空","完成{{CHAMBER:Hollow}}20次"],["~[(~~achievement/Achievement_Forger.png)]","锻工","完成{{CHAMBER:Forge}}10次"],["~[(~~achievement/Achievement_Beep.png)]","滴！","解锁{{GUNGEONEER:The Robot}}"],["~[(~~achievement/Achievement_Case_Closed.png)]","结案","解锁{{GUNGEONEER:The Bullet}}"],["~[(~~achievement/Achievement_Gungeon_Master.png)]","枪牢大师","通关{{CHAMBER:Bullet Hell}}"],["~[(~~achievement/Achievement_Exorcist.png)]","驱魔师","击败一个{{SYSTEM:Jammed}}BOSS"],["~[(~~achievement/Achievement_Gun_Game.png)]","枪游","完成{{GAME_MODE:Blessing Mode}}"],["~[(~~achievement/Achievement_Challenger.png)]","挑战者号","完成{{GAME_MODE:Challenge Mode}}"],["~[(~~achievement/Achievement_Jammed.png)]","封困","{{SYSTEM:Curse}}到达 10 点，引出{{ENEMY:Lord of the Jammed}}"],["~[(~~achievement/Achievement_Lead_God.png)]","铅神","在一局游戏中获得 5 个{{SYSTEM:Master Round}}（无伤击败BOSS获得）"],["~[(~~achievement/Achievement_Advanced_Slayer.png)]","高级的杀手","打败{{SYSTEM:Advanced Dragun}}"],["~[(~~achievement/Achievement_Resourceful.png)]","足智多谋","打赢{{BOSS:Resourceful Rat}}第三阶段"],["~[(~~achievement/Achievement_Sledge-Dog.png)]","雪橇犬","完成{{GAME_MODE:Turbo Mode}}"]]</view>'
        }
    },
    "DPS cap": {
        id: 33,
        name: "DPS cap",
        locale: {
            name: "BOSS每秒伤害上限",
            tips: "为避免玩家伤害太高，BOSS被很快打败，系统给BOSS设定了DPS上限（每秒伤害上限）。\r\n\r\n各关卡BOSS的DPS上限为：\r\n- 关卡1/隐藏1：30\r\n- 关卡2/隐藏2：42\r\n- 关卡3：60\r\n- 关卡4：70\r\n- 关卡5：78\r\n- 关卡6：80",
            notes: '为避免玩家伤害太高，BOSS被很快打败，系统给BOSS设定了DPS上限（每秒伤害上限），就算枪的伤害或射速很高，也难以在短时间内击败BOSS。\r\n\r\n各关卡BOSS的DPS上限为：\r\n[["~关卡","~DPS上限"],["{{CHAMBER:Keep of the Lead Lord}}\\n{{CHAMBER:Oubliette}}","30"],["{{CHAMBER:Gungeon Proper}}\\n{{CHAMBER:Abbey of the True Gun}}","42"],["{{CHAMBER:Black Powder Mine}}","60"],["{{CHAMBER:Hollow}}","70"],["{{CHAMBER:Forge}}","78"],["{{CHAMBER:Bullet Hell}}","80"]]\r\n\r\n- DPS上限以 3 秒为单位\r\n- 单次射击最多造成 3 倍DPS上限的伤害\r\n- {{GUN:Yari Launcher}}{{GUN:Makeshift Cannon}}{{GUN:Glass Cannon}}可以无视DPS上限\r\n- 当一颗子弹的伤害 >1000 时，无视DPS上限\r\n- {{GAME_MODE:Boss Rush}}没有DPS上限限制\r\n- {{SYSTEM:co-op}}时DPS上限增加 70%'
        }
    },
    "Special Room": {
        id: 34,
        name: "Special Room",
        locale: {
            name: "特殊房间",
            notes: "[(~data/Oubliette_Entrance.jpg)]\r\n隐藏关卡相关，出现在{{CHAMBER:Keep of the Lead Lord}}，详情见{{CHAMBER:Oubliette}}\r\n<hr/>\r\n[(~data/Abbey_Entrance.jpg)]\r\n隐藏关卡相关，出现在{{CHAMBER:Gungeon Proper}}，详情见{{CHAMBER:Abbey of the True Gun}}\r\n<hr/>\r\n[(~data/RatsLair_Entrance.jpg)]\r\n隐藏关卡相关，出现在{{CHAMBER:Black Powder Mine}}，详情见{{CHAMBER:Resourceful Rat's Lair}}\r\n<hr/>\r\n[(~data/secret_chamber_4.jpg)]\r\n隐藏关卡相关，出现在{{CHAMBER:Hollow}}，详情见{{CHAMBER:R&G Dept.}}\r\n<hr/>\r\n[(~data/Arcane_Gunpowder_Room.jpg)]\r\n{{ITEM:The Bullet That Can Kill The Past}}相关，出现在{{CHAMBER:Black Powder Mine}}，详情见{{ITEM:Arcane Gunpowder}}\r\n<hr/>\r\n[(~data/Planar_Lead_Room.jpg)]\r\n{{ITEM:The Bullet That Can Kill The Past}}相关，出现在{{CHAMBER:Hollow}}，详情见{{ITEM:Planar Lead}}"
        }
    },
    "A Farewell to Arms Update": {
        id: 35,
        name: "A Farewell to Arms Update",
        locale: {
            name: "最后的更新",
            notes: '4月5日官方放出了最后一个免费 DLC“告别武器”，新增了以下内容：\r\n\r\n<h3>新角色</h3>\r\n<g>{{GUNGEONEER:The Paradox}}{{GUNGEONEER:The Gunslinger}}</g>\r\n\r\n<h3>新枪</h3>\r\n<g>{{GUN:3rd Party Controller}}{{GUN:Chamber Gun}}{{GUN:Evolver}}{{GUN:The Fat Line}}{{GUN:Finished Gun}}{{GUN:Glass Cannon}}{{GUN:Gunderfury}}{{GUN:GuNNER}}{{GUN:High Kaliber}}{{GUN:JK-47}}{{GUN:Knight\'s Gun}}{{GUN:Kruller Glaive}}{{GUN:The Predator}}{{GUN:Really Special Lute}}{{GUN:Slinger}}{{GUN:Sunlight Javelin}}{{GUN:Teapot}}{{GUN:Tetrominator}}{{GUN:Trank Gun}}{{GUN:Triple Gun}}{{GUN:Void Core Cannon}}{{GUN:Windgunner}}</g>\r\n\r\n<h3>新道具</h3>\r\n<g>{{ITEM:Baby Good Shelleton}}{{ITEM:Blank Bullets}}{{ITEM:Cat Bullet King Throne}}{{ITEM:Katana Bullets}}{{ITEM:Lich\'s Eye Bullets}}{{ITEM:Magazine Rack}}{{ITEM:Orbital Bullets}}{{ITEM:Scouter}}{{ITEM:Shadow Clone}}{{ITEM:Sprun}}{{ITEM:Table Tech Heat}}{{ITEM:Table Tech Shotgun}}{{ITEM:Ticket}}{{ITEM:Turtle Problem}}</g>\r\n\r\n<h3>新关卡</h3>\r\n{{CHAMBER:R&G Dept.}}\r\n\r\n<h3>新模式</h3>\r\n{{GAME_MODE:Rainbow Mode}}\r\n\r\n<h3>新雕像</h3>\r\n{{SHRINE:Beholster}}\r\n\r\n<hr/>\r\n\r\n调整：\r\n\r\n<h3>枪</h3>\r\n[["{{GUN:Betrayer\'s Shield}}","伤害 <span style=\'color:green\'>6 → 7</span>"],["{{GUN:Big Shotgun}}","子弹容量 <span style=\'color:green\'>50 → 70</span>"],["{{GUN:Charge Shot}}","弹夹容量 <span style=\'color:green\'>1 → 5</span>\\n子弹容量 <span style=\'color:green\'>50 → 75</span>"],["{{GUN:Crescent Crossbow}}","子弹容量 <span style=\'color:green\'>100 → 150</span>"],["{{GUN:Dark Marker}}","子弹容量 <span style=\'color:green\'>200 → 250</span>\\n伤害 <span style=\'color:green\'>8 → 13.5</span>"],["{{GUN:Deck4rd}}","子弹容量 <span style=\'color:green\'>40 → 60</span>"],["{{GUN:Devolver}}","只会把敌人退化成{{ENEMY:Arrowkin}}"],["{{GUN:Dragunfire}}","伤害 <span style=\'color:green\'>5 → 6.5</span>\\n带((穿透))效果"],["{{GUN:Grasschopper}}","子弹爆炸时会产生小范围{{PICKUP:Blank}}效果"],["{{GUN:Grenade Launcher}}","子弹容量 <span style=\'color:green\'>25 → 60</span>"],["{{GUN:Laser Lotus}}","子弹容量 <span style=\'color:green\'>100 → 150</span>"],["{{GUN:Old Goldie}}","子弹容量 <span style=\'color:green\'>70 → 150</span>"],["{{GUN:Plunger}}","站在毒液上装弹回满弹药"],["{{GUN:RUBE-ADYNE MK.II}}","伤害 <span style=\'color:green\'>8 → 10</span>"],["{{GUN:Rubenstein\'s Monster}}","伤害 <span style=\'color:green\'>7 → 8</span>"],["{{GUN:Silencer}}","伤害 <span style=\'color:red\'>13 → 10</span>"],["{{GUN:Starpew}}","弹夹容量 <span style=\'color:green\'>1 → 100</span>\\n蓄力更快"],["{{GUN:The Emperor}}","伤害 <span style=\'color:red\'>7 → 5.6</span>"],["{{GUN:Thunderclap}}","装弹时对周围的敌人造成伤害"],["{{GUN:Trident}}","弹夹容量 <span style=\'color:green\'>6 → 10</span>\\n蓄力更快"],["{{GUN:VertebraeK-47}}","子弹容量 <span style=\'color:green\'>250 → 300</span>"],["{{GUN:Vulcan Cannon}}","伤害 <span style=\'color:green\'>4 → 5</span>\\n弹夹容量 <span style=\'color:green\'>600 → 900</span>\\n子弹容量 <span style=\'color:green\'>800 → 900</span>"],["{{GUN:Zorgun}}","弹夹容量 <span style=\'color:red\'>30 → 20</span>\\n子弹容量 <span style=\'color:green\'>300 → 350</span>"]]\r\n\r\n<h3>道具</h3>\r\n[["{{ITEM:Boomerang}}","冷却时间大幅缩短"],["{{ITEM:Bottle}}","除了血量和弹药，也可以存储其它{{SYSTEM:Pickup}}"],["{{ITEM:Box}}","激活时射击会造成双倍伤害"],["{{ITEM:Devolver Rounds}}","只会把敌人退化成{{ENEMY:Arrowkin}}"],["{{ITEM:Full Metal Jacket}}","获得时增加 1 个{{PICKUP:Armor}}"],["{{ITEM:Gunknight Helmet}}","获得时增加 2 个{{PICKUP:Armor}}而不是 1 个"],["{{ITEM:Portable Turret}}","生命值增加"],["{{ITEM:Ruby Bracelet}}","带给{{NPC:Blacksmith}}可以获得永久加强"],["{{ITEM:Teleporter Prototype}}","如果传送到有敌人的房间，会随机秒杀 1 个敌人"],["{{ITEM:Orange Guon Stone}}","伤害 <span style=\'color:green\'>3 → 5</span>"]]\r\n\r\n<h3>品质</h3>\r\n[["{{ITEM:Shock Rounds}}","{{QUALITY:S}}→{{QUALITY:A}}"],["{{ITEM:Book of Chest Anatomy}}","{{QUALITY:B}}→{{QUALITY:C}}"],["{{ITEM:Green Guon Stone}}","{{QUALITY:S}}→{{QUALITY:A}}"],["{{ITEM:Napalm Strike}}","{{QUALITY:B}}→{{QUALITY:C}}"],["{{ITEM:Clear Guon Stone}}","{{QUALITY:B}}→{{QUALITY:D}}"]]\r\n\r\n<h3>其它</h3>\r\n- 杀死{{ENEMY:Pedestal Mimic}}{{ENEMY:Wall Mimic}}会额外掉落一个物品\r\n- 调高了 BOSS 的 DPS 上限，可以更快打败 BOSS\r\n- {{ROOM:Gungeon}}里 NPC 和雕像的房间有特殊的 BGM\r\n- 穿着{{SYSTEM:Kill The Past}}获得的特殊皮肤{{SYSTEM:Kill The Past}}，可以解锁角色初始枪的特殊皮肤\r\n- BOSS 的血槽挡到角色时会半透明\r\n- 调低了{{GUN:Vorpal Gun}}{{ITEM:Vorpal Bullets}}暴击时闪瞎眼的亮度\r\n- 调低了{{GUN:Bullet Bore}}钻头吵死人的声音\r\n- 支付{{SYSTEM:Heart Container}}的雕像，{{GUNGEONEER:The Robot}}可以用 2 个{{PICKUP:Armor}}代替\r\n- {{CHEST:Red Chest}}开出饭盒时会额外补偿 1 个{{PICKUP:Key}}：\r\n<g>{{ITEM:Heart Holster}}{{ITEM:Heart Lunchbox}}{{ITEM:Heart Locket}}{{ITEM:Heart Bottle}}{{ITEM:Heart Purse}}</g>\r\n- 调高了出现特殊房间的概率（{{NPC:Witches}}{{ROOM:Demon Face}}{{SHRINE:Cleanse}}）\r\n- {{ITEM:Dog}}可以撸狗了！可以撸狗了！可以撸狗了！\r\n\r\n<hr/>\r\n{感谢游玩！Thanks For Playing!}'
        }
    },
    "Super Punch Star": {
        id: 36,
        name: "Super Punch Star",
        icon: "boss_fight/Resourceful_Rat_star.png",
        icon_size: 32,
        locale: {
            name: "超级拳星数",
            tips: "{{BOSS:Resourceful Rat}}拳击阶段，老鼠发黄光时破招获得，最多累积 3 个，老鼠{3 条血}都以{3 星超级拳}KO，会额外奖励 1 把{{PICKUP:Rat Key}}。"
        }
    },
    "Starting Weapon Skin": {
        id: 37,
        name: "Starting Weapon Skin",
        locale: {
            name: "初始枪切换装置",
            tips: "角色解锁初始枪皮肤后出现，和该装置交互可以切换初始枪皮肤。"
        }
    },
    "Bullet Kin": {
        id: 38,
        name: "Bullet Kin",
        locale: {
            name: "子弹人",
            tips: "{{ENEMY:Bullet Kin}}{{ENEMY:Veteran Bullet Kin}}{{ENEMY:Bandana Bullet Kin}}{{ENEMY:Tanker}}{{ENEMY:Minelet}}{{ENEMY:Cardinal}}{{ENEMY:Shroomer}}{{ENEMY:Ashen Bullet Kin}}{{ENEMY:Mutant Bullet Kin}}{{ENEMY:Fallen Bullet Kin}}{{ENEMY:Keybullet Kin}}{{ENEMY:Chance Kin}}{{ENEMY:Confirmed}}"
        }
    },
    "Re-Armed": {
        id: 39,
        name: "Re-Armed",
        icon: "data/ReArmed.png",
        locale: {
            name: "运送手臂",
            tips: "运送{{NPC:Ox}}的备用手臂任务，完成后解锁{{ITEM:Clone}}，详情见{{NPC:Ox and Cadence}}。",
            notes: "运送{{NPC:Ox}}的备用手臂任务，完成后解锁{{ITEM:Clone}}，详情见{{NPC:Ox and Cadence}}。"
        }
    },
    "Cell And Key": {
        id: 40,
        name: "Cell And Key",
        icon: "data/Cell_And_Key.png",
        locale: {
            name: "NPC牢房",
            tips: "{{ROOM:Gungeon}}中关着NPC的牢房，需要在牢房所在关卡获得特殊的牢房钥匙打开，大部分NPC被救出后会来到{{PAGE:The Breach}}，部分救出后可在{{ROOM:Gungeon}}中遇到。详情见{{PICKUP:Cell Key}}。",
            notes: "{{ROOM:Gungeon}}中关着NPC的牢房，需要在牢房所在关卡获得特殊的牢房钥匙打开，大部分NPC被救出后会来到{{PAGE:The Breach}}，部分救出后可在{{ROOM:Gungeon}}中遇到。详情见{{PICKUP:Cell Key}}。"
        }
    },
    "Brick of Cash": {
        id: 41,
        name: "Brick of Cash",
        icon: "data/Brick_of_Cash_baby.png",
        locale: {
            name: "揭示隐藏房",
            tips: "拥有{{ITEM:Brick of Cash}}时，{{ROOM:Secret Room}}入口会有出现一个[(~~data/Brick_of_Cash_baby.png)]提示位置。",
            notes: "拥有{{ITEM:Brick of Cash}}时，{{ROOM:Secret Room}}入口会有出现一个[(~~data/Brick_of_Cash_baby.png)]提示位置。"
        }
    },
    Insight: {
        id: 42,
        name: "Insight",
        icon: "synergy/Insight.png",
        locale: {
            name: "揭示隐藏房",
            tips: "拥有{{SYNERGY:Insight}}时，{{ROOM:Secret Room}}入口会有出现一个[(~~synergy/Insight.png)]提示位置。",
            notes: "拥有{{SYNERGY:Insight}}时，{{ROOM:Secret Room}}入口会有出现一个[(~~synergy/Insight.png)]提示位置。"
        }
    },
    "Master Round": {
        id: 43,
        name: "Master Round",
        locale: {
            name: "胜者之弹",
            tips: "1~5层无伤 BOSS 的额外奖励：\r\n<g>{{ITEM:Master Round I}}{{ITEM:Master Round II}}{{ITEM:Master Round III}}{{ITEM:Master Round IV}}{{ITEM:Master Round V}}</g>"
        }
    },
    "Table Tech": {
        id: 44,
        name: "Table Tech",
        locale: {
            name: "桌技",
            tips: "这些道具可以让掀桌带有附加效果：\r\n<g>{{ITEM:Table Tech Sight}}{{ITEM:Table Tech Money}}{{ITEM:Table Tech Rocket}}{{ITEM:Table Tech Rage}}{{ITEM:Table Tech Blanks}}{{ITEM:Table Tech Stun}}{{ITEM:Table Tech Heat}}{{ITEM:Table Tech Shotgun}}</g>"
        }
    },
    Ammolet: {
        id: 45,
        name: "Ammolet",
        locale: {
            name: "护身符",
            tips: "加强{{PICKUP:Blank}}的效果：\r\n<g>{{ITEM:Gold Ammolet}}{{ITEM:Chaos Ammolet}}{{ITEM:Lodestone Ammolet}}{{ITEM:Uranium Ammolet}}{{ITEM:Copper Ammolet}}{{ITEM:Frost Ammolet}}</g>"
        }
    },
    "Guon Stones": {
        id: 46,
        name: "Guon Stones",
        locale: {
            name: "滚石",
            tips: "环绕玩家抵挡子弹各种滚石：\r\n<g>{{ITEM:Pink Guon Stone}}{{ITEM:White Guon Stone}}{{ITEM:Orange Guon Stone}}{{ITEM:Clear Guon Stone}}{{ITEM:Green Guon Stone}}{{ITEM:Red Guon Stone}}{{ITEM:Blue Guon Stone}}{{ITEM:Glass Guon Stone}}</g>"
        }
    },
    "Burning Chest": {
        id: 47,
        name: "Burning Chest",
        icon: "data/burning_chest.png",
        locale: {
            name: "燃烧的宝箱",
            tips: "在{{GAME_MODE:Rainbow Mode}}中，可能出现燃烧的宝箱，{{NPC:Bowler}}站在上面赞美太阳，在以前的旧版本中，摧毁燃烧宝箱可以解锁{{GUN:Sunlight Javelin}}，现在只是一个单纯的彩蛋。"
        }
    }
};
