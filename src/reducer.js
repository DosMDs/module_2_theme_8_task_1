const initialState = {
	field: new Array(9).fill(""),
	currentPlayer: "X",
	isDraw: false,
	isGameEnding: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_CURRENT_PLAYER":
			return { ...state, currentPlayer: payload };
		case "SET_FIELD":
			return { ...state, field: payload };
		case "SET_IS_DRAW":
			return { ...state, isDraw: true };
		case "SET_IS_GAME_ENDING":
			return { ...state, isGameEnding: true };
		case "GAME_RESTART":
			return initialState;

		default:
			return state;
	}
};
