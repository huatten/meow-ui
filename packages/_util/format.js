import { isDef, isNumeric } from "./validate";
export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}