const spiderInfo = [
  {
    id:1,
    spiderType: "Phiddipus Regius",
    spiderDescription: "Fuzzy, Cute, Tiny",
    availability: true,
    specifications: {
      gender: "unknown",
      instar: "3rd",
      birth: "4/2/23" 
    },
    pricing: {
      one: "20.00",
      five: "50.00",
      twenty: "100.00"
    },
    imageUrl: "images/jumpy.jpg"
 },
 {
    id:2,
    spiderType: "Phiddipus Audax",
    spiderDescription: "Fuzzy, Cute, Tiny, Maybe orange",
    availability: true,
    specifications: {
      gender: "unknown",
      instar: "3rd",
      birth: "4/2/23" 
    },
    pricing: {
      one: "20.00",
      five: "50.00",
      twenty: "100.00"
    },
    imageUrl: "images/auddy.jpg"
 },
 {
  id:3,
  spiderType: "Phiddipus Arizonensis",
  spiderDescription: "Fuzzy, Cute, Really tiny, Maybe orange",
  availability: false,
  specifications: {
    gender: "unknown",
    instar: "3rd",
    birth: "4/2/23" 
  },
  pricing: {
    one: "30.00",
    five: "60.00",
    twenty: "120.00"
  },
  imageUrl: "images/ari.jpg"
},
{
  id: 4,
  spiderType: "Habronattus americanus",
  spiderDescription: "Fuzzy, Cute, Really tiny, Very Red",
  availability: true,
  specifications: {
    gender: "unknown",
    instar: "5th",
    birth: "4/2/23" 
  },
  pricing: {
    one: "30.00",
    five: "70.00",
    twenty: "130.00"
  },
  imageUrl: "images/habby.jpg"
}
]

const renderToDom = (divId, html) => {
  const targetedDiv = document.querySelector(divId);
  targetedDiv.innerHTML = html;
};


const cardsOnDom = (array) => {

  let domString = "";
  
  for(const spider of array){
    
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <div class="top">
            <h2 class="card-title">${spider.spiderType}</h2>
            <img src=${spider.imageUrl} class="card-img-top" alt="...">
            <p class="card-text">${spider.spiderDescription}</p>
            <p id="avail" class="card-text">${spider.availability}</p>
          </div>
          <div class="middle">
            <header>${spider.specifications}</header>
            <p>${spider['specifications'].gender}</p>
            <p>${spider['specifications'].instar}</p>
            <footer>${spider['specifications'].birth}</footer>
          </div>
          <div class="bottom">
            <header>${spider.pricing}</header>
            <p>Price for 5 ${spider['pricing'].one}</p>
            <p>Price for 10 ${spider['pricing'].five}</p>
            <p>Price for 20 ${spider['pricing'].twenty}</p>
          </div>
        </div>
      </div>`;
  }

  renderToDom('#spider-app', domString);
};

cardsOnDom(spiders);
