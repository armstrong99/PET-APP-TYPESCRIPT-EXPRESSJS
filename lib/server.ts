import Logger from "./core/Logger";
import { port } from "./environment";
import app from "./config/app";

console.log(port);

app
  .listen(parseInt(port, 10) as number, () => {
    Logger.info(`server running on port : ${port}`);
    console.log(`server running on port : ${port}`);
  })
  .on("error", (e) => {
    Logger.error(e);
    console.log(e);
  });
