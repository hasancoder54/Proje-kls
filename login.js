import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.urlencoded({ extended: true }));

const USERNAME = "admin";
const PASSWORD = "admin123";

app.get("/login", (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form method="POST" action="/api/login/login">
      <label>Username:</label><br/>
      <input name="username" required /><br/><br/>
      <label>Password:</label><br/>
      <input type="password" name="password" required /><br/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    res.send("Login successful!");
  } else {
    res.send("Invalid username or password");
  }
});

export const handler = serverless(app);