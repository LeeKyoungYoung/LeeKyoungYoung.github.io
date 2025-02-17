import{r as f,i as x,j as s,M as U,L as z,R as h,u as $,b as k,k as H}from"./index--oy4d1LN.js";import{Q as p,u as R}from"./queryKey-C4OvowHP.js";import{c as W,a as q,d as Q,u as K,b as V}from"./comment-CQBf1myx.js";import{u as C}from"./useMutation-BWXDtBTP.js";import{H as w}from"./HeightSpacer-DEJx0swR.js";import{W as S}from"./WidthSpacer-DVNpzZo4.js";import{d as G}from"./board-CNwfHsRh.js";const A="_commentWriteContainer_1ci6j_1",T="_form_1ci6j_17",Y="_inputField_1ci6j_39",J="_submitButton_1ci6j_85",v={commentWriteContainer:A,form:T,inputField:Y,submitButton:J};function X({parentId:t}){const e=window.location.href,n=e.substring(e.lastIndexOf("/")+1),r=Number(n),[o,i]=f.useState({boardId:r,content:""}),c=x(),N=C({mutationFn:t?l=>q(l,r,t):l=>W(l,r),onSuccess:async()=>{try{alert("댓글 작성 성공"),i({boardId:r,content:""});const l=[p.comment.commentsById(r),p.comment.commentsCountById(r)];await Promise.all(l.flatMap(_=>[c.invalidateQueries({queryKey:_}),c.refetchQueries({queryKey:_})]))}catch(l){console.error("댓글 갱신 실패:",l),alert("댓글 갱신 중 오류가 발생했습니다.")}},onError:l=>{console.error("댓글 작성 실패:",l),alert("댓글 작성 실패")}}),b=l=>{const{name:_,value:P}=l.target;i(L=>({...L,[_]:P}))},O=l=>{l.preventDefault(),N.mutate({...o,userId:-1,commentList:[],createdAt:new Date(Date.now()),updatedAt:new Date(Date.now()),deleted:!1,havrutaDto:{id:null,classname:"",professor:""},resUserDetailDto:{name:"",email:"",studentId:-1,term:"",githubId:"",imgUrl:""}})};return s.jsx("div",{className:v.commentWriteContainer,children:s.jsxs("form",{onSubmit:O,className:v.form,children:[s.jsx("div",{className:v.inputField,children:s.jsx("input",{type:"text",id:"content",name:"content",placeholder:"댓글을 작성하세요",value:o.content,onChange:b})}),s.jsx("button",{type:"submit",className:v.submitButton,children:"댓글쓰기"})]})})}const Z={"delete-button":"_delete-button_1db0t_1"};function tt({id:t}){const e=x(),n=C({mutationFn:()=>(console.log("삭제 요청 ID:",t),Q(t)),onSuccess:()=>{console.log("삭제 성공:",t),e.invalidateQueries()},onError:o=>{console.error("댓글 삭제 실패:",o),alert("댓글 삭제 실패")}}),r=()=>{n.mutate()};return s.jsx("div",{className:Z["delete-button"],onClick:r,children:"삭제"})}const et="_commentWriteContainer_1v7ld_1",nt="_form_1v7ld_17",st="_inputField_1v7ld_39",rt="_submitButton_1v7ld_85",ot="_submitButton2_1v7ld_115",y={commentWriteContainer:et,form:nt,inputField:st,submitButton:rt,submitButton2:ot};function at({id:t,content:e,onClose:n}){const[r,o]=f.useState(e);f.useEffect(()=>{o(e)},[e]);const i=x(),c=C({mutationFn:a=>K(a),onSuccess:()=>{i.invalidateQueries(),n()},onError:a=>{console.error("댓글 수정 실패:",a)}}),u=a=>{a.preventDefault(),c.mutate({id:t,content:r})};return s.jsx("div",{className:y.commentWriteContainer,children:s.jsxs("form",{onSubmit:u,className:y.form,children:[s.jsx("div",{className:y.inputField,children:s.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"댓글 수정 내용을 입력하세요"})}),s.jsx("button",{type:"submit",className:y.submitButton,children:"저장"}),s.jsx("button",{type:"button",className:y.submitButton2,onClick:n,children:"취소"})]})})}function it(){return s.jsx("div",{style:{border:"1px solid lightgrey"}})}const ct=t=>{if(!t)return"";const e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),o=t.getHours(),i=t.getMinutes().toString().padStart(2,"0"),c=o<12?"오전":"오후",u=o%12||12,a=" ".repeat(2);return`${e}. ${n}. ${r}${a}${c} ${u}:${i}`},d={"delete-button":"_delete-button_s02t9_1","item-container":"_item-container_s02t9_17","item-content":"_item-content_s02t9_25","comment-user":"_comment-user_s02t9_41","comment-profile-image":"_comment-profile-image_s02t9_51","comment-id":"_comment-id_s02t9_71","comment-content":"_comment-content_s02t9_87","comment-reply":"_comment-reply_s02t9_97","comment-reply2":"_comment-reply2_s02t9_103","comment-footer":"_comment-footer_s02t9_119"},lt="_boardContainer_t30y2_1",mt="_boardOverlay_t30y2_9",dt="_boardModalContent_t30y2_33",ut="_commentContainer_t30y2_69",_t="_commentOverlay_t30y2_77",ft="_commentModalContent_t30y2_95",ht="_modalBody_t30y2_127",yt="_profile_t30y2_157",pt="_semester_t30y2_189",bt="_name_t30y2_199",vt="_hanmadi_t30y2_221",gt="_GitHubLink_t30y2_249",jt="_line_t30y2_265",xt="_modalContent_t30y2_279",m={boardContainer:lt,boardOverlay:mt,boardModalContent:dt,commentContainer:ut,commentOverlay:_t,commentModalContent:ft,modalBody:ht,"modal-body":"_modal-body_t30y2_135","first-body":"_first-body_t30y2_147",profile:yt,"user-info":"_user-info_t30y2_173",semester:pt,name:bt,"student-number":"_student-number_t30y2_211",hanmadi:vt,"extra-info":"_extra-info_t30y2_235",GitHubLink:gt,line:jt,modalContent:xt},Ct="https://lkyoung-bucket.s3.ap-northeast-2.amazonaws.com/user/88778c10-2e63-49c4-bfd9-46c1c79e191d",Dt=({closeModal:t,comment:e})=>{const n="https://github.com/"+e.resUserDetailDto.githubId;return s.jsx("div",{className:m.commentContainer,children:s.jsxs(U,{className:m.commentModalContent,overlayClassName:m.commentOverlay,isOpen:!0,onRequestClose:t,children:[s.jsxs("div",{className:m["modal-body"],children:[s.jsxs("div",{className:m["first-body"],children:[s.jsx("img",{src:e.resUserDetailDto.imgUrl?e.resUserDetailDto.imgUrl:Ct,className:m.profile}),s.jsxs("div",{className:m["user-info"],children:[s.jsxs("div",{className:m.semester,children:["CRA ",e.resUserDetailDto.term]}),s.jsx("div",{className:m.name,children:e.resUserDetailDto.name}),s.jsx("div",{className:m["student-number"],children:e.resUserDetailDto.studentId})]})]}),s.jsx("div",{className:m.hanmadi,children:" 나의 한마디를 입력하세요. "})]}),s.jsxs("div",{className:m["extra-info"],children:[s.jsxs("div",{children:["GitHub 프로필 |"," ",s.jsx(z,{to:n,className:m.GitHubLink,target:"_blank",children:e.resUserDetailDto.githubId})]}),s.jsxs("div",{children:[" 이메일 | ",e.resUserDetailDto.email]}),s.jsx("div",{className:m.line})]})]})})},Nt="https://lkyoung-bucket.s3.ap-northeast-2.amazonaws.com/user/88778c10-2e63-49c4-bfd9-46c1c79e191d";function B({comment:t,isRoot:e,commentsQuery:n}){const[r,o]=f.useState(!1),[i,c]=f.useState(!1),[u,a]=f.useState(!1),[N,b]=f.useState(!1),O=()=>b(!0),l=()=>b(!1);return s.jsxs("div",{children:[s.jsx(it,{}),s.jsx(w,{space:20}),s.jsxs("div",{className:d["item-container"],children:[s.jsx(S,{space:14}),!e&&s.jsx(S,{space:46}),i?s.jsx(at,{id:t.id,content:t.content,onClose:()=>c(!1)}):s.jsxs("div",{className:d["item-content"],children:[s.jsxs("div",{className:d["comment-user"],children:[s.jsx("img",{src:t.resUserDetailDto.imgUrl?t.resUserDetailDto.imgUrl:Nt,className:d["comment-profile-image"],onClick:O}),s.jsx("div",{className:d["comment-id"],children:t.resUserDetailDto.name}),N&&n&&s.jsx(Dt,{closeModal:l,comment:n})]}),s.jsx("div",{className:d["comment-content"],children:t.content}),s.jsxs("div",{className:d["comment-footer"],children:[s.jsx("div",{children:ct(t.createdAt)}),s.jsx("div",{onClick:()=>c(!0),className:d["delete-button"],children:"수정"}),e&&s.jsx("div",{onClick:()=>{o(_=>!_),a(_=>!_)},className:u?d["comment-reply2"]:d["comment-reply"],children:"답글 작성"}),s.jsx(tt,{id:t.id})]}),r&&s.jsx(X,{parentId:t.id})]})]}),s.jsx(w,{space:14})]})}function Wt({id:t}){const e=R({queryKey:p.comment.commentsById(t),queryFn:async()=>V(t)});let n;return e.isLoading?n=s.jsx("div",{className:"loading",children:"데이터를 불러오는 중입니다..."}):e.isError?n=s.jsx("div",{className:"error",children:"에러가 발생했습니다!"}):e.isSuccess&&(n=e.data.map(r=>s.jsxs("div",{children:[s.jsx(B,{comment:r,isRoot:!0,commentsQuery:e.data.find(o=>o.id===r.id)||null},r.id),r.commentList.map(o=>s.jsx(B,{comment:o,isRoot:!1,commentsQuery:o},o.id))]},r.id))),s.jsx("div",{children:n})}var F={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=h.createContext&&h.createContext(F),Ot=["attr","size","title"];function wt(t,e){if(t==null)return{};var n=St(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function St(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},g.apply(this,arguments)}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M(Object(n),!0).forEach(function(r){Bt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bt(t,e,n){return e=Et(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Et(t){var e=Mt(t,"string");return typeof e=="symbol"?e:e+""}function Mt(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function I(t){return t&&t.map((e,n)=>h.createElement(e.tag,j({key:n},e.attr),I(e.child)))}function D(t){return e=>h.createElement(Ft,g({attr:j({},t.attr)},e),I(t.child))}function Ft(t){var e=n=>{var{attr:r,size:o,title:i}=t,c=wt(t,Ot),u=o||n.size||"1em",a;return n.className&&(a=n.className),t.className&&(a=(a?a+" ":"")+t.className),h.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:a,style:j(j({color:t.color||n.color},n.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&h.createElement("title",null,i),t.children)};return E!==void 0?h.createElement(E.Consumer,null,n=>e(n)):e(F)}function It(t){return D({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(t)}const Pt={"delete-button":"_delete-button_1mkha_1"};function qt({id:t,category:e}){const n=x(),r=$(),o=C({mutationFn:c=>G(c),onSuccess:async()=>{alert("게시글 삭제 성공"),await r(-1),n.invalidateQueries({queryKey:p.board.boardsCount(e)}),n.refetchQueries({queryKey:p.board.boardsCount(e)})},onError:c=>{console.error("게시글 삭제 실패:",c),alert("게시글 삭제 실패")}}),i=()=>{window.confirm("정말로 삭제하시겠습니까?")&&o.mutate(t)};return s.jsx("div",{className:Pt["delete-button"],onClick:i,children:s.jsx(It,{size:24})})}function Qt(t){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"},child:[]}]})(t)}function Kt(t){return D({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"},child:[]}]})(t)}function Vt(t){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"},child:[]},{tag:"path",attr:{d:"M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"},child:[]}]})(t)}const Gt=async t=>{try{return(await k.post(`/board/view/${t}`)).data}catch(e){throw console.log(e),e}},At=async(t,e)=>{try{return console.log("요청 URL:",`/board/like/${t}`,"params:",{isLike:e}),(await H.post(`/board/like/${t}`,null,{params:{isLike:e}})).data}catch(n){throw console.error("좋아요 요청 실패:",n),n}};export{qt as B,Wt as C,it as D,Kt as F,D as G,Vt as I,Qt as a,X as b,Gt as c,ct as d,At as e,m as s};
