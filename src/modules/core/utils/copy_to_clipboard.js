import store from "../../../store";
export default function (str) {
  const el = document.createElement("input");
  el.style.height = "0px";
  el.style.width = "1px"
  document.body.appendChild(el);
  el.value = str;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  store.dispatch("show_notification", {
    message: "Query copied to clipboard!",
  });
}
