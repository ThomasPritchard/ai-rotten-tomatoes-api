import "reflect-metadata";
import { HealthcheckUseCase } from "../../../../src/useCases/app/healthcheck/healthcheck.usecase";
import { OpenAiProvider } from "../../../../src/providers/openAi/openAi.provider";

jest.mock("../../../../src/providers/openAi/openAi.provider");

describe("healthcheck", () => {
    let openAiProviderMock: OpenAiProvider;
    let healthcheckUseCase: HealthcheckUseCase;

    beforeEach(() => {
        openAiProviderMock = {
            createCompletion: jest
                .fn()
                .mockImplementation(() => "mock-completion"),
        } as unknown as OpenAiProvider;
        healthcheckUseCase = new HealthcheckUseCase(openAiProviderMock);
    });

    it("returns back a mock completion", async () => {
        // Act
        const result = await healthcheckUseCase.execute();

        // Assert
        expect(result).toBe("mock-completion");
    });
});
