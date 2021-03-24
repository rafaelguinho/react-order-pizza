import { formatTime } from ".";

describe("Util tests", () => {
  it("Format date to time", () => {
    const timestamp = "2021-03-24T09:08:12.9529721-03:00";

    const formatedTime = formatTime(timestamp);

    expect(formatedTime).toBe("09:08:12");
  });
});
