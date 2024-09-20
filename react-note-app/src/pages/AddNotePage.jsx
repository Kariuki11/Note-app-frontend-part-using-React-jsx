import { useState } from 'react'
import "./AddNotePage.css"

const AddNotePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const newNote = {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title && body && category) {
      return;
    }
    console.log(newNote)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Note</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          // type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          placeholder="Enter note's content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Note's category
        </label>

      <select
        className="form-select"
        aria-label="Default select example"
        value={category}
        style={{height: "40px"}}
        onChange={(e) => setCategory(e.target.value)}
      >
          <option selected>Pick a category</option>
          <option value="1">Business</option>
          <option value="2">Personal</option>
          <option value="3">Important</option>
        </select>
      </div>
        
      <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Add Note</button>
    </form>
  )
}

export default AddNotePage