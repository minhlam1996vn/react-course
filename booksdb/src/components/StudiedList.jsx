import BooksReadList from './BooksReadList'
import BooksReadSummary from './BooksReadSummary'

export default function StudiedList({ booksRead }) {
  return (
    <div className="box">
      <BooksReadSummary />
      <BooksReadList booksRead={booksRead} />
    </div>
  )
}
