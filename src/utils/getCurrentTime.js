export default () => {

  const date = new Date()
  const time = date.toLocaleTimeString("ru-RU")
  const localeDate = date.toLocaleDateString("ru-RU")

  return `${localeDate}|${time}`
}

