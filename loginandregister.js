let groww_loginClick = document.querySelector(".groww_login");
let IndexBody = document.getElementById("IndexBody");

groww_loginClick.addEventListener("click",()=>){
    console.log("Button Active")

    let logincontainer = document.createElement("div");
    letcontainer.classList.add("LoginAndRegisterContainer");
    IndexBody.appendChild(LoginContainer);


    //main body of login page 
    let LoginBody = document.createElement("div");
    LoginBody.classList.add("LoginBody");
    LoginContainer.appendChild(LoginBody);


    //left side of login page
    let LoginBodyLeft = document.createElement("div");
    LoginBodyLeft.classList.add("LoginBodyLeft");
    LoginBody.appendChild(LoginBodyLeft);

    let LoginBodyLefth2 = document.createElement("h1");
    LoginBodyLefth2.classList.add("LoginBodyLefth2");
    LoginBodyLefth2.textContent = "simple, Free Investing.";
    LoginBodyLeft.appendChild(LoginBodyLefth2);

    //left side inner element bottom container
    let LoginBodyLeftBottom = document.createElement("div");
    LoginBodyLeftBottom.classList.add("LoginBodyLeftBottom");
    LoginBodyLeft.appendChild(LoginBodyLeftBottom);


    // left inner element bottom animation box
    let LoginBodyLeftBottomAnimation = document.createElement("div");
    LoginBodyLeftBottomAnimation.classList.add("LoginBodyLeftBottomAnimation");
    LoginBodyLeftBottom.appendChild(LoginBodyLeftBottomAnimation);

    let LoginBodyLeftBottomText = document.createElement("h2");
    LoginBodyLeftBottomText.classList.add("LoginBodyLeftBottomText");

       let TextContentDisplay = ["Direct Mutual Funds","ETFs","Gold",
                                     "US stocks","Fixed Deposits","stocks"];

        let num=0;
        LoginBodyLeftBottomText.textcontent = TextContentDisplay[num];
       function ChangeText(){ 
           if(num !=6){
            LoginBodyLeftBottomText.textcontent = TextContentDisplay[num];
               num++;
           }
           else{
               num = 0;

           }
       }
      setInterval(ChangeText(),3000);
    LoginBodyLeftBottom.appendChild(LoginBodyLeftBottomText);
    //Right side of login page
    let LoginBodyRight = document.createElement("div");
    LoginBodyRight.classList.add("LoginBodyRight");
    LoginBody.appendChild(LoginBodyRight);
    
    //right side of login page heading
    let LoginBodyRighth1 = document.createElement("h2");
    LoginBodyRighth1.classList.add("LoginBodyRighth1");
    LoginBodyRighth1.textContent = "Welcome to Grow"
    LoguinBodyRight.appendChild(LoginBodyRighth1);

    // right side login page google login
    let LoginBodyRightGoogleConTainer = document.createElement("div");
    LoginBodyRightGoogleConTainer.classList.add("LoginBodyRightGoogleConTainer");
    LoginBodyRight.appendChild(LoginBodyRightGoogleConTainer);

   
    let LoginBodyRightGoogleConTainerText = document.createElement("div");
    LoginBodyRightGoogleConTainerText.classList.add("LoginBodyRightGoogleContainerImg");
    LoginBodyRightGoogleConTainerText.textContent = "continue with Google"
    LoginBodyRightGoogleConTainer.appendChild(LoginBodyRightGoogleContainerText);








}