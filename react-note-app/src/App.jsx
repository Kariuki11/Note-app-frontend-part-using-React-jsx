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

  useEffect(() => {
    axios.get("http://127.0.0.1:8008/notes/")
    .then(res => {
      console.log(res.data)
      setNotes(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage notes={notes} />} />
      <Route path="/add-note" element={<AddNotePage />} />
      <Route path="/edit-note" element={<EditNotePage />} />
      <Route path="/note-detail" element={<NoteDetailPage />}/>
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
