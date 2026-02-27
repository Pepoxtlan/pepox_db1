import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import userRoutes from "./routers/user.routes.js";
import subjectRoutes from "./routers/subject.routes.js"; 

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(userRoutes);
app.use(subjectRoutes); 

export default app;