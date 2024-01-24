
const button = document.querySelectorAll('.box');
const body = document.querySelector('body');
const randCol=function(){
    string="#"
    for(let i=0;i<6;i++){
        let c=Math.floor(Math.random()*16);
        string+=c.toString(16)
        }
        return string
    }
    
button.forEach(function(button) {
    button.addEventListener('click', function(e) {
        setInterval( () =>{
            if(e.target.id === 'grey' || e.target.id === 'white' || e.target.id === 'blue' || e.target.id === 'yellow'){
                body.style.backgroundColor = randCol();
                }
        }, 100)
    });
});
