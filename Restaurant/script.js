document.addEventListener('DOMContentLoaded',()=>{
    const e_m_1= document.getElementById('error')
    const e_m= document.getElementById('error_1')
    const l_btn= document.getElementById('login_btn')
    const u_n= document.getElementById('username')
    const p_wd=document.getElementById('password')

    l_btn.addEventListener('click', function(){
        if(u_n.value.trim()!="" || p_wd.value.trim()==""){
            const new_p= document.createElement('p')
            new_p.id="p--1"
            new_p.innerHTML="Fill in username"
            new_p.style.color='red'
            e_m_1.appendChild(new_p)
        }
    })
})