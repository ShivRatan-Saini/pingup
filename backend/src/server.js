import express from "express";
import dotenv from "dotenv";
import authRouts from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// app.get("/api/auth/signup", (req, res) => {
//   res.send("SignUp endpoint");
// });
// app.get("/api/auth/login", (req, res) => {
//   res.send("Login endpoint");
// });
// app.get("/api/auth/logout", (req, res) => {
//   res.send("Logout endpoint");
// });

app.use("/api/auth", authRouts);
app.use("/api/messages", messageRoute);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT} `);
});
