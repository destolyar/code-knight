import { motion } from 'framer-motion'
import '../styles/components/Semicircle.scss'

export const Semicircle: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, x: "-50vw", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  }
  
  return(
    <motion.div
    variants={variants}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{type: "linear"}}
    className={"semicircle"}>
      
    </motion.div>
  )
}