type JobCardProps = {
    title:string,
    company:string,
    location:string,
    logo:string,
    description:string,
    selected:boolean,
}

function JobCard({ title, company, location, logo, description, selected}: JobCardProps) {
    const selectedStyle = selected? "bg-blue-50/40 border-gray-200 shadow-md" : "bg-white border-gray-200 shadow-sm hover:bg-gray-50";
    return (
        <div className={`${selectedStyle} min-w-[400px] overflow-hidden p-6 border border-r-4 rounded-md`}>
            <div className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0">
                    <img src={logo} alt="logo" className="h-full w-full object-contain"/>
                </div>
                <div id="job-info" className="min-w-0 flex-1">
                    <h2 className="font-semibold truncate">{title}</h2>
                    <h3 className="truncate text-gray-900 text-sm mt-1">{company}</h3>
                    <p className="truncate text-sm text-gray-500 mt-0.5">{location}</p>

                    <p className="mt-3 line-clamp-2 text-sm text-gray-500">{description}</p>
                </div>
                <div className="shrink-0 text-sm text-gray-500">
                    2h ago
                </div>
            </div>


        </div>
    )
}

export default JobCard