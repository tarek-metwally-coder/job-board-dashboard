import type { Job } from "../data/jobs"

type JobDetailsPanelProps = {
    job: Job,
    onClose: () => void
}

function JobDetailPanel({ job, onClose }: JobDetailsPanelProps) {
    return (
        <div className="flex flex-col h-full border shadow-md rounded border-gray-200 p-6">
            {/* header */}
            <div className="flex justify-between items-center shrink-0">
                <h1 className="font-bold">{job.title}</h1>
                <span className="cursor-pointer text-gray-500" onClick={onClose}>x</span>
            </div>
            {/* body */}
            <div className="flex gap-4 mt-4">
                <div className="w-10 h-10 shrink-0">
                    <img src={job.logo} alt="logo" className="h-full w-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                    <span className="font-bold">{job.company}</span>
                    <span className="text-sm text-gray-500">{job.location}</span>
                </div>
            </div>
            <p className="text-sm break-all">{job.description}</p>

            {/* footer */}
            <div className="mt-auto flex gap-2 items-center justify-center">
                <div className="flex-1 bg-blue-400 border"> button1</div>
                <div className="flex-1 border"> button2</div>
            </div>
        </div>

    )
}

export default JobDetailPanel