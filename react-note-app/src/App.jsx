import MainLayout from './layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import { useEffect, useState } from 'react'
import axios from 'axios'
//import { TbError404Off } from "react-icons/tb"

function App() {

  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://127.0.0.1:8008/notes/")
    .then(res => {
      console.log(res.data)
      setNotes(res.data)
      setIsLoading(false)
    })

    .catch(err => {
      console.log(err.message)
    })
  }, [])

  const addNote = (data) => {
    axios.post("http://127.0.0.1:8008/notes/", data)
    .then(res => {
      setNotes([...notes, res.data])
      console.log(res.data)
    })
    .catch(err => {
      console.log(console.log(err.message))
    })
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage notes={notes} loading={isLoading} />} />
      {/* <Route path="/add-note" element={<AddNotePage addNote={addNote} />} /> */}
      <Route path="/add-note" element={<AddNotePage addNote={addNote} />} />
      <Route path="/edit-note" element={<EditNotePage />} />
      <Route path="/notes/:slug" element={<NoteDetailPage />}/>
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
