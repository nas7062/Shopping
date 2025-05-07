import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout.jsx'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error..</div>,
    children: [
      {
        index: true,
        element: <div>main</div>,
      },
    ],
  },
])
