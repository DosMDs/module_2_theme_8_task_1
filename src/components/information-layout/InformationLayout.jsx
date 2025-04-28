import styles from "./information-layout.module.css";
import { useGameData } from "../../hooks";

export const InformationLayout = () => {
	const { currentPlayer, isDraw, isGameEnding, store } = useGameData();

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
