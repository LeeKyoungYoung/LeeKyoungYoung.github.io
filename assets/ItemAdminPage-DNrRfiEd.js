import{d as i,i as p,j as e,L as u}from"./index--oy4d1LN.js";import{Q as c,u as j}from"./queryKey-C4OvowHP.js";import{d as f,g as b}from"./item-CqJ6QjA0.js";import{I as s}from"./itemCategory-Bnt1WtYm.js";import{u as g}from"./useMutation-BWXDtBTP.js";import"./utils-km2FGkQ4.js";const y=i.button`
  background: none;
  border: none;
  color: #da2b2b;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;function I({id:n}){const r=p(),t=g({mutationFn:o=>f(o),onSuccess:async()=>{alert("비품 삭제 성공"),r.setQueryData(c.item.items(s.ITEM),l=>(console.log("Old Cached Data Before Update:",l),l?l.filter(h=>h.id!==n):[])),await r.invalidateQueries({queryKey:c.item.items(s.ITEM)});const o=r.getQueryData(c.item.items(s.ITEM));console.log("Updated Cached Data:",o)},onError:o=>{console.error("비품 삭제 실패",o),alert("비품 삭제 실패")}}),m=()=>{t.mutate(n)};return e.jsx(y,{onClick:m,children:"삭제"})}const T=i.div`
  padding: 10rem;
`,v=i.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0rem;
  font-size: 1rem;
  text-align: left;
`,a=i.th`
  border-bottom: 2px solid black;
  padding: 10px;
`,d=i.td`
  border-bottom: 1px solid #ddd;
  padding: 10px;
`,x=i(u)`
  padding: 0.25rem 0.5rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,C=i.div`
  padding: 0.25rem 0.5rem;
  display: inline-block;
`,Q=i(u)`
  color: #2cb4db;
  font-size: 1.25rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;function k(){const n=j({queryKey:c.item.items(s.ITEM),queryFn:async()=>b(s.ITEM)});let r;return n.isLoading?r=e.jsx("div",{children:"로딩중..."}):n.isError?r=e.jsx("div",{children:"에러가 발생했습니다!"}):n.isSuccess&&(n.data.length===0?console.log("서버 통신 가능, 아직 데이터 없음"):r=e.jsxs(v,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(a,{children:"id"}),e.jsx(a,{children:"제품명"}),e.jsx(a,{children:"설명"}),e.jsx(a,{children:"대여 가능 여부"})]})}),e.jsx("tbody",{children:n.data.map(t=>e.jsxs("tr",{children:[e.jsx(d,{children:t.id}),e.jsx(d,{children:t.name}),e.jsx(d,{children:t.description}),e.jsx(d,{children:t.isBorrowed?e.jsx("span",{children:"대여 불가능"}):e.jsx("span",{children:"대여 가능"})}),e.jsxs(d,{children:[e.jsx(x,{to:`/admin/item/view/${t.id}`,children:"자세히 보기"}),"|",e.jsx(x,{to:`/admin/item/edit/${t.id}`,children:"수정"}),"|"," ",e.jsx(C,{children:e.jsx(I,{id:t.id})})]})]},t.id))})]})),e.jsxs(T,{children:[e.jsx("h1",{children:"관리자 비품 페이지"}),r,e.jsx(Q,{to:"/admin/item/write",children:"새 비품 추가"})]})}function q(){return e.jsx(k,{})}export{q as default};
