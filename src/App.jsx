import { useEffect, useState } from "react"
//import Count from './components/Count'
//import List from './components/List'

/* const list = [
  { id: '1', value: 'Fruta' },
  { id: '2', value: 'Legume' },
  { id: '3', value: 'Carne' },
]

export default function App() {

  const [products, setProducts] = useState(list)
  const [search, setSearch] = useState('')

  useEffect(
    () => {
      if(search) {
        const newList = list.filter( (item) => {
          return item.value.toLowerCase().includes(search.toLowerCase())
        })
        setProducts(newList)
      } else {
        setProducts(list)
      }
    }
  , [search])
  
  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="pesquise aqui" 
      />
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
} */


export default function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos')
      const finalData = await data.json()
      return finalData
    }
    fetchData().then(res => setTasks(res))
  }, [])

  return (
    <div className="container">
      <h1>Buscando Dados</h1>
      <h2>todo list - jsonplaceholder</h2>
      <ol>
        {tasks.map((task) => {
          return (
            <li className={task.completed ? 'done' : null} key={task.id}>{task.title}{task.completed ? ' - Tarefa concluída' : null}</li>
          )
        })}
      </ol>
    </div>
  )
}