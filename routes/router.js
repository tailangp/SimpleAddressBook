"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const users_1 = require("./users");
let RegisterAPI = (app) => {
    // all api calls handled here
    app.use("/api/index", index_1.default);
    app.use("/api/users", users_1.default);
};
exports.default = RegisterAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTRCO0FBQzVCLG1DQUE0QjtBQUk1QixJQUFJLFdBQVcsR0FBRyxDQUFDLEdBQW9CO0lBQ25DLDZCQUE2QjtJQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxlQUFLLENBQUMsQ0FBQztJQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxlQUFLLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixrQkFBZSxXQUFXLENBQUMifQ==