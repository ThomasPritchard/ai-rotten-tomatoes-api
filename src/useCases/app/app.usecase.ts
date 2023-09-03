import { provide } from "inversify-binding-decorators";

@provide(AppUseCase)
class AppUseCase {
    execute() {
        return "Hello, world";
    }
}

export { AppUseCase };