const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API documentation for managing contacts"
  },
  host: "localhost:3000",
  schemes: ["http"],
  definitions: {
    Contact: {
      firstName: "John",
      lastName: "Test",
      email: "johnT@example.com",
      favoriteColor: "Blue",
      birthday: "01-01-1990"
    }
  }
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
