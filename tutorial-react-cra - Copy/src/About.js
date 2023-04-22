import {Link, Outlet} from "react-router-dom"

export default function About(){
    return (
        <>   
         <h1>Halaman about</h1>
         <p>halo minna, ini adalah halaman about </p>
        <ul>
        <li><Link to="/about/team">AboutTeam</Link></li>    
        </ul>         
        <Outlet/>
        </>
    )
}
