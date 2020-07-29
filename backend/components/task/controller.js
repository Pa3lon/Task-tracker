module.exports = (router) => {
  router.get("/", (req, res) => {
    res.json({ name: "Bob" });
  });
};
