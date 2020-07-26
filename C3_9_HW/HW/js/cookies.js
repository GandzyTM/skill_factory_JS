console.log("script added");

const input_city = document.getElementById('input-city');
const btn_save = document.querySelector('.btn-save');

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

input_city.placeholder = getCookie('city');

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      ...options
    };
  
    if (options.expires.toUTCString) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

btn_save.addEventListener('click', () => {
    console.log('press btn-save');
    setCookie('city', 'Vladivostok', {expires: 300});
});

