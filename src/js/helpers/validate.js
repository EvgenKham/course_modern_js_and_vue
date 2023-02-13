const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,16}$/,
    nickname: /^[a-zA-Z0-9_\-\.]{3,16}$/,
    firstname: /^[a-zA-Z]{3,16}$/,
    lastname: /^[a-zA-Z]{3,16}$/,
    number_phone: /^[0-9]{7,12}$/,
    gender: /^[a-zA-Z]{4,6}$/,
    date: /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/
  };
  
  /**
   * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
   * @param {HTMLInputElement} el
   * @returns {Boolean} - Return true if input valid or doesn't has data-required attr
   */
  export function validate(el) {
    
    const regExpName = el.dataset.required;
    
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value);
  }