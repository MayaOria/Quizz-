let selected;

// Array d'objets contenant l'id des questions (= leur ordre), les questions et un array d'objets avec les options de réponses possibles

const questions = [
  {
    id: 0,
    q: "What is capital of India?",
    a: [
      { text: "gandhinagar", isCorrect: false },
      { text: "Surat", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "mumbai", isCorrect: false },
    ],
  },

  {
    id: 1,
    q: "What is the capital of Thailand?",
    a: [
      { text: "Lampang", isCorrect: false },
      { text: "phuket", isCorrect: false },
      { text: "Ayutthaya", isCorrect: false },
      { text: "Bangkok", isCorrect: true },
    ],
  },

  {
    id: 2,
    q: "What is the capital of Gujarat",
    a: [
      { text: "surat", isCorrect: false },
      { text: "vadodara", isCorrect: false },
      { text: "gandhinagar", isCorrect: true },
      { text: "rajkot", isCorrect: false }
    ],
  }
];

// Condition pour activer le bouton "next"
let start = true;

//fonction pour itérer sur le tableau de questions/réponses
function iterate(id){

    //On récupère la div result
    let result = document.getElementsByClassName("result")
    //test : let result = document.querySelectorAll(".result")
    result[0].innerHTML = "";
    console.log(result);
    //On récupère la div "question"

    let question = document.getElementById("question")

    //On set la question de l'array dans la div "question"
    question.innerHTML = questions[id].q;

    //On récupère la div "option"
    // let option = document.getElementById("option")

    //On set les options dans la div : innerHTML = text | value = isCorrect

    const opt1 = document.getElementById("1");
    const opt2 = document.getElementById("2");
    const opt3 = document.getElementById("3");
    const opt4 = document.getElementById("4");
           
    opt1.innerHTML = questions[id].a[0].text;
    opt1.value = questions[id].a[0].isCorrect;
    opt2.innerHTML = questions[id].a[1].text;
    opt2.value = questions[id].a[1].isCorrect;
    opt3.innerHTML = questions[id].a[2].text;
    opt3.value = questions[id].a[2].isCorrect;
    opt4.innerHTML = questions[id].a[3].text;
    opt4.value = questions[id].a[3].isCorrect; 

    

    // on prépare l'attribut selected 
    
    selected = "";

     // on attribue le selected à l'option sélectionnée
  
     opt1.addEventListener("click", ()=> 
     {opt1.style.backgroundColor = "lightgoldenrodyellow";
      opt2.style.backgroundColor = "lightskyblue";
      opt3.style.backgroundColor = "lightskyblue";
      opt4.style.backgroundColor = "lightskyblue";
      selected = opt1.value;
    } );

     opt2.addEventListener("click", ( )=>
     {opt2.style.backgroundColor = "lightgoldenrodyellow";
      opt1.style.backgroundColor = "lightskyblue";
      opt3.style.backgroundColor = "lightskyblue";
      opt4.style.backgroundColor = "lightskyblue";
      selected = opt2.value;
    } );

     opt3.addEventListener("click", () => 
     {opt3.style.backgroundColor = "lightgoldenrodyellow";
     opt1.style.backgroundColor = "lightskyblue";
     opt2.style.backgroundColor = "lightskyblue";
     opt4.style.backgroundColor = "lightskyblue";
     selected = opt3.value;
   } );

     opt4.addEventListener("click",()=>
     {opt4.style.backgroundColor = "lightgoldenrodyellow";
     opt1.style.backgroundColor = "lightskyblue";
     opt2.style.backgroundColor = "lightskyblue";
     opt3.style.backgroundColor = "lightskyblue";
     selected = opt4.value;
   } );

     
    //on récupère le button "evaluate"

    let evaluate = document.getElementsByClassName("evaluate");
    console.log(evaluate);
    //on ajoute son évènement : doit afficher si l'option sélectionnée est correcte ou fausse dans la div result

    evaluate[0].addEventListener("click", ()=>{
      if(selected == "true" ){
        result[0].innerHTML = "Bonne réponse !";
        result[0].style.color = "green";
      }

      else {
        result[0].innerHTML = "Mauvaise réponse !";
        result[0].style.color = "red";
      }
    })
}



//LANCEMENT DU QUIZZ

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
let id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 2) {
    if (selected == 'true'){
          id++;
          iterate(id);
          console.log(id);
    }

    else {
      let result = document.getElementById("result")
      result.innerHTML = "Vous devez d'abord trouver la bonne réponse :(";

    }

  }

})