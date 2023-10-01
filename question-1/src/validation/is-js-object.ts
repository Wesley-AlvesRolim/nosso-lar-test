export const isJsObject = (value: any) =>
  typeof value === "object" && !Array.isArray(value) && value !== null;
