AUI.add("aui-form-builder-field",function(bH){var bB=bH.Lang,aE=bB.isArray,ag=bB.isString,c="acceptChildren",ax="boundingBox",bP="builder",bX="button",C="buttons",b2="buttonsNode",bd="checkbox",D="checked",b6="children",bT="clearfix",ay="close",aA="component",b1="contentBox",a9="container",y="default",aG="delete",bv=".",aP="drag",bg="dragContainer",b3="dragContainerNode",ac="dragNodesList",aq="drop",aI="dropContainer",a3="dropContainerNode",W="dropNode",az="dropZone",aX="dropZoneNode",be="duplicate",G="edit",bl="",a4="field",f="fields",br="for",r="form",aN="formBuilder",bc="form-builder-field",o="helper",ak="hidden",q="icon",bS="id",aa="label",Y="labelNode",aV="metadata",ar="name",b8="node",a="panel",aO="portalLayout",a7="predefinedValue",a5="proxy",ai="required",bm="state",a0="settings",aj="settingsFormNode",bL="showLabel",am="size",P=" ",ah="string",bJ="templateNode",by="zone",aH="widget",w=bH.ClassNameManager.getClassName,a2=w(aA),ba=w(a4,aa),b5=w(o,bT),V=w(o,ak),bu=w(bm,y),x=w(r,bP,bX),al=w(r,bP,bX,aG),aU=w(r,bP,bX,be),H=w(r,bP,bX,G),b7=w(r,bP,q),i=w(r,bP,q,aG),t=w(r,bP,q,be),bD=w(r,bP,q,G),bq=w(r,bP,a4),bf=w(r,bP,a4,C),aY=w(r,bP,aq,b8),bz=w(r,bP,aq,by),bR=w(aH),bF='<li class="'+[bR,a2,bq].join(P)+'"></li>',m='<div class="'+[bf,V].join(P)+'">'+'<a class="'+[x,H].join(P)+'" href="javascript:;" title="Edit">'+'<div class="'+[b7,bD].join(P)+'"></div>'+"</a>"+'<a class="'+[x,aU].join(P)+'" href="javascript:;" title="Duplicate">'+'<div class="'+[b7,t].join(P)+'"></div>'+"</a>"+'<a class="'+[x,al].join(P)+'" href="javascript:;" title="Delete">'+'<div class="'+[b7,i].join(P)+'"></div>'+"</a>"+"</div>",bU='<div class="'+b5+'"></div>',aL='<label class="'+ba+'"></label>',U='<ul class="'+bz+'"></ul>';var b4=bH.Component.create({NAME:bc,ATTRS:{acceptChildren:{value:true},dataType:{value:ah},formBuilder:{value:undefined},id:{value:bl},icon:{value:bl},label:{value:bl},name:{valueFn:function(){var A=this;return A.get(O)+(++bH.Env._uidx);}},parent:{value:null},predefinedValue:{value:bl},required:{setter:bH.DataType.Boolean.parse,value:false},selected:{setter:bH.DataType.Boolean.parse,value:false},showLabel:{setter:bH.DataType.Boolean.parse,value:true},template:{value:bl},type:{value:bl},buttonsNode:{valueFn:function(){return bH.Node.create(m);}},dropZoneNode:{valueFn:function(){return bH.Node.create(U);}},labelNode:{valueFn:function(){return bH.Node.create(aL);}},templateNode:{valueFn:"getNode"}},AUGMENTS:[bH.FormBuilderFieldSupport],UI_ATTRS:[c,a7,aa,ar,bL],HTML_PARSER:{buttonsNode:bv+bf,dropZoneNode:bv+bz,labelNode:aa+bv+ba},prototype:{BOUNDING_TEMPLATE:bF,initializer:function(){var A=this;A.get(ax).setData(a4,A);},bindUI:function(){var A=this;},renderUI:function(){var A=this;var cc=A.get(ax);var cd=A.get(b2);var L=A.get(b1);var cb=A.get(Y);var ca=A.get(bJ);if(!cc.contains(cd)){cc.prepend(cd);}if(!L.contains(cb)){L.append(cb);cb.setAttribute(br,ca.get(bS));}if(!L.contains(ca)){L.append(ca);}},saveSettings:function(){var A=this;var L=A.get(aN);var ca=L.get(aj);bH.Array.each(bH.io._serialize(ca._node).split("&"),function(cb){var cc=cb.split("=");A.set(cc[0],decodeURIComponent(cc[1]));});},renderSettings:function(){var A=this;var cb=A.get(aN);var cc=cb.get(aj);if(!A.fieldSettingsNode){A.fieldSettingsNode=bH.Node.create(bU);var cd=bH.Node.create(bU);A.labelField=new bH.Field({type:"text",name:aa,labelText:"Label",value:A.get(aa)}).render(cd);A.labelField.get(b8).on({keyup:bH.bind(A._onLabelKeyUp,A)});A.showLabelField=new bH.Field({type:"checkbox",name:bL,labelText:"Show label",labelAlign:"left",value:A.get(bL)}).render(cd);var L=A.showLabelField.get(b8);L.set(D,A.get(bL));L.on({change:bH.bind(A._onSettingsFieldChange,A)});A._renderSettingsFields([{type:"text",name:ar,labelText:"Name",value:A.get(ar)},{type:"text",name:a7,labelText:"Default value",value:A.get(a7)}],cd);A.requiredField=new bH.Field({type:"checkbox",name:ai,labelText:"Required",labelAlign:"left",value:ai}).render(cd);var ca=A.requiredField.get(b8);ca.set(D,A.get(ai));ca.on({change:bH.bind(A._onSettingsFieldChange,A)});A.propertiesPanel=new bH.Panel({bodyContent:cd,collapsible:true,title:"Properties"}).render();A.fieldSettingsNode.append(A.propertiesPanel.get(ax));}cc.setContent(A.fieldSettingsNode);},getHTML:function(){},getNode:function(){},_onLabelKeyUp:function(L){var A=this;var cb=L.target;var ca=cb.val();A.set(aa,ca);},_onSettingsFieldChange:function(L){var A=this;var cb=L.target;var ca=cb.val();if(cb.get(O)==bd){ca=cb.get(D);}A.set(cb.get(ar),ca);},_renderSettingsFields:function(ca,L){var A=this;bH.each(ca,function(cc){var cd=new bH.Field(cc).render(L);var cb=cd.get(b8);if(cc.type==bd){cb.set(D,cc.value);}A[cc.name+"Field"]=cd;});},_uiSetAcceptChildren:function(cc){var A=this;var ca=A.get(ax);var cb=A.get(aX);var L=ca.one(bv+bz);if(cc&&!L){ca.append(cb);}else{if(!cc&&L){L.remove();}else{if(cc&&L){A.set(aX,L);}}}},_uiSetLabel:function(ca){var A=this;var L=A.get(Y);L.setContent(ca);},_uiSetName:function(ca){var A=this;var L=A.get(bJ);L.set(ar,ca);},_uiSetPredefinedValue:function(ca){var A=this;var L=A.get(bJ);L.val(ca);},_uiSetShowLabel:function(ca){var A=this;var L=A.get(Y);L.toggleClass(V,!ca);}}});bH.FormBuilderField=b4;bH.FormBuilder.types["field"]=bH.FormBuilderField;var bB=bH.Lang,aE=bB.isArray,bi=bB.isNumber,ag=bB.isString,at=function(A){return(A instanceof bH.Node);},aM=function(A){return(A instanceof bH.NodeList);},aT=bH.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),ax="boundingBox",bX="button",bV="buttonType",b1="contentBox",a9="container",bv=".",aP="drag",bg="dragContainer",b3="dragContainerNode",ac="dragNodesList",aq="drop",aI="dropContainer",a3="dropContainerNode",bl="",a4="field",f="fields",bc="form-builder-field",af="form-builder-button-field",bS="id",q="icon",aJ="input",aa="label",ar="name",b8="node",bM="option",bK="options",aO="portalLayout",a7="predefinedValue",a5="proxy",bw="reset",aW="selected",bA="selectedIndex",bk="submit",P=" ",ad="strings",bb="template",bJ="templateNode",bn="text",O="type",n="value",w=bH.ClassNameManager.getClassName,au=w(a4,aJ),bO=w(a4,aJ,bn),bq=w(bc),Q=w(bc,b8),ap=w(aQ,b8),bu=w(bm,y),bo='<input id="{id}" class="'+[Q,au].join(P)+'" name="{name}" type="{type}" value="{value}" />',b9=[bk,bw,bX];
var S=bH.Component.create({NAME:af,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:bk,validator:function(A){return bH.Array(b9).indexOf(A.toLowerCase())>-1;}},predefinedValue:{value:aT(bk)},showLabel:{value:false},strings:{value:{button:"Button",reset:"Reset",submit:"Submit"}},template:{valueFn:function(){return bo;}}},UI_ATTRS:[c,a7,aa,ar,bV,bL],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderField,prototype:{getHTML:function(){var A=this;var ca=A.get(bb);var ce=A.get(bS);var cc=A.get(aa);var cb=A.get(ar);var L=A.get(bV);var cd=A.get(a7);return bH.substitute(ca,{id:ce,label:cc,name:cb,type:L,value:cd});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},renderSettings:function(){var ce=this;var L=ce.get(aN);var A=L.get(aj);var cd=ce.get(bV);var cf=ce.get(ad);bH.FormBuilderButtonField.superclass.renderSettings.apply(ce,arguments);if(!ce._renderedButtonSettings){ce._renderedButtonSettings=true;var cc=ce.propertiesPanel.get(d);var ch=[];bH.each(b9,function(ci){ch.push({labelText:cf[ci],value:ci});});var cg=new bH.Select({labelText:"Button type",name:bV,options:ch}).render(cc.item(0));var ca=cg.get(b8);ca.on({change:bH.bind(ce._onButtonTypeChange,ce)});var cb=bH.Array(b9).indexOf(cd);ca.all(bM).item(cb).set(aW,true);}},_onButtonTypeChange:function(L){var A=this;var ca=L.target;A.set(bV,ca.get(n));},_uiSetButtonType:function(ca){var A=this;var L=A.get(bJ);L.set(O,ca);}}});bH.FormBuilderButtonField=S;bH.FormBuilder.types["button"]=bH.FormBuilderButtonField;var bB=bH.Lang,aE=bB.isArray,a1=bB.isBoolean,bi=bB.isNumber,ag=bB.isString,aC="boolean",ax="boundingBox",d="bodyContent",bd="checkbox",D="checked",ao="choice",b1="contentBox",a9="container",bv=".",aP="drag",bg="dragContainer",b3="dragContainerNode",ac="dragNodesList",aq="drop",aI="dropContainer",a3="dropContainerNode",bl="",a4="field",f="fields",bc="form-builder-field",bY="form-builder-checkbox-field",bS="id",q="icon",aK="inline",aa="label",g="labels",ar="name",b8="node",aO="portalLayout",a7="predefinedValue",a5="proxy",am="size",P=" ",bb="template",bJ="templateNode",n="value",w=bH.ClassNameManager.getClassName,b=w(a4),bx=w(a4,bd),bE=w(a4,ao),bq=w(bc),bZ=w(bc,bd),Q=w(bc,b8),bu=w(bm,y),ab=w(a4,g,aK),bF='<li class="'+[bR,a2,bq,bZ].join(P)+'"></li>',aB='<input id="{id}" class="'+[Q,b,bx,bE].join(P)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var T=bH.Component.create({NAME:bY,ATTRS:{dataType:{value:aC},predefinedValue:{setter:bH.DataType.Boolean.parse,value:false},template:{valueFn:function(){return aB;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a7,aa,ar,bL],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderField,prototype:{BOUNDING_TEMPLATE:bF,bindUI:function(){var A=this;bH.FormBuilderCheckBoxField.superclass.bindUI.apply(A,arguments);var L=A.get(bJ);L.on({"change":bH.bind(A._onValueChange,A)});},renderUI:function(){var A=this;var L=A.get(b1);var ca=A.get(bJ);var cb=A.get(Y);bH.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);cb.insert(ca,cb,"before");},getHTML:function(){var A=this;var L=A.get(bb);var cc=A.get(D);var ce=A.get(bS);var cb=A.get(aa);var ca=A.get(ar);var cd=A.get(a7);return bH.substitute(L,{checked:cc?'checked="checked"':bl,id:ce,label:cb,name:ca,value:cd});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},renderSettings:function(){var L=this;var cb=L.get(aN);var cc=cb.get(aj);bH.FormBuilderCheckBoxField.superclass.renderSettings.apply(L,arguments);if(!L._renderedCheckboxSettings){L._renderedCheckboxSettings=true;L.predefinedValueField.destroy();var A=L.propertiesPanel.get(d);var ca=new bH.Field({type:"checkbox",name:a7,labelText:"Checked",labelAlign:"left"}).render(A.item(0));L.checkedFieldNode=ca.get(b8);L.checkedFieldNode.on({change:bH.bind(L._onValueChange,L)});L.checkedFieldNode.set(D,L.get(a7));}},_onValueChange:function(L){var A=this;var ca=L.target;A.set(a7,ca.get(D));},_uiSetPredefinedValue:function(cb){var A=this;var ca=A.get(bJ);var L=A.checkedFieldNode;if(L){L.set(D,cb);}ca.set(D,cb);}}});bH.FormBuilderCheckBoxField=T;bH.FormBuilder.types["checkbox"]=bH.FormBuilderCheckBoxField;var bB=bH.Lang,aE=bB.isArray,bi=bB.isNumber,ag=bB.isString,at=function(A){return(A instanceof bH.Node);},aM=function(A){return(A instanceof bH.NodeList);},ax="boundingBox",b1="contentBox",a9="container",bv=".",aq="drop",bl="",a4="field",f="fields",bc="form-builder-field",B="form-builder-fieldset-field",bS="id",q="icon",aa="label",ar="name",b8="node",a7="predefinedValue",P=" ",bb="template",bJ="templateNode",bn="text",n="value",by="zone",w=bH.ClassNameManager.getClassName,bq=w(bc),Q=w(bc,b8),bz=w(r,bP,aq,by),a6='<fieldset id="{id}" class="'+[Q].join(P)+'"></fieldset>',j='<legend class="'+ba+'"></legend>';var u=bH.Component.create({NAME:B,ATTRS:{acceptChildren:{value:true,readOnly:true},template:{valueFn:function(){return a6;}},labelNode:{valueFn:function(){return bH.Node.create(j);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,aa,bL],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderField,prototype:{CONTENT_TEMPLATE:a6,renderUI:function(){var A=this;var cc=A.get(ax);var cd=A.get(b2);var L=A.get(b1);var cb=A.get(Y);var ca=A.get(bJ);if(!cc.contains(cd)){cc.prepend(cd);}if(!L.contains(cb)){L.append(cb);}},getHTML:function(){var A=this;var L=A.get(bb);var ca=A.get(bS);return bH.substitute(L,{id:ca});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},renderSettings:function(){var A=this;var ca=A.get(aN);var cb=ca.get(aj);if(!A._renderedFieldsetSettings){A._renderedFieldsetSettings=true;A.fieldSettingsNode=bH.Node.create(bU);var cc=bH.Node.create(bU);A.labelField=new bH.Field({type:"text",name:aa,labelText:"Label",value:A.get(aa)}).render(cc);A.labelField.get(b8).on({keyup:bH.bind(A._onLabelKeyUp,A)});A.showLabelField=new bH.Field({type:"checkbox",name:bL,labelText:"Show label",labelAlign:"left",value:A.get(bL)}).render(cc);var L=A.showLabelField.get(b8);L.set(D,A.get(bL));L.on({change:bH.bind(A._onSettingsFieldChange,A)});
A.propertiesPanel=new bH.Panel({bodyContent:cc,collapsible:true,title:"Properties"}).render();A.fieldSettingsNode.append(A.propertiesPanel.get(ax));}cb.setContent(A.fieldSettingsNode);},_uiSetAcceptChildren:function(cc){var A=this;var L=A.get(b1);var cb=A.get(aX);var ca=L.one(bv+bz);if(cc&&!ca){L.append(cb);}else{if(!cc&&ca){ca.remove();}else{if(cc&&ca){A.set(aX,ca);}}}},}});bH.FormBuilderFieldsetField=u;bH.FormBuilder.types["fieldset"]=bH.FormBuilderFieldsetField;var bB=bH.Lang,aE=bB.isArray,bi=bB.isNumber,ag=bB.isString,at=function(A){return(A instanceof bH.Node);},aM=function(A){return(A instanceof bH.NodeList);},ax="boundingBox",b1="contentBox",a9="container",bv=".",bl="",a4="field",f="fields",bc="form-builder-field",b0="form-builder-file-upload-field",bS="id",q="icon",aa="label",ar="name",b8="node",a7="predefinedValue",P=" ",bb="template",bJ="templateNode",bn="text",n="value",w=bH.ClassNameManager.getClassName,bq=w(bc),Q=w(bc,b8),bu=w(bm,y),bj='<input id="{id}" class="'+[Q].join(P)+'" name="{name}" type="file" value="{value}" />';var E=bH.Component.create({NAME:b0,ATTRS:{template:{valueFn:function(){return bj;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a7,aa,ar,bL],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderField,prototype:{getHTML:function(){var A=this;var L=A.get(bb);var ce=A.get(bS);var cb=A.get(aa);var ca=A.get(ar);var cc=A.get(am);var cd=A.get(a7);return bH.substitute(L,{id:ce,label:cb,name:ca,value:cd});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},renderSettings:function(){var A=this;var ca=A.get(aN);var cb=ca.get(aj);if(!A._renderedFileUploadSettings){A._renderedFileUploadSettings=true;A.fieldSettingsNode=bH.Node.create(bU);var cc=bH.Node.create(bU);A.labelField=new bH.Field({type:"text",name:aa,labelText:"Label",value:A.get(aa)}).render(cc);A.labelField.get(b8).on({keyup:bH.bind(A._onLabelKeyUp,A)});A.showLabelField=new bH.Field({type:"checkbox",name:bL,labelText:"Show label",labelAlign:"left",value:A.get(bL)}).render(cc);var L=A.showLabelField.get(b8);L.set(D,A.get(bL));L.on({change:bH.bind(A._onSettingsFieldChange,A)});A._renderSettingsFields([{type:"text",name:ar,labelText:"Name",value:A.get(ar)},{type:"checkbox",name:ai,labelText:"Required",labelAlign:"left",value:A.get(ai)}],cc);A.propertiesPanel=new bH.Panel({bodyContent:cc,collapsible:true,title:"Properties"}).render();A.fieldSettingsNode.append(A.propertiesPanel.get(ax));}cb.setContent(A.fieldSettingsNode);}}});bH.FormBuilderFileUploadField=E;bH.FormBuilder.types["fileupload"]=bH.FormBuilderFileUploadField;var bB=bH.Lang,aE=bB.isArray,bi=bB.isNumber,ag=bB.isString,at=function(A){return(A instanceof bH.Node);},aM=function(A){return(A instanceof bH.NodeList);},ax="boundingBox",b1="contentBox",a9="container",bv=".",aP="drag",bg="dragContainer",b3="dragContainerNode",ac="dragNodesList",aq="drop",aI="dropContainer",a3="dropContainerNode",bl="",a4="field",f="fields",bc="form-builder-field",aQ="form-builder-input-field",bS="id",q="icon",aJ="input",aa="label",ar="name",b8="node",aO="portalLayout",a7="predefinedValue",a5="proxy",P=" ",bb="template",bJ="templateNode",bn="text",n="value",w=bH.ClassNameManager.getClassName,au=w(a4,aJ),bO=w(a4,aJ,bn),bq=w(bc),Q=w(bc,b8),ap=w(aQ,b8),bu=w(bm,y),bo='<input id="{id}" class="'+[Q,au,bO].join(P)+'" name="{name}" type="text" value="{value}" />';var l=bH.Component.create({NAME:aQ,ATTRS:{template:{valueFn:function(){return bo;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a7,aa,ar,bL],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderField,prototype:{bindUI:function(){var A=this;bH.FormBuilderInputField.superclass.bindUI.apply(A,arguments);var L=A.get(bJ);L.on({"keyup":bH.bind(A._onValueKeyUp,A)});},getHTML:function(){var A=this;var L=A.get(bb);var ce=A.get(bS);var cb=A.get(aa);var ca=A.get(ar);var cc=A.get(am);var cd=A.get(a7);return bH.substitute(L,{id:ce,label:cb,name:ca,value:cd});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(aN);var ca=L.get(aj);bH.FormBuilderCheckBoxField.superclass.renderSettings.apply(A,arguments);if(!A._renderedInputSettings){A._renderedInputSettings=true;var cb=ca.one("input[name=predefinedValue]");cb.on({"keyup":bH.bind(A._onValueKeyUp,A)});}},_onValueKeyUp:function(L){var A=this;var ca=L.target;A.set(a7,ca.val());},_uiSetPredefinedValue:function(cd){var A=this;var ca=A.get(aN);var cb=ca.get(aj);var cc=cb.one("input[name=predefinedValue]");var L=A.get(bJ);L.val(cd);if(cc&&A.get(aW)){cc.val(cd);}}}});bH.FormBuilderInputField=l;bH.FormBuilder.types["text"]=bH.FormBuilderInputField;var bB=bH.Lang,aE=bB.isArray,bi=bB.isNumber,ag=bB.isString,at=function(A){return(A instanceof bH.Node);},aM=function(A){return(A instanceof bH.NodeList);},aT=bH.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),I="add",ae="addNode",ax="boundingBox",bX="button",bV="buttonType",b1="contentBox",a9="container",y="default",aZ="defaultName",s="defaultOptions",z="defaultValue",bv=".",aP="drag",bg="dragContainer",b3="dragContainerNode",ac="dragNodesList",aq="drop",aI="dropContainer",a3="dropContainerNode",bl="",a4="field",f="fields",bc="form-builder-field",F="form-builder-multiple-choice-field",q="icon",bS="id",aJ="input",Z="item",aa="label",bW="multiple",ar="name",b8="node",bM="option",bh="optionTemplate",bK="options",a7="predefinedValue",a5="proxy",p="remove",bw="reset",bk="submit",P=" ",bb="template",bJ="templateNode",bn="text",O="type",n="value",w=bH.ClassNameManager.getClassName,au=w(a4,aJ),bO=w(a4,aJ,bn),k=w(a4,bK,I),M=w(a4,bK,Z),K=w(a4,bK,Z,aJ),bp=w(a4,bK,Z,aJ,ar),bI=w(a4,bK,Z,aJ,n),aS=w(a4,bK,Z,p),bq=w(bc),Q=w(bc,b8),ap=w(aQ,b8),bu=w(bm,y),bt='<div class="'+[M,ab,b5].join(P)+'">'+'<input type="text" name="name" class="'+[K,bp,au,bO].join(P)+'" value="{name}" />'+'<input type="text" name="value" class="'+[K,bI,au,bO].join(P)+'" value="{value}" />'+'<a href="javascript:;" class="'+aS+'">&nbsp;</a>'+"</div>";TPL_ADD='<a class="'+k+'" href="javascript:;">Add an option</a>',ENTER="ENTER";
var aF=bH.Component.create({NAME:bK,ATTRS:{allowClear:{value:false},defaultName:{value:bl},defaultValue:{value:bl},options:{value:[],getter:"_getOptions",validator:aE},addNode:{valueFn:function(){return bH.Node.create(TPL_ADD);}}},HTML_PARSER:{addNode:bv+k},UI_ATTRS:[bK],EXTENDS:bH.Widget,prototype:{renderUI:function(){var A=this;var L=A.get(ax);var ca=A.get(ae);if(!ca.inDoc()){L.append(ca);}},bindUI:function(){var A=this;var L=A.get(ax);var ca=A.get(ae);ca.on("click",bH.bind(A._onClickAdd,A));L.delegate("click",bH.bind(A._onClickOptionRemove,A),bv+aS);L.delegate("keypress",bH.bind(A._onKeyPressOption,A),bv+K);},add:function(L){var A=this;var ca=A.get(bK);ca.push(L);A.set(bK,ca);},clear:function(){var A=this;if(A.get(ALLOW_CLEAR)){A.set(bK,[]);}},remove:function(ca){var A=this;var L=A.get(b1);var cb=A._getOptionNode(ca);if(cb){cb.remove();}A.items=L.all(bv+M);},_addNewOption:function(){var L=this;var ca=L.get(b1);var cb=L._createOption({name:L.get(aZ),value:L.get(z)});cb=bH.Node.create(cb);ca.append(cb);var A=cb.one(aJ);A.focus();A.select();L.items=ca.all(bv+M);return cb;},_createOption:function(L){var A=this;return bH.substitute(bt,L);},_getOptionNode:function(L){var A=this;return A.items.item(L);},_getOptions:function(ca){var A=this;var L=[];if(A.items){bH.each(A.items,function(cb){var cc=cb.one(bv+bp);var cd=cb.one(bv+bI);L.push({name:cc.val(),value:cd.val()});});}else{L=ca;}return L;},_indexOfTarget:function(ca){var A=this;var L=ca.ancestor(bv+M);return A.items.indexOf(L);},_onClickAdd:function(L){var A=this;A._addNewOption();},_onClickOptionRemove:function(cb){var A=this;var ca=A.get(bK);var L=A._indexOfTarget(cb.target);A.remove(L);},_onKeyPressOption:function(cc){var A=this;var cb=A.get(bK);var ce=cc.currentTarget;var L=A.items;if(cc.isKey(ENTER)){var ca=A._indexOfTarget(ce);var cd=ce.hasClass(bI);if((ca==L.size()-1)&&cd){A._addNewOption();}}},_uiSetOptions:function(cb){var A=this;var ca=[];var L=A.get(b1);L.empty();bH.each(cb,function(cc){L.append(A._createOption(cc));});A.items=L.all(bv+M);}}});var e=bH.Component.create({NAME:F,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{name:"option 1",value:"value 1"},{name:"option 2",value:"value 2"},{name:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{name}</option>'},},UI_ATTRS:[c,a7,aa,ar,bK,bL],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderField,prototype:{initializer:function(){var A=this;bH.FormBuilderMultipleChoiceField.superclass.initializer.apply(A,arguments);},getNode:function(){var A=this;return bH.FormBuilderMultipleChoiceField.superclass.getNode.apply(A,arguments);},renderSettings:function(){var A=this;bH.FormBuilderMultipleChoiceField.superclass.renderSettings.apply(A,arguments);if(!A._renderedMultipleChoiceSettings){A._renderedMultipleChoiceSettings=true;var L=bH.Node.create(bU);A.optionsPanel=new bH.Panel({bodyContent:L,collapsible:true,title:"Options"}).render();A.options=new aF({options:A.get(bK)}).render(L);A.fieldSettingsNode.append(A.optionsPanel.get(ax));}},saveSettings:function(){var A=this;bH.FormBuilderMultipleChoiceField.superclass.saveSettings.apply(A,arguments);A.set(bK,A.options.get(bK));},_uiSetOptions:function(ca){var A=this;var L=A.get(bJ);L.empty();bH.each(ca,function(cb){L.append(bH.substitute(A.get(bh),cb));});}}});bH.FormBuilderMultipleChoiceField=e;bH.FormBuilder.types["multiple-choice"]=bH.FormBuilderMultipleChoiceField;var bB=bH.Lang,aE=bB.isArray,a1=bB.isBoolean,bi=bB.isNumber,ag=bB.isString,ax="boundingBox",d="bodyContent",D="checked",ao="choice",b1="contentBox",a9="container",bv=".",bl="",a4="field",f="fields",bc="form-builder-field",aR="form-builder-radio-field",bS="id",q="icon",aK="inline",aa="label",g="labels",ar="name",b8="node",bQ="optionsContainerNode",a7="predefinedValue",J="radio",am="size",P=" ",bb="template",bJ="templateNode",n="value",w=bH.ClassNameManager.getClassName,b=w(a4),bE=w(a4,ao),bq=w(bc),aw=w(bc,J),Q=w(bc,b8),N=w(bc,bK,a9),bu=w(bm,y),ab=w(a4,g,aK),bF='<li class="'+[bR,a2,bq,aw].join(P)+'"></li>',R='<div class="'+N+'"></div>',aD='<input id="{id}" class="'+[Q,b,bE].join(P)+'" name="{name}" type="radio" value="{value}" {checked} />';var h=bH.Component.create({NAME:aR,ATTRS:{name:{value:J},optionTemplate:{value:aD},template:{valueFn:function(){return aD;}},optionsContainerNode:{valueFn:function(){return bH.Node.create(R);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a7,aa,ar,bL,bK],CSS_PREFIX:bq,HTML_PARSER:{optionsContainerNode:bv+N,templateNode:bv+Q},EXTENDS:bH.FormBuilderMultipleChoiceField,prototype:{BOUNDING_TEMPLATE:bF,renderUI:function(){var A=this;var cb=A.get(ax);var cd=A.get(b2);var L=A.get(b1);var ca=A.get(Y);if(!cb.contains(cd)){cb.prepend(cd);}if(!L.contains(ca)){L.append(ca);}var cc=A.get(bQ);if(!L.contains(cc)){L.append(cc);}},getHTML:function(){var A=this;var L=A.get(bb);var cc=A.get(D);var ce=A.get(bS);var cb=A.get(aa);var ca=A.get(ar);var cd=A.get(a7);return bH.substitute(L,{checked:cc?'checked="checked"':bl,id:ce,label:cb,name:ca,value:cd});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},_onFieldChange:function(L){var A=this;var ca=L.target;A.set(a7,ca.val());},_uiSetOptions:function(cc){var A=this;var L=A.get(b1);var cb=A.get(bQ);var ca=A.get(bJ);cb.empty();bH.each(cc,function(cf){var cd=new bH.Field({type:J,name:A.get(ar),labelText:cf.name,labelAlign:"left",value:cf.value}).render(cb);var ce=cd.get(b8);if(cf.value==A.get(a7)){ce.set(D,true);}ce.on({change:bH.bind(A._onFieldChange,A)});});},_uiSetPredefinedValue:function(cc){var A=this;var L=A.get(aN);var ca=L.get(aj);var cb=ca.one("input[name=predefinedValue]");if(cb){cb.val(cc);}}}});bH.FormBuilderRadioField=h;bH.FormBuilder.types["radio"]=bH.FormBuilderRadioField;var bB=bH.Lang,aE=bB.isArray,bi=bB.isNumber,ag=bB.isString,at=function(A){return(A instanceof bH.Node);},aM=function(A){return(A instanceof bH.NodeList);},aT=bH.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),ax="boundingBox",bX="button",bV="buttonType",b1="contentBox",a9="container",s="defaultOptions",bv=".",aP="drag",bg="dragContainer",b3="dragContainerNode",ac="dragNodesList",aq="drop",aI="dropContainer",a3="dropContainerNode",bl="",a4="field",f="fields",bc="form-builder-field",bG="form-builder-select-field",bS="id",q="icon",aJ="input",aa="label",bW="multiple",ar="name",b8="node",bM="option",bK="options",aO="portalLayout",a7="predefinedValue",a5="proxy",bw="reset",bA="selectedIndex",bk="submit",P=" ",bb="template",bJ="templateNode",bn="text",O="type",n="value",w=bH.ClassNameManager.getClassName,au=w(a4,aJ),bO=w(a4,aJ,bn),bq=w(bc),Q=w(bc,b8),ap=w(aQ,b8),bu=w(bm,y),an='<select id="{id}" class="'+[Q].join(P)+'" name="{name}" value="{value}"></select>';
var X=bH.Component.create({NAME:bG,ATTRS:{multiple:{setter:bH.DataType.Boolean.parse,value:false},template:{valueFn:function(){return an;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a7,aa,ar,bK,bL,bW],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;var L=A.get(bb);var cd=A.get(bS);var cb=A.get(aa);var ca=A.get(ar);var cc=A.get(a7);return bH.substitute(L,{id:cd,label:cb,name:ca,value:cc});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},renderSettings:function(){var L=this;var cc=L.get(aN);var cd=cc.get(aj);bH.FormBuilderSelectField.superclass.renderSettings.apply(L,arguments);if(!L._renderedSelectSettings){L._renderedSelectSettings=true;var A=L.propertiesPanel.get(d);var ca=new bH.Field({type:"checkbox",name:bW,labelText:"Multiple",labelAlign:"left"}).render(A.item(0));var cb=ca.get(b8);cb.on({change:bH.bind(L._onSettingsFieldChange,L)});cb.set(D,L.get(bW));}},_uiSetMultiple:function(ca){var A=this;var L=A.get(bJ);if(ca){L.setAttribute(bW,bW);}else{L.removeAttribute(bW);}}}});bH.FormBuilderSelectField=X;bH.FormBuilder.types["select"]=bH.FormBuilderSelectField;var bB=bH.Lang,aE=bB.isArray,bi=bB.isNumber,ag=bB.isString,ax="boundingBox",b1="contentBox",a9="container",bv=".",aP="drag",bg="dragContainer",b3="dragContainerNode",ac="dragNodesList",aq="drop",aI="dropContainer",a3="dropContainerNode",bl="",a4="field",f="fields",bc="form-builder-field",v="form-builder-textarea-field",bS="id",q="icon",aa="label",ar="name",b8="node",aO="portalLayout",a7="predefinedValue",a5="proxy",am="size",P=" ",bb="template",bJ="templateNode",bn="text",bs="textarea",n="value",w=bH.ClassNameManager.getClassName,b=w(a4),a8=w(a4,bn),bN=w(a4,bs),bq=w(bc),Q=w(bc,b8),ap=w(aQ,b8),bu=w(bm,y),bC='<textarea id="{id}" class="'+[Q,b,a8,bN].join(P)+'" name="{name}">{value}</textarea>';var av=bH.Component.create({NAME:v,ATTRS:{template:{valueFn:function(){return bC;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,a7,aa,ar,bL],CSS_PREFIX:bq,HTML_PARSER:{templateNode:bv+Q},EXTENDS:bH.FormBuilderField,prototype:{bindUI:function(){var A=this;bH.FormBuilderInputField.superclass.bindUI.apply(A,arguments);var L=A.get(bJ);L.on({"keyup":bH.bind(A._onValueKeyUp,A)});},getHTML:function(){var A=this;var L=A.get(bb);var ce=A.get(bS);var cb=A.get(aa);var ca=A.get(ar);var cc=A.get(am);var cd=A.get(a7);return bH.substitute(L,{id:ce,label:cb,name:ca,value:cd});},getNode:function(){var A=this;return bH.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(aN);var ca=L.get(aj);bH.FormBuilderCheckBoxField.superclass.renderSettings.apply(A,arguments);if(!A._renderedTextareaSettings){A._renderedTextareaSettings=true;var cb=ca.one("input[name=predefinedValue]");cb.on({"keyup":bH.bind(A._onValueKeyUp,A)});}},_onValueKeyUp:function(L){var A=this;var ca=L.target;A.set(a7,ca.val());},_uiSetPredefinedValue:function(cd){var A=this;var ca=A.get(aN);var cb=ca.get(aj);var cc=cb.one("input[name=predefinedValue]");var L=A.get(bJ);L.val(cd);if(cc&&A.get(aW)){cc.val(cd);}}}});bH.FormBuilderTextAreaField=av;bH.FormBuilder.types["textarea"]=bH.FormBuilderTextAreaField;},"@VERSION@",{requires:["aui-datatype","aui-form","aui-panel","io","substitute"],skinnable:true});