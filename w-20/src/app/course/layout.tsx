
export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>
        <h2>Course Details</h2>
      </div>

      <main style={{ padding: '1rem' }}>
        {children}
      </main>

      <footer>
        Course Footer
      </footer>
    </>
  )
}
