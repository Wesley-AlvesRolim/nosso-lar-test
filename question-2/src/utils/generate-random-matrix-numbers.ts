import { randomInteger } from ".";

export const generateRandomMatrixNumbers = (size: number): (0 | 1)[][] => {
  return [
    ...Array.from({ length: size }).map(() =>
      Array.from({ length: size }).map(() => randomInteger(0, 1)),
    ),
  ] as (0 | 1)[][];
};
