const express = require("express");
const router = express.Router();
const axios = require("axios");

let projects = [];
let notes = [];
const ACCESS_KEY = "secret_QEaI6MPUF0jvojsltXj9lCmCcjfJznR1xwIUURiubXc";
const PROJECT_TOKEN = "bb8c08d768a2428990305d0427d63665";
const NOTE_TOKEN = "d1619275de714a158cc8d90bef99ddb4";

function options(url, date, size, filter) {
  return {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${url}/query`,
    headers: {
      Accept: "application/json",
      "Notion-Version": date,
      Authorization: `Bearer ${ACCESS_KEY}`,
      'Content-Type': 'application/json',
    },
    data: {page_size: size, filter},
  }
}
const project_options = options(PROJECT_TOKEN, "2022-02-22", 20);
const note_options = options(NOTE_TOKEN, "2022-02-22", 100, {
  "and": [
    {
      "property": "view",
      "checkbox": {
        "equals": true
      }
    }
  ]
});

// ********** project ********** //
router.get("/api/project", async function(req, res, next) {
  
  await axios.request(project_options)
  .then(response => {
    projects = response.data.results;
  })
  .catch(error => {
    console.log("notion get projects error : ", error);
  });
  
  res.send(projects);
});

// ********** note ********** //
router.get("/api/note", async function(req, res, next) {

  await axios.request(note_options)
  .then(response => {
    notes = response.data.results;
  })
  .catch(error => {
    console.log("notion get notes error : ", error);
  });

  res.send(notes);
})



module.exports = router;