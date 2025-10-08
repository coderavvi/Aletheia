class NewsAnalysis {
  constructor({ credibility_score, explanations, final_verdict }) {
    this.credibility_score = credibility_score;
    this.explanations = explanations;
    this.final_verdict = final_verdict;
  }
}

module.exports = NewsAnalysis;
