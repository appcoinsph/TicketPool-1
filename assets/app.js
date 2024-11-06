const tl = gsap.timeline({defaults:{ease: 'power1.out'}});
tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.big-text-box', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button2', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button3', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button4', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 1});

var links = [ //128

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',    'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
  
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
    
//socialmediasitespromotion

  //grab
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //alibaba
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //McDonald's 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //uber
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //bigo 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //bingo plus
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //gc mart
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //peddlr 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
  //binance 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/fe4b6e47a7ab4d&utm_source=fan-token', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
  //dito telecom
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //involve asia
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
    //bybit-approved
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //alibaba
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
 
//other advertisement 
 'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',  
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',  
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',
'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/',

  //bybit-approved
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
  //alibaba
  'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
]

var ads1 = [ //167
    'https://672b275e722f3df0ca7f3ae9--heartfelt-starlight-252080.netlify.app/', 
]

var balance = 0;
localStorage.getItem("tickets");
if (localStorage.getItem("tickets") == null) {
    balance = balance + 10;
    localStorage.setItem("tickets", balance);
}
else {
    var lcl = localStorage.getItem("tickets");
    balance = JSON.parse(lcl);
}
var add_tickets = document.getElementById("ticket_num");
add_tickets.innerHTML = balance;

function remove_section() {
    var element = document.getElementById('home-section');
    element.parentNode.removeChild(element);
}
function remove_nav() {
    var element = document.getElementById('nav');
    element.parentNode.removeChild(element);
}
function remove_footer() {
    var element = document.getElementById('footer');
    element.parentNode.removeChild(element);
}

function open_tickets() {
    remove_section();
    remove_nav();
    remove_footer();
    var add = document.getElementById("add-section");
    random_num = Math.floor((Math.random() * 167) + 0);
    ad1 = ads1[random_num];
    ad2 = ads1[random_num + 1];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">Golden coins</a></h1><div id="earn_balance">' + balance + '</div><br><br>' + ad1 + '<br><br><br><button class="extract-button" onclick="extract_ticket()">WITHDRAW YOUR EARNINGS</button><br><br><div><h2 id="result"></h2></div><div><b id="win-or-lose"></b></div><br><br><br><h1>Purchase Golden coins</h1><br><div class="columns"><ul class="price"><li class="header">GC Multiplier</li><li class="black">₱250,00</li><li class="grey"><button class="button" onclick="purchase_tickets11()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">40 G-coins</li><li class="black">₱1,00</li><li class="grey"><button class="button" onclick="purchase_tickets1()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">💎100 G-coins</li><li class="black">₱15,00</li><li class="grey"><button class="button" onclick="purchase_tickets2()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">200 G-coins</li><li class="black">₱30,00</li><li class="grey"><button class="button" onclick="purchase_tickets3()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">1.500 G-coins</li><li class="black">₱225,00</li><li class="grey"><button class="button" onclick="purchase_tickets4()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">3.500 G-coins</li><li class="black">₱527,00</li><li class="grey"><button class="button" onclick="purchase_tickets5()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">20.000 G-coins</li><li class="black">₱3012,00</li><li class="grey"><button class="button" onclick="purchase_tickets6()" style="cursor: pointer">PAYLAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">💎ads slowdown</li><li class="black">₱4500,00</li><li class="grey"><button class="button" onclick="purchase_tickets12()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">💵TL SUBSCRIPTION</li><li class="black">₱8000,00</li><li class="grey"><button class="button" onclick="purchase_tickets13()" style="cursor: pointer">PAYPAL Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">NEGOSYO DEALS</li><li class="black">₱0,00</li><li class="grey"><button class="button" onclick="purchase_tickets14()" style="cursor: pointer">EXCHANGE GOLDENCOINS</button></li></ul></div><div class="columns"><ul class="price"><li class="header">💎🔥100 G-COINS</li><li class="black">₱15,00</li><li class="grey"><button class="button" onclick="purchase_ticketsA()" style="cursor: pointer">PAYNAMICS PURCHASE</button></li></ul></div><div class="columns"><ul class="price"><li class="header">200 Goldencoins COINS</li><li class="black">₱30,00</li><li class="grey"><button class="button" onclick="purchase_ticketsB()" style="cursor: pointer">PAYNAMICS Purchase</button></li></ul></div><div class="columns"><ul class="price"><li class="header">💎🔥ads slowdown for vip</li><li class="black">₱4500,00</li><li class="grey"><button class="button" onclick="purchase_ticketsC()" style="cursor: pointer">PAYNAMICS PURCHASE</button></li></ul></div><div class="columns"><ul class="price"><li class="header">💵🔥TL SUBSCRIPTION</li><li class="black">₱8000,00</li><li class="grey"><button class="button" onclick="purchase_ticketsD()" style="cursor: pointer">PAYNAMICS PURCHASE</button></li></ul></div><br>' + ad2 + '<br><br></center>';
}

