export function formatDate(iso?: string) {
  if (!iso) throw Error("formatDate requires an iso string as an argument.");

  // Convert ISO str to a date obj
  const date = new Date(iso);

  // Add one day to correct for time zone misinterpretation.
  date.setDate(date.getDate() + 1);

  // Return formatted date to user.
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
