const articlesElement = document.getElementById('articles');

fetch('https://news.naver.com/main/list.nhn?mode=LS2D&mid=shm&sid1=101&sid2=259')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const articles = doc.querySelectorAll('.section_list_ranking li');

    articles.forEach(article => {
      const title = article.querySelector('.ranking_headline a').textContent;
      const date = article.querySelector('.ranking_office').textContent;

      const li = document.createElement('li');
      li.innerHTML = `<span class="title">${title}</span><br><span class="date">${date}</span>`;
      articlesElement.appendChild(li);
    });
  })
  .catch(error => console.error(error));
