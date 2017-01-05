const fetchData = url => {
  return fetch(url, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    console.log('data: ', data)
  })
  .catch(function(err) {
   console.log('fetch error: ', err)
  })
}


// return new Promise((resolve, reject) => {
// const req = new XMLHttpRequest()
//   req.open('GET', url)
//   req.onload = () => {
//     if (req.status == 200) {
//       resolve(req.response)
//     } else {
//       reject(Error(req.statusText))
//     }
//   }
//   req.onerror = () => reject(Error("Network Error"))
//   req.send()
// })

// fetch(API, {
//   method: 'GET'
// })
// .then(function(response) {
//   return response.json()
// })
//  .then(function(data) {
//
//   quote.text = data.quote
//   quote.author = data.author
//   quote.link = data.permalink
//   setTimeout(function() {
//     $loader.fadeOut(400, function(){
//     $quoteContainer.show()
//     $showQuote.text(quote.text)
//     $quoteAuthor.text(quote.author)
//   })
//   }, 800)
// })
// .catch(function(err) {
//  console.log('fetch error: ', err)
// });
// const fetchJSON = url => HELPERS.getData(url).then(JSON.parse),
//   convertHTTPtoHTTPS: url => {
//     const isHTTPS = url.substring(0,4) === "https"
//     return isHTTPS? url : "https" + url.substring(4, url.length)
//   }
// }

// const fetchData = () => {
//      if($quoteContainer.is(':visible')){
//       $quoteContainer.fadeOut(400, function(){
//         $loader.show()
//        })
//      } else {
//        $loader.fadeIn(400)
//      }
//
  //   fetch(API, {
  //     method: 'GET'
  //   })
  //   .then(function(response) {
  //     return response.json()
  //   })
  //    .then(function(data) {
   //
  //     quote.text = data.quote
  //     quote.author = data.author
  //     quote.link = data.permalink
  //     setTimeout(function() {
  //       $loader.fadeOut(400, function(){
  //       $quoteContainer.show()
  //       $showQuote.text(quote.text)
  //       $quoteAuthor.text(quote.author)
  //     })
  //     }, 800)
  //   })
  //   .catch(function(err) {
	//    console.log('fetch error: ', err)
  //  });
//   }
