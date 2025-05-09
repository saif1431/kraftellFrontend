export default function OrderTimeline() {
      const timelineEvents = [
        {
          title: "Order Created",
          date: "Apr 18, 2025",
          time: "09:00",
          completed: true,
        },
        {
          title: "Production Started",
          date: "Apr 19, 2025",
          time: "10:30",
          completed: true,
        },
        {
          title: "First Update Posted",
          date: "Apr 19, 2025",
          time: "14:24",
          completed: true,
        },
      ]
    
      return (
        <div className="bg-white rounded-md shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Order Timeline</h2>
    
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                completed={event.completed}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      )
    }
    
    function TimelineEvent({ title, date, time, completed, isLast }) {
      return (
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`w-2 h-2 rounded-full ${completed ? "bg-black" : "bg-gray-300"}`}></div>
          </div>
          <div>
            <div className="text-md font-medium">{title}</div>
            <div className="text-sm text-gray-500">
              {date} {time}
            </div>
          </div>
        </div>
      )
    }
    