const createRandomColor = () => ({
  background: `
    rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})
  `
})
export default createRandomColor
