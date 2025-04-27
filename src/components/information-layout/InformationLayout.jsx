import styles from "./information-layout.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	handleRestart,
}) => {
	let textInfo = `Ходит: ${currentPlayer}`;
	if (isDraw) {
		textInfo = "Ничья";
	} else if (isGameEnded) {
		textInfo = `Победа: ${currentPlayer}`;
	}

	const showRestart = isDraw || isGameEnded;

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

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	handleRestart: PropTypes.func,
};
