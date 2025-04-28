import styles from "./field-layout.module.css";
import { useGameData } from "../../hooks";

export const FieldLayout = () => {
	const { field, isGameEnding, isDraw, currentPlayer, store, isWin } =
		useGameData();

	const update = (index) => {
		if (field[index] !== "" || isGameEnding || isDraw) {
			return;
		}

		const newField = [...field];
		newField[index] = currentPlayer;
		if (isWin(newField)) {
			store.dispatch({ type: "SET_IS_GAME_ENDING" });
		} else if (newField.find((el) => el === "") === undefined) {
			store.dispatch({ type: "SET_IS_DRAW" });
		} else {
			store.dispatch({
				type: "SET_CURRENT_PLAYER",
				payload: currentPlayer === "X" ? "0" : "X",
			});
		}
		store.dispatch({ type: "SET_FIELD", payload: newField });
	};

	return (
		<div className={styles.container}>
			{field.map((value, index) => {
				return (
					<button
						className={styles.field}
						key={index}
						onClick={() => update(index)}
					>
						{value}
					</button>
				);
			})}
		</div>
	);
};
