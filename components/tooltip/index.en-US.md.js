webpackJsonp([42,91],{658:function(t,e){t.exports={content:["section",["p","A simple text popup tip."],["h2","When To Use"],["ul",["li",["p","The tip shows while mouse enter, and hides while mouse leave. The Tooltip doesn't support complex text and operation."]],["li",["p","It can provide an explanation of ",["code","button/text/operation"]," that can cover the usage of the default system ",["code","title"],"."]]]],meta:{category:"Components",type:"Data Display",title:"Tooltip",filename:"components/tooltip/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Note",title:"Note"},"Note"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","title"],["td","prompt text"],["td","string/vnode"],["td","-"]]]],["h3","Common API"],["p","The following APIs are shared by Tooltip, Popconfirm, Popover."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","placement"],["td","to set the position, which can be one of ",["code","top"]," ",["code","left"]," ",["code","right"]," ",["code","bottom"]," ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","leftTop"]," ",["code","leftBottom"]," ",["code","rightTop"]," ",["code","rightBottom"]],["td","string"],["td","top"]],["tr",["td","onVisibleChange"],["td","callback of the visible attribute changed"],["td","(visible) => void"],["td","none"]],["tr",["td","mouseEnterDelay"],["td","delay time to show when mouse enter.unit: s"],["td","number"],["td","0"]],["tr",["td","mouseLeaveDelay"],["td","delay time to hide when mouse leave.unit: s"],["td","number"],["td","0.1"]],["tr",["td","trigger"],["td","triggering mode: can be hover, focus, or click."],["td","string"],["td","hover"]]]],["h2","Note"],["p","Please ensure that the child node of ",["code","Tooltip"]," accepts ",["code","onMouseEnter"],", ",["code","onMouseLeave"],", ",["code","onFocus"],", ",["code","onClick"]," event."]]}}});