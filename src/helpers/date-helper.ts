export const formatDate = (dateString?: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  return `${formatter.format(date)}`;
};
