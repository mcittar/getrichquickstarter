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
    data: JSON.stringify({project}),
    contentType: 'application/json'
  });
};

export const scrapeFilteredProjects = (filter) => {
  return $.ajax({
    method: 'GET',
    url: 'api/searches',
    data: {filter}
  });
};
