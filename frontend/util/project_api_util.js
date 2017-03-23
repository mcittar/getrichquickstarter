export const scrapeProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  });
};

export const addContribution = contribution => {
  return $.ajax({
    method: 'POST',
    url: 'api/contributions',
    data: {contribution}
  });
};
