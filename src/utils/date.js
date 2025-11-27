export const formatPostDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const dateInfos = date.toDateString().split(" ");
  const formattedDate = `${dateInfos[1]} ${dateInfos[2]}, ${dateInfos[3]}`;
  return formattedDate;
};
