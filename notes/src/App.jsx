import AddNote from "./AddNote"
import NoteList from "./NoteList"
import{useState} from "react"

function App() {
  const [notes, setNotes] = useState([
    "fruits", 
    "pick up keys"
  ]);
  const addStrtoArray = (str) => {
    const copyorNotes = Array.from(notes)
    copyorNotes.push(str)
    setNotes(copyorNotes)
}
  return (
    <main className="flex flex-col w - 1/2 items-center h-screen">
      <h1 className="text-5xl font-bold">Notes</h1>
      <AddNote
      addNote = {addStrtoArray}/>
   <NoteList name = "mynotelist"
   notes = {notes}/>
    </main>
  )
}

export default App
