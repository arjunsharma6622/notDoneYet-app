export const API_HEAD = process.env.NODE_ENV === "development" ? "http://192.168.0.108:8000" : "https://api.notdoneyet.in"
export const timeAgo = (dateString: string): string => {
  const inputDate = new Date(dateString);
  const now = new Date();

  const diffInSeconds = Math.floor(
    (now.getTime() - inputDate.getTime()) / 1000,
  );

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30; // Simplified month duration
  const year = day * 365; // Simplified year duration

  if (diffInSeconds < minute) {
    return "just now";
  }

  if (diffInSeconds < hour) {
    const minutes = Math.floor(diffInSeconds / minute);
    return `${minutes} min`;
  }

  if (diffInSeconds < day) {
    const hours = Math.floor(diffInSeconds / hour);
    return `${hours} hr`;
  }

  if (diffInSeconds < week) {
    const days = Math.floor(diffInSeconds / day);
    return `${days} day${days > 1 ? "s" : ""}`;
  }

  if (diffInSeconds < month) {
    const weeks = Math.floor(diffInSeconds / week);
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  }

  if (diffInSeconds < year) {
    const months = Math.floor(diffInSeconds / month);
    return `${months} month${months > 1 ? "s" : ""}`;
  }

  const years = Math.floor(diffInSeconds / year);
  return `${years} year${years > 1 ? "s" : ""}`;
};