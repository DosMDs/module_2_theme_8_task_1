import { useContext } from "react";
import { GameContext } from "../context";

export const useGameData = () => useContext(GameContext);
