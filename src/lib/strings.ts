export function nameToSlug(name?: string) {
  if (!name) return null;
  return name.toLowerCase().replaceAll(" ", "-");
}
