import MainLayout from './layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/add-note" element={<AddNotePage />} />
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
