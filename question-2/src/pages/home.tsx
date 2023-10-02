import { useState } from "react";
import { GameOverModal, WinModal, Game } from "@/components";
import { randomInteger } from "@/utils";
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
      ...Array.from({ length: 5 }).map(() =>
        Array.from({ length: 5 }).map(() => randomInteger(0, 1)),
      ),
    ] as (0 | 1)[][],
  });
  const isTurnedOffAllLightsOfTable = isTurnedOffAllLights(gameState.table);

  const switchState = (x: number, y: number) => {
    const table = [...gameState.table];
    setTableState(table, x, y);
    setTableState(table, x + 1, y);
    setTableState(table, x - 1, y);
    setTableState(table, x, y + 1);
    setTableState(table, x, y - 1);
    setGameState({ ...gameState, table, turns: gameState.turns - 1 });
  };

  if (gameState.turns === 0 && !isTurnedOffAllLightsOfTable) {
    return <GameOverModal />;
  }

  if (isTurnedOffAllLightsOfTable) {
    return <WinModal />;
  }

  return (
    <Game
      turns={gameState.turns}
      table={gameState.table}
      switchState={switchState}
    />
  );
};
