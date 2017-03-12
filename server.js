#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const debugMod = require("debug");
const http = require("http");
let debug = debugMod("socialaddressbook:server");
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env['PORT'] || '3000');
app_1.default.set('port', port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLCtCQUF3QjtBQUN4QixrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2pEOztHQUVHO0FBQ0gsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7QUFDeEQsYUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEI7O0dBRUc7QUFFSCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQUcsQ0FBQyxDQUFDO0FBRXBDOztHQUVHO0FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QixNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVwQzs7R0FFRztBQUVILHVCQUF1QixHQUFHO0lBQ3hCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixhQUFhO1FBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLGNBQWM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7O0dBRUc7QUFFSCxpQkFBaUIsS0FBSztJQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUTtVQUMvQixPQUFPLEdBQUcsSUFBSTtVQUNkLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFbkIsdURBQXVEO0lBQ3ZELE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CLEtBQUssUUFBUTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLCtCQUErQixDQUFDLENBQUM7WUFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFLLENBQUM7UUFDUixLQUFLLFlBQVk7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDO1FBQ1I7WUFDRSxNQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBRUg7SUFDRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUTtVQUMvQixPQUFPLEdBQUcsSUFBSTtVQUNkLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDaEMsQ0FBQyJ9