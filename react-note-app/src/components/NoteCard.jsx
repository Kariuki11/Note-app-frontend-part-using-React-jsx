import React from 'react';
import { MdMarkunread } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FormatDate } from './FormatDate';

const NoteCard = ({note}) => {

    const body = `${note.body.split(" ").slice(0, 20).join(" ")} ...`
    const color = note.category == "BUSINESS" ? "blue" : note.category == "PERSONAL" ? "green" : "purple"

  return (
    <div className="col-md-4 single-note-item all-category">
      <div className="card card-body">
        <span className="side-stick" style={{backgroundColor: color}}></span>
        <FaNoteSticky style={{marginLeft: "auto", color: color }} />
          <Link to="/note-detail" style={{textDecoration: "none", color: color}}>
            <h5 
              className="note-title text-truncate w-75 mb-0"
              data-noteheading="Book a Ticket for Movie"
            >
              {note.title}
            </h5>
          </Link>
        <p className="note-date font-12 text-muted">{FormatDate(note.updated)}</p>
        <div className="note-content">
          <p 
            className="note-inner-content text-muted"
            data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
          >
           {body} 
          </p>
        </div>
        <div className="d-flex align-items-center">
          <a href="/notes-detail">
            <span className="d-flex justify-content-around">
              <a href="/notes-detail">
                <MdMarkunread
                  style={{fontSize: "25px", cursor: 'pointer', color: color}}
                />
              </a>
              <small className="text-muted">{note.category}</small>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;














































// import React from 'react'
// import { MdMarkunread } from "react-icons/md";
// import { FaNoteSticky } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const NoteCard = ({note}) => {
//   return (
//     <div className="col-md-4 single-note-item all-category">
//                 <div className="card card-body">
//                     <span className="side-stick" style={{backgroundColor: "blue" }}></span>
//                     <FaNoteSticky style={{marginLeft: "auto", color: "blue" }}/>
//                     <a href="/notes-detail" style={{textDecoration: "none", color: "black"}}>
//                     <Link to="note-detail" style={{textDecoration: "none", color:"black"}}>
//                     <h5 
//                     className="note-title text-truncate w-75 mb-0"
//                     data-noteheading="Book a Ticket for Movie"
//                     >
//                         {note.title}
//                     </h5>
//                     </Link>

//                     </a>
//                     <p className="note-date font-12 text-muted">11 March 2024</p>
//                     <div className="note-content">
//                         <p 
//                             className="note-inner-content text-muted"
//                             data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
//                             >
//                                 Blandit tempus porttitor aasfs. Integer posuere erat a ante 
//                                 venenatis.
//                         </p>
//                     </div>
//                     <div className="d-flex align-items-center">


//                         1<a href="/notes-detail">
//                         <span className="d-flex justify-content-around">
//                         <a href="/notes-detail">
//                         <MdMarkunread
//                         style={{ fontSize: "25px", cursor: 'pointer', color: 'blue' }}
//                         />
//                         </a>
//                         <small className="text-muted">BUSINESS</small>
//                         </span>
//                     </div>
//         </div>
//     </div>
//   )
// }


// export default NoteCard
