<%@ page import="java.io.Serializable"%>
<%@ page import="java.util.Calendar"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Locale"%>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.Set"%>
<%@ page import="com.liferay.alloy.util.PropsValues"%>
<%@ page import="com.liferay.alloy.util.GetterUtil" %>
<%@ page import="com.liferay.alloy.util.JSONFactoryUtil"%>
<%@ page import="com.liferay.alloy.util.MarkupUtil"%>
<%@ page import="com.liferay.alloy.util.StringUtil"%>
<%@ page import="com.liferay.portal.kernel.servlet.taglib.aui.ScriptData"%>
<%@ page import="com.liferay.portal.kernel.util.StringBundler"%>
<%@ page import="com.liferay.portal.kernel.util.StringPool" %>
<%@ page import="com.liferay.portal.kernel.util.Validator"%>
<%@ page import="org.json.JSONObject" %>
<%@ page import="org.json.JSONArray" %>

<%!
public static void _updateOptions(Map<String, Object> options, String key, Object value) {
	if ((options != null) && options.containsKey(key)) {
		options.put(key, value);
	}
}
%>

<%
java.lang.String NAMESPACE = "alloy:calendar:";

Map<String, Object> dynamicAttributes = (Map<String, Object>)request.getAttribute("alloy:calendar:dynamicAttributes");
Map<String, Object> scopedAttributes = (Map<String, Object>)request.getAttribute("alloy:calendar:scopedAttributes");

Map<String, Object> options = new HashMap<String, Object>();

options.putAll(scopedAttributes);
options.putAll(dynamicAttributes);

%>

<%@ include file="/html/taglib/alloy/init-alloy.jsp" %>

