import { useEffect, useRef } from "react"
import { ClockProps } from "./entities/interfaces/Clock"
import '../styles/components/Clock.scss'
import { drawNumbers } from "../canvas/clock/drawNumbers"
import { drawContainer } from "../canvas/clock/drawContainer"
import { drawTime } from "../canvas/clock/drawTime"

export const Clock = ({ time }: ClockProps) => {
  const clockRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = clockRef.current

    if(canvas) {
      const context = canvas.getContext('2d')
      const radius = context.canvas.height / 2

      drawContainer(context, radius)
      drawNumbers(context, radius)
      drawTime(context, time)
    }
  }, [time])


  return (
    <canvas ref={clockRef} width={400} height={400} className="clock"></canvas>
  )
}