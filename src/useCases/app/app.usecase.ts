import { provideSingleton } from "@expressots/core";

@provideSingleton(AppUseCase)
class AppUseCase {
    execute() {
        return "Hello, world";
    }
}

export { AppUseCase };