function open_freebox() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="https://free-mystery.echozone.repl.co/" width="100%" height="100%" style="background-color: #b46b59;"></iframe></center>';
    if (balance == 0) {
        result.innerHTML = 'You have no tickets.'
    }
    else {
        balance = balance - 0.1;
        localStorage.setItem("tickets", balance);
        tickets.innerHTML = balance;
        }
}

function open_freespin()
{
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="https://free-spin.echozone.repl.co/" width="100%" height="100%" style="background-color: #b46b59;"></iframe></center>';
    if (balance == 0) {
        result.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
    }
    else {
        balance = balance - 0.1;
        localStorage.setItem("tickets", balance);
        tickets.innerHTML = balance;
        }
}

function open_reward() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="./indexbal.html" width="100%" height="900" style="background-color: #b46b59;"></iframe></center>';
if (balance == 0) {
add.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
}

else {

balance = balance - 0.1;

localStorage.setItem("tickets", balance);

tickets.innerHTML = balance;

}

}

function open_about() {
    remove_section();
    remove_nav();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">GOLDEN COINS </a></h1><br><br><iframe src="./README.md" width="100%" height="900" style="background-color: #b46b59;"></iframe></center>';
  window.open(link);
    open_about();
}
function open_earn() {
    remove_section();
    remove_nav();
    var add = document.getElementById("add-section");
    random_num = Math.floor((Math.random() * 128) + 0);
    link = links[random_num];
    ad1 = ads1[random_num];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">kindly wait and monitor your golden coins in progress</a></h1><div id="earn_balance">' + balance + '</div><iframe width="760" height="415" src="https://www.youtube.com/embed/videoseries?list=PLYETUL7CctPfbXoEX5QM2ENP1NO5tXfBz&index=' + random_num + '&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>' + ad1 + '<button class="home-button" style="top: 85%;" onclick="back_home()">Stop Earning</button></center>';
    window.open(link);
    tickets();
}

function tickets() {
    var add = document.getElementById("earn_balance");
    balance = balance + 0.0005;
    localStorage.setItem("tickets", balance);
    add.innerHTML = balance;
    setTimeout(() => {tickets();}, 95500);
}
function purchase_tickets11() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets11.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets1() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets1.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets2() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
  window.open('purchase_tickets2.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets3() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets3.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets4() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets4.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets5() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets5.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets6() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    window.open('purchase_tickets6.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets12() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets12.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets13() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets13.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_tickets14() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_tickets14.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsA() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsA.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsB() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsB.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsC() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsC.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}
function purchase_ticketsD() {
    var left = (screen.width - 500) / 2;
    var top = (screen.height - 750) / 4;
    
  window.open('purchase_ticketsD.html', 'PURCHASE TICKETS', 'width=500, height=750, top=' + top + ', left=' + left);
}

function extract_ticket() { //extract 1 ticket

var add = document.getElementById("add-section");

add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href=". /index.html">GOLDEN COINS </a></h1><br><br><iframe src="./withdrawal.html" width="100%" height="100%" style="background-color: #b46b59;"></iframe></center>';
if (balance == 0) {
add.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
}

else {

balance = balance - 0.1;

localStorage.setItem("tickets", balance);

tickets.innerHTML = balance;

}

}


function open_chatbox() {
    remove_section();
    remove_nav();
    var add = document.getElementById("add-section");
  random_num = Math.floor((Math.random() * 128) + 0);
    link = links[random_num];
    ad1 = ads1[random_num];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">kindly post your, create topics and monitor your golden coins in progress</a></h1><div id="earn_balance">' + balance + '</div><iframe width="560" height="950" style="background-color: white;" src="https://timeclack-ph.netlify.app/home&index=' + random_num +
'&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>' + ad1 + '<button class="home-button" style="top: 1% ;" onclick="back_home()">Stop Earning</button></center>';
  if (balance == 0) {
add.innerHTML = 'You have no tickets, purchase or refill atleast 200 goldencoins to access this feature.'
  }
  window.open(link);
    tickets();
} 
function back_home() {
    location.reload();
}
