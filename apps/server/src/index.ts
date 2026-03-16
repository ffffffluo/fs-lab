import express from "express";
import cors from "cors";
import { employeeController } from "./controllers/employeeController";

const app = express();
app.use(cors());
app.use(express.json()); // Allows Express to read JSON bodies

// The Routes
app.get("/api/employees", employeeController.getDepartments);
app.post("/api/employees", employeeController.createEmployee);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
