import { jobs } from "../data/jobs";
import { Link } from "react-router-dom";
import JobsHeader from '../components/JobsHeader'
import JobCard from "../components/JobCard";
export default function JobsPage() {
    return (
        <div className="flex gap-4 ">
            <div className="flex-1">
                <JobsHeader />
                <div id="jobs-taple" className="px-6 flex flex-col gap-2">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
                <div>here is the pagination may shrink size of cards to git rid of the scroll </div>
            </div>


            <div className="p-6 flex">

                <div className="flex-1 bg-gray-400 border shadow-md rounded border-gray-200 ">
                    this is the dynamic details area
                </div>
            </div>
        </div>
    );
}