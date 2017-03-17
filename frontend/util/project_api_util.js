export const scrapeProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  });
};
