function Sidebar() {
    return (
        <div className="min-w-45 shrink-0 flex bg-gray-50 flex flex-col border-r border-gray-300 border-r-2 shadow-md">


            <ul className="text-sm text-gray-500 p-6 flex flex-col gap-4">
                <li>
                    <div className="text-xl font-bold text-black flex items-center gap-2 p-2">
                        <span>🏠</span>
                        <span>JobBoard</span>
                    </div>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-blue-200 hover:text-blue-400 cursor-pointer">
                    <span>🏠</span>
                    <span>Jobs</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-blue-200 hover:text-blue-400 cursor-pointer">
                    <span>📄</span>
                    <span>Applications</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-blue-200 hover:text-blue-400 cursor-pointer">
                    <span>⭐</span>
                    <span>Saved</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar