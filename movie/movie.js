const movieBoxs = document.getElementById('movie-boxs') //id
const creatMovieCard = movie => {
  const {id, title, overveiw,poster_path, vote_average} = movie;
}



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYwN2U4NzM1YzE5MWVkMzY1YzcxZjhiOTJmNjk0MiIsInN1YiI6IjY2MjhkZDkyMzk1NDlhMDE2NjAxMmQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MILDD_lRkROvvW5HDA4GnvUdw_ZxTRgtEmnZXSiy-Wk'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        
        let movies = response["results"];
            movies.forEach(a => {
              let title = a['original_title']
              let overveiw = a['overview']
              let vote_average = a['vote_average']
              let poster_path = a['poster_path']

              let temp_html = `           
            <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="poster_path" alt="...">
            <div class="card-body">
              <h5 class="title">${title}</h5>
              <p class="overveiw">${overview} </p>
              <p class="vote_average">평점은:${vote_average}</p>
               `
              $('#movie-boxs').append(temp_html);
            })
    })
    
    
    
    .catch(err => console.error(err));