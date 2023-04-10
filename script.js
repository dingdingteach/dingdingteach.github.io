const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', function() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    
    let score = 0;
    
    for(let i = 0; i < name1.length; i++) {
        score += name1.charCodeAt(i);
    }
    
    for(let i = 0; i < name2.length; i++) {
        score += name2.charCodeAt(i);
    }
    
    score = score % 101;
    
    result.innerHTML = `친밀도 점수 : <br>${name1} 님과 ${name2} 님 <br>친밀도 점수는 ${score}점 입니다.`;
});
