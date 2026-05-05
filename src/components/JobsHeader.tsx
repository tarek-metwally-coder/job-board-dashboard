import FilterSelector from "./FilterSelector"

function JobsHeader() {
  return (
    <div className="">
      <div className="flex justify-between border-b border-gray-300 py-6 ps-2">
        <div className="min-w-42">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <p className="text-sm text-gray-500">Find your next opportunity</p>
        </div>
        <div className="min-w-45">
          <button>placeholder1</button>
          <button>placeholder2</button>

        </div>
      </div>

      <div className="flex gap-4 p-6">
        <input type="search" className="bg-gray-300" />
        <FilterSelector />
        <FilterSelector />
        <FilterSelector />
        <button>Clear</button>
      </div>


    </div>
  )
}

export default JobsHeader