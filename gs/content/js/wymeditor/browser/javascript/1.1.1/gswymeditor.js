'use strict';
//
// Copyright © 2013, 2016 OnlineGroups.net and Contributors.
// All Rights Reserved.

// This software is subject to the provisions of the Zope Public
// License, Version 2.1 (ZPL).  A copy of the ZPL should accompany this
// distribution.

// THIS SOFTWARE IS PROVIDED "AS IS" AND ANY AND ALL EXPRESS OR IMPLIED
// WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF TITLE, MERCHANTABILITY, AGAINST INFRINGEMENT, AND
// FITNESS FOR A PARTICULAR PURPOSE. -->
//
jQuery.noConflict();

function gs_content_js_wymeditor_init() {
    var scriptElement, textElementSelector, submitButtonSelector, options;
    scriptElement = jQuery('script.gs-content-js-wymeditor');
    textElementSelector = scriptElement.data('text-element');
    submitButtonSelector = scriptElement.data('submit');
    options = {
        updateSelector: submitButtonSelector,
        basePath: '/++resource++wymeditor-1.1.1/',
        wymPath: '/++resource++wymeditor-1.1.1/jquery.wymeditor.js',
        iframeBasePath: '/++resource++wymeditor-1.1.1/skins/gs/iframe/',
        dialogFeatures: 'menubar=no,toobar=no,width=390,height=330',
        lang: 'en',
        skin: 'gs',
        classesItems: [
            {name: 'dotted-inline-list',
             title: 'Inline list',
             expr: 'ul'},
            {name: 'alert',
             title: 'Alert',
             expr: 'p, ul, div'},
            {name: 'small',
             title: 'Small',
             expr: '*'}]
    };
    jQuery(textElementSelector).wymeditor(options);
    // --=mpj17=-- For some reason the WYMeditor does not init rangy
    rangy.init();
}

jQuery(window).load(function() {
    var modules = ['/++resource++wymeditor-1.1.1/jquery.wymeditor.js',
                   '/++resource++wymeditor-1.1.1/skins/gs/skin.js'];
    gsJsLoader.with_module(modules, gs_content_js_wymeditor_init);
});
