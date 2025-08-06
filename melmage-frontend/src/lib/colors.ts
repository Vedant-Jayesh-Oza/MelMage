export function getColor(value: number): [number, number, number] {
  const normalizedValue = Math.max(-1, Math.min(1, value));
  
  if (Math.abs(normalizedValue) < 0.01) {
    return [255, 255, 255];
  }
  
  if (normalizedValue > 0) {
    const intensity = normalizedValue;
    const r = Math.round(255 - (intensity * 204)); 
    const g = Math.round(255 - (intensity * 127)); 
    const b = 255; 
    return [r, g, b];
  } else {
    const intensity = Math.abs(normalizedValue);
    const r = 255; 
    const g = Math.round(255 - (intensity * 127)); 
    const b = Math.round(255 - (intensity * 204)); 
    return [r, g, b];
  }
}