
export const container = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.37,
      when: "afterChildren"
    }
  }
}

export const section_1 = {
  hidden: { opacity: 0, rotate: 14, x: -200, y: 150 },
  show: { opacity: 1, rotate: 0, x: 0, y: 0 }
}

export const section_2 = {
  hidden: { opacity: 0, rotate: -37, x: 300, y: 40 },
  show: { opacity: 1, rotate: 0, x: 0, y: 0 }
}

export const section_3 = {
  hidden: { opacity: 0, rotate: 27, x: 250, y: -90 },
  show: { opacity: 1, rotate: 0, x: 0, y: 0 }
}