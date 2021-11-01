const { createCanvas } = require('canvas');

export const SimpleColor = (color) => {

  const canvas = createCanvas(200, 200)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = `${color}`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return canvas.toDataURL();

}