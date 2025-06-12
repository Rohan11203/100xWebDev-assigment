export default function ({ params }:any){
    return <div>
        Catch All routes { JSON.stringify(params.ModuleId) }
    </div>
}