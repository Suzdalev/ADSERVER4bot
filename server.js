const telebot = require('telebot')
var parseString = require('xml2js').parseString;
var req = require('request')

var bot = new telebot('446901648:AAFRflfyHNclwkBUzOEbCCOEirH4v-gLWC4')

String.prototype.contains = function (a) {
    return !!~this.indexOf(a);
};

var XmlBody = ""


bot.on(/^\/add_supply_link (.+)$/, (msg, props) => {
    const _link = props.match[1];




    

    req(_link, function (error, response, bo    dy) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        console.log(body)
        if (!(body.contains("<?xml")))   {
             bot.sendMessage(msg.from.id, 'Error adding link');
        } else {
             bot.sendMessage(msg.from.id, 'Supply link added: ' + _link);
            XmlBody = body;
        }


    });

    parseString(XmlBody, function (err, result) {
        console.log(result);
    });


});

bot.start();