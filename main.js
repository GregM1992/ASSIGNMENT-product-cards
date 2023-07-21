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
    imageUrl: ["images/jumpy.jpg",
    "images/soldOut.png"]
 },
 {
    id:2,
    spiderType: "Phiddipus Audax",
    spiderDescription: "The presence of a distinct white triangle in the center of the back with two smaller spots below it is often used to distinguish this species",
    availability: false,
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
    imageUrl: ["images/auddy.jpg",
    "images/soldOut.png"]
 },
 {
  id:3,
  spiderType: "Phiddipus Arizonensis",
  spiderDescription: "Fuzzy, Cute, Really tiny, Maybe orange",
  availability: true,
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
  imageUrl: ["images/ari.jpeg",
  "images/soldOut.png"]
},
{
  id: 4,
  spiderType: "Habronattus Americanus",
  spiderDescription: "This spider is black coloured from top, It has red pedipalps, along with parts of the legs. The red color is used to attract female mates with courtship displays.",
  availability: true,
  specifications: {
    gender: "unknown",
    instar: "5th",
    birth: "4/14/23" 
  },
  pricing: {
    one: "30.00",
    five: "70.00",
    twenty: "130.00"
  },
  imageUrl: ["images/habby.jpg", 
  "images/soldOut.png"]
}
]

const renderToDom = (divId, html) => {
  const targetedDiv = document.querySelector(divId);
  targetedDiv.innerHTML = html;
};


const cardsOnDom = (array) => {

  let domString = "";
  
  for(const spider of array){
    
    domString += 
     `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <div class="top">
            <h2 class="card-title">${spider.spiderType}</h2>
            <img src=${spider.availability ? `${spider.imageUrl[0]}` : `${spider.imageUrl[1]}`  } class="card-img-top" alt="...">
            <p class="card-text">${spider.spiderDescription}</p>
            <p id="avail" class="card-text">${spider.availability ? 'Available!': 'Sold-Out :('}</p>
          </div>
          <div class="middle">
            <header>Information</header>
            <p>Gender: ${spider['specifications'].gender}</p>
            <p>Instar: ${spider['specifications'].instar}</p>
            <footer>DOB: ${spider['specifications'].birth}</footer>
          </div>
          <div class="bottom">
            <header>Pricing</header>
            <p>Price for 5:  ${spider['pricing'].one}</p>
            <p>Price for 10:  ${spider['pricing'].five}</p>
            <p>Price for 20:  ${spider['pricing'].twenty}</p>
          </div>
        </div>
      </div>
      `;
  }
  renderToDom('#spider-app', domString);
};

cardsOnDom(spiderInfo);
