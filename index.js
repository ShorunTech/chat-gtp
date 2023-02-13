const { Configuration, OpenAIApi }= require ("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-lSELnaPPfpTkUXtbpVuRovk6",
    apiKey: "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"
    ,
});

const openai = new OpenAIApi(configuration);

const app = express()
const port = 3000 

app.post('/', async (req, res) => {
  const response = await openai.createComppletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });

    console.log(response.data.choices[0].text)
  res.json({
    data: response.data
  })


})



const openai = new OpenAIApi(configuration);

async function callApi() { 
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
       max_tokens: 7,
       temperature: 0,
  });

  console.log(response.data.choices[0].text)

}

callApi()