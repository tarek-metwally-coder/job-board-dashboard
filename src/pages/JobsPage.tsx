import { jobs } from "../data/jobs";
import { Link, useNavigate, useParams } from "react-router-dom";
import JobsHeader from '../components/JobsHeader'
import JobCard from "../components/JobCard";
import JobDetailPanel from "../components/JobDetailPanel";
export default function JobsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedJob = jobs.find((job) => job.id == id);
    const onCloseHandler = () => {
        navigate('/jobs');
    };


    return (
        <>
            <div className="flex-1 min-w-0 overflow-y-auto">
                <JobsHeader />
                <div id="jobs-list" className="px-6 flex flex-col gap-2">
                    {
                        jobs.map((job) => (
                            <Link key={job.id}
                                to={`/jobs/${job.id}`}>
                                <JobCard
                                    title={job.title}
                                    company={job.company}
                                    location={job.location}
                                    logo={job.logo}
                                    description={job.description}
                                    selected={selectedJob?.id === job.id}
                                />
                            </Link>

                        )
                        )
                    }
                </div>
                <div className="mt-auto">here is the pagination may shrink size of cards to git rid of the scroll </div>
            </div>



            {selectedJob && (
                <div className="py-6 w-[400px] shrink-0">

                    <JobDetailPanel
                        job={selectedJob}
                        onClose={onCloseHandler}
                    />
                </div>
            )}


        </>
    );
}