
export const DateCom = () => {
  return (
    <div>
       {/* Actions Section */}
       <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 gap-4">
            <ActionCard
              icon="📅"
              title="Schedule a Webinar"
              bgColor="bg-teal-300"
            />
            <ActionCard
              icon="➕"
              title="Join a Webinar"
              bgColor="bg-teal-300"
            />
            <ActionCard
              icon="🎥"
              title="Open Recordings"
              bgColor="bg-teal-300"
            />
          </div>
        </div>
    </div>
  )
}

const ActionCard = ({ icon, title, bgColor }) => (
  <div
    className={`flex items-center justify-center p-4 rounded-lg ${bgColor} text-white shadow-md`}
  >
    <span className="text-3xl mr-4">{icon}</span>
    <span className="font-semibold text-lg">{title}</span>
  </div>
);