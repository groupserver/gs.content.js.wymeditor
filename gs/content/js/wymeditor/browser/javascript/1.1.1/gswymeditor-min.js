'use strict';jQuery.noConflict();
function gs_content_js_wymeditor_init(){var a,b,c='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html dir="'+WYMeditor.DIRECTION+'"><head><title>'+WYMeditor.DIALOG_TITLE+'</title><style type="text/css">body {font:16px/20px sans-serif;}label {display:block;}input {display:block;margin:0.625em 0 1.25em 0.625em;}.row-indent input{display:inline;margin:0 0.625em 0 0;}fieldset {border:none;}.row{padding-left:1.25em;}</style></head>'+WYMeditor.DIALOG_BODY+
"</html>";jQuery("head").append('<link rel="stylesheet" type="text/css"href="/++resource++wymeditor-1.1.1/skins/gs/skin.css"/>');a=jQuery("script.gs-content-js-wymeditor");b=a.data("text-element");a={updateSelector:a.data("submit"),basePath:"/++resource++wymeditor-1.1.1/",wymPath:"/++resource++wymeditor-1.1.1/jquery.wymeditor.js",iframeBasePath:"/++resource++wymeditor-1.1.1/skins/gs/iframe/",dialogFeatures:"menubar=no,toobar=no,width=440,height=330",dialogHtml:c,lang:"en",skin:"gs",classesItems:[{name:"dotted-inline-list",
title:"Inline list",expr:"ul"},{name:"alert",title:"Alert",expr:"p, ul, div"},{name:"small",title:"Small",expr:"*"}]};jQuery(b).wymeditor(a);rangy.init()}jQuery(window).load(function(){gsJsLoader.with_module(["/++resource++wymeditor-1.1.1/jquery.wymeditor.js","/++resource++wymeditor-1.1.1/skins/gs/skin.js"],gs_content_js_wymeditor_init)});
