import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// To create multiple notes of the same type we have used notes.map which takes in value
// from the notes.js and CreateNote here is the function that is rendering the notes
//In function CreateNote Note test is just a name we took to get values from the array of notes in notes.js.
//key,heading,content are the props which are being rendered in the Note.jsx
function CreateNote(Notetest) {
  return (
    <Note
      key={Notetest.key}
      heading={Notetest.title}
      content={Notetest.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(CreateNote)}

      <Footer />
    </div>
  );
}

export default App;
