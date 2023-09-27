import { Utils } from "../../../src/providers/googleApi/utils";

describe("utils", () => {
    describe("formatDuration", () => {
        it("formats duration to the mm.ss format from the google api duration format 'PTxxMyyS'", () => {
            // Arrange
            const testTime = "PT25M47S";

            // Act
            const result = Utils.formatDuration(testTime);

            // Assert
            expect(result).toEqual("25.47");
        });

        it("formats duration to the mm.ss format when given just minutes", () => {
            // Arrange
            const testTime = "PT15M";

            // Act
            const result = Utils.formatDuration(testTime);

            // Assert
            expect(result).toEqual("15.00");
        });

        it("formats duration to the ss format when given just seconds", () => {
            // Arrange
            const testTime = "PT15S";

            // Act
            const result = Utils.formatDuration(testTime);

            // Assert
            expect(result).toEqual("15");
        });

        it("formats duration to 0 seconds when given no duration", () => {
            // Arrange
            const testTime = "PT00S";

            // Act
            const result = Utils.formatDuration(testTime);

            // Assert
            expect(result).toEqual("00");
        });
    });
});
