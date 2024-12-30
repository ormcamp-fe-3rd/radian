# 🚗 클래식카를 전기차로 " radian "

<p align="center"><img width="900" alt="image" src="https://github.com/user-attachments/assets/d045cc46-de04-4558-bf2e-11201384b7cf"></p>

<a href= "https://www.figma.com/design/tk3h0utOTodFirQLPuez9C/Figma-basics?node-id=612-2&t=I6zmSxuFTkDX9SjG-1"> 🎨 굴렁쇠 Figma </a>

<a href= "https://radian-e6681.web.app/">배포 된 라디안 링크 🚘</a>
<br>
<br>

## 📑 **프로젝트 소개**

- radian은 클래식카를 좋아하지만, 전기차를 사용하고 싶은 사람들을 위해 클래식카의 느낌과 전기차의 기능을 함께 사용할 수 있는 차를 판매하는 사이트입니다.
- 클래식카의 감성은 유지하되, 전기차의 성능을 함께 느낄 수 있습니다.
- 옵션들을 선택하여 화면에서 해당 옵션에 따라 변화되는 것을 보며, 사용자가 원하는 느낌인지 눈으로 확인 할 수 있습니다.
- 옵션 선택을 통해 사용자가 원하는 차의 대략적인 가격을 확인해 볼 수 있습니다.

<br>

## 📆 **개발 일정**

> 12월 2일 - 4일 : 기획 <br>
> 12월 5일 : 기획 발표 <br> <span style="background-color:yellow">**12월 6일 - 13일 : 담당 페이지 개발 🛠️**</span><br>
> 12월 16 - 19일 : 메인페이지 / 백엔드 공통 개발 🛠️ <br>
> 12월 20 - 23일 : 테스트 및 오류 수정 <br>
> 12월 24일 : 발표 준비 <br> **12월 27일 : 프로젝트 발표**

<br>

## 🧑‍🧑‍🧒‍🧒 **팀원 구성**

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Devkdy22"><img src="https://avatars.githubusercontent.com/u/120148744?s=400&u=2409183572bda61e63d318220d745f78f902db50&v=4" width="120px;" alt=""/><br /><sub><b>radian 팀장 : 김도연 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ksj0621"><img src="https://avatars.githubusercontent.com/u/184090294?v=4" width="120px;" alt=""/><br /><sub><b>radian 팀원 : 김수진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/structified"><img src="https://avatars.githubusercontent.com/u/53807656?v=4" width="120px;" alt=""/><br /><sub><b>radian 팀원 : 김우주</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/incolore9"><img src="https://avatars.githubusercontent.com/u/180628269?v=4" width="120px;" alt=""/><br /><sub><b>radian 팀원 : 박한솔</b></sub></a><br /></td>
  </tbody>
</table>

<br>

<br>

## ✅ **실행 방법**

### 프로젝트 clone 이후 패키지 설치
```
npm install
```
### 설치 이후 
> vite 실행
```
npm run dev 
```
> 배포 (npm run deploy 작성 시 build 와 deploy 자동 작동)
```
npm run deploy  
```
> eslint 사용 시
```
npm run lint (확인하는 방법)
npm run lint:fix (오류 사항 자동 수정하는 방법)
```

> prettier 사용 시
```
npm run format
```

<br>

## 🚘 **radian 사이트 화면 설명**

### 🏁 **메인화면 페이지**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/8a810b83-d23e-46a2-a9df-e5512f7c68bb" alt="메인화면" width="480" height="300"/>
    </td>
    <td>
      radian 사이트의 메인페이지로,<br>
      스크롤 값을 활용한 페이드인, 플립, 확대 애니메이션과 같은 다양한 애니메이션 효과를 통해 사용자에게 시각적인 즐거움을 보여드립니다.
    </td>
  </tr>
</table>

### 🔐 **로그인/회원가입 페이지**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/2edbe484-1ecb-424d-a0c9-ce5d869752b1" alt="로그인/회원가입" width="480" height="300"/>
    </td>
    <td>
      radian 사이트의 로그인 및 회원가입 페이지로, <br>
      입력 양식 점검 폼을 통해 사용자에게 올바르지 않은 입력임을 알려주고, 정규식 조건에 입력한 정보가 만족할 경우 버튼이 활성화됩니다.
    </td>
  </tr>
</table>

### 🚘 **상품 리스트 페이지**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/bd0b14a8-8272-4fb9-8601-7ebf8bddda31" alt="상품 리스트 페이지" width="480" height="300"/>
    </td>
    <td>
      radian 사이트의 상품 리스트 페이지로, 다양한 전기차 모델을 한눈에 볼 수 있는 인터페이스를 제공합니다.<br>
      상단 이미지 캐러셀을 통해 전체 상품 이미지들이 보여지고, 하단에는 상품들이 순차적으로 구성되어 있습니다.<br> 또한 해당 상품의 상세 이미지들을 모달창의 캐러셀을 통해 보여드립니다.
    </td>
  </tr>
</table>

### 🔎 **상품 상세 페이지**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/1d0e62e6-93d8-4575-81da-b9f4c134fa69" alt="상품 상세 페이지" width="480" height="300"/>
    </td>
    </td>
    <td>
      상품 상세 페이지는 사용자가 선택한 차량에 대한 소개를 중점으로 구성되어있습니다.<br>
      메뉴 네비게이션을 통해 손쉽게 원하는 위치 이동을 할 수 있고, 마우스를 이용하여 스크롤을 내리게 되면 스크롤 트리거 애니메이션이 작동되어 사용자가 정보를 탐색하며 시각적인 즐거움을 느낄 수 있습니다. 
    </td>
  </tr>
</table>

### 📝 **상품 예약 페이지**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/a868506a-b351-4634-8f4d-e9c51849c0b7" alt="상품 상세 페이지" width="480" height="300"/>
    </td>
    </td>
    <td>
      상품 예약 페이지로, 사용자가 쉽게 옵션들을 선택할 수 있고, 3D 화면을 통하여 사용자가 선택한 차량을 입체적이고 직관적으로 볼 수 있습니다. <br> 색상 뿐만 아니라 엔진 소리도 들어볼 수 있습니다.
    </td>
  </tr>
</table>
<br>

## 💻 **Tech Stack**

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=three.js&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white"/>

<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Visual Studio Code-00A2FF?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/> <img src="https://img.shields.io/badge/googledocs-4285F4?style=for-the-badge&logo=googledocs&logoColor=white"/>

<br>

<br>

## 🔗 **팀 규칙** - [상세보기🔍](https://github.com/ormcamp-fe-3rd/radian/wiki/%F0%9F%94%97-%ED%8C%80-%EA%B7%9C%EC%B9%99)

<br>

## ⚙️ **주요 기능** - [상세보기🔍](https://github.com/ormcamp-fe-3rd/radian/wiki/%E2%9A%99%EF%B8%8F-%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5)

<br>

## 🗂️ **폴더 구조** - [상세보기🔍](https://github.com/ormcamp-fe-3rd/radian/wiki/%F0%9F%97%82%EF%B8%8F-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)

<br>

## 📑 **회의록** - [상세보기🔍](https://github.com/ormcamp-fe-3rd/radian/wiki/%F0%9F%93%91-%ED%9A%8C%EC%9D%98%EB%A1%9D)

<br>
