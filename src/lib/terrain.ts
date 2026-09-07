/** Tunable terrain values shared by the valley scene and its lightweight fallback. */
export const VALLEY_TERRAIN = {
  desktopSegments: 104,
  mobileSegments: 42,
  width: 22,
  depth: 18,
  height: 4.6,
  opacity: 0.2,
  glowOpacity: 0.18,
  orbitDuration: 26,
  parallaxRange: 0.12,
} as const;

const hash = (x: number, z: number) => {
  const value = Math.sin(x * 127.1 + z * 311.7) * 43758.5453123;
  return value - Math.floor(value);
};

const smoothNoise = (x: number, z: number) => {
  const xi = Math.floor(x);
  const zi = Math.floor(z);
  const xf = x - xi;
  const zf = z - zi;
  const smooth = (value: number) => value * value * (3 - 2 * value);
  const u = smooth(xf);
  const v = smooth(zf);
  const a = hash(xi, zi);
  const b = hash(xi + 1, zi);
  const c = hash(xi, zi + 1);
  const d = hash(xi + 1, zi + 1);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
};

const fractalNoise = (x: number, z: number) =>
  smoothNoise(x, z) * 0.6 + smoothNoise(x * 2.03, z * 2.03) * 0.28 + smoothNoise(x * 4.1, z * 4.1) * 0.12;

/** A valley profile: the floor stays clear at centre while ridges rise to each side. */
export const valleyHeight = (x: number, z: number) => {
  const edge = Math.pow(Math.min(1, Math.abs(x) / 0.82), 2.15);
  const foreground = Math.max(0, (z + 0.1) * 0.18);
  const ridges = edge * (1.2 + fractalNoise(x * 1.35, z * 1.1) * 1.9);
  const rolling = (fractalNoise(x * 0.65 + 9, z * 0.65 - 3) - 0.5) * 0.48;
  return ridges + foreground + rolling - 0.72;
};

export const createValleyGeometry = (segments: number) => {
  const positions = new Float32Array((segments + 1) * (segments + 1) * 3);
  const indices: number[] = [];
  const { width, depth, height } = VALLEY_TERRAIN;

  for (let z = 0; z <= segments; z += 1) {
    for (let x = 0; x <= segments; x += 1) {
      const offset = (z * (segments + 1) + x) * 3;
      const px = (x / segments - 0.5) * width;
      const pz = (z / segments - 0.5) * depth;
      positions[offset] = px;
      positions[offset + 1] = valleyHeight(px / (width / 2), pz / (depth / 2)) * height;
      positions[offset + 2] = pz;
    }
  }

  for (let z = 0; z < segments; z += 1) {
    for (let x = 0; x < segments; x += 1) {
      const a = z * (segments + 1) + x;
      const b = a + 1;
      const c = a + segments + 1;
      indices.push(a, c, b, b, c, c + 1);
    }
  }

  return { positions, indices: new Uint32Array(indices) };
};
