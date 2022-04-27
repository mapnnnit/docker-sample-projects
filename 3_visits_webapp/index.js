const set_port = 8081;
const redis_port = 6379;

const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: redis_port
});
client.set("visits", 0);

app.get("/", (req, res) => {
    // process.exit(0);
    client.get("visits", (err, visits) => {
        res.send("Number of visits is " + visits);
        client.set("visits", parseInt(visits) + 1);
    });
});

app.listen(set_port, () => {
    console.log("Listening on port " + set_port);
})