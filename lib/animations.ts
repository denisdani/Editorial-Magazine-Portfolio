import { Variants } from "motion/react"

export const getFadeUpVariants = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: delay,
    },
  },
})
