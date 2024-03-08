import { AppContext } from "../context/AppContext";
import { useContext, useRef } from "react";

const NavBar = ({ isAuthenticated, user }) => {
  const {
    darkTheme,
    setDarkTheme,
    cardView,
    setCardView,
    filterElements,
    filterByStatus,
    setShowInComplete,
    setShowComplete,
    showInComplete,
    showComplete,
  } = useContext(AppContext);

  const searchParamRef = useRef(); //  access the search bar

  const handleThemeButtons = () => {
    setDarkTheme(!darkTheme); // toggle dark and light theme
  };

  const handleViewButtons = () => {
    setCardView(!cardView); // toogle card or list view
  };

  const handleSearch = () => {
    filterElements(searchParamRef.current.value); // filter elements as per search parameters
  };

  return (
    <nav className="m_navbar">
      {darkTheme ? (
        <button className="m_theme" onClick={handleThemeButtons}>
          Light
        </button>
      ) : (
        <button className="m_theme" onClick={handleThemeButtons}>
          Dark
        </button>
      )}

      {cardView ? (
        <button className="m_view_button" onClick={handleViewButtons}>
          List
        </button>
      ) : (
        <button className="m_view_button" onClick={handleViewButtons}>
          Card
        </button>
      )}

      <select
        name=""
        id=""
        className={"m_view_button"}
        onChange={(e) => {
          filterByStatus(e.target.value);
        }}
      >
        <option value="allItem">ALL</option>
        <option value="complete">
          COMPLETE <input type="checkbox"></input>{" "}
        </option>
        <option value="incomplete">INCOMPLETE</option>
      </select>

      <input
        type="text"
        className="m_input"
        placeholder="Search"
        ref={searchParamRef}
        onChange={(event) => {
          handleSearch(event);
        }}
      />
      <button
        className="m_view_button"
        onClick={() => (
          filterElements(""), (searchParamRef.current.value = "")
        )}
      >
        Reset
      </button>

      {!isAuthenticated ? (
        <>
          <p className="m_welcome">WELCOME TO TODO APP</p>
          <button
            className="m_login_logout"
            onClick={(event) => loginWithPopup()}
          >
            login
          </button>
        </>
      ) : (
        <>
          <p className="m_welcome">WELCOME {user.name}</p>
          <button className="m_login_logout" onClick={() => logout()}>
            logOut
          </button>
        </>
      )}
    </nav>
  );
};
export default NavBar;
