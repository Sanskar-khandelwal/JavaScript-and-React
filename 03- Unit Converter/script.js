//  Starting with Unit Converter 

const answer = document.querySelector('.answer');

const section = document.querySelector('section');
console.log(section);

section.addEventListener('click', function(e){
  if(e.target.classList.contains('question')){
    answer.style.display = 'block';
    console.log("hello I am clicked");
  }
}
   )