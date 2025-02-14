<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import BrowseResourcesPage from './pages/BrowseResourcesPage';
import BrowseRequestsPage from './pages/BrowseRequestsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/request',
      element: <RequestPage />,
    },
    {
      path: '/browse-resources',
      element: <BrowseResourcesPage />,
    },
    {
      path: '/browse-requests',
      element: <BrowseRequestsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
>>>>>>> Stashed changes
}

export default App
