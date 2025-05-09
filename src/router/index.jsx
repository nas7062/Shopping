import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout.jsx'
import { MainPage } from '../pages/MainPage.jsx'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error..</div>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
])
