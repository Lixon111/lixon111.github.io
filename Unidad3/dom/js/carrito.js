window.onload = () => {
    var data = [
        {
            id: 1,
            name: "Pozole  Rojo",
            price: 49.00,
            img: "Pozole.jpg"
        },
        {
            id: 2,
            name: "Tamal",
            price: 300.00,
            img: "Tamal.jpg"
        },
        {
            id: 3,
            name: "Burrito",
            price: 22.00,
            img: "burrito.jpg"
        },
        {
            id: 4,
            name: "Lonche",
            price: 22.00,
            img: "lonche.jpg"
        },
        {
            id: 5,
            name: "Pizza",
            price: 49.00,
            img: "Pizza.jpg"
        }

    ]
    var dataPedido =[

    ]

    var lista = document.querySelector('#listaProducto')
    var pedido= document.querySelector('#pedido')

    var todo = ""
    data.forEach((item) => {
        todo += `  <div class="product">
<div class="img">
    <img src="./img/${item.img}" alt="">
</div>
<div class="data">
    <h2>${item.name}</h2>
    <h6 class="price">$${item.price}</h6>
    <Button class="btnComprar" data-index="${item.id-1}">Comprar</Button>
</div>
</div><!--End pro-->`
    })
        lista.innerHTML=todo
    var botones=document.querySelectorAll(".btnComprar")
    botones.forEach((btn)=>btn.addEventListener("click",(evt)=>{
let i= evt.target.dataset.index
     dataPedido.push(data[i])
     printpedido()
    }))
    
    let printpedido=()=>{
        todo=""
        let total=0
        dataPedido.forEach((item) => {
            todo += `  <div class="product">
    <div class="img">
        <img src="./img/${item.img}" alt="">
    </div>
    <div class="data">
        <h2>${item.name}</h2>
        <h6 class="price">$${item.price}</h6>
        <Button class="btnComprar" data-index="${item.id-1}">Comprar</Button>
    </div>
    </div><!--End pro-->`
    total+=item.price
        })
pedido.innerHTML=todo
document.querySelector('#total').innerHTML="Total : $"+total.toFixed(2)
    }

}
