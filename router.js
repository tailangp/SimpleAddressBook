"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const index_1 = require("./index");
let ApiRouter = (app) => {
    app.use("./api/index", users_1.default);
    app.use("./api/users", index_1.default);
};
exports.default = ApiRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTRCO0FBQzVCLG1DQUE0QjtBQUc1QixJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQXFCO0lBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQUssQ0FBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQUssQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQTtBQUNELGtCQUFlLFNBQVMsQ0FBQyJ9