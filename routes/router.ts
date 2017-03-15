import index from "./index";
import users from "./users";

import * as express from "express";

let RegisterAPI = (app: express.Express) => {
    // all api calls handled here
    app.use("/api/index", index);
    app.use("/api/users", users);
};

export default RegisterAPI;
