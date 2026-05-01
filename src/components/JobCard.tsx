import type { Job } from "../data/jobs"

type JobCardProps = Pick<Job, "title" | "company" | "location" | "logo" | "description">
function JobCard({ title, company, location, logo, description }: JobCardProps) {
    return (
        <div className="bg-gray-200 p-6 border border-r-4 rounded-md border-gray-300 shadow-md hover:bg-gray-300">
            <div className="flex gap-4 items-center">
                <div className="w-10 h-10">
                    <img src={logo} alt="logo" />
                </div>
                <div id="job-info">
                    <h2>{title}</h2>
                    <h3>{company}</h3>
                    <p>{location}</p>

                    <p>{description}</p>
                </div>
            </div>


        </div>
    )
}

export default JobCard