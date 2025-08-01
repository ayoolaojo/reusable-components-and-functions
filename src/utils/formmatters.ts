export function formatName(name: string): string {
  return name
    .split(' ') // split into words: ['ayoola', 'ojo']
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ) // Capitalize each word
    .join(' '); // Join back into a full name
}


export function calculateAge(dob:string):number{
    const birthdate = new Date(dob)
    const today = new Date()

    let age = today. getFullYear() - birthdate.getFullYear()
    const monthDiff = today.getMonth() - birthdate.getMonth()
    const dayDiff = today.getDate() - birthdate.getDate()

    if (monthDiff < 0 ||(monthDiff === 0 && dayDiff < 0) ){
        age--
    }

    return age
}
