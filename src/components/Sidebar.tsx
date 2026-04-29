function Sidebar() {
    return (
        <div className="min-w-64 flex bg-gray-400 flex flex-col">
            <div className="text-1xl font-bold p-6 px-8 flex gap-2">
                <span>🏠</span>
                <span>JobBoard</span>
            </div>

            <ul className="text-sm text-gray-500 p-6 flex flex-col gap-4">
                <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-300 cursor-pointer">
                    <span>🏠</span>
                    <span>Jobs</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-300 cursor-pointer">
                    <span>📄</span>
                    <span>Applications</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-300 cursor-pointer">
                    <span>⭐</span>
                    <span>Saved</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar