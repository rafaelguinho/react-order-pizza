export const formatTime = (timestamp) => {
  var date = new Date(timestamp);
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};