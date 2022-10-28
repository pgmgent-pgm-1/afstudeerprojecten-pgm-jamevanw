(() => {
  const app = {
    init () {
      console.log('1. Application Initialized!');
      // Variables
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements () {
      console.log('2. Chache the elements!');
    },
    generateUI () {
      console.log('3. Generate User Interface!');
    },
  };
  app.init();
})();
