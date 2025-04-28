import { useState, useEffect } from "react";
import { GameContext } from "./GameContext";
import { store } from "../store";
import { isWin } from "../utils";

export const GameProvider = ({ children }) => {
	const [gameData, setGameData] = useState(store.getState());

	useEffect(() => {
		store.subscribe(() => setGameData(store.getState()));
	}, []);
	return (
		<GameContext value={{ ...gameData, store, isWin }}>
			{children}
		</GameContext>
	);
};
