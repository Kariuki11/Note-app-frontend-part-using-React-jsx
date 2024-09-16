import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route index element={<HomePage />} />
  ))

  return <RouterProvider router={router} />
}

export default App