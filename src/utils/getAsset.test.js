import { getAsset } from "./getAsset";

test('getAsset for somethign not in', () => {
    // Inputs
    const fund = {}
    const net = 12
    const column = "columns"

    // Action
    const output = get_asset(fund, net, column)

    // Assertions
    expect(output).toBe(3);
  });
  