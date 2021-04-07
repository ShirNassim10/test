


// const example =require('./models/example');

// module.exports.Example=example





//@shirNassim
function Common() {
    //empty array to hold mongoose Schemas
    this.models = {};
}

Common.prototype.init = function(mongoose) {
    mongoose.connect("mongodb+srv://rivka:314792rb@cluster0.iutps.mongodb.net/leaderDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
    console.log("connected");
});
   const googlecontact= require('./models/contactGoogle');
   const systemWave= require('./models/systemWave');
    //add more model references here

    //This is just to make referencing the models easier within your apps, so you don't have to use strings. The model name you use here must match the name you used in the schema file
    this.models = {
        Googlecontact: googlecontact,
        SystemWave: systemWave
    }
}

var common = new Common();

module.exports = common;
