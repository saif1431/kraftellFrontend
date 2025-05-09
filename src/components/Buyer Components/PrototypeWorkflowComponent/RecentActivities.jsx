export default function RecentActivities() {
      // Sample activity data
      const activities = [
        {
          id: 1,
          description: "Prototype #283 approved by manufacturer",
          timestamp: "2 hours ago",
        },
        {
          id: 2,
          description: "New order #1092 placed",
          timestamp: "Yesterday",
        },
      ]
    
      return (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4 ">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} description={activity.description} timestamp={activity.timestamp} />
            ))}
          </div>
        </div>
      )
    }
    
    // Activity item component
    function ActivityItem({ description, timestamp }) {
      return (
        <div className="flex items-start border py-3 px-4 border-gray-300 gap-3">
          <div className="w-12 h-12  rounded-full overflow-hidden flex-shrink-0">
            <img src="/profileImg.svg     " alt="" />
          </div>
          <div>
            <p className="text-lg font-medium">{description}</p>
            <p className="text-md text-gray-500">{timestamp}</p>
          </div>
        </div>
      )
    }
    