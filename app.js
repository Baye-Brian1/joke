 const btn= document.querySelector('.btn');
 const content = document.querySelector('.content')

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
}

// HERE I USED AJAX SYNTAX(xhr) TO understand how to get apis and i equally used promises
// function getData(url) {
//   return new Promise((resolve, reject)=>{
//     const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.send();
//   xhr.onreadystatechange= function(){
//     if (xhr.readyState !==4) return;
//     if (xhr.status ==200) {
//     resolve(xhr.responseText)
//     }else{
//       reject({
//         status:xhr.status,
//         text:xhr.text,
//       });
      
//     }
//   };  
//   });
  
// }