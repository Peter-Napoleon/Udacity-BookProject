import React from "react";

function Book({bookDetail,bookUdate}) {

    const  Updatesbook = (event) =>(
        bookUdate(bookDetail,event.target.value)

    )

  return (
    <div>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${bookDetail.imageLinks.smallThumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">

                    <select onChange={Updatesbook}>

                      <option value="none">
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title" key={bookDetail.id}>
                  {bookDetail.title}
                </div>
                <div className="book-authors" key={bookDetail.id}>
                  {bookDetail.authors}
                </div>
              </div>
            </li>
          </ol>
        </div>
    </div>
  );
}

export default Book;
