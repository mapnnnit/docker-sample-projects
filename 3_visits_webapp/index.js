const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();
const set_port = 8081;

app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        res.send("Number of visits is " + visits);
        client.set("visits", parseInt(visits) + 1)
    });
});

app.listen(set_port, () => {
    console.log("Listening on port " + set_port);
})