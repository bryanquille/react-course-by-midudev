import { useContext } from "react"
import { DecreaseButton, DeleteButton, IncreaseButton } from "./ActionButtons"
import { ItemsContext } from "../../context/ItemsContext"

function DesktopCart() {
  const itemsContext = useContext(ItemsContext)
  if (!itemsContext) return null
  const shopList = itemsContext.shopList

  return (
    <table className="w-full mb-6 rounded-sm overflow-hidden">
      {
        shopList.length === 0
          ? (
            <thead>
              <tr>
                <th>Your Cart is empty</th>
              </tr>
            </thead>
          )
          : <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
      }
      <tbody>
        {
          shopList.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.image} alt={`Image of ${item.title}`} />
                </td>
                <td>{item.description}</td>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <DecreaseButton item={item} />
                    <span>{item.quantity}</span>
                    <IncreaseButton item={item} />
                  </div>
                </td>
                <td>
                  <div className="flex flex-col justify-center items-center gap-2.5">
                    <span>Unit price: ${item.price.toFixed(2)}</span>
                    <span>Total price: ${item.total_price?.toFixed(2)}</span>
                  </div>
                </td>
                <td>
                  <DeleteButton item={item} />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default DesktopCart