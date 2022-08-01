//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//Examples
// getSize(4, 2, 6), [88, 48]
// getSize(10, 10, 10), [600, 1000]
// getSize(4, 2, 6)[0], 88
// getSize(4, 2, 6)[1], 48

function getSize(width, height, depth) {
  let area = 2 * width * depth + 2 * depth * height + 2 * height * width;
  let volume = width * height * depth;
  return [area, volume];
}
