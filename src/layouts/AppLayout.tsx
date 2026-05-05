import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-200 flex">
            <Sidebar />
            <main className="flex flex-1 px-4 gap-4">
                <Outlet />
            </main>
        </div>

    )
}

export default AppLayout