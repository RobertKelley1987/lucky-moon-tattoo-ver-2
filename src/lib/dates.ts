export function formatDate(iso?: string) {
  if (!iso) return null;

  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
