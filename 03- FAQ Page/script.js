//  Starting with Unit Converter 
const answer = document.querySelector('.answer')


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', function(e){
  
  

      faq.classList.toggle('active');


  })
})