import styles from "./field-layout.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({ field, update }) => {
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	update: PropTypes.func,
};
