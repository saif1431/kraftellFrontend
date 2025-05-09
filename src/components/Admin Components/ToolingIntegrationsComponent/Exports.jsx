function Exports() {
      const exports = [
        {
          id: 1,
          date: "2024-01-20 14:30:22",
          type: "CSV",
          size: "2.5 MB",
          status: "completed"
        },
        {
          id: 2,
          date: "2024-01-19 09:15:10",
          type: "Excel",
          size: "15.8 MB",
          status: "failed"
        },
        {
          id: 3,
          date: "2024-01-18 16:45:33",
          type: "Product Catalog",
          size: "8.2 MB",
          status: "processing"
        },
        {
          id: 4,
          date: "2024-01-17 11:20:05",
          type: "Audit Logs",
          size: "1.1 MB",
          status: "completed"
        },
        {
          id: 5,
          date: "2024-01-16 13:10:42",
          type: "API Usage",
          size: "3.7 MB",
          status: "completed"
        }
      ]
    
      return (
        <div className="overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium">Recent Exports</h2>
          </div>
          
          <table className="w-full overflow-y-auto">
            <thead>
              <tr className="text-left text-black border-b border-gray-200">
                <th className="px-4 py-3 font-bold">Date</th>
                <th className="px-4 py-3 font-bold">Type</th>
                <th className="px-4 py-3 font-bold">Size</th>
                <th className="px-4 py-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {exports.map((exportItem) => (
                <ExportRow key={exportItem.id} exportItem={exportItem} />
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    
    function ExportRow({ exportItem }) {
      return (
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="px-4 py-4">{exportItem.date}</td>
          <td className="px-4 py-4">{exportItem.type}</td>
          <td className="px-4 py-4">{exportItem.size}</td>
          <td className="px-4 py-4">
            <StatusBadge status={exportItem.status} />
          </td>
        </tr>
      )
    }
    
    function StatusBadge({ status }) {
      const getStatusStyles = () => {
        switch (status) {
          case "processing":
            return "bg-[#FEF3C7] text-[#92400E]"
          case "completed":
            return "bg-[#DEF7EC] text-[#03543F]"
          case "failed":
            return "bg-[#FDE8E8] text-[#9B1C1C]"
          default:
            return "bg-gray-200 text-gray-800"
        }
      }
    
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
          {status}
        </span>
      )
    }
    
    export default Exports