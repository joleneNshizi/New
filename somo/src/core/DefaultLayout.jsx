import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import axiosClient from "../axios.jsx";
import { useEffect } from "react";
import { Cog8ToothIcon, BookOpenIcon , ListBulletIcon, UserIcon, BellAlertIcon} from "@heroicons/react/20/solid";



export default function DefaultLayout() {
    const { user, token, setUser, setToken, notification } = useStateContext();

    // if (!token) {
    //   return <Navigate to="/login"/>
    // }

    const onLogout = ev => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        axiosClient.get('/dashboard')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])

    return (
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div>
                        <Link to="/dashboard" className="Link"><UserIcon style={{width:'20px'}}/>Dashboard</Link>
                        
                        <div>
                        <br></br>
                        <Link to="/courses" className="Link"><ListBulletIcon style={{width:'20px'}}/>Courses</Link>

                    </div>
                    <br></br>
                    <div>
                        <Link to="/guidance" className="Link"><BookOpenIcon style={{width:'20px'}}/>Career Guidance</Link>

                    </div>
                    <br></br>
                    </div>
                   <div>
                    <Link to ='/setting'><Cog8ToothIcon style={{width:'30px'}}/></Link>
                    <br></br>
                    <div>
                        <Link to='/notification'><BellAlertIcon style={{width:'30px'}}/></Link>
                    </div>
                   </div>
                   
                </header>
                <main>
                    <Outlet />
                </main>
                {notification &&
                    <div className="notification">
                        {notification}
                    </div>
                }
            </div>
        </div>
    )
}