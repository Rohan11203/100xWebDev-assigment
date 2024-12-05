
export const Random = () => {
  return (
    <div className="bg-slate-100">
      <h1 className="text-rose-500 text-3xl w-full font-bold">Good Morning, Prasad!</h1>

      <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Static Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left border-b">ID</th>
              <th className="py-2 px-4 text-left border-b">Name</th>
              <th className="py-2 px-4 text-left border-b">Email</th>
              <th className="py-2 px-4 text-left border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Developer</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Jane Smith</td>
              <td className="py-2 px-4 border-b">jane@example.com</td>
              <td className="py-2 px-4 border-b">Designer</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">Alice Johnson</td>
              <td className="py-2 px-4 border-b">alice@example.com</td>
              <td className="py-2 px-4 border-b">Manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}