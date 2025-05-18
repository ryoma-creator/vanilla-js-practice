// script.js

// DOM Elements
const userTable = document.getElementById('userTable').querySelector('tbody');
const searchInput = document.getElementById('searchInput');
const statusDiv = document.getElementById('status');

/**
 * Fetches user data from the API and displays it in the table
 * You can use async/await or Promise chains based on your preference
 */
function fetchAndDisplayUsers() {
  // TODO: Implement this function
  // 1. Show loading state in statusDiv
  // 2. Fetch data from 'https://jsonplaceholder.typicode.com/users'
  // 3. Create and display table rows
  // 4. Clear loading state
  // 5. Handle any errors
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
    if(!response.ok){
      throw new Error (`http error ${response.status}`)
    }
    return response.json();
  })
  .then(users=>{
    console.log(users);
    const html = "";
    users.forEach(user=>
       usertable.innerHTML = `
         <tr>
           <td>
            ${user.name}
           </td>
          </tr>
                 `
                 );
    statusDiv.textContent = "";
    //ここって、setTimerとかで５秒後に消えるとか作れないかな？ずっと表示されてんのよくないと思うから。見た目
    
  })
}

/**
 * Filters the table based on search input
 * @param {string} searchTerm - The term to search for in name or email
 */
function filterTable(searchTerm) {
  // TODO: Implement this function
  // 1. Convert search term to lowercase for case-insensitive matching
  // 2. Get all rows in the table
  // 3. For each row, check if name or email contains the search term
  // 4. Show rows that match, hide rows that don't
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', function() {
  // TODO: Load initial data
    statusDiv.textContent = "Now Loading";
    fetchAndDisplayUsers();
  // TODO: Set up search functionality
  // Hint: Use the 'input' event on searchInput
});