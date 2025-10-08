const analyseNews = require('../services/AnalyseNews');
const fetchArticleText = require('../services/fetchArticleViaURL');

async function checkApi(req, res) {
  let articleText = '';
  try {
    const { url, text } = req.body;

    if (!url && !text) {
      return res
        .status(400)
        .json({ error: 'Either URL or text must be provided.' });
    }
    articleText = text || '';
    console.log('text received in backend:', text);

    if (url) {
      console.log('url received in backend:', url);
      articleText = await fetchArticleText(url);

      if (!articleText) {
        return res
          .status(500)
          .json({ error: 'Failed to fetch article content from URL.' });
      }
    }
    //   Placeholder credibility score logic
    const analysis = await analyseNews({
      text: articleText,
      url: req.body.url,
    });

    res.status(200).json({ analysis });
  } catch (error) {
    console.error('Error in checkApi:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

module.exports = { checkApi };