<%
java.util.HashMap _align = JSONFactoryUtil.getHashMap(GetterUtil.getObject((java.lang.Object)request.getAttribute("alloy:calendar:align"), "{ node: null, points: [ TL, BL ] }"));
java.lang.Object _calendarBodyContent = (java.lang.Object)request.getAttribute("alloy:calendar:calendarBodyContent");
java.lang.Boolean _cancellableHide = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:cancellableHide"), true);
java.lang.Object _centered = (java.lang.Object)request.getAttribute("alloy:calendar:centered");
java.lang.Object _constrain = (java.lang.Object)request.getAttribute("alloy:calendar:constrain");
java.lang.String _cssClass = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:calendar:cssClass"));
java.lang.Number _currentDay = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:currentDay")), 0);
java.lang.Number _currentMonth = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:currentMonth")), 0);
java.lang.Object _currentNode = (java.lang.Object)request.getAttribute("alloy:calendar:currentNode");
java.lang.Number _currentYear = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:currentYear")), 0);
java.lang.String _dateFormat = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:calendar:dateFormat"), "%m/%d/%Y");
java.util.ArrayList _dates = JSONFactoryUtil.getArrayList(GetterUtil.getObject((java.lang.Object)request.getAttribute("alloy:calendar:dates")));
java.lang.Boolean _destroyed = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:destroyed"), false);
java.lang.Boolean _disabled = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:disabled"), false);
java.lang.Object _fillHeight = (java.lang.Object)request.getAttribute("alloy:calendar:fillHeight");
java.lang.Number _firstDayOfWeek = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:firstDayOfWeek")), 0);
java.lang.Boolean _focused = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:focused"), false);
java.lang.Object _footerContent = (java.lang.Object)request.getAttribute("alloy:calendar:footerContent");
java.lang.Object _headerContent = (java.lang.Object)request.getAttribute("alloy:calendar:headerContent");
java.lang.Object _height = (java.lang.Object)request.getAttribute("alloy:calendar:height");
java.lang.String _hideClass = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:calendar:hideClass"), "aui-helper-hidden");
java.lang.Number _hideDelay = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:hideDelay")), 0);
java.lang.String _hideOn = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:calendar:hideOn"), "mouseout");
java.lang.Boolean _hideOnDocumentClick = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:hideOnDocumentClick"), true);
java.lang.String _calendarId = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:calendar:calendarId"));
java.lang.Boolean _initialized = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:initialized"), false);
java.lang.Object _maxDate = (java.lang.Object)request.getAttribute("alloy:calendar:maxDate");
java.lang.Object _minDate = (java.lang.Object)request.getAttribute("alloy:calendar:minDate");
java.lang.Boolean _preventOverlap = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:preventOverlap"), false);
java.lang.Object _render = (java.lang.Object)request.getAttribute("alloy:calendar:render");
java.lang.Boolean _rendered = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:rendered"), false);
java.lang.Boolean _selectMultipleDates = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:selectMultipleDates"), false);
java.lang.Boolean _setValue = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:setValue"), true);
java.lang.Boolean _shim = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:shim"), false);
java.lang.Number _showDelay = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:showDelay")), 0);
java.lang.String _showOn = GetterUtil.getString((java.lang.String)request.getAttribute("alloy:calendar:showOn"), "mouseover");
java.lang.Boolean _stack = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:stack"), true);
java.util.HashMap _strings = JSONFactoryUtil.getHashMap(GetterUtil.getObject((java.lang.Object)request.getAttribute("alloy:calendar:strings")));
java.lang.Number _tabIndex = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:tabIndex")), 0);
java.lang.Object _trigger = (java.lang.Object)request.getAttribute("alloy:calendar:trigger");
java.lang.Boolean _visible = GetterUtil.getBoolean((java.lang.Boolean)request.getAttribute("alloy:calendar:visible"), false);
java.lang.Object _width = (java.lang.Object)request.getAttribute("alloy:calendar:width");
java.lang.Number _x = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:x")), 0);
java.util.ArrayList _xy = JSONFactoryUtil.getArrayList(GetterUtil.getObject((java.lang.Object)request.getAttribute("alloy:calendar:xy"), "[0,0]"));
java.lang.Number _y = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:y")), 0);
java.lang.Number _zIndex = GetterUtil.getNumber(String.valueOf(request.getAttribute("alloy:calendar:zIndex")), 0);
java.lang.Object _afterAlignChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterAlignChange");
java.lang.Object _afterBodyContentChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterBodyContentChange");
java.lang.Object _afterBoundingBoxChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterBoundingBoxChange");
java.lang.Object _afterCancellableHideChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterCancellableHideChange");
java.lang.Object _afterCenteredChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterCenteredChange");
java.lang.Object _afterConstrainChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterConstrainChange");
java.lang.Object _afterContentBoxChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterContentBoxChange");
java.lang.Object _afterCssClassChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterCssClassChange");
java.lang.Object _afterCurrentDayChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterCurrentDayChange");
java.lang.Object _afterCurrentMonthChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterCurrentMonthChange");
java.lang.Object _afterCurrentNodeChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterCurrentNodeChange");
java.lang.Object _afterCurrentYearChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterCurrentYearChange");
java.lang.Object _afterDateFormatChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterDateFormatChange");
java.lang.Object _afterDatesChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterDatesChange");
java.lang.Object _afterDestroy = (java.lang.Object)request.getAttribute("alloy:calendar:afterDestroy");
java.lang.Object _afterDestroyedChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterDestroyedChange");
java.lang.Object _afterDisabledChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterDisabledChange");
java.lang.Object _afterFillHeightChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterFillHeightChange");
java.lang.Object _afterFirstDayOfWeekChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterFirstDayOfWeekChange");
java.lang.Object _afterFocusedChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterFocusedChange");
java.lang.Object _afterFooterContentChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterFooterContentChange");
java.lang.Object _afterHeaderContentChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterHeaderContentChange");
java.lang.Object _afterHeightChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterHeightChange");
java.lang.Object _afterHideClassChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterHideClassChange");
java.lang.Object _afterHideDelayChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterHideDelayChange");
java.lang.Object _afterHideOnChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterHideOnChange");
java.lang.Object _afterHideOnDocumentClickChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterHideOnDocumentClickChange");
java.lang.Object _afterIdChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterIdChange");
java.lang.Object _afterInit = (java.lang.Object)request.getAttribute("alloy:calendar:afterInit");
java.lang.Object _afterInitializedChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterInitializedChange");
java.lang.Object _afterMaxDateChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterMaxDateChange");
java.lang.Object _afterMinDateChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterMinDateChange");
java.lang.Object _afterPreventOverlapChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterPreventOverlapChange");
java.lang.Object _afterRenderChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterRenderChange");
java.lang.Object _afterRenderedChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterRenderedChange");
java.lang.Object _afterSelectMultipleDatesChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterSelectMultipleDatesChange");
java.lang.Object _afterSetValueChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterSetValueChange");
java.lang.Object _afterShimChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterShimChange");
java.lang.Object _afterShowDelayChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterShowDelayChange");
java.lang.Object _afterShowOnChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterShowOnChange");
java.lang.Object _afterSrcNodeChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterSrcNodeChange");
java.lang.Object _afterStackChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterStackChange");
java.lang.Object _afterStringsChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterStringsChange");
java.lang.Object _afterTabIndexChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterTabIndexChange");
java.lang.Object _afterTriggerChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterTriggerChange");
java.lang.Object _afterVisibleChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterVisibleChange");
java.lang.Object _afterContentUpdate = (java.lang.Object)request.getAttribute("alloy:calendar:afterContentUpdate");
java.lang.Object _afterRender = (java.lang.Object)request.getAttribute("alloy:calendar:afterRender");
java.lang.Object _afterWidthChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterWidthChange");
java.lang.Object _afterXChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterXChange");
java.lang.Object _afterXyChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterXyChange");
java.lang.Object _afterYChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterYChange");
java.lang.Object _afterZIndexChange = (java.lang.Object)request.getAttribute("alloy:calendar:afterZIndexChange");
java.lang.Object _onAlignChange = (java.lang.Object)request.getAttribute("alloy:calendar:onAlignChange");
java.lang.Object _onBodyContentChange = (java.lang.Object)request.getAttribute("alloy:calendar:onBodyContentChange");
java.lang.Object _onBoundingBoxChange = (java.lang.Object)request.getAttribute("alloy:calendar:onBoundingBoxChange");
java.lang.Object _onCancellableHideChange = (java.lang.Object)request.getAttribute("alloy:calendar:onCancellableHideChange");
java.lang.Object _onCenteredChange = (java.lang.Object)request.getAttribute("alloy:calendar:onCenteredChange");
java.lang.Object _onConstrainChange = (java.lang.Object)request.getAttribute("alloy:calendar:onConstrainChange");
java.lang.Object _onContentBoxChange = (java.lang.Object)request.getAttribute("alloy:calendar:onContentBoxChange");
java.lang.Object _onCssClassChange = (java.lang.Object)request.getAttribute("alloy:calendar:onCssClassChange");
java.lang.Object _onCurrentDayChange = (java.lang.Object)request.getAttribute("alloy:calendar:onCurrentDayChange");
java.lang.Object _onCurrentMonthChange = (java.lang.Object)request.getAttribute("alloy:calendar:onCurrentMonthChange");
java.lang.Object _onCurrentNodeChange = (java.lang.Object)request.getAttribute("alloy:calendar:onCurrentNodeChange");
java.lang.Object _onCurrentYearChange = (java.lang.Object)request.getAttribute("alloy:calendar:onCurrentYearChange");
java.lang.Object _onDateFormatChange = (java.lang.Object)request.getAttribute("alloy:calendar:onDateFormatChange");
java.lang.Object _onDatesChange = (java.lang.Object)request.getAttribute("alloy:calendar:onDatesChange");
java.lang.Object _onDestroy = (java.lang.Object)request.getAttribute("alloy:calendar:onDestroy");
java.lang.Object _onDestroyedChange = (java.lang.Object)request.getAttribute("alloy:calendar:onDestroyedChange");
java.lang.Object _onDisabledChange = (java.lang.Object)request.getAttribute("alloy:calendar:onDisabledChange");
java.lang.Object _onFillHeightChange = (java.lang.Object)request.getAttribute("alloy:calendar:onFillHeightChange");
java.lang.Object _onFirstDayOfWeekChange = (java.lang.Object)request.getAttribute("alloy:calendar:onFirstDayOfWeekChange");
java.lang.Object _onFocusedChange = (java.lang.Object)request.getAttribute("alloy:calendar:onFocusedChange");
java.lang.Object _onFooterContentChange = (java.lang.Object)request.getAttribute("alloy:calendar:onFooterContentChange");
java.lang.Object _onHeaderContentChange = (java.lang.Object)request.getAttribute("alloy:calendar:onHeaderContentChange");
java.lang.Object _onHeightChange = (java.lang.Object)request.getAttribute("alloy:calendar:onHeightChange");
java.lang.Object _onHideClassChange = (java.lang.Object)request.getAttribute("alloy:calendar:onHideClassChange");
java.lang.Object _onHideDelayChange = (java.lang.Object)request.getAttribute("alloy:calendar:onHideDelayChange");
java.lang.Object _onHideOnChange = (java.lang.Object)request.getAttribute("alloy:calendar:onHideOnChange");
java.lang.Object _onHideOnDocumentClickChange = (java.lang.Object)request.getAttribute("alloy:calendar:onHideOnDocumentClickChange");
java.lang.Object _onIdChange = (java.lang.Object)request.getAttribute("alloy:calendar:onIdChange");
java.lang.Object _onInit = (java.lang.Object)request.getAttribute("alloy:calendar:onInit");
java.lang.Object _onInitializedChange = (java.lang.Object)request.getAttribute("alloy:calendar:onInitializedChange");
java.lang.Object _onMaxDateChange = (java.lang.Object)request.getAttribute("alloy:calendar:onMaxDateChange");
java.lang.Object _onMinDateChange = (java.lang.Object)request.getAttribute("alloy:calendar:onMinDateChange");
java.lang.Object _onPreventOverlapChange = (java.lang.Object)request.getAttribute("alloy:calendar:onPreventOverlapChange");
java.lang.Object _onRenderChange = (java.lang.Object)request.getAttribute("alloy:calendar:onRenderChange");
java.lang.Object _onRenderedChange = (java.lang.Object)request.getAttribute("alloy:calendar:onRenderedChange");
java.lang.Object _onSelectMultipleDatesChange = (java.lang.Object)request.getAttribute("alloy:calendar:onSelectMultipleDatesChange");
java.lang.Object _onSetValueChange = (java.lang.Object)request.getAttribute("alloy:calendar:onSetValueChange");
java.lang.Object _onShimChange = (java.lang.Object)request.getAttribute("alloy:calendar:onShimChange");
java.lang.Object _onShowDelayChange = (java.lang.Object)request.getAttribute("alloy:calendar:onShowDelayChange");
java.lang.Object _onShowOnChange = (java.lang.Object)request.getAttribute("alloy:calendar:onShowOnChange");
java.lang.Object _onSrcNodeChange = (java.lang.Object)request.getAttribute("alloy:calendar:onSrcNodeChange");
java.lang.Object _onStackChange = (java.lang.Object)request.getAttribute("alloy:calendar:onStackChange");
java.lang.Object _onStringsChange = (java.lang.Object)request.getAttribute("alloy:calendar:onStringsChange");
java.lang.Object _onTabIndexChange = (java.lang.Object)request.getAttribute("alloy:calendar:onTabIndexChange");
java.lang.Object _onTriggerChange = (java.lang.Object)request.getAttribute("alloy:calendar:onTriggerChange");
java.lang.Object _onVisibleChange = (java.lang.Object)request.getAttribute("alloy:calendar:onVisibleChange");
java.lang.Object _onContentUpdate = (java.lang.Object)request.getAttribute("alloy:calendar:onContentUpdate");
java.lang.Object _onRender = (java.lang.Object)request.getAttribute("alloy:calendar:onRender");
java.lang.Object _onWidthChange = (java.lang.Object)request.getAttribute("alloy:calendar:onWidthChange");
java.lang.Object _onXChange = (java.lang.Object)request.getAttribute("alloy:calendar:onXChange");
java.lang.Object _onXyChange = (java.lang.Object)request.getAttribute("alloy:calendar:onXyChange");
java.lang.Object _onYChange = (java.lang.Object)request.getAttribute("alloy:calendar:onYChange");
java.lang.Object _onZIndexChange = (java.lang.Object)request.getAttribute("alloy:calendar:onZIndexChange");

_updateOptions(options, "align", _align);
_updateOptions(options, "calendarBodyContent", _calendarBodyContent);
_updateOptions(options, "boundingBox", _boundingBox);
_updateOptions(options, "cancellableHide", _cancellableHide);
_updateOptions(options, "centered", _centered);
_updateOptions(options, "constrain", _constrain);
_updateOptions(options, "contentBox", _contentBox);
_updateOptions(options, "cssClass", _cssClass);
_updateOptions(options, "currentDay", _currentDay);
_updateOptions(options, "currentMonth", _currentMonth);
_updateOptions(options, "currentNode", _currentNode);
_updateOptions(options, "currentYear", _currentYear);
_updateOptions(options, "dateFormat", _dateFormat);
_updateOptions(options, "dates", _dates);
_updateOptions(options, "destroyed", _destroyed);
_updateOptions(options, "disabled", _disabled);
_updateOptions(options, "fillHeight", _fillHeight);
_updateOptions(options, "firstDayOfWeek", _firstDayOfWeek);
_updateOptions(options, "focused", _focused);
_updateOptions(options, "footerContent", _footerContent);
_updateOptions(options, "headerContent", _headerContent);
_updateOptions(options, "height", _height);
_updateOptions(options, "hideClass", _hideClass);
_updateOptions(options, "hideDelay", _hideDelay);
_updateOptions(options, "hideOn", _hideOn);
_updateOptions(options, "hideOnDocumentClick", _hideOnDocumentClick);
_updateOptions(options, "calendarId", _calendarId);
_updateOptions(options, "initialized", _initialized);
_updateOptions(options, "maxDate", _maxDate);
_updateOptions(options, "minDate", _minDate);
_updateOptions(options, "preventOverlap", _preventOverlap);
_updateOptions(options, "render", _render);
_updateOptions(options, "rendered", _rendered);
_updateOptions(options, "selectMultipleDates", _selectMultipleDates);
_updateOptions(options, "setValue", _setValue);
_updateOptions(options, "shim", _shim);
_updateOptions(options, "showDelay", _showDelay);
_updateOptions(options, "showOn", _showOn);
_updateOptions(options, "srcNode", _srcNode);
_updateOptions(options, "stack", _stack);
_updateOptions(options, "strings", _strings);
_updateOptions(options, "tabIndex", _tabIndex);
_updateOptions(options, "trigger", _trigger);
_updateOptions(options, "visible", _visible);
_updateOptions(options, "width", _width);
_updateOptions(options, "x", _x);
_updateOptions(options, "xy", _xy);
_updateOptions(options, "y", _y);
_updateOptions(options, "zIndex", _zIndex);
_updateOptions(options, "afterAlignChange", _afterAlignChange);
_updateOptions(options, "afterBodyContentChange", _afterBodyContentChange);
_updateOptions(options, "afterBoundingBoxChange", _afterBoundingBoxChange);
_updateOptions(options, "afterCancellableHideChange", _afterCancellableHideChange);
_updateOptions(options, "afterCenteredChange", _afterCenteredChange);
_updateOptions(options, "afterConstrainChange", _afterConstrainChange);
_updateOptions(options, "afterContentBoxChange", _afterContentBoxChange);
_updateOptions(options, "afterCssClassChange", _afterCssClassChange);
_updateOptions(options, "afterCurrentDayChange", _afterCurrentDayChange);
_updateOptions(options, "afterCurrentMonthChange", _afterCurrentMonthChange);
_updateOptions(options, "afterCurrentNodeChange", _afterCurrentNodeChange);
_updateOptions(options, "afterCurrentYearChange", _afterCurrentYearChange);
_updateOptions(options, "afterDateFormatChange", _afterDateFormatChange);
_updateOptions(options, "afterDatesChange", _afterDatesChange);
_updateOptions(options, "afterDestroy", _afterDestroy);
_updateOptions(options, "afterDestroyedChange", _afterDestroyedChange);
_updateOptions(options, "afterDisabledChange", _afterDisabledChange);
_updateOptions(options, "afterFillHeightChange", _afterFillHeightChange);
_updateOptions(options, "afterFirstDayOfWeekChange", _afterFirstDayOfWeekChange);
_updateOptions(options, "afterFocusedChange", _afterFocusedChange);
_updateOptions(options, "afterFooterContentChange", _afterFooterContentChange);
_updateOptions(options, "afterHeaderContentChange", _afterHeaderContentChange);
_updateOptions(options, "afterHeightChange", _afterHeightChange);
_updateOptions(options, "afterHideClassChange", _afterHideClassChange);
_updateOptions(options, "afterHideDelayChange", _afterHideDelayChange);
_updateOptions(options, "afterHideOnChange", _afterHideOnChange);
_updateOptions(options, "afterHideOnDocumentClickChange", _afterHideOnDocumentClickChange);
_updateOptions(options, "afterIdChange", _afterIdChange);
_updateOptions(options, "afterInit", _afterInit);
_updateOptions(options, "afterInitializedChange", _afterInitializedChange);
_updateOptions(options, "afterMaxDateChange", _afterMaxDateChange);
_updateOptions(options, "afterMinDateChange", _afterMinDateChange);
_updateOptions(options, "afterPreventOverlapChange", _afterPreventOverlapChange);
_updateOptions(options, "afterRenderChange", _afterRenderChange);
_updateOptions(options, "afterRenderedChange", _afterRenderedChange);
_updateOptions(options, "afterSelectMultipleDatesChange", _afterSelectMultipleDatesChange);
_updateOptions(options, "afterSetValueChange", _afterSetValueChange);
_updateOptions(options, "afterShimChange", _afterShimChange);
_updateOptions(options, "afterShowDelayChange", _afterShowDelayChange);
_updateOptions(options, "afterShowOnChange", _afterShowOnChange);
_updateOptions(options, "afterSrcNodeChange", _afterSrcNodeChange);
_updateOptions(options, "afterStackChange", _afterStackChange);
_updateOptions(options, "afterStringsChange", _afterStringsChange);
_updateOptions(options, "afterTabIndexChange", _afterTabIndexChange);
_updateOptions(options, "afterTriggerChange", _afterTriggerChange);
_updateOptions(options, "afterVisibleChange", _afterVisibleChange);
_updateOptions(options, "afterContentUpdate", _afterContentUpdate);
_updateOptions(options, "afterRender", _afterRender);
_updateOptions(options, "afterWidthChange", _afterWidthChange);
_updateOptions(options, "afterXChange", _afterXChange);
_updateOptions(options, "afterXyChange", _afterXyChange);
_updateOptions(options, "afterYChange", _afterYChange);
_updateOptions(options, "afterZIndexChange", _afterZIndexChange);
_updateOptions(options, "onAlignChange", _onAlignChange);
_updateOptions(options, "onBodyContentChange", _onBodyContentChange);
_updateOptions(options, "onBoundingBoxChange", _onBoundingBoxChange);
_updateOptions(options, "onCancellableHideChange", _onCancellableHideChange);
_updateOptions(options, "onCenteredChange", _onCenteredChange);
_updateOptions(options, "onConstrainChange", _onConstrainChange);
_updateOptions(options, "onContentBoxChange", _onContentBoxChange);
_updateOptions(options, "onCssClassChange", _onCssClassChange);
_updateOptions(options, "onCurrentDayChange", _onCurrentDayChange);
_updateOptions(options, "onCurrentMonthChange", _onCurrentMonthChange);
_updateOptions(options, "onCurrentNodeChange", _onCurrentNodeChange);
_updateOptions(options, "onCurrentYearChange", _onCurrentYearChange);
_updateOptions(options, "onDateFormatChange", _onDateFormatChange);
_updateOptions(options, "onDatesChange", _onDatesChange);
_updateOptions(options, "onDestroy", _onDestroy);
_updateOptions(options, "onDestroyedChange", _onDestroyedChange);
_updateOptions(options, "onDisabledChange", _onDisabledChange);
_updateOptions(options, "onFillHeightChange", _onFillHeightChange);
_updateOptions(options, "onFirstDayOfWeekChange", _onFirstDayOfWeekChange);
_updateOptions(options, "onFocusedChange", _onFocusedChange);
_updateOptions(options, "onFooterContentChange", _onFooterContentChange);
_updateOptions(options, "onHeaderContentChange", _onHeaderContentChange);
_updateOptions(options, "onHeightChange", _onHeightChange);
_updateOptions(options, "onHideClassChange", _onHideClassChange);
_updateOptions(options, "onHideDelayChange", _onHideDelayChange);
_updateOptions(options, "onHideOnChange", _onHideOnChange);
_updateOptions(options, "onHideOnDocumentClickChange", _onHideOnDocumentClickChange);
_updateOptions(options, "onIdChange", _onIdChange);
_updateOptions(options, "onInit", _onInit);
_updateOptions(options, "onInitializedChange", _onInitializedChange);
_updateOptions(options, "onMaxDateChange", _onMaxDateChange);
_updateOptions(options, "onMinDateChange", _onMinDateChange);
_updateOptions(options, "onPreventOverlapChange", _onPreventOverlapChange);
_updateOptions(options, "onRenderChange", _onRenderChange);
_updateOptions(options, "onRenderedChange", _onRenderedChange);
_updateOptions(options, "onSelectMultipleDatesChange", _onSelectMultipleDatesChange);
_updateOptions(options, "onSetValueChange", _onSetValueChange);
_updateOptions(options, "onShimChange", _onShimChange);
_updateOptions(options, "onShowDelayChange", _onShowDelayChange);
_updateOptions(options, "onShowOnChange", _onShowOnChange);
_updateOptions(options, "onSrcNodeChange", _onSrcNodeChange);
_updateOptions(options, "onStackChange", _onStackChange);
_updateOptions(options, "onStringsChange", _onStringsChange);
_updateOptions(options, "onTabIndexChange", _onTabIndexChange);
_updateOptions(options, "onTriggerChange", _onTriggerChange);
_updateOptions(options, "onVisibleChange", _onVisibleChange);
_updateOptions(options, "onContentUpdate", _onContentUpdate);
_updateOptions(options, "onRender", _onRender);
_updateOptions(options, "onWidthChange", _onWidthChange);
_updateOptions(options, "onXChange", _onXChange);
_updateOptions(options, "onXyChange", _onXyChange);
_updateOptions(options, "onYChange", _onYChange);
_updateOptions(options, "onZIndexChange", _onZIndexChange);
%>

<%@ include file="init-ext.jsp" %>