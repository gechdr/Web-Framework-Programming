const express = require("express");
const contactController = require("../controllers/contact");
const router = express.Router();
const contactRouter = express.Router();

contactRouter.get("/", contactController.get);
contactRouter.post("/", contactController.insert);
// contactRouter.put("/:id", contactController.update);
contactRouter.delete("/:id", contactController.delete);

router.use("/api/contacts", contactRouter);

module.exports = router;
