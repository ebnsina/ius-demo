export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function dateLayout(date) {
  const res = date.split(', ');
  const [day, monthDate, year] = res;
  return { day, monthDate, year };
}
