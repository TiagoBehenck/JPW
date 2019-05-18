"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_log_debug_1 = require("ts-log-debug");
const Server_1 = require("./Server");
ts_log_debug_1.$log.debug("Start server...");
new Server_1.Server().start().catch((er) => {
    ts_log_debug_1.$log.error(er);
});
//# sourceMappingURL=index.js.map