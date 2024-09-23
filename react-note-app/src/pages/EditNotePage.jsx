import React, { useEffect, useState } from 'react'
import "./AddNotePage.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditNotePage = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")

  const {slug} = useParams()
  useEffect(() => {
    axios.get(`http://127.0.0.1:8008/notes/${slug}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  })

  return (
    <form>
      <h5>Add New Note</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
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
        ></textarea>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Note's category
        </label>
      <select className="form-select" aria-label="Default select example" style={{height: "40px"}}>
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

export default EditNotePage