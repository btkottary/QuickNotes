import React from "react";
// import HighlightIcon from '@mui/icons-material/Highlight';
//import img from "../images/B.png";
import EventNoteIcon from '@mui/icons-material/EventNote';

function Header() {
  return (
    <header>
      <h1>
        {/* <HighlightIcon /> */}
        {/* <img src={img} alt="" /> */}
        <EventNoteIcon/>
        QuickNotes
      </h1>
    </header>
  );
}

export default Header;
