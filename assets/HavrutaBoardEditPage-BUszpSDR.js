import{u as R,r as u,j as r}from"./index--oy4d1LN.js";import{u as b,Q as v}from"./queryKey-C4OvowHP.js";import{u as k}from"./useMutation-BWXDtBTP.js";import{g as B}from"./havruta-Di_6p_ps.js";import{u as S,b as M}from"./board-CNwfHsRh.js";import{u as Q}from"./Markdown-Cpgij77q.js";import{d as T}from"./index-BMmima0Q.js";import{C as q}from"./category-CfUmwj9X.js";import"./utils-km2FGkQ4.js";const o={"edit-container":"_edit-container_mosg8_1","edit-title":"_edit-title_mosg8_21","edit-form":"_edit-form_mosg8_37","input-title":"_input-title_mosg8_107","input-content":"_input-content_mosg8_119","submit-button":"_submit-button_mosg8_155","error-message":"_error-message_mosg8_191","input-error":"_input-error_mosg8_203","editor-error-container":"_editor-error-container_mosg8_211","editor-container":"_editor-container_mosg8_225","file-button":"_file-button_mosg8_233","file-input":"_file-input_mosg8_273","file-list":"_file-list_mosg8_281","file-item":"_file-item_mosg8_291","remove-button":"_remove-button_mosg8_311"};function A(){const x=R(),y=q.HAVRUTA,[d,p]=u.useState(null),[a,f]=u.useState({}),[s,m]=u.useState({title:"",content:"",category:y,imageUrls:[],fileUrl:"",havrutaDto:{id:null,classname:"",professor:""}}),_=window.location.href,j=_.substring(_.lastIndexOf("/")+1),g=Number(j),{editorRef:l,editorConfig:U}=Q({onContentChange:t=>{m(e=>({...e,content:t})),t.trim()&&f(e=>({...e,content:void 0}))}}),c=b({queryKey:v.board.boardById(g),queryFn:()=>M(g),enabled:!!g}),h=b({queryKey:v.havruta.havrutas(),queryFn:async()=>B()});u.useEffect(()=>{var t,e,i;if(c.data&&l.current){const n=c.data;m({title:n.title||"",content:n.content||"",category:n.category,imageUrls:n.imageUrls||[],fileUrl:n.fileUrl||"",havrutaDto:{id:((t=n.havrutaDto)==null?void 0:t.id)||null,classname:((e=n.havrutaDto)==null?void 0:e.classname)||"",professor:((i=n.havrutaDto)==null?void 0:i.professor)||""}}),l.current.getInstance().setMarkdown(n.content||"")}},[c.data,l]);const N=k({mutationFn:async()=>{const t=l.current.getInstance().getMarkdown(),e=d||null,i={board:{title:s.title,content:t,imageUrls:s.imageUrls,isChangedFile:!!e,deleted:!1},file:e?[e.name]:[]};return console.log(i.board),await S(i.board,e)},onSuccess:async()=>{alert("게시글 수정 성공"),await x(-1),setTimeout(()=>{window.scrollTo(0,0)},100)},onError:t=>{console.error("게시글 수정 실패:",t),alert("게시글 수정 실패")}}),C=t=>{const e=decodeURIComponent(t),i=e.match(/[^/]+\/[^/]+\/[a-f0-9-]+_(.+)/);return i?i[1]:e.split("/").pop()||"파일"},E=()=>{var n;const t={};let e=!0;return s.title.trim()||(t.title="제목을 입력해주세요.",e=!1),(((n=l.current)==null?void 0:n.getInstance().getMarkdown())||"").trim()||(t.content="내용을 입력해주세요.",e=!1),f(t),e},F=t=>{const{name:e,value:i}=t.target;m(n=>({...n,[e]:e==="imageUrls"?i.split(","):i})),a[e]&&f(n=>({...n,[e]:void 0}))},w=t=>{t.target.files&&t.target.files.length>0&&p(t.target.files[0])},D=()=>{p(null)},I=t=>{t.preventDefault(),E()&&N.mutate()};return c.isLoading||h.isLoading?r.jsx("div",{children:"데이터를 불러오는 중입니다..."}):c.isError||h.isError?r.jsx("div",{children:"에러가 발생했습니다!!"}):r.jsx("div",{className:o["edit-container"],children:r.jsxs("form",{className:o["edit-form"],onSubmit:I,children:[r.jsx("h2",{className:o["edit-title"],children:"하브루타 게시물 수정"}),r.jsx("label",{htmlFor:"title",children:"제목"}),r.jsx("input",{className:`${o["input-title"]} ${a.title?o["input-error"]:""}`,type:"text",id:"title",name:"title",placeholder:"제목을 입력하세요.",value:s.title,onChange:F}),a.title&&r.jsx("p",{className:o["error-message"],children:a.title}),r.jsx("label",{htmlFor:"content",children:"내용"}),r.jsx("div",{className:`${o["editor-container"]} ${a.content?o["editor-error-container"]:""}`,children:r.jsx(T,{ref:l,...U})}),a.content&&r.jsx("p",{className:o["error-message"],children:a.content}),r.jsx("label",{className:o["file-button"],htmlFor:"fileUpload",children:"파일 선택"}),r.jsx("input",{className:o["file-input"],type:"file",id:"fileUpload",onChange:w}),s.fileUrl&&!d&&r.jsxs("div",{className:o["file-item"],children:[C(s.fileUrl),r.jsx("button",{type:"button",className:o["remove-button"],onClick:()=>m(t=>({...t,fileUrl:""})),children:"✕"})]}),d&&r.jsxs("div",{className:o["file-item"],children:[d.name,r.jsx("button",{type:"button",className:o["remove-button"],onClick:D,children:"✕"})]}),r.jsx("div",{className:o["file-comment"],children:"파일 업로드는 한 개만 가능합니다!"}),r.jsx("input",{className:o["submit-button"],type:"submit",value:"하브루타 수정"})]})})}function z(){return r.jsx("div",{children:r.jsx(A,{})})}export{z as default};
