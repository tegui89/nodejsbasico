module.exports = {
  add (a, b) {
    return a + b
  },

  substract (a, b) {
    return a - b    
  },
  
  multiply (a, b) {
    return a * b
  },

  divide (a, b) {
    if (b === 0) {
      return `El denominador no puede ser 0`     
    } else {
      return a / b
    }
  }
}