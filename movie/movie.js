
// api 데이터 불러오기

function apidata() {
  const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYwN2U4NzM1YzE5MWVkMzY1YzcxZjhiOTJmNjk0MiIsInN1YiI6IjY2MjhkZDkyMzk1NDlhMDE2NjAxMmQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MILDD_lRkROvvW5HDA4GnvUdw_ZxTRgtEmnZXSiy-Wk'
    }
};
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
    .then(response => response.json())
    .then(response => {
      moviecard(response.results);
    })
   .catch(err=>  console.log(err));
   

}
//api데이터로 영화카드 만들기

const maincard = document.createElement('div');
const movieBoxs = document.getElementById('cards') 
maincard.classList.add('cards')

function moviecard(movie) {
  movieBoxs.innerHTML=''; 
  
  movie.forEach(movie => {
    let title = movie.title;
    let overview = movie.overview;
    let poster = movie.poster_path;
    let vote = movie.vote_average;
    let id = movie.id;

    const temp_html = `
  <div class="col" onclick = "alert('영화 id: ${id}')">       
  <img src="https://image.tmdb.org/t/p/w500${poster}" alt="..." class="posterimg">
    <h5 class="title">${title}</h5>
    <p class="overview">${overview}</p>
    <p class="vote_average">평점: ${vote}</p>
     </div>`
  
movieBoxs.insertAdjacentHTML('beforeend',temp_html);
  });

};

//검색기능
const inputBox = document.querySelector('#search-input');
const searchBtn = document.querySelector('.searchbtn')

document.addEventListener('DOMContentLoaded', ()=> {
  apidata();
}) //페이지로드하면 이벤트실행
 
document.addEventListener('keydown',function (event) {
  if(event.key === 'Enter') {
    searchPost();
  }
});

inputBox.focus();

window.searchPost = () => {
  let searchmv = inputBox.value.trim();
  if (searchmv === '') {
    alert('검색어를 입력해주세요');
    inputBox.focus();
    return;
  }
  const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYwN2U4NzM1YzE5MWVkMzY1YzcxZjhiOTJmNjk0MiIsInN1YiI6IjY2MjhkZDkyMzk1NDlhMDE2NjAxMmQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MILDD_lRkROvvW5HDA4GnvUdw_ZxTRgtEmnZXSiy-Wk'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
    .then(response => response.json())
    .then(response => {
  if (response.results.length > 0 ) {
    moviecard (response.results);
  } else { alert('검색 결과가 없습니다'); return;}
})
   .catch(err=>  console.log(err));
}
 
