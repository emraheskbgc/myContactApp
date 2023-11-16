import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import searchImage from "../search.png";
const List = ({ users, setUsers }) => {
  const [showSearchInput, setShowSearchInput] = useState(true);
  const handleImgClick = () => {
    setShowSearchInput(false);
  };
  const handleInputBlur = () => {
    setShowSearchInput(true);
  };
  const itemsUserPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterSearch, setFilterSearch] = useState("");

  useEffect(() => {
    if (users.length > 0) {
      setTotalPages(Math.ceil(users.length / itemsUserPage));
    }
  }, [users]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * itemsUserPage;
    const endIndex = startIndex + itemsUserPage;
    const filteredPerson = users.filter(
      (user) =>
        user.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
        user.surName.toLowerCase().includes(filterSearch.toLowerCase()) ||
        user.phoneNumber.includes(filterSearch)
    );
    return filteredPerson.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePersonDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <ul>
        <p>List</p>
        {showSearchInput ? (
          <img
            src={searchImage}
            alt=""
            className="searchImg"
            onClick={handleImgClick}
          />
        ) : (
          <input
            type="text"
            name="search"
            className="searchInput"
            placeholder="Search"
            onBlur={handleInputBlur}
            value={filterSearch}
            onChange={(e) => setFilterSearch(e.target.value)}
          />
        )}

        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Process</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageUsers().map((user, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * itemsUserPage + index + 1}</td>
                <td>{user.name}</td>
                <td>{user.surName}</td>
                <td>{user.phoneNumber}</td>
                <td onClick={() => handlePersonDelete(user.id)}>
                  <BsTrashFill />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {currentPage > 1 ? (
            <BsArrowLeftCircleFill
              onClick={() => handlePageChange(currentPage - 1)}
            />
          ) : (
            ""
          )}

          <span className="m-2">
            {currentPage} / {totalPages}
          </span>

          {currentPage === totalPages ? (
            ""
          ) : (
            <BsArrowRightCircleFill
              onClick={() => handlePageChange(currentPage + 1)}
            />
          )}

          <Link to="/">
            <button className="btn btn-outline-secondary  rounded-pill ">
              Form
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default List;
