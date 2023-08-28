export function dateConverter(date: string, time: string) {
  const [day, month, year] = date.split("/");
  const [hour, minute] = time.split(":");

  return `${minute} ${hour} ${day} ${month} *`;
}
