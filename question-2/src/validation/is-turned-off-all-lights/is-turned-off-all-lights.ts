import { searchInMatrix } from "@/utils";

type Matrix = number[][];

export const isTurnedOffAllLights = (matrix: Matrix) => {
  const isAllLightsOff = searchInMatrix(matrix, 1).length === 0;
  return isAllLightsOff;
};
