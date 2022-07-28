//function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
  
    // An object that contains the array of provider start codes
  const providers = {
    mtn: [`803`, `703`, `903`, `806`, `706`, `813`, `810`, `814`, `816`],
    glo: [`805`, `705`, `905`, `807`, `815`, `811`, `905`],
    etisalat: [`809`, `909`, `817`, `818`],
    airtel: [`802`, `902`, `701`, `808`, `708`, `812`]
  }
  const submitBtn = document.querySelector(`#sub-btn`); //submit button
  const telInput = document.querySelector(`#tel`); // input field
  const providerImage = document.querySelector(`#form-img`); // 
  const gloImagePath = `images/` // add glo image path
  const mtnImagePath = `images/` // add mtn image path
  const airtelImagePath = `images/` //add airtel image path
  const etisalatImagePath = `images/` //add etisalat image path





  const validateInput = (inp) => {
    // This function checks if the phone number is valid 
    const telInp = inp.value;
    const num = (telInp.startsWith(`0`)) ? telInp.slice(1) : telInp.slice(4);

    if (!isFinite(+num)) return false

    if (num.length !== 10) return false

    return true
  }




  let provider;
  const checkProvider = (inp) => {

    const number = ((inp.value).startsWith(`0`)) ?     (inp.value).slice(1, 4) : (inp.value).slice(4, 8);
    console.log(number)
    for (let key in providers) {
      providers[key].forEach(el => {
        number.startsWith(el) && (provider = key);
      });
    }
    console.log(provider, `inner function`)
    const correctProvider = (provider === `mtn`) ? true : false
    return correctProvider
  }


  
  submitBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (!validateInput(telInput)) return;
    if (!checkProvider(telInput)) return;
    console.log(provider);
    telInput.value = "";
  }
  )



  telInput.addEventListener(`input`, (e) => {
    let num = e.target;
    (num.value).length >= 8 && checkProvider(num)
  })

  //};
  
  // ======= DO NOT EDIT ============== //
  //export default startApp;
  // ======= EEND DO NOT EDIT ========= //