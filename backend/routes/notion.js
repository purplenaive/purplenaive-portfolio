const express = require("express");
const router = express.Router();
const axios = require("axios");

let projects = [];
let works = [];
const PROJECT_TOKEN = "bb8c08d768a2428990305d0427d63665";
const GALLERY_TOKEN = "914c534dd5514aac9c296bc057362f4d";
const ACCESS_KEY = "secret_QEaI6MPUF0jvojsltXj9lCmCcjfJznR1xwIUURiubXc";

function options(url) {
  return {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${url}/query`,
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
    data: {page_size: 20},
  }
}
const project_options = options(PROJECT_TOKEN);
const gallery_options = options(GALLERY_TOKEN);

// ***** project *****
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

// ***** work *****
router.get("/api/work", async function(req, res, next) {
  await axios.request(gallery_options)
    .then(response => {
      works = response.data.results;
    })
    .catch(error => {
      console.log("notion get works error : ", error);
    })
  res.send(works);
})

module.exports = router;