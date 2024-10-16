// Displayed all the countries names,region,sub-region and populations


async function getData(){
    try {
       let res =  await fetch("https://restcountries.com/v3.1/all")
       let data = await res.json()
       data.forEach((z)=>{console.log(z.name.common)})
       
       data.forEach((z)=>{console.log(z.region)})
       
       data.forEach((z)=>{console.log(z.subregion)})
       
       data.forEach((z)=>{console.log(z.population)})
      


       
    } catch (error) {
        console.log(error)
    }
}
getData()