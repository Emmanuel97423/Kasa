import '../index.css';
import { Link, Outlet } from "react-router-dom"

export default function DefaultLayout() {
    const menu = [
        {
            id: 1,
            title: "Page d'accueil",
            link: '/home'
        },
        {
            id: 2,
            title: "Page de logement",
            link: `property/1`
        },
        {
            id: 3,
            title: "Page à propos",
            link: "/a-propos"
        },
    ]
    const menuItem = menu.map((item) => {
        return <li key={item.id.toString()} > <Link to={item.link}>{item.title}</Link></li>
    })

    return (
        <>
            <div id="sidebar">
                <ul> {menuItem}</ul>
            </div>
            <div id="content">
                <Outlet />
            </div>
        </>


    )
}