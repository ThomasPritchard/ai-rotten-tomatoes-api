import "reflect-metadata";
import { AppUseCase } from "../src/useCases/app/app.usecase";

describe("AppUseCase", () => {
    let appUseCase: AppUseCase;

    beforeEach(() => {
        appUseCase = new AppUseCase();
    });

    it("returns hello world response", () => {
        // Act
        const result = appUseCase.execute();

        // Assert
        expect(result).toBe("Hello, world");
    });
});
