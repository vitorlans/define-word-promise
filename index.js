/* 

All definitions from Dictionary.com
All synonyms from Thesaurus.com

//////////////////////////////////////////////////////////////////////////////////////////////////////
// You must give credit for that in your project if you use this code but don't install the module //
/////////////////////////////////////////////////////////////////////////////////////////////////////

Happy defining! 

*/

exports.define = function returnDefObject(term) {
    var defstring;
    var req = require("request")
    var cher = require("cheerio")
    //var deasync = require("deasync")
    function getUrl(termname) {
        return "http://www.dictionary.com/browse/" + term.toLowerCase().replace(/[^a-z]/gi, "") + "?s=t";
    }
    req(getUrl(term), function(error, resp, body) {
        defstring = cher.load(body)("#source-luna > div:nth-child(1) > section > div.source-data > div.def-list > section:nth-child(1)").text()
    });
    while (defstring === undefined) {
        console.log("loop")
        deasync.runLoopOnce()
    }
    var badArr = defstring.trim().replace(/\: \n(.+?)(?=\n)/g, "").replace(/\n/g, "").replace(/\r/g, "").replace(/  /gi, "").split(/\d\./gi)
    function stringIsBad(string) {
        return (string.substring(string.length - 2, string.length).substring(0, 1) === "." || string.substring(string.length - 2, string.length).substring(0, 1) === "?" || string.substring(string.length - 2, string.length).substring(0, 1) === "!") && isNaN(string.substring(string.length - 2, string.length).substring(1, 1)) === false
    }
    for (var i = 0; i < badArr.length; i++) {
        if (stringIsBad(badArr[i]) === true) badArr[i] = badArr[i].substring(0, badArr[i].length - 1)
    }
    var defs = badArr
    var defsobj = {}
    defsobj['type'] = defs[0]
    defsobj['definitions'] = []
    for (var i = 1; i < defs.length; i++) {
        defsobj['definitions'].push(defs[i])
    }
    return defsobj;
}
exports.synonyms = function synonyms(word) {
    var synstring;
    var req = require("request")
    var cher = require("cheerio")
    var deasync = require("deasync")
    function getUrl() {
        return "http://www.thesaurus.com/browse/" + word.toLowerCase().replace(/[^a-z]/gi, "") + "?s=t";
    }
    req(getUrl(), function(error, resp, body) {
        synstring = cher.load(body)('#filters-0 > div.relevancy-block > div.relevancy-list').text()
    });
    while (!synstring) {
        deasync.runLoopOnce()
    }
    var updatedArray = []
    var synarr = synstring.trim().replace(/star/g, "").replace(/  /g, "").replace(/         /g, " ").replace(/ /g, "SPACE+HERE").replace(/\n/g, " ").replace(/\r/g, " ").split(" ");
    for (var i = 0; i < synarr.length; i++) {
        if (!(synarr[i] === "SPACE+HERE" || synarr[i] === '')) {
            updatedArray.push(synarr[i].replace(/SPACE\+HERE/g, " "))
        }
    }
    return updatedArray;
}