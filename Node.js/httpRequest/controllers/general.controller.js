home  = (req,res) => {
    res.send([
      {
        id: 0,
        name: "Sir Issac Newton",
      },
      {
        id: 1,
        name: "Sir Gottrieb Wilhiem Liebnitz",
      },
    ]);
}

module.exports = {
    home
}