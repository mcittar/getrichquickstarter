export const scrapeProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects'
  });
};

export const addProject = project => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: {project}
  });
};
