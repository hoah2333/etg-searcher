export function match(filename) {
	let nameList = [
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
		"shrine",
		"synergy",
		"system"
	];
	return nameList.includes(filename);
}
