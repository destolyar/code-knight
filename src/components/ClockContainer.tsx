import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Clock } from './Clock'
import '../styles/components/ClockContainer.scss'


export const ClockContainer: React.FC = () => {
  const [time, setTime] = useState<any>("")
  
  useEffect(() => {    
    const fetchTime = async () => {
      const data = await fetch("http://worldtimeapi.org/api/timezone/Europe/Moscow")
      .then(response => response.json())

      const date = new Date
      setTime(date.toLocaleTimeString(data.unixtime).split(" ")[0])
    }

    fetchTime()
    const dateInterval = setInterval(() => {
      fetchTime()
    }, 1000)

    return () => {
      clearInterval(dateInterval)
    }
  }, [])

  useEffect(() => {
    console.log(time)
  }, [time])


  const variants = {
    hidden: { opacity: 0, x: "50vw", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  
  return(
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{type: "linear"}}
      className="clock-container">
      <Clock time={time}/>
      <h3 className='clock-container__time'>Moscow time <br/>{time}</h3>
    </motion.section>
  )
}
