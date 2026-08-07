import express from "express";
import employeeRoute from "./routes/employee.route"

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Employee Management API");
});

app.use("/employees", employeeRoute);

export default app;