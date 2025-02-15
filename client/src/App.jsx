import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import BrowseResourcesPage from './pages/BrowseResourcesPage';
import BrowseRequestsPage from './pages/BrowseRequestsPage';
import SubmitPage from './pages/SubmitPage';

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
    {
      path: '/submit',
      element: <SubmitPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
