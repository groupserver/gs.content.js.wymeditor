'use strict';
// GroupServer skin for WYMeditor by Michael JasonSmith
//
// Copyright © 2013, 2016 OnlineGroups.net and Contributors.
// All Rights Reserved. Licensed under the MIT (MIT-license.txt)
// <http://source.iopen.net/groupserver/gs.content.js.wymeditor>
//
// Based on the "default" skin.
//
// Copyright (c) 2005 - 2009 Jean-Francois Hovinne, http://www.wymeditor.org/
// Dual licensed under the MIT (MIT-license.txt)
// and GPL (GPL-license.txt) licenses.
//
// For further information visit:
//      http://www.wymeditor.org/
//
jQuery.noConflict();
WYMeditor.SKINS['gs'] = {

    init: function(wym) {
        function rejig(toolbar, buttonSelector, newClass) {
            var newGroup, buttons;

            newGroup = jQuery('<ul class="btn-group"></ul>');
            newGroup.addClass(newClass);
            newGroup.appendTo(toolbar);

            buttons = jQuery(buttonSelector);
            buttons.detach();

            newGroup.append(buttons);
            return newGroup;
        }

        var toolbar;
        jQuery(wym._box).attr('role', 'application');

        //render following sections as panels
        jQuery(wym._box).find(wym._options.classesSelector)
          .addClass('wym_panel');
        jQuery(wym._box).find(wym._options.containersSelector)
          .addClass('wym_panel');

        // Add a bit of Bootstrap
        toolbar = jQuery(wym._box).find('div.wym_tools');
        toolbar.addClass('btn-toolbar')
            .find('a')
            .addClass('btn')
            .removeAttr('href');
        //render following sections as buttons
        jQuery(wym._box).find(wym._options.toolsSelector)
          .addClass('wym_buttons');

        rejig(toolbar,
              '.wym_tools_strong, .wym_tools_emphasis, ' +
              '.wym_tools_superscript, .wym_tools_subscript',
              'gs_buttons_style');
        rejig(toolbar,
              '.wym_tools_link, .wym_tools_unlink',
              'gs_buttons_link');
        rejig(toolbar,
              '.wym_tools_ordered_list, .wym_tools_unordered_list, ' +
              '.wym_tools_indent, .wym_tools_outdent',
              'gs_buttons_list');
        rejig(toolbar,
              '.wym_tools_image, .wym_tools_table, .wym_tools_paste',
              'gs_buttons_block');
        rejig(toolbar,
              '.wym_tools_html, .wym_tools_preview',
              'gs_buttons_preview');
        rejig(toolbar,
              '.wym_tools_undo, .wym_tools_redo',
              'gs_buttons_edit');
        toolbar.find('h2 + ul').remove();

        // auto add some margin to the main area sides if left area
        // or right area are not empty (if they contain sections)
        jQuery(wym._box).find('div.wym_area_right ul')
          .parents('div.wym_area_right').show()
          .parents(wym._options.boxSelector)
          .find('div.wym_area_main')
          .css({'margin-right': '155px'});

        jQuery('.wym_containers h2').text('Styles and formatting');
        jQuery('.wym_classes').hide();

        jQuery(wym._box).find('div.wym_area_left ul')
          .parents('div.wym_area_left').show()
          .parents(wym._options.boxSelector)
          .find('div.wym_area_main')
          .css({'margin-left': '155px'});

        //make hover work under IE < 7
        jQuery(wym._box).find('.wym_section').hover(function() {
          jQuery(this).addClass('hover');
        },function() {
          jQuery(this).removeClass('hover');
        });
    }
};
