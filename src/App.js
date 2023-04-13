
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";



let routers = createBrowserRouter([
  {path:'' , element:<Layout/> , children: [
    {index:true , element:<Home/>},
    {path:'About' , element:<About/>},
    {path:'Contact', element:<Contact/>},
    {path:'Portfolio' , element:<Portfolio/>},
  ]}
])
function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
