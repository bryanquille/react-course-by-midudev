import type { Item } from "../types/types"

type ItemsProps = {
  item: Item
}

function Items({ item }: ItemsProps) {
  return (
    <li
      className="p-4 flex flex-col justify-between items-center bg-stone-800 shadow-2xs shadow-stone-50 rounded-2xl"
    >
      <div className="flex flex-col-reverse justify-center items-center gap-6">
        <h3
          className="mb-4 text-center font-semibold text-lg text-pretty"
        >
          {item.title}
        </h3>
        <img
          src={item.image}
          alt={`Image of ${item.title}`}
          className="max-h-52"
        />
      </div>
      <p className="mb-6 text-sm text-stone-400 text-center">{item.category}</p>
      <div className="w-full flex justify-between items-center gap-2">
        <p className="text-center text-2xl font-semibold">
          ${item.price}
        </p>
        <button
          type="button"
          className="cursor-pointer px-4 py-2 flex justify-center items-center gap-2 border-2 border-neutral-200 rounded-2xl hover:bg-stone-900 hover:opacity-80"
        >
          <span>Add to Cart</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
          </svg>
        </button>
      </div>
    </li>
  )
}

export default Items