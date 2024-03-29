# 탐욕법(Greedy)
✔ 현재 상황에서 가장 좋은 방법을 고르는 것<br>

📋 노션 페이지 : https://2cleanwater.notion.site/9c88ff816970447d868e241fe3aa7308

<br>

<details markdown="1">
<summary><strong>01. 체육복</strong></summary><br>
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42862<br><br>
해결시간 : 34분<br><br>
검색 여부 : 아니오<br><br>
문제 해결 방법 : 도난 학생과 여벌 학생 중 중복되는 학생들을 제거한 후, answer는 전체학생 - 도난학생으로 설정, a번호 - 1, a번호 + 1에게서 여벌 옷을 받아온 학생을 answer에 더해준다.<br><br>
기억할 점 : 겹치는 항목을 제거할 땐 filter 함수를 사용할 것, forEach는 함수이기 떄문에 break가 아닌 return을 이용할 것.

</details>

<br>

<details markdown="1">
<summary><strong>02. 조이스틱</strong></summary><br>
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42860<br><br>
해결시간 : 2시간 10분<br><br>
검색여부 : 아니오<br><br>
문제 해결 방법 : 문자열을 아스키코드로 변환해준 후 78보다 큰지 작은지 판별하여 문자 변환 횟수 카운트, 같은 for문에서 체크 중인 문자 다음이 마지막 문자인지, A인지 &&로 체크한 후 연속된 A의 갯수 카운트, 좌우이동에선 최대인 length-1과 비교하여 연속 A 갯수만큼 빠지고 왼쪽으로 돌아가는 경우, 오른쪽으로 돌아가는경우 두가지와 비교하여 최솟값을 구한다.<br><br>
기억할 점 : 아스키코드 대문자 A:65, Z:90, a:97, z:122. 주어지긴 하겠지만 혹시 모르니 외워두기, 가짓수가 여러 개 있을 땐 Math.min를 사용할 수 있어야한다.

</details>

<br>

<details markdown="1">
<summary><strong>03. 큰수 만들기</strong></summary><br>
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42883<br><br>
해결시간 : 1시간 30분<br><br>
검색여부 : 예<br><br>
문제 해결 방법 : stack을 만들어서 해결하는 것이 중요한 문제, stack에 number를 차례대로 넣고 비교하면서 더 큰수가 나오면 제거하고 cnt++로 제거된 문자 수 를 체크한다. 마지막에 동일한 숫자가 연속된 경우가 있을 수 있으므로 제시된 길이만큼 잘라 출력한다.<br><br>
기억할 점 : for문 안에 while문을 통해 조건이 성립될 때 반복할 수 있는 방법을 기억해두자, slice(3)은 3번째 인덱스까지 잘라내기, substring(3)은 3번쨰 인덱스부터 출력

</details>

<br>

<details markdown="1">
<summary><strong>04. 구명보트</strong></summary><br>

- 링크 : [https://school.programmers.co.kr/learn/courses/30/lessons/42883](https://school.programmers.co.kr/learn/courses/30/lessons/42885)
- 해결시간 : 32분
- 검색여부 : 아니오
- 문제 해결 방법 : limit 무게가 있다는 점과 최대 2명만 탈 수 있다는 조건이 있으므로 그 조건을 이용하여 반복문을 줄인다. 무인도 인원은 최대 50000명이므로 O(N * log N).  최대무게와 최소무게를 더한 값을 기준으로 가능하면 2명 안되면 1명을 보내는 식으로 for문과 endIndex값으로 전체 배열을 훑는다. 중간에 값이 겹치는 부분에서 동일하면 1명 보트, 스쳐갔으면 이미 그전에 2명을 보냈으므로 그냥 return을 하였다.
- 기억할 점 : 그리디에서 해결 방법의 근거를 찾는 것이 중요하다. 최대 무게와 그 다음 최대를 합쳐 보내는 것은 해결 방법이 아니다.
</details>

<br>

<details markdown="1">
<summary><strong>05. 섬연결하기</strong></summary><br>

- 링크 : [https://school.programmers.co.kr/learn/courses/30/lessons/42861](https://school.programmers.co.kr/learn/courses/30/lessons/42861)
- 해결시간 : 1시간 30분
- 검색여부 : 예
- 문제 해결 방법 : 크루스칼 알고리즘을 이용해서 푸는 문제였다. sort로 비용순 정렬을 한 뒤 부모인자를 찾아내서 서로 연결되어있는지 확인하는 방법을 사용했다.
- 기억할 점 : 크루스칼 알고리즘은 최소비용 신장 트리를 만드는 알고리즘이다.
</details>

<br>

<details markdown="1">
<summary><strong>06. 단속카메라</strong></summary><br>

- 링크 : [https://school.programmers.co.kr/learn/courses/30/lessons/42884](https://school.programmers.co.kr/learn/courses/30/lessons/42884)
- 해결시간 : 1시간 30분
- 검색여부 : 아니오
- 문제 해결 방법 : 카메라가 겹치는 지점을 파악하여 운전 시작 지점과 비교하면 되는 문제였다.
- 기억할 점 : 조건이 복잡하다면 역으로 바꿔서 해보는 트라이를 해보자
</details>

