export function groupHoursByProject(orders) {
  const map = {}
  orders.forEach(item => {
    if (!map[item.project]) {
      map[item.project] = 0
    }
    map[item.project] += item.hours
  })
  return {
    projects: Object.keys(map),
    hours: Object.values(map)
  }
}