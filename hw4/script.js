document.querySelector(".input").oninput = () => {
   let text = document.querySelector(".input").value;
   document.querySelector(".out").innerHTML = text.replace(/(^')|(\b'(\s|\W))|((\s|\W)'\b)|('$)/g, '"');
}
document.querySelector("button").onclick = () => {
   regExpF(".name", /^[а-яёa-z]+$/iu, ".wrap1");
   regExpF(".phone", /^\+?[\d]{1}\(?[\d]{3}\)?[\d]{3}-?[\d]{4}$/, ".wrap2")
   regExpF(".email", /^([a-z0-9_\.-]+)@([a-z0-9]+)\.([a-z]{2,6})$/i, ".wrap3");
}

function regExpF(className, regExp, wrap) {
   document.querySelector(className).classList.remove("error");
   document.querySelector(wrap).classList.remove("wrapOpen");
   if (!regExp.test(document.querySelector(className).value)) {
      document.querySelector(className).classList.add("error");
      document.querySelector(wrap).classList.add("wrapOpen");
   }
}