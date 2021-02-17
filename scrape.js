const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.seafoodwatch.org/recommendations/search?query=%3Aspecies%3BAtlantic%20bluefin%20tuna",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      // selecting things from DOM like jquery
      const $ = cheerio.load(html);

      const fishTitle = $(".recommendation-search-item-title");
      //   console.log(fishTitle);
      console.log(fishTitle.text());
    }
  }
);
