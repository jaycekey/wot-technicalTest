const express = require("express");
const morgan = require("morgan");
const db = require("./database");
const { tasksRoutes } = require("./routes");

const PORT = process.env.PORT || 8080
const app = express();
app.use(express.json());
app.use(morgan("dev"));

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Sincronizado correctamente"))
  .catch((error) => console.log(error));

app.use("/api/v1", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});