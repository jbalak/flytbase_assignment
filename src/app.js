require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const allRoutes = require("./routes/index");
const apiRoutes = express.Router();
const dbConnect = require("./db");
const { apiLimiter, authTokenCheck, checkError } = require("./middlewares");

// Helmet
app.use(helmet());

//BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MORGAN LOGS
// log only 4xx and 5xx responses to console
app.use(morgan("combined"));
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 200;
    },
  })
);

// log all requests to access.log
app.use(
  morgan("short", {
    stream: fs.createWriteStream(
      path.join(`${__dirname}/../`, "logs", "access.log"),
      {
        flags: "a",
      }
    ),
  })
);

//CORS
app.use(cors());

//db connect
dbConnect();

// api limit
apiRoutes.use(apiLimiter);

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/", allRoutes);
// //Auth token verification
apiRoutes.use(authTokenCheck);

app.use("/api", apiRoutes);

// // Error Handler
app.use(checkError);

module.exports = app;
