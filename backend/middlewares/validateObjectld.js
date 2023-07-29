const mongoose = require("mongoose");

module.exports = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "Not found" })
    }
    next()
}