import express from "express";
import session from "express-session";
import cors from "cors";

import path from "path";
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cors({
    // origin: "https://cors.site.com:3000",
    credentials: true,
  })
);

app.use(session({
  name: 'session.id',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: { sameSite: "none", secure: true },
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
