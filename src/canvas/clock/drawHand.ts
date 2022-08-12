import { Vector } from "./Vector";

export const drawHand = (context: CanvasRenderingContext2D, time: number, lineWidth: number, 
  color: string, length: number) => {
  const {width, height} = context.canvas
  context.lineWidth = lineWidth
  context.strokeStyle = color
  context.beginPath()
  let angle = Math.PI * 2 * time - Math.PI / 2;
  let vector = new Vector(length, angle)
  context.moveTo(width / 2, height / 2) 
  context.lineTo(vector.getX() + width / 2, vector.getY() + height / 2)
  context.stroke()
}