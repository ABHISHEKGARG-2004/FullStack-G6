console.log("hallo there!")
const se=document.getElementById("search");
se.addEventListener("input",(e)=>{
    setTimeout(()=>{
        console.log("word: ",e.target.value);
    },2000)
})