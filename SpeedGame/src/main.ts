export function calculateFinalSpeed(
  initialSpeed: number,
  inclinations: number[]
): number {
  const acelera = inclinations.reduce(
    (sum: number, val: number) => sum + val,
    0
  );
  const speed = initialSpeed - acelera;

  if (speed <= 0) {
    return 0;
  }

  console.log('tipo: ', typeof speed);
  return speed;
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));
