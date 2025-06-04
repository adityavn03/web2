export const Button=({disable,onClick,children})=>{
    //children state that the signup compounts placeholder
    return(<>
    <span onClick={onClick} className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer ${disable? "bg-blue-500":"bg-green-500"}`} >{children}</span>
        
        </>)
}