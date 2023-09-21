(function() {
  activeNumber();
  var submitButton = document.querySelector('.submit-btn');
  submitButton.addEventListener('click', function(){
    var selected = getSelectedNumber();
    if (selected == "" || selected == null) {
      alert('Please rate us!'); 
    }else {
      var rateCompleteCont = document.querySelector('.ratingComplete');
      var pickedRate = document.getElementById('rate');
      pickedRate.textContent = selected;
      rateCompleteCont.classList.add('show');
      
    }
  });
  function activeNumber(){
    var numberList = document.getElementsByClassName('number');
      for (i=0; i < numberList.length; i++) {       
        numberList[i].addEventListener('click', function(){ 
          for (x=0; x < numberList.length; x++) {
            numberList[x].classList.remove('active');
          }
          this.classList.add('active');
      });
    };
  }
  function getSelectedNumber(){
    var selectedNumber = document.querySelector('.active')
    if (selectedNumber == null) {
      return null;
    }else {
      var number = selectedNumber.textContent;
      return number;
    }
  };
}());