import app from "./src/app";
import { initAppDS } from "./src/app-data-source";

// establish database connection
initAppDS();

const port = process.env.PORT || "3000";

app.listen(port, () => console.log(`Sever is running on port ${port}`));
