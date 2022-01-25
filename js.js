window.onload = () => {

    fetch("https://randomuser.me/api/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        let myObj= data.results[0];
        console.log(myObj);

        let h1Ref = document.getElementById("h1");
        h1Ref.innerText = `Hello ${myObj.name.first} ${myObj.name.last} `;

       
        let displayBtn = document.getElementById("displayEmailBtn");
        displayBtn.addEventListener("click", function(){
            let emailContainer = document.getElementById("show-email");
            emailContainer.innerText = `Your e-mail is: ${myObj.email}`;
        })

        let displayPic = document.getElementById("displayPicBtn");
        displayPic.addEventListener("click", function(){
            let image = document.getElementById("show-picture");
            let imgDiv = document.getElementById("show-picture-div");
            imgDiv.classList.remove("d-none");
            image.src = `${myObj.picture.large}`;
        })
        
        


      });




}