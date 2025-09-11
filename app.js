 const btn= document.querySelector('.btn');
 const content = document.querySelector('.content')
 const container= document.querySelector('.container')

const URL = 'https://api.chucknorris.io/jokes/random?category=dev';

btn.addEventListener('click', async()=>{
  try {
     const data= await fetch(URL);
  const response= await data.json();
  displayData(response);
  } catch (error) {
    console.log(err);
    
  }
//  HERE I USED FETCH TO CLEARLY UNDERSTAND HOW IT WORKS
//  fetch(URL).then((data) =>data.json())
//  .then((response) => displayData(response))
//  .catch((err)=> console.log(err)); 
});

function displayData(data){
  const {value: joke}= data;
  content.textContent= joke;
  container.appendChild(content)
}