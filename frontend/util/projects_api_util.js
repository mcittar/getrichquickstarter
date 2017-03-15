export const scrapeProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects'
  });
};
