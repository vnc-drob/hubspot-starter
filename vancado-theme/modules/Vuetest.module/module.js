const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Hello vue!');

    const requestOptions = {
      'method': 'GET',
      'headers': {
          'Content-Type': 'application/json',
       }
    };
    
    fetch("https://140450665.hs-sites-eu1.com//_hcms/api/congratulation", requestOptions)
      .then(response => response.text())
      .then(response => message.value = response)
      .catch(error => console.log('error', error));

    return {
      message
    }
  }
}).mount('#app')
