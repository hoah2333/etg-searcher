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
import room from "./data/room";
import shrine from "./data/shrine";
import system from "./data/system";

export type DataType = {
    id?: number;
    name: string;
    icon?: string;
    local_icon?: string;
    quality?: string;
    type?: string;
    magazine_size?: string | number;
    ammo_capacity?: string | number;
    damage?: string | number;
    fire_rate?: string | number;
    reload_time?: string | number;
    shot_speed?: string | number;
    range?: string | number;
    force?: string | number;
    spread?: string | number;
    dataType?: string;
    locale: {
        type?: string;
        name?: string;
        base_health?: string | number;
        dps_cap?: number;
        tips?: string;
        notes?: string;
        keyword?: string;
        unlock?: string;
    };
    sell?: number;
    synergy?: string[];
    colors?: string;
    shapes?: string;
    hidden?: number;
};

const fileDatas: Record<string, Record<string, DataType>> = {
    boss,
    enemy,
    gun,
    gungeoneer,
    item,
    npc,
    shrine
};

const allDatas: Record<string, Record<string, DataType>> = {
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
    room,
    shrine,
    system
};

export function fileData(name: string): Record<string, DataType> {
    return fileDatas[name];
}

export function allData(): Record<string, Record<string, DataType>> {
    return allDatas;
}
