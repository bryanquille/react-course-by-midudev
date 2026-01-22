import Items from "./Items"

type Item = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

type ListItemsProps = {
  items: Item[]
}

function ListItems({items}: ListItemsProps) {
  return (
    <ul
      className="mt-10 px-8 pb-8 grid-list"
    >
      {
        items.map(item => {
          return (
            <Items key={item.id} item={item} />
          )
        })
      }
    </ul>
  )
}

export default ListItems