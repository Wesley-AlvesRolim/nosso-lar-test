import { useState } from "react";
import { GameOverModal, WinModal, Game } from "@/components";
import { isTurnedOffAllLights } from "@/validation";

const setTableState = (table: (0 | 1)[][], x: number, y: number) => {
  if (
    table[x] !== undefined &&
    table[y] !== undefined &&
    table[x][y] !== undefined
  ) {
    table[x][y] = table[x][y] === 0 ? 1 : 0;
  }
};

export const Home = () => {
  const [gameState, setGameState] = useState({
    turns: 20,
    table: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ] as (0 | 1)[][],
  });
  const isTurnedOffAllLightsOfTable = isTurnedOffAllLights(gameState.table);
  const isGameOver = !isTurnedOffAllLightsOfTable && gameState.turns === 0;

  const switchState = (x: number, y: number) => {
    const table = [...gameState.table];
    setTableState(table, x, y);
    setTableState(table, x + 1, y);
    setTableState(table, x - 1, y);
    setTableState(table, x, y + 1);
    setTableState(table, x, y - 1);
    setGameState({ ...gameState, table, turns: gameState.turns - 1 });
  };

  return (
    <>
      {isGameOver && <GameOverModal />}
      {isTurnedOffAllLightsOfTable && <WinModal />}
      <Game
        turns={gameState.turns}
        table={gameState.table}
        switchState={switchState}
      />
    </>
  );
};
