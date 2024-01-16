export default class DateHelper {
  formatDate(dateInput) {
    let date = new Date(dateInput)

    if (isNaN(date.getTime())) {
      return 'No Date'
    }

    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    let year = date.getFullYear()
    return `${day}/${month}/${year}`
  }
}
