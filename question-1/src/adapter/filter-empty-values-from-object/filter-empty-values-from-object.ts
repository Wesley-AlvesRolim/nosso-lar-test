import { isEmptyValue, isJsObject } from "@/validation";

const filterEmptyValues = (value: any) => {
  for (const key in value) {
    const currentValue = value[key];

    if (isEmptyValue(currentValue)) {
      delete value[key];
    }

    if (isJsObject(currentValue)) {
      filterEmptyValues(currentValue);
    }
  }

  return value;
};

export const filterEmptyValuesFromObject = (obj: Object) => {
  const copyObj = { ...obj };
  return filterEmptyValues(copyObj);
};
