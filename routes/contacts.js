const router = require("express").Router();
const contactscontroller = require("../controller/contacts");

router.get("/", contactscontroller.getAll);
router.get("/:id", contactscontroller.getSingle);

module.exports = router;
