import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/Kasa/",
        element: <Home />
    },
    {
        path: "/accomodation/:id",
        element: <Accomodation />,
        errorElement: <NotFound />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
