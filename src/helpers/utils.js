export function listsHaveCommon(list1, list2) {
  /*
   * Returns true if one element of list1 is also in list2
   * false otherwise
   */
  for (let i=0, l=list2.length; i < l; i++) {
    if (list1.indexOf(list2[i]) > -1) return true
  }
  return false
}

export function formatFileSize(bytes, precision = 1) {
  if (isNaN(bytes) || ! isFinite(bytes)) return '-'
  let units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  let number = Math.floor(Math.log(bytes) / Math.log(1024))
  return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + units[number]
}

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

export function isTrue(array) {
  return array.filter(i => i)
}

export function getItemByKey(array, propertyName, propertyValue) {
  // return first array element where propertyName equal propertyValue
  return array.find((item) =>
    item[propertyName] === propertyValue
  )
}

export function appendToArray(item, array) {
  let new_array = array.slice()
  new_array.push(item)
  return new_array
}
