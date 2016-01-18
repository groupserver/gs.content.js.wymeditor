jQuery.noConflict();function gs_content_js_wymeditor_init(){var e=null,c=null,b=null,d=null,a=null;
e=jQuery("script.gs-content-js-wymeditor");c=e.attr("data-text-element");b=e.attr("data-submit");
a=[{name:"dotted-inline-list",title:"Inline list",expr:"ul"},{name:"alert",title:"Alert",expr:"p, ul, div"},{name:"small",title:"Small",expr:"*"}];
d={updateSelector:b,basePath:"/++resource++wymeditor-1.0.0b5/",wymPath:"/++resource++wymeditor-1.0.0b5/jquery.wymeditor.js",jQueryPath:"/++resource++jquery-1.9.1.min.js",iframeBasePath:"/++resource++wymeditor-1.0.0b5/skins/gs/iframe/",dialogFeatures:"menubar=no,toobar=no,width=390,height=330",lang:"en",skin:"gs",classesItems:a};
jQuery(c).wymeditor(d)}jQuery(window).load(function(){var b=null,a=null;b=("https:"==document.location.protocol?"https://":"http://")+"code.jquery.com/jquery-migrate-1.2.1.min.js";
a=[b,"/++resource++wymeditor-1.0.0b5/jquery.wymeditor.js"];gsJsLoader.with_module(a,gs_content_js_wymeditor_init)
});