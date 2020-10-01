const { Post, user_post, PhasePost } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      //유저의 좋아요글목록수, 파도이어가기 수, 파도 일으키기

      const countCreateWave = await Post.count({
        where: {
          create_user: req.session.passport.user,
        },
      });

      const countJoinWave = await PhasePost.count({
        where: {
          user_id: req.session.passport.user,
        },
      });

      const countLikeWave = await user_post.count({
        where: {
          user_id: req.session.passport.user,
        },
      });

      const countPosts = {
        countCreateWave,
        countJoinWave,
        countLikeWave,
      };

      res.status(200).json(countPosts);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  },
};
