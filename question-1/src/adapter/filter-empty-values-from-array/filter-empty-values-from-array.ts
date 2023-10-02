const filterEmptyValues = <T>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      filterEmptyValues(arr[i] as unknown as unknown[]);
    }

    const current = arr[i];
    if (
      arr[i] === null ||
      arr[i] === undefined ||
      (Array.isArray(current) && current.length === 0)
    ) {
      arr.splice(i, 1);
      i--;
    }
  }
};

export const filterEmptyValuesFromArray = <T>(arr: T[]): T[] => {
  const copyArr = [...arr];
  filterEmptyValues(copyArr);
  return copyArr;
};
