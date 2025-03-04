import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import RequestPage from './pages/RequestPage/RequestPage';
import BrowseResourcesPage from './pages/BrowseResourcesPage/BrowseResourcesPage';
import BrowseRequestsPage from './pages/BrowseRequestsPage/BrowseRequestsPage';
import SubmitPage from './pages/SubmitPage/SubmitPage';

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
