export default function ({ params } : any) {
    return <div>
        Course Id {
            JSON.stringify(params.courseId)
        }
    </div>
}