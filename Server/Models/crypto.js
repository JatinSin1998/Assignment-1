const mongoose = require("mongoose");

const CryptoSchema = new mongoose.Schema({
  exchange_id: String,
  website: String,
  name: String,
  volume_1day_usd: String,
  volume_1hrs_usd: String,
  volume_1mth_usd: String,
  url: String,
},
{timestamps: true});

const Crypto = mongoose.model("Crypto", CryptoSchema)
module.exports = Crypto



