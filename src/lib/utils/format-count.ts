export function formatCount(count: number): string {
  return `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
}
