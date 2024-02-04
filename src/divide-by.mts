export function divideBy(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by 0 is Invalid!");
  }
  return a / b;
}
