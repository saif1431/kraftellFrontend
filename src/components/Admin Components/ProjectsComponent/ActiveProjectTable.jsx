function ActiveProjectTable() {
      const projects = [
        {
          id: 1,
          name: "Website Redesign",
          status: "Draft",
          progress: 75,
          supplier: "DesignCo",
          lastDate: "2024-01-20",
        },
        {
          id: 2,
          name: "Mobile App Development",
          status: "Quoting",
          progress: 30,
          supplier: "In Production",
          lastDate: "2024-01-19",
        },
        {
          id: 3,
          name: "E-commerce Platform",
          status: "In Production",
          progress: 45,
          supplier: "TechSolutions",
          lastDate: "2024-01-18",
        },
      ];
    
      return (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-black border-b border-gray-200">
                <th className="px-4 py-3 font-bold">Project Name</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Progress</th>
                <th className="px-4 py-3 font-bold">Supplier</th>
                <th className="px-4 py-3 font-bold">Last Date</th>
                <th className="px-4 py-3 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    function ProjectRow({ project }) {
      return (
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="px-4 py-4 font-medium">{project.name}</td>
          <td className="px-4 py-4">
            <StatusBadge status={project.status} />
          </td>
          <td className="px-4 py-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{project.progress}%</span>
              <ProgressBar progress={project.progress} />
            </div>
          </td>
          <td className="px-4 py-4">{project.supplier}</td>
          <td className="px-4 py-4">{project.lastDate}</td>
          <td className="px-4 py-4">
            <div className="flex gap-2">
              <button className="text-blue-500 hover:text-blue-700 text-sm">View Detail</button>
             
            </div>
          </td>
        </tr>
      );
    }
    
    function ProgressBar({ progress }) {
      const getProgressColor = () => {
        if (progress >= 75) return "bg-blue-500";
        if (progress >= 50) return "bg-blue-500";
        if (progress >= 25) return "bg-blue-500";
        return "bg-red-500";
      };
    
      return (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getProgressColor()}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      );
    }
    
    function StatusBadge({ status }) {
      const getStatusStyles = () => {
        switch (status) {
          case "Draft":
            return "bg-[#E5E7EB] text-black";
          case "Quoting":
            return "bg-[#FEF3C7] text-black";
          case "In Production":
            return "bg-[#DBEAFE] text-black";
        }
      };
    
      return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles()}`}>
          {status}
        </span>
      );
    }
    
    export default ActiveProjectTable;