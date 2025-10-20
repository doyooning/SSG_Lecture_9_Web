const axios = require('axios'); // axios 라이브러리 import

const url =
  'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

axios
  .get(url) // GET 요청
  .then((result) => {
    if (result.status != 200) {
      throw new Error('Request Failed!');
    }

    if (result.data) {
      return result.data;
    }

    throw new Error('No Data');
  })
  .then((data) => {
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error('No Movie List');
    }
    return data.articleList; // 영화리스트 반환
  })
  .then((articles) => {
    return articles.map((articles, idx) => {
      return { title: articles.title, rank: idx + 1 };
    });
  }) // 영화리스트를 제목과 순위 정보로 분리
  .then((results) => {
    // 받은 영화리스트 정보를 출력
    for (let movieinfo of results) {
      console.log(`[${movieinfo.rank}위] ${movieinfo.title}`);
    }
  })
  .catch((error) => {
    console.log('Error Occurred');
    console.error(error);
  });
