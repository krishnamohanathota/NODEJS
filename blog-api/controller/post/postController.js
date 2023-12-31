const postCreateCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Post created" });
  } catch (error) {
    res.json(error.message);
  }
};

const postDetailsCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Post Data" });
  } catch (error) {
    res.json(error.message);
  }
};

const postsCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "All Posts" });
  } catch (error) {
    res.json(error.message);
  }
};

const postDeleteCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Delete Post" });
  } catch (error) {
    res.json(error.message);
  }
};

const postUpdateCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Post Update" });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  postCreateCtrl,
  postDetailsCtrl,
  postsCtrl,
  postDeleteCtrl,
  postUpdateCtrl,
};
