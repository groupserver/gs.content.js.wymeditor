if(typeof(WYMeditor)==="undefined"){WYMeditor={}}(function(){if(typeof window.console==="undefined"&&typeof console==="undefined"){var c=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"],b=function(){},a;
WYMeditor.console={};for(a=0;a<c.length;a+=1){WYMeditor.console[c[a]]=b}}else{if(console){WYMeditor.console=console
}else{if(window.console.firebug){WYMeditor.console=window.console}else{if(window.console){WYMeditor.console=window.console
}}}}}());jQuery.extend(WYMeditor,{VERSION:"1.0.0b5",INSTANCES:[],STRINGS:[],SKINS:[],NAME:"name",INDEX:"{Wym_Index}",WYM_INDEX:"wym_index",BASE_PATH:"{Wym_Base_Path}",CSS_PATH:"{Wym_Css_Path}",WYM_PATH:"{Wym_Wym_Path}",SKINS_DEFAULT_PATH:"skins/",SKINS_DEFAULT_CSS:"skin.css",SKINS_DEFAULT_JS:"skin.js",LANG_DEFAULT_PATH:"lang/",IFRAME_BASE_PATH:"{Wym_Iframe_Base_Path}",IFRAME_DEFAULT:"iframe/default/",JQUERY_PATH:"{Wym_Jquery_Path}",DIRECTION:"{Wym_Direction}",LOGO:"{Wym_Logo}",TOOLS:"{Wym_Tools}",TOOLS_ITEMS:"{Wym_Tools_Items}",TOOL_NAME:"{Wym_Tool_Name}",TOOL_TITLE:"{Wym_Tool_Title}",TOOL_CLASS:"{Wym_Tool_Class}",CLASSES:"{Wym_Classes}",CLASSES_ITEMS:"{Wym_Classes_Items}",CLASS_NAME:"{Wym_Class_Name}",CLASS_TITLE:"{Wym_Class_Title}",CONTAINERS:"{Wym_Containers}",CONTAINERS_ITEMS:"{Wym_Containers_Items}",CONTAINER_NAME:"{Wym_Container_Name}",CONTAINER_TITLE:"{Wym_Containers_Title}",CONTAINER_CLASS:"{Wym_Container_Class}",HTML:"{Wym_Html}",IFRAME:"{Wym_Iframe}",STATUS:"{Wym_Status}",DIALOG_TITLE:"{Wym_Dialog_Title}",DIALOG_BODY:"{Wym_Dialog_Body}",NEWLINE:"\n",STRING:"string",BODY:"body",DIV:"div",P:"p",H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",PRE:"pre",BLOCKQUOTE:"blockquote",A:"a",BR:"br",IMG:"img",TABLE:"table",TR:"tr",TD:"td",TH:"th",UL:"ul",OL:"ol",LI:"li",CLASS:"class",HREF:"href",SRC:"src",TITLE:"title",REL:"rel",ALT:"alt",DIALOG_LINK:"Link",DIALOG_IMAGE:"Image",DIALOG_TABLE:"Table",DIALOG_PASTE:"Paste_From_Word",BOLD:"Bold",ITALIC:"Italic",CREATE_LINK:"CreateLink",INSERT_IMAGE:"InsertImage",INSERT_TABLE:"InsertTable",INSERT_HTML:"InsertHTML",PASTE:"Paste",INDENT:"Indent",OUTDENT:"Outdent",TOGGLE_HTML:"ToggleHtml",FORMAT_BLOCK:"FormatBlock",PREVIEW:"Preview",UNLINK:"Unlink",INSERT_UNORDEREDLIST:"InsertUnorderedList",INSERT_ORDEREDLIST:"InsertOrderedList",MAIN_CONTAINERS:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote"],FORBIDDEN_MAIN_CONTAINERS:["strong","b","em","i","sub","sup","a","span"],BLOCKS:["address","blockquote","div","dl","fieldset","form","h1","h2","h3","h4","h5","h6","hr","noscript","ol","p","pre","table","ul","dd","dt","li","tbody","td","tfoot","th","thead","tr"],BLOCKING_ELEMENTS:["table","blockquote","pre"],NON_BLOCKING_ELEMENTS:["p","div","h1","h2","h3","h4","h5","h6"],LIST_TYPE_ELEMENTS:["ul","ol"],HEADING_ELEMENTS:["h1","h2","h3","h4","h5","h6"],POTENTIAL_LIST_ELEMENTS:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote","td"],POTENTIAL_TABLE_INSERT_ELEMENTS:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote","li"],INLINE_TABLE_INSERTION_ELEMENTS:["li"],SELECTABLE_TABLE_ELEMENTS:["td","th","caption"],BLOCKING_ELEMENT_SPACER_CLASS:"wym-blocking-element-spacer",EDITOR_ONLY_CLASS:"wym-editor-only",CLASSES_REMOVED_BY_PARSER:["apple-style-span"],KEY:{BACKSPACE:8,TAB:9,ENTER:13,CTRL:17,END:35,HOME:36,CURSOR:[37,38,39,40],LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,B:66,I:73,R:82,COMMAND:224},POTENTIAL_BLOCK_ELEMENT_CREATION_KEYS:[8,13,37,38,39,40,46],NODE:{ELEMENT:1,ATTRIBUTE:2,TEXT:3},editor:function(b,a){this._index=WYMeditor.INSTANCES.push(this)-1;
this._element=b;this._options=a;if(!this._options.html){this._options.html=jQuery(b).val()
}this._options.wymPath=this._options.wymPath||WYMeditor.computeWymPath();this._options.basePath=this._options.basePath||WYMeditor.computeBasePath(this._options.wymPath);
this._options.jQueryPath=this._options.jQueryPath||WYMeditor.computeJqueryPath();
this._options.skinPath=this._options.skinPath||this._options.basePath+WYMeditor.SKINS_DEFAULT_PATH+this._options.skin+"/";
this._options.langPath=this._options.langPath||this._options.basePath+WYMeditor.LANG_DEFAULT_PATH;
this._options.iframeBasePath=this._options.iframeBasePath||this._options.basePath+WYMeditor.IFRAME_DEFAULT;
this.init()}});jQuery.fn.wymeditor=function(a){a=jQuery.extend({html:"",basePath:false,skinPath:false,wymPath:false,iframeBasePath:false,jQueryPath:false,styles:false,stylesheet:false,skin:"default",initSkin:true,loadSkin:true,lang:"en",direction:"ltr",customCommands:[],structureRules:{defaultRootContainer:"p"},boxHtml:String()+"<div class='wym_box'><div class='wym_area_top'>"+WYMeditor.TOOLS+"</div><div class='wym_area_left'></div><div class='wym_area_right'>"+WYMeditor.CONTAINERS+WYMeditor.CLASSES+"</div><div class='wym_area_main'>"+WYMeditor.HTML+WYMeditor.IFRAME+WYMeditor.STATUS+"</div><div class='wym_area_bottom'>"+WYMeditor.LOGO+"</div></div>",logoHtml:String()+'<a class="wym_wymeditor_link" href="http://www.wymeditor.org/">WYMeditor</a>',iframeHtml:String()+'<div class="wym_iframe wym_section"><iframe src="'+WYMeditor.IFRAME_BASE_PATH+'wymiframe.html" onload="this.contentWindow.parent.WYMeditor.INSTANCES['+WYMeditor.INDEX+'].initIframe(this)"></iframe></div>',editorStyles:[],toolsHtml:String()+'<div class="wym_tools wym_section"><h2>{Tools}</h2><ul>'+WYMeditor.TOOLS_ITEMS+"</ul></div>",toolsItemHtml:String()+'<li class="'+WYMeditor.TOOL_CLASS+'"><a href="#" name="'+WYMeditor.TOOL_NAME+'" title="'+WYMeditor.TOOL_TITLE+'">'+WYMeditor.TOOL_TITLE+"</a></li>",toolsItems:[{name:"Bold",title:"Strong",css:"wym_tools_strong"},{name:"Italic",title:"Emphasis",css:"wym_tools_emphasis"},{name:"Superscript",title:"Superscript",css:"wym_tools_superscript"},{name:"Subscript",title:"Subscript",css:"wym_tools_subscript"},{name:"InsertOrderedList",title:"Ordered_List",css:"wym_tools_ordered_list"},{name:"InsertUnorderedList",title:"Unordered_List",css:"wym_tools_unordered_list"},{name:"Indent",title:"Indent",css:"wym_tools_indent"},{name:"Outdent",title:"Outdent",css:"wym_tools_outdent"},{name:"Undo",title:"Undo",css:"wym_tools_undo"},{name:"Redo",title:"Redo",css:"wym_tools_redo"},{name:"CreateLink",title:"Link",css:"wym_tools_link"},{name:"Unlink",title:"Unlink",css:"wym_tools_unlink"},{name:"InsertImage",title:"Image",css:"wym_tools_image"},{name:"InsertTable",title:"Table",css:"wym_tools_table"},{name:"Paste",title:"Paste_From_Word",css:"wym_tools_paste"},{name:"ToggleHtml",title:"HTML",css:"wym_tools_html"},{name:"Preview",title:"Preview",css:"wym_tools_preview"}],containersHtml:String()+'<div class="wym_containers wym_section"><h2>{Containers}</h2><ul>'+WYMeditor.CONTAINERS_ITEMS+"</ul></div>",containersItemHtml:String()+'<li class="'+WYMeditor.CONTAINER_CLASS+'"><a href="#" name="'+WYMeditor.CONTAINER_NAME+'">'+WYMeditor.CONTAINER_TITLE+"</a></li>",containersItems:[{name:"P",title:"Paragraph",css:"wym_containers_p"},{name:"H1",title:"Heading_1",css:"wym_containers_h1"},{name:"H2",title:"Heading_2",css:"wym_containers_h2"},{name:"H3",title:"Heading_3",css:"wym_containers_h3"},{name:"H4",title:"Heading_4",css:"wym_containers_h4"},{name:"H5",title:"Heading_5",css:"wym_containers_h5"},{name:"H6",title:"Heading_6",css:"wym_containers_h6"},{name:"PRE",title:"Preformatted",css:"wym_containers_pre"},{name:"BLOCKQUOTE",title:"Blockquote",css:"wym_containers_blockquote"},{name:"TH",title:"Table_Header",css:"wym_containers_th"}],classesHtml:String()+'<div class="wym_classes wym_section"><h2>{Classes}</h2><ul>'+WYMeditor.CLASSES_ITEMS+"</ul></div>",classesItemHtml:String()+'<li class="wym_classes_'+WYMeditor.CLASS_NAME+'"><a href="#" name="'+WYMeditor.CLASS_NAME+'">'+WYMeditor.CLASS_TITLE+"</a></li>",classesItems:[],statusHtml:String()+'<div class="wym_status wym_section"><h2>{Status}</h2></div>',htmlHtml:String()+'<div class="wym_html wym_section"><h2>{Source_Code}</h2><textarea class="wym_html_val"></textarea></div>',boxSelector:".wym_box",toolsSelector:".wym_tools",toolsListSelector:" ul",containersSelector:".wym_containers",classesSelector:".wym_classes",htmlSelector:".wym_html",iframeSelector:".wym_iframe iframe",iframeBodySelector:".wym_iframe",statusSelector:".wym_status",toolSelector:".wym_tools a",containerSelector:".wym_containers a",classSelector:".wym_classes a",htmlValSelector:".wym_html_val",hrefSelector:".wym_href",srcSelector:".wym_src",titleSelector:".wym_title",relSelector:".wym_rel",altSelector:".wym_alt",textSelector:".wym_text",rowsSelector:".wym_rows",colsSelector:".wym_cols",captionSelector:".wym_caption",summarySelector:".wym_summary",submitSelector:"form",cancelSelector:".wym_cancel",previewSelector:"",dialogTypeSelector:".wym_dialog_type",dialogLinkSelector:".wym_dialog_link",dialogImageSelector:".wym_dialog_image",dialogTableSelector:".wym_dialog_table",dialogPasteSelector:".wym_dialog_paste",dialogPreviewSelector:".wym_dialog_preview",updateSelector:".wymupdate",updateEvent:"click",dialogFeatures:"menubar=no,titlebar=no,toolbar=no,resizable=no,width=560,height=300,top=0,left=0",dialogFeaturesPreview:"menubar=no,titlebar=no,toolbar=no,resizable=no,scrollbars=yes,width=560,height=300,top=0,left=0",dialogHtml:String()+'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html dir="'+WYMeditor.DIRECTION+'"><head><link rel="stylesheet" type="text/css" media="screen" href="'+WYMeditor.CSS_PATH+'" /><title>'+WYMeditor.DIALOG_TITLE+'</title><script type="text/javascript" src="'+WYMeditor.JQUERY_PATH+'"><\/script><script type="text/javascript" src="'+WYMeditor.WYM_PATH+'"><\/script></head>'+WYMeditor.DIALOG_BODY+"</html>",dialogLinkHtml:String()+'<body class="wym_dialog wym_dialog_link"  onload="WYMeditor.INIT_DIALOG('+WYMeditor.INDEX+')"><form><fieldset><input type="hidden" class="wym_dialog_type" value="'+WYMeditor.DIALOG_LINK+'" /><legend>{Link}</legend><div class="row"><label>{URL}</label><input type="text" class="wym_href" value="" size="40" autofocus="autofocus" /></div><div class="row"><label>{Title}</label><input type="text" class="wym_title" value="" size="40" /></div><div class="row"><label>{Relationship}</label><input type="text" class="wym_rel" value="" size="40" /></div><div class="row row-indent"><input class="wym_submit" type="submit" value="{Submit}" /><input class="wym_cancel" type="button" value="{Cancel}" /></div></fieldset></form></body>',dialogImageHtml:String()+'<body class="wym_dialog wym_dialog_image" onload="WYMeditor.INIT_DIALOG('+WYMeditor.INDEX+')"><form><fieldset><input type="hidden" class="wym_dialog_type" value="'+WYMeditor.DIALOG_IMAGE+'" /><legend>{Image}</legend><div class="row"><label>{URL}</label><input type="text" class="wym_src" value="" size="40" autofocus="autofocus" /></div><div class="row"><label>{Alternative_Text}</label><input type="text" class="wym_alt" value="" size="40" /></div><div class="row"><label>{Title}</label><input type="text" class="wym_title" value="" size="40" /></div><div class="row row-indent"><input class="wym_submit" type="submit" value="{Submit}" /><input class="wym_cancel" type="button" value="{Cancel}" /></div></fieldset></form></body>',dialogTableHtml:String()+'<body class="wym_dialog wym_dialog_table" onload="WYMeditor.INIT_DIALOG('+WYMeditor.INDEX+')"><form><fieldset><input type="hidden" class="wym_dialog_type" value="'+WYMeditor.DIALOG_TABLE+'" /><legend>{Table}</legend><div class="row"><label>{Caption}</label><input type="text" class="wym_caption" value="" size="40" /></div><div class="row"><label>{Summary}</label><input type="text" class="wym_summary" value="" size="40" /></div><div class="row"><label>{Number_Of_Rows}</label><input type="text" class="wym_rows" value="3" size="3" /></div><div class="row"><label>{Number_Of_Cols}</label><input type="text" class="wym_cols" value="2" size="3" /></div><div class="row row-indent"><input class="wym_submit" type="submit" value="{Submit}" /><input class="wym_cancel" type="button" value="{Cancel}" /></div></fieldset></form></body>',dialogPasteHtml:String()+'<body class="wym_dialog wym_dialog_paste" onload="WYMeditor.INIT_DIALOG('+WYMeditor.INDEX+')"><form><input type="hidden" class="wym_dialog_type" value="'+WYMeditor.DIALOG_PASTE+'" /><fieldset><legend>{Paste_From_Word}</legend><div class="row"><textarea class="wym_text" rows="10" cols="50" autofocus="autofocus"></textarea></div><div class="row"><input class="wym_submit" type="submit" value="{Submit}" /><input class="wym_cancel" type="button" value="{Cancel}" /></div></fieldset></form></body>',dialogPreviewHtml:String()+'<body class="wym_dialog wym_dialog_preview" onload="WYMeditor.INIT_DIALOG('+WYMeditor.INDEX+')"></body>',dialogStyles:[],stringDelimiterLeft:"{",stringDelimiterRight:"}",preInit:null,preBind:null,postInit:null,preInitDialog:null,postInitDialog:null},a);
return this.each(function(){var b=new WYMeditor.editor(jQuery(this),a)})};jQuery.extend({wymeditors:function(a){return WYMeditor.INSTANCES[a]
}});WYMeditor.computeWymPath=function(){var a=jQuery(jQuery.grep(jQuery("script"),function(b){if(!b.src){return null
}return(b.src.match(/jquery\.wymeditor(\.pack|\.min|\.packed)?\.js(\?.*)?$/)||b.src.match(/\/core\.js(\?.*)?$/))
}));if(a.length>0){return a.attr("src")}WYMeditor.console.warn("Error determining wymPath. No base WYMeditor file located.");
WYMeditor.console.warn("Assuming wymPath to be the current URL");WYMeditor.console.warn("Please pass a correct wymPath option");
return""};WYMeditor.computeBasePath=function(b){var a=b.lastIndexOf("/");return b.substr(0,a+1)
};WYMeditor.computeJqueryPath=function(){return jQuery(jQuery.grep(jQuery("script"),function(a){return(a.src&&a.src.match(/jquery(-(.*)){0,1}(\.pack|\.min|\.packed)?\.js(\?.*)?$/))
})).attr("src")};WYMeditor.INIT_DIALOG=function(index){var wym=window.opener.WYMeditor.INSTANCES[index],doc=window.document,selected=wym.selected(),dialogType=jQuery(wym._options.dialogTypeSelector).val(),sStamp=wym.uniqueStamp(),styles,aCss,tableOnClick;
if(dialogType===WYMeditor.DIALOG_LINK){if(selected&&selected.tagName&&selected.tagName.toLowerCase!==WYMeditor.A){selected=jQuery(selected).parentsOrSelf(WYMeditor.A)
}if(!selected&&wym._selected_image){selected=jQuery(wym._selected_image).parentsOrSelf(WYMeditor.A)
}}if(jQuery.isFunction(wym._options.preInitDialog)){wym._options.preInitDialog(wym,window)
}styles=doc.styleSheets[0];aCss=eval(wym._options.dialogStyles);wym.addCssRules(doc,aCss);
if(selected){jQuery(wym._options.hrefSelector).val(jQuery(selected).attr(WYMeditor.HREF));
jQuery(wym._options.srcSelector).val(jQuery(selected).attr(WYMeditor.SRC));jQuery(wym._options.titleSelector).val(jQuery(selected).attr(WYMeditor.TITLE));
jQuery(wym._options.relSelector).val(jQuery(selected).attr(WYMeditor.REL));jQuery(wym._options.altSelector).val(jQuery(selected).attr(WYMeditor.ALT))
}if(wym._selected_image){jQuery(wym._options.dialogImageSelector+" "+wym._options.srcSelector).val(jQuery(wym._selected_image).attr(WYMeditor.SRC));
jQuery(wym._options.dialogImageSelector+" "+wym._options.titleSelector).val(jQuery(wym._selected_image).attr(WYMeditor.TITLE));
jQuery(wym._options.dialogImageSelector+" "+wym._options.altSelector).val(jQuery(wym._selected_image).attr(WYMeditor.ALT))
}jQuery(wym._options.dialogLinkSelector+" "+wym._options.submitSelector).submit(function(){var sUrl=jQuery(wym._options.hrefSelector).val(),link;
if(sUrl.length>0){if(selected[0]&&selected[0].tagName.toLowerCase()===WYMeditor.A){link=selected
}else{wym._exec(WYMeditor.CREATE_LINK,sStamp);link=jQuery("a[href="+sStamp+"]",wym._doc.body)
}link.attr(WYMeditor.HREF,sUrl);link.attr(WYMeditor.TITLE,jQuery(wym._options.titleSelector).val());
link.attr(WYMeditor.REL,jQuery(wym._options.relSelector).val())}window.close()});
jQuery(wym._options.dialogImageSelector+" "+wym._options.submitSelector).submit(function(){var sUrl=jQuery(wym._options.srcSelector).val(),$img;
if(sUrl.length>0){wym._exec(WYMeditor.INSERT_IMAGE,sStamp);$img=jQuery("img[src$="+sStamp+"]",wym._doc.body);
$img.attr(WYMeditor.SRC,sUrl);$img.attr(WYMeditor.TITLE,jQuery(wym._options.titleSelector).val());
$img.attr(WYMeditor.ALT,jQuery(wym._options.altSelector).val())}window.close()});
tableOnClick=WYMeditor.MAKE_TABLE_ONCLICK(wym);jQuery(wym._options.dialogTableSelector+" "+wym._options.submitSelector).submit(tableOnClick);
jQuery(wym._options.dialogPasteSelector+" "+wym._options.submitSelector).submit(function(){var sText=jQuery(wym._options.textSelector).val();
wym.paste(sText);window.close()});jQuery(wym._options.dialogPreviewSelector+" "+wym._options.previewSelector).html(wym.xhtml());
jQuery(wym._options.cancelSelector).mousedown(function(){window.close()});if(jQuery.isFunction(wym._options.postInitDialog)){wym._options.postInitDialog(wym,window)
}};WYMeditor.MAKE_TABLE_ONCLICK=function(b){var a=function(){var g=jQuery(b._options.rowsSelector).val(),e=jQuery(b._options.colsSelector).val(),c=jQuery(b._options.captionSelector).val(),d=jQuery(b._options.summarySelector).val(),f=b.insertTable(g,e,c,d);
window.close()};return a};jQuery.fn.isPhantomNode=function(){if(this[0].nodeType===3){return !(/[^\t\n\r ]/.test(this[0].data))
}return false};jQuery.fn.nextContentsUntil=function(b,c){var a=[],d,e=this.get(0);
b=b?b:"";c=c?c:"";if(!e){return jQuery()}e=e.nextSibling;while(e){if(!jQuery(e).is(b)){a.push(e);
e=e.nextSibling}else{break}}d=jQuery(a);if(c){return d.filter(c)}return d};jQuery.fn.nextAllContents=function(){return jQuery(this).nextContentsUntil("","")
};jQuery.fn.prevContentsUntil=function(b,c){var a=[],d,e=this.get(0);b=b?b:"";c=c?c:"";
if(!e){return jQuery()}e=e.previousSibling;while(e){if(!jQuery(e).is(b)){a.push(e);
e=e.previousSibling}else{break}}d=jQuery(a);if(c){return d.filter(c)}return d};jQuery.fn.prevAllContents=function(){return jQuery(this).prevContentsUntil("","")
};WYMeditor.isPhantomNode=function(a){if(a.nodeType===3){return !(/[^\t\n\r ]/.test(a.data))
}return false};WYMeditor.isPhantomString=function(a){return !(/[^\t\n\r ]/.test(a))
};jQuery.fn.parentsOrSelf=function(b){var a=this;if(a[0].nodeType===3){a=a.parents().slice(0,1)
}if(a.filter(b).size()===1){return a}else{return a.parents(b).slice(0,1)}};WYMeditor.changeNodeType=function(e,d){var c,b,a=e.attributes;
jQuery(e).wrapInner("<"+d+">");c=jQuery(e).children().get(0);for(b=0;b<a.length;b++){if(a[b].specified){c.setAttribute(a[b].nodeName,a[b].nodeValue)
}}jQuery(e).contents().unwrap();return c};WYMeditor.Helper={replaceAll:function(d,a,c){var b=new RegExp(a,"g");
return d.replace(b,c)},insertAt:function(b,a,c){return b.substr(0,c)+a+b.substring(c)
},trim:function(a){return a.replace(/^(\s*)|(\s*)$/gm,"")},contains:function(a,c){var b;
for(b=0;b<a.length;b+=1){if(a[b]===c){return true}}return false},indexOf:function(a,d){var b=-1,c;
for(c=0;c<a.length;c+=1){if(a[c]===d){b=c;break}}return b},findByName:function(a,b){var c,d;
for(c=0;c<a.length;c+=1){d=a[c];if(d.name===b){return d}}return null}};window.rangy=(function(){var l="object",g="function",B="undefined";
var m=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer","START_TO_START","START_TO_END","END_TO_START","END_TO_END"];
var c=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"];
var t=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"];
var q=["collapse","compareEndPoints","duplicate","getBookmark","moveToBookmark","moveToElementText","parentElement","pasteHTML","select","setEndPoint","getBoundingClientRect"];
function k(E,D){var C=typeof E[D];return C==g||(!!(C==l&&E[D]))||C=="unknown"}function d(D,C){return !!(typeof D[C]==l&&D[C])
}function r(D,C){return typeof D[C]!=B}function n(C){return function(F,E){var D=E.length;
while(D--){if(!C(F,E[D])){return false}}return true}}var p=n(k);var s=n(d);var A=n(r);
function w(C){return C&&p(C,q)&&A(C,t)}var o={version:"1.2.2",initialized:false,supported:true,util:{isHostMethod:k,isHostObject:d,isHostProperty:r,areHostMethods:p,areHostObjects:s,areHostProperties:A,isTextRange:w},features:{},modules:{},config:{alertOnWarn:false,preferTextRange:false}};
function f(C){window.alert("Rangy not supported in your browser. Reason: "+C);o.initialized=true;
o.supported=false}o.fail=f;function v(D){var C="Rangy warning: "+D;if(o.config.alertOnWarn){window.alert(C)
}else{if(typeof window.console!=B&&typeof window.console.log!=B){window.console.log(C)
}}}o.warn=v;if({}.hasOwnProperty){o.util.extend=function(E,D){for(var C in D){if(D.hasOwnProperty(C)){E[C]=D[C]
}}}}else{f("hasOwnProperty not supported")}var x=[];var a=[];function u(){if(o.initialized){return
}var E;var I=false,J=false;if(k(document,"createRange")){E=document.createRange();
if(p(E,c)&&A(E,m)){I=true}E.detach()}var D=d(document,"body")?document.body:document.getElementsByTagName("body")[0];
if(D&&k(D,"createTextRange")){E=D.createTextRange();if(w(E)){J=true}}if(!I&&!J){f("Neither Range nor TextRange are implemented")
}o.initialized=true;o.features={implementsDomRange:I,implementsTextRange:J};var H=a.concat(x);
for(var G=0,C=H.length;G<C;++G){try{H[G](o)}catch(F){if(d(window,"console")&&k(window.console,"log")){window.console.log("Init listener threw an exception. Continuing.",F)
}}}}o.init=u;o.addInitListener=function(C){if(o.initialized){C(o)}else{x.push(C)}};
var y=[];o.addCreateMissingNativeApiListener=function(C){y.push(C)};function e(E){E=E||window;
u();for(var D=0,C=y.length;D<C;++D){y[D](E)}}o.createMissingNativeApi=e;function z(C){this.name=C;
this.initialized=false;this.supported=false}z.prototype.fail=function(C){this.initialized=true;
this.supported=false;throw new Error("Module '"+this.name+"' failed to load: "+C)
};z.prototype.warn=function(C){o.warn("Module "+this.name+": "+C)};z.prototype.createError=function(C){return new Error("Error in Rangy "+this.name+" module: "+C)
};o.createModule=function(C,E){var D=new z(C);o.modules[C]=D;a.push(function(F){E(F,D);
D.initialized=true;D.supported=true})};o.requireModules=function(E){for(var G=0,C=E.length,F,D;
G<C;++G){D=E[G];F=o.modules[D];if(!F||!(F instanceof z)){throw new Error("Module '"+D+"' not found")
}if(!F.supported){throw new Error("Module '"+D+"' not supported")}}};var b=false;
var h=function(C){if(!b){b=true;if(!o.initialized){u()}}};if(typeof window==B){f("No window found");
return}if(typeof document==B){f("No document found");return}if(k(document,"addEventListener")){document.addEventListener("DOMContentLoaded",h,false)
}if(k(window,"addEventListener")){window.addEventListener("load",h,false)}else{if(k(window,"attachEvent")){window.attachEvent("onload",h)
}else{f("Window does not have required addEventListener or attachEvent method")}}return o
})();rangy.createModule("DomUtil",function(r,d){var v="undefined";var b=r.util;if(!b.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])){d.fail("document missing a Node creation method")
}if(!b.isHostMethod(document,"getElementsByTagName")){d.fail("document missing getElementsByTagName method")
}var e=document.createElement("div");if(!b.areHostMethods(e,["insertBefore","appendChild","cloneNode"]||!b.areHostObjects(e,["previousSibling","nextSibling","childNodes","parentNode"]))){d.fail("Incomplete Element implementation")
}if(!b.isHostProperty(e,"innerHTML")){d.fail("Element is missing innerHTML property")
}var u=document.createTextNode("test");if(!b.areHostMethods(u,["splitText","deleteData","insertData","appendData","cloneNode"]||!b.areHostObjects(e,["previousSibling","nextSibling","childNodes","parentNode"])||!b.areHostProperties(u,["data"]))){d.fail("Incomplete Text Node implementation")
}var A=function(G,I){var H=G.length;while(H--){if(G[H]===I){return true}}return false
};function k(H){var G;return typeof H.namespaceURI==v||((G=H.namespaceURI)===null||G=="http://www.w3.org/1999/xhtml")
}function l(H){var G=H.parentNode;return(G.nodeType==1)?G:null}function a(H){var G=0;
while((H=H.previousSibling)){G++}return G}function g(G){var H;return o(G)?G.length:((H=G.childNodes)?H.length:0)
}function z(H,G){var I=[],J;for(J=H;J;J=J.parentNode){I.push(J)}for(J=G;J;J=J.parentNode){if(A(I,J)){return J
}}return null}function E(G,H,J){var I=J?H:H.parentNode;while(I){if(I===G){return true
}else{I=I.parentNode}}return false}function B(H,G,K){var I,J=K?H:H.parentNode;while(J){I=J.parentNode;
if(I===G){return J}J=I}return null}function o(H){var G=H.nodeType;return G==3||G==4||G==8
}function x(J,H){var G=H.nextSibling,I=H.parentNode;if(G){I.insertBefore(J,G)}else{I.appendChild(J)
}return J}function y(I,G){var H=I.cloneNode(false);H.deleteData(0,G);I.deleteData(G,I.length-G);
x(H,I);return H}function s(G){if(G.nodeType==9){return G}else{if(typeof G.ownerDocument!=v){return G.ownerDocument
}else{if(typeof G.document!=v){return G.document}else{if(G.parentNode){return s(G.parentNode)
}else{throw new Error("getDocument: no document found for node")}}}}}function n(G){var H=s(G);
if(typeof H.defaultView!=v){return H.defaultView}else{if(typeof H.parentWindow!=v){return H.parentWindow
}else{throw new Error("Cannot get a window object for node")}}}function D(G){if(typeof G.contentDocument!=v){return G.contentDocument
}else{if(typeof G.contentWindow!=v){return G.contentWindow.document}else{throw new Error("getIframeWindow: No Document object found for iframe element")
}}}function f(G){if(typeof G.contentWindow!=v){return G.contentWindow}else{if(typeof G.contentDocument!=v){return G.contentDocument.defaultView
}else{throw new Error("getIframeWindow: No Window object found for iframe element")
}}}function F(G){return b.isHostObject(G,"body")?G.body:G.getElementsByTagName("body")[0]
}function c(H){var G;while((G=H.parentNode)){H=G}return H}function t(J,L,I,K){var G,M,O,N,H;
if(J==I){return L===K?0:(L<K)?-1:1}else{if((G=B(I,J,true))){return L<=a(G)?-1:1}else{if((G=B(J,I,true))){return a(G)<K?-1:1
}else{M=z(J,I);O=(J===M)?M:B(J,M,true);N=(I===M)?M:B(I,M,true);if(O===N){throw new Error("comparePoints got to case 4 and childA and childB are the same!")
}else{H=M.firstChild;while(H){if(H===O){return -1}else{if(H===N){return 1}}H=H.nextSibling
}throw new Error("Should not be here!")}}}}}function C(H){var G=s(H).createDocumentFragment(),I;
while((I=H.firstChild)){G.appendChild(I)}return G}function q(G){if(!G){return"[No node]"
}if(o(G)){return'"'+G.data+'"'}else{if(G.nodeType==1){var H=G.id?' id="'+G.id+'"':"";
return"<"+G.nodeName+H+">["+G.childNodes.length+"]"}else{return G.nodeName}}}function p(G){this.root=G;
this._next=G}p.prototype={_current:null,hasNext:function(){return !!this._next},next:function(){var I=this._current=this._next;
var H,G;if(this._current){H=I.firstChild;if(H){this._next=H}else{G=null;while((I!==this.root)&&!(G=I.nextSibling)){I=I.parentNode
}this._next=G}}return this._current},detach:function(){this._current=this._next=this.root=null
}};function h(G){return new p(G)}function m(G,H){this.node=G;this.offset=H}m.prototype={equals:function(G){return this.node===G.node&this.offset==G.offset
},inspect:function(){return"[DomPosition("+q(this.node)+":"+this.offset+")]"}};function w(G){this.code=this[G];
this.codeName=G;this.message="DOMException: "+this.codeName}w.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11};
w.prototype.toString=function(){return this.message};r.dom={arrayContains:A,isHtmlNamespace:k,parentElement:l,getNodeIndex:a,getNodeLength:g,getCommonAncestor:z,isAncestorOf:E,getClosestAncestorIn:B,isCharacterDataNode:o,insertAfter:x,splitDataNode:y,getDocument:s,getWindow:n,getIframeWindow:f,getIframeDocument:D,getBody:F,getRootContainer:c,comparePoints:t,inspectNode:q,fragmentFromNodeChildren:C,createIterator:h,DomPosition:m};
r.DOMException=w});rangy.createModule("DomRange",function(k,f){k.requireModules(["DomUtil"]);
var b=k.dom;var G=b.DomPosition;var V=k.DOMException;function z(an,e){return(an.nodeType!=3)&&(b.isAncestorOf(an,e.startContainer,true)||b.isAncestorOf(an,e.endContainer,true))
}function o(e){return b.getDocument(e.startContainer)}function w(an,ar,ao){var aq=an._listeners[ar];
if(aq){for(var ap=0,e=aq.length;ap<e;++ap){aq[ap].call(an,{target:an,args:ao})}}}function C(e){return new G(e.parentNode,b.getNodeIndex(e))
}function Y(e){return new G(e.parentNode,b.getNodeIndex(e)+1)}function l(an,ap,ao){var e=an.nodeType==11?an.firstChild:an;
if(b.isCharacterDataNode(ap)){if(ao==ap.length){b.insertAfter(an,ap)}else{ap.parentNode.insertBefore(an,ao==0?ap:b.splitDataNode(ap,ao))
}}else{if(ao>=ap.childNodes.length){ap.appendChild(an)}else{ap.insertBefore(an,ap.childNodes[ao])
}}return e}function J(ao){var an;for(var ap,aq=o(ao.range).createDocumentFragment(),e;
ap=ao.next();){an=ao.isPartiallySelectedSubtree();ap=ap.cloneNode(!an);if(an){e=ao.getSubtreeIterator();
ap.appendChild(J(e));e.detach(true)}if(ap.nodeType==10){throw new V("HIERARCHY_REQUEST_ERR")
}aq.appendChild(ap)}return aq}function X(an,aq,e){var ao,at;e=e||{stop:false};for(var ap,ar;
ap=an.next();){if(an.isPartiallySelectedSubtree()){if(aq(ap)===false){e.stop=true;
return}else{ar=an.getSubtreeIterator();X(ar,aq,e);ar.detach(true);if(e.stop){return
}}}else{ao=b.createIterator(ap);while((at=ao.next())){if(aq(at)===false){e.stop=true;
return}}}}}function p(an){var e;while(an.next()){if(an.isPartiallySelectedSubtree()){e=an.getSubtreeIterator();
p(e);e.detach(true)}else{an.remove()}}}function S(an){for(var ao,ap=o(an.range).createDocumentFragment(),e;
ao=an.next();){if(an.isPartiallySelectedSubtree()){ao=ao.cloneNode(false);e=an.getSubtreeIterator();
ao.appendChild(S(e));e.detach(true)}else{an.remove()}if(ao.nodeType==10){throw new V("HIERARCHY_REQUEST_ERR")
}ap.appendChild(ao)}return ap}function r(ao,e,ap){var ar=!!(e&&e.length),aq;var at=!!ap;
if(ar){aq=new RegExp("^("+e.join("|")+")$")}var an=[];X(new g(ao,false),function(au){if((!ar||aq.test(au.nodeType))&&(!at||ap(au))){an.push(au)
}});return an}function B(e){var an=(typeof e.getName=="undefined")?"Range":e.getName();
return"["+an+"("+b.inspectNode(e.startContainer)+":"+e.startOffset+", "+b.inspectNode(e.endContainer)+":"+e.endOffset+")]"
}function g(ao,an){this.range=ao;this.clonePartiallySelectedTextNodes=an;if(!ao.collapsed){this.sc=ao.startContainer;
this.so=ao.startOffset;this.ec=ao.endContainer;this.eo=ao.endOffset;var e=ao.commonAncestorContainer;
if(this.sc===this.ec&&b.isCharacterDataNode(this.sc)){this.isSingleCharacterDataNode=true;
this._first=this._last=this._next=this.sc}else{this._first=this._next=(this.sc===e&&!b.isCharacterDataNode(this.sc))?this.sc.childNodes[this.so]:b.getClosestAncestorIn(this.sc,e,true);
this._last=(this.ec===e&&!b.isCharacterDataNode(this.ec))?this.ec.childNodes[this.eo-1]:b.getClosestAncestorIn(this.ec,e,true)
}}}g.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:false,reset:function(){this._current=null;
this._next=this._first},hasNext:function(){return !!this._next},next:function(){var e=this._current=this._next;
if(e){this._next=(e!==this._last)?e.nextSibling:null;if(b.isCharacterDataNode(e)&&this.clonePartiallySelectedTextNodes){if(e===this.ec){(e=e.cloneNode(true)).deleteData(this.eo,e.length-this.eo)
}if(this._current===this.sc){(e=e.cloneNode(true)).deleteData(0,this.so)}}}return e
},remove:function(){var an=this._current,ao,e;if(b.isCharacterDataNode(an)&&(an===this.sc||an===this.ec)){ao=(an===this.sc)?this.so:0;
e=(an===this.ec)?this.eo:an.length;if(ao!=e){an.deleteData(ao,e-ao)}}else{if(an.parentNode){an.parentNode.removeChild(an)
}else{}}},isPartiallySelectedSubtree:function(){var e=this._current;return z(e,this.range)
},getSubtreeIterator:function(){var an;if(this.isSingleCharacterDataNode){an=this.range.cloneRange();
an.collapse()}else{an=new al(o(this.range));var ar=this._current;var ap=ar,e=0,aq=ar,ao=b.getNodeLength(ar);
if(b.isAncestorOf(ar,this.sc,true)){ap=this.sc;e=this.so}if(b.isAncestorOf(ar,this.ec,true)){aq=this.ec;
ao=this.eo}F(an,ap,e,aq,ao)}return new g(an,this.clonePartiallySelectedTextNodes)
},detach:function(e){if(e){this.range.detach()}this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null
}};function Q(e){this.code=this[e];this.codeName=e;this.message="RangeException: "+this.codeName
}Q.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2};Q.prototype.toString=function(){return this.message
};function y(an,e,ao){this.nodes=r(an,e,ao);this._next=this.nodes[0];this._position=0
}y.prototype={_current:null,hasNext:function(){return !!this._next},next:function(){this._current=this._next;
this._next=this.nodes[++this._position];return this._current},detach:function(){this._current=this._next=this.nodes=null
}};var ag=[1,3,4,5,7,8,10];var ae=[2,9,11];var D=[5,6,10,12];var O=[1,3,4,5,7,8,10,11];
var H=[1,3,4,5,7,8];function aa(e){return function(ao,aq){var an,ap=aq?ao:ao.parentNode;
while(ap){an=ap.nodeType;if(b.arrayContains(e,an)){return ap}ap=ap.parentNode}return null
}}var v=b.getRootContainer;var K=aa([9,11]);var M=aa(D);var c=aa([6,10,12]);function t(an,e){if(c(an,e)){throw new Q("INVALID_NODE_TYPE_ERR")
}}function E(e){if(!e.startContainer){throw new V("INVALID_STATE_ERR")}}function W(e,an){if(!b.arrayContains(an,e.nodeType)){throw new Q("INVALID_NODE_TYPE_ERR")
}}function af(e,an){if(an<0||an>(b.isCharacterDataNode(e)?e.length:e.childNodes.length)){throw new V("INDEX_SIZE_ERR")
}}function d(an,e){if(K(an,true)!==K(e,true)){throw new V("WRONG_DOCUMENT_ERR")}}function ac(e){if(M(e,true)){throw new V("NO_MODIFICATION_ALLOWED_ERR")
}}function aj(an,e){if(!an){throw new V(e)}}function q(e){return !b.arrayContains(ae,e.nodeType)&&!K(e,true)
}function am(e,an){return an<=(b.isCharacterDataNode(e)?e.length:e.childNodes.length)
}function h(e){E(e);if(q(e.startContainer)||q(e.endContainer)||!am(e.startContainer,e.startOffset)||!am(e.endContainer,e.endOffset)){throw new Error("Range error: Range is no longer valid after DOM mutation ("+e.inspect()+")")
}}var a=document.createElement("style");var R=false;try{a.innerHTML="<b>x</b>";R=(a.firstChild.nodeType==3)
}catch(ai){}k.features.htmlParsingConforms=R;var T=R?function(ao){var an=this.startContainer;
var ap=b.getDocument(an);if(!an){throw new V("INVALID_STATE_ERR")}var e=null;if(an.nodeType==1){e=an
}else{if(b.isCharacterDataNode(an)){e=b.parentElement(an)}}if(e===null||(e.nodeName=="HTML"&&b.isHtmlNamespace(b.getDocument(e).documentElement)&&b.isHtmlNamespace(e))){e=ap.createElement("body")
}else{e=e.cloneNode(false)}e.innerHTML=ao;return b.fragmentFromNodeChildren(e)}:function(an){E(this);
var ao=o(this);var e=ao.createElement("body");e.innerHTML=an;return b.fragmentFromNodeChildren(e)
};var N=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"];
var n=0,A=1,ah=2,ab=3;var u=0,x=1,L=2,m=3;function ad(){}ad.prototype={attachListener:function(e,an){this._listeners[e].push(an)
},compareBoundaryPoints:function(ar,ao){h(this);d(this.startContainer,ao.startContainer);
var au,an,at,e;var aq=(ar==ab||ar==n)?"start":"end";var ap=(ar==A||ar==n)?"start":"end";
au=this[aq+"Container"];an=this[aq+"Offset"];at=ao[ap+"Container"];e=ao[ap+"Offset"];
return b.comparePoints(au,an,at,e)},insertNode:function(an){h(this);W(an,O);ac(this.startContainer);
if(b.isAncestorOf(an,this.startContainer,true)){throw new V("HIERARCHY_REQUEST_ERR")
}var e=l(an,this.startContainer,this.startOffset);this.setStartBefore(e)},cloneContents:function(){h(this);
var ao,an;if(this.collapsed){return o(this).createDocumentFragment()}else{if(this.startContainer===this.endContainer&&b.isCharacterDataNode(this.startContainer)){ao=this.startContainer.cloneNode(true);
ao.data=ao.data.slice(this.startOffset,this.endOffset);an=o(this).createDocumentFragment();
an.appendChild(ao);return an}else{var e=new g(this,true);ao=J(e);e.detach()}return ao
}},canSurroundContents:function(){h(this);ac(this.startContainer);ac(this.endContainer);
var e=new g(this,true);var an=(e._first&&(z(e._first,this))||(e._last&&z(e._last,this)));
e.detach();return !an},surroundContents:function(an){W(an,H);if(!this.canSurroundContents()){throw new Q("BAD_BOUNDARYPOINTS_ERR")
}var e=this.extractContents();if(an.hasChildNodes()){while(an.lastChild){an.removeChild(an.lastChild)
}}l(an,this.startContainer,this.startOffset);an.appendChild(e);this.selectNode(an)
},cloneRange:function(){h(this);var e=new al(o(this));var an=N.length,ao;while(an--){ao=N[an];
e[ao]=this[ao]}return e},toString:function(){h(this);var an=this.startContainer;if(an===this.endContainer&&b.isCharacterDataNode(an)){return(an.nodeType==3||an.nodeType==4)?an.data.slice(this.startOffset,this.endOffset):""
}else{var ao=[],e=new g(this,true);X(e,function(ap){if(ap.nodeType==3||ap.nodeType==4){ao.push(ap.data)
}});e.detach();return ao.join("")}},compareNode:function(ao){h(this);var an=ao.parentNode;
var aq=b.getNodeIndex(ao);if(!an){throw new V("NOT_FOUND_ERR")}var ap=this.comparePoint(an,aq),e=this.comparePoint(an,aq+1);
if(ap<0){return(e>0)?L:u}else{return(e>0)?x:m}},comparePoint:function(e,an){h(this);
aj(e,"HIERARCHY_REQUEST_ERR");d(e,this.startContainer);if(b.comparePoints(e,an,this.startContainer,this.startOffset)<0){return -1
}else{if(b.comparePoints(e,an,this.endContainer,this.endOffset)>0){return 1}}return 0
},createContextualFragment:T,toHtml:function(){h(this);var e=o(this).createElement("div");
e.appendChild(this.cloneContents());return e.innerHTML},intersectsNode:function(ap,e){h(this);
aj(ap,"NOT_FOUND_ERR");if(b.getDocument(ap)!==o(this)){return false}var ao=ap.parentNode,ar=b.getNodeIndex(ap);
aj(ao,"NOT_FOUND_ERR");var aq=b.comparePoints(ao,ar,this.endContainer,this.endOffset),an=b.comparePoints(ao,ar+1,this.startContainer,this.startOffset);
return e?aq<=0&&an>=0:aq<0&&an>0},isPointInRange:function(e,an){h(this);aj(e,"HIERARCHY_REQUEST_ERR");
d(e,this.startContainer);return(b.comparePoints(e,an,this.startContainer,this.startOffset)>=0)&&(b.comparePoints(e,an,this.endContainer,this.endOffset)<=0)
},intersectsRange:function(an,e){h(this);if(o(an)!=o(this)){throw new V("WRONG_DOCUMENT_ERR")
}var ap=b.comparePoints(this.startContainer,this.startOffset,an.endContainer,an.endOffset),ao=b.comparePoints(this.endContainer,this.endOffset,an.startContainer,an.startOffset);
return e?ap<=0&&ao>=0:ap<0&&ao>0},intersection:function(e){if(this.intersectsRange(e)){var ap=b.comparePoints(this.startContainer,this.startOffset,e.startContainer,e.startOffset),an=b.comparePoints(this.endContainer,this.endOffset,e.endContainer,e.endOffset);
var ao=this.cloneRange();if(ap==-1){ao.setStart(e.startContainer,e.startOffset)}if(an==1){ao.setEnd(e.endContainer,e.endOffset)
}return ao}return null},union:function(e){if(this.intersectsRange(e,true)){var an=this.cloneRange();
if(b.comparePoints(e.startContainer,e.startOffset,this.startContainer,this.startOffset)==-1){an.setStart(e.startContainer,e.startOffset)
}if(b.comparePoints(e.endContainer,e.endOffset,this.endContainer,this.endOffset)==1){an.setEnd(e.endContainer,e.endOffset)
}return an}else{throw new Q("Ranges do not intersect")}},containsNode:function(an,e){if(e){return this.intersectsNode(an,false)
}else{return this.compareNode(an)==m}},containsNodeContents:function(e){return this.comparePoint(e,0)>=0&&this.comparePoint(e,b.getNodeLength(e))<=0
},containsRange:function(e){return this.intersection(e).equals(e)},containsNodeText:function(ap){var aq=this.cloneRange();
aq.selectNode(ap);var ao=aq.getNodes([3]);if(ao.length>0){aq.setStart(ao[0],0);var e=ao.pop();
aq.setEnd(e,e.length);var an=this.containsRange(aq);aq.detach();return an}else{return this.containsNodeContents(ap)
}},createNodeIterator:function(e,an){h(this);return new y(this,e,an)},getNodes:function(e,an){h(this);
return r(this,e,an)},getDocument:function(){return o(this)},collapseBefore:function(e){E(this);
this.setEndBefore(e);this.collapse(false)},collapseAfter:function(e){E(this);this.setStartAfter(e);
this.collapse(true)},getName:function(){return"DomRange"},equals:function(e){return al.rangesEqual(this,e)
},inspect:function(){return B(this)}};function U(e){e.START_TO_START=n;e.START_TO_END=A;
e.END_TO_END=ah;e.END_TO_START=ab;e.NODE_BEFORE=u;e.NODE_AFTER=x;e.NODE_BEFORE_AND_AFTER=L;
e.NODE_INSIDE=m}function I(e){U(e);U(e.prototype)}function s(e,an){return function(){h(this);
var au=this.startContainer,at=this.startOffset,ao=this.commonAncestorContainer;var aq=new g(this,true);
var ar,av;if(au!==ao){ar=b.getClosestAncestorIn(au,ao,true);av=Y(ar);au=av.node;at=av.offset
}X(aq,ac);aq.reset();var ap=e(aq);aq.detach();an(this,au,at,au,at);return ap}}function Z(ap,at,e){function ar(av,au){return function(aw){E(this);
W(aw,ag);W(v(aw),ae);var ax=(av?C:Y)(aw);(au?ao:aq)(this,ax.node,ax.offset)}}function ao(av,ax,ay){var aw=av.endContainer,au=av.endOffset;
if(ax!==av.startContainer||ay!==av.startOffset){if(v(ax)!=v(aw)||b.comparePoints(ax,ay,aw,au)==1){aw=ax;
au=ay}at(av,ax,ay,aw,au)}}function aq(au,av,ay){var ax=au.startContainer,aw=au.startOffset;
if(av!==au.endContainer||ay!==au.endOffset){if(v(av)!=v(ax)||b.comparePoints(av,ay,ax,aw)==-1){ax=av;
aw=ay}at(au,ax,aw,av,ay)}}function an(au,av,aw){if(av!==au.startContainer||aw!==au.startOffset||av!==au.endContainer||aw!==au.endOffset){at(au,av,aw,av,aw)
}}ap.prototype=new ad();k.util.extend(ap.prototype,{setStart:function(au,av){E(this);
t(au,true);af(au,av);ao(this,au,av)},setEnd:function(au,av){E(this);t(au,true);af(au,av);
aq(this,au,av)},setStartBefore:ar(true,true),setStartAfter:ar(false,true),setEndBefore:ar(true,false),setEndAfter:ar(false,false),collapse:function(au){h(this);
if(au){at(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset)
}else{at(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)}},selectNodeContents:function(au){E(this);
t(au,true);at(this,au,0,au,b.getNodeLength(au))},selectNode:function(av){E(this);
t(av,false);W(av,ag);var aw=C(av),au=Y(av);at(this,aw.node,aw.offset,au.node,au.offset)
},extractContents:s(S,at),deleteContents:s(p,at),canSurroundContents:function(){h(this);
ac(this.startContainer);ac(this.endContainer);var au=new g(this,true);var av=(au._first&&(z(au._first,this))||(au._last&&z(au._last,this)));
au.detach();return !av},detach:function(){e(this)},splitBoundaries:function(){h(this);
var ay=this.startContainer,ax=this.startOffset,av=this.endContainer,au=this.endOffset;
var aw=(ay===av);if(b.isCharacterDataNode(av)&&au>0&&au<av.length){b.splitDataNode(av,au)
}if(b.isCharacterDataNode(ay)&&ax>0&&ax<ay.length){ay=b.splitDataNode(ay,ax);if(aw){au-=ax;
av=ay}else{if(av==ay.parentNode&&au>=b.getNodeIndex(ay)){au++}}ax=0}at(this,ay,ax,av,au)
},normalizeBoundaries:function(){h(this);var aB=this.startContainer,aw=this.startOffset,aA=this.endContainer,au=this.endOffset;
var ax=function(aE){var aD=aE.nextSibling;if(aD&&aD.nodeType==aE.nodeType){aA=aE;
au=aE.length;aE.appendData(aD.data);aD.parentNode.removeChild(aD)}};var aC=function(aF){var aE=aF.previousSibling;
if(aE&&aE.nodeType==aF.nodeType){aB=aF;var aD=aF.length;aw=aE.length;aF.insertData(0,aE.data);
aE.parentNode.removeChild(aE);if(aB==aA){au+=aw;aA=aB}else{if(aA==aF.parentNode){var aG=b.getNodeIndex(aF);
if(au==aG){aA=aF;au=aD}else{if(au>aG){au--}}}}}};var az=true;if(b.isCharacterDataNode(aA)){if(aA.length==au){ax(aA)
}}else{if(au>0){var ay=aA.childNodes[au-1];if(ay&&b.isCharacterDataNode(ay)){ax(ay)
}}az=!this.collapsed}if(az){if(b.isCharacterDataNode(aB)){if(aw==0){aC(aB)}}else{if(aw<aB.childNodes.length){var av=aB.childNodes[aw];
if(av&&b.isCharacterDataNode(av)){aC(av)}}}}else{aB=aA;aw=au}at(this,aB,aw,aA,au)
},collapseToPoint:function(au,av){E(this);t(au,true);af(au,av);an(this,au,av)}});
I(ap)}function P(e){e.collapsed=(e.startContainer===e.endContainer&&e.startOffset===e.endOffset);
e.commonAncestorContainer=e.collapsed?e.startContainer:b.getCommonAncestor(e.startContainer,e.endContainer)
}function F(ao,aq,an,ar,ap){var e=(ao.startContainer!==aq||ao.startOffset!==an);var at=(ao.endContainer!==ar||ao.endOffset!==ap);
ao.startContainer=aq;ao.startOffset=an;ao.endContainer=ar;ao.endOffset=ap;P(ao);w(ao,"boundarychange",{startMoved:e,endMoved:at})
}function ak(e){E(e);e.startContainer=e.startOffset=e.endContainer=e.endOffset=null;
e.collapsed=e.commonAncestorContainer=null;w(e,"detach",null);e._listeners=null}function al(e){this.startContainer=e;
this.startOffset=0;this.endContainer=e;this.endOffset=0;this._listeners={boundarychange:[],detach:[]};
P(this)}Z(al,F,ak);k.rangePrototype=ad.prototype;al.rangeProperties=N;al.RangeIterator=g;
al.copyComparisonConstants=I;al.createPrototypeRange=Z;al.inspect=B;al.getRangeDocument=o;
al.rangesEqual=function(an,e){return an.startContainer===e.startContainer&&an.startOffset===e.startOffset&&an.endContainer===e.endContainer&&an.endOffset===e.endOffset
};k.DomRange=al;k.RangeException=Q});rangy.createModule("WrappedRange",function(k,d){k.requireModules(["DomUtil","DomRange"]);
var a;var h=k.dom;var b=h.DomPosition;var l=k.DomRange;function e(s){var q=s.parentElement();
var o=s.duplicate();o.collapse(true);var r=o.parentElement();o=s.duplicate();o.collapse(false);
var p=o.parentElement();var n=(r==p)?r:h.getCommonAncestor(r,p);return n==q?n:h.getCommonAncestor(q,n)
}function c(n){return n.compareEndPoints("StartToEnd",n)==0}function f(B,y,p,u){var C=B.duplicate();
C.collapse(p);var A=C.parentElement();if(!h.isAncestorOf(y,A,true)){A=y}if(!A.canHaveHTML){return new b(A.parentNode,h.getNodeIndex(A))
}var o=h.getDocument(A).createElement("span");var z,w=p?"StartToStart":"StartToEnd";
var x,s,n,q;do{A.insertBefore(o,o.previousSibling);C.moveToElementText(o)}while((z=C.compareEndPoints(w,B))>0&&o.previousSibling);
q=o.nextSibling;if(z==-1&&q&&h.isCharacterDataNode(q)){C.setEndPoint(p?"EndToStart":"EndToEnd",B);
var t;if(/[\r\n]/.test(q.data)){var v=C.duplicate();var r=v.text.replace(/\r\n/g,"\r").length;
t=v.moveStart("character",r);while((z=v.compareEndPoints("StartToEnd",v))==-1){t++;
v.moveStart("character",1)}}else{t=C.text.length}n=new b(q,t)}else{x=(u||!p)&&o.previousSibling;
s=(u||p)&&o.nextSibling;if(s&&h.isCharacterDataNode(s)){n=new b(s,0)}else{if(x&&h.isCharacterDataNode(x)){n=new b(x,x.length)
}else{n=new b(A,h.getNodeIndex(o))}}}o.parentNode.removeChild(o);return n}function m(n,p){var q,t,r=n.offset;
var u=h.getDocument(n.node);var o,v,w=u.body.createTextRange();var s=h.isCharacterDataNode(n.node);
if(s){q=n.node;t=q.parentNode}else{v=n.node.childNodes;q=(r<v.length)?v[r]:null;t=n.node
}o=u.createElement("span");o.innerHTML="&#feff;";if(q){t.insertBefore(o,q)}else{t.appendChild(o)
}w.moveToElementText(o);w.collapse(!p);t.removeChild(o);if(s){w[p?"moveStart":"moveEnd"]("character",r)
}return w}if(k.features.implementsDomRange&&(!k.features.implementsTextRange||!k.config.preferTextRange)){(function(){var p;
var u=l.rangeProperties;var x;function n(y){var z=u.length,A;while(z--){A=u[z];y[A]=y.nativeRange[A]
}}function q(A,C,z,D,B){var y=(A.startContainer!==C||A.startOffset!=z);var E=(A.endContainer!==D||A.endOffset!=B);
if(y||E){A.setEnd(D,B);A.setStart(C,z)}}function v(y){y.nativeRange.detach();y.detached=true;
var z=u.length,A;while(z--){A=u[z];y[A]=null}}var o;a=function(y){if(!y){throw new Error("Range must be specified")
}this.nativeRange=y;n(this)};l.createPrototypeRange(a,q,v);p=a.prototype;p.selectNode=function(y){this.nativeRange.selectNode(y);
n(this)};p.deleteContents=function(){this.nativeRange.deleteContents();n(this)};p.extractContents=function(){var y=this.nativeRange.extractContents();
n(this);return y};p.cloneContents=function(){return this.nativeRange.cloneContents()
};p.surroundContents=function(y){this.nativeRange.surroundContents(y);n(this)};p.collapse=function(y){this.nativeRange.collapse(y);
n(this)};p.cloneRange=function(){return new a(this.nativeRange.cloneRange())};p.refresh=function(){n(this)
};p.toString=function(){return this.nativeRange.toString()};var t=document.createTextNode("test");
h.getBody(document).appendChild(t);var r=document.createRange();r.setStart(t,0);r.setEnd(t,0);
try{r.setStart(t,1);x=true;p.setStart=function(y,z){this.nativeRange.setStart(y,z);
n(this)};p.setEnd=function(y,z){this.nativeRange.setEnd(y,z);n(this)};o=function(y){return function(z){this.nativeRange[y](z);
n(this)}}}catch(s){x=false;p.setStart=function(z,A){try{this.nativeRange.setStart(z,A)
}catch(y){this.nativeRange.setEnd(z,A);this.nativeRange.setStart(z,A)}n(this)};p.setEnd=function(z,A){try{this.nativeRange.setEnd(z,A)
}catch(y){this.nativeRange.setStart(z,A);this.nativeRange.setEnd(z,A)}n(this)};o=function(y,z){return function(B){try{this.nativeRange[y](B)
}catch(A){this.nativeRange[z](B);this.nativeRange[y](B)}n(this)}}}p.setStartBefore=o("setStartBefore","setEndBefore");
p.setStartAfter=o("setStartAfter","setEndAfter");p.setEndBefore=o("setEndBefore","setStartBefore");
p.setEndAfter=o("setEndAfter","setStartAfter");r.selectNodeContents(t);if(r.startContainer==t&&r.endContainer==t&&r.startOffset==0&&r.endOffset==t.length){p.selectNodeContents=function(y){this.nativeRange.selectNodeContents(y);
n(this)}}else{p.selectNodeContents=function(y){this.setStart(y,0);this.setEnd(y,l.getEndOffset(y))
}}r.selectNodeContents(t);r.setEnd(t,3);var w=document.createRange();w.selectNodeContents(t);
w.setEnd(t,4);w.setStart(t,2);if(r.compareBoundaryPoints(r.START_TO_END,w)==-1&r.compareBoundaryPoints(r.END_TO_START,w)==1){p.compareBoundaryPoints=function(z,y){y=y.nativeRange||y;
if(z==y.START_TO_END){z=y.END_TO_START}else{if(z==y.END_TO_START){z=y.START_TO_END
}}return this.nativeRange.compareBoundaryPoints(z,y)}}else{p.compareBoundaryPoints=function(z,y){return this.nativeRange.compareBoundaryPoints(z,y.nativeRange||y)
}}if(k.util.isHostMethod(r,"createContextualFragment")){p.createContextualFragment=function(y){return this.nativeRange.createContextualFragment(y)
}}h.getBody(document).removeChild(t);r.detach();w.detach()})();k.createNativeRange=function(n){n=n||document;
return n.createRange()}}else{if(k.features.implementsTextRange){a=function(n){this.textRange=n;
this.refresh()};a.prototype=new l(document);a.prototype.refresh=function(){var p,n;
var o=e(this.textRange);if(c(this.textRange)){n=p=f(this.textRange,o,true,true)}else{p=f(this.textRange,o,true,false);
n=f(this.textRange,o,false,false)}this.setStart(p.node,p.offset);this.setEnd(n.node,n.offset)
};l.copyComparisonConstants(a);var g=(function(){return this})();if(typeof g.Range=="undefined"){g.Range=a
}k.createNativeRange=function(n){n=n||document;return n.body.createTextRange()}}}if(k.features.implementsTextRange){a.rangeToTextRange=function(n){if(n.collapsed){var q=m(new b(n.startContainer,n.startOffset),true);
return q}else{var r=m(new b(n.startContainer,n.startOffset),true);var p=m(new b(n.endContainer,n.endOffset),false);
var o=h.getDocument(n.startContainer).body.createTextRange();o.setEndPoint("StartToStart",r);
o.setEndPoint("EndToEnd",p);return o}}}a.prototype.getName=function(){return"WrappedRange"
};k.WrappedRange=a;k.createRange=function(n){n=n||document;return new a(k.createNativeRange(n))
};k.createRangyRange=function(n){n=n||document;return new l(n)};k.createIframeRange=function(n){return k.createRange(h.getIframeDocument(n))
};k.createIframeRangyRange=function(n){return k.createRangyRange(h.getIframeDocument(n))
};k.addCreateMissingNativeApiListener(function(o){var n=o.document;if(typeof n.createRange=="undefined"){n.createRange=function(){return k.createRange(this)
}}n=o=null})});rangy.createModule("WrappedSelection",function(g,d){g.requireModules(["DomUtil","DomRange","WrappedRange"]);
g.config.checkSelectionRanges=true;var F="boolean",V="_rangySelection",c=g.dom,n=g.util,S=g.DomRange,e=g.WrappedRange,P=g.DOMException,A=c.DomPosition,y,p,W="Control";
function o(Y){return(Y||window).getSelection()}function s(Y){return(Y||window).document.selection
}var U=g.util.isHostMethod(window,"getSelection"),O=g.util.isHostObject(document,"selection");
var w=O&&(!U||g.config.preferTextRange);if(w){y=s;g.isSelectionValid=function(Z){var aa=(Z||window).document,Y=aa.selection;
return(Y.type!="None"||c.getDocument(Y.createRange().parentElement())==aa)}}else{if(U){y=o;
g.isSelectionValid=function(){return true}}else{d.fail("Neither document.selection or window.getSelection() detected.")
}}g.getNativeSelection=y;var N=y();var D=g.createNativeRange(document);var E=c.getBody(document);
var L=n.areHostObjects(N,["anchorNode","focusNode"]&&n.areHostProperties(N,["anchorOffset","focusOffset"]));
g.features.selectionHasAnchorAndFocus=L;var r=n.isHostMethod(N,"extend");g.features.selectionHasExtend=r;
var X=(typeof N.rangeCount=="number");g.features.selectionHasRangeCount=X;var R=false;
var Q=true;if(n.areHostMethods(N,["addRange","getRangeAt","removeAllRanges"])&&typeof N.rangeCount=="number"&&g.features.implementsDomRange){(function(){var aa=document.createElement("iframe");
E.appendChild(aa);var ae=c.getIframeDocument(aa);ae.open();ae.write("<html><head></head><body>12</body></html>");
ae.close();var ac=c.getIframeWindow(aa).getSelection();var af=ae.documentElement;
var ab=af.lastChild,ad=ab.firstChild;var Z=ae.createRange();Z.setStart(ad,1);Z.collapse(true);
ac.addRange(Z);Q=(ac.rangeCount==1);ac.removeAllRanges();var Y=Z.cloneRange();Z.setStart(ad,0);
Y.setEnd(ad,2);ac.addRange(Z);ac.addRange(Y);R=(ac.rangeCount==2);Z.detach();Y.detach();
E.removeChild(aa)})()}g.features.selectionSupportsMultipleRanges=R;g.features.collapsedNonEditableSelectionsSupported=Q;
var f=false,l;if(E&&n.isHostMethod(E,"createControlRange")){l=E.createControlRange();
if(n.areHostProperties(l,["item","add"])){f=true}}g.features.implementsControlRange=f;
if(L){p=function(Y){return Y.anchorNode===Y.focusNode&&Y.anchorOffset===Y.focusOffset
}}else{p=function(Y){return Y.rangeCount?Y.getRangeAt(Y.rangeCount-1).collapsed:false
}}function b(ab,Z,Y){var aa=Y?"end":"start",ac=Y?"start":"end";ab.anchorNode=Z[aa+"Container"];
ab.anchorOffset=Z[aa+"Offset"];ab.focusNode=Z[ac+"Container"];ab.focusOffset=Z[ac+"Offset"]
}function x(Z){var Y=Z.nativeSelection;Z.anchorNode=Y.anchorNode;Z.anchorOffset=Y.anchorOffset;
Z.focusNode=Y.focusNode;Z.focusOffset=Y.focusOffset}function I(Y){Y.anchorNode=Y.focusNode=null;
Y.anchorOffset=Y.focusOffset=0;Y.rangeCount=0;Y.isCollapsed=true;Y._ranges.length=0
}function K(Y){var Z;if(Y instanceof S){Z=Y._selectionNativeRange;if(!Z){Z=g.createNativeRange(c.getDocument(Y.startContainer));
Z.setEnd(Y.endContainer,Y.endOffset);Z.setStart(Y.startContainer,Y.startOffset);Y._selectionNativeRange=Z;
Y.attachListener("detach",function(){this._selectionNativeRange=null})}}else{if(Y instanceof e){Z=Y.nativeRange
}else{if(g.features.implementsDomRange&&(Y instanceof c.getWindow(Y.startContainer).Range)){Z=Y
}}}return Z}function m(aa){if(!aa.length||aa[0].nodeType!=1){return false}for(var Z=1,Y=aa.length;
Z<Y;++Z){if(!c.isAncestorOf(aa[0],aa[Z])){return false}}return true}function M(Z){var Y=Z.getNodes();
if(!m(Y)){throw new Error("getSingleElementFromRange: range "+Z.inspect()+" did not consist of a single element")
}return Y[0]}function H(Y){return !!Y&&typeof Y.text!="undefined"}function J(aa,Z){var Y=new e(Z);
aa._ranges=[Y];b(aa,Y,false);aa.rangeCount=1;aa.isCollapsed=Y.collapsed}function v(ab){ab._ranges.length=0;
if(ab.docSelection.type=="None"){I(ab)}else{var aa=ab.docSelection.createRange();
if(H(aa)){J(ab,aa)}else{ab.rangeCount=aa.length;var Y,ac=c.getDocument(aa.item(0));
for(var Z=0;Z<ab.rangeCount;++Z){Y=g.createRange(ac);Y.selectNode(aa.item(Z));ab._ranges.push(Y)
}ab.isCollapsed=ab.rangeCount==1&&ab._ranges[0].collapsed;b(ab,ab._ranges[ab.rangeCount-1],false)
}}}function z(Z,ac){var aa=Z.docSelection.createRange();var Y=M(ac);var ag=c.getDocument(aa.item(0));
var ad=c.getBody(ag).createControlRange();for(var ab=0,ae=aa.length;ab<ae;++ab){ad.add(aa.item(ab))
}try{ad.add(Y)}catch(af){throw new Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")
}ad.select();v(Z)}var q;if(n.isHostMethod(N,"getRangeAt")){q=function(aa,Y){try{return aa.getRangeAt(Y)
}catch(Z){return null}}}else{if(L){q=function(Z){var aa=c.getDocument(Z.anchorNode);
var Y=g.createRange(aa);Y.setStart(Z.anchorNode,Z.anchorOffset);Y.setEnd(Z.focusNode,Z.focusOffset);
if(Y.collapsed!==this.isCollapsed){Y.setStart(Z.focusNode,Z.focusOffset);Y.setEnd(Z.anchorNode,Z.anchorOffset)
}return Y}}}function C(Y,aa,Z){this.nativeSelection=Y;this.docSelection=aa;this._ranges=[];
this.win=Z;this.refresh()}g.getSelection=function(aa){aa=aa||window;var Z=aa[V];var Y=y(aa),ab=O?s(aa):null;
if(Z){Z.nativeSelection=Y;Z.docSelection=ab;Z.refresh(aa)}else{Z=new C(Y,ab,aa);aa[V]=Z
}return Z};g.getIframeSelection=function(Y){return g.getSelection(c.getIframeWindow(Y))
};var a=C.prototype;function k(ad,Y){var ae=c.getDocument(Y[0].startContainer);var ab=c.getBody(ae).createControlRange();
for(var aa=0,ac;aa<rangeCount;++aa){ac=M(Y[aa]);try{ab.add(ac)}catch(Z){throw new Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)")
}}ab.select();v(ad)}if(!w&&L&&n.areHostMethods(N,["removeAllRanges","addRange"])){a.removeAllRanges=function(){this.nativeSelection.removeAllRanges();
I(this)};var h=function(aa,Y){var ab=S.getRangeDocument(Y);var Z=g.createRange(ab);
Z.collapseToPoint(Y.endContainer,Y.endOffset);aa.nativeSelection.addRange(K(Z));aa.nativeSelection.extend(Y.startContainer,Y.startOffset);
aa.refresh()};if(X){a.addRange=function(Z,Y){if(f&&O&&this.docSelection.type==W){z(this,Z)
}else{if(Y&&r){h(this,Z)}else{var aa;if(R){aa=this.rangeCount}else{this.removeAllRanges();
aa=0}this.nativeSelection.addRange(K(Z));this.rangeCount=this.nativeSelection.rangeCount;
if(this.rangeCount==aa+1){if(g.config.checkSelectionRanges){var ab=q(this.nativeSelection,this.rangeCount-1);
if(ab&&!S.rangesEqual(ab,Z)){Z=new e(ab)}}this._ranges[this.rangeCount-1]=Z;b(this,Z,t(this.nativeSelection));
this.isCollapsed=p(this)}else{this.refresh()}}}}}else{a.addRange=function(Z,Y){if(Y&&r){h(this,Z)
}else{this.nativeSelection.addRange(K(Z));this.refresh()}}}a.setRanges=function(Z){if(f&&Z.length>1){k(this,Z)
}else{this.removeAllRanges();for(var aa=0,Y=Z.length;aa<Y;++aa){this.addRange(Z[aa])
}}}}else{if(n.isHostMethod(N,"empty")&&n.isHostMethod(D,"select")&&f&&w){a.removeAllRanges=function(){try{this.docSelection.empty();
if(this.docSelection.type!="None"){var ab;if(this.anchorNode){ab=c.getDocument(this.anchorNode)
}else{if(this.docSelection.type==W){var Z=this.docSelection.createRange();if(Z.length){ab=c.getDocument(Z.item(0)).body.createTextRange()
}}}if(ab){var aa=ab.body.createTextRange();aa.select();this.docSelection.empty()}}}catch(Y){}I(this)
};a.addRange=function(Y){if(this.docSelection.type==W){z(this,Y)}else{e.rangeToTextRange(Y).select();
this._ranges[0]=Y;this.rangeCount=1;this.isCollapsed=this._ranges[0].collapsed;b(this,Y,false)
}};a.setRanges=function(Y){this.removeAllRanges();var Z=Y.length;if(Z>1){k(this,Y)
}else{if(Z){this.addRange(Y[0])}}}}else{d.fail("No means of selecting a Range or TextRange was found");
return false}}a.getRangeAt=function(Y){if(Y<0||Y>=this.rangeCount){throw new P("INDEX_SIZE_ERR")
}else{return this._ranges[Y]}};var G;if(w){G=function(Z){var Y;if(g.isSelectionValid(Z.win)){Y=Z.docSelection.createRange()
}else{Y=c.getBody(Z.win.document).createTextRange();Y.collapse(true)}if(Z.docSelection.type==W){v(Z)
}else{if(H(Y)){J(Z,Y)}else{I(Z)}}}}else{if(n.isHostMethod(N,"getRangeAt")&&typeof N.rangeCount=="number"){G=function(aa){if(f&&O&&aa.docSelection.type==W){v(aa)
}else{aa._ranges.length=aa.rangeCount=aa.nativeSelection.rangeCount;if(aa.rangeCount){for(var Z=0,Y=aa.rangeCount;
Z<Y;++Z){aa._ranges[Z]=new g.WrappedRange(aa.nativeSelection.getRangeAt(Z))}b(aa,aa._ranges[aa.rangeCount-1],t(aa.nativeSelection));
aa.isCollapsed=p(aa)}else{I(aa)}}}}else{if(L&&typeof N.isCollapsed==F&&typeof D.collapsed==F&&g.features.implementsDomRange){G=function(aa){var Y,Z=aa.nativeSelection;
if(Z.anchorNode){Y=q(Z,0);aa._ranges=[Y];aa.rangeCount=1;x(aa);aa.isCollapsed=p(aa)
}else{I(aa)}}}else{d.fail("No means of obtaining a Range or TextRange from the user's selection was found");
return false}}}a.refresh=function(Z){var Y=Z?this._ranges.slice(0):null;G(this);if(Z){var aa=Y.length;
if(aa!=this._ranges.length){return false}while(aa--){if(!S.rangesEqual(Y[aa],this._ranges[aa])){return false
}}return true}};var B=function(ac,aa){var Z=ac.getAllRanges(),ad=false;ac.removeAllRanges();
for(var ab=0,Y=Z.length;ab<Y;++ab){if(ad||aa!==Z[ab]){ac.addRange(Z[ab])}else{ad=true
}}if(!ac.rangeCount){I(ac)}};if(f){a.removeRange=function(ac){if(this.docSelection.type==W){var aa=this.docSelection.createRange();
var Y=M(ac);var ag=c.getDocument(aa.item(0));var ae=c.getBody(ag).createControlRange();
var Z,af=false;for(var ab=0,ad=aa.length;ab<ad;++ab){Z=aa.item(ab);if(Z!==Y||af){ae.add(aa.item(ab))
}else{af=true}}ae.select();v(this)}else{B(this,ac)}}}else{a.removeRange=function(Y){B(this,Y)
}}var t;if(!w&&L&&g.features.implementsDomRange){t=function(Z){var Y=false;if(Z.anchorNode){Y=(c.comparePoints(Z.anchorNode,Z.anchorOffset,Z.focusNode,Z.focusOffset)==1)
}return Y};a.isBackwards=function(){return t(this)}}else{t=a.isBackwards=function(){return false
}}a.toString=function(){var aa=[];for(var Z=0,Y=this.rangeCount;Z<Y;++Z){aa[Z]=""+this._ranges[Z]
}return aa.join("")};function T(Z,Y){if(Z.anchorNode&&(c.getDocument(Z.anchorNode)!==c.getDocument(Y))){throw new P("WRONG_DOCUMENT_ERR")
}}a.collapse=function(Z,aa){T(this,Z);var Y=g.createRange(c.getDocument(Z));Y.collapseToPoint(Z,aa);
this.removeAllRanges();this.addRange(Y);this.isCollapsed=true};a.collapseToStart=function(){if(this.rangeCount){var Y=this._ranges[0];
this.collapse(Y.startContainer,Y.startOffset)}else{throw new P("INVALID_STATE_ERR")
}};a.collapseToEnd=function(){if(this.rangeCount){var Y=this._ranges[this.rangeCount-1];
this.collapse(Y.endContainer,Y.endOffset)}else{throw new P("INVALID_STATE_ERR")}};
a.selectAllChildren=function(Z){T(this,Z);var Y=g.createRange(c.getDocument(Z));Y.selectNodeContents(Z);
this.removeAllRanges();this.addRange(Y)};a.deleteFromDocument=function(){if(f&&O&&this.docSelection.type==W){var ac=this.docSelection.createRange();
var ab;while(ac.length){ab=ac.item(0);ac.remove(ab);ab.parentNode.removeChild(ab)
}this.refresh()}else{if(this.rangeCount){var Z=this.getAllRanges();this.removeAllRanges();
for(var aa=0,Y=Z.length;aa<Y;++aa){Z[aa].deleteContents()}this.addRange(Z[Y-1])}}};
a.getAllRanges=function(){return this._ranges.slice(0)};a.setSingleRange=function(Y){this.setRanges([Y])
};a.containsNode=function(ab,Z){for(var aa=0,Y=this._ranges.length;aa<Y;++aa){if(this._ranges[aa].containsNode(ab,Z)){return true
}}return false};a.toHtml=function(){var ab="";if(this.rangeCount){var Z=S.getRangeDocument(this._ranges[0]).createElement("div");
for(var aa=0,Y=this._ranges.length;aa<Y;++aa){Z.appendChild(this._ranges[aa].cloneContents())
}ab=Z.innerHTML}return ab};function u(ae){var ad=[];var ab=new A(ae.anchorNode,ae.anchorOffset);
var Z=new A(ae.focusNode,ae.focusOffset);var aa=(typeof ae.getName=="function")?ae.getName():"Selection";
if(typeof ae.rangeCount!="undefined"){for(var ac=0,Y=ae.rangeCount;ac<Y;++ac){ad[ac]=S.inspect(ae.getRangeAt(ac))
}}return"["+aa+"(Ranges: "+ad.join(", ")+")(anchor: "+ab.inspect()+", focus: "+Z.inspect()+"]"
}a.getName=function(){return"WrappedSelection"};a.inspect=function(){return u(this)
};a.detach=function(){this.win[V]=null;this.win=this.anchorNode=this.focusNode=null
};C.inspect=u;g.Selection=C;g.selectionPrototype=a;g.addCreateMissingNativeApiListener(function(Y){if(typeof Y.getSelection=="undefined"){Y.getSelection=function(){return g.getSelection(this)
}}Y=null})});rangy.createModule("SaveRestore",function(h,e){h.requireModules(["DomUtil","DomRange","WrappedRange"]);
var g=h.dom;var b="\ufeff";function n(p,o){return(o||document).getElementById(p)}function c(q,o){var r="selectionBoundary_"+(+new Date())+"_"+(""+Math.random()).slice(2);
var p;var t=g.getDocument(q.startContainer);var s=q.cloneRange();s.collapse(o);p=t.createElement("span");
p.id=r;p.style.lineHeight="0";p.style.display="none";p.className="rangySelectionBoundary";
p.appendChild(t.createTextNode(b));s.insertNode(p);s.detach();return p}function m(s,q,r,o){var p=n(r,s);
if(p){q[o?"setStartBefore":"setEndBefore"](p);p.parentNode.removeChild(p)}else{e.warn("Marker element has been removed. Cannot restore selection.")
}}function d(p,o){return o.compareBoundaryPoints(p.START_TO_START,p)}function f(v){v=v||window;
var x=v.document;if(!h.isSelectionValid(v)){e.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus.");
return}var p=h.getSelection(v);var o=p.getAllRanges();var t=[],r,w,s;o.sort(d);for(var q=0,u=o.length;
q<u;++q){s=o[q];if(s.collapsed){w=c(s,false);t.push({markerId:w.id,collapsed:true})
}else{w=c(s,false);r=c(s,true);t[q]={startMarkerId:r.id,endMarkerId:w.id,collapsed:false,backwards:o.length==1&&p.isBackwards()}
}}for(q=u-1;q>=0;--q){s=o[q];if(s.collapsed){s.collapseBefore(n(t[q].markerId,x))
}else{s.setEndBefore(n(t[q].endMarkerId,x));s.setStartAfter(n(t[q].startMarkerId,x))
}}p.setRanges(o);return{win:v,doc:x,rangeInfos:t,restored:false}}function a(y,q){if(!y.restored){var t=y.rangeInfos;
var p=h.getSelection(y.win);var o=[];for(var v=t.length,r=v-1,x,s;r>=0;--r){x=t[r];
s=h.createRange(y.doc);if(x.collapsed){var u=n(x.markerId,y.doc);if(u){u.style.display="inline";
var w=u.previousSibling;if(w&&w.nodeType==3){u.parentNode.removeChild(u);s.collapseToPoint(w,w.length)
}else{s.collapseBefore(u);u.parentNode.removeChild(u)}}else{e.warn("Marker element has been removed. Cannot restore selection.")
}}else{m(y.doc,s,x.startMarkerId,true);m(y.doc,s,x.endMarkerId,false)}if(v==1){s.normalizeBoundaries()
}o[r]=s}if(v==1&&q&&h.features.selectionHasExtend&&t[0].backwards){p.removeAllRanges();
p.addRange(o[0],true)}else{p.setRanges(o)}y.restored=true}}function k(q,p){var o=n(p,q);
if(o){o.parentNode.removeChild(o)}}function l(p){var s=p.rangeInfos;for(var r=0,o=s.length,q;
r<o;++r){q=s[r];if(q.collapsed){k(p.doc,q.markerId)}else{k(p.doc,q.startMarkerId);
k(p.doc,q.endMarkerId)}}}h.saveSelection=f;h.restoreSelection=a;h.removeMarkerElement=k;
h.removeMarkers=l});WYMeditor.editor.prototype.init=function(){var WymClass=false,SaxListener,prop,h,iframeHtml,boxHtml,aTools,sTools,oTool,sTool,i,aClasses,sClasses,oClass,sClass,aContainers,sContainers,sContainer,oContainer;
if(jQuery.browser.msie){WymClass=new WYMeditor.WymClassExplorer(this)}else{if(jQuery.browser.mozilla){WymClass=new WYMeditor.WymClassMozilla(this)
}else{if(jQuery.browser.opera){WymClass=new WYMeditor.WymClassOpera(this)}else{if(jQuery.browser.safari||jQuery.browser.webkit||jQuery.browser.chrome){WymClass=new WYMeditor.WymClassSafari(this)
}}}}if(WymClass===false){return}if(jQuery.isFunction(this._options.preInit)){this._options.preInit(this)
}this.parser=null;this.helper=null;SaxListener=new WYMeditor.XhtmlSaxListener();this.parser=new WYMeditor.XhtmlParser(SaxListener);
if(this._options.styles||this._options.stylesheet){this.configureEditorUsingRawCss()
}this.helper=new WYMeditor.XmlHelper();for(prop in WymClass){this[prop]=WymClass[prop]
}this._box=jQuery(this._element).hide().after(this._options.boxHtml).next().addClass("wym_box_"+this._index);
if(jQuery.isFunction(jQuery.fn.data)){jQuery.data(this._box.get(0),WYMeditor.WYM_INDEX,this._index);
jQuery.data(this._element.get(0),WYMeditor.WYM_INDEX,this._index)}h=WYMeditor.Helper;
iframeHtml=this._options.iframeHtml;iframeHtml=h.replaceAll(iframeHtml,WYMeditor.INDEX,this._index);
iframeHtml=h.replaceAll(iframeHtml,WYMeditor.IFRAME_BASE_PATH,this._options.iframeBasePath);
boxHtml=jQuery(this._box).html();boxHtml=h.replaceAll(boxHtml,WYMeditor.LOGO,this._options.logoHtml);
boxHtml=h.replaceAll(boxHtml,WYMeditor.TOOLS,this._options.toolsHtml);boxHtml=h.replaceAll(boxHtml,WYMeditor.CONTAINERS,this._options.containersHtml);
boxHtml=h.replaceAll(boxHtml,WYMeditor.CLASSES,this._options.classesHtml);boxHtml=h.replaceAll(boxHtml,WYMeditor.HTML,this._options.htmlHtml);
boxHtml=h.replaceAll(boxHtml,WYMeditor.IFRAME,iframeHtml);boxHtml=h.replaceAll(boxHtml,WYMeditor.STATUS,this._options.statusHtml);
aTools=eval(this._options.toolsItems);sTools="";for(i=0;i<aTools.length;i+=1){oTool=aTools[i];
sTool="";if(oTool.name&&oTool.title){sTool=this._options.toolsItemHtml}sTool=h.replaceAll(sTool,WYMeditor.TOOL_NAME,oTool.name);
sTool=h.replaceAll(sTool,WYMeditor.TOOL_TITLE,this._options.stringDelimiterLeft+oTool.title+this._options.stringDelimiterRight);
sTool=h.replaceAll(sTool,WYMeditor.TOOL_CLASS,oTool.css);sTools+=sTool}boxHtml=h.replaceAll(boxHtml,WYMeditor.TOOLS_ITEMS,sTools);
aClasses=eval(this._options.classesItems);sClasses="";for(i=0;i<aClasses.length;i+=1){oClass=aClasses[i];
sClass="";if(oClass.name&&oClass.title){sClass=this._options.classesItemHtml}sClass=h.replaceAll(sClass,WYMeditor.CLASS_NAME,oClass.name);
sClass=h.replaceAll(sClass,WYMeditor.CLASS_TITLE,oClass.title);sClasses+=sClass}boxHtml=h.replaceAll(boxHtml,WYMeditor.CLASSES_ITEMS,sClasses);
aContainers=eval(this._options.containersItems);sContainers="";for(i=0;i<aContainers.length;
i+=1){oContainer=aContainers[i];sContainer="";if(oContainer.name&&oContainer.title){sContainer=this._options.containersItemHtml
}sContainer=h.replaceAll(sContainer,WYMeditor.CONTAINER_NAME,oContainer.name);sContainer=h.replaceAll(sContainer,WYMeditor.CONTAINER_TITLE,this._options.stringDelimiterLeft+oContainer.title+this._options.stringDelimiterRight);
sContainer=h.replaceAll(sContainer,WYMeditor.CONTAINER_CLASS,oContainer.css);sContainers+=sContainer
}boxHtml=h.replaceAll(boxHtml,WYMeditor.CONTAINERS_ITEMS,sContainers);boxHtml=this.replaceStrings(boxHtml);
jQuery(this._box).html(boxHtml);jQuery(this._box).find(this._options.htmlSelector).hide();
this.documentStructureManager=new WYMeditor.DocumentStructureManager(this,this._options.structureRules.defaultRootContainer);
this.loadSkin()};WYMeditor.editor.prototype.bindEvents=function(){var wym=this,$html_val;
jQuery(this._box).find(this._options.toolSelector).click(function(){wym._iframe.contentWindow.focus();
wym.exec(jQuery(this).attr(WYMeditor.NAME));return false});jQuery(this._box).find(this._options.containerSelector).click(function(){wym.container(jQuery(this).attr(WYMeditor.NAME));
return false});$html_val=jQuery(this._box).find(this._options.htmlValSelector);$html_val.keyup(function(){jQuery(wym._doc.body).html(jQuery(this).val())
});$html_val.focus(function(){jQuery(this).toggleClass("hasfocus")});$html_val.blur(function(){jQuery(this).toggleClass("hasfocus")
});jQuery(this._box).find(this._options.classSelector).click(function(){var aClasses=eval(wym._options.classesItems),sName=jQuery(this).attr(WYMeditor.NAME),oClass=WYMeditor.Helper.findByName(aClasses,sName),jqexpr;
if(oClass){jqexpr=oClass.expr;wym.toggleClass(sName,jqexpr)}wym._iframe.contentWindow.focus();
return false});jQuery(this._options.updateSelector).bind(this._options.updateEvent,function(){wym.update()
})};WYMeditor.editor.prototype.ready=function(){return this._doc!==null};WYMeditor.editor.prototype.box=function(){return this._box
};WYMeditor.editor.prototype._html=function(a){if(typeof a==="string"){jQuery(this._doc.body).html(a);
this.update()}else{return jQuery(this._doc.body).html()}};WYMeditor.editor.prototype.html=function(a){WYMeditor.console.warn("The function WYMeditor.editor.html() is deprecated. Use either WYMeditor.editor.xhtml() or WYMeditor.editor._html() instead.");
if(typeof a==="string"){this._html(a)}else{return this._html()}};WYMeditor.editor.prototype.xhtml=function(){return this.parser.parse(this._html())
};WYMeditor.editor.prototype.exec=function(c){var a,b,d=this;switch(c){case WYMeditor.CREATE_LINK:a=this.container();
if(a||this._selected_image){this.dialog(WYMeditor.DIALOG_LINK)}break;case WYMeditor.INSERT_IMAGE:this.dialog(WYMeditor.DIALOG_IMAGE);
break;case WYMeditor.INSERT_TABLE:this.dialog(WYMeditor.DIALOG_TABLE);break;case WYMeditor.PASTE:this.dialog(WYMeditor.DIALOG_PASTE);
break;case WYMeditor.TOGGLE_HTML:this.update();this.toggleHtml();break;case WYMeditor.PREVIEW:this.dialog(WYMeditor.PREVIEW,this._options.dialogFeaturesPreview);
break;case WYMeditor.INSERT_ORDEREDLIST:this.insertOrderedlist();break;case WYMeditor.INSERT_UNORDEREDLIST:this.insertUnorderedlist();
break;case WYMeditor.INDENT:this.indent();break;case WYMeditor.OUTDENT:this.outdent();
break;default:b=false;jQuery.each(this._options.customCommands,function(){if(c===this.name){b=true;
this.run.apply(d);return false}});if(!b){this._exec(c)}break}};WYMeditor.editor.prototype.selection=function(){if(window.rangy&&!rangy.initialized){rangy.init()
}var a=this._iframe,b=rangy.getIframeSelection(a);return b};WYMeditor.editor.prototype.selected=function(){var d=this.selection(),b=d.focusNode,a;
if(b){if(jQuery.browser.msie){var e=b.tagName&&b.tagName.toLowerCase()==="body";var c=b.nodeName==="#text";
if(d.isCollapsed&&(e||c)){a=this._iframe.contentWindow.document.caretPos;if(a&&a.parentElement){b=a.parentElement()
}}}if(b.nodeName==="#text"){return b.parentNode}else{return b}}else{return null}};
WYMeditor.editor.prototype.selection_collapsed=function(){var a=this.selection(),b=false;
jQuery.each(a.getAllRanges(),function(){if(this.collapsed){b=true;return false}});
return b};WYMeditor.editor.prototype.selected_contains=function(a){var c=this.selection(),b=[];
jQuery.each(c.getAllRanges(),function(){jQuery.each(this.getNodes(),function(){if(jQuery(this).is(a)){b.push(this)
}})});return b};WYMeditor.editor.prototype.selected_parents_contains=function(a){var c=jQuery([]),b=jQuery(this.selected());
if(b.is(a)){c=c.add(b)}c=c.add(b.parents(a));return c};WYMeditor.editor.prototype.container=function(a){if(typeof(a)==="undefined"){return this.selected()
}var d=null,e,k,f,c,g,b,h;if(a.toLowerCase()===WYMeditor.TH){d=this.container();switch(d.tagName.toLowerCase()){case WYMeditor.TD:case WYMeditor.TH:break;
default:aTypes=[WYMeditor.TD,WYMeditor.TH];d=this.findUp(this.container(),aTypes);
break}if(d!==null){a=WYMeditor.TD;if(d.tagName.toLowerCase()===WYMeditor.TD){a=WYMeditor.TH
}this.switchTo(d,a,false);this.update()}}else{aTypes=[WYMeditor.P,WYMeditor.DIV,WYMeditor.H1,WYMeditor.H2,WYMeditor.H3,WYMeditor.H4,WYMeditor.H5,WYMeditor.H6,WYMeditor.PRE,WYMeditor.BLOCKQUOTE];
d=this.findUp(this.container(),aTypes);if(d){if(a.toLowerCase()===WYMeditor.BLOCKQUOTE){f=this.findUp(this.container(),WYMeditor.BLOCKQUOTE);
if(f===null){k=this._doc.createElement(a);d.parentNode.insertBefore(k,d);k.appendChild(d);
this.setFocusToNode(k.firstChild)}else{c=f.childNodes;g=c.length;if(g>0){b=c.item(0)
}for(h=0;h<g;h+=1){f.parentNode.insertBefore(c.item(0),f)}f.parentNode.removeChild(f);
if(b){this.setFocusToNode(b)}}}else{this.switchTo(d,a)}this.update()}}return false
};WYMeditor.editor.prototype.isForbiddenMainContainer=function(a){return jQuery.inArray(a.toLowerCase(),WYMeditor.FORBIDDEN_MAIN_CONTAINERS)>-1
};WYMeditor.editor.prototype.keyCanCreateBlockElement=function(a){return jQuery.inArray(a,WYMeditor.POTENTIAL_BLOCK_ELEMENT_CREATION_KEYS)>-1
};WYMeditor.editor.prototype.toggleClass=function(c,b){var a=null;if(this._selected_image){a=this._selected_image
}else{a=jQuery(this.selected())}a=jQuery(a).parentsOrSelf(b);jQuery(a).toggleClass(c);
if(!jQuery(a).attr(WYMeditor.CLASS)){jQuery(a).removeAttr(this._class)}};WYMeditor.editor.prototype.findUp=function(d,c){if(typeof(d)==="undefined"||d===null){return null
}if(d.nodeName==="#text"){d=d.parentNode}var e=d.tagName.toLowerCase(),b,a;if(typeof(c)===WYMeditor.STRING){while(e!==c&&e!==WYMeditor.BODY){d=d.parentNode;
e=d.tagName.toLowerCase()}}else{b=false;while(!b&&e!==WYMeditor.BODY){for(a=0;a<c.length;
a+=1){if(e===c[a]){b=true;break}}if(!b){d=d.parentNode;if(d===null){return null}e=d.tagName.toLowerCase()
}}}if(e===WYMeditor.BODY){return null}return d};WYMeditor.editor.prototype.switchTo=function(f,g,b){var e=this._doc.createElement(g),d=jQuery(f).html(),a=f.attributes,c;
if(!b){for(c=0;c<a.length;++c){e.setAttribute(a.item(c).nodeName,a.item(c).nodeValue)
}}e.innerHTML=d;f.parentNode.replaceChild(e,f);this.setFocusToNode(e)};WYMeditor.editor.prototype.replaceStrings=function(sVal){var key;
if(!WYMeditor.STRINGS[this._options.lang]){try{eval(jQuery.ajax({url:this._options.langPath+this._options.lang+".js",async:false}).responseText)
}catch(e){WYMeditor.console.error("WYMeditor: error while parsing language file.");
return sVal}}for(key in WYMeditor.STRINGS[this._options.lang]){if(WYMeditor.STRINGS[this._options.lang].hasOwnProperty(key)){sVal=WYMeditor.Helper.replaceAll(sVal,this._options.stringDelimiterLeft+key+this._options.stringDelimiterRight,WYMeditor.STRINGS[this._options.lang][key])
}}return sVal};WYMeditor.editor.prototype.encloseString=function(a){return this._options.stringDelimiterLeft+a+this._options.stringDelimiterRight
};WYMeditor.editor.prototype.status=function(a){jQuery(this._box).find(this._options.statusSelector).html(a)
};WYMeditor.editor.prototype.update=function(){var a;a=this.xhtml();jQuery(this._element).val(a);
jQuery(this._box).find(this._options.htmlValSelector).not(".hasfocus").val(a);this.fixBodyHtml()
};WYMeditor.editor.prototype.fixBodyHtml=function(){this.spaceBlockingElements();
this.fixDoubleBr()};WYMeditor.editor.prototype.spaceBlockingElements=function(){var d=WYMeditor.DocumentStructureManager.CONTAINERS_BLOCKING_NAVIGATION.join(", "),f=jQuery(this._doc).find("body.wym_iframe"),b=f.children(),c,e,k,a,h,g;
if(jQuery.browser.mozilla){c='<br class="'+WYMeditor.BLOCKING_ELEMENT_SPACER_CLASS+" "+WYMeditor.EDITOR_ONLY_CLASS+'" _moz_editor_bogus_node="TRUE" _moz_dirty=""/>'
}else{c='<br class="'+WYMeditor.BLOCKING_ELEMENT_SPACER_CLASS+" "+WYMeditor.EDITOR_ONLY_CLASS+'"/>'
}if(b.length>0){e=jQuery(b[0]);k=jQuery(b[b.length-1]);if(e.is(d)){e.before(c)}if(k.is(d)&&!(jQuery.browser.msie&&jQuery.browser.version<"7.0")){k.after(c)
}}a=this._getBlockSepSelector();f.find(a).before(c);h=this._getBlockInListSepSelector();
g=f.find(h);g.each(function(){var l=jQuery(this);if(!l.next(d).length&&!l.next(WYMeditor.BR).length){l.after(c)
}})};WYMeditor.editor.prototype._getBlockSepSelector=function(){if(typeof(this._blockSpacersSel)!=="undefined"){return this._blockSpacersSel
}var c=this,d=[],b=WYMeditor.DocumentStructureManager.CONTAINERS_BLOCKING_NAVIGATION,a;
a=jQuery.grep(c.documentStructureManager.structureRules.validRootContainers,function(e){return jQuery.inArray(e,b)===-1
});jQuery.each(b,function(e,f){jQuery.each(b,function(h,g){d.push(f+" + "+g)})});
jQuery.each(b,function(e,f){jQuery.each(a,function(h,g){d.push(f+" + "+g);d.push(g+" + "+f)
})});this._blockSpacersSel=d.join(", ");return this._blockSpacersSel};WYMeditor.editor.prototype._getBlockInListSepSelector=function(){if(typeof(this._blockInListSpacersSel)!=="undefined"){return this._blockInListSpacersSel
}var a=[];jQuery.each(WYMeditor.LIST_TYPE_ELEMENTS,function(b,c){jQuery.each(WYMeditor.BLOCKING_ELEMENTS,function(e,d){a.push(c+" "+d)
})});this._blockInListSpacersSel=a.join(", ");return this._blockInListSpacersSel};
WYMeditor.editor.prototype.fixDoubleBr=function(){var b=jQuery(this._doc).find("body.wym_iframe"),c,a=WYMeditor.BLOCKING_ELEMENTS.join(", ");
b.children("br + br").filter(":not(pre br)").remove();b.find("p + br").next("p").prev("br").remove();
c=b.find("p + br").slice(-1);if(c.length>0){if(c.next().length===0){c.remove()}}};
WYMeditor.editor.prototype.dialog=function(l,c,f){var a=c||this._wym._options.dialogFeatures,d=window.open("","dialog",a),b,e=WYMeditor.Helper,g,k;
if(d){b="";switch(l){case (WYMeditor.DIALOG_LINK):b=this._options.dialogLinkHtml;
break;case (WYMeditor.DIALOG_IMAGE):b=this._options.dialogImageHtml;break;case (WYMeditor.DIALOG_TABLE):b=this._options.dialogTableHtml;
break;case (WYMeditor.DIALOG_PASTE):b=this._options.dialogPasteHtml;break;case (WYMeditor.PREVIEW):b=this._options.dialogPreviewHtml;
break;default:b=f;break}g=this._options.dialogHtml;g=e.replaceAll(g,WYMeditor.BASE_PATH,this._options.basePath);
g=e.replaceAll(g,WYMeditor.DIRECTION,this._options.direction);g=e.replaceAll(g,WYMeditor.CSS_PATH,this._options.skinPath+WYMeditor.SKINS_DEFAULT_CSS);
g=e.replaceAll(g,WYMeditor.WYM_PATH,this._options.wymPath);g=e.replaceAll(g,WYMeditor.JQUERY_PATH,this._options.jQueryPath);
g=e.replaceAll(g,WYMeditor.DIALOG_TITLE,this.encloseString(l));g=e.replaceAll(g,WYMeditor.DIALOG_BODY,b);
g=e.replaceAll(g,WYMeditor.INDEX,this._index);g=this.replaceStrings(g);k=d.document;
k.write(g);k.close()}};WYMeditor.editor.prototype.toggleHtml=function(){jQuery(this._box).find(this._options.htmlSelector).toggle()
};WYMeditor.editor.prototype.uniqueStamp=function(){var a=new Date();return"wym-"+a.getTime()
};WYMeditor.editor.prototype._handleMultilineBlockContainerPaste=function(b,o,f,n){var e,k,h,c,d,m,p,l,a,g;
$insertAfter=jQuery(a);k="p";if(o.is("li")){k="li"}f.splitBoundaries();a=b.findUp(f.startContainer,["p","h1","h2","h3","h4","h5","h6","li"]);
g=a.tagName;h=[];c=[];jQuery(a).contents().each(function(q,r){d=f.compareNode(r);
if(d===f.NODE_BEFORE||(d===f.NODE_BEFORE_AND_AFTER&&f.startOffset===f.startContainer.length)){h.push(r)
}else{c.push(r)}});for(e=0;e<h.length;e++){jQuery(h[e]).remove()}for(e=0;e<c.length;
e++){jQuery(c[e]).remove()}if(h.length>0){jQuery(a).prepend(h)}if(c.length>0){m=jQuery("<"+g+"></"+g+">",b._doc);
m.insertAfter(jQuery(a));m.append(c)}p=n.splice(0,1)[0];l=p.split(WYMeditor.NEWLINE).join("<br />");
jQuery(a).html(jQuery(a).html()+l);$insertAfter=jQuery(a);for(e=0;e<n.length;e++){html="<"+k+">"+(n[e].split(WYMeditor.NEWLINE).join("<br />"))+"</"+k+">";
$insertAfter=jQuery(html,b._doc).insertAfter($insertAfter)}};WYMeditor.editor.prototype.paste=function(n){var b=this.selected(),q,m="",o,g,h,f,d=false,c,e,a,k,p;
a=this;c=rangy.getIframeSelection(a._iframe);k=c.getRangeAt(0);q=jQuery(b);k.collapse(true);
paragraphStrings=n.split(new RegExp(WYMeditor.NEWLINE+"{2,}","g"));if(paragraphStrings.length===1){d=true
}if(typeof b==="undefined"||(b&&b.tagName.toLowerCase()===WYMeditor.BODY)){if(d){o=jQuery("<p>"+paragraphStrings[0]+"</p>",this._doc).appendTo(this._doc.body)
}else{blockSplitter="p";for(h=paragraphStrings.length-1;h>=0;h-=1){m="<"+blockSplitter+">"+(paragraphStrings[h].split(WYMeditor.NEWLINE).join("<br />"))+"</"+blockSplitter+">";
p=jQuery(m,a._doc);for(j=p.length-1;j>=0;j--){k.insertNode(p[j])}}}}else{if(d||q.is("pre")){e=this._doc.createTextNode(n);
k.insertNode(e)}else{if(q.is("p,h1,h2,h3,h4,h5,h6,li")){a._handleMultilineBlockContainerPaste(a,q,k,paragraphStrings)
}else{textNodesToInsert=n.split(WYMeditor.NEWLINE);for(h=textNodesToInsert.length-1;
h>=0;h-=1){e=this._doc.createTextNode(textNodesToInsert[h]);k.insertNode(e);if(h>0){k.insertNode(jQuery("<br />",a._doc).get(0))
}}}}}};WYMeditor.editor.prototype.insert=function(b){var c=this._iframe.contentWindow.getSelection(),a,d;
if(c.focusNode!==null){a=c.getRangeAt(0);d=a.createContextualFragment(b);a.deleteContents();
a.insertNode(d)}else{this.paste(b)}};WYMeditor.editor.prototype.wrap=function(b,a){this.insert(b+this._iframe.contentWindow.getSelection().toString()+a)
};WYMeditor.editor.prototype.unwrap=function(){this.insert(this._iframe.contentWindow.getSelection().toString())
};WYMeditor.editor.prototype.setFocusToNode=function(d,b){var a=rangy.createRange(this._doc),c=rangy.getIframeSelection(this._iframe);
b=b||false;a.selectNodeContents(d);a.collapse(b);c.setSingleRange(a)};WYMeditor.editor.prototype.addCssRules=function(e,c){var b=e.styleSheets[0],a,d;
if(b){for(a=0;a<c.length;a+=1){d=c[a];if(d.name&&d.css){this.addCssRule(b,d)}}}};
WYMeditor.editor.prototype.splitListItemContents=function(d){var f,c,b,a=false,e={itemContents:[],sublistContents:[]};
f=d.contents();for(c=0;c<f.length;c++){b=f.get(c);if(a||jQuery(b).is("ol,ul")){a=true;
e.sublistContents.push(b)}else{e.itemContents.push(b)}}return e};WYMeditor.editor.prototype.joinAdjacentLists=function(c,b){var a;
if(typeof c==="undefined"||typeof b==="undefined"){return}if(c.nextSibling!==b||c.tagName.toLowerCase()!==b.tagName.toLowerCase()){return
}a=jQuery(b).contents();a.unwrap();a.detach();jQuery(c).append(a)};WYMeditor.editor.prototype._indentSingleItem=function(b){var a=this,m,l,p,g,k,f,o,e,n,h,d,c;
m=jQuery(b);l=m.parent()[0].tagName.toLowerCase();k=a.splitListItemContents(m);o=jQuery(k.sublistContents);
f=jQuery(k.itemContents);e=m.prev().filter("li");if(e.length===0){p='<li class="spacer_li"></li>';
m.before(p);e=m.prev()}n=e.contents().last().filter("ol,ul");if(n.length>0){n.append(m);
o.detach();e.append(o);h=o.first();a.joinAdjacentLists(n.get(0),h.get(0))}else{if(o.length>0){o.detach();
e.append(o);n=o.first()}else{g="<"+l+"></"+l+">";e.append(g);n=e.contents().last()
}n.prepend(m)}if(m.next().is(".spacer_li")){d=m.next(".spacer_li");c=d.contents();
c.detach();m.append(c);d.remove()}};WYMeditor.editor.prototype._outdentSingleItem=function(b){var a=this,d,l,h,k,e,n,m,g,c,f,o;
d=jQuery(b);l=d.parent()[0].tagName.toLowerCase();if(!d.parent().parent().is("ol,ul,li")){return
}if(!d.parent().parent().is("li")){WYMeditor.console.log("Attempting to fix invalid list nesting before outdenting.");
a.correctInvalidListNesting(b)}k=a.splitListItemContents(d);n=jQuery(k.sublistContents);
e=jQuery(k.itemContents);m=d.parent().parent("li");if(m.length===0){WYMeditor.console.error("Invalid list. No parentLi found, so aborting outdent");
return}g=d.parent();c=d.nextAllContents();f=g.nextAllContents();d.detach();m.after(d);
if(n.length>0){h="<"+l+'><li class="spacer_li"></li></'+l+">";d.append(h);o=d.children().last();
n.detach();o.children("li").append(n)}if(c.length>0){if(typeof o==="undefined"){h="<"+l+"></"+l+">";
d.append(h);o=d.children().last()}c.detach();o.append(c)}if(f.length>0){f.detach();
if(d.contents().length>0&&d.contents().last()[0].nodeType===WYMeditor.NODE.TEXT&&f[0].nodeType===WYMeditor.NODE.TEXT){d.append("<br />")
}d.append(f)}if(g.contents().length===0){g.remove()}if(m.contents().length===0){m.remove()
}};WYMeditor.editor.prototype.correctInvalidListNesting=function(e,d){var c=e,a,b;
if(typeof d==="undefined"){d=false}if(!c){return d}while(c.parentNode){a=c.parentNode;
if(a.nodeType!==WYMeditor.NODE.ELEMENT){break}b=a.tagName.toLowerCase();if(b!=="ol"&&b!=="ul"&&b!=="li"){break
}c=a}if(jQuery(c).is("li")){WYMeditor.console.log("Correcting orphaned root li before correcting invalid list nesting.");
this._correctOrphanedListItem(c);return this.correctInvalidListNesting(c,true)}if(!jQuery(c).is("ol,ul")){WYMeditor.console.error("Can't correct invalid list nesting. No root list found");
return d}return this._correctInvalidListNesting(c,d)};WYMeditor.editor.prototype._correctOrphanedListItem=function(f){var d,e,a=jQuery(),c,b;
d=jQuery(f).prevContentsUntil(":not(li)");e=jQuery(f).nextContentsUntil(":not(li)");
a=a.add(d);a=a.add(f);a=a.add(e);b=a[0].previousSibling;if(b&&jQuery(b).is("ol,ul")){c=b
}else{a.before("<ol></ol>");c=a.prev()[0]}jQuery(c).append(a)};WYMeditor.editor.prototype._correctInvalidListNesting=function(h,l){var g=h,e=h,c=false,a,d,p,f,k,b,m,n,o='<li class="spacer_li"></li>';
if(typeof l!=="undefined"){c=l}while(e){if(e._wym_visited){e._wym_visited=false;if(e===g){break
}if(e.previousSibling){e=e.previousSibling}else{e=e.parentNode}}else{if(e!==g&&!jQuery(e).is("li")){k=e;
while(k.parentNode){k=k.parentNode;if(jQuery(k).is("li")){break}if(k.nodeType!==WYMeditor.NODE.ELEMENT){break
}f=k.tagName.toLowerCase();if(f==="ol"||f==="ul"){WYMeditor.console.log("Fixing orphaned list content");
c=true;b=[e];a=e;m=null;while(a.previousSibling){a=a.previousSibling;if(jQuery(a).is("li")){m=a;
break}b.push(a)}b.reverse();if(!m&&b.length===1){if(jQuery(e.nextSibling).is("li")){m=e.nextSibling
}}if(!m){jQuery(b[0]).before(o);m=jQuery(b[0]).prev()[0]}n=jQuery(m).contents().last();
if(n.length===1&&n[0].nodeType===WYMeditor.NODE.TEXT){if(b[0].nodeType===WYMeditor.NODE.TEXT){jQuery(m).append("<br />")
}}jQuery(m).append(jQuery(b));break}}}if(e.lastChild){e._wym_visited=true;e=e.lastChild
}else{if(e.previousSibling){e=e.previousSibling}else{e=e.parentNode}}}}return c};
WYMeditor.editor.prototype.getCommonParentList=function(d){var c,a,b;d=jQuery(d).filter("li");
if(d.length===0){return null}c=d[0];a=jQuery(c).parent("ol,ul");if(a.length===0){return null
}b=a[0];jQuery(d).each(function(e,f){a=jQuery(f).parent("ol,ul");if(a.length===0||a[0]!==b){return null
}});return b};WYMeditor.editor.prototype._getSelectedListItems=function(e){var a=this,l,m,b,c=[],n=[],k,h,g,d,f;
k=function(p){var o;if(rangy.dom.isCharacterDataNode(p)){return p}try{o=m.containsNodeText(p)
}catch(q){return true}if(o===true){return true}};for(l=0;l<e.rangeCount;l++){m=e.getRangeAt(l);
if(m.collapsed===true){b=a.findUp(m.startContainer,"li");if(b){c=c.concat([b])}}else{c=c.concat(m.getNodes([],k));
h=[];for(j=0;j<c.length;j++){g=c[j];if(!jQuery(g).is("li,ol,ul")){while(g.parentNode){g=g.parentNode;
if(jQuery(g).is("li")){h.push(g);break}}}}for(j=0;j<h.length;j++){if(jQuery.inArray(h[j],c)===-1){c.push(h[j])
}}}}for(l=0;l<c.length;l++){if(c[l].nodeType===WYMeditor.NODE.ELEMENT&&c[l].tagName.toLowerCase()===WYMeditor.LI){n.push(c[l])
}}return n};WYMeditor.editor.prototype.indent=function(){var d=this._wym,c=rangy.getIframeSelection(this._iframe),b,a,e;
e=function(){var g=d.selected(),f=d.findUp(g,["ol","ul","li"]);return d.correctInvalidListNesting(f)
};if(d.restoreSelectionAfterManipulation(e)){return true}c=rangy.getIframeSelection(this._iframe);
b=d._getSelectedListItems(c);if(b.length===0){return false}a=d.getCommonParentList(b);
if(a===null){return false}e=function(){var f=false;for(i=0;i<b.length;i++){d._indentSingleItem(b[i]);
f=true}return f};return d.restoreSelectionAfterManipulation(e)};WYMeditor.editor.prototype.outdent=function(){var d=this._wym,c=rangy.getIframeSelection(this._iframe),b,a,e;
e=function(){var g=d.selected(),f=d.findUp(g,["ol","ul","li"]);return d.correctInvalidListNesting(f)
};if(d.restoreSelectionAfterManipulation(e)){return true}c=rangy.getIframeSelection(this._iframe);
b=d._getSelectedListItems(c);if(b.length===0){return false}a=d.getCommonParentList(b);
if(a===null){return false}e=function(){var f=false;for(i=0;i<b.length;i++){d._outdentSingleItem(b[i]);
f=true}return f};return d.restoreSelectionAfterManipulation(e)};WYMeditor.editor.prototype.restoreSelectionAfterManipulation=function(f){var b=rangy.getIframeSelection(this._iframe),a=rangy.saveSelection(rangy.dom.getIframeWindow(this._iframe)),d=true;
try{d=f();if(d){rangy.restoreSelection(a)}else{rangy.removeMarkers(a)}}catch(c){WYMeditor.console.error("Error during manipulation");
WYMeditor.console.error(c);rangy.removeMarkers(a)}return d};WYMeditor.editor.prototype.insertOrderedlist=function(){var a=this,b;
b=function(){var d=a.selected(),c=a.findUp(d,["ol","ul","li"]);return a.correctInvalidListNesting(c)
};if(a.restoreSelectionAfterManipulation(b)){return true}b=function(){return a._insertList("ol")
};return a.restoreSelectionAfterManipulation(b)};WYMeditor.editor.prototype.insertUnorderedlist=function(){var a=this,b;
b=function(){var d=a.selected(),c=a.findUp(d,["ol","ul","li"]);return a.correctInvalidListNesting(c)
};if(a.restoreSelectionAfterManipulation(b)){return true}b=function(){return a._insertList("ul")
};return a.restoreSelectionAfterManipulation(b)};WYMeditor.editor.prototype._insertList=function(c){var g=this._wym,f=rangy.getIframeSelection(this._iframe),e,b,d,a;
e=g._getSelectedListItems(f);if(e.length!==0){b=g.getCommonParentList(e);if(b){this._changeListType(b,c);
return true}else{return false}}d=this.selected();a=this.findUp(d,WYMeditor.POTENTIAL_LIST_ELEMENTS);
if(a){this._convertToList(a,c);return true}return false};WYMeditor.editor.prototype._changeListType=function(b,a){return WYMeditor.changeNodeType(b,a)
};WYMeditor.editor.prototype._convertToList=function(d,b){var c=jQuery(d),e,a;e="<"+b+"><li></li></"+b+">";
if(this.findUp(d,WYMeditor.MAIN_CONTAINERS)===d){c.wrapInner(e);a=c.children();a.unwrap();
return a.get(0)}c.wrapInner(e);a=c.children();return a.get(0)};WYMeditor.editor.prototype.insertTable=function(n,d,m,f){if((n<=0)||(d<=0)){return
}var k=this._doc.createElement(WYMeditor.TABLE),l=null,c=null,a,h,g,b,e;a=k.createCaption();
a.innerHTML=m;for(h=0;h<n;h+=1){l=k.insertRow(h);for(g=0;g<d;g+=1){l.insertCell(g)
}}if(f!==""){jQuery(k).attr("summary",f)}b=jQuery(this.findUp(this.container(),WYMeditor.POTENTIAL_TABLE_INSERT_ELEMENTS)).get(0);
if(!b||!b.parentNode){jQuery(this._doc.body).append(k)}else{if(jQuery.inArray(b.nodeName.toLowerCase(),WYMeditor.INLINE_TABLE_INSERTION_ELEMENTS)>-1){e=this.selection().focusNode;
if(jQuery.inArray(e.nodeName.toLowerCase(),WYMeditor.SELECTABLE_TABLE_ELEMENTS)>-1||jQuery.inArray(e.parentNode.nodeName.toLowerCase(),WYMeditor.SELECTABLE_TABLE_ELEMENTS)>-1){while(e.nodeName.toLowerCase()!==WYMeditor.TABLE){e=e.parentNode
}}if(e.nodeName.toLowerCase()===WYMeditor.LI){jQuery(e).append(k)}else{jQuery(e).after(k)
}}else{jQuery(b).after(k)}}this.afterInsertTable(k);this.fixBodyHtml();return k};
WYMeditor.editor.prototype.afterInsertTable=function(a){};WYMeditor.editor.prototype.configureEditorUsingRawCss=function(){var a=new WYMeditor.WymCssParser();
if(this._options.stylesheet){a.parse(jQuery.ajax({url:this._options.stylesheet,async:false}).responseText)
}else{a.parse(this._options.styles,false)}if(this._options.classesItems.length===0){this._options.classesItems=a.css_settings.classesItems
}if(this._options.editorStyles.length===0){this._options.editorStyles=a.css_settings.editorStyles
}if(this._options.dialogStyles.length===0){this._options.dialogStyles=a.css_settings.dialogStyles
}};WYMeditor.editor.prototype.listen=function(){var a=this;jQuery(this._doc.body).bind("mousedown",function(b){a.mousedown(b)
})};WYMeditor.editor.prototype.mousedown=function(a){this._selected_image=null;if(a.target.tagName.toLowerCase()===WYMeditor.IMG){this._selected_image=a.target
}};WYMeditor.loadCss=function(a){var c=document.createElement("link"),b;c.rel="stylesheet";
c.href=a;b=jQuery("head").get(0);b.appendChild(c)};WYMeditor.editor.prototype.loadSkin=function(){if(this._options.loadSkin&&!WYMeditor.SKINS[this._options.skin]){var found=false,rExp=new RegExp(this._options.skin+"/"+WYMeditor.SKINS_DEFAULT_CSS+"$");
jQuery("link").each(function(){if(this.href.match(rExp)){found=true}});if(!found){WYMeditor.loadCss(this._options.skinPath+WYMeditor.SKINS_DEFAULT_CSS)
}}jQuery(this._box).addClass("wym_skin_"+this._options.skin);if(this._options.initSkin&&!WYMeditor.SKINS[this._options.skin]){eval(jQuery.ajax({url:this._options.skinPath+WYMeditor.SKINS_DEFAULT_JS,async:false}).responseText)
}if(WYMeditor.SKINS[this._options.skin]&&WYMeditor.SKINS[this._options.skin].init){WYMeditor.SKINS[this._options.skin].init(this)
}};WYMeditor.DocumentStructureManager=function(a,b){this._wym=a;this.structureRules=WYMeditor.DocumentStructureManager.DEFAULTS;
this.setDefaultRootContainer(b)};jQuery.extend(WYMeditor.DocumentStructureManager,{VALID_DEFAULT_ROOT_CONTAINERS:["p","div"],DEFAULT_ROOT_CONTAINER_TITLES:{p:"Paragraph",div:"Division"},CONTAINERS_BLOCKING_NAVIGATION:["table","blockquote","pre"],DEFAULTS:{defaultRootContainer:"p",notValidRootContainers:["div"],validRootContainers:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote","table","ol","ul"],convertIfRootContainers:["div"],validListConversionTargetContainers:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote","td","th"],wrapContentsInList:["td","th"]}});
WYMeditor.DocumentStructureManager.prototype.setDefaultRootContainer=function(c){var a,b;
if(this.structureRules.defaultRootContainer===c){return}a=WYMeditor.DocumentStructureManager.VALID_DEFAULT_ROOT_CONTAINERS;
b=jQuery.inArray(c,a);if(b===-1){throw new Error("a defaultRootContainer of '"+c+"' is not supported")
}this.structureRules.defaultRootContainer=c;this.structureRules.notValidRootContainers=WYMeditor.DocumentStructureManager.VALID_DEFAULT_ROOT_CONTAINERS;
this.structureRules.notValidRootContainers.splice(b,1);this.adjustDefaultRootContainerUI()
};WYMeditor.DocumentStructureManager.prototype.adjustDefaultRootContainerUI=function(){var a=this._wym,g=this.structureRules.defaultRootContainer,c,k,f,d,b,h,e;
c=jQuery(a._box).find(a._options.containersSelector).find("li");b=true;for(e=0;e<c.length;
++e){k=c.eq(e).find("a");d=k.attr("name").toLowerCase();if(jQuery.inArray(d,this.structureRules.notValidRootContainers)>-1){c.eq(e).remove()
}if(d===g){b=false}}if(b){h=a._options.containersItemHtml;h=WYMeditor.Helper.replaceAll(h,WYMeditor.CONTAINER_NAME,g.toUpperCase());
h=WYMeditor.Helper.replaceAll(h,WYMeditor.CONTAINER_TITLE,WYMeditor.DocumentStructureManager.DEFAULT_ROOT_CONTAINER_TITLES[g]);
h=WYMeditor.Helper.replaceAll(h,WYMeditor.CONTAINER_CLASS,"wym_containers_"+g);f=jQuery(h);
c=jQuery(a._box).find(a._options.containersSelector).find("li");c.eq(0).before(f);
f.find("a").click(function(){a.container(jQuery(this).attr(WYMeditor.NAME));return false
})}};WYMeditor.WymClassExplorer=function(a){this._wym=a;this._class="className"};
WYMeditor.WymClassExplorer.prototype.initIframe=function(iframe){this._iframe=iframe;
this._doc=iframe.contentWindow.document;var styles=this._doc.styleSheets[0];var aCss=eval(this._options.editorStyles);
this.addCssRules(this._doc,aCss);this._doc.title=this._wym._index;jQuery("html",this._doc).attr("dir",this._options.direction);
jQuery(this._doc.body).html(this._wym._options.html);var wym=this;this._doc.body.onfocus=function(){wym._doc.designMode="on";
wym._doc=iframe.contentWindow.document};this._doc.onbeforedeactivate=function(){wym.saveCaret()
};jQuery(this._doc).bind("keyup",wym.keyup);var ieVersion=parseInt(jQuery.browser.version,10);
if(ieVersion>=8&&ieVersion<9){jQuery(this._doc).bind("keydown",function(){wym.fixBluescreenOfDeath()
})}this._doc.onkeyup=function(){wym.saveCaret()};this._doc.onclick=function(){wym.saveCaret()
};this._doc.body.onbeforepaste=function(){wym._iframe.contentWindow.event.returnValue=false
};this._doc.body.onpaste=function(){wym._iframe.contentWindow.event.returnValue=false;
wym.paste(window.clipboardData.getData("Text"))};if(this._initialized){if(jQuery.isFunction(this._options.preBind)){this._options.preBind(this)
}this._wym.bindEvents();if(jQuery.isFunction(this._options.postInit)){this._options.postInit(this)
}this.listen()}this._initialized=true;this._doc.designMode="on";try{this._doc=iframe.contentWindow.document
}catch(e){}};(function(a){WYMeditor.WymClassExplorer.prototype.loadSkin=function(){jQuery(this._box).find(this._options.containerSelector).attr("unselectable","on");
a.call(this)}}(WYMeditor.editor.prototype.loadSkin));WYMeditor.WymClassExplorer.prototype.fixBluescreenOfDeath=function(){var a=jQuery(this._doc).find("p").eq(0).position();
if(a!==null&&typeof a!=="undefined"&&a.left<0){jQuery(this._box).append('<br id="wym-bluescreen-bug-fix" />');
jQuery(this._box).find("#wym-bluescreen-bug-fix").remove()}};WYMeditor.WymClassExplorer.prototype._exec=function(a,b){if(b){this._doc.execCommand(a,false,b)
}else{this._doc.execCommand(a)}};WYMeditor.WymClassExplorer.prototype.saveCaret=function(){this._doc.caretPos=this._doc.selection.createRange()
};WYMeditor.WymClassExplorer.prototype.addCssRule=function(c,d){var b=d.name.split(","),a;
for(a=0;a<b.length;a++){c.addRule(b[a],d.css)}};WYMeditor.WymClassExplorer.prototype.insert=function(b){var a=this._doc.selection.createRange();
if(jQuery(a.parentElement()).parents().is(this._options.iframeBodySelector)){try{a.pasteHTML(b)
}catch(c){}}else{this.paste(b)}};WYMeditor.WymClassExplorer.prototype.wrap=function(d,b){var a=this._doc.selection.createRange();
if(jQuery(a.parentElement()).parents().is(this._options.iframeBodySelector)){try{a.pasteHTML(d+a.text+b)
}catch(c){}}};WYMeditor.WymClassExplorer.prototype.wrapWithContainer=function(c,f){var e=this._wym,d,b,a;
d=jQuery(c).wrap("<"+f+" />");b=rangy.getIframeSelection(e._iframe);a=rangy.createRange(e._doc);
a.selectNodeContents(d[0]);a.collapse();b.setSingleRange(a)};WYMeditor.WymClassExplorer.prototype.unwrap=function(){var a=this._doc.selection.createRange();
if(jQuery(a.parentElement()).parents().is(this._options.iframeBodySelector)){try{var c=a.text;
this._exec("Cut");a.pasteHTML(c)}catch(b){}}};WYMeditor.WymClassExplorer.prototype.keyup=function(c){var g=WYMeditor.INSTANCES[this.title],b,h,a,d,f,e=false;
a=g.documentStructureManager.structureRules.notValidRootContainers;h=g.documentStructureManager.structureRules.defaultRootContainer;
this._selected_image=null;if(!g.keyCanCreateBlockElement(c.which)&&c.which!==WYMeditor.KEY.CTRL&&c.which!==WYMeditor.KEY.COMMAND&&!c.metaKey&&!c.ctrlKey){b=g.selected();
selectedNode=g.selection().focusNode;if(b!==null){d=b.tagName.toLowerCase()}if(b.parentNode){f=b.parentNode.tagName.toLowerCase()
}if(g.isForbiddenMainContainer(d)){d=f;e=true}if(d===WYMeditor.BODY&&selectedNode.nodeName==="#text"){if(e){selectedNode=selectedNode.parentNode
}g.wrapWithContainer(selectedNode,h);g.fixBodyHtml()}if(jQuery.inArray(d,a)>-1&&f===WYMeditor.BODY){g.switchTo(b,h);
g.fixBodyHtml()}}if(g.keyCanCreateBlockElement(c.which)){b=g.selected();d=b.tagName.toLowerCase();
if(b.parentNode){f=b.parentNode.tagName.toLowerCase()}if(jQuery.inArray(d,a)>-1&&f===WYMeditor.BODY){g.switchTo(b,h)
}g.fixBodyHtml()}};WYMeditor.WymClassMozilla=function(a){this._wym=a;this._class="class"
};WYMeditor.WymClassMozilla.CELL_PLACEHOLDER='<br _moz_dirty="" />';WYMeditor.WymClassMozilla.NEEDS_CELL_FIX=parseInt(jQuery.browser.version,10)===1&&jQuery.browser.version>="1.9.1"&&jQuery.browser.version<"2.0";
WYMeditor.WymClassMozilla.prototype.initIframe=function(iframe){var wym=this,styles,aCss;
this._iframe=iframe;this._doc=iframe.contentDocument;styles=this._doc.styleSheets[0];
aCss=eval(this._options.editorStyles);this.addCssRules(this._doc,aCss);this._doc.title=this._wym._index;
jQuery("html",this._doc).attr("dir",this._options.direction);this._html(this._wym._options.html);
this.enableDesignMode();if(jQuery.isFunction(this._options.preBind)){this._options.preBind(this)
}this._wym.bindEvents();jQuery(this._doc).bind("keydown",this.keydown);jQuery(this._doc).bind("keyup",this.keyup);
jQuery(this._doc).bind("click",this.click);jQuery(this._doc).bind("focus",function(){wym.enableDesignMode.call(wym)
});if(jQuery.isFunction(this._options.postInit)){this._options.postInit(this)}this.listen()
};WYMeditor.WymClassMozilla.prototype._html=function(a){if(typeof a==="string"){try{this._doc.designMode="off"
}catch(b){}a=a.replace(/<em(\b[^>]*)>/gi,"<i$1>");a=a.replace(/<\/em>/gi,"</i>");
a=a.replace(/<strong(\b[^>]*)>/gi,"<b$1>");a=a.replace(/<\/strong>/gi,"</b>");jQuery(this._doc.body).html(a);
this._wym.fixBodyHtml();this.enableDesignMode()}else{return jQuery(this._doc.body).html()
}return false};WYMeditor.WymClassMozilla.prototype._exec=function(b,c){if(!this.selected()){return false
}if(c){this._doc.execCommand(b,"",c)}else{this._doc.execCommand(b,"",null)}var a=this.selected();
if(a&&a.tagName.toLowerCase()===WYMeditor.BODY){this._exec(WYMeditor.FORMAT_BLOCK,WYMeditor.P);
this.fixBodyHtml()}return true};WYMeditor.WymClassMozilla.prototype.addCssRule=function(a,b){a.insertRule(b.name+" {"+b.css+"}",a.cssRules.length)
};WYMeditor.WymClassMozilla.prototype.keydown=function(a){var b=WYMeditor.INSTANCES[this.title];
if(a.ctrlKey){if(a.which===66){b._exec(WYMeditor.BOLD);return false}if(a.which===73){b._exec(WYMeditor.ITALIC);
return false}}return true};WYMeditor.WymClassMozilla.prototype.keyup=function(c){var f=WYMeditor.INSTANCES[this.title],b,g,a,d,e;
a=f.documentStructureManager.structureRules.notValidRootContainers;g=f.documentStructureManager.structureRules.defaultRootContainer;
f._selected_image=null;b=null;if(!f.keyCanCreateBlockElement(c.which)&&c.which!==WYMeditor.KEY.CTRL&&c.which!==WYMeditor.KEY.COMMAND&&!c.metaKey&&!c.ctrlKey){b=f.selected();
d=b.tagName.toLowerCase();if(b.parentNode){e=b.parentNode.tagName.toLowerCase()}if(f.isForbiddenMainContainer(d)){d=e
}if(d===WYMeditor.BODY||(jQuery.inArray(d,a)>-1&&e===WYMeditor.BODY)){f._exec(WYMeditor.FORMAT_BLOCK,g);
f.fixBodyHtml()}}if(f.keyCanCreateBlockElement(c.which)){b=f.selected();d=b.tagName.toLowerCase();
if(b.parentNode){e=b.parentNode.tagName.toLowerCase()}if(jQuery.inArray(d,a)>-1&&e===WYMeditor.BODY){f._exec(WYMeditor.FORMAT_BLOCK,g)
}f.fixBodyHtml()}};WYMeditor.WymClassMozilla.prototype.click=function(b){var d=WYMeditor.INSTANCES[this.title],a=d.selected(),c;
if(WYMeditor.WymClassMozilla.NEEDS_CELL_FIX===true){if(a&&a.tagName.toLowerCase()===WYMeditor.TR){jQuery(WYMeditor.TD,d._doc.body).append(WYMeditor.WymClassMozilla.CELL_PLACEHOLDER)
}}if(a&&a.tagName.toLowerCase()===WYMeditor.BODY){c=d._iframe.contentWindow.getSelection();
if(c.isCollapsed===true){d._exec(WYMeditor.FORMAT_BLOCK,WYMeditor.P)}}};WYMeditor.WymClassMozilla.prototype.enableDesignMode=function(){if(this._doc.designMode==="off"){try{this._doc.designMode="on";
this._doc.execCommand("styleWithCSS","",false);this._doc.execCommand("enableObjectResizing",false,true)
}catch(a){}}};WYMeditor.WymClassMozilla.prototype.afterInsertTable=function(a){if(WYMeditor.WymClassMozilla.NEEDS_CELL_FIX===true){jQuery(a).find("td").each(function(b,c){jQuery(c).append(WYMeditor.WymClassMozilla.CELL_PLACEHOLDER)
})}};WYMeditor.WymClassOpera=function(a){this._wym=a;this._class="class"};WYMeditor.WymClassOpera.prototype.initIframe=function(iframe){this._iframe=iframe;
this._doc=iframe.contentWindow.document;var styles=this._doc.styleSheets[0];var aCss=eval(this._options.editorStyles);
this.addCssRules(this._doc,aCss);this._doc.title=this._wym._index;jQuery("html",this._doc).attr("dir",this._options.direction);
this._doc.designMode="on";this._html(this._wym._options.html);if(jQuery.isFunction(this._options.preBind)){this._options.preBind(this)
}this._wym.bindEvents();jQuery(this._doc).bind("keydown",this.keydown);jQuery(this._doc).bind("keyup",this.keyup);
if(jQuery.isFunction(this._options.postInit)){this._options.postInit(this)}this.listen()
};WYMeditor.WymClassOpera.prototype._exec=function(a,b){if(b){this._doc.execCommand(a,false,b)
}else{this._doc.execCommand(a)}};WYMeditor.WymClassOpera.prototype.selected=function(){var b=this._iframe.contentWindow.getSelection();
var a=b.focusNode;if(a){if(a.nodeName==="#text"){return a.parentNode}else{return a
}}else{return null}};WYMeditor.WymClassOpera.prototype.addCssRule=function(a,b){a.insertRule(b.name+" {"+b.css+"}",a.cssRules.length)
};WYMeditor.WymClassOpera.prototype.keydown=function(a){var c=WYMeditor.INSTANCES[this.title];
var b=c._iframe.contentWindow.getSelection();startNode=b.getRangeAt(0).startContainer;
if(!jQuery(startNode).parentsOrSelf(WYMeditor.MAIN_CONTAINERS.join(","))[0]&&!jQuery(startNode).parentsOrSelf("li")&&!keyCanCreateBlockElement(a.which)){c._exec(WYMeditor.FORMAT_BLOCK,WYMeditor.P)
}};WYMeditor.WymClassOpera.prototype.keyup=function(a){var b=WYMeditor.INSTANCES[this.title];
b._selected_image=null};WYMeditor.WymClassSafari=function(a){this._wym=a;this._class="class"
};WYMeditor.WymClassSafari.prototype.initIframe=function(iframe){var wym=this,styles,aCss;
this._iframe=iframe;this._doc=iframe.contentDocument;styles=this._doc.styleSheets[0];
aCss=eval(this._options.editorStyles);this.addCssRules(this._doc,aCss);this._doc.title=this._wym._index;
jQuery("html",this._doc).attr("dir",this._options.direction);this._doc.designMode="on";
this._html(this._wym._options.html);if(jQuery.isFunction(this._options.preBind)){this._options.preBind(this)
}this._wym.bindEvents();jQuery(this._doc).bind("keydown",this.keydown);jQuery(this._doc).bind("keyup",this.keyup);
if(jQuery.isFunction(this._options.postInit)){this._options.postInit(this)}this.listen()
};WYMeditor.WymClassSafari.prototype._exec=function(c,e){if(!this.selected()){return false
}var a,d,b;if(e){this._doc.execCommand(c,"",e)}else{this._doc.execCommand(c,"",null)
}a=this.selected();if(a){d=jQuery(a);b=a.tagName.toLowerCase();if(b===WYMeditor.BODY){this._exec(WYMeditor.FORMAT_BLOCK,this.documentStructureManager.structureRules.defaultRootContainer);
this.fixBodyHtml()}if(c===WYMeditor.FORMAT_BLOCK&&d.siblings("body.wym_iframe").length){d.siblings("body.wym_iframe").append(a)
}if(b==="span"&&(!d.attr("class")||d.attr("class").toLowerCase()==="apple-style-span")&&d.attr("style")==="font-weight: normal;"){d.contents().unwrap()
}}return true};WYMeditor.WymClassSafari.prototype.addCssRule=function(a,b){a.insertRule(b.name+" {"+b.css+"}",a.cssRules.length)
};WYMeditor.WymClassSafari.prototype.keydown=function(b){var a=WYMeditor.INSTANCES[this.title];
if(b.ctrlKey){if(b.which===WYMeditor.KEY.B){a._exec(WYMeditor.BOLD);b.preventDefault()
}if(b.which===WYMeditor.KEY.I){a._exec(WYMeditor.ITALIC);b.preventDefault()}}else{if(b.shiftKey&&b.which===WYMeditor.KEY.ENTER){a._exec("InsertLineBreak");
b.preventDefault()}}};WYMeditor.WymClassSafari.prototype.keyup=function(c){var f=WYMeditor.INSTANCES[this.title],b,g,a,d,e;
a=f.documentStructureManager.structureRules.notValidRootContainers;g=f.documentStructureManager.structureRules.defaultRootContainer;
f._selected_image=null;if(jQuery.browser.version<534.1){if(c.which===WYMeditor.KEY.ENTER&&c.shiftKey){f._exec("InsertLineBreak")
}}if(!f.keyCanCreateBlockElement(c.which)&&c.which!==WYMeditor.KEY.CTRL&&c.which!==WYMeditor.KEY.COMMAND&&!c.metaKey&&!c.ctrlKey){b=f.selected();
d=b.tagName.toLowerCase();if(b.parentNode){e=b.parentNode.tagName.toLowerCase()}if(f.isForbiddenMainContainer(d)){d=e
}if(d===WYMeditor.BODY||(jQuery.inArray(d,a)>-1&&e===WYMeditor.BODY)){f._exec(WYMeditor.FORMAT_BLOCK,g);
f.fixBodyHtml()}}if(f.keyCanCreateBlockElement(c.which)){b=f.selected();d=b.tagName.toLowerCase();
if(b.parentNode){e=b.parentNode.tagName.toLowerCase()}if(jQuery.inArray(d,a)>-1&&e===WYMeditor.BODY){f._exec(WYMeditor.FORMAT_BLOCK,g)
}f.fixBodyHtml()}};WYMeditor.XmlHelper=function(){this._entitiesDiv=document.createElement("div");
return this};WYMeditor.XmlHelper.prototype.tag=function(c,b,a){b=b||false;a=a||false;
return"<"+c+(b?this.tagOptions(b):"")+(a?">":" />")};WYMeditor.XmlHelper.prototype.contentTag=function(b,c,a){a=a||false;
return"<"+b+(a?this.tagOptions(a):"")+">"+c+"</"+b+">"};WYMeditor.XmlHelper.prototype.cdataSection=function(a){return"<![CDATA["+a+"]]>"
};WYMeditor.XmlHelper.prototype.escapeOnce=function(a){return this._fixDoubleEscape(this.escapeEntities(a))
};WYMeditor.XmlHelper.prototype._fixDoubleEscape=function(a){return a.replace(/&amp;([a-z]+|(#\d+));/ig,"&$1;")
};WYMeditor.XmlHelper.prototype.tagOptions=function(b){var a=this;a._formated_options="";
for(var c in b){var d="";var e=b[c];if(typeof e!="function"&&e.length>0){if(parseInt(c,10)==c&&typeof e=="object"){c=e.shift();
e=e.pop()}if(c!==""&&e!==""){a._formated_options+=" "+c+'="'+a.escapeOnce(e)+'"'}}}return a._formated_options
};WYMeditor.XmlHelper.prototype.escapeEntities=function(c,b){this._entitiesDiv.innerHTML=c;
this._entitiesDiv.textContent=c;var a=this._entitiesDiv.innerHTML;if(typeof b=="undefined"){if(b!==false){a=a.replace('"',"&quot;")
}if(b===true){a=a.replace('"',"&#039;")}}return a};WYMeditor.XmlHelper.prototype.parseAttributes=function(b){var l=[];
var d=b.split(/((=\s*")(")("))|((=\s*\')(\')(\'))|((=\s*[^>\s]*))/g);if(d.toString()!=b){for(var c in d){var g=d[c];
if(typeof g!="function"&&g.length!==0){var h=new RegExp("(\\w+)\\s*"+g);var e=b.match(h);
if(e){var f=g.replace(/^[\s=]+/,"");var a=f.charAt(0);a=a=='"'?'"':(a=="'"?"'":"");
if(a!==""){f=a=='"'?f.replace(/^"|"+$/g,""):f.replace(/^'|'+$/g,"")}b=b.replace(e[0],"");
l.push([e[1],f])}}}}return l};WYMeditor.XhtmlValidator={_attributes:{core:{except:["base","head","html","meta","param","script","style","title"],attributes:["class","id","style","title","accesskey","tabindex","/^data-.*/"]},language:{except:["base","br","hr","iframe","param","script"],attributes:{dir:["ltr","rtl"],"0":"lang","1":"xml:lang"}},keyboard:{attributes:{accesskey:/^(\w){1}$/,tabindex:/^(\d)+$/}}},_events:{window:{only:["body"],attributes:["onload","onunload"]},form:{only:["form","input","textarea","select","a","label","button"],attributes:["onchange","onsubmit","onreset","onselect","onblur","onfocus"]},keyboard:{except:["base","bdo","br","frame","frameset","head","html","iframe","meta","param","script","style","title"],attributes:["onkeydown","onkeypress","onkeyup"]},mouse:{except:["base","bdo","br","head","html","meta","param","script","style","title"],attributes:["onclick","ondblclick","onmousedown","onmousemove","onmouseover","onmouseout","onmouseup"]}},_tags:{a:{attributes:{"0":"charset","1":"coords","2":"href","3":"hreflang","4":"name","5":"rel","6":"rev",shape:/^(rect|rectangle|circ|circle|poly|polygon)$/,"7":"type"}},"0":"abbr","1":"acronym","2":"address",area:{attributes:{"0":"alt","1":"coords","2":"href",nohref:/^(true|false)$/,shape:/^(rect|rectangle|circ|circle|poly|polygon)$/},required:["alt"]},"3":"b",base:{attributes:["href"],required:["href"]},bdo:{attributes:{dir:/^(ltr|rtl)$/},required:["dir"]},"4":"big",blockquote:{attributes:["cite"]},"5":"body","6":"br",button:{attributes:{disabled:/^(disabled)$/,type:/^(button|reset|submit)$/,"0":"value"},inside:"form"},"7":"caption","8":"cite","9":"code",col:{attributes:{align:/^(right|left|center|justify)$/,"0":"char","1":"charoff",span:/^(\d)+$/,valign:/^(top|middle|bottom|baseline)$/,"2":"width"},inside:"colgroup"},colgroup:{attributes:{align:/^(right|left|center|justify)$/,"0":"char","1":"charoff",span:/^(\d)+$/,valign:/^(top|middle|bottom|baseline)$/,"2":"width"}},"10":"dd",del:{attributes:{"0":"cite",datetime:/^([0-9]){8}/}},"11":"div","12":"dfn","13":"dl","14":"dt","15":"em",fieldset:{inside:"form"},form:{attributes:{"0":"action","1":"accept","2":"accept-charset","3":"enctype",method:/^(get|post)$/},required:["action"]},head:{attributes:["profile"]},"16":"h1","17":"h2","18":"h3","19":"h4","20":"h5","21":"h6","22":"hr",html:{attributes:["xmlns"]},"23":"i",img:{attributes:["alt","src","height","ismap","longdesc","usemap","width"],required:["alt","src"]},input:{attributes:{"0":"accept","1":"alt",checked:/^(checked)$/,disabled:/^(disabled)$/,maxlength:/^(\d)+$/,"2":"name",readonly:/^(readonly)$/,size:/^(\d)+$/,"3":"src",type:/^(button|checkbox|file|hidden|image|password|radio|reset|submit|text)$/,"4":"value"},inside:"form"},ins:{attributes:{"0":"cite",datetime:/^([0-9]){8}/}},"24":"kbd",label:{attributes:["for"],inside:"form"},"25":"legend","26":"li",link:{attributes:{"0":"charset","1":"href","2":"hreflang",media:/^(all|braille|print|projection|screen|speech|,|;| )+$/i,rel:/^(alternate|appendix|bookmark|chapter|contents|copyright|glossary|help|home|index|next|prev|section|start|stylesheet|subsection| |shortcut|icon)+$/i,rev:/^(alternate|appendix|bookmark|chapter|contents|copyright|glossary|help|home|index|next|prev|section|start|stylesheet|subsection| |shortcut|icon)+$/i,"3":"type"},inside:"head"},map:{attributes:["id","name"],required:["id"]},meta:{attributes:{"0":"content","http-equiv":/^(content\-type|expires|refresh|set\-cookie)$/i,"1":"name","2":"scheme"},required:["content"]},"27":"noscript",object:{attributes:["archive","classid","codebase","codetype","data","declare","height","name","standby","type","usemap","width"]},"28":"ol",optgroup:{attributes:{"0":"label",disabled:/^(disabled)$/},required:["label"]},option:{attributes:{"0":"label",disabled:/^(disabled)$/,selected:/^(selected)$/,"1":"value"},inside:"select"},"29":"p",param:{attributes:{"0":"type",valuetype:/^(data|ref|object)$/,"1":"valuetype","2":"value"},required:["name"]},"30":"pre",q:{attributes:["cite"]},"31":"samp",script:{attributes:{type:/^(text\/ecmascript|text\/javascript|text\/jscript|text\/vbscript|text\/vbs|text\/xml)$/,"0":"charset",defer:/^(defer)$/,"1":"src"},required:["type"]},select:{attributes:{disabled:/^(disabled)$/,multiple:/^(multiple)$/,"0":"name","1":"size"},inside:"form"},"32":"small","33":"span","34":"strong",style:{attributes:{"0":"type",media:/^(screen|tty|tv|projection|handheld|print|braille|aural|all)$/},required:["type"]},"35":"sub","36":"sup",table:{attributes:{"0":"border","1":"cellpadding","2":"cellspacing",frame:/^(void|above|below|hsides|lhs|rhs|vsides|box|border)$/,rules:/^(none|groups|rows|cols|all)$/,"3":"summary","4":"width"}},tbody:{attributes:{align:/^(right|left|center|justify)$/,"0":"char","1":"charoff",valign:/^(top|middle|bottom|baseline)$/}},td:{attributes:{"0":"abbr",align:/^(left|right|center|justify|char)$/,"1":"axis","2":"char","3":"charoff",colspan:/^(\d)+$/,"4":"headers",rowspan:/^(\d)+$/,scope:/^(col|colgroup|row|rowgroup)$/,valign:/^(top|middle|bottom|baseline)$/}},textarea:{attributes:["cols","rows","disabled","name","readonly"],required:["cols","rows"],inside:"form"},tfoot:{attributes:{align:/^(right|left|center|justify)$/,"0":"char","1":"charoff",valign:/^(top|middle|bottom)$/,"2":"baseline"}},th:{attributes:{"0":"abbr",align:/^(left|right|center|justify|char)$/,"1":"axis","2":"char","3":"charoff",colspan:/^(\d)+$/,"4":"headers",rowspan:/^(\d)+$/,scope:/^(col|colgroup|row|rowgroup)$/,valign:/^(top|middle|bottom|baseline)$/}},thead:{attributes:{align:/^(right|left|center|justify)$/,"0":"char","1":"charoff",valign:/^(top|middle|bottom|baseline)$/}},"37":"title",tr:{attributes:{align:/^(right|left|center|justify|char)$/,"0":"char","1":"charoff",valign:/^(top|middle|bottom|baseline)$/}},"38":"tt","39":"ul","40":"var"},skiped_attributes:[],skiped_attribute_values:[],getValidTagAttributes:function(a,b){var c={};
var g=this.getPossibleTagAttributes(a);for(var e in b){var f=b[e];e=e.toLowerCase();
var d=WYMeditor.Helper;if(!d.contains(this.skiped_attributes,e)&&!d.contains(this.skiped_attribute_values,f)){if(typeof f!="function"&&d.contains(g,e)){if(this.doesAttributeNeedsValidation(a,e)){if(this.validateAttribute(a,e,f)){c[e]=f
}}else{c[e]=f}}else{jQuery.each(g,function(){if(this.match(/\/(.*)\//)){regex=new RegExp(this.match(/\/(.*)\//)[1]);
if(regex.test(e)){c[e]=f}}})}}}return c},getUniqueAttributesAndEventsForTag:function(b){var a=[];
if(this._tags[b]&&this._tags[b].attributes){for(var c in this._tags[b].attributes){a.push(parseInt(c,10)==c?this._tags[b].attributes[c]:c)
}}return a},getDefaultAttributesAndEventsForTags:function(){var a=[];for(var b in this._events){a.push(this._events[b])
}for(b in this._attributes){a.push(this._attributes[b])}return a},isValidTag:function(a){if(this._tags[a]){return true
}for(var b in this._tags){if(this._tags[b]==a){return true}}return false},getDefaultAttributesAndEventsForTag:function(a){var l=[];
if(this.isValidTag(a)){var g=this.getDefaultAttributesAndEventsForTags();for(var d in g){var f=g[d];
if(typeof f=="object"){var e=WYMeditor.Helper;if((f.except&&e.contains(f.except,a))||(f.only&&!e.contains(f.only,a))){continue
}var c=f.attributes?f.attributes:f.events;for(var b in c){l.push(typeof c[b]!="string"?b:c[b])
}}}}return l},doesAttributeNeedsValidation:function(a,b){return this._tags[a]&&((this._tags[a]["attributes"]&&this._tags[a]["attributes"][b])||(this._tags[a]["required"]&&WYMeditor.Helper.contains(this._tags[a]["required"],b)))
},validateAttribute:function(a,b,c){if(this._tags[a]&&(this._tags[a]["attributes"]&&this._tags[a]["attributes"][b]&&c.length>0&&!c.match(this._tags[a]["attributes"][b]))||(this._tags[a]&&this._tags[a]["required"]&&WYMeditor.Helper.contains(this._tags[a]["required"],b)&&c.length===0)){return false
}return typeof this._tags[a]!="undefined"},getPossibleTagAttributes:function(a){if(!this._possible_tag_attributes){this._possible_tag_attributes={}
}if(!this._possible_tag_attributes[a]){this._possible_tag_attributes[a]=this.getUniqueAttributesAndEventsForTag(a).concat(this.getDefaultAttributesAndEventsForTag(a))
}return this._possible_tag_attributes[a]}};WYMeditor.ParallelRegex=function(a){this._case=a;
this._patterns=[];this._labels=[];this._regex=null;return this};WYMeditor.ParallelRegex.prototype.addPattern=function(c,a){a=a||true;
var b=this._patterns.length;this._patterns[b]=c;this._labels[b]=a;this._regex=null
};WYMeditor.ParallelRegex.prototype.match=function(c){if(this._patterns.length===0){return[false,""]
}var d=c.match(this._getCompoundedRegex());if(!d){return[false,""]}var a=d[0];for(var b=1;
b<d.length;b++){if(d[b]){return[this._labels[b-1],a]}}return[true,d[0]]};WYMeditor.ParallelRegex.prototype._getCompoundedRegex=function(){if(this._regex===null){for(var a=0,b=this._patterns.length;
a<b;a++){this._patterns[a]="("+this._untokenizeRegex(this._tokenizeRegex(this._patterns[a]).replace(/([\/\(\)])/g,"\\$1"))+")"
}this._regex=new RegExp(this._patterns.join("|"),this._getPerlMatchingFlags())}return this._regex
};WYMeditor.ParallelRegex.prototype._tokenizeRegex=function(a){return a.replace(/\(\?(i|m|s|x|U)\)/,"~~~~~~Tk1$1~~~~~~").replace(/\(\?(\-[i|m|s|x|U])\)/,"~~~~~~Tk2$1~~~~~~").replace(/\(\?\=(.*)\)/,"~~~~~~Tk3$1~~~~~~").replace(/\(\?\!(.*)\)/,"~~~~~~Tk4$1~~~~~~").replace(/\(\?\<\=(.*)\)/,"~~~~~~Tk5$1~~~~~~").replace(/\(\?\<\!(.*)\)/,"~~~~~~Tk6$1~~~~~~").replace(/\(\?\:(.*)\)/,"~~~~~~Tk7$1~~~~~~")
};WYMeditor.ParallelRegex.prototype._untokenizeRegex=function(a){return a.replace(/~~~~~~Tk1(.{1})~~~~~~/,"(?$1)").replace(/~~~~~~Tk2(.{2})~~~~~~/,"(?$1)").replace(/~~~~~~Tk3(.*)~~~~~~/,"(?=$1)").replace(/~~~~~~Tk4(.*)~~~~~~/,"(?!$1)").replace(/~~~~~~Tk5(.*)~~~~~~/,"(?<=$1)").replace(/~~~~~~Tk6(.*)~~~~~~/,"(?<!$1)").replace(/~~~~~~Tk7(.*)~~~~~~/,"(?:$1)")
};WYMeditor.ParallelRegex.prototype._getPerlMatchingFlags=function(){return(this._case?"m":"mi")
};WYMeditor.StateStack=function(a){this._stack=[a];return this};WYMeditor.StateStack.prototype.getCurrent=function(){return this._stack[this._stack.length-1]
};WYMeditor.StateStack.prototype.enter=function(a){this._stack.push(a)};WYMeditor.StateStack.prototype.leave=function(){if(this._stack.length==1){return false
}this._stack.pop();return true};WYMeditor.LEXER_ENTER=1;WYMeditor.LEXER_MATCHED=2;
WYMeditor.LEXER_UNMATCHED=3;WYMeditor.LEXER_EXIT=4;WYMeditor.LEXER_SPECIAL=5;WYMeditor.Lexer=function(c,b,a){b=b||"accept";
this._case=a||false;this._regexes={};this._parser=c;this._mode=new WYMeditor.StateStack(b);
this._mode_handlers={};this._mode_handlers[b]=b;return this};WYMeditor.Lexer.prototype.addPattern=function(a,b){b=b||"accept";
if(typeof this._regexes[b]=="undefined"){this._regexes[b]=new WYMeditor.ParallelRegex(this._case)
}this._regexes[b].addPattern(a);if(typeof this._mode_handlers[b]=="undefined"){this._mode_handlers[b]=b
}};WYMeditor.Lexer.prototype.addEntryPattern=function(b,c,a){if(typeof this._regexes[c]=="undefined"){this._regexes[c]=new WYMeditor.ParallelRegex(this._case)
}this._regexes[c].addPattern(b,a);if(typeof this._mode_handlers[a]=="undefined"){this._mode_handlers[a]=a
}};WYMeditor.Lexer.prototype.addExitPattern=function(a,b){if(typeof this._regexes[b]=="undefined"){this._regexes[b]=new WYMeditor.ParallelRegex(this._case)
}this._regexes[b].addPattern(a,"__exit");if(typeof this._mode_handlers[b]=="undefined"){this._mode_handlers[b]=b
}};WYMeditor.Lexer.prototype.addSpecialPattern=function(b,c,a){if(typeof this._regexes[c]=="undefined"){this._regexes[c]=new WYMeditor.ParallelRegex(this._case)
}this._regexes[c].addPattern(b,"_"+a);if(typeof this._mode_handlers[a]=="undefined"){this._mode_handlers[a]=a
}};WYMeditor.Lexer.prototype.mapHandler=function(b,a){this._mode_handlers[b]=a};WYMeditor.Lexer.prototype.parse=function(d){if(typeof this._parser=="undefined"){return false
}var e=d.length;var c;while(typeof(c=this._reduce(d))=="object"){d=c[0];var b=c[1];
var a=c[2];var f=c[3];if(!this._dispatchTokens(b,a,f)){return false}if(d===""){return true
}if(d.length==e){return false}e=d.length}if(!c){return false}return this._invokeParser(d,WYMeditor.LEXER_UNMATCHED)
};WYMeditor.Lexer.prototype._dispatchTokens=function(b,a,c){c=c||false;if(!this._invokeParser(b,WYMeditor.LEXER_UNMATCHED)){return false
}if(typeof c=="boolean"){return this._invokeParser(a,WYMeditor.LEXER_MATCHED)}if(this._isModeEnd(c)){if(!this._invokeParser(a,WYMeditor.LEXER_EXIT)){return false
}return this._mode.leave()}if(this._isSpecialMode(c)){this._mode.enter(this._decodeSpecial(c));
if(!this._invokeParser(a,WYMeditor.LEXER_SPECIAL)){return false}return this._mode.leave()
}this._mode.enter(c);return this._invokeParser(a,WYMeditor.LEXER_ENTER)};WYMeditor.Lexer.prototype._isModeEnd=function(a){return(a==="__exit")
};WYMeditor.Lexer.prototype._isSpecialMode=function(a){return(a.substring(0,1)=="_")
};WYMeditor.Lexer.prototype._decodeSpecial=function(a){return a.substring(1)};WYMeditor.Lexer.prototype._invokeParser=function(c,e){if(c===""){return true
}var d=this._mode.getCurrent();var b=this._mode_handlers[d];var a=this._parser[b](c,e);
return a};WYMeditor.Lexer.prototype._reduce=function(c){var a=this._regexes[this._mode.getCurrent()].match(c);
var b=a[1];var e=a[0];if(e){var f=c.indexOf(b);var d=c.substr(0,f);c=c.substring(f+b.length);
return[c,d,b,e]}return true};WYMeditor.XhtmlLexer=function(a){jQuery.extend(this,new WYMeditor.Lexer(a,"Text"));
this.mapHandler("Text","Text");this.addTokens();this.init();return this};WYMeditor.XhtmlLexer.prototype.init=function(){};
WYMeditor.XhtmlLexer.prototype.addTokens=function(){this.addCommentTokens("Text");
this.addScriptTokens("Text");this.addCssTokens("Text");this.addTagTokens("Text")};
WYMeditor.XhtmlLexer.prototype.addCommentTokens=function(a){this.addEntryPattern("<!--",a,"Comment");
this.addExitPattern("-->","Comment")};WYMeditor.XhtmlLexer.prototype.addScriptTokens=function(a){this.addEntryPattern("<script",a,"Script");
this.addExitPattern("<\/script>","Script")};WYMeditor.XhtmlLexer.prototype.addCssTokens=function(a){this.addEntryPattern("<style",a,"Css");
this.addExitPattern("</style>","Css")};WYMeditor.XhtmlLexer.prototype.addTagTokens=function(a){this.addSpecialPattern("<\\s*[a-z0-9:-]+\\s*/>",a,"SelfClosingTag");
this.addSpecialPattern("<\\s*[a-z0-9:-]+\\s*>",a,"OpeningTag");this.addEntryPattern("<[a-z0-9:-]+[\\/ \\>]+",a,"OpeningTag");
this.addInTagDeclarationTokens("OpeningTag");this.addSpecialPattern("</\\s*[a-z0-9:-]+\\s*>",a,"ClosingTag")
};WYMeditor.XhtmlLexer.prototype.addInTagDeclarationTokens=function(a){this.addSpecialPattern("\\s+",a,"Ignore");
this.addAttributeTokens(a);this.addExitPattern("/>",a);this.addExitPattern(">",a)
};WYMeditor.XhtmlLexer.prototype.addAttributeTokens=function(a){this.addSpecialPattern("\\s*[a-z-_0-9]*:?[a-z-_0-9]+\\s*(?==)\\s*",a,"TagAttributes");
this.addEntryPattern('=\\s*"',a,"DoubleQuotedAttribute");this.addPattern('\\\\"',"DoubleQuotedAttribute");
this.addExitPattern('"',"DoubleQuotedAttribute");this.addEntryPattern("=\\s*'",a,"SingleQuotedAttribute");
this.addPattern("\\\\'","SingleQuotedAttribute");this.addExitPattern("'","SingleQuotedAttribute");
this.addSpecialPattern("=\\s*[^>\\s]*",a,"UnquotedAttribute")};WYMeditor.XhtmlParser=function(a,b){b=b||"Text";
this._Lexer=new WYMeditor.XhtmlLexer(this);this._Listener=a;this._mode=b;this._matches=[];
this._last_match="";this._current_match="";return this};WYMeditor.XhtmlParser.prototype.parse=function(a){this._Lexer.parse(this.beforeParsing(a));
return this.afterParsing(this._Listener.getResult())};WYMeditor.XhtmlParser.prototype.beforeParsing=function(a){if(a.match(/class="MsoNormal"/)||a.match(/ns = "urn:schemas-microsoft-com/)){this._Listener.avoidStylingTagsAndAttributes()
}return this._Listener.beforeParsing(a)};WYMeditor.XhtmlParser.prototype.afterParsing=function(a){if(this._Listener._avoiding_tags_implicitly){this._Listener.allowStylingTagsAndAttributes()
}return this._Listener.afterParsing(a)};WYMeditor.XhtmlParser.prototype.Ignore=function(a,b){return true
};WYMeditor.XhtmlParser.prototype.Text=function(a){this._Listener.addContent(a);return true
};WYMeditor.XhtmlParser.prototype.Comment=function(b,a){return this._addNonTagBlock(b,a,"addComment")
};WYMeditor.XhtmlParser.prototype.Script=function(b,a){return this._addNonTagBlock(b,a,"addScript")
};WYMeditor.XhtmlParser.prototype.Css=function(b,a){return this._addNonTagBlock(b,a,"addCss")
};WYMeditor.XhtmlParser.prototype._addNonTagBlock=function(a,c,b){switch(c){case WYMeditor.LEXER_ENTER:this._non_tag=a;
break;case WYMeditor.LEXER_UNMATCHED:this._non_tag+=a;break;case WYMeditor.LEXER_EXIT:switch(b){case"addComment":this._Listener.addComment(this._non_tag+a);
break;case"addScript":this._Listener.addScript(this._non_tag+a);break;case"addCss":this._Listener.addCss(this._non_tag+a);
break;default:break}break;default:break}return true};WYMeditor.XhtmlParser.prototype.SelfClosingTag=function(c,d){var b=this.OpeningTag(c,d);
var a=this.normalizeTag(c);return this.ClosingTag(c,d)};WYMeditor.XhtmlParser.prototype.OpeningTag=function(a,b){switch(b){case WYMeditor.LEXER_ENTER:this._tag=this.normalizeTag(a);
this._tag_attributes={};break;case WYMeditor.LEXER_SPECIAL:this._callOpenTagListener(this.normalizeTag(a));
break;case WYMeditor.LEXER_EXIT:this._callOpenTagListener(this._tag,this._tag_attributes);
break;default:break}return true};WYMeditor.XhtmlParser.prototype.ClosingTag=function(a,b){this._callCloseTagListener(this.normalizeTag(a));
return true};WYMeditor.XhtmlParser.prototype._callOpenTagListener=function(a,b){b=b||{};
this.autoCloseUnclosedBeforeNewOpening(a);if(this._Listener.isBlockTag(a)){this._Listener._tag_stack.push(a);
this._Listener.fixNestingBeforeOpeningBlockTag(a,b);this._Listener.openBlockTag(a,b);
this._increaseOpenTagCounter(a)}else{if(this._Listener.isInlineTag(a)){this._Listener.inlineTag(a,b)
}else{this._Listener.openUnknownTag(a,b);this._increaseOpenTagCounter(a)}}this._Listener.last_tag=a;
this._Listener.last_tag_opened=true;this._Listener.last_tag_attributes=b};WYMeditor.XhtmlParser.prototype._callCloseTagListener=function(a){if(this._decreaseOpenTagCounter(a)){this.autoCloseUnclosedBeforeTagClosing(a);
if(this._Listener.isBlockTag(a)){var b=this._Listener._tag_stack.pop();if(b===false){return
}else{if(b!=a){a=b}}this._Listener.closeBlockTag(a)}}else{if(!this._Listener.isInlineTag(a)){this._Listener.closeUnopenedTag(a)
}}this._Listener.last_tag=a;this._Listener.last_tag_opened=false};WYMeditor.XhtmlParser.prototype._increaseOpenTagCounter=function(a){this._Listener._open_tags[a]=this._Listener._open_tags[a]||0;
this._Listener._open_tags[a]++};WYMeditor.XhtmlParser.prototype._decreaseOpenTagCounter=function(a){if(this._Listener._open_tags[a]){this._Listener._open_tags[a]--;
if(this._Listener._open_tags[a]===0){this._Listener._open_tags[a]=undefined}return true
}return false};WYMeditor.XhtmlParser.prototype.autoCloseUnclosedBeforeNewOpening=function(a){this._autoCloseUnclosed(a,false)
};WYMeditor.XhtmlParser.prototype.autoCloseUnclosedBeforeTagClosing=function(a){this._autoCloseUnclosed(a,true)
};WYMeditor.XhtmlParser.prototype._autoCloseUnclosed=function(c,d){d=d||false;if(this._Listener._open_tags){for(var a in this._Listener._open_tags){var b=this._Listener._open_tags[a];
if(b>0&&this._Listener.shouldCloseTagAutomatically(a,c,d)){this._callCloseTagListener(a,true)
}}}};WYMeditor.XhtmlParser.prototype.getTagReplacements=function(){return this._Listener.getTagReplacements()
};WYMeditor.XhtmlParser.prototype.normalizeTag=function(a){a=a.replace(/^([\s<\/>]*)|([\s<\/>]*)$/gm,"").toLowerCase();
var b=this._Listener.getTagReplacements();if(b[a]){return b[a]}return a};WYMeditor.XhtmlParser.prototype.TagAttributes=function(a,b){if(WYMeditor.LEXER_SPECIAL==b){this._current_attribute=a
}return true};WYMeditor.XhtmlParser.prototype.DoubleQuotedAttribute=function(a,b){if(WYMeditor.LEXER_UNMATCHED==b){this._tag_attributes[this._current_attribute]=a
}return true};WYMeditor.XhtmlParser.prototype.SingleQuotedAttribute=function(a,b){if(WYMeditor.LEXER_UNMATCHED==b){this._tag_attributes[this._current_attribute]=a
}return true};WYMeditor.XhtmlParser.prototype.UnquotedAttribute=function(a,b){this._tag_attributes[this._current_attribute]=a.replace(/^=/,"");
return true};WYMeditor.XhtmlSaxListener=function(){this.output="";this.helper=new WYMeditor.XmlHelper();
this._open_tags={};this.validator=WYMeditor.XhtmlValidator;this._tag_stack=[];this.avoided_tags=[];
this._insert_before_closing=[];this._insert_after_closing=[];this._last_node_was_text=false;
this._insideTagToRemove=false;this._lastTagRemoved=false;this._extraLIClosingTags=0;
this._removedTagStackIndex=0;this.entities={"&nbsp;":"&#160;","&iexcl;":"&#161;","&cent;":"&#162;","&pound;":"&#163;","&curren;":"&#164;","&yen;":"&#165;","&brvbar;":"&#166;","&sect;":"&#167;","&uml;":"&#168;","&copy;":"&#169;","&ordf;":"&#170;","&laquo;":"&#171;","&not;":"&#172;","&shy;":"&#173;","&reg;":"&#174;","&macr;":"&#175;","&deg;":"&#176;","&plusmn;":"&#177;","&sup2;":"&#178;","&sup3;":"&#179;","&acute;":"&#180;","&micro;":"&#181;","&para;":"&#182;","&middot;":"&#183;","&cedil;":"&#184;","&sup1;":"&#185;","&ordm;":"&#186;","&raquo;":"&#187;","&frac14;":"&#188;","&frac12;":"&#189;","&frac34;":"&#190;","&iquest;":"&#191;","&Agrave;":"&#192;","&Aacute;":"&#193;","&Acirc;":"&#194;","&Atilde;":"&#195;","&Auml;":"&#196;","&Aring;":"&#197;","&AElig;":"&#198;","&Ccedil;":"&#199;","&Egrave;":"&#200;","&Eacute;":"&#201;","&Ecirc;":"&#202;","&Euml;":"&#203;","&Igrave;":"&#204;","&Iacute;":"&#205;","&Icirc;":"&#206;","&Iuml;":"&#207;","&ETH;":"&#208;","&Ntilde;":"&#209;","&Ograve;":"&#210;","&Oacute;":"&#211;","&Ocirc;":"&#212;","&Otilde;":"&#213;","&Ouml;":"&#214;","&times;":"&#215;","&Oslash;":"&#216;","&Ugrave;":"&#217;","&Uacute;":"&#218;","&Ucirc;":"&#219;","&Uuml;":"&#220;","&Yacute;":"&#221;","&THORN;":"&#222;","&szlig;":"&#223;","&agrave;":"&#224;","&aacute;":"&#225;","&acirc;":"&#226;","&atilde;":"&#227;","&auml;":"&#228;","&aring;":"&#229;","&aelig;":"&#230;","&ccedil;":"&#231;","&egrave;":"&#232;","&eacute;":"&#233;","&ecirc;":"&#234;","&euml;":"&#235;","&igrave;":"&#236;","&iacute;":"&#237;","&icirc;":"&#238;","&iuml;":"&#239;","&eth;":"&#240;","&ntilde;":"&#241;","&ograve;":"&#242;","&oacute;":"&#243;","&ocirc;":"&#244;","&otilde;":"&#245;","&ouml;":"&#246;","&divide;":"&#247;","&oslash;":"&#248;","&ugrave;":"&#249;","&uacute;":"&#250;","&ucirc;":"&#251;","&uuml;":"&#252;","&yacute;":"&#253;","&thorn;":"&#254;","&yuml;":"&#255;","&OElig;":"&#338;","&oelig;":"&#339;","&Scaron;":"&#352;","&scaron;":"&#353;","&Yuml;":"&#376;","&fnof;":"&#402;","&circ;":"&#710;","&tilde;":"&#732;","&Alpha;":"&#913;","&Beta;":"&#914;","&Gamma;":"&#915;","&Delta;":"&#916;","&Epsilon;":"&#917;","&Zeta;":"&#918;","&Eta;":"&#919;","&Theta;":"&#920;","&Iota;":"&#921;","&Kappa;":"&#922;","&Lambda;":"&#923;","&Mu;":"&#924;","&Nu;":"&#925;","&Xi;":"&#926;","&Omicron;":"&#927;","&Pi;":"&#928;","&Rho;":"&#929;","&Sigma;":"&#931;","&Tau;":"&#932;","&Upsilon;":"&#933;","&Phi;":"&#934;","&Chi;":"&#935;","&Psi;":"&#936;","&Omega;":"&#937;","&alpha;":"&#945;","&beta;":"&#946;","&gamma;":"&#947;","&delta;":"&#948;","&epsilon;":"&#949;","&zeta;":"&#950;","&eta;":"&#951;","&theta;":"&#952;","&iota;":"&#953;","&kappa;":"&#954;","&lambda;":"&#955;","&mu;":"&#956;","&nu;":"&#957;","&xi;":"&#958;","&omicron;":"&#959;","&pi;":"&#960;","&rho;":"&#961;","&sigmaf;":"&#962;","&sigma;":"&#963;","&tau;":"&#964;","&upsilon;":"&#965;","&phi;":"&#966;","&chi;":"&#967;","&psi;":"&#968;","&omega;":"&#969;","&thetasym;":"&#977;","&upsih;":"&#978;","&piv;":"&#982;","&ensp;":"&#8194;","&emsp;":"&#8195;","&thinsp;":"&#8201;","&zwnj;":"&#8204;","&zwj;":"&#8205;","&lrm;":"&#8206;","&rlm;":"&#8207;","&ndash;":"&#8211;","&mdash;":"&#8212;","&lsquo;":"&#8216;","&rsquo;":"&#8217;","&sbquo;":"&#8218;","&ldquo;":"&#8220;","&rdquo;":"&#8221;","&bdquo;":"&#8222;","&dagger;":"&#8224;","&Dagger;":"&#8225;","&bull;":"&#8226;","&hellip;":"&#8230;","&permil;":"&#8240;","&prime;":"&#8242;","&Prime;":"&#8243;","&lsaquo;":"&#8249;","&rsaquo;":"&#8250;","&oline;":"&#8254;","&frasl;":"&#8260;","&euro;":"&#8364;","&image;":"&#8465;","&weierp;":"&#8472;","&real;":"&#8476;","&trade;":"&#8482;","&alefsym;":"&#8501;","&larr;":"&#8592;","&uarr;":"&#8593;","&rarr;":"&#8594;","&darr;":"&#8595;","&harr;":"&#8596;","&crarr;":"&#8629;","&lArr;":"&#8656;","&uArr;":"&#8657;","&rArr;":"&#8658;","&dArr;":"&#8659;","&hArr;":"&#8660;","&forall;":"&#8704;","&part;":"&#8706;","&exist;":"&#8707;","&empty;":"&#8709;","&nabla;":"&#8711;","&isin;":"&#8712;","&notin;":"&#8713;","&ni;":"&#8715;","&prod;":"&#8719;","&sum;":"&#8721;","&minus;":"&#8722;","&lowast;":"&#8727;","&radic;":"&#8730;","&prop;":"&#8733;","&infin;":"&#8734;","&ang;":"&#8736;","&and;":"&#8743;","&or;":"&#8744;","&cap;":"&#8745;","&cup;":"&#8746;","&int;":"&#8747;","&there4;":"&#8756;","&sim;":"&#8764;","&cong;":"&#8773;","&asymp;":"&#8776;","&ne;":"&#8800;","&equiv;":"&#8801;","&le;":"&#8804;","&ge;":"&#8805;","&sub;":"&#8834;","&sup;":"&#8835;","&nsub;":"&#8836;","&sube;":"&#8838;","&supe;":"&#8839;","&oplus;":"&#8853;","&otimes;":"&#8855;","&perp;":"&#8869;","&sdot;":"&#8901;","&lceil;":"&#8968;","&rceil;":"&#8969;","&lfloor;":"&#8970;","&rfloor;":"&#8971;","&lang;":"&#9001;","&rang;":"&#9002;","&loz;":"&#9674;","&spades;":"&#9824;","&clubs;":"&#9827;","&hearts;":"&#9829;","&diams;":"&#9830;"};
this.block_tags=["a","abbr","acronym","address","area","b","base","bdo","big","blockquote","body","button","caption","cite","code","colgroup","dd","del","div","dfn","dl","dt","em","fieldset","form","head","h1","h2","h3","h4","h5","h6","html","i","iframe","ins","kbd","label","legend","li","map","noscript","object","ol","optgroup","option","p","param","pre","q","samp","script","select","small","span","strong","style","sub","sup","table","tbody","td","textarea","tfoot","th","thead","title","tr","tt","ul","var","extends"];
this.inline_tags=["br","col","hr","img","input"];return this};WYMeditor.XhtmlSaxListener.prototype.shouldCloseTagAutomatically=function(a,c,b){b=b||false;
if(a=="td"){if((b&&c=="tr")||(!b&&c=="td")){return true}}else{if(a=="option"){if((b&&c=="select")||(!b&&c=="option")){return true
}}}return false};WYMeditor.XhtmlSaxListener.prototype.beforeParsing=function(a){this.output="";
this._insert_before_closing=[];this._insert_after_closing=[];this._open_tags={};this._tag_stack=[];
this._last_node_was_text=false;this._lastTagRemoved=false;this.last_tag=null;return a
};WYMeditor.XhtmlSaxListener.prototype.afterParsing=function(a){a=this.replaceNamedEntities(a);
a=this.joinRepeatedEntities(a);a=this.removeEmptyTags(a);a=this.removeBrInPre(a);
return a};WYMeditor.XhtmlSaxListener.prototype.replaceNamedEntities=function(b){for(var a in this.entities){b=b.replace(new RegExp(a,"g"),this.entities[a])
}return b};WYMeditor.XhtmlSaxListener.prototype.joinRepeatedEntities=function(b){var a="em|strong|sub|sup|acronym|pre|del|address";
return b.replace(new RegExp("</("+a+")><\\1>",""),"").replace(new RegExp("(s*<("+a+")>s*){2}(.*)(s*</\\2>s*){2}",""),"<$2>$3<$2>")
};WYMeditor.XhtmlSaxListener.prototype.removeEmptyTags=function(a){return a.replace(new RegExp("<("+this.block_tags.join("|").replace(/\|td/,"").replace(/\|th/,"")+")>(<br />|&#160;|&nbsp;|\\s)*</\\1>","g"),"")
};WYMeditor.XhtmlSaxListener.prototype.removeBrInPre=function(c){var b=c.match(new RegExp("<pre[^>]*>(.*?)</pre>","gmi"));
if(b){for(var a=0;a<b.length;a++){c=c.replace(b[a],b[a].replace(new RegExp("<br />","g"),String.fromCharCode(13,10)))
}}return c};WYMeditor.XhtmlSaxListener.prototype.getResult=function(){return this.output
};WYMeditor.XhtmlSaxListener.prototype.getTagReplacements=function(){return{b:"strong",i:"em"}
};WYMeditor.XhtmlSaxListener.prototype.getTagForStyle=function(a){if(/sub/.test(a)){return"sub"
}else{if(/super/.test(a)){return"sup"}else{if(/bold/.test(a)){return"strong"}else{if(/italic/.test(a)){return"em"
}}}}return false};WYMeditor.XhtmlSaxListener.prototype.addContent=function(a){if(this.last_tag&&this.last_tag=="li"){a=a.replace(/(\r|\n|\r\n)+$/g,"");
a=a.replace(/(\r|\n|\r\n)+/g," ")}if(a.replace(/^\s+|\s+$/g,"").length>0){this._last_node_was_text=true
}if(!this._insideTagToRemove){this.output+=a}};WYMeditor.XhtmlSaxListener.prototype.addComment=function(a){if(this.remove_comments||this._insideTagToRemove){return
}this.output+=a};WYMeditor.XhtmlSaxListener.prototype.addScript=function(a){if(this.remove_scripts||this._insideTagToRemove){return
}this.output+=a};WYMeditor.XhtmlSaxListener.prototype.addCss=function(a){if(this.remove_embeded_styles||this._insideTagToRemove){return
}this.output+=a};WYMeditor.XhtmlSaxListener.prototype.openBlockTag=function(a,c){this._last_node_was_text=false;
if(this._insideTagToRemove){return}if(this._shouldRemoveTag(a,c)){this._insideTagToRemove=true;
this._removedTagStackIndex=this._tag_stack.length-1;return}c=this.validator.getValidTagAttributes(a,c);
c=this.removeUnwantedClasses(c);if(a==="span"&&c.style){var b=this.getTagForStyle(c.style);
if(b){a=b;this._tag_stack.pop();this._tag_stack.push(a);c.style=""}}this.output+=this.helper.tag(a,c,true);
this._lastTagRemoved=false};WYMeditor.XhtmlSaxListener.prototype.inlineTag=function(a,b){this._last_node_was_text=false;
if(this._insideTagToRemove||this._shouldRemoveTag(a,b)){return}b=this.validator.getValidTagAttributes(a,b);
b=this.removeUnwantedClasses(b);this.output+=this.helper.tag(a,b);this._lastTagRemoved=false
};WYMeditor.XhtmlSaxListener.prototype.openUnknownTag=function(a,b){};WYMeditor.XhtmlSaxListener.prototype.closeBlockTag=function(a){this._last_node_was_text=false;
if(this._insideTagToRemove){if(this._tag_stack.length===this._removedTagStackIndex){this._insideTagToRemove=false
}this._lastTagRemoved=true;return}this.output=this.output.replace(/<br \/>$/,"")+this._getClosingTagContent("before",a)+"</"+a+">"+this._getClosingTagContent("after",a)
};WYMeditor.XhtmlSaxListener.prototype.closeUnknownTag=function(a){};WYMeditor.XhtmlSaxListener.prototype.closeUnopenedTag=function(a){this._last_node_was_text=false;
if(this._insideTagToRemove){return}if(a==="li"&&this._extraLIClosingTags){this._extraLIClosingTags--
}else{this.output+="</"+a+">"}};WYMeditor.XhtmlSaxListener.prototype.avoidStylingTagsAndAttributes=function(){this.avoided_tags=["div","span"];
this.validator.skiped_attributes=["style"];this.validator.skiped_attribute_values=["MsoNormal","main1"];
this._avoiding_tags_implicitly=true};WYMeditor.XhtmlSaxListener.prototype.allowStylingTagsAndAttributes=function(){this.avoided_tags=[];
this.validator.skiped_attributes=[];this.validator.skiped_attribute_values=[];this._avoiding_tags_implicitly=false
};WYMeditor.XhtmlSaxListener.prototype.isBlockTag=function(a){return !WYMeditor.Helper.contains(this.avoided_tags,a)&&WYMeditor.Helper.contains(this.block_tags,a)
};WYMeditor.XhtmlSaxListener.prototype.isInlineTag=function(a){return !WYMeditor.Helper.contains(this.avoided_tags,a)&&WYMeditor.Helper.contains(this.inline_tags,a)
};WYMeditor.XhtmlSaxListener.prototype.insertContentAfterClosingTag=function(a,b){this._insertContentWhenClosingTag("after",a,b)
};WYMeditor.XhtmlSaxListener.prototype.insertContentBeforeClosingTag=function(a,b){this._insertContentWhenClosingTag("before",a,b)
};WYMeditor.XhtmlSaxListener.prototype.removeUnwantedClasses=function(a){var c,b;
if(!a["class"]){return a}for(b=0;b<WYMeditor.CLASSES_REMOVED_BY_PARSER.length;++b){c=new RegExp("(^|\\s)"+WYMeditor.CLASSES_REMOVED_BY_PARSER[b]+"($|\\s)","gi");
a["class"]=a["class"].replace(c,"$1")}a["class"]=a["class"].replace(/\s$/,"");return a
};WYMeditor.XhtmlSaxListener.prototype.fixNestingBeforeOpeningBlockTag=function(a,b){if(!this._last_node_was_text&&(a=="ul"||a=="ol")&&this.last_tag&&!this.last_tag_opened&&this.last_tag=="li"){if(this._lastTagRemoved){this._insideTagToRemove=true;
this._removedTagStackIndex=this._tag_stack.length-1}else{if(!this._shouldRemoveTag(a,b)){this.output=this.output.replace(/<\/li>\s*$/,"");
this.insertContentAfterClosingTag(a,"</li>")}}}else{if((a=="ul"||a=="ol")&&this.last_tag&&this.last_tag_opened&&(this.last_tag=="ul"||this.last_tag=="ol")){if(!this._shouldRemoveTag(a,b)){this.output+=this.helper.tag("li",{},true);
this.insertContentAfterClosingTag(a,"</li>")}this._last_node_was_text=false}else{if(a=="li"){if(this._tag_stack.length>=2){var c=this._tag_stack[this._tag_stack.length-2];
if(c=="li"&&!this._shouldRemoveTag(a,b)){this._open_tags.li-=1;if(this._open_tags.li===0){this._open_tags.li=undefined
}this._tag_stack.splice(this._tag_stack.length-2,1);this._last_node_was_text=false;
if(!this._insideTagToRemove){this.output+="</li>"}else{if(this._tag_stack.length-1===this._removedTagStackIndex){this._insideTagToRemove=false;
this._lastTagRemoved=true;this._extraLIClosingTags++}}}}}}}};WYMeditor.XhtmlSaxListener.prototype._insertContentWhenClosingTag=function(b,a,c){if(!this["_insert_"+b+"_closing"]){this["_insert_"+b+"_closing"]=[]
}if(!this["_insert_"+b+"_closing"][a]){this["_insert_"+b+"_closing"][a]=[]}this["_insert_"+b+"_closing"][a].push(c)
};WYMeditor.XhtmlSaxListener.prototype._getClosingTagContent=function(b,a){if(this["_insert_"+b+"_closing"]&&this["_insert_"+b+"_closing"][a]&&this["_insert_"+b+"_closing"][a].length>0){return this["_insert_"+b+"_closing"][a].pop()
}return""};WYMeditor.XhtmlSaxListener.prototype._shouldRemoveTag=function(a,b){var c;
if(!b["class"]){return false}c=b["class"].split(" ");if(jQuery.inArray(WYMeditor.EDITOR_ONLY_CLASS,c)>-1){return true
}return false};WYMeditor.WymCssLexer=function(b,a){a=(typeof a=="undefined"?true:a);
jQuery.extend(this,new WYMeditor.Lexer(b,(a?"Ignore":"WymCss")));this.mapHandler("WymCss","Ignore");
if(a===true){this.addEntryPattern("/\\\x2a[<\\s]*WYMeditor[>\\s]*\\\x2a/","Ignore","WymCss");
this.addExitPattern("/\\\x2a[</\\s]*WYMeditor[>\\s]*\\\x2a/","WymCss")}this.addSpecialPattern("[\\sa-z1-6]*\\\x2e[a-z-_0-9]+","WymCss","WymCssStyleDeclaration");
this.addEntryPattern("/\\\x2a","WymCss","WymCssComment");this.addExitPattern("\\\x2a/","WymCssComment");
this.addEntryPattern("\x7b","WymCss","WymCssStyle");this.addExitPattern("\x7d","WymCssStyle");
this.addEntryPattern("/\\\x2a","WymCssStyle","WymCssFeedbackStyle");this.addExitPattern("\\\x2a/","WymCssFeedbackStyle");
return this};WYMeditor.WymCssParser=function(){this._in_style=false;this._has_title=false;
this.only_wym_blocks=true;this.css_settings={classesItems:[],editorStyles:[],dialogStyles:[]};
return this};WYMeditor.WymCssParser.prototype.parse=function(a,b){b=(typeof b=="undefined"?this.only_wym_blocks:b);
this._Lexer=new WYMeditor.WymCssLexer(this,b);this._Lexer.parse(a)};WYMeditor.WymCssParser.prototype.Ignore=function(a,b){return true
};WYMeditor.WymCssParser.prototype.WymCssComment=function(b,a){if(b.match(/end[a-z0-9\s]*wym[a-z0-9\s]*/mi)){return false
}if(a==WYMeditor.LEXER_UNMATCHED){if(!this._in_style){this._has_title=true;this._current_item={title:WYMeditor.Helper.trim(b)}
}else{if(this._current_item[this._current_element]){if(!this._current_item[this._current_element].expressions){this._current_item[this._current_element].expressions=[b]
}else{this._current_item[this._current_element].expressions.push(b)}}}this._in_style=true
}return true};WYMeditor.WymCssParser.prototype.WymCssStyle=function(b,a){if(a==WYMeditor.LEXER_UNMATCHED){b=WYMeditor.Helper.trim(b);
if(b!==""){this._current_item[this._current_element].style=b}}else{if(a==WYMeditor.LEXER_EXIT){this._in_style=false;
this._has_title=false;this.addStyleSetting(this._current_item)}}return true};WYMeditor.WymCssParser.prototype.WymCssFeedbackStyle=function(b,a){if(a==WYMeditor.LEXER_UNMATCHED){this._current_item[this._current_element].feedback_style=b.replace(/^([\s\/\*]*)|([\s\/\*]*)$/gm,"")
}return true};WYMeditor.WymCssParser.prototype.WymCssStyleDeclaration=function(b){b=b.replace(/^([\s\.]*)|([\s\.*]*)$/gm,"");
var a="";if(b.indexOf(".")>0){var c=b.split(".");this._current_element=c[1];a=c[0]
}else{this._current_element=b}if(!this._has_title){this._current_item={title:(!a?"":a.toUpperCase()+": ")+this._current_element};
this._has_title=true}if(!this._current_item[this._current_element]){this._current_item[this._current_element]={name:this._current_element}
}if(a){if(!this._current_item[this._current_element].tags){this._current_item[this._current_element].tags=[a]
}else{this._current_item[this._current_element].tags.push(a)}}return true};WYMeditor.WymCssParser.prototype.addStyleSetting=function(a){for(var b in a){var c=a[b];
if(typeof c=="object"&&b!="title"){this.css_settings.classesItems.push({name:WYMeditor.Helper.trim(c.name),title:a.title,expr:WYMeditor.Helper.trim((c.expressions||c.tags).join(", "))});
if(c.feedback_style){this.css_settings.editorStyles.push({name:"."+WYMeditor.Helper.trim(c.name),css:c.feedback_style})
}if(c.style){this.css_settings.dialogStyles.push({name:"."+WYMeditor.Helper.trim(c.name),css:c.style})
}}}};