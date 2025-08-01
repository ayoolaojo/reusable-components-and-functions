export function formatName(name: string): string {
  return name
    .split(' ') // split into words: ['ayoola', 'ojo']
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ) // Capitalize each word
    .join(' '); // Join back into a full name
}
