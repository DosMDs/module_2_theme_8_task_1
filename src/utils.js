const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const isWin = (field) => {
	for (const winPattern of WIN_PATTERNS) {
		const resultPlayers = new Set(winPattern.map((i) => field[i]));
		if (resultPlayers.size === 1 && !resultPlayers.has("")) {
			return true;
		}
	}
	return false;
};
