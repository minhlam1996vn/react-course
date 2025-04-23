export default function SingleItem({ item, deleteItem, itemSelected }) {
  return (
    <div className="item">
      <div style={{ flex: '0.1' }}>
        <input
          type="checkbox"
          checked={item.selected}
          onChange={() => itemSelected(item.id)}
        />
      </div>
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
