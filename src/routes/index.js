const { Router } = require("express");
const router = Router();
const routes = require("./v1/index");

router.use("/v1", routes);

module.exports = router;
