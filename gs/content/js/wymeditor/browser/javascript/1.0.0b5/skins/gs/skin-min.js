jQuery.noConflict();WYMeditor.SKINS.gs={init:function(c){function b(f,d,g){var h=null,e=null;
h=jQuery('<ul class="btn-group"></ul>');h.addClass(g);h.appendTo(f);e=jQuery(d);e.detach();
h.append(e);return h}var a=null;jQuery(c._box).attr("role","application");jQuery(c._box).find(c._options.classesSelector).addClass("wym_panel");
jQuery(c._box).find(c._options.containersSelector).addClass("wym_panel");a=jQuery(c._box).find("div.wym_tools");
a.addClass("btn-toolbar").find("a").addClass("btn");jQuery(c._box).find(c._options.toolsSelector).addClass("wym_buttons");
b(a,".wym_tools_strong, .wym_tools_emphasis, .wym_tools_superscript, .wym_tools_subscript","gs_buttons_style");
b(a,".wym_tools_link, .wym_tools_unlink","gs_buttons_link");b(a,".wym_tools_ordered_list, .wym_tools_unordered_list, .wym_tools_indent, .wym_tools_outdent","gs_buttons_list");
b(a,".wym_tools_image, .wym_tools_table, .wym_tools_paste","gs_buttons_block");b(a,".wym_tools_html, .wym_tools_preview","gs_buttons_preview");
b(a,".wym_tools_undo, .wym_tools_redo","gs_buttons_edit");a.find("h2 + ul").remove();
jQuery(c._box).find("div.wym_area_right ul").parents("div.wym_area_right").show().parents(c._options.boxSelector).find("div.wym_area_main").css({"margin-right":"155px"});
jQuery(".wym_containers h2").text("Styles and formatting");jQuery(".wym_classes").hide();
jQuery(c._box).find("div.wym_area_left ul").parents("div.wym_area_left").show().parents(c._options.boxSelector).find("div.wym_area_main").css({"margin-left":"155px"});
jQuery(c._box).find(".wym_section").hover(function(){jQuery(this).addClass("hover")
},function(){jQuery(this).removeClass("hover")})}};