import http from "node:http";

import { jsonHandler } from "./middleware/jsonHandler.js";

async function listener(request, response) {
    await jsonHandler(request, response)
}

const server = http.createServer(listener).listen(3333)
