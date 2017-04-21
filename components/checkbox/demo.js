webpackJsonp([18,91],{526:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684 checkbox\u3002"]],"en-US":[["p","Basic usage of checkbox."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        checkbox<span class="token punctuation">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){s.e(177,function(a){n(s(1181))})})}}},527:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5728\u5b9e\u73b0\u5168\u9009\u6548\u679c\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u7528\u5230 ",["code","indeterminate"]," \u5c5e\u6027\u3002"]],"en-US":[["p","The ",["code","indeterminate"]," property can help you to achieve a 'check all' effect."]]},meta:{order:4,title:{"zh-CN":"\u5168\u9009","en-US":"Check all"},filename:"components/checkbox/demo/check-all.md",id:"components-checkbox-demo-check-all"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox</span> <span class="token attr-name">:indeterminate</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indeterminate<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkAll<span class="token punctuation">"</span></span> <span class="token attr-name">@onChange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onCheckAllChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Check all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkedList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option</span> <span class="token attr-name">in</span> <span class="token attr-name">plainOptions"</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>option<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox-group</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        plainOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Apple\'</span><span class="token punctuation">,</span> <span class="token string">\'Pear\'</span><span class="token punctuation">,</span> <span class="token string">\'Orange\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        checkedList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Apple\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        checkAll<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">onCheckAllChange</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>checkedList <span class="token operator">=</span> val <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>plainOptions <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    computed<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">indeterminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> checkedCount <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>checkedList<span class="token punctuation">.</span>length\n        <span class="token keyword">this</span><span class="token punctuation">.</span>checkAll <span class="token operator">=</span> checkedCount <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>plainOptions<span class="token punctuation">.</span>length\n        <span class="token keyword">return</span> checkedCount <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> checkedCount <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>plainOptions<span class="token punctuation">.</span>length\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){s.e(176,function(a){n(s(1182))})})}}},528:function(n,a,s){n.exports={content:{"zh-CN":[["p","checkbox \u4e0d\u53ef\u7528\u3002"]],"en-US":[["p","Disabled checkbox."]]},meta:{order:1,title:{"zh-CN":"\u4e0d\u53ef\u7528","en-US":"Disabled"},filename:"components/checkbox/demo/disabled.md",id:"components-checkbox-demo-disabled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>unchecked<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        checked<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        unchecked<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){s.e(175,function(a){n(s(1183))})})}}},529:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u65b9\u4fbf\u7684\u4ece\u6570\u7ec4\u751f\u6210 Checkbox \u7ec4\u3002"]],"en-US":[["p","Generate a group of checkboxes from an array."]]},meta:{order:3,title:{"zh-CN":"Checkbox \u7ec4","en-US":"Checkbox Group"},filename:"components/checkbox/demo/group.md",id:"components-checkbox-demo-group"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkedList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-checkbox</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option</span> <span class="token attr-name">in</span> <span class="token attr-name">plainOptions"</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>option<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-checkbox-group</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        plainOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Apple\'</span><span class="token punctuation">,</span> <span class="token string">\'Pear\'</span><span class="token punctuation">,</span> <span class="token string">\'Orange\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        checkedList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Apple\'</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){s.e(174,function(a){n(s(1184))})})}}},682:function(n,a,s){n.exports={basic:s(526),"check-all":s(527),disabled:s(528),group:s(529)}}});