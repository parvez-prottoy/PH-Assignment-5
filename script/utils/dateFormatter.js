function dateFormatter() {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}
