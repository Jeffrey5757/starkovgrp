export default function serializeObject(object) {
	let s = "";
   for (let key in object) {
	   if (s != "") s += "&";

	   s += (key + "=" + encodeURIComponent(object[key]));
   }
   return s;
}