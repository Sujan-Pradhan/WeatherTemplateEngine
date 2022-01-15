const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 8000;

//middleware
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

//routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Oops! What the hack goin on guys😟😟",
  });
});

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
