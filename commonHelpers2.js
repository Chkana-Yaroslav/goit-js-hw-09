import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".feedback-form"),s=localStorage.getItem("feedback-form-state");if(s){const{email:t,message:a}=JSON.parse(s);e.elements.email.value=t,e.elements.message.value=a}e.addEventListener("input",function(t){if(t.target.name==="email"||t.target.name==="message"){const a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))}}),e.addEventListener("submit",function(t){t.preventDefault();const a=e.elements.email.value.trim(),m=e.elements.message.value.trim();a&&m?(console.log({email:a,message:m}),e.reset(),localStorage.removeItem("feedback-form-state")):console.log("Please fill in all required fields before submitting.")})});
//# sourceMappingURL=commonHelpers2.js.map