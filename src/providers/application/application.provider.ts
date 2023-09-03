import { Application, Environments } from "@expressots/core";
import { provide } from "inversify-binding-decorators";

@provide(App)
class App extends Application {
    protected configureServices(): void {
        Environments.checkAll();
    }
}

export const app = new App();
