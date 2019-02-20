import moment from 'moment';

export default (posts, {
  text, sortBy, startDate, endDate,
}) => posts.filter((post) => {
  const createdAtMoment = moment(post.createdAt);
  const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
  const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day') : true;
  const textMatch = post.title.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
  if (sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
  return 0;
});
