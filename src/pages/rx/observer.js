import React from 'react'
import { Subject, from, BehaviorSubject, ReplaySubject } from 'rxjs'
import {multicast} from 'rxjs/operators'

const Index = () => {
  const subject = new ReplaySubject(10, 1000) //  o is the initial value
  
  subject.subscribe({
    next: (v)=> console.log(`observerA: ${v}`)
  })

  // let i = 1
  // setInterval(()=> subject.next(i++), 300)


  setTimeout(()=> {
    subject.subscribe({
      next: (v)=> console.log(`observerB: ${v}`)
    })
  }, 1000)
  
  return <div>1</div>
}

export default Index()
