import "dotenv/config";
import { app } from "./modules/app/app";

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
