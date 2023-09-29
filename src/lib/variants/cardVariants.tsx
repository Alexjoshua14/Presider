
import { random } from "@/utilities/random"

export const container = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren"
    }
  }
}

//
export const section = {
  hidden: { opacity: 1, rotate: random(-20, 20), x: random(-200, 200), y: random(-100, 100) },
  show: { opacity: 1, rotate: 0, x: 0, y: 0 }
}

export const section_1 = {
  hidden: { opacity: 1, rotate: 14, x: -200, y: 250 },
  show: { opacity: 1, rotate: 0, x: 0, y: 0 }
}

export const section_2 = {
  hidden: { opacity: 1, rotate: -21, x: 400, y: 40 },
  show: { opacity: 1, rotate: 0, x: 0, y: 0 }
}

export const section_3 = {
  hidden: { opacity: 1, rotate: 17, x: 250, y: -90 },
  show: { opacity: 1, rotate: 0, x: 0, y: 0 }
}