// // Nodokļu gŗamatiņas stāvoklis un IIN nodokļu likme
function taxBookSubmitted(){
	var status = document.querySelector(".taxBook").value;
	var highRate = "23.00";
	var lowRate = "20.00";

	// if(status == "20"){
	// 	document.querySelector(".incomeRate").value = lowRate;
	// 	document.getElementById("neapl").style.visibility="visible";
	// } else if(status == "23"){
	// 	document.querySelector(".incomeRate").value = highRate;
	// 	document.getElementById("neapl").style.visibility="hidden";
	// }

	document.querySelector(".incomeRate").value = (status == 20) ? lowRate : highRate;
	document.getElementById("neapl").style.visibility = (status == 20) ? "visible" : "hidden";
};