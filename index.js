const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req, res) => {
let { source_addr, dest_addr, channel, timeUtc, transaction_id, message, billing } = req.body;

 res.json({
         transaction_id,
         successful: true 
        });
});

app.listen(3000, () => console.log("app running on port 3000"));