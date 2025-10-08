const axios = require('axios');
const openAI = require('openai');
require('dotenv').config();

const RELIABLE_SOURCES = [
  'Premium Times (https://www.premiumtimesng.com)',
  'The Punch (https://punchng.com)',
  'Vanguard (https://www.vanguardngr.com)',
  'The Guardian (https://guardian.ng)',
  'Channels Television (https://www.channelstv.com)',
];

const client = new openAI.OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function analyseNews({ url, text }) {
  const messages = [
    {
      role: 'system',
      content: `You are an expert fact-checker and misinformation analyst. Your task is to analyze news articles for credibility and detect potential fake news.

You will be provided with:
1. The news text to analyze
2. Data from reliable news sources ${RELIABLE_SOURCES.join(', ')}
3. Source URL (if available)

Analyze the news and provide:
1. A credibility score (0-100, where 100 is highly credible)
2. Detailed reasons for your assessment
3. Red flags or concerns identified
4. Verification status based on reliable sources
5. Recommendations

Be thorough, objective, and consider:
- Language patterns (sensationalism, emotional manipulation)
- Factual claims and verifiability
- Source credibility
- Presence in reliable news outlets
- Logical consistency
- Bias indicators
- Return a JSON like:
{
  "credibility_score": <0-100>,
  "explanations": ["reason 1", "reason 2"],
  "final_verdict": "<credible|likely_credible|uncertain|false>"
}`,
    },
    {
      role: 'user',
      content: `Please analyze this news for fake news detection:

**News Text:** ${text || 'Not provided'}
**Source URL:** ${url || 'Not provided'}`,
    },
  ];
  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.3,
  });

  const reply = response.choices?.[0]?.message?.content;
  try {
    const parsed = JSON.parse(reply);
    return parsed;
  } catch {
    return { error: 'Invalid JSON format', raw: reply };
  }
  console.log(response);
}

module.exports = analyseNews;
