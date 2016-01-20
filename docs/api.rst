=============
WYMeditor API
=============

The main way GroupServer code loads WYMeditor is through the
script ``/++resource++wymeditor-1.1.1/gswymeditor-min.js``. It
modifies a ``<text>`` element, replacing it with the HTML-editor
provided by WYMeditor, with some GroupServer changes_.

.. code-block:: xml

    <script metal:fill-slot="javascript" class="gs-content-js-wymeditor"
            type="text/javascript"
            data-text-element="#form\.aboutText"
            data-submit="#form\.actions\.change"
            src="/++resource++wymeditor-1.1.1/gswymeditor-min.js"
            defer="true"> </script>

:``class``: The ``class`` for the ``<script>`` element must be
            ``gs-content-js-wymeditor``.

:``data-text-element``: The **selector** for the ``<text>``
                        element that should have the WYMeditor
                        applied to it.

:``data-submit``: The **selector** for the button that will
                  submit the form. (The WYMeditor marshals the
                  code out of the editor and into the ``<text>``
                  element when the form is submitted.)

:Note: the standard ``zope.formlib`` identifiers for buttons have
       ``.`` characters in them that must be escaped.

Changes
=======

The main change to the default WYMeditor interface is to size the
editor to the standard-width of a GroupServer page-body. In
addition the selector for the different block-elements (*Styles
and formatting*) is open by default.

The buttons in the toolbar are rearranged into six groups, using
Bootstrap button groups.

#. Font
#. Link
#. List and indent
#. Embed (image, table, and Word)
#. View (source, and preview)
#. Undo and redo

The dialogs that are opened — for pasting from Word, and creating
a link for example — use a sans-serif typeface with the same
layout as a standard GroupServer page.

..  LocalWords:  WYMeditor API wymeditor gswymeditor
