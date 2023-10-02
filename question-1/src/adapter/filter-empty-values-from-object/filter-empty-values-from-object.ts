import { isEmptyValue, isJsObject } from "@/validation";
import { filterEmptyValuesFromArray } from "..";

const filterEmptyValues = (value: any) => {
  for (const key in value) {
    const currentValue = value[key];

    if (isEmptyValue(currentValue)) {
      delete value[key];
    }

    if (isJsObject(currentValue)) {
      filterEmptyValues(currentValue);
    }

    if (Array.isArray(currentValue) && value[key] !== undefined) {
      value[key] = filterEmptyValuesFromArray(value[key]);
    }
  }

  return value;
};

export const filterEmptyValuesFromObject = (obj: Object) => {
  const copyObj = { ...obj };
  return filterEmptyValues(copyObj);
};
