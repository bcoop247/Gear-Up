import React from "react";

const ClearLocalStorageButton = (props) => {
  const userData = props.userData;
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload(); // Refresh the page automaticlly to reflect the cleared storage
  };

  return (
    <>
    <div className="container">
    <button onClick={clearLocalStorage} className="btn position-absolute top-0 start-0 mt-3 ms-3" id="logoutButton">Logout</button>
     {/* <p style={{ marginLeft: '50px' }}> -- {userData.username}</p> */}
     <p className="position-absolute top-0 start-3 mt-4 ms-5" id="userNameStyle"> {userData.email}</p>
     

    </div>
    </>
  );
};

  export default ClearLocalStorageButton;