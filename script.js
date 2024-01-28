const getTime = () => {
    setInterval(()=>{
        const getDate = new Date();

        const hourValue = getDate.getHours();
        const minuteValue = getDate.getMinutes();
        const secondValue = getDate.getSeconds();
        const amPM = hourValue>12 ? 'PM' : 'AM';
        
        let hrValue = hourValue + 30; 
        let minValue = minuteValue * 6; 
        let secValue = secondValue * 6;

        document.getElementById('hr-top-circle').style.transform = `rotate(${hrValue}deg)`;
        document.getElementById('mi-top-circle').style.transform = `rotate(${minValue}deg)`;
        document.getElementById('sec-top-circle').style.transform = `rotate(${secValue}deg)`;

        document.getElementById('dgt').innerText = `${hourValue} hr: ${minuteValue} min: ${secondValue} sec`
    },1000);
}
