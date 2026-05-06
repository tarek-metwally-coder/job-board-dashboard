import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function AppLayout() {
    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden">
            <Sidebar />
            <main className="flex flex-1 min-w-0 overflow-hidden px-4 gap-4">
                <Outlet />
            </main>
        </div>
        // <>
        //     <div className="flex">
        //         <div className="w-[300px] shrink-0">Panel</div>
        //         <div className="flex-1">Content</div>
        //     </div>
        // </>

    )
}

export default AppLayout