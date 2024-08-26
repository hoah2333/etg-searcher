export function match(filename) {
    let nameList: string[] = [
        "boss",
        "chamber",
        "chest",
        "enemy",
        "game-mode",
        "gun",
        "gungeoneer",
        "item",
        "npc",
        "page",
        "pickup",
        "quality",
        "room",
        "shrine"
    ];
    return nameList.includes(filename);
}
