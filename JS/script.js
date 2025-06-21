    const form = document.querySelector('#bmi-form')


    form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)


        const results = document.querySelector('#results')

        const aireAleart = document.getElementById('alert')
    
        let timeoutDuration = 3500;


    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML =`please give a valid height ${height}`;
         setTimeout(() => results.innerHTML = "", 3000);
        return;


    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML =`please give a valid weight ${weight}`;
          setTimeout(() => results.innerHTML = "", 3000);
        return;


    }else {  
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); 
         let massage = `<span>Your BMI is: ${bmi}</span>`;
        
        
       

       
        if (bmi <= 18.6) {
            massage += `<span style="color: green;"> <br>
              You are underweight</span>`;
           timeoutDuration = 3500;
           
        
        } else if (bmi >= 18.6 && bmi <= 24.9) {
        massage += `<span style="color: #8a6d3b;"> <br>
        <i class="fas fa-exclamation-triangle" style="margin-right: 5px;"></i>
        You are in healthy range</span>`;
        timeoutDuration = 3500;


        } else {
            massage += `<span style="color: #721c24;"> <br>
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 1.2rem;"></i>
            You are overweight — please <br/>take care of your health.</span>`;
            aireAleart.play()
            timeoutDuration = 9000;
         
        }


          results.innerHTML = massage;


      

        

            setTimeout(() => {

            results.innerHTML = "";

            form.reset();

        },  timeoutDuration);

      }
    
    
})

document.addEventListener('DOMContentLoaded', function () {

  const animatedBox = document.querySelector('.flip-box-init');

  setTimeout(() => {

    animatedBox.classList.add('flip-box-show');

  }, 300); // start animation after 300ms

});


document.addEventListener('DOMContentLoaded', function () {

  const animatedText = document.querySelector('.zoom-in-text-right');

  setTimeout(() => {

    animatedText.classList.add('zoom-in-text-show');

  }, 300); // start animation after 300ms

});


document.addEventListener('DOMContentLoaded', function () {

  const animatedText = document.querySelector('.zoom-in-left');

  setTimeout(() => {

    animatedText.classList.add('zoom-in-show');

  }, 300); // start animation after 300ms

});


document.addEventListener('DOMContentLoaded', function () {

  const animatedText = document.querySelector('.zoom-in-bottom-up');

  setTimeout(() => {

    animatedText.classList.add('zoom-in-bottom-show');

  }, 300); // start animation after 300ms
  
});

