import { Vector } from "./Vector"

export const drawNumbers = (context: CanvasRenderingContext2D, radius: number) => {
  context.lineWidth = 3
  for(let i = 0; i < 60; i++) {
    let radius = 195
    let length = 5

    context.strokeStyle = "rgba(0, 0, 0, 0.25)"
    if(i % 5 === 0) {
      radius -= length
      length *= 2
      context.strokeStyle = "rgba(0, 0, 0, 0.5)"
    }
    
    let vector = new Vector(radius, Math.PI * 2 * (i / 60) - Math.PI / 2)
    context.beginPath()
    context.moveTo(vector.getX() + 200, vector.getY() + 200)
    vector.setMag(radius + length)
    context.lineTo(vector.getX() + 200, vector.getY() + 200)
    context.stroke()
  }
}