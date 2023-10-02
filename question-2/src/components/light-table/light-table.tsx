import { Light } from "@/components";
import "./light-table.css";

interface LightTableProps {
  table: (0 | 1)[][];
  switchState: (x: number, y: number) => void;
}

export const LightTable = ({ table, switchState }: LightTableProps) => {
  return (
    <section>
      {table.map((arr, x) =>
        arr.map((_, y) => (
          <Light
            key={x + "_" + y}
            state={table[x][y]}
            onClick={() => switchState(x, y)}
          />
        )),
      )}
    </section>
  );
};
