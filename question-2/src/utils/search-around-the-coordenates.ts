const getValue = <T>(matrix: T[][], x: number, y: number): T | null =>
  matrix[x] === undefined || matrix[y] === undefined ? null : matrix[x][y];

export const searchAroundTheCoordenates = <T>(
  matrix: T[][],
  target: T,
  centerX: number,
  centerY: number,
) => {
  switch (target) {
    case getValue(matrix, centerX, centerY):
      return [centerX, centerY];

    case getValue(matrix, centerX - 1, centerY):
      return [centerX - 1, centerY];

    case getValue(matrix, centerX - 1, centerY - 1):
      return [centerX - 1, centerY - 1];

    case getValue(matrix, centerX, centerY - 1):
      return [centerX, centerY - 1];

    case getValue(matrix, centerX + 1, centerY - 1):
      return [centerX + 1, centerY - 1];

    case getValue(matrix, centerX + 1, centerY):
      return [centerX + 1, centerY];

    case getValue(matrix, centerX + 1, centerY + 1):
      return [centerX + 1, centerY + 1];

    case getValue(matrix, centerX, centerY + 1):
      return [centerX, centerY + 1];

    case getValue(matrix, centerX - 1, centerY + 1):
      return [centerX - 1, centerY + 1];

    default:
      return [];
  }
};
