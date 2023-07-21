const spiderInfo = [
  {
    id:1,
    spiderType: "Phiddipus Regius",
    spiderDescription: "They can have chelicerae that are blue, teal, green, gold, purple, pink, red and orange. Although females can have green and blue which are commonly seen in males, males are not noted to have the pinks and reds",
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
  spiderDescription: "Their cephalothorax is black, with white markings on the sides. The legs are gold-colored, while their abdomen is gray with a black spot near its rear",
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
        <div id="top">
          <h2 class="spider-type">${spider.spiderType}</h2>
          <img src=${spider.imageUrl[0]} class="card-img-top" alt="${spider.spiderType}">
          ${spider.availability ? `<div class="sold-out-img"> <img src="${spider.imageUrl[1]}"> </div>` : ` `}
          <p class="description">${spider.spiderDescription}</p>
          <p id="avail" >${spider.availability ? 'Available!': 'Sold-Out :('}</p>
        </div>
        <div id="information">
          <header>Information:</header>
          <p>Gender: ${spider['specifications'].gender}</p>
          <p>Instar: ${spider['specifications'].instar}</p>
          <footer>DOB: ${spider['specifications'].birth}</footer>
        </div>
        <div id="pricing">
          <header>Pricing</header>
          <p>Price for 5:  ${spider['pricing'].one}</p>
          <p>Price for 10:  ${spider['pricing'].five}</p>
          <p>Price for 20:  ${spider['pricing'].twenty}</p>
        </div>
      </div>
      `;
  }
  renderToDom('#spider-app', domString);
};

cardsOnDom(spiderInfo);
