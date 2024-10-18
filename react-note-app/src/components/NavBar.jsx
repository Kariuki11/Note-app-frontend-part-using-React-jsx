import React from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom"

function NavBar({searchText, handleSearchText}) {
  return (
    // <nav className="navbar bg-body-tertiary py-50" style={{ padding: "30px", backgroundColor: "lightblue" }}>
      // <div className="container d-flex justify-content-around">
      <nav className="navbar py-50" style={{ padding: "30px", backgroundColor: "lightblue" }}>
      <div className="container d-flex justify-content-around">


        <Link className="navbar-brand" to="/">
          <h4 style={{ fontWeight: "bold" }}>Plain Pad</h4>
        </Link>
         <div className="d-flex">
          <div
            className="input-group input-group-sm"
            style={{ width: "500px", height: "40px" }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => handleSearchText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>

        <Link to="/add-note"  style={{ textDecoration: "none" }}>
          <button
            className="btn btn-outline-primary btn-md"
            type="button"
           
          >
            <FaSquarePlus /> Add Note
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar















// import React from 'react';
// import { FaSquarePlus } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// function NavBar({ searchText, handleSearchText }) {
//   return (
//     // The navigation bar with a light blue background color
//     <nav className="navbar py-50" style={{ padding: "30px", backgroundColor: "lightblue" }}>
//       <div className="container d-flex justify-content-around">
        
//         {/* Brand name with a link to the homepage */}
//         <Link className="navbar-brand" to="/">
//           <h4 style={{ fontWeight: "bold" }}>Plain Pad</h4>
//         </Link>
        
//         <div className="d-flex">
//           {/* Search bar input with search button */}
//           <div
//             className="input-group input-group-sm"
//             style={{ width: "500px", height: "40px" }}
//           >
//             {/* Input for the search bar, controlled by searchText state */}
//             <input
//               className="form-control"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={searchText}
//               onChange={(e) => handleSearchText(e.target.value)}
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Link to the add-note page with a button to add notes */}
//         <Link to="/add-note" style={{ textDecoration: "none" }}>
//           <button
//             className="btn btn-outline-primary btn-md"
//             type="button"
//           >
//             {/* Icon for adding a new note */}
//             <FaSquarePlus /> Add Notes
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


