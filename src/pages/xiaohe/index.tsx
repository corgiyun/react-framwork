import React, { useEffect, useState, useMemo } from 'react'
import { a as a1, b as b1 } from 'npm-test'
import Button from '../../components/Button'



export default function Index() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(1)
  console.log(a1, b1);

  const computed = (num) => {
    console.log('computed');
    return num + 1
  }
  const result = useMemo(() => computed(b), [b])
  console.log(process.env);
  return <Button onClick={() => setA(a + 1)} attr="primary">点击{result}</Button>
}
