import{i as r}from"./assets/icon-error-11852b61.js";/* empty css                      */import{i as s}from"./assets/vendor-f20d2ef6.js";const l="/goit-js-hw-10/assets/icon-success-897e83b5.svg",c={radioFields:document.querySelectorAll(".radio-field"),stateFieldset:document.querySelector("fieldset"),form:document.querySelector(".form")},{radioFields:u,stateFieldset:m,form:d}=c;u.forEach(t=>{t.addEventListener("change",()=>{m.classList.add("radio-selected")})});function o(t,e){switch(t){case"error-message":s.error({title:"Error",message:`Rejected promise in ${e}ms`,backgroundColor:"#EF4040",iconUrl:r,timeout:5e3,closeOnEscape:!0,transitionIn:"fadeInLeft",transitionOut:"fadeOutUp",titleSize:"16",titleLineHeight:"24",messageSize:"16",messageLineHeight:"24",titleColor:"#FFF",messageColor:"#FFF",position:"topRight",class:"custom-font"});break;case"success-message":s.success({title:"OK",message:`Fulfilled promise in ${e}ms`,backgroundColor:"#59A10D",progressBarColor:"#B5EA7C",iconUrl:l,timeout:5e3,closeOnEscape:!0,transitionIn:"fadeInLeft",transitionOut:"fadeOutUp",titleSize:"16",titleLineHeight:"24",messageSize:"16",messageLineHeight:"24",titleColor:"#FFF",messageColor:"#FFF",position:"topRight",class:"custom-font"});break;default:s.error({title:"Error",message:"Illegal operation",backgroundColor:"#EF4040",iconUrl:r,timeout:5e3,closeOnEscape:!0,transitionIn:"fadeInLeft",transitionOut:"fadeOutUp",titleSize:"16",titleLineHeight:"24",messageSize:"16",messageLineHeight:"24",titleColor:"#FFF",messageColor:"#FFF",position:"topRight",class:"custom-font"})}}d.addEventListener("submit",t=>{g(t).then(e=>o(e.type,e.delay)).catch(e=>o(e.type,e.delay)),t.target.reset()});function g(t){t.preventDefault();const e=+t.target.elements.delay.value,i=t.target.elements.state.value;return new Promise((a,n)=>{if(isNaN(e))return o("error");setTimeout(()=>{i==="fulfilled"?a({type:"success-message",delay:e}):i==="rejected"&&n({type:"error-message",delay:e})},e)})}
//# sourceMappingURL=commonHelpers2.js.map
