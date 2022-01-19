import React, { useEffect, useState, useMemo } from 'react'
import { fromEvent, Observable } from 'rxjs'
import { scan, throttleTime, debounceTime, map } from 'rxjs/operators'

function subscribe(subscriber) {
  const intervalId = setInterval(()=> {
    subscriber.next('Hi')
  }, 1000)
  return function unsubscribe() {
    clearInterval(intervalId)
  }
}
const unsubscribe = subscribe({next: (x)=> console.log(x)})

unsubscribe()

// const observable = new Observable(function subscribe(subscriber) {
//   const intervalId = setInterval(()=> {
//     subscriber.next('Hi')
//   }, 1000)
//   return function unsubscribe() {
//     clearInterval(intervalId)
//   }
// })


// const observable = new Observable(subscriber=> {
//   subscriber.next(1)
//   subscriber.next(2)
//   subscriber.next(3)
//   subscriber.complete()
//   setTimeout(()=> {
//     subscriber.next(4)
  
//   }, 1000)
// })

// console.log('just before subscribe')
// observable.subscribe({
//   next(x) {console.log(`value: ${x}`)},
//   error(err) {console.error(`something wrong ${err}` )},
//   complete() {console.log('done')}
// })
// console.log(`just after subscribe`)

function Index() {
  useEffect(() => {
    fromEvent(document, 'click')
      .pipe(
        throttleTime(1000),
        map(event=> event.clientX),
        scan((count,clientX) => count + clientX, 0)
      )
      .subscribe((count) => console.log(`Clicked ${count}`))
  }, [])

  // const foo = new Observable(subscribe=> {
  //   console.log('Hello')
  //   subscribe.next(42)
  // })
  // foo.subscribe(x=> console.log(x))
  // foo.subscribe(y=> console.log(y))


  return <div>1111</div>
}

export default Index



// const obj = {
//   "elesJsonForCopy" : [{
//     "data-type":"img",
//     "data-img-kind":"image/jpeg",
//     "data-elem": {
//       "id":1807359950,
//       "width":1469.6807436192491,
//       "height":1469.6807436192464,
//       "opacity":1,
//       "imgWidth":320,
//       "imgHeight":320,
//       "viewBox":"0 0 320 320",
//       "shadow":{"rotate":315,"color":{"r":0,"g":0,"b":0},"blur":6,"offset":15,"opacity":0.3,"show":false},
//       "lock":false,
//       "filter":{"brightness":0,"contrast":0,"crossProcess":0,"gaussianBlur":0,"saturation":0,"tint":0},
//       "isCut":false,
//       "dataImgUrl":false,
//       "colorful":{"default":"","overlay":{"r":-1,"g":-1,"b":-1,"a":0},
//       "adjust":{"brightness":0,"contrast":0,"crossProcess":0,"gaussianBlur":0,"saturation":0,"tint":0}}},
//       "transform":"translate(376.16934138670416, 254.0377356194825)rotate(0,734.8403718096246,734.8403718096232)",
//       "reverse":"rotate(0,0,0) matrix(1,0,0,1,0,0) translate(0,0)",
//       "group":"",
//       "group-transform":"",
//       "eleid":"ele1642403560127_8575_4",
//       "reverseType":[0,0]}],
//   "pageIdForCopy": "0062c9822598280201085375",
//   "editorPostionForCopy": {
//     "left":376.16934138670416,
//     "top":254.0377356194825,
//     "width":1469.6807436192491,
//     "height":1469.6807436192464,
//     "right":1845.8500850059531,
//     "bottom":1723.7184792387288
//   },
//   "designKindIdForCopy": 176
// }