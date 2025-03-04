export function generateRandomPhoneNumber() {
  return "0" + Math.floor(Math.random() * 1e9);
}
export function generateRandomBirthday() {
  const start = new Date(1990, 0, 1);
  const end = new Date(2010, 0, 1);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
export function generateRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  return `user${Math.floor(Math.random() * 1e6)}@${
    domains[Math.floor(Math.random() * domains.length)]
  }`;
}
export function generateRandomCountry() {
  const countries = [
    "Vietnam",
    "USA",
    "UK",
    "France",
    "Germany",
    "Japan",
    "China",
    "Korea",
  ];
  return countries[Math.floor(Math.random() * countries.length)];
}
