import{d as o,u as n,j as t}from"./index--oy4d1LN.js";import{H as s,S as i,W as c}from"./Vector-skyblue-CjVh8wWN.js";import"./Status_Crang-D4rL2o8g.js";const d=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 20rem;
  font-family: 'Pretendard Bold';
  p {
    color: #2cb4db;
  }
  button {
    font-family: 'Pretendard Bold';
  }
`,a=o.div`
  p {
    text-align: center;
  }
  margin-bottom: 5rem;
`,m=o.p`
  font-size: 1.875rem;
  margin-bottom: 3rem;
`,e=o.p`
  color: #8c8c8c !important;
  font-size: 1.5625rem;
`,l=o.div`
  button {
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.75rem 2rem;
    margin: 0 1.25rem;
    user-select: none;
    transition: transform 0.2s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`,b=o.button`
  color: #2cb4db;
  border: 2px solid #2cb4db;
`,f=o.button`
  background-color: #2cb4db;
  color: #ffffff;
  border: 2px solid #2cb4db;
`;function g(){const r=n();return t.jsxs(d,{children:[t.jsx(s,{statusCode:403}),t.jsxs(a,{children:[t.jsx(m,{children:"Forbidden"}),t.jsx(e,{children:"존재하지 않는 주소를 입력하셨거나,"}),t.jsx(e,{children:"요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다."})]}),t.jsxs(l,{children:[t.jsxs(b,{onClick:()=>r("/"),children:["메인으로 ",t.jsx("img",{src:i})]}),t.jsxs(f,{onClick:()=>r(-1),children:["이전으로 ",t.jsx("img",{src:c})]})]})]})}export{g as default};
