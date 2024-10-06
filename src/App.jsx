import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import Home from './pages/Home'
import Search from './pages/Search'

function App() {

  const routes = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'search',
      element: <Search />
    }]
  }])

  return <RouterProvider router={routes} />
}

export default App
