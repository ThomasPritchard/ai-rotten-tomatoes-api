import { CreateModule } from "@expressots/core";
import { VideoReportController } from "./videoReport.controller";

const videoReportModule = CreateModule([VideoReportController]);

export { videoReportModule };
