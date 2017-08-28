// var btn = document.createElement("BUTTON")
// var t = document.createTextNode("CLICK ME");
// btn.appendChild(t);
// document.body.appendChild(btn);
// document.body.appendChild('<iframe id="stock-widget" class="stock-widget hide" src="https://www.smallcase.com/stock-hover/?timestamp=1502969697000&hash=d1dd21a8db14d378417f4d2b6e738221424dd5393ff90f500b0b9aef7300a319&broker=kite&ticker=LT"></iframe>');
// 
// document.body.innerHTML = 'LT <a onclick="if(document.getElementById(&quot;lt&quot;).style.display == &quot;block&quot;) document.getElementById(&quot;lt&quot;).style.display = &quot;none&quot;; else document.getElementById(&quot;lt&quot;).style.display = &quot;block&quot;;">hover</a>' + '<iframe id="lt" width="420" height="288" style="border:solid thin #dfdfdf; display:none;" src="https://www.smallcase.com/stock-hover/?timestamp=1502969697000&hash=d1dd21a8db14d378417f4d2b6e738221424dd5393ff90f500b0b9aef7300a319&broker=kite&ticker=LT"></iframe>';

// document.body.innerHTML = '<script>function mouseOver () {console.log(1);document.getElementById("tooltip").style.display = "block";}function mouseOut () {console.log(0);document.getElementById("tooltip").style.display = "none";}</script><style> #hoverMe { padding: 30px; border: 2px solid black; } #tooltip { border: 2px solid red; display: none; } </style><div id="hoverMe" onmouseover="mouseOver()" onmouseout="mouseOut()">Hover over here</div><iframe id="tooltip" width="420" height="288" style="border:solid thin #dfdfdf" src="https://www.smallcase.com/stock-hover/?timestamp=1502969697000&hash=d1dd21a8db14d378417f4d2b6e738221424dd5393ff90f500b0b9aef7300a319&broker=kite&ticker=LT"></iframe>';

// onmouseover="onmouseover()" onmouseout="onmouseout()"
// document.getElementById('hoverMe').onkeyup = function() {
// 	search();
// };

function clicked () {
	console.log(1);
	// document.getElementById(&quot;tooltip&quot;).style.display = &quot;block&quot;
	document.getElementById('tooltip').style.display = 'block';
}