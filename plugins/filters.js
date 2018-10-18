import Vue from 'vue'

Vue.filter('toList', function (array) {
    return array.join(', ')
})

Vue.filter('capitalize', function (string) {
  if (!string) return ''

  string = string.toString()
  return string.charAt(0).toUpperCase() + string.slice(1)
})

Vue.filter('capitalizeArraw', function (array) {
  if (!string) return ''

  array.forEach(item => {
          return filters.capitalize(qualificationItem)
        })
})

Vue.filter('usd', function (string) {
    return `${string} $`
})

