import { describe, expect, it } from "vitest";
import { VALLEY_TERRAIN, createValleyGeometry, updateValleyGeometryHeights } from "@/lib/terrain";

describe("moving valley terrain", () => {
  it("keeps one continuous grid after extended forward travel", () => {
    const { positions, indices } = createValleyGeometry(12);
    const horizontalCoordinates = Array.from(positions).filter((_, index) => index % 3 !== 1);

    updateValleyGeometryHeights(positions, VALLEY_TERRAIN.forwardSpeed * 60 * 10);

    expect(Array.from(positions).filter((_, index) => index % 3 !== 1)).toEqual(horizontalCoordinates);
    expect(indices).toHaveLength(12 * 12 * 6);
  });
});
