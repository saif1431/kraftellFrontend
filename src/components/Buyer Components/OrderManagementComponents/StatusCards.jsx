export default function StatusCards() {
      const statusItems = [
        { title: "Active Orders", count: 24 },
        { title: "Pending Approval", count: 8 },
        { title: "In Production", count: 12 },
        { title: "Ready for Shipment", count: 4 },
      ]
    
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusItems.map((item, index) => (
            <StatusCard key={index} title={item.title} count={item.count} />
          ))}
        </div>
      )
    }
    
    function StatusCard({ title, count }) {
      return (
        <div className="bg-white rounded-md shadow-sm p-4">
          <div className="text-lg text-primary">{title}</div>
          <div className="text-2xl font-semibold mt-1">{count}</div>
        </div>
      )
    }
    