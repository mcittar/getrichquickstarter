export const scrapeTags = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/tags',
  });
};
