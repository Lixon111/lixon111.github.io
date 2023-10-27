window.onload=()=>{
    var btn=document.querySelector('#Btnreg')
    var txtnombre=document.querySelector('#txtnom')
    var txttelefono=document.querySelector('#txtel')
    var txtedad=document.querySelector('#txted')
    var txtemail=document.querySelector('#txtem')
    var txtpass1=document.querySelector('#txtpass')
    var txtpass2=document.querySelector('#txtpassr')
    var dival=document.querySelector('#alerta')
    var divas=document.querySelector('#alertc') 
   
    btn.addEventListener('click',(evt)=>{
        evt.preventDefault()
      
        if(txtnombre.value==""||txttelefono.value==""||txtedad.value==""||txtemail.value==""||txtpass1.value==""||txtpass2==""){
            dival.innerHTML='Error: <br> <small> Favor de llenar los campos</small>'
            dival.style.display="block"
        }else{ 
            const Nombre = /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s']+$/;
            if(Nombre.test(txtnombre.value)){ 
            }else{
                dival.innerHTML='Error: <br> <small> El nombre es demaciado corto</small>'
                dival.style.display="block"
            }
            const telef = /^\d{10}$/;
            if(telef.test(txttelefono.value)){
            }else{
                dival.innerHTML='Error: <br> <small> Telefono invalido</small>'
                dival.style.display="block"
            }
            const edad = /^(0?[1-9]|[1-9][0-9])$/;
            if(edad.test(txtedad.value)){
            }else{
                dival.innerHTML='Error: <br> <small> Favor de insertar edad valida</small>'
                dival.style.display="block" 
            }
            const CorreoE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(CorreoE.test(txtemail.value)){
            }else{
                dival.innerHTML='Error: <br> <small> Correo Invalido</small>'
                dival.style.display="block" 
            }
            const cont = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
            if(cont.test(txtpass1.value)){

            }else{
                dival.innerHTML='Error: <br> <small> Password incorrecto</small>'
                dival.style.display="block"  
            }
            if(txtpass1.value==txtpass2.value){

            }else{
                dival.innerHTML='Error: <br> <small> Password incompatible</small>'
                dival.style.display="block" 
            }
            if(Nombre.test(txtnombre.value)&telef.test(txttelefono.value)&edad.test(txtedad.value)&CorreoE.test(txtemail.value)&cont.test(txtpass1.value)&txtpass1.value==txtpass2.value){
                divas.style.display='block'
            }


        }
            
        
    })
    txtnombre.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'
    })
    txttelefono.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'
    })
    txtedad.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'
    })
    txtemail.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'
    })
    txtpass1.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'
    })
    txtpass2.addEventListener('focus',(evt)=>{
        dival.style.display='none'
        divas.style.display='none'
    })
}