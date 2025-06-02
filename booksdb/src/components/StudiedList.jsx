import BooksRead from './BooksRead'
import BooksReadSummary from './BooksReadSummary'

export default function StudiedList({ booksRead }) {
  return (
    <div className="box">
      <BooksReadSummary />
      <BooksRead booksRead={booksRead} />
    </div>
  )
}
