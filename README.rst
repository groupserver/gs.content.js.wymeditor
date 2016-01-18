===========================
``gs.content.js.wymeditor``
===========================
~~~~~~~~~~~~~~~~~~~~~~~~~~~
WYMeditor plugin for jQuery
~~~~~~~~~~~~~~~~~~~~~~~~~~~

:Author: `Michael JasonSmith`_
:Contact: Michael JasonSmith <mpj17@onlinegroups.net>
:Date: 2016-01-18
:Organization: `GroupServer.org`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 4.0 International License`_
  by `OnlineGroups.net`_.

..  _Creative Commons Attribution-Share Alike 4.0 International License:
    http://creativecommons.org/licenses/by-sa/4.0/

            
Introduction
============

GroupServer_ uses the WYMeditor_ plugin for jQuery_ to provide a
*what-you-see-is-what-you-mean* interface for editing text. This
product provides the resource_ that supplies the WYMeditor code
that is loaded through some JavaScript_.

Resource
========

This product supplies the resource *directory*
``wymeditor-1.0.0b5``. All the files for the WYMeditor plugin are
provided (such as ``jquery.wymeditor.js``). In addition the code
for creating a WYMeditor widget in GroupServer,
``gswymeditor.js`` (and its minified version) is supplied.

The ``gswymeditor.js`` loads the parameters from the calling
JavaScript_, sets the paths to that provided by the resource, and
code creates a WYMeditor widget with a GroupServer-specific
skin_.

Skin
----

The WYMeditor skin ``gs`` is loaded by ``gswymeditor.js``. This
skin

* Applies Bootstrap_ button-classes to the buttons,
* Organises the toolbar-buttons into groups, and
* Uses GroupServer-style headings and form-elements.

JavaScript
==========

The JavaScript for loading the WYMeditor on a page is provided by
``/++resource++wymeditor-1.1.1/gswymeditor-min.js``::

    <script metal:fill-slot="javascript" class="gs-content-js-wymeditor"
            type="text/javascript"
            data-text-element="#form\.aboutText"
            data-submit="#form\.actions\.change"
            src="/++resource++wymeditor-1.1.1/gswymeditor-min.js"
            defer="true"> </script>

:``class``: The ``class`` for the ``<script>`` element must be
            ``gs-content-js-wymeditor``.

:``data-text-element``: The selector for the ``<text>`` element
                        that should have the WYMeditor applied to
                        it.

:``data-submit``: The selector for the button that will submit
                  the form. (The WYMeditor marshals the code out
                  of the editor and into the ``<text>`` element
                  when the form is submitted.)

:Note: the standard ``zope.formlib`` identifiers for buttons have
       ``.`` characters in them that must be escaped.

Acknowledgements
================

WYMeditor_ is written by Jean-Francois Hovinne. 

Resources
=========

- Code repository:
  https://github.com/groupserver/gs.content.js.wymeditor/
- Questions and comments to
  http://groupserver.org/groups/development/
- Report bugs at https://redmine.iopen.net/projects/groupserver/

.. _GroupServer: http://groupserver.org/
.. _GroupServer.org: http://groupserver.org/
.. _OnlineGroups.Net: https://onlinegroups.net
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
.. _getScript: http://api.jquery.com/jQuery.getScript/
.. _Zope: http://zope.org/
.. _Plone: http://plone.org
.. _jQuery: http://jquery.com/
.. _Bootstrap: http://twitter.github.com/bootstrap/
.. _WYMeditor: http://wymeditor.github.io/

..  LocalWords:  jQuery UI Plone minified wymeditor WYMeditor
