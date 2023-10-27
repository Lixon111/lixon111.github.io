window.onload=()=>{
    var btn=document.getElementById("btnLogin")
    var txte=document.getElementById('txtemail')
    var txtp=document.querySelector('#txtpass')
    var dival=document.querySelector('#alerta')
var divas=document.querySelector('#alertc')
    btn.addEventListener('click',(evt)=>{
        evt.preventDefault()
       
        if(txte.value==""||txtp.value==""){
            dival.innerHTML='Error: <br> <small> Favor de llenar los campos</small>'
dival.style.display="block"
        }else{
if(txtp.value.length<5){
    dival.innerHTML='Error: <br> <small> El password debe de ser mayor a 5 letras</small>'
    dival.style.display="block"
}else{
    divas.style.display='block'
}
        }
    })
    txte.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'
    })
    txtp.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'      
    })
}