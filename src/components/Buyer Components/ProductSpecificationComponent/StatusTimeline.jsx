export default function StatusTimeline() {
      const timelineItems = [
        {
          id: 1,
          title: "Prototype Submitted",
          date: "Apr 12, 2025",
          completed: true,
        },
        {
          id: 2,
          title: "Manufacturer Review",
          date: "Apr 13, 2025",
          completed: true,
        },
        {
          id: 3,
          title: "Prototype Approval",
          date: "Pending",
          completed: false,
        },
      ]
    
      return (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Status Timeline</h2>
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-2 h-2 ${item.completed ? "bg-black" : "bg-gray-300"} rounded-full`}></div>
                </div>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    