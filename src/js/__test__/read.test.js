/* eslint-disable no-undef */

import read from "../reader.js";

jest.mock('../reader.js');

beforeEach(() => {
    jest.resetAllMocks();
});

test('error testing read()', async () => {
    try {
        const data = await read.mockReturnValue();
        expect(data.name).toBe('read');
    }
    catch (e) {
        expect(e.name).toEqual('Error');
    }
});