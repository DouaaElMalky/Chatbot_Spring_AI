import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="p-m">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="btn btn-outline-info m-1">Home</NavLink>
                <NavLink to="/chat" className="btn btn-outline-info m-1">Chat</NavLink>
            </nav>
            <main>
                <Outlet /> {/* This renders the matched child route */}
            </main>
        </div>
    );
}
