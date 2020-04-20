const express = require("express");
//get just the router from express
const router = express.Router();

let inventory = [];

// change app.get to router.get
// attatch a get route to the router.
//localhost:5000/inventory
// do not need the '/inventory', just the '/'
router.get("/", (req, res) => {
  console.log("in /inventory GET");
  res.send(inventory);
}); // end /inventory GET


// post request- change app to router
// localhost:5000/inventory/add
router.post("/add", (req, res) => {
  console.log("in inventory POST:", req.body);
  inventory.push(req.body);
  res.sendStatus(201);
});

// making router available to anyone who asks for it.
module.exports = router;
