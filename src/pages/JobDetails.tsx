import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Job {id}</h1>
    </div>
  );
}