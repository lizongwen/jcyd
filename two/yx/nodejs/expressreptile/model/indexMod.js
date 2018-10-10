let request = require('request');
let cheerio = require('cheerio');
let indexMod = {
    getData: function(fn) {
        request('http://www.baidu.com', function(error, response, body) {
            if (response.statusCode == 200) {
                let $ = cheerio.load(body);
                fn($("#su").val());
                //或者通过选择器找HTML片段
                //fn($("选择器").html())
            }
        });
    }
}
module.exports = indexMod