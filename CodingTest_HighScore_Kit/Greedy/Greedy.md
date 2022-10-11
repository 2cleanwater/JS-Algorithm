# 탐욕법(Greedy)
✔ 현재 상황에서 가장 좋은 방법을 고르는 것<br>

📋 노션 페이지 : https://2cleanwater.notion.site/9c88ff816970447d868e241fe3aa7308

<br>

<details markdown="1">
<summary><strong>01. 체육복</strong></summary>
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42862
해결시간 : 34분
검색 여부 : 아니오
문제 해결 방법 : 도난 학생과 여벌 학생 중 중복되는 학생들을 제거한 후, answer는 전체학생 - 도난학생으로 설정, a번호 - 1, a번호 + 1에게서 여벌 옷을 받아온 학생을 answer에 더해준다.
기억할 점 : 겹치는 항목을 제거할 땐 filter 함수를 사용할 것, forEach는 함수이기 떄문에 break가 아닌 return을 이용할 것.

</details>

<br>

<details markdown="1">
<summary><strong>02. 조이스틱</strong></summary>
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42860
해결시간 : 2시간 10분
검색여부 : 아니오
문제 해결 방법 : 문자열을 아스키코드로 변환해준 후 78보다 큰지 작은지 판별하여 문자 변환 횟수 카운트, 같은 for문에서 체크 중인 문자 다음이 마지막 문자인지, A인지 &&로 체크한 후 연속된 A의 갯수 카운트, 좌우이동에선 최대인 length-1과 비교하여 연속 A 갯수만큼 빠지고 왼쪽으로 돌아가는 경우, 오른쪽으로 돌아가는경우 두가지와 비교하여 최솟값을 구한다.
기억할 점 : 아스키코드 대문자 A:65, Z:90, a:97, z:122. 주어지긴 하겠지만 혹시 모르니 외워두기, 가짓수가 여러 개 있을 땐 Math.min를 사용할 수 있어야한다.

</details>

<br>

<details markdown="1">
<summary><strong>03. 큰수 만들기</strong></summary>
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42883
해결시간 : 1시간 30분
검색여부 : 예
문제 해결 방법 : stack을 만들어서 해결하는 것이 중요한 문제, stack에 number를 차례대로 넣고 비교하면서 더 큰수가 나오면 제거하고 cnt++로 제거된 문자 수 를 체크한다. 마지막에 동일한 숫자가 연속된 경우가 있을 수 있으므로 제시된 길이만큼 잘라 출력한다.
기억할 점 : for문 안에 while문을 통해 조건이 성립될 때 반복할 수 있는 방법을 기억해두자, slice(3)은 3번째 인덱스까지 잘라내기, substring(3)은 3번쨰 인덱스부터 출력

</details>
