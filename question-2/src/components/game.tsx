import { LightTable } from ".";

interface GameProps {
  turns: number;
  table: (0 | 1)[][];
  switchState: (x: number, y: number) => void;
}

export const Game = ({ turns, table, switchState }: GameProps) => {
  return (
    <>
      <header>
        <p>Tentativas: {turns}</p>
      </header>
      <LightTable table={table} switchState={switchState} />
    </>
  );
};
