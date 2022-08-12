import { drawHand } from "./drawHand";

export const drawTime = (context: CanvasRenderingContext2D, time: string) => {
  var now = time.split(":")
  var hour = +now[0]
  var minute = +now[1]
  var second = +now[2]

  drawHand(context, hour / 12, 4, "black", 90)
  drawHand(context, minute / 60, 4, "black", 180)
  drawHand(context, second / 60, 2, "red", 180)
}