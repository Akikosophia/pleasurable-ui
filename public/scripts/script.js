// Nav

console.log("hi")

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
// searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});





// let forms = document.querySelectorAll('betaal-form')

// // Loop door al die formulieren
// forms.forEach(function(form) {

// 	form.addEventListener('submit', function(event) {
//         try {
//             event.preventDefault(); // Prevent default button click behavior

//             const form = this.closest(".betaal-form");
//             const formData = new FormData(form);
//             const itemId = formData.get("itemId");

//             fetch("/betalingen", {
//                 method: "POST",
//                 body: formData
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Handle success if needed
//                 // Update UI to show payment is completed
//                 const checkmarkContainer = form.querySelector(".checkmark-container");
//                 if (checkmarkContainer) {
//                     checkmarkContainer.innerHTML = `
//                         <svg x="0px" y="0px" fill="none" class="checkmark-svg" viewBox="0 0 25 30">
//                             <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
//                         </svg>
//                     `;
//                 }
//             })
//             .catch(error => {
//                 console.error("Error marking payment as completed:", error);
//                 // Handle error if needed
//             });
//         } catch (error) {
//             console.error("Error handling form submission:", error);
//         }
//     });
// });


let forms = document.querySelectorAll('.betaal-form');

// Loop through each form
forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {

        const beepSound = document.querySelector('#beep-sound');
        beepSound.play();

        try {
            event.preventDefault(); 

            const formData = new FormData(form);
            const itemId = formData.get("itemId");

            fetch("/betalingen", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // Handle success and update UI to show payment is completed
                    form.innerHTML = `
                        Is betaald..
                        <div class="checkmark-container">
                            <svg x="0px" y="0px" fill="none" class="checkmark-svg" viewBox="0 0 25 30">
                                <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
                            </svg>
                        </div>
                    `;
                }
            })
            .catch(error => {
                console.error("Error marking payment as completed:", error);
            });
        } catch (error) {
            console.error("Error handling form submission:", error);
        }
    });
});
