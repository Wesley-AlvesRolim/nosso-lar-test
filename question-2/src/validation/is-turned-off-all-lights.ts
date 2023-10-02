type Matrix = number[][];

export const isTurnedOffAllLights = (matrix: Matrix) => {
  return matrix[0][0] === 1;
};
