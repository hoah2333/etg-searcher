import boss from "./data/boss";
import chamber from "./data/chamber";
import chest from "./data/chest";
import enemy from "./data/enemy";
import gamemode from "./data/game-mode";
import gun from "./data/gun";
import gungeoneer from "./data/gungeoneer";
import item from "./data/item";
import npc from "./data/npc";
import page from "./data/page";
import pickup from "./data/pickup";
import quality from "./data/quality";
import room from "./data/room";
import shrine from "./data/shrine";
import synergy from "./data/synergy";
import system from "./data/system";

const datas: any = {
    boss,
    chamber,
    chest,
    enemy,
    gamemode,
    gun,
    gungeoneer,
    item,
    npc,
    page,
    pickup,
    quality,
    room,
    shrine,
    synergy,
    system,
}

export function fileData(name: string): any {
    return datas[name]
}
