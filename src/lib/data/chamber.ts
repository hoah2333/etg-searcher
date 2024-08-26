export default {
    "Hall of Knowledge": {
        name: "Hall of Knowledge",
        locale: {
            name: "膛室0：知识殿堂",
            tips: "教学关卡",
            notes: "教学关卡"
        }
    },
    "Keep of the Lead Lord": {
        name: "Keep of the Lead Lord",
        locale: {
            name: "膛室1：铅王的城堡主楼",
            tips: "{{BOSS:Bullet King}}{{BOSS:Gatling Gull}}{{BOSS:Trigger Twins}}",
            notes: "BOSS：{{BOSS:Bullet King}}{{BOSS:Gatling Gull}}{{BOSS:Trigger Twins}}"
        }
    },
    "Gungeon Proper": {
        name: "Gungeon Proper",
        locale: {
            name: "膛室2：真正的地牢",
            tips: "{{BOSS:Ammoconda}}{{BOSS:Beholster}}{{BOSS:The Gorgun}}",
            notes: "BOSS：{{BOSS:Ammoconda}}{{BOSS:Beholster}}{{BOSS:The Gorgun}}"
        }
    },
    "Black Powder Mine": {
        name: "Black Powder Mine",
        locale: {
            name: "膛室3：黑火药矿",
            tips: "{{BOSS:Cannonbalrog}}{{BOSS:Mine Flayer}}{{BOSS:Treadnaught}}",
            notes: "BOSS：{{BOSS:Cannonbalrog}}{{BOSS:Mine Flayer}}{{BOSS:Treadnaught}}"
        }
    },
    Hollow: {
        name: "Hollow",
        locale: {
            name: "膛室4：空心之谷",
            tips: "{{BOSS:High Priest}}{{BOSS:Kill Pillars}}{{BOSS:Wallmonger}}",
            notes: "BOSS：{{BOSS:High Priest}}{{BOSS:Kill Pillars}}{{BOSS:Wallmonger}}"
        }
    },
    Forge: {
        name: "Forge",
        locale: {
            name: "膛室5：龙焰熔炉",
            tips: "{{BOSS:High Dragun}}",
            notes: "BOSS：{{BOSS:High Dragun}}"
        }
    },
    "Bullet Hell": {
        name: "Bullet Hell",
        locale: {
            name: "膛室6：枪弹地狱",
            tips: "{{BOSS:Lich}}",
            notes: "BOSS：{{BOSS:Lich}}\r\n\r\n<h3>解锁方法</h3>\r\n4 个主角色<g>{{GUNGEONEER:The Convict}}{{GUNGEONEER:The Hunter}}{{GUNGEONEER:The Marine}}{{GUNGEONEER:The Pilot}}</g>都{{SYSTEM:Kill The Past}}后解锁。在打败{{BOSS:High Dragun}}后的走廊里会破个洞，从洞口下去就是{{CHAMBER:Bullet Hell}}（会有只骷髅手伸出来把你抓下去，不要被吓到哦）。\r\n[(~data/BulletHell_Portal.png)]"
        }
    },
    Oubliette: {
        name: "Oubliette",
        locale: {
            name: "膛室1.5：地下密牢",
            tips: "{{BOSS:Blobulord}}\r\n隐藏关卡 1\r\n入口在{{CHAMBER:Keep of the Lead Lord}}",
            notes: "BOSS：{{BOSS:Blobulord}}\r\n\r\n<h3>进入前提</h3>\r\n- 2 个{{PICKUP:Key}}\r\n\r\n<h3>进入方法</h3>\r\n{{CHAMBER:Keep of the Lead Lord}}有一个特殊的{壁炉房}，用水桶[(~~object/Water_Barrel.png)]、{{ENEMY:Blobulon}}的粘液、产生液体（油除外）的枪或道具，可以让壁炉熄灭：\r\n[(~data/Secret_Chamber_1_1.jpg)]\r\n进入壁炉顶部启动机关，地图上会出现一个新房间：\r\n[(~data/Secret_Chamber_1_2.jpg)]\r\n隐藏关卡 1 的入口就在这个新房间里，打开入口需要 2 把{{PICKUP:Key}}：\r\n[(~data/Secret_Chamber_1_3.jpg)]\r\n- {{CHAMBER:Keep of the Lead Lord}}至少会有一个水桶[(~~object/Water_Barrel.png)]，可以把水桶推到壁炉房。只要进入过{{CHAMBER:Oubliette}}，之后{水桶}就会刷新在壁炉房里或隔壁房间\r\n- {{GUNGEONEER:The Robot}}自带{{ITEM:Coolant Leak}}，就算不小心打破水桶[(~~object/Water_Barrel.png)]也不怕\r\n- {{CHAMBER:Oubliette}}里有一个特殊的房间（可能需要{{PICKUP:Key}}开门），有个底座摆着{{ITEM:Old Crest}}，是进入{{CHAMBER:Abbey of the True Gun}}的必要道具"
        }
    },
    "Abbey of the True Gun": {
        name: "Abbey of the True Gun",
        locale: {
            name: "膛室2.5：真枪修道院",
            tips: "{{BOSS:Old King}}\r\n隐藏关卡 2\r\n入口在{{CHAMBER:Gungeon Proper}}",
            notes: "BOSS：{{BOSS:Old King}}\r\n\r\n<h3>进入前提</h3>\r\n在{{CHAMBER:Oubliette}}中获得的{{ITEM:Old Crest}}。\r\n\r\n<h3>进入方法</h3>\r\n{{CHAMBER:Gungeon Proper}}有一个特殊的{祭坛房}，里面有许多石棺，顶部有个祭坛，把在{{CHAMBER:Oubliette}}中获得的{{ITEM:Old Crest}}摆放上去，即可打开{{CHAMBER:Abbey of the True Gun}}的入口：\r\n[(~data/Secret_Chamber_2_1.jpg)]\r\n\r\n{{ITEM:Old Crest}}是一个特殊的{{PICKUP:Armor}}，永远排在普通{{PICKUP:Armor}}前面，受伤会优先被消耗掉，所以在进入{祭坛房}前要确保不能受伤。\r\n{{ITEM:Old Crest}}摆上祭坛后，会返还一个普通的{{PICKUP:Armor}}。\r\n\r\n<h3>奖励</h3>\r\n打败{{BOSS:Old King}}，除了正常的 BOSS 奖励，还会额外奖励一个{{CHEST:Synergy Chest}}。"
        }
    },
    "Resourceful Rat's Lair": {
        name: "Resourceful Rat's Lair",
        locale: {
            name: "膛室3.5：机智大鼠巢穴",
            tips: "{{BOSS:Resourceful Rat}}\r\n隐藏关卡 3\r\n入口在{{CHAMBER:Black Powder Mine}}",
            notes: "BOSS：{{BOSS:Resourceful Rat}}\r\n\r\n<h3>进入前提</h3>\r\n- 解锁全部 6 个{{ITEM:Infuriating Note}}\r\n- 1 个{{PICKUP:Key}}\r\n- 2 个{{PICKUP:Blank}}\r\n- 在{{CHAMBER:Gungeon Proper}}{{NPC:Bello}}的商店购买{{ITEM:Gnawed Key}}\r\n\r\n<h3>进入方法</h3>\r\n{{CHAMBER:Black Powder Mine}}会有一个房间有 2~4 只老鼠跑来跑去，房间里有一个被灰尘覆盖的隐藏的地板门，清除掉灰尘才能让地板门显露出来。\r\n走过地板门时，灰尘会比平时大一些。\r\n通过角色不停走动，地板门上的灰尘会逐渐被踩掉。如果有在地上留下液体的枪或道具，可以很快清除灰尘。\r\n[(~data/Secret_Chamber_3_1.jpg)]\r\n\r\n下去后沿着铁轨走到尽头，需要 1 个{{PICKUP:Blank}}来打开地道入口：\r\n[(~data/Secret_Chamber_3_2.jpg)]\r\n地道中途还需要另 1 个{{PICKUP:Blank}}继续开路：\r\n[(~data/Secret_Chamber_3_3.jpg)]\r\n\r\n地道深处还有地板门，需要用{{ITEM:Gnawed Key}}打开，下去就是真正的{{CHAMBER:Resourceful Rat's Lair}}了：\r\n[(~data/Secret_Chamber_3_4.jpg)]\r\n\r\n在{{CHAMBER:Resourceful Rat's Lair}}里，从下图中的入口下去后，房间会有{上下左右}4 条走廊：\\n[(~data/Secret_Chamber_3_5.jpg)]\r\n要怎么走就需要用到{{ITEM:Infuriating Note}}说明里的提示了。\r\n打开{游戏菜单>枪械百科>道具}，查看道具列表底部的 6 张{{ITEM:Infuriating Note}}，查看顺序从左到右、从上到下。\r\n{{ITEM:Infuriating Note}}说明的底部有一块{奶酪}，奶酪的尖角方向就是走法的提示，如[(!cheese.png)]就是表示{下}。这个方向是跟存档的，不同存档方向不同，而同个存档则顺序是固定的，可以自己记下来，就不用每次都去查了，欢迎使用{{PAGE:Cheese Tool}}。\r\n按照 6 张{{ITEM:Infuriating Note}}提示的方向走，如提示分别为{下右下上下上}，就先往下走，然后往右走。\r\n如果走对，最后会来到{{BOSS:Resourceful Rat}}的BOSS房。如果走错，最后会来到电梯间，直接前往下一关。\r\n\r\n<h3>奖励</h3>\r\n打赢{{BOSS:Resourceful Rat}}后的奖励房里，有一些补给和 4 个{{CHEST:Rat Chest}}，需要用{拳击阶段}掉落的{{PICKUP:Rat Key}}打开。\r\n\r\n此外，奖励房还连接着一个{{ROOM:Secret Room}}，里面有条沉睡的{{SYSTEM:Serpent}}，被 2 道门关着，门需要用{{PICKUP:Rat Key}}打开。\r\n要唤醒小蛇，需要喂它 4 个物品，{{ITEM:Glass Guon Stone}}{{ITEM:Junk}}是不错的选择，老鼠尸体也行（打败老鼠后它的尸体可以踢过来）。\r\n如果没有多余的{{PICKUP:Rat Key}}：\r\n- 开 1 道门，隔着第 2 道门，物品直接往里面丢，小蛇可以吃到。\r\n- 2 道门都不开，把物品丢到 2 道门中间，用爆炸武器或者开{{PICKUP:Blank}}把物品炸进去。\r\n小蛇苏醒后会跟着你到{{CHAMBER:Forge}}，进入BOSS房时叛变，让{{BOSS:High Dragun}}拥有第三阶段{{SYSTEM:Advanced Dragun}}。"
        }
    },
    "R&G Dept.": {
        name: "R&G Dept.",
        locale: {
            name: "膛室4.5：研究开发部门",
            tips: "开飞机的{{BOSS:Agunim}}\r\n隐藏关卡 4\r\n入口在{{CHAMBER:Hollow}}",
            notes: "BOSS：开飞机的{{BOSS:Agunim}}\r\n\r\n<h3>进入前提</h3>\r\n- 拥有至少 1 个{{SYSTEM:Master Round}}和其它 2 个可出售的物品\r\n\r\n<h3>进入方法</h3>\r\n{{CHAMBER:Hollow}}会有一个特殊的房间，里面只有一只{{NPC:Sell Creep}}，丢给它 1 个{{SYSTEM:Master Round}}和其它任意 2 个可以出售的物品（{{ITEM:Junk}}{{ITEM:Glass Guon Stone}}也可以），然后{{NPC:Sell Creep}}会离开，下水道入口会破个洞，下去即可。\r\n[(~data/secret_chamber_4.jpg)]"
        }
    },
    "The Past": {
        name: "The Past",
        locale: {
            name: "过去任务关卡",
            tips: "携带{{ITEM:The Bullet That Can Kill The Past}}使用{{GUN:The Gun That Can Kill The Past}}通关（不进入{{CHAMBER:Bullet Hell}}），可以进入角色的过去关卡。"
        }
    }
};
