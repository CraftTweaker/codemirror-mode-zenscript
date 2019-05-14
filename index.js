import CodeMirror from "codemirror";
import "codemirror/addon/mode/simple";

CodeMirror.defineSimpleMode("zenscript", {
    start: [
        {regex: /"(?:[^\\]|\.)*?(?:"|$)/, token: "string"},
        {regex: /'(?:[^\\]|\\.)*?(?:'|$)/, token: "string"},
        {regex: /(zenClass)(\s+)(\w*)/, token: ["keyword", null, "def"]},
        {regex: /\b(zenConstructor)\s*(?=\()/, token: ["keyword"]},
        {regex: /(function)(\s+)([A-Za-z_$][\w$]*)\s*(?=\()/, token: ["keyword", null, "def"]},
        {regex: /(?!function)([A-Za-z_$][\w$]*)\s*(?=\()/, token: ["def"]},
        {regex: /\b(\w+)(\.)(\w+)((\.)(\w+))\b(?!;)/, token: ["variable-2", "operator", "def"]},
        {regex: /(<)\b(.*?)(:)(.*?)(:)?(\*|\d+)?(>)/, token: ["keyword", "variable-3", "keyword", "variable-2", "keyword", "number", "keyword"]},
        {regex: /^(\s*)(#)(debug|ignoreBracketErrors|norun|loader|priority|ikwid|profile|zslint|modloaded)\b/, token: [null, "tag", "attribute"]},
        {regex: /\b(var|val|static|global)\b/, token: ["def"]},
        {regex: /\b(import)\b\s/, token: ["keyword", null]},
        {regex: /(\w+(?=;))(;)/, token: ["variable-2", "atom"]},
        {regex: /\b((0([xX])[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))(([eE])([+-])?[0-9]+)?)([LlFfUuDd]|UL|ul)?\b/i, token: "number"},
        {regex: /\b((?:[a-z]\w*.)*[A-Z]+\w*)(?=\[)/, token: "variable-2"},
        {regex: /[{[(]/, indent: true},
        {regex: /[}\])]/, dedent: true},
        {regex: /true|false|null/, token: "atom"},
        {regex: /\b(in|has|void|as|version|for|return|while|break|instanceof)\b/, token: "keyword"},
        {regex: /\b(any|bool|byte|short|int|long|float|double|string)\b/, token: "builtin"},
        {regex: /\b(?<=(as\s))[a-zA-Z]+\b/, token: "builtin"},
        {regex: /\b(function)\b/, token: "keyword"},
        {regex: /\b(if|else)\b/, token: "keyword"},
        {regex: /\/\/.*/, token: "comment"},
        {regex: /#.*/, token: "comment"},
        {regex: /\/\*/, token: "comment", next: "comment"},
        {regex: /(\.\.|\+=|\+|-=|-|\*=|\*|\/=|\/|%=|%|\|=|\||\|\||&=|&&|&|\^=|\^|\?|:|~=|~|;|<=|<|>=|>|==|=|!=|!|\$)/, token: "operator"}
    ],
    comment: [
        {regex: /.*?\*\//, token: "comment", next: "start"},
        {regex: /.*/, token: "comment"}
    ],
    meta:
        {dontIndentStates: ["comment"], lineComment: "//"}
});
