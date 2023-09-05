const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const sequelize = require('./db');
require('./src/entity/index');
const app = express();
const IndexRouter = require('./src/router/index.router');
const errorMiddleware = require('./src/middleware/error-middleware');


app.use(express.json());
app.use('/api', IndexRouter);
app.use(errorMiddleware);



app.listen(process.env.PORT, async (error) => {
  if (!error) {
    await sequelize.sync();
    console.log(
      "Server is Successfully Running, and App is listening on port " +
        process.env.PORT
    );
  } else console.log("Error occurred, server can't start", error);
});
