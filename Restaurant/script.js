document.addEventListener('DOMContentLoaded',()=>{
    const e_m_1= document.getElementById('error')
    const e_m= document.getElementById('error_1')
    const l_btn= document.getElementById('login_btn')
    const u_n= document.getElementById('username')
    const p_wd=document.getElementById('password')

    if (l_btn && u_n && p_wd && e_m_1) {
        l_btn.addEventListener('click', function(){
            if(u_n.value.trim()!="" || p_wd.value.trim()==""){
                const new_p= document.createElement('p')
                new_p.id="p--1"
                new_p.innerHTML="Fill in username"
                new_p.style.color='red'
                e_m_1.appendChild(new_p)
            }
        })
    }
    let count = 0; // Declare count in outer scope

    // Create a single sup element and append it to the order span
    const sup = document.createElement('sup');
    sup.textContent = count;
    const orderContainer = document.getElementById('order');
    orderContainer.appendChild(sup);

    // Attach event listener to all buttons with class 'addtoOrder'
    const addToOrderButtons = document.querySelectorAll('.addtoOrder');
    addToOrderButtons.forEach(button => {
        button.addEventListener('click', () => {
            count += 1; // Increment count
            sup.textContent = count; // Update the single sup element
            alert("Order added successfully");
        });
    });
})