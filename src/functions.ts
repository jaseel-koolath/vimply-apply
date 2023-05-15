interface Functions {
  [key: string]: (value: string) => string
}

const functions: Functions = {
  cube: (value: string) => {
    const num = Number(value)
    return String(num * num * num)
  },
  uppercase: (value: string) => {
    return value.toUpperCase()
  },
  lowercase: (value: string) => {
    return value.toLowerCase()
  },
  reverse: (value: string) => {
    return value.split('').reverse().join('')
  },
  logarithm: (value: string) => {
    const num = Number(value)
    return String(Math.log(num))
  },
  square: (value: string) => {
    const num = Number(value)
    return String(num * num)
  },
  sine: (value: string) => {
    const num = Number(value)
    return String(Math.sin(num))
  },
  cosine: (value: string) => {
    const num = Number(value)
    return String(Math.cos(num))
  },
  tangent: (value: string) => {
    const num = Number(value)
    return String(Math.tan(num))
  },
}
export default functions
