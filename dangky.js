document.getElementById('dangky').addEventListener('submit',function(event){

    event.preventDefault()


full=document.getElementById('fullname').value;
pass=document.getElementById('password').value;
tel=document.getElementById('phone').value;
mail=document.getElementById('email').value;
const formdata={
    name: full,
    phone:tel,
    email:mail,
    word: pass,}
    localStorage.setItem('database',JSON.stringify(formdata))


})

function chuyen_trang(){
    window.location.assign("login.html")
}




