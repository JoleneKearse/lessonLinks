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
}

export default App;
