const imagen = document.getElementById("imagen")

let original = imagen.src

imagen.addEventListener("mouseover", ()=> {
    imagen.src = "https://th.bing.com/th/id/OIP.nlUEBBElMGVwKooaqBcVmwHaFj?rs=1&pid=ImgDetMain"
})

imagen.addEventListener("mouseout", ()=>{
    imagen.src = original
})