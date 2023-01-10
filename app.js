const li = document.querySelectorAll('.item');





li.forEach((e,i) =>{
  let answer = document.querySelectorAll('.fag-answer')[i]
  const svg = document.querySelectorAll('svg')[i]

  e.addEventListener('click',(item) =>{
    
   if(answer.classList.contains('open')){
    answer.classList.remove('open')
    svg.classList.add('rotate')
   }else{
    answer.classList.add('open')
    svg.classList.remove('rotate')

   }
    
    })
 
})

function itemClicked(){
  console.log('clicked')
}


//     // if(answer.classList.contains('open')){
//     //   answer.classList.remove('open')
//     //   console.log('open')
//     // }else{
//     //   answer.classList.add('open')
//     //   console.log('close')
//     // }
  
// })

// ul.forEach((e) =>{
//   e.addEventListener('click', () =>{
//     console.log('list it clicked')
//     if(answer.classList.contains('open')){
//       answer.classList.remove('open')
//     }else{
//       answer.classList.remove('open')
//     }
//   })
// })

