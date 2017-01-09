export const fetchData = (api, path) => {
  return fetch(api)
  .then(response => response.json())
  .then(data => data[path])
  .catch(function(err) {
    console.log('fetch faqs error: ', err)
  })
}
