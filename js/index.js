document.querySelector('.about_me').addEventListener('click', getAjaxHtml);

function getAjaxHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'information.html', true);
    xhr.send();
}
const countDownDate = new Date ("Jan 1, 6020 00:00:00").getTime();
const intervalId = setInterval(function() {
  const now = new Date().getTime();
  let distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (distance <= 0) {
    clearInterval(intervalId);
  }
}, 1000);

$('.info_button').click(() => {
    $('.information_about_product').toggle(1000);
});

let el = document.getElementById('message_number');
el.onkeypress = function(e) {   
  let prohibited = "/[qwertyuiopaesdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM]/,";
	let key = String.fromCharCode(e.which);  
  if(prohibited.indexOf(key) >= 0){
		console.log('invalid key pressed');    
   	return false;
  }
  return true;    
};