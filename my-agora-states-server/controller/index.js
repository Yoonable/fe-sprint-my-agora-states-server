const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const{ id } = req.params;
    const filtered = discussionsData.filter((ele) => {
      return ele.id === Number(id)
    })
    if(filtered.length === 0){
      return res.status(404).json({})
    } else {
      return res.json(filtered[0])
    }
  }
};

module.exports = {
  discussionsController,
};
