/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

})

function save(index){
  localStorage.clear();
  localStorage.removeItem('user');
  localStorage.setItem('user', JSON.stringify(index-1));
}