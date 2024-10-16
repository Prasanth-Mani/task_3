//Displayed all the country flags


async function getData(){
    try {
       let res =  await fetch("https://restcountries.com/v3.1/all")
       let data = await res.json()
       data.forEach((z)=>{console.log(z.flags)})

       
    } catch (error) {
        console.log(error)
    }
}
getData()
    