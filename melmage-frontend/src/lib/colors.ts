// Color mapping function for feature map visualization
export function getColor(value: number): [number, number, number] {
  // Normalize value to [-1, 1] range
  const normalizedValue = Math.max(-1, Math.min(1, value));
  
  if (normalizedValue === 0) {
    return [128, 128, 128]; // Gray for zero
  }
  
  if (normalizedValue > 0) {
    // Positive values: Blue to White
    const intensity = normalizedValue;
    const r = Math.round(255 * (1 - intensity) + 255 * intensity);
    const g = Math.round(255 * (1 - intensity) + 255 * intensity);
    const b = 255; // Keep blue channel high
    return [r, g, b];
  } else {
    // Negative values: Red to White
    const intensity = Math.abs(normalizedValue);
    const r = 255; // Keep red channel high
    const g = Math.round(255 * (1 - intensity) + 255 * intensity);
    const b = Math.round(255 * (1 - intensity) + 255 * intensity);
    return [r, g, b];
  }
}