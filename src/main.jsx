import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from "./game.jsx";
import "./main.css";
import { GameProvider } from "./context/GameProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GameProvider>
			<Game />
		</GameProvider>
	</StrictMode>
);
