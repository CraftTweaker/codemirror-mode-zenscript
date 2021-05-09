import CodeMirror from "codemirror";
import "codemirror/addon/mode/simple";

CodeMirror.defineSimpleMode("zenscript", {
    start: [
        {regex: /"(?:[^\\]|\.)*?(?:"|$)/u, token: "string"},
        {regex: /'(?:[^\\]|\\.)*?(?:'|$)/u, token: "string"},
        {regex: /(zenClass)(\s+)(\w*)/u, token: ["keyword", null, "def"]},
        {regex: /\b(zenConstructor)\s*(?=\()/u, token: ["keyword"]},
        {regex: /(function)(\s+)([A-Za-z_$][\w$]*)\s*(?=\()/u, token: ["keyword", null, "def"]},
        {regex: /([A-Za-z_$][\w$]*)(?=\s*\()/u, token: ["def"]},
        {regex: /\b(\w+)(\.)(\w+)(?:(\.)(\w+))/u, token: ["variable-2", "operator", "variable-3", "operator", "builtin"]},
        {regex: /(<)\b(.*?)(:)(.*?)(:)?(\*|\d+)?(>)/u, token: ["keyword", "variable-3", "keyword", "variable-2", "keyword", "number", "keyword"]},
        {regex: /^(\s*)(#)(debug|ignoreBracketErrors|norun|loader|priority|ikwid|profile|zslint|modloaded)\b/u, token: [null, "tag", "attribute"]},
        {regex: /\b(var|val|static|global)\b/u, token: ["def"]},
        {regex: /\b(as)(\s)+([a-zA-Z]+)\b/u, token: ["builtin", null, "variable-3"]},
        {regex: /\b(instanceof|get|implements|set|function|override|const|if|else|do|while|for|throw|panic|lock|try|catch|finally|return|break|continue|switch|case|default|in|is|as|match|throws|super|new)\b/u, token: "keyword"},
        {regex: /\b(variant|abstract|final|private|public|export|internal|static|protected|implicit|virtual|extern|immutable)\b/u, token: "keyword"},
        {regex: /\b(zenClass|zenConstructor|alias|class|interface|enum|struct|expand|variant|set|void|bool|byte|sbyte|short|ushort|int|uint|long|ulong|usize|float|double|char|string)\b/u, token: "builtin"},
        {regex: /\b(import)(\s)(.+\.)(.*)(\s*;)/u, token: ["keyword", null, "variable-3", "variable-2", "keyword"]},
        {regex: /(\w+(?=;))(;)/u, token: ["variable-2", "atom"]},
        {regex: /\b((0([xX])[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))(([eE])([+-])?[0-9]+)?)([LlFfUuDd]|UL|ul)?\b/iu, token: "number"},
        {regex: /\b((?:[a-z]\w*\.)*[A-Z]+\w*)(?=\[)/u, token: "variable-2"},
        {regex: /[{[(]/u, indent: true},
        {regex: /[}\])]/u, dedent: true},
        {regex: /true|false|null/u, token: "atom"},
        {regex: /\b(function)\b/u, token: "keyword"},
        {regex: /\b(if|else)\b/u, token: "keyword"},
        {regex: /\/\/.*/u, token: "comment"},
        {regex: /#.*/u, token: "comment"},
        {regex: /\/\*/u, token: "comment", next: "comment"},
        {regex: /(\.|\.\.|\.\.\.|,|\+|\+=|\+\+|-|-=|--|~|~=|\*|\*=|\/|\/=|%|%=|\||\|=|\|\||&|&=|&&|\^|\^=|\?|\?\.|\?\?|<|<=|<<|<<=|>|>=|>>|>>=|>>>|>>>=|=>|=|==|===|!|!=|!==|\$|`)/u, token: "keyword"}
    ],
    comment: [
        {regex: /.*?\*\//u, token: "comment", next: "start"},
        {regex: /.*/u, token: "comment"}
    ],
    meta:
        {dontIndentStates: ["comment"], lineComment: "//"}
});
