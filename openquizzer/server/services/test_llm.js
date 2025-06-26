const { summarizeAnswers } = require("./llm");

(async () => {
  const answers = [
    "The French Revolution was caused by inequality.",
    "Economic struggles played a big part in it.",
    "The monarchy was disconnected from the people.",
    "People were inspired by Enlightenment ideas.",
  ];

  const summary = await summarizeAnswers(answers);
  console.log(summary);
})();
