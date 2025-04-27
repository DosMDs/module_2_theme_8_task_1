import { useEffect, useState } from "react";
import styles from "./information-layout.module.css";
import { store } from "../../store";

export const InformationLayout = () => {
	const [gameData, setGameData] = useState(store.getState());
	const { currentPlayer, isDraw, isGameEnding } = gameData;

	useEffect(() => {
		store.subscribe(() => setGameData(store.getState()));
	}, []);

	let textInfo = `Ходит: ${currentPlayer}`;
	if (isDraw) {
		textInfo = "Ничья";
	} else if (isGameEnding) {
		textInfo = `Победа: ${currentPlayer}`;
	}

	const handleRestart = () => {
		store.dispatch({ type: "GAME_RESTART" });
	};

	const showRestart = isDraw || isGameEnding;

	return (
		<>
			<h1 className={styles.header}>{textInfo}</h1>
			{showRestart && (
				<button
					className={styles["button-reset"]}
					onClick={handleRestart}
				>
					Начать заново
				</button>
			)}
		</>
	);
};
