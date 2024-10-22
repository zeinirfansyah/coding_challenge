import { numberToString } from ".";

describe("numberToString", function () {
    it("should work correctly", () => {
        expect(numberToString(67)).toEqual('67');
    });
});