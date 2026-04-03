// 반복문 for
// for(초기변수생성(i, j, k, m, n)과 초기값대입; 조건식; 증감식){반복실행문}

//자바스크립트 10번 반복출력(반복문 이용)
// DOM요소(li[]) 20개 1~20 기준으로 생각해서 숫자데이터로 생각해야함.
for(let i=0; i<10; i++){
    console.log('자바스크립트');
}

// "CSS" 5번 반복 출력
for(let i = 0; i<=4; i++){
    console.log('css');
}

//HTML 20번 반복 출력
for(let i=0; i<20; i++){
    console.log(`html${i+1}`);
}

// 구구단 2단 반복 출력 "2x1=2"
function dan2(){
    let num = 2;
    let result = '';
    result +=`${num}X1 = ${num*1}`;
    result +=`${num}X1 = ${num*2}`;
    result +=`${num}X1 = ${num*3}`;
    return result;
}
//1 시작한 예시
const dan2Result = document.querySelectorAll('.dan .result');
console.log(dan2Result);
for(let i=1; i<10; i++){
    let result = `2x${i}=${2*i}<br>`;
    // dan2Result.textContent += result;
    dan2Result[0].innerHTML += result;
    result = `3x${i}=${3*i}<br>`;
    dan2Result[1].innerHTML += result;
    result = `4x${i}=${4*i}<br>`;
    dan2Result[2].innerHTML += result;
}
//0 시작한 예시
for(let i=0; i<9; i++){
    let result = `2x${i}=${2*i}`;
    console.log(result);
}
// 3단

//자바스크립트 10번 반복 출력(반복문 없을 때)
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');

// 자바스크립트를 이용한 태그 생성
const target = document.querySelector('.target');
// 태그 생성 목적의 변수(저장소) 생성
const ul = document.createElement('ul');
ul.innerHTML='<li>목록1</li>'
console.log(ul);
//target.innerHTML = ul;
target.appendChild(ul); // createElement로 생성한 태그 삽입방법
//console.log(target);
/* target.innerHTML = '<ul>'
target.innerHTML += '<li>목록1</li>'
target.innerHTML += '<li>목록2</li>'
target.innerHTML += '</ul>' */
