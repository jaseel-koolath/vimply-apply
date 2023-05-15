interface Functions {
  [key: string]: (value: string) => string
}

const functions: Functions = {
  cube: (value: string): string => {
    const num = Number(value)
    return String(num * num * num)
  },
  uppercase: (value: string): string => {
    return value.toUpperCase()
  },
  lowercase: (value: string): string => {
    return value.toLowerCase()
  },
  reverse: (value: string): string => {
    return value.split('').reverse().join('')
  },
  logarithm: (value: string): string => {
    const num = Number(value)
    return String(Math.log(num))
  },
  square: (value: string): string => {
    const num = Number(value)
    return String(num * num)
  },
  sine: (value: string): string => {
    const num = Number(value)
    return String(Math.sin(num))
  },
  cosine: (value: string): string => {
    const num = Number(value)
    return String(Math.cos(num))
  },
  tangent: (value: string): string => {
    const num = Number(value)
    return String(Math.tan(num))
  },
}
export default functions
