import { useState } from "react"


function AddNote({addNote}) {
const [textareaValue , setTextAreaValue] = useState('');

    return (
    <form onSubmit ={(event) =>{
        event.preventDefault()
        console.log(" add this to my notes: " , textareaValue)
        addNote(textareaValue)
        setTextAreaValue("")
    }}>
        <label className = "font-bold text-2xl"htmlFor="notes-textarea"> 
            Enter your notes 
        </label>

        <textarea 
        className = "text-3xl rounded-full"
            id = "notes-textarea " 
            name = "notes" 
            value = {textareaValue}
            onChange={ (event) => {
                //console.log("Changes are being made ",event.target.value)
                setTextAreaValue(event.target.value)
            }}
            placeholder = "Whats on your mind? ">
        </textarea>
     
        <button type = "submit">
            Add notes 
        </button>
    </form>
    )
  }
  
  export default AddNote