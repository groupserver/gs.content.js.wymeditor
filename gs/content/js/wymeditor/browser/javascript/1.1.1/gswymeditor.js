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
    var scriptElement, textElementSelector, submitButtonSelector, options,
    dialogHtml = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" ' +
        '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' +
        '<html dir="' + WYMeditor.DIRECTION + '">' +
        '<head>' +
        '<title>' + WYMeditor.DIALOG_TITLE + '</title>' +
        '<style type="text/css">body {font:16px/20px sans-serif;}' +
        'label {display:block;}' +
        'input {display:block;margin:0.625em 0 1.25em 0.625em;}' +
        '.row-indent input{display:inline;margin:0 0.625em 0 0;}' +
        'fieldset {border:none;}' +
        '.row{padding-left:1.25em;}</style>' +
        '</head>' +
        WYMeditor.DIALOG_BODY +
        '</html>';
    scriptElement = jQuery('script.gs-content-js-wymeditor');
    textElementSelector = scriptElement.data('text-element');
    submitButtonSelector = scriptElement.data('submit');
    options = {
        updateSelector: submitButtonSelector,
        basePath: '/++resource++wymeditor-1.1.1/',
        wymPath: '/++resource++wymeditor-1.1.1/jquery.wymeditor.js',
        iframeBasePath: '/++resource++wymeditor-1.1.1/skins/gs/iframe/',
        dialogFeatures: 'menubar=no,toobar=no,width=440,height=330',
        dialogHtml: dialogHtml,
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
