function JobCard() {
    return (
        <div className="bg-gray-200 p-6 border border-r-4 rounded-md border-gray-300 shadow-md">
            <div className="flex gap-4">
                <div className="flex justify-center items-center">
                    logo
                </div>
                <div id="job-info">
                    <h2>Title</h2>
                    <h3>Company</h3>
                    <p>subtext with location and fulltime-parttime and level of pos</p>

                    <p>short desc tranculate me bro</p>
                </div>
            </div>


        </div>
    )
}

export default JobCard