const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-lSELnaPPfpTkUXtbpVuRovk6",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function callApi() { 
    const response = await openai.createCompletion({
      model: "text-davinci-003",