export default function SingleItem({ item, deleteItem }) {
  return (
    <div className="item">
      <div>{item.name}</div>
      <div>{item.quantity}</div>
      <div>${item.price}</div>
      <div>${item.price * item.quantity}</div>
      <div className="btn" onClick={() => deleteItem(item.id)}>
        Delete
      </div>
    </div>
  )
}
