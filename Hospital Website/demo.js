// funtionality for slider
let slide = document.querySelectorAll('.patientreviews');
let count = 0;

slide.forEach(function(slides,index){
    slides.style.left = `${index * 100}%`
})
function myfunc(){
    slide.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count*100}%)`;
    });
}
setInterval(function(){
    count++;
    if (count==slide.length){
        count=0;
    }
    myfunc()
    },3000);
    document.querySelector(".detail").style.display = "none";
    let card = document.querySelectorAll('.card');
    
    card.forEach(function(card) {
        card.addEventListener("click", function() {
            console.log("Card clicked!");
            document.querySelector('.detail').style.display = 'block';
    
            let specialization = card.querySelector("p").textContent;
            let specialization1 = card.querySelector("h2").textContent;
            console.log("Specialization:", specialization);
            console.log("Specialization1:", specialization1);
    
            document.querySelector(".content").innerHTML = `
            <img src=${card.firstElementChild.src} alt="">
            <div class="contentText">
                <h2>${specialization1}</h2>
                <p>${specialization}</p>
            </div>
            `;
        });
    });

    let cards = document.querySelectorAll('.card');
        cards.forEach(function(card) {
            card.addEventListener("click", function() {
                console.log("Card clicked!");
                document.querySelector('.detail').style.display = 'block';
        
                let specialization = card.querySelector("p").textContent;
                let specialization1 = card.querySelector("h2").textContent;
                console.log("Specialization:", specialization);
                console.log("Specialization1:", specialization1);
        
                document.querySelector(".content").innerHTML = `
                <img src=${card.firstElementChild.src} alt="">
                <div class="contentText">
                    <h2>${specialization1}</h2>
                    <p>${specialization}</p>
                </div>
                `;
            });
        });
        
    
    function btn() {
        document.querySelector('.detail').style.display = 'none';
    }
 // functionality for submit button.
let connectBtn = document.getElementById('submitbtn');
connectBtn.addEventListener("click", function () {
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    if (email.value === "" || pass.value === "") {
        alert("Enter valid Email and Password");
    } else {
        alert("You logged in Successfully!");
    }
});

function show(){
    let b = document.getElementById("bar");
    let x = document.getElementById("menu");
    let l = document.getElementById("flow");
    if(x.style.display === "block"){
        x.style.display = "none"; 
        b.style.display= "block";
        l.style.flexDirection = "row";
        
    }else{
        x.style.display = "block";
        l.style.flexDirection = "column";
    } 
}


