const BidModel = require("../models/bid");

const BidController = {};

BidController.create = async (req, res) => {
    try {
        let Bid = {};
        Bid.name = req.body.Name;
        Bid.date = req.body.Date;
        Bid.opening_price = req.body.openingPrice;

        let bidToAdd = new BidModel(Bid);
        const savedbid = await bidToAdd.save();

        let Higher = await BidModel.find({ "opening_price": { "$gt": Bid.opening_price } })
        let bidmsg = '';
        if (Higher.length > 0) {
            bidmsg = 'lower'
        } else {
            let Lower = await BidModel.find({ "opening_price": { "$lt": Bid.opening_price } })
            if(Lower.length > 0)
                bidmsg = 'higher'
            else
                bidmsg = 'No Data'
        }

        res.status(200).send({
            code: 200,
            status: "success",
            message: bidmsg,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            code: 400,
            status: "error",
            message: "Error in adding new bid",
            data: [],
        });
    }
};

module.exports = BidController