export const drawContainer = (context: CanvasRenderingContext2D, 
  radius: number) => {
  context.beginPath();
  context.arc(radius, radius, radius, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();
}