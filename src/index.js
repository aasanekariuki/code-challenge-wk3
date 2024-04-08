// Your code here

const baseURL = `http://localhost:3000/films`

fetch(baseURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }

}).then((res) => res.json())

  .then((data) => {

    const movieTitles = document.getElementById('films')


    data.forEach((title) => {
        const paragraph = document.createElement('li')

        paragraph.classList.add("film", "item")

        paragraph.addEventListener("click", async () => {
            currentFilmId = title.id;
            const selectedFilm = await fetchFilmById(currentFilmId);
            updateFilmDetails(selectedFilm);
        });



        paragraph.innerText = title.title

        movieTitles.append(paragraph)}) 
        
    })

    const fetchFilmById = async(id) => {

        const response = await 

        fetch(`${baseURL}/${id}`);

        const filmData = await response.json();

        return filmData;
    }

    const updateFilmDetails = (selectedFilm) => {
        console.log(selectedFilm.poster);

        const posters = document.getElementById('poster')

        posters.src = selectedFilm.poster

        const movieTitles = document.getElementById('title')

        movieTitles.innerHTML = selectedFilm.title

        const runTime = document.getElementById('runtime')

        runTime.innerHTML = selectedFilm.runtime + 'Minutes'

        const descriptions = document.getElementById('film-info')

        descriptions.innerHTML = selectedFilm.description

        const showtime = document.getElementById('showtime')

        showtime.innerHTML = selectedFilm.showtime

        const ticketsAvailable = selectedFilm.capacity - selectedFilm.tickets_sold  

        document.getElementById('ticket-num').innerHTML = ticketsAvailable



fetch(baseURL, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            tickets_sold: ticketsAvailable
        })
    
    }).then((res) => {
        if (res.ok){
            console.log('ticket sold successful');
        }
        else{
            console.error('failed ticket not bought');
        }
    })
    .catch(error => {
        console.error('error updating tickets sold', error)
    })

    .catch(error => {
        console.error('error fetching films', error)
    })


fetch (baseURL,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })

        
.then((resp)=> {

return resp.json

.then(details=> 
    
    {console.log(details)})}

)
}
    
    
   