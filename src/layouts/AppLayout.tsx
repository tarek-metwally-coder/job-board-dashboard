import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout