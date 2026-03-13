import './App.css'
import {BrowserRouter,Route,Routes, useRoutes} from 'react-router-dom'
import Login from './login.jsx'
import Dashboard from './Dashboard.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Course from './Course.jsx'
import CourseDetails from './CourseDetails.jsx'

function AppR() {
  const routes = useRoutes([
    {path:"/", element: <Login/>, errorElement :<h1>Page Not Found 404</h1>},
    {path:"/dashboard" ,element:<Dashboard/>, 
      children:[
        {path:"home", element:<Home/>},
        {path:"about", element:<About/>},   
        {path:"course", element:<Course/>},
        {path:"course/:id", element:<CourseDetails/>}
      ]
    }
  ])
  return routes
}
function App(){
  return (
    <>
      <BrowserRouter>
        <AppR/>
      </BrowserRouter>
    </>
  )
}

export default App
