import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./book.css";
import Bookcard from "./Bookcard";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [searchword, setsearchword] = useState("");
  // for search bar
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    return () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response.data);
          setBooks(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  // for search bar start
  const handleFilter = (event) => {
    setsearchword(event.target.value);
    const newFilter = books.filter((value) => {
      return value.category.toLowerCase().includes(searchword.toLowerCase());
    });

    if (searchword === "") {
      return setFilteredData([])
    } else{
      return setFilteredData(newFilter)
    }
  };

  const handleSearchButton = () => {
   
    setFilteredData([]);
  };

  // for search bar end

  const handlehide = () => {
    setFilteredData([]);
  }

  const firstBook = books.filter(function (Firstbook) {
    return Firstbook.id < 2;
  });
  //   console.log(firstBook);

  // for fetch pictures start


  const fetchPicOne = books.filter(function (firstpic) {
    return firstpic.id < 2;
  });

  const fetchPicTwo = books.filter(function (secondpic) {
    return secondpic.id > 1 && secondpic.id < 3;
  });

  const fetchPicThree = books.filter(function (threepic) {
    return threepic.id > 2 && threepic.id < 4;
  });

  // for fetch pictures end

  return (
    <div className="book_container" onClick={handlehide} >
      <div>
        <div className="row">
          <div className="col-6">
            <div className="col_one_size">
              {firstBook.map((firstBook) => {
                return (
                  <div key={firstBook.id}>
                    <h3 className="book_top_heading">{firstBook.title}</h3>
                    <p
                      className="book_top_paragraph"
                      id="book_top_paragraph_font"
                    >
                      {firstBook.description}
                    </p>
                  </div>
                );
              })}

              {/* serach bar start */}

              <div className="book_top_input_div">
                <input
                  type="text"
                  className="book_top_input"
                  placeholder="search For books"
                  // value={searchword}
                  onChange={handleFilter}
                />

                <button
                  className="book_top_button"
                  onClick={handleSearchButton}
                >
                  Search
                </button>

                <div>
                {filteredData.length !== 0 && (
                  <div className="dataResult">
                    {filteredData.slice(0, 2).map((val, key) => {
                      return (
                          <p className="dataItem">{val.category}</p>                   
                      );
                    })}
                  </div>
                )}
                </div>
              </div>

              {/* serach bar end */}
            </div>
          </div>
          <div className="col-6">
            {/* pic one */}
            <div className="top_imageOne_div">
              {fetchPicOne.map((pic) => {
                return (
                  <div>
                    <img
                      className="top_imageOne_image"
                      alt="top_picture"
                      src={pic.image}
                    />
                  </div>
                );
              })}
            </div>
            {/* pic two */}
            <div className="top_imageTwo_div">
              {fetchPicTwo.map((pic) => {
                return (
                  <div>
                    <img
                      className="top_imageTwo_image"
                      alt="top_picture"
                      src={pic.image}
                    />
                  </div>
                );
              })}
            </div>
            {/* pic three */}
            <div className="top_imageThree_div">
              {fetchPicThree.map((pic) => {
                return (
                  <div>
                    <img
                      className="top_imageThree_image"
                      alt="top_picture"
                      src={pic.image}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* card start */}
        <div className="BookList_heading">
          <h2>Prep Books Lists</h2>
        </div>

        <div className="card_container">
          {books
            .filter((prepbooks) => {
              if (searchword === "") {
                return prepbooks;
              } else if (
                prepbooks.category
                  .toLowerCase()
                  .includes(searchword.toLowerCase())
              ) {
                return prepbooks;
              }
            })
            .map((book) => {
              return (
                <div key={book.id}>
                  <Bookcard book={book} />
                </div>
              );

              // filteredData.map((book) => {
              //   return (
              //     <div key={book.id}>
              //       <Bookcard book={book} />
              //     </div>
              //   );
            })}
        </div>
      </div>
      {/* card end */}
      {/* sponser start */}
      <div className="sponser_container">
        <div>
          <p className="Sponser_para">Sponser</p>
        </div>
        <div className="Sponser_add">Adds</div>
      </div>
      {/* sponser end*/}

      {/* footerNumber start */}

      <div className="footerNumber_div">
        <div className="prev">Prev</div>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box">7</div>
        <div className="box">8</div>
        <div className="box">9</div>
        <div className="box">10</div>
        <div className="box">11</div>
        <div className="next">Next</div>
      </div>

      {/* footerNumber end */}
    </div>
  );
};

export default Book;
