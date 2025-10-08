const axios = require('axios');
const cheerio = require('cheerio');
const he = require('he');

async function fetchArticleText(url) {
  try {
    const { data: html } = await axios.get(url);

    // console.log('HTML fetched successfully from URL', html);

    const $ = cheerio.load(html);

    // Select possible article containers
    let articleText =
      $('.entry-content').text() ||
      $('.post-content').text() ||
      $('.single-article-text').text() ||
      $('article').text();

    // clean and decode HTML entities
    articleText = he.decode(articleText.replace(/\s+/g, ' ').trim());

    return articleText;
  } catch (err) {
    console.error('Error fetching article:', err.message);
    return null;
  }
}
module.exports = fetchArticleText;
