import AddNote from "./AddNote"
function NoteList({notes}) {

  return (
    <ul>
     {notes.map((note, index)=> {
      return <li key = {index}> {note} </li>
     })}
    </ul>
  )
}

export default NoteList
