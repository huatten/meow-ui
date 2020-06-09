export function isDef(value) {
  return value !== undefined && value !== null;
}
export function isNumeric(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
