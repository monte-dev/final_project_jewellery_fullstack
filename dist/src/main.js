"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    await app.enableShutdownHooks();
    const configService = app.get(config_1.ConfigService);
    app.use(cors({
        origin: 'http://localhost:3001',
        credentials: true,
    }));
    await app.listen(configService.get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map