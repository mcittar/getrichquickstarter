export const addContribution = contribution => {
  return $.ajax({
    method: 'POST',
    url: 'api/contributions',
    data: {contribution}
  });
};
