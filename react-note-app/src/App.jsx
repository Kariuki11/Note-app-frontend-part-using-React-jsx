import MainLayout from './layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NoteDetailPage from './pages/NoteDetailPage'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/add-note" element={<AddNotePage />} />
      <Route path="/note-detail" element={<NoteDetailPage />}/>
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
