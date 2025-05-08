const axios=require("axios");
async function main(){
    // for the fet request body need to be removed because it is consistered as a body are not allowed in the get request
    const res=await axios.put("https://httpdump.app/dumps/ba178711-7f99-4741-ac0d-389c85ef3a99",{
        username:"messi",
        password:"1234"
    },
    {
        headers:{
            authorization:"1234"
        }
    })
    console.log(res.data)
}
main()