 import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivetRoutes from './routes/PrivetRoutes';
import Orders from './components/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<PrivetRoutes>
            <Home></Home>
          </PrivetRoutes>
        },
        {
          path:'/orders',
          element:<PrivetRoutes>
            <Orders></Orders>
            </PrivetRoutes>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
