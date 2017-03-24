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

export const addComment = comment => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {comment}
  });
};
