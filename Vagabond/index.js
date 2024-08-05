


/*balance */
// script.js

// Sample data
const members = [
    { name: 'John Doe', card: ' 12k', image: '5.png',Favor_anime:'Attack' ,color :'gray',border: '4px solid rgb(13, 50, 86)',post:'Admin'},
    { name: 'Yagami Light', card: '10M', image: 'member pic/yagami light.jpg', Favor_anime:'Death Note',color: '#271650',post:'Web Developer',quote :'フフフ、そうだ、俺がキラだ',rank:'12'},
    { name: 'Kiyoko', card: '100M', image: 'member pic/kiyoko.jpg', Favor_anime:'Horimiya',color: 'green',post:'The Admiral',quote :'鷲は決して落ちない',rank:'1'},
    // Add more sample members as needed
];

function search() {
    // Get the search input value
    const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    
    // Clear previous results
    resultDiv.innerHTML = '';

    // Show the result box
    resultDiv.style.display = 'block';

    // Find the member
    const member = members.find(m => m.name.toLowerCase() === searchValue);

    // Display the result 
    if (member) {
        resultDiv.innerHTML = `
            <div class='card' style="background-color: ${member.color}; box-shadow: 1px 1px 60px ${member.color}">

             <div class='member'>
                   <img src="${member.image}" alt="${member.name}" style=" border: ${member.border};">
               <div class='data'>
                   <p id='name'><strong>Name:</strong> ${member.name}</p>
                   <p id='name'><strong>Favorite Anime:</strong> ${member.Favor_anime}</p>
                   <p id='name'><strong>Post:</strong> ${member.post}</p>
               </div>
               </div> 
               <div class='ranked'>
                    <p id='balance'><strong>BALANCE: ${member.card}</strong></p>
                    <p id='balance'><strong>Ranked: Top ${member.rank}</strong></p>
                    <p id='balance'><strong>${member.quote}</strong></p>
               </div>
               
               <div class='signature'><p id='sign'>『admin⊰🧭⊱GHOST』</p></div>
               
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="no-result">
                <h2>Oops! We couldn't find a match.</h2>
                <p>It looks like there's no record under the name <strong>${searchValue}</strong>.</p>
                <p>For further assistance, please reach out to our admin or contact the developer.</p>
                <p><strong><a href=''>We're here to help!</a></strong></p>
            </div>
        `;
    }
}

/*end */

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.timeline');
  
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const handleScroll = () => {
      elementsToAnimate.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load in case elements are already in view
  });


document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.container');
  
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const handleScroll = () => {
      elementsToAnimate.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load in case elements are already in view
  });







  