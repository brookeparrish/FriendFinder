const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes");
// const apiRoutes = require("./app/routing/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// used to read arrays/strings that the FORM POSTs.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

htmlRoutes(app);
// apiRoutes(app);

app.listen(PORT, function () {
    console.log(`FF app listening on PORT :${PORT}`);
});