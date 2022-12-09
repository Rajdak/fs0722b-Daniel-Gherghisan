window.addEventListener("load", check);
function save(){
    usr = document.querySelector("#usr").value;
    localStorage.setItem('usr', usr);
    check();
}
function deleteData(){
 localStorage.removeItem("usr");  
 check(); 
}

//ora stampiamo a video, andiamo a controllare usr
function check(){
    if(localStorage.getItem('usr')){
        txt = "Ciao, " + localStorage.getItem("usr");
    }
    else{
        txt = "NO data";
    }
    document.querySelector(".title").innerHTML = txt;
}