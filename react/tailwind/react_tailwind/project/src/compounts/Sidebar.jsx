export const Sidebar=()=>{
    return (
        <>
        <div className="flex flex-around " >
            <div className=" md:w-30 w-3 h-screen bg-green-400 transition-all duration-1000 hover:bg-red-500 hover:w-100">
                side bar
            </div>
            
            <div className=" h-screen bg-yellow-500 w-100">
                content
            </div>
        </div>
        </>
    )
}