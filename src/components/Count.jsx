import { useState } from "react"

export default function Count() {

  const [count, setcount] = useState(0)

  function increment() {
    setcount(count + 1)
  }
  function decrement() {
    setcount(count - 1)
  }

  if(count < 5) {
    return (
      <div>
        <h1>Valor muito baixo</h1>
        <button onClick={decrement}>diminuir</button>
        <button onClick={increment}>aumentar</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Meu Contador {count}</h1>
      {/* { count > 9 ? <h3>Valor muito alto</h3> : null } */}
      <button onClick={decrement}>diminuir</button>
      <button onClick={increment}>aumentar</button>
    </div>
  )
}