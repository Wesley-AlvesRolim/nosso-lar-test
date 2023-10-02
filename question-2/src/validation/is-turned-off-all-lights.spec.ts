import { isTurnedOffAllLights } from "./is-turned-off-all-lights";

describe("isTurnedOffAllLights", () => {
  it("should return true on all lights is off", () => {
    const ligtsOff = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    expect(isTurnedOffAllLights(ligtsOff)).toBe(true);
  });

  it("should return false with at least one lights is on", () => {
    const ligtsOn = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    expect(isTurnedOffAllLights(ligtsOn)).toBe(false);
  });
});
