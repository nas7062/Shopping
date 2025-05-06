export const throttle = (func, limit = 300) => {
  let inThrottle
  return function (...args) {
    // 일반 함수로 변경
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
