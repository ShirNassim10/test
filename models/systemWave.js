const mongoose = require('mongoose')

const systenWaveSchema = mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    subject: {type:String, require: true},
    body: {type: String,require: true},
    files: [String],
    to:{type:String,require: true},
    from:{type:String,require: true},
    source:{type:String,require: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('SystemWave', systenWaveSchema)