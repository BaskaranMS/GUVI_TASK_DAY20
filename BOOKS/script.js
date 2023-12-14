//function to fetch data from the Crossref API
function fetchWorks() {
    return new Promise((resolve, reject) => {
        fetch('https://api.crossref.org/works?filter=has-full-text:true&mailto=GroovyBib@example.org')
            .then(response => response.json())
            .then(data => resolve(data.message.items))
            .catch(error => reject(error));
    });
}

// Function to create work cards
function createWorkCards(works) {
    const container = document.getElementById('worksContainer');

    works.forEach(work => {
        const card = `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${work.title[0]}</h5>
                    <p class="card-text">Author(s): ${work.author.map(author => author.given + ' ' + author.family).join(', ')}</p>
                    <p class="card-text">DOI: ${work.DOI}</p>
                </div>
            </div>
        `;

        container.innerHTML += card;
    });
}

// Fetch data and create cards when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchWorks()
        .then(data => createWorkCards(data))
        .catch(error => console.error('Error fetching data:', error));
});
