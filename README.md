codemirror-mode-zenscript
==============
[![npm version](https://badge.fury.io/js/codemirror-mode-zenscript.svg)](https://badge.fury.io/js/codemirror-mode-zenscript)
[![dependencies Status](https://david-dm.org/CraftTweaker/codemirror-mode-zenscript/status.svg)](https://david-dm.org/CraftTweaker/codemirror-mode-zenscript)

> A CodeMirror mode for [ZenScript](https://github.com/CraftTweaker/ZenScript)

## Installation

```console
npm install codemirror codemirror-mode-zenscript --save
```

## Usage

1. Include `codemirror-mode-zenscript` into your project.

    ```html
    <!-- You can simply add zenscript.js as a script tag: -->
    <script src="js/codemirror.js"></script>
    <script src="js/codemirror-mode-zenscript/dist/codemirror-mode-zenscript.js"></script>
    ```

    or

    ```js
    // If using a build pipeline like webpack, you can simply import the module.
    // The mode is registered automatically when importing. See below:
    import CodeMirror from 'codemirror';
    import registerZenScriptMode from 'codemirror-mode-zenscript';
    ```

2. Set `zenscript` as the mode when creating the CodeMirror editor.

    ```js
    CodeMirror.fromTextArea(document.getElementById('code'), {mode: 'zenscript'});
    ```