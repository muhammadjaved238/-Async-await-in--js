function getdata(dataid){
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data"+dataid);
            resolve("sucessfull")
        },2000)
     })
}

// Async-await
(async function (){
    await getdata(1)
    await getdata(2)
    await getdata(3)
})();