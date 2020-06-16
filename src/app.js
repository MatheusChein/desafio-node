const express = require("express");
const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());

const repositories = [];

function validateRepoId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({error: 'Invalid Repository ID' })
  }

  return next();
}

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

app.put("/repositories/:id", validateRepoId, (request, response) => {
  const { id } = request.params;
  const {title, url, techs} = request.body
  
  const repoIndex = repositories.findIndex(repo => repo.id === id);

  const updatedRepo = {
    ...repositories[repoIndex],
    title,
    url,
    techs
  }

  repositories[repoIndex] = updatedRepo;

  response.json(updatedRepo);
});

app.delete("/repositories/:id", validateRepoId, (request, response) => {
  const { id } = request.params;
  
  const repoIndex = repositories.findIndex(repo => repo.id === id);
  
  repositories.splice(repoIndex, 1);

  response.json({message: 'Repository deleted succesfully'})
});

app.post("/repositories/:id/like", validateRepoId, (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  repositories[repoIndex].likes += 1;

  response.json(repositories[repoIndex]);
});

module.exports = app;
