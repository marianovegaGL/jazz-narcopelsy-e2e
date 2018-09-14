var expect = require('chai').expect;
var jsonCopy = require("./resources/copy.resources.json");
var htmlToText = require('html-to-text');

describe('Narcolepsy Copy and Content Check', function () {
    
   
    jsonCopy.data.forEach(element => {

        it('should match the title and the coy based on the URL: ' + element.url, function () {
              
            browser.url(element.url);
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