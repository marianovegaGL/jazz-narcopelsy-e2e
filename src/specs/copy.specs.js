var expect = require('chai').expect;
var jsonCopy = require("./resources/copy.resources.json");

describe('Narcolepsy Copy and Content Check', function () {
      
    jsonCopy.data.forEach(element => {

        it('matchCopyandImage ' + element.name, function () {
              
            browser.url(element.url);
            var result = browser.checkViewport()[0];
            console.log(result.isWithinMisMatchTolerance);

            expect(result.isWithinMisMatchTolerance).to.be.true

            expect(browser.getTitle()).to.be.eql(element.title);
          //  console.log("Assert the page title")
           
            var websiteContent =  browser.getHTML("body");
            //console.log(websiteContent);

            element.copy.forEach(copy => {
                expect(websiteContent).to.contain(copy);
                //console.log('Assert the copy content: ' + copy);
            })
            
        })
    });  
})