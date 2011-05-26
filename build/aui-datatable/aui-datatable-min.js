AUI.add("aui-datatable-base",function(c){var f=c.Lang,k=f.isNumber,b=f.isString,i="childNodes",e="columnset",d="data",g="headers",h="id",a="#",j=" ";c.DataTable.Base=c.Base.create("datatable",c.DataTable.Base,[],{initializer:function(){var l=this;l.after("render",l._afterRender);l.after("recordsetChange",l._afterRecordsetChangeExt);},getCellNode:function(m,n){var l=this;return l.getRowNode(m).get(i).item(n.keyIndex);},getColNode:function(m){var l=this;var o=l.get(e);var n=o.getColumnIndex(o.getColumnByCell(m));return l._colgroupNode.get(i).item(n);},getRowNode:function(l){return c.one(a+l.get(h));},_afterRender:function(){var l=this;l._bindPluginsEvents();l._fixPluginsUI();},_afterRecordsetChangeExt:function(m){var l=this;l._fixPluginsUI();},_bindPluginsEvents:function(){var l=this;var m=l.sort;if(m){m.after("lastSortedByChange",c.bind(l._fixPluginsUI,l));}},_fixPluginsUI:function(){var m=this;var n=m.sort;var l=m.scroll;if(n&&l){l.syncUI();l._syncWidths();}}},{});c.Columnset=c.Base.create("columnset",c.Columnset,[],{getColumn:function(m){var l=this;if(b(m)){return this.idHash[m];}else{if(k(m)){return l.keys[m];}}return null;},getColumnByCell:function(m){var l=this;var n=m.getAttribute(g).split(j).pop()||m.get(h);return l.getColumn(n);},getColumnIndex:function(l){return l.keyIndex;},getLength:function(){var l=this;return l.keys.length;},_setDefinitions:function(l){return l;}},{});c.Recordset=c.Base.create("recordset",c.Recordset,[],{getRecordByRow:function(m){var l=this;return l.getRecord(m.get(h));},getRecordIndex:function(m){var l=this;return c.Array.indexOf(l._items,m);},updateRecordDataByKey:function(m,n,p){var l=this;var o=m.get(d);if(o){o[n]=p;m.set(d,o);}l.update(m,l.getRecordIndex(m));}},{});},"@VERSION@",{requires:["aui-base","datatable","plugin"]});AUI.add("aui-datatable-events",function(j){var R=j.Lang,s=R.isArray,F=R.isObject,e=R.isValue,b=j.Array.each,E=j.Object.keys,L=j.Object.values,x=j.Selector.test,l=j.ClassNameManager.getClassName,t=j.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),h=j.cached(function(S,A){return S+t(A.toLowerCase());}),M="boundingBox",O="cell",D="cellSelector",H="click",n="column",r="dblclick",c="events",w="header",p="host",d="inHead",Q="keydown",P="keyup",G="liner",y="mousedown",f="mouseenter",k="mouseleave",i="mouseup",C="recordset",I="row",u="table",N="tags",a="tagName",J="tbody",v="thead",B="tr",m="datatable",z="columnset",o=",",q=".",K=l(m,G);var g=j.Base.create("dataTableEvents",j.Plugin.Base,[],{_bubbling:false,_handler:null,_tagsFilter:null,initializer:function(T){var A=this;var S=A.get(N);A._tagsFilter=E(S).join(o);A._initEvents();},destructor:function(){var A=this;var S=A._handler;if(S){S.detach();}},updateEventPayload:function(V,S){var A=this;var U=A.get(p);var W=U._theadNode;var X=V.getData(d);var T=V.getData(G);var Y=V.getData(I);if(!e(X)){X=W.contains(V);V.setData(d,X);}if(!e(T)){T=V.one(q+K);V.setData(G,T);}if(!e(Y)){Y=V.ancestor(B);V.setData(I,Y);}return j.mix(S,{cell:V,column:U.get(z).getColumnByCell(V),inHead:X,liner:T,originalEvent:S,row:Y,record:U.get(C).getRecordByRow(Y)},true);},_filterBubble:function(X){var A=this;var W=A.get(p);var S=W._tableNode.getDOM();var T=[];while(X){var V=(X===S);if(x(X,A._tagsFilter,(V?null:S))){T.push(X);}if(V){break;}X=X.parentNode;}if(T.length){var U=W.getColNode(j.one(T[0]));if(U){T.splice(2,0,U.getDOM());}}return T;},_handleEvents:function(A){var W,U;var Z=this;var aa=Z.get(p);var ab=Z.get(N);var T=A.currentTarget;var S=Z._filterBubble(T.getDOM());var Y=Z.updateEventPayload(T,A);Z._bubbling=true;for(W=0,U=S.length;(W<U)&&Z._bubbling;W++){var V=j.one(S[W]);var X=ab[V.get(a).toLowerCase()];Y.node=V;Y.property=X;aa.fire(h(X,A.type),Y);}},_initEvents:function(){var A=this;var V=A.get(p);var S=A.get(N);var T=A.get(c);var U={};b(L(S),function(W){b(T,function(X){var Y=h(W,X);U[Y]={stoppedFn:j.bind(A._stopBubble,A)};});});V.publish(U);A._handler=V.get(M).delegate(T,j.bind(A._handleEvents,A),A.get(D));},_stopBubble:function(){var A=this;A._bubbling=false;}},{NS:"events",NAME:"dataTableEvents",ATTRS:{cellSelector:{value:"td,th",writeOnce:true},events:{validator:s,value:[H,r,Q,P,y,f,k,i]},tags:{validator:F,value:{col:n,table:u,thead:v,tbody:J,tr:I,th:w,td:O},writeOnce:true}}});j.namespace("Plugin").DataTableEvents=g;},"@VERSION@",{requires:["aui-datatable-base"]});AUI.add("aui-datatable-edit",function(ak){var Z=ak.Lang,a1=ak.Array,d=Z.isArray,aI=Z.isBoolean,aD=Z.isFunction,G=Z.isObject,aN=Z.isString,aC=Z.String,aA=ak.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),aT=function(A){return(A instanceof ak.BaseCellEditor);},ai=ak.WidgetStdMod,y=ak.getClassName,ab="add",aB="baseCellEditor",q="boundingBox",O="calendar",af="cancel",aF="cell",ao="celleditor",B="checkboxCellEditor",m="checked",ax="click",z="columnset",u="contentBox",au="data",N="datatable",J="dateCellEditor",S="delete",p="deleteSelectedOptions",ah="disk",aE="dropDownCellEditor",K="edit",W="editable",e="editor",D="editEvent",F="element",at="elementName",aG="field",t="hide",am="hideOnSave",aw="id",l="initEdit",a0="initToolbar",al="initValidator",Y="input",c="inputFormatter",aZ="key",an="label",aj="link",U="mousedown",X="multiple",k="name",aK="option",aP="options",s="optionsCellEditor",aX="outputFormatter",j="pencil",ae="radioCellEditor",ad="records",i="recordset",aV="rendered",ac="return",az="save",aL="selected",ar="selectedAttrName",V="showToolbar",aO="submit",P="textAreaCellEditor",w="textCellEditor",M="toolbar",x="unescapeValue",T="validator",aS="value",aa="visible",aQ="wrapper",a3=",",h=".",Q="",g="#",aU="\n",aY=" ",r=/<br\s*\/?>/gi,C=/[\r\n]/g,b=y(ao,K),f=y(ao,K,ab,aK),aJ=y(ao,K,S,aK),aW=y(ao,K,t,aK),ap=y(ao,K,Y,k),ay=y(ao,K,Y,aS),n=y(ao,K,aj),R=y(ao,F),aM=y(ao,an),I=y(ao,aK),v=y(ao,aQ),E=y(N,W),aH="<br/>";var aR=function(){};aR.NAME="dataTableCellEditorSupport";aR.ATTRS={editEvent:{setter:"_setEditEvent",validator:aN,value:ax}};ak.mix(aR.prototype,{initializer:function(){var A=this;A.after({render:A._afterRenderEditor});
A.on(A.get(D),A._onCellEdit);A.after(A._afterUiSetRecordset,A,"_uiSetRecordset");},getCellEditor:function(a4,a6){var A=this;var a5=a6.get(e);var a7=a4.get(au).editor;if(a5===false){return null;}return a7||a5;},getRecordColumnValue:function(A,a4){return A.getValue(a4.get(aG));},syncEditableColumnsUI:function(){var A=this;var a5=A.get(z);var a4=A.get(i);ak.each(a5.idHash,function(a7){var a6=a7.get(e);if(aT(a6)){ak.all("[headers="+a7.get(aw)+"]").addClass(E);}});ak.each(a4.get(ad),function(a6){var a7=a6.get(au).editor;if(aT(a7)){ak.all(g+a6.get("id")+">td").each(function(ba,a8){var a9=a5.getColumn(a8);if(a9.get(e)!==false){ba.addClass(E);}});}});},_afterUiSetRecordset:function(a4){var A=this;A.syncEditableColumnsUI();},_afterRenderEditor:function(a4){var A=this;if(!A.events){A.plug(ak.Plugin.DataTableEvents);}},_editCell:function(a8){var A=this;var ba=A.get(z);var a9=A.get(i);var a7=a8.column;var a4=a8.record;A.activeColumnIndex=ba.getColumnIndex(a7);A.activeRecordIndex=a9.getRecordIndex(a4);var a5=a8.alignNode||a8.cell;var a6=A.getCellEditor(a4,a7);if(aT(a6)){if(!a6.get(aV)){a6.on({visibleChange:ak.bind(A._onEditorVisibleChange,A),save:ak.bind(A._onEditorSave,A)});a6.render();}a6.set(aS,A.getRecordColumnValue(a4,a7));a6.show().move(a5.getXY());}},_onCellEdit:function(a4){var A=this;A._editCell(a4);},_onEditorVisibleChange:function(a8){var a4=this;var a6=a4.selection;if(a6){var a5=a6.getActiveRecord();var a7=a6.getActiveColumn();var A=a4.getCellNode(a5,a7);var a9=a4.getRowNode(a5);a6.select(A,a9);}},_onEditorSave:function(a6){var A=this;var a5=a6.currentTarget;var a7=A.get(i);a5.set(aS,a6.newVal);var a4=A.selection;if(a4){a7.updateRecordDataByKey(a4.getActiveRecord(),a4.getActiveColumn().get(aZ),a6.newVal);A.set(i,a7);}},_setEditEvent:function(A){return aF+aA(A);}});ak.DataTable.CellEditorSupport=aR;ak.DataTable.Base=ak.Base.create("dataTable",ak.DataTable.Base,[ak.DataTable.CellEditorSupport]);var o=ak.Component.create({NAME:aB,ATTRS:{editable:{value:false,validator:aI},elementName:{value:aS,validator:aN},footerContent:{value:Q},hideOnSave:{value:true,validator:aI},inputFormatter:{value:function(A){if(aN(A)){A=A.replace(C,aH);}return A;}},outputFormatter:{value:function(a4){var A=this;if(aN(a4)){if(A.get(x)){a4=aC.unescapeEntities(a4);}a4=a4.replace(r,aU);}return a4;}},showToolbar:{value:true,validator:aI},strings:{value:{edit:"Edit",save:"Save",cancel:"Cancel"}},tabIndex:{value:1},toolbar:{setter:"_setToolbar",validator:G,value:null},unescapeValue:{value:true,validator:aI},validator:{setter:"_setValidator",validator:G,value:null},value:{value:Q},visible:{value:false}},EXTENDS:ak.Overlay,UI_ATTRS:[W,V,aS],prototype:{CONTENT_TEMPLATE:"<form></form>",ELEMENT_TEMPLATE:null,elements:null,validator:null,_hDocMouseDownEv:null,initializer:function(a4){var A=this;A._initEvents();},destructor:function(){var a4=this;var A=a4._hDocMouseDownEv;var a6=a4.toolbar;var a5=a4.validator;if(A){A.detach();}if(a6){a6.destroy();}if(a5){a5.destroy();}},bindUI:function(){var A=this;A.get(q).on(aZ,ak.bind(A._onEscKey,A),"down:27");},formatValue:function(a4,a5){var A=this;if(aD(a4)){a5=a4.call(A,a5);}return a5;},getValue:function(){var A=this;return A.formatValue(A.get(c),A.getElementsValue());},_initEvents:function(){var A=this;A.publish({cancel:{defaultFn:A._defCancelFn},initEdit:{defaultFn:A._defInitEditFn,fireOnce:true},initValidator:{defaultFn:A._defInitValidatorFn,fireOnce:true},initToolbar:{defaultFn:A._defInitToolbarFn,fireOnce:true},save:{defaultFn:A._defSaveFn}});A.after({render:A._afterRender,visibleChange:ak.debounce(A._debounceVisibleChange,350,A)});A.on({"form-validator:submit":ak.bind(A._onSubmit,A)});},_afterRender:function(){var A=this;A._handleInitValidatorEvent();A._handleInitToolbarEvent();},_defCancelFn:function(a4){var A=this;A.hide();},_defInitValidatorFn:function(a4){var A=this;A.validator=new ak.FormValidator(A.get(T));},_defInitToolbarFn:function(a5){var A=this;var a4=A.get(W);A.toolbar=new ak.Toolbar(A.get(M)).render(A.footerNode);if(a4){A._uiSetEditable(a4);}},_defSaveFn:function(a4){var A=this;if(A.get(am)){A.hide();}},_debounceVisibleChange:function(a5){var a4=this;var A=a4._hDocMouseDownEv;if(a5.newVal){if(!A){a4._hDocMouseDownEv=ak.getDoc().on(U,ak.bind(a4._onDocMouseDownExt,a4));}}else{if(A){A.detach();a4._hDocMouseDownEv=null;}}},_handleCancelEvent:function(){var A=this;A.fire(af);},_handleEditEvent:function(){var A=this;A.fire(K);},_handleInitEditEvent:function(){var A=this;if(A.get(aV)){this.fire(l);}},_handleInitValidatorEvent:function(){var A=this;if(A.get(aV)){this.fire(al);}},_handleInitToolbarEvent:function(){var A=this;if(A.get(aV)&&A.get(V)){this.fire(a0);}},_handleSaveEvent:function(){var A=this;if(!A.validator.hasErrors()){A.fire(az,{newVal:A.getValue(),prevVal:A.get(aS)});}},_onDocMouseDownExt:function(a5){var A=this;var a4=A.get(q);A.set(aa,a4.contains(a5.target));},_onEscKey:function(a4){var A=this;A.hide();},_onSubmit:function(a5){var A=this;var a4=a5.validator;A._handleSaveEvent();if(a4){a4.formEvent.halt();}},_setToolbar:function(a5){var a4=this;var A=a4.getStrings();return ak.merge({activeState:false,children:[{label:A[az],icon:ah,type:aO},{handler:ak.bind(a4._handleCancelEvent,a4),label:A[af]}]},a5);},_setValidator:function(a4){var A=this;return ak.merge({boundingBox:A.get(u),bubbleTargets:A},a4);},_uiSetShowToolbar:function(a5){var A=this;var a4=A.footerNode;if(a5){a4.show();}else{a4.hide();}A._handleInitToolbarEvent();},getElementsValue:function(){var A=this;var a4=A.elements;if(a4){return a4.get(aS);}return Q;},renderUI:function(){var A=this;if(A.ELEMENT_TEMPLATE){A.elements=ak.Node.create(A.ELEMENT_TEMPLATE);A._syncElementsName();A.setStdModContent(ai.BODY,A.elements);}},_defInitEditFn:function(A){},_syncElementsName:function(){var A=this;A.elements.setAttribute(k,A.get(at));},_uiSetEditable:function(a5){var A=this;var a4=A.toolbar;if(A.get(aV)&&a4){if(a5){a4.add({handler:ak.bind(A._handleEditEvent,A),icon:j,label:A.getString(K)},1);}else{a4.remove(1);}}},_uiSetValue:function(a5){var A=this;
var a4=A.elements;if(a4){a4.val(A.formatValue(A.get(aX),a5));ak.later(30,a4,a4.selectText);}}}});ak.BaseCellEditor=o;var a2=ak.Component.create({NAME:s,ATTRS:{inputFormatter:{value:null},options:{setter:"_setOptions",value:{},validator:G},outputFormatter:{value:null},selectedAttrName:{value:aL,validator:aN},strings:{value:{add:"Add",cancel:"Cancel",deleteSelectedOptions:"Delete selected option(s)?",edit:"Edit options",save:"Save",stopEditing:"Stop editing"}}},EXTENDS:ak.BaseCellEditor,UI_ATTRS:[aP],prototype:{EDIT_TEMPLATE:'<div class="'+b+'">'+'<a class="'+[n,aJ].join(aY)+'" href="javascript:void(0);">{deleteSelectedOptions}</a>'+'<input class="'+ap+'" size="7" placeholder="Name" title="Name" type="text" /> '+'<input class="'+ay+'" size="7" placeholder="Value" title="Value" type="text" /> '+'<a class="'+[n,f].join(aY)+'" href="javascript:void(0);">{add}</a> '+'<a class="'+[n,aW].join(aY)+'" href="javascript:void(0);">{stopEditing}</a>'+"</div>",editContainer:null,editInputName:null,editInputValue:null,options:null,initializer:function(){var A=this;A.on(K,A._onEditEvent);A.after(a0,A._afterInitToolbar);},addCurrentOption:function(){var A=this;var a4=A.get(aP);var a5=A.getCurrentOptionValue();if(!a5.name){A.editInputName.selectText();}else{if(!a5.value){A.editInputValue.selectText();}else{a4[a5.name]=a5.value;A.set(aP,a4);A._uiSetValue(A.get(aS));A.clearCurrentOption();}}},clearCurrentOption:function(){var A=this;if(A.editContainer){A.editInputValue.val(Q);A.editInputName.val(Q).focus();}},deleteSelectedOptions:function(){var A=this;var a4=A.get(aP);A._getSelectedOptions().each(function(a5){var a6=a5.val();if(a4.hasOwnProperty(a6)){delete a4[a6];}});A.set(aP,a4);A._uiSetValue(A.get(aS));A.clearCurrentOption();},getCurrentOptionValue:function(){var A=this;var a5=A.editInputName;var a4=A.editInputValue;return{name:a5?a5.val():Q,value:a4?a4.val():Q};},toggleEdit:function(){var A=this;A.editContainer.toggle();},_createOptions:function(a5){var a9=this;var A=a9.elements;var a7=[];var a4=[];var a6=a9.OPTION_TEMPLATE;var ba=a9.OPTION_WRAPPER;ak.each(a5,function(be,bd){var bc={id:ak.guid(),label:be,name:bd,value:bd};if(a6){a7.push(ak.substitute(a6,bc));}if(ba){a4.push(ak.substitute(ba,bc));}});var bb=ak.NodeList.create(a7.join(Q));var a8=ak.NodeList.create(a4.join(Q));if(a8.size()){a8.each(function(bd,bc){bd.prepend(bb.item(bc));});A.setContent(a8);}else{A.setContent(bb);}a9.options=bb;},_defInitEditFn:function(a4){var A=this;var a5=ak.Node.create(Z.sub(A.EDIT_TEMPLATE,A.getStrings()));A.setStdModContent(ai.BODY,a5.hide(),ai.AFTER);a5.delegate("click",ak.bind(A._onEditLinkClickEvent,A),h+n);a5.delegate("keydown",ak.bind(A._onEditKeyEvent,A),Y);A.editContainer=a5;A.editInputName=a5.one(h+ap);A.editInputValue=a5.one(h+ay);},_getSelectedOptions:function(){var A=this;var a4=[];A.options.each(function(a5){if(a5.get(A.get(ar))){a4.push(a5);}});return ak.all(a4);},_onEditEvent:function(a4){var A=this;A._handleInitEditEvent();A.toggleEdit();A.clearCurrentOption();},_onEditLinkClickEvent:function(a5){var A=this;var a6=a5.currentTarget;if(a6.test(h+f)){A.addCurrentOption();}else{if(a6.test(h+aW)){A.toggleEdit();}else{if(a6.test(h+aJ)){var a4=A.getString(p);if(confirm(a4)){A.deleteSelectedOptions();}}}}a5.halt();},_onEditKeyEvent:function(a4){var A=this;if(a4.isKey(ac)){A.addCurrentOption();a4.halt();}},_setOptions:function(a4){var A={};if(d(a4)){a1.each(a4,function(a5){A[a5]=a5;});}else{if(G(a4)){A=a4;}}return A;},_uiSetOptions:function(a4){var A=this;A._createOptions(a4);A._syncElementsName();},_uiSetValue:function(a5){var A=this;var a4=A.options;if(a4&&a4.size()){a4.set(A.get(ar),false);a1.each(a1(a5),function(a6){a4.filter('[value="'+a6+'"]').set(A.get(ar),true);});}return a5;}}});ak.BaseOptionsCellEditor=a2;var aq=ak.Component.create({NAME:w,EXTENDS:ak.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<input class="'+R+'" type="text" />'}});ak.TextCellEditor=aq;var av=ak.Component.create({NAME:P,EXTENDS:ak.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<textarea class="'+R+'"></textarea>'}});ak.TextAreaCellEditor=av;var L=ak.Component.create({NAME:aE,ATTRS:{multiple:{value:false,validator:aI}},EXTENDS:ak.BaseOptionsCellEditor,UI_ATTRS:[X],prototype:{ELEMENT_TEMPLATE:'<select class="'+R+'"></select>',OPTION_TEMPLATE:'<option value="{value}">{label}</option>',getElementsValue:function(){var A=this;if(A.get(X)){return A._getSelectedOptions().get(aS);}return A.elements.get(aS);},_uiSetMultiple:function(a5){var A=this;var a4=A.elements;if(a5){a4.setAttribute(X,X);}else{a4.removeAttribute(X);}}}});ak.DropDownCellEditor=L;var ag=ak.Component.create({NAME:B,ATTRS:{selectedAttrName:{value:m}},EXTENDS:ak.BaseOptionsCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+R+'"></div>',OPTION_TEMPLATE:'<input class="'+I+'" id="{id}" name="{name}" type="checkbox" value="{value}"/>',OPTION_WRAPPER:'<label class="'+v+'" for="{id}"><span class="'+aM+'">{label}</span></label>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(aS);}}});ak.CheckboxCellEditor=ag;var H=ak.Component.create({NAME:ae,EXTENDS:ak.CheckboxCellEditor,prototype:{OPTION_TEMPLATE:'<input class="yui3-aui-field-input-choice" id="{id}" name="{name}" type="radio" value="{value}"/>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(aS)[0];},_syncElementsName:function(){var A=this;var a4=A.options;if(a4){a4.setAttribute(k,A.get(at));}}}});ak.RadioCellEditor=H;var a=ak.Component.create({NAME:J,EXTENDS:ak.BaseCellEditor,ATTRS:{bodyContent:{value:Q},calendar:{setter:"_setCalendar",validator:G,value:null}},prototype:{ELEMENT_TEMPLATE:'<input class="'+R+'" type="hidden" />',initializer:function(){var A=this;A.on("calendar:select",ak.bind(A._onDateSelect,A));},getElementsValue:function(){var A=this;return A.calendar.getFormattedSelectedDates().join(a3);},_afterRender:function(){var A=this;ak.DateCellEditor.superclass._afterRender.apply(A,arguments);A.calendar=new ak.Calendar(A.get(O)).render(A.bodyNode);},_onDateSelect:function(a4){var A=this;
A.elements.val(a4.date.formatted.join(a3));},_setCalendar:function(a4){var A=this;return ak.merge({bubbleTargets:A},a4);},_uiSetValue:function(a5){var A=this;var a4=A.calendar;if(a4){if(a5&&aN(a5)){a5=a5.split(a3);}A.calendar.set("dates",a5);}}}});ak.DateCellEditor=a;},"@VERSION@",{requires:["aui-calendar","aui-datatable-events","aui-toolbar","aui-form-validator","overlay"],skinnable:true});AUI.add("aui-datatable-selection",function(B){var j=B.Lang,s=j.isBoolean,v=j.isString,G=B.getClassName,i=B.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),o="cell",m="columnset",g="columnsetChange",r="datatable",E="down",J="esc",u="focused",H="host",p="id",d="keydown",x="left",q="mousedown",D="mouseEvent",w="multiple",I="recordset",f="recordsetChange",l="return",t="right",n="row",c="select",k="selected",y="selectRow",e="tab",z="tabindex",F="tr",h="up",a=G(r,o,k),C=G(r,n,k);var b=B.Base.create("dataTableSelection",B.Plugin.Base,[],{activeColumnIndex:-1,activeRecordIndex:-1,handlerKeyDown:null,selectedCellHash:null,selectedColumnHash:null,selectedRowHash:null,initializer:function(){var A=this;A.selectedCellHash={};A.selectedColumnHash={};A.selectedRowHash={};A.publish({select:{defaultFn:A._defSelectFn}});A.afterHostEvent(A.get(D),A._afterMouseEvent);A.afterHostEvent(g,A._afterHostColumnsetChange);A.afterHostEvent(f,A._afterHostRecordsetChange);A.handlerKeyDown=B.getDoc().on(d,B.bind(A._afterKeyEvent,A));},destroy:function(){var A=this;var K=A.handlerKeyDown;if(K){K.detach();}},getActiveColumn:function(){var A=this;var K=A.get(H);return K.get(m).getColumn(A.activeColumnIndex);},getActiveRecord:function(){var A=this;var K=A.get(H);return K.get(I).getRecord(A.activeRecordIndex);},isCellSelected:function(K){var A=this;return A.selectedCellHash[K.get(p)];},isColumnSelected:function(A){},isRowSelected:function(K){var A=this;return A.selectedRowHash[K.get(p)];},select:function(K,Q){var A=this;var N=A.get(H);var P=N.get(m);var O=N.get(I);var M=P.getColumnByCell(K);var L=O.getRecordByRow(Q||K.ancestor(F));A.activeColumnIndex=P.getColumnIndex(M);A.activeRecordIndex=O.getRecordIndex(L);if(K){A.selectCell(K);}if(A.get(y)&&Q){A.selectRow(Q);}},selectCell:function(K){var A=this;if(!A.get(w)){A.unselectAllCells();}A.selectedCellHash[K.get(p)]=K;K.setAttribute(z,0).focus();K.addClass(a);},selectColumn:function(A){},selectRow:function(K){var A=this;if(!A.get(w)){A.unselectAllRows();}A.selectedRowHash[K.get(p)]=K;K.addClass(C);},toggleCell:function(K,L){var A=this;if(L||!A.isCellSelected(K)){A.selectCell(K);}else{A.unselectCell(K);}},toggleColumn:function(A,K){},toggleRow:function(L,K){var A=this;if(K||!A.isRowSelected(L)){A.selectRow(L);}else{A.unselectRow(L);}},unselectCell:function(K){var A=this;delete A.selectedCellHash[K.get(p)];K.removeAttribute(z);K.removeClass(a);},unselectColumn:function(A){},unselectRow:function(K){var A=this;delete A.selectedRowHash[K.get(p)];K.removeClass(C);},unselectAllCells:function(){var A=this;B.each(A.selectedCellHash,B.bind(A.unselectCell,A));},unselectAllColumns:function(){},unselectAllRows:function(){var A=this;B.each(A.selectedRowHash,B.bind(A.unselectRow,A));},_afterHostColumnsetChange:function(K){var A=this;A._cleanUp();},_afterHostRecordsetChange:function(K){var A=this;A._cleanUp();},_afterMouseEvent:function(K){var A=this;A._handleSelectEvent(K);},_afterKeyEvent:function(N){var A=this;var M=A.get(H);var L=A.getActiveColumn();var K=A.getActiveRecord();if(!M.get(u)||!L||!K){return;}if(M.events){M.events.updateEventPayload(M.getCellNode(K,L),N);}if(N.isNavKey()){if(N.isKey(J)){A._onEscKey(N);}else{if(N.isKey(l)){A._onReturnKey(N);}else{A._navigate(N);}}N.halt();}},_cleanUp:function(){var A=this;A.selectedCellHash={};A.selectedColumnHash={};A.selectedRowHash={};},_defSelectFn:function(K){var A=this;A.select(K.cell,K.row);},_navigate:function(K){var A=this;A._updateNavKeyInfo(K);A._handleSelectEvent(K);},_onEscKey:function(M){var A=this;var L=A.get(H);var K=L.getCellEditor(M.record,M.column);if(K){K.hide();}},_onReturnKey:function(L){var A=this;var K=A.get(H);K._editCell(L);},_handleSelectEvent:function(K){var A=this;A.fire(c,{cell:K.cell,column:K.column,inHead:K.inHead,liner:K.liner,originalEvent:K.originalEvent,row:K.row,record:K.record});},_updateNavKeyInfo:function(A){var T=this;var U=T.get(H);var K=A.originalEvent;var M=U.get(m);var Q=A.column.keyIndex;var S=U.get(I);var N=S.getRecordIndex(A.record);var L=K.ctrlKey||K.metaKey;var R=K.shiftKey;if(K.isKey(x)||(R&&K.isKey(e))){if(L){Q=0;}else{Q--;}}else{if(K.isKey(t)||(!R&&K.isKey(e))){if(L){Q=M.getLength()-1;}else{Q++;}}else{if(K.isKey(E)){if(L){N=S.getLength()-1;}else{N++;}}else{if(K.isKey(h)){if(L){N=0;}else{N--;}}}}}Q=Math.max(Math.min(Q,M.getLength()-1),0);N=Math.max(Math.min(N,S.getLength()-1),0);if(U.events){var O=M.getColumn(Q);var P=S.getRecord(N);U.events.updateEventPayload(U.getCellNode(P,O),A);}},_setMouseEvent:function(A){return o+i(A);}},{NS:"selection",NAME:"dataTableSelection",ATTRS:{selectRow:{value:false,validator:s},multiple:{value:false,validator:s},mouseEvent:{setter:"_setMouseEvent",value:q,validator:v}}});B.namespace("Plugin").DataTableSelection=b;},"@VERSION@",{requires:["aui-datatable-base"],skinnable:true});AUI.add("aui-datatable",function(a){},"@VERSION@",{use:["aui-datatable-base","aui-datatable-events","aui-datatable-edit","aui-datatable-selection"],skinnable:false});