import {$log} from "ts-log-debug";
import {Server} from "./Server";

$log.debug("Servidor iniciado...");
    new Server().start().catch((er) => {
    $log.error(er);
});
