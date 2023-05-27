const list = [
  { id: '1', value: 'Fruta' },
  { id: '2', value: 'Legume' },
  { id: '3', value: 'Carne' },
]

export default function List() {
  return list.map( (item) => {
    return (
      <div key={item.id}>
        <h4>{item.value}</h4>
      </div>
    )
  })
}