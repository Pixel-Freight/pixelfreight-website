// utils/generateDots.ts
export function generateDots(count = 10) {
  const points = []
  for (let i = 0; i < count; i++) {
    points.push({
      lat: Math.random() * 180 - 90,   // -90 to 90
      lng: Math.random() * 360 - 180, // -180 to 180
      size: Math.random() * 0.5 + 0.5
    })
  }
  return points
}
