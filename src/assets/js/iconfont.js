(function (window) { var svgSprite = '<svg><symbol id="icon-logo" viewBox="0 0 1024 1024"><path d="M517.741259 676.457586c-67.105351 3.637854-126.141932-36.759205-151.879106-91.833545-28.284183-60.517305-22.948665-120.268154 17.433044-173.59264 38.496779-50.837852 92.007507-71.033823 155.378813-63.46545 31.457456 3.75758 59.190077 16.672728 83.367733 37.193087 13.117762 11.140735 12.825097 16.119119-1.718131 24.465205-12.636808 7.255241-25.337061 14.395872-37.908378 21.765723-34.756595 20.361747-69.728084 40.370453-104.07945 61.402465-18.395976 11.256368-22.074761 29.214369-11.792581 47.845705 11.123338 20.149922 32.68747 24.840758 55.534827 11.631922 67.890226-39.261189 135.553279-78.912257 203.657376-117.804033 11.268648-6.433526 12.506848-12.979616 7.499811-23.883967-17.61724-38.361703-43.562145-69.872371-78.328973-93.444229-76.822666-52.086285-158.791539-60.431348-242.733347-20.86419-83.740216 39.473013-129.229247 108.788705-136.791479 200.144366-6.265704 75.734892 22.550599 139.857305 77.215616 192.627159 76.216869 73.571622 203.592908 85.148285 291.139823 26.002211 22.796192-15.395642 22.796192-15.395642 8.662287-38.911218-15.282055-25.418926-30.446429-30.143531-56.975643-17.425881C570.320779 670.340261 544.299125 678.157297 517.741259 676.457586z"  ></path><path d="M748.179582 568.833403c-1.26276-18.193361-11.128455-32.971949-19.642362-48.208978-2.7793-4.976338-7.238868-3.061732-11.218506-0.791016-15.604396 8.933463-31.160697 17.943674-46.883797 26.660196-6.683213 3.705392-7.865131 8.192589-4.001127 14.705933 8.954953 15.093766 17.844413 30.227442 26.429952 45.528939 3.730974 6.647397 8.205892 8.16803 14.644535 4.097318 9.402137-5.942339 19.108197-11.453866 28.184923-17.853623C743.767086 587.272357 748.511133 579.263963 748.179582 568.833403z"  ></path></symbol></svg>'; var script = function () { var scripts = document.getElementsByTagName("script"); return scripts[scripts.length - 1] }(); var shouldInjectCss = script.getAttribute("data-injectcss"); var ready = function (fn) { if (document.addEventListener) { if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else { var loadFn = function () { document.removeEventListener("DOMContentLoaded", loadFn, false); fn() }; document.addEventListener("DOMContentLoaded", loadFn, false) } } else if (document.attachEvent) { IEContentLoaded(window, fn) } function IEContentLoaded(w, fn) { var d = w.document, done = false, init = function () { if (!done) { done = true; fn() } }; var polling = function () { try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50); return } init() }; polling(); d.onreadystatechange = function () { if (d.readyState == "complete") { d.onreadystatechange = null; init() } } } }; var before = function (el, target) { target.parentNode.insertBefore(el, target) }; var prepend = function (el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } }; function appendSvg() { var div, svg; div = document.createElement("div"); div.innerHTML = svgSprite; svgSprite = null; svg = div.getElementsByTagName("svg")[0]; if (svg) { svg.setAttribute("aria-hidden", "true"); svg.style.position = "absolute"; svg.style.width = 0; svg.style.height = 0; svg.style.overflow = "hidden"; prepend(svg, document.body) } } if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } } ready(appendSvg) })(window)