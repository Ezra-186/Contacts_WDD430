const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const cors = require('cors');


const mongodb = require("./data/database");
const app = express();

const port = process.env.PORT || 3000;

// Parse JSON request bodies before routing
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", require("./routes"));
app.use(cors());

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
        
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node running at http://localhost:${port}`)});
    }
});
