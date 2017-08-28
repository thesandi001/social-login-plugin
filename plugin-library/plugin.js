// document.write('<link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet"><link rel="stylesheet" type="text/css" href="plugin-library/style.css"><div id="social-login-plugin-holder" class="plugin-holder plugin-holder-closed"><div id="social-login-expand" class="show padding-widget clickable icon-style" onclick="showView()">&laquo;</div><div id="social-login-view" class="hide padding-widget font-size-xl social-login-view"><div class="header"><br><span class="font-size-xxl bold">Personalize your dashboard</span><br><br><span class="font-size-m font-color-grey">Personalize means the advisors will exactly cater to your requirements and needs</span><br><br><br><img src="plugin-library/social.png" width="250"><br><span class="font-size-xs">or <span class="clickable font-color-red">Login with Email</span></span><br><br><br><div class="font-size-xs font-color-light-grey italic">We take your privacy very seriously. We will never post on your behalf. Nor will we share your personal information without your consent.</div><div class="font-size-xs font-color-grey cancel-view clickable" onclick="hideView()">close</div></div></div></div>');

function search() {
	console.log(1);
	var el = document.getElementById('search_field');	
	q = el.value;

	var stock_widget = document.getElementById('stock-widget');
	stock_widget.src = 'https://www.smallcase.com/stock-hover/?timestamp=1502710573000&hash=1cc59c52611dbad29e05bff647ff663c2d5fba9782c9375265b14651b4fa8471&broker=kite&ticker=' + q;
	if(q.length) stock_widget.classList.remove("hide");
	else stock_widget.classList.add("hide");
}

// function showView() {	
	
// 	var body = document.getElementsByTagName("BODY")[0];
// 	body.classList.add("blur");

// 	var el = document.getElementById('social-login-plugin-holder');
// 	el.classList.remove("plugin-holder-closed");	

// 	var el1 = document.getElementById('social-login-expand');
// 	el1.classList.remove("show");
// 	el1.classList.add("hide");

// 	var el2 = document.getElementById('social-login-view');
// 	el2.classList.remove("hide");
// 	el2.classList.add("show");

// }

// function hideView() {

// 	var body = document.getElementsByTagName("BODY")[0];
// 	body.classList.remove("blur");

// 	var el = document.getElementById('social-login-plugin-holder');
// 	el.classList.add("plugin-holder-closed");	
	
// 	var el1 = document.getElementById('social-login-expand');
// 	el1.classList.remove("hide");
// 	el1.classList.add("show");

// 	var el2 = document.getElementById('social-login-view');
// 	el2.classList.remove("show");
// 	el2.classList.add("hide");

// }

// function setAppKey(app_key) {	
// 	console.log(app_key);
// 	console.log(window.location.href);
// }