const router = require("express").Router();

router.get("/test", (req, res) => {
  res.json({
    message: "It Works",
  });
});

module.exports = router;
