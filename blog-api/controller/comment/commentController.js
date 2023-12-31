const commentCreateCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Comment created" });
  } catch (error) {
    res.json(error.message);
  }
};

const commentDetailsCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Comment Details" });
  } catch (error) {
    res.json(error.message);
  }
};

const commentsCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "All comments" });
  } catch (error) {
    res.json(error.message);
  }
};

const commentDeleteCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Delete comment" });
  } catch (error) {
    res.json(error.message);
  }
};

const commentUpdateCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Update comment" });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  commentCreateCtrl,
  commentDetailsCtrl,
  commentsCtrl,
  commentDeleteCtrl,
  commentUpdateCtrl,
};
