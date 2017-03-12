import index from './users';
import users from './index';
import * as express from 'express';

let ApiRouter = (app : express.Express) =>{
    app.use("./api/index", index);
    app.use("./api/users", users);
}
export default ApiRouter; 
