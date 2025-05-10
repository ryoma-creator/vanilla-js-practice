document.getElementById("fetchButton").addEventListener("click", () => {
    const statusElement = document.getElementById("statusContainer");
    const dataContainer = document.getElementById("dataContainer");
    
    statusElement.innerHTML = "<i>読み込み中...</i>";
    dataContainer.innerHTML = "";
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error(`エラー: ${response.status}`);
        }
        return response.json();
      })
      .then(users => {
        statusElement.innerHTML = "";
        let dataContainerHTML = "";
        
        users.forEach(user => 
          dataContainerHTML += `
            <div class="user-item">
              <h3>${user.name}</h3>
              <p>Email: ${user.email}</p>
              <p>会社: ${user.company.name}</p>
            </div>
          `  
        );
        
        dataContainer.innerHTML = dataContainerHTML;
      })
      .catch(error => {
        statusElement.innerHTML = `<div class="error">${error.message}</div>`;
      });
  });