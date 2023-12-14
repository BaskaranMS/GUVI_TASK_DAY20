//  function to fetch data from the API
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://www.balldontlie.io/api/v1/players')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Function to create player cards
function createPlayerCards(players) {
    const container = document.getElementById('playersContainer');

    players.forEach(player => {
        const card = `
            <div class="card m-2 my" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${player.first_name} ${player.last_name}</h5>
                    <p class="card-text">Team: ${player.team.full_name}</p>
                    <p class="card-text">Position: ${player.position}</p>
                </div>
            </div>
        `;

        container.innerHTML += card;
    });
}

// Fetch data and create cards when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
        .then(data => createPlayerCards(data.data))
        .catch(error => console.error('Error fetching data:', error));
});
