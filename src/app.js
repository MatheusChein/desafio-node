const express = require("express");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());

const repositories = [];

app.get("/repositories", (request, response) => {
  response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const newRepo = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(newRepo);
  
  response.json(newRepo);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const {title, url, techs} = request.body
  
  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
    response.status(400).json({error: 'Repository not found'});
  }

  const updatedRepo = {
    ...repositories[repoIndex],
    title,
    url,
    techs
  }

  repositories[repoIndex] = updatedRepo;

  response.json(updatedRepo);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  
  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
    response.status(400).json({error: 'Repository not found'});
  }
  
  repositories.splice(repoIndex, 1);

  response.json({message: 'Repository deleted succesfully'})
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
    response.status(400).json({error: 'Repository not found'});
  }

  repositories[repoIndex].likes += 1;


  response.json(repositories[repoIndex]);
});

module.exports = app;
