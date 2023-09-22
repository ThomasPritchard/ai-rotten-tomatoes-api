import { AppExpress } from "@expressots/adapter-express";
import { IProvider, Provider } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { container } from "../../app.container";

@provide(App)
export class App extends AppExpress {
    private provider: IProvider;

    constructor() {
        super();
        this.provider = container.get<IProvider>(Provider);
    }

    protected configureServices(): void {
        this.provider.envValidator.checkAll();
    }
}
