import { searchAroundTheCoordenates } from "./search-around-the-coordenates";

export const searchInMatrix = <T>(arr: T[][], target: T): number[] => {
  const rowsLen = arr.length;
  const columnsLen = arr[0].length;

  const interationsOnRow = Math.ceil(rowsLen / 3);
  const interationsOnColumn = Math.ceil(columnsLen / 3);

  for (let i = 0; i < interationsOnRow; i++) {
    for (let j = 0; j < interationsOnColumn; j++) {
      const [x, y] = searchAroundTheCoordenates(
        arr,
        target,
        i * 3 + 1,
        j * 3 + 1,
      );

      if (x !== undefined && y !== undefined) return [x, y];
    }
  }

  return [];
};
