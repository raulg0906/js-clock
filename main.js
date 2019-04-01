
const clock =document.getElementById('clock');

function updateTime (){

        const now = moment();
        const read = now.format('hh:mm:ssA');
        clock.textContent = read;
    
    
    }
    setInterval(updateTime, 1000);
    updateTime();
