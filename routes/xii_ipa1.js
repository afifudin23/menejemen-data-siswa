const express = require("express");
const router = express.Router();
const xii_ipa1 = require("../controller/xii_ipa1");

router.get("/", xii_ipa1.index);
router.get("/create", xii_ipa1.create);
router.post("/", xii_ipa1.storage);
router.get("/edit/:no", xii_ipa1.edit);
router.put("/:no", xii_ipa1.update);
router.delete("/:no", xii_ipa1.destroy);

module.exports = router;
