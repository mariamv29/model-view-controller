const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Thought } = require("../../models");

router.get("/", (req, res) => {
  Thought.findAll()
  .then(dbThoughtData => res.json(dbThoughtData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//create new post /api/Thoughts
router.post('/', withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Thought.create({
      thought_text: req.body.thought_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});


router.delete('/:id', withAuth, (req, res) => {
  Thought.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
