const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/dist"));
if (process.env.NODE_ENV === "production") {
	//express will serve up production assest
	//like  our main.js or main.css files
	app.use(express.static("/dist"));

	//express will serve up index.js file if it doesn't recognizes the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "dist", "index.html"));
	});
}

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => console.log("app is running on port :", port));
