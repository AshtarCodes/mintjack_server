const User = require("../models/User");

module.exports = {
  win: async (req, res) => {

    const bet = Number(req.params.bet)
    console.log(bet, 'YOOO')


    try {
        const data = await User.findOneAndUpdate({ _id: req.params.id },
            {
                $inc: { totalMoney: bet }
            },
            { new: true}
        )
        res.json(data)
        console.log('user wins!')
      }catch (err) {
          console.log(err)
      }
  },
  lose: async (req, res) => {
    const bet = Number(req.params.bet)
    console.log(bet, 'YOOO')
    try {
        const data = await User.findOneAndUpdate({ _id: req.params.id },
            {
                $inc: { totalMoney: -bet }
            },
            { new: true}
        )
        res.json(data)
        console.log('user loses!')
      }catch (err) {
          console.log(err)
      }
  },
}  