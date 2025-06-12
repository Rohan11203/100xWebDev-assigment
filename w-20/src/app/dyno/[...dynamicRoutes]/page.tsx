
export default function ({ params }: {
    params: any
}){
    return <div>
        Dynamice routes <br /> { JSON.stringify(params) }
    </div>
}