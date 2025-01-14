
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"54",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"snowplow.domain_userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"doubleClickOnPage"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "convert_undefined_to":"false",
      "vtp_decodeCookie":false,
      "vtp_name":"token"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gasv3AnonymousId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ed"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\\\/$","value","visit"],["map","key","^\/magic$","value","visit"],["map","key","^\/signup$","value","try"],["map","key","^\\\/en-US$","value","visit"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BP_GTM_FPC"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ds_e1",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","[^.]ds_e1\\=[^.]","value",["macro",13]],["map","key","[^.]utm_source\\=[^.]","value",["macro",14]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","[^.]ds_e1\\=[^.]","value","paid-search"],["map","key","[^.]utm_medium\\=[^.]","value",["macro",16]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.historyChangeSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isLoggedIn"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction create_UUID(){var a=(new Date).getTime(),d=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"==b?c:c\u00263|8).toString(16)});return d}function createCookie(a,d,b){var c=new Date;c.setTime(c.getTime()+36E5*b);b=\"; expires \\x3d \"+c.toGMTString();document.cookie=d\u0026\u0026\"undefined\"!==d?a+\"\\x3d\"+d+b+\"; path\\x3d\/\":a+\"\\x3d\"+create_UUID()+b+\"; path\\x3d\/\"}createCookie(\"BP_GTM_FPC\",",["escape",["macro",12],8,16],",168);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eval-c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",4],
      "vtp_url":["macro",5],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":3
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"remar0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalStandard":["macro",4],
      "vtp_url":["macro",5],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":4
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"tryint",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",4],
      "vtp_url":["macro",5],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":5
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]],["map","key","u4","value",["macro",9]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"trell0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalStandard":["macro",4],
      "vtp_url":["macro",5],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":6
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"856618376",
      "vtp_conversionLabel":"BfTJCN6g13AQiOu7mAM",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":8
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"856618376",
      "vtp_conversionLabel":"vj6iCOTq8HAQiOu7mAM",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":10
    },{
      "function":"__flc",
      "vtp_groupTag":"trell0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell1",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalStandard":["macro",4],
      "vtp_url":["macro",5],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":12
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","pagetype","value","viewed-any-not-login"]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"856618376",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",5],
      "vtp_enableRdpCheckbox":true,
      "tag_id":19
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","pagetype","value","Logged%20In"]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"856618376",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",5],
      "vtp_enableRdpCheckbox":true,
      "tag_id":20
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","pagetype","value","blog"]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"856618376",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",5],
      "vtp_enableRdpCheckbox":true,
      "tag_id":21
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"18000089",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":26
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800073245",
      "vtp_conversionLabel":"1hgkCJXA6IUBEJ3MwP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":28
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048523",
      "vtp_conversionLabel":"I3jZCI_Nz4UBEIuLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":29
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048529",
      "vtp_conversionLabel":"LmNRCJ223oUBEJGLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":30
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048694",
      "vtp_conversionLabel":"HcgiCOS-6IUBELaMv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":31
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800066758",
      "vtp_conversionLabel":"FUp8CIzA6IUBEMaZwP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":32
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":true,
      "tag_id":33
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"863319477",
      "vtp_conversionLabel":"5rdXCLfX0YoBELXr1JsD",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":35
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048529",
      "vtp_conversionLabel":"1-oCCPHVhJQBEJGLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":36
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048529",
      "vtp_conversionLabel":"rkU5CLTUhJQBEJGLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":37
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"44935",
      "tag_id":40
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"trell0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"viewe0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",4],
      "vtp_url":["macro",5],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":44
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":110
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":111
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o3pk8",
      "tag_id":113
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=atlassian\u0026kpi=",["escape",["macro",11],12],"\u0026tag_id=110\u0026fpc=",["escape",["macro",12],12],"\u0026user_id=",["escape",["macro",9],12],"\u0026utm_source=",["escape",["macro",15],12],"\u0026utm_medium=",["escape",["macro",17],12],"\u0026order_value=",["escape",["macro",18],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":124
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=atlassian\u0026kpi=signup\u0026tag_id=110\u0026fpc=",["escape",["macro",12],12],"\u0026user_id=",["escape",["macro",9],12],"\u0026utm_source=",["escape",["macro",15],12],"\u0026utm_medium=",["escape",["macro",17],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",4],
      "tag_id":126
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_enableShippingData":false,
      "vtp_conversionId":"375826860",
      "vtp_conversionLabel":"8CjHCPfF3qkCEKzTmrMB",
      "vtp_rdp":false,
      "vtp_url":["macro",5],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":138
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=CompleteRegistration\u0026amp;cd[content_name]=Confirmed%20Evaluation\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Try%20Intent\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Try%20Intent\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Logged%20In\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Logged%20In\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Viewed%20Any%20Not%20Login\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Viewed%20Any%20Not%20Login\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Blog\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Blog\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"trello\",ea:\"confirmed_evaluation\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"  \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"6a46dd1a94fff700dd6bd0baede5d68d\",c=\"2041963\",d=\"https:\"==document.location.protocol?\"https:\/\/ct.capterra.com\":\"http:\/\/ct.capterra.com\",b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=d+\"\/capterra_tracker.js?vid\\x3d\"+c+\"\\x26vkey\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"594-ATC-127\",{asyncOnly:!0}))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=44935\u0026amp;conversionId=1390892\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"c805eab18dff4c19a2dd47cfa8920bb5\");qp(\"track\",\"ViewContent\");qp(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/c805eab18dff4c19a2dd47cfa8920bb5\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"  \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"62710ee8149a8012cf47f8998227d090\",c=\"2152159\",d=\"https:\"==document.location.protocol?\"https:\/\/ct.capterra.com\":\"http:\/\/ct.capterra.com\",b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=d+\"\/capterra_tracker.js?vid\\x3d\"+c+\"\\x26vkey\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=44935\u0026amp;conversionId=3130132\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.bizible.com\/scripts\/bizible.js\" async=\"\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,d,e){a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.id=e;a.src=d;b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"https:\/\/tag.demandbase.com\/BwkB5d1U.min.js\",\"demandbase_js_lib\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){\"function\"!=typeof a.ClickTaleCreateDOMElement\u0026\u0026(a.ClickTaleCreateDOMElement=function(c){return b.createElementNS?b.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",c):b.createElement(c)});a.WRInitTime=(new Date).getTime();a=ClickTaleCreateDOMElement(\"script\");a.type=\"text\/javascript\";var d=\"https:\"==b.location.protocol?\"https:\/\/cdnssl.clicktale.net\/\":\"http:\/\/cdn.clicktale.net\/\";d+=\"www33\/ptc\/ef81b94c-8498-4f12-b358-eb76a000a247.js\";a.src=d;b.getElementsByTagName(\"body\")[0].appendChild(a)})(window,\ndocument);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"trello.possibleNewSignup"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/login(.*|\\\/)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/add-card.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/associate.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/confirmEmail.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/forgot.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(\\\u0026|\\%26|\\%2526|\\?|%3F|%253F)(email)=([^\u0026]*(?:\u0026[^\u0026=]+(?=\u0026|$))*)(?:\u0026|$)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"\/signup"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/c\\\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/b\\\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello.com\\\/reset\\?.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"blog.trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"\/teams\/team-management"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"\/travel"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"info.trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"\/magic"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\\b^(gmail|hotmail|yahoo|mail|outlook|qq|icloud|yandex|163|gmx|web|googlemail|live|me|hotmail.co|naver|yahoo.com|aol|protonmail|bk|msn|orange|yahoo.co|126|wp|t-online|comcast|ymail|ukr|seznam|inbox|list|ya|mac|rambler|o2|free|laposte|scryptmail|live.co|yopmail|libero|btinternet|sina|wanadoo|siemens|bluewin|interia|foxmail|mailinator|sbcglobal|uol.com|posteo|abv|rocketmail|bigpond|att|i.softbank|bol.com|freenet|hanmail|itesm|outlook.com|email|verizon|op|gmai|sfr|live.com|terra.com|rediffmail|cox|sky|telenet|hotmail.com|email.arizona|nate|onet|example|online|windowslive|shaw|ualberta|arcor|yeah|tut|bellsouth|139|sharklasers|rogers|centrum|aliyun|daum|zoho|ziggo|student.swin.edu|globo|xtra.co|post|u.northwestern|tiscali|tlen|optusnet.com|alice|neuf|poczta.onet|ntlworld|telia|virgilio|freemail|charter|iinet.net|xs4all|vip.qq|videotron|mail.usf|skynet|mail.mcgill|ig.com|earthlink|home|ieee|kpnmail|sapo|telus|live.unc|poczta|optonline|aim|blueyonder.co|aon|sympatico|bigpond.net|sohu|discovery|fastmail|bt|nifty|mail.missouri|virginmedia|gmail.com|bigmir|walla|planet|upcmail|iki|y7mail|mail.gvsu|talktalk|bbox|mail.uc|189|student.unsw.edu|aol.co|buckeyemail.osu|hispeed|email.sc|telefonica|ngs|gazeta|doctors.org|btopenworld|internode.on|email.wm|gwmail.gwu|juno|ua|hotmai|tpg.com|live.missouristate|mweb.co|gamail|sunrise|volny|hetnet|students.towson|club-internet|frontier|westnet.com|oi.com|bell|roadrunner|chello|casema|pobox|kabelmail|btconnect|umail.iu|usa|go2|azet|mynet|tiscali.co|tin|narod|numericable|netcourrier|sasktel|talk21|21cn|pacbell|mindspring|india|gmx.co|simnet|netscape|email.unc|trash-mail|nus.edu|tigermail.auburn|citromail|studenti.unimi|onlinehome|test|prodigy.net|quicknet|tom|telecomitalia|safetymail|telkomsa|netcologne|eircom|windstream|aliceadsl|msa.hinet|facebook|bluemail|hushmail|unitybox|ewetel|globomail|atlas|embarqmail|inwind|ybb.ne|cegetel|luukku|livemail|engineer|acm|virgin|cfl.rr|alum.mit|consultant|ozemail.com|nc.rr|binkmail|mchsi|imail|cableone|hotmal|kpnplanet|ancestry|cogeco|swbell|students.ecu|ono|runbox|centurylink|a1|vip.163|kimo|telfort|europe|zeelandnet|suddenlink|ameritech|prodigy|dispostable|zonnet|hot|berlin|wi.rr|vodamail.co|ptd|netcabo|iprimus.com|sibmail|tampabay.rr|myself|rediff|tds|noos|caramail|austin.rr|adam.com|otenet|rcn|comhem|vodafone|netspace.net|programmer|pt|bredband|dr|rochester.rr|student.tuwien.ac|solcon|zoominternet|swissonline|detik|fuse|adinet.com|webmail.co|carolina.rr|lyse|frontiernet|paran|optimum|dbmail|gmail.co|libertysurf|cs|hamburg|netzero|techie|yaho|spamgourmet|eastlink|sent|empal|scarlet|fibertel.com|aapt.net|vip.sina|singnet.com|centurytel|wowway|students.swinburne.edu|net|bigpond.com|excite|pandora|vtr|tx.rr|post.harvard|spray|o2online|zipmail.com|wegwerfemail|snet|triad.rr|lycos|cinci.rr|saintly|uniroma1|nycap.rr|hush|une.net|hawaii.rr|netplus|hccnet|columbus.rr|slingshot.co|tele2|linuxmail|htp-tel|eml|getmail|hotamil|iname|pchome.com|movistar|netvision.net|hotmial|satx.rr|neo.rr|globetrotter|gotmail|terra|ix.netcom|excite.co|wxs|9online|parrot|netvigator|san.rr|maine.rr|asia|sina.com|woh.rr|inode|exemail.com|mm|easypost|iol|twcny.rr|xoxy|vfemail|fastmail.co|lineone|writeme|korea|workmail|your-mail|sc.rr|seed.net|kc.rr|alice-dsl|telusplanet|mail2000.com|hoymail|bresnan|bellnet|ihug.co|gci|zoznam|caiway|katamail|nyc.rr|hughes|fastmail.com|besonet|ca.rr|bellaliant|mundo-r|unican|snafu|stny.rr|cheerful|new.rr|stanfordalumni|nm|r7|atlanticbb|teletu|socal.rr|suremail|me.com|singpost|speedy.com|qip|hotmaill|263|mailcatch|operamail|myfairpoint|hotail|mail.goo.ne|pisem|123|imap|jetable|saudia|knology|fea|tiscalinet|warpmail|voila|eim|about|montevideo.com|hotamail|sol|arnet.com|ftml|webspeed|sogetthis|trashmail|versatel|tradermail|peoplepc|broadpark|wavecable|ml1|hvc.rr|safe-mail|ggaweb|f-m|elitemail|mailcan|fmail.co|mailbolt|postpro|mailhaven|ec.rr|bobmail|t-email|xmsnet|ownmail|land|airpost|ghostmail|justemail|fastem|net2000|dsl.pipex|insight.rr|shitmail|rushpost|consolidated|compuserve|spaml|mail2world|freeler|hawaiiantel|front|pochta|naseej|doctor|mailforce|kabelfoon|nospammail|allmail|ns.sympatico|myfastmail|devnullmail|mail.telepac|xsmail|mailc|newmail|yepmail|mailworks|dslextreme|sprynet|letterboxes|petml|proinbox|123mail|portugalmail|speedpost|fast-email|spamex|mailservice|fsmail|emailplus|sci|150mail|mailmight|swift-mail|mailas|the-fastest|50mail|fastest|infinito|inoutbox|musician|imap-mail|students.fhu|hailmail|fastmailbox|fakeinbox|internet-mail|mailnator|reallyfast|mailup|promessage|fast-mail|2-mail|fmgirl|love|telecable|internetmailing|myway|firemail|bak.rr|h-mail|mail-central|emailengine|box|imapmail|mymacmail|internet-e-mail|4email|fastimap|ttmail|eresmas|yetnet|bigfoot|technologist|ma|mailite|speedymail|postinbox|mailandftp|fastemailer|epix|emailcorner|fmailbox|150ml|internetemails|mailnew|veryfast|fastemail|superonline|fastmessaging|bendbroadband|erols|jetemail|ebnett|mailftp|mailnull|innocent|bcpl|bestmail|emailgroups|mail-page|theinternetemail|execs|mailsent|cluemail|airmail|mailbox|byteme|vikenfiber|spambog|ssl-mail|realemail|emailuser|zippymail|shinternet|lavabit|discardmail|mail.net|fmguy|the-quickest|inorbit|mixmail|hot.rr|lawyer|jippii|freestart|homemail|mailingaddress|latinmail|veryspeedy|voo|euronet|adelphia|grandecom|sprintmail|citlink|nowmymail|frisurf|optushome.com|qwestoffice|internet|osite.com|comic|eyou|wideopenwest|seanet|journalist|earthling|xoom|fromru|pipeline|nb.sympatico|bright|hol|mailcity|interfree|cyberdude|redseven|tempinbox|sneakemail|ath.forthnet|hispavista|artlover|mailbox.co|no-spam|uni|mindless|computermail|gt.rr|insightbb|ureach|starpower|aeiou|techemail|name|wow|apollo|ragingbull|dublin|email.wsu|wo.com|kittymail|bolt|catlover|nycmail|financier|uymail|aliceposta|hulapla|onebox|cutey|icqmail|australiamail|unforgettable|stu.owensboro.kyschools|bikerider|posteo.co|in|dc.rr|guerrillamailblock|poste|o2.co|sanook|s0ny|mail333|meltmail|attglobal|games|geocities|yours|netmadeira|integra|freeuk|advalvas|diplomats|gishpuppy|swva|0815|au|graffiti|outgun|priest|hot-shot|chemist|dplanet|infovia.com|coxinet|e-mail|cgac|forthnet|okbank|itelefonica.com|zmail|ovi|4x4man|cable.net|money|gardener|incognitomail|37|postmaster.co|prontomail|firehost|sp|oddpost|dcemail|www|publicist|thisisnotmyrealemail|inmail|luxsci|mailme|mail15|mighty.co|chez|bikemechanics|doglover|mail.zp|x5g|africamail|kaixo|mailinator2|softhome|clerk|sendme|truemail.co|5iron|onewaymail|alibaba|rock|munich|music|clubducati|2die4|qwest|cybergal|counsellor|usermail|dontsendmespam|whoever|uk8|representative|argentina|poetic|slingshot|starmedia|popstar|bestweb|ravemail|winning|tvcablenet|scientist|monemail.fr|vnn|idirect|insurer|usit|guy2|presidency|geologist|uk2k|zipmail|boltonfans|uk7|gportal|webmails|repairman|covad|filzmail|uku.co|whatever|ausi|ananzi.co|concentric|netian|housemail|doramail|ukcool|citiz|upf|oceanfree|go|liverpoolfans|bigblue.net|webmail|spamherelots|gala|mailpride|nyc|csi|mac.hush|dbzmail|lagerlouts|cliffhanger|visitweb|1mum|freegates|witty|c3|supereva|metalfan|barcelona|emailaccount|thedoghousemail|club4x4|primposta|teewars|aknet|coolkiwi|us.army|archaeologist|f1fans|dca|postmail|mail.austria|samerica|cd2|netpiper|classicmail.co|columnist|qprfans|1me|mbox.com|bellatlantic|mail2one|enter|uno|clubalfa|333|rr|care2|clubhonda|callnetuk|deliveryman|space|la|hotbot|dog|hairdresser|bradfordfans|sify|netcom|email2me|jubiimail|mailpanda|maffia|fastermail|studiocom|hockeymail|guy|onmilwaukee|keromail|clubbers|edge|madrid|mail-temporaire|mail2dad|singmail|e-apollo|tempemail|umpire|posteo.com|rrohio|scottishmail.co|breathe|eastcoast.co|canada|ygm|oninet|inicia|rescueteam|vipmail|mail2uk|backpackers|peru|pro|registerednurses|sociologist|mail2007|wooow|temporaryinbox|fan|discofan|swirve|loveable|highveldmail.co|mail2alexa|10minutemail|thaimail|stealthmail|sanfranmail|mail2actor|gtmc|indiatimes|crosslink|croeso|16mail|mail2queen|magicmail.co|mauritius|access4less|myspace)\\b",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"\/en-US"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"snowplow.loaded"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^(\/(ja|fr|de|es|ru|cn|ko|nl|pl|cs|fi|hu|it|br|ro))?(\/pricing)$",
      "ignore_case":true
    }],
  "rules":[
    [["if",2],["unless",0,1],["add",1,6,11,12,13,14,15,16,17,18,27,28,29,34,35,37,38,39,40,0]],
    [["if",4],["unless",1,10],["add",2,9,17,31],["block",3,5,11,19,21,22,26,36,0]],
    [["if",11,12,13],["add",3,5,11,17,21,26,30,36,0]],
    [["if",4,10],["add",4,8,11,17,21,25,32,36,41,42]],
    [["if",4,17],["add",7,10,11,17,21,32,33,36]],
    [["if",4,18],["add",19]],
    [["if",4,19],["add",20]],
    [["if",4,20],["add",21,32]],
    [["if",12,13,21],["add",22,26,0]],
    [["if",2],["unless",22],["add",23,24]],
    [["if",13,23,24],["add",26,0]],
    [["if",12,13,25],["add",26,0]],
    [["if",4,24,27],["add",43]],
    [["if",3,4],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,5],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,6],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,7],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,8],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,9],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,14],["block",4,8,11,17,19,20,21,22,25,26,27,32,34,35,36,39,41,42,0]],
    [["if",4,15],["block",4,8,11,17,19,20,21,22,25,26,27,32,34,35,36,39,41,42,0]],
    [["if",4,16],["block",4,8,11,17,19,20,21,22,25,26,27,32,34,35,36,39,41,42,0]],
    [["if",9,26],["block",27]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi","__twitter_website_tag"]}

};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var la={a:!0},ma={};try{ma.__proto__=la;ja=ma.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=ia,oa=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Yi=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.g=a;this.s=b};var ta=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ua=function(){this.B={};this.F=!1;this.N={}},va=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ua.prototype.get=function(a){return this.B["dust."+a]};ua.prototype.set=function(a,b){this.F||(a="dust."+a,this.N.hasOwnProperty(a)||(this.B[a]=b))};
ua.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var wa=function(a,b){b="dust."+b;a.F||a.N.hasOwnProperty(b)||delete a.B[b]};ua.prototype.ib=function(){this.F=!0};var n=function(a){this.s=new ua;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ta(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};k=n.prototype;k.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof n?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
k.set=function(a,b){if(!this.B)if("length"===a){if(!ta(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else ta(a)?this.g[Number(a)]=b:this.s.set(a,b)};k.get=function(a){return"length"===a?this.length():ta(a)?this.g[Number(a)]:this.s.get(a)};k.length=function(){return this.g.length};k.hb=function(){for(var a=va(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new n(a)};var xa=function(a,b){ta(b)?delete a.g[Number(b)]:wa(a.s,b)};k=n.prototype;
k.pop=function(){return this.g.pop()};k.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};k.shift=function(){return this.g.shift()};k.splice=function(a,b,c){return new n(this.g.splice.apply(this.g,arguments))};k.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};k.has=function(a){return ta(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};k.ib=function(){this.B=!0;Object.freeze(this.g);this.s.ib()};var za=function(){function a(f,g){if(b[f]){if(b[f].$c+g>b[f].max)throw Error("Quota exceeded");b[f].$c+=g}}var b={},c=void 0,d=void 0,e={ji:function(f){c=f},Vf:function(){c&&a(c,1)},li:function(f){d=f},jb:function(f){d&&a(d,f)},Ci:function(f,g){b[f]=b[f]||{$c:0};b[f].max=g},Qh:function(f){return b[f]&&b[f].$c||0},reset:function(){b={}},Eh:a};e.onFnConsume=e.ji;e.consumeFn=e.Vf;e.onStorageConsume=e.li;e.consumeStorage=e.jb;e.setMax=e.Ci;e.getConsumed=e.Qh;e.reset=e.reset;e.consume=e.Eh;return e};var Aa=function(a,b){this.B=a;this.P=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new ua;this.g=this.N=void 0};Aa.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.s.F)if(a.B.jb(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.N["dust."+b]=!0}else a.s.set(b,c)};
Aa.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.jb(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};Aa.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};Aa.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Da=function(a){var b=new Aa(a.B,a);a.N&&(b.N=a.N);b.P=a.P;b.g=a.g;return b};var Ea={},Fa=function(a,b){Ea[a]=Ea[a]||[];Ea[a][b]=!0},Ga=function(a){for(var b=[],c=Ea[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ja=function(){},Ka=function(a){return"function"==typeof a},A=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Ma=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Fa("TAGGING",4):Fa("TAGGING",5);return b},Na=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pa=function(a,b){if(a&&Ma(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Qa=function(a,b){if(!La(a)||!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Va=function(a,b){for(var c=new Ua,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Xa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ya=
function(a){return Math.round(Number(a))||0},Za=function(a){return"false"==String(a).toLowerCase()?!1:!!a},$a=function(a){var b=[];if(Ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},cb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},db=function(){return(new Date).getTime()},Ua=function(){this.prefix="gtm.";this.values={}};Ua.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ua.prototype.get=function(a){return this.values[this.prefix+a]};
var eb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},fb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},gb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},ib=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},jb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},kb=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Na(b,d))return}return d},lb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},mb=/^\w{1,9}$/,nb=function(a){var b=[];Wa(a,function(c,d){mb.test(c)&&d&&b.push(c)});return b.join(",")};var pb=function(a,b){ua.call(this);this.P=a;this.Fa=b};oa(pb,ua);pb.prototype.toString=function(){return this.P};pb.prototype.hb=function(){return new n(va(this,1))};pb.prototype.g=function(a,b){a.B.Vf();return this.Fa.apply(new qb(this,a),Array.prototype.slice.call(arguments,1))};pb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var sb=function(a,b){for(var c,d=0;d<b.length&&!(c=rb(a,b[d]),c instanceof ra);d++);return c},rb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof pb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.N;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},qb=function(a,b){this.s=a;this.g=b},G=function(a,b){var c=a.g;return Ma(b)?rb(c,b):b},H=function(a){return a.s.P};var tb=function(){ua.call(this)};oa(tb,ua);tb.prototype.hb=function(){return new n(va(this,1))};var vb={control:function(a,b){return new ra(a,G(this,b))},fn:function(a,b,c){var d=this.g,e=G(this,b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.jb(a.length+f.length);return new pb(a,function(){return function(g){var h=Da(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=G(this,l[m]),l[m]instanceof ra)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new n(l));var r=sb(h,f);if(r instanceof ra)return"return"===r.g?r.s:r}}())},list:function(a){var b=this.g.B;b.jb(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=G(this,arguments[d]);"string"===typeof e&&b.jb(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new tb,d=0;d<arguments.length-1;d+=2){var e=G(this,arguments[d])+"",f=G(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.jb(g);c.set(e,f)}return c},undefined:function(){}};var wb=function(){this.B=za();this.g=new Aa(this.B)},xb=function(a,b,c){var d=new pb(b,c);d.ib();a.g.set(b,d)};wb.prototype.dd=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};wb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=rb(this.g,arguments[c]);return b};wb.prototype.F=function(a,b){var c=Da(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=rb(c,arguments[e]);return d};var yb=function(a){if(a instanceof yb)return a;this.La=a};yb.prototype.toString=function(){return String(this.La)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Bb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Cb=function(a){if(null==a)return String(a);var b=Bb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Db=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Eb=function(a){if(!a||"object"!=Cb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Db(a,"constructor")&&!Db(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Db(a,b)},J=function(a,b){var c=b||("array"==Cb(a)?[]:{}),d;for(d in a)if(Db(a,d)){var e=a[d];"array"==Cb(e)?("array"!=Cb(c[d])&&(c[d]=[]),c[d]=J(e,c[d])):Eb(e)?(Eb(c[d])||(c[d]={}),c[d]=J(e,c[d])):c[d]=e}return c};var Gb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=va(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Na(d,h);if(-1<l)return e[l];if(h instanceof n){var m=[];d.push(h);e.push(m);for(var p=h.hb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof tb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof pb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Fb(u[v],b,!!c);var x=b?b.B:za(),z=new Aa(x);
b&&(z.g=b.g);return g(h.g.apply(h,[z].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Fb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Na(d,
h);if(-1<l)return e[l];if(Ma(h)||Xa(h)){var m=new n([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Eb(h)){var q=new tb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new pb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Gb(G(this,v[x]),b,!!c);return g((0,this.g.P)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Hb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Ib=function(a){if(void 0===a||Ma(a)||Eb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Jb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Hb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Hb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Kb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Lb=new ra("break"),Mb=new ra("continue"),Nb=function(a,b){return G(this,a)+G(this,b)},Ob=function(a,b){return G(this,a)&&G(this,b)},Pb=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Na(Kb,b)){var d=Gb(c);return Fb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof n){if(a.has(b)){var e=a.get(b);if(e instanceof pb){var f=Hb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Na(Jb.supportedMethods,b)){var g=
Hb(c);g.unshift(this.g);return Jb[b].apply(a,g)}}if(a instanceof pb||a instanceof tb){if(a.has(b)){var h=a.get(b);if(h instanceof pb){var l=Hb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof pb?a.P:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Hb(c))}if(a instanceof yb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Qb=function(a,b){a=G(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=G(this,b);c.set(a,d);return d},Tb=function(a){var b=Da(this.g),c=sb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Ub=function(){return Lb},Vb=function(a){for(var b=G(this,a),c=0;c<b.length;c++){var d=G(this,b[c]);if(d instanceof ra)return d}},Wb=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=G(this,arguments[c+1]);Ba(b,d,e,!0)}}},Xb=function(){return Mb},Yb=function(a,b,c){var d=new n;b=G(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,G(this,f))},Zb=function(a,b){return G(this,a)/G(this,b)},$b=function(a,b){a=G(this,a);b=G(this,b);var c=a instanceof yb,d=b instanceof yb;return c||d?c&&d?a.La==b.La:!1:a==b},ac=function(a){for(var b,c=0;c<arguments.length;c++)b=
G(this,arguments[c]);return b};function bc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=sb(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function cc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(f){return f},c);if(b instanceof tb||b instanceof n||b instanceof pb){var d=b.hb(),e=d.length();return bc(a,function(){return e},function(f){return d.get(f)},c)}}
var dc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return cc(function(e){d.set(a,e);return d},b,c)},ec=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return cc(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},fc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return cc(function(e){var f=Da(d);f.add(a,e);return f},b,c)},hc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gc(function(e){d.set(a,e);return d},b,c)},ic=
function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gc(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},jc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gc(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function gc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof n)return bc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var kc=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=G(this,a);if(!(f instanceof n))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=G(this,d);var h=Da(g);for(e(g,h);rb(h,b);){var l=sb(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Da(g);e(h,m);rb(m,c);h=m}},lc=function(a){a=G(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},mc=function(a,b){var c;a=G(this,a);b=G(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof tb||a instanceof n||a instanceof pb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:ta(b)&&(c=a[b]);else if(a instanceof yb)return;return c},nc=function(a,b){return G(this,a)>G(this,
b)},oc=function(a,b){return G(this,a)>=G(this,b)},pc=function(a,b){a=G(this,a);b=G(this,b);a instanceof yb&&(a=a.La);b instanceof yb&&(b=b.La);return a===b},qc=function(a,b){return!pc.call(this,a,b)},rc=function(a,b,c){var d=[];G(this,a)?d=G(this,b):c&&(d=G(this,c));var e=sb(this.g,d);if(e instanceof ra)return e},sc=function(a,b){return G(this,a)<G(this,b)},tc=function(a,b){return G(this,a)<=G(this,b)},uc=function(a,b){return G(this,a)%G(this,b)},vc=function(a,b){return G(this,a)*G(this,b)},wc=function(a){return-G(this,
a)},Ac=function(a){return!G(this,a)},Bc=function(a,b){return!$b.call(this,a,b)},Cc=function(){return null},Dc=function(a,b){return G(this,a)||G(this,b)},Ec=function(a,b){var c=G(this,a);G(this,b);return c},Fc=function(a){return G(this,a)},Gc=function(a){return Array.prototype.slice.apply(arguments)},Hc=function(a){return new ra("return",G(this,a))},Ic=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
pb||a instanceof n||a instanceof tb)&&a.set(b,c);return c},Lc=function(a,b){return G(this,a)-G(this,b)},Mc=function(a,b,c){a=G(this,a);var d=G(this,b),e=G(this,c);if(!Ma(d)||!Ma(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===G(this,d[h]))if(f=G(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=G(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Nc=function(a,b,c){return G(this,a)?G(this,b):G(this,c)},Oc=function(a){a=G(this,a);return a instanceof pb?"function":typeof a},Pc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Qc=function(a,b,c,d){var e=G(this,d);if(G(this,c)){var f=sb(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;G(this,a);){var g=sb(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}G(this,
b)}},Rc=function(a){return~Number(G(this,a))},Sc=function(a,b){return Number(G(this,a))<<Number(G(this,b))},Tc=function(a,b){return Number(G(this,a))>>Number(G(this,b))},Uc=function(a,b){return Number(G(this,a))>>>Number(G(this,b))},Vc=function(a,b){return Number(G(this,a))&Number(G(this,b))},Wc=function(a,b){return Number(G(this,a))^Number(G(this,b))},Xc=function(a,b){return Number(G(this,a))|Number(G(this,b))};var Zc=function(){this.g=new wb;Yc(this)};Zc.prototype.dd=function(a){return $c(this.g.s(a))};
var bd=function(a,b){return $c(ad.g.F(a,b))},Yc=function(a){var b=function(d,e){var f=a.g,g=String(e);vb.hasOwnProperty(d)&&xb(f,g||d,vb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){xb(a.g,String(d),e)};c(0,Nb);c(1,Ob);c(2,Pb);c(3,Qb);c(53,Tb);c(4,Ub);c(5,Vb);c(52,Wb);c(6,Xb);c(9,Vb);c(50,Yb);c(10,Zb);c(12,$b);c(13,ac);c(47,dc);c(54,ec);c(55,fc);c(63,kc);c(64,hc);c(65,ic);c(66,jc);c(15,lc);c(16,mc);c(17,mc);c(18,nc);c(19,oc);c(20,pc);c(21,qc);c(22,rc);
c(23,sc);c(24,tc);c(25,uc);c(26,vc);c(27,wc);c(28,Ac);c(29,Bc);c(45,Cc);c(30,Dc);c(32,Ec);c(33,Ec);c(34,Fc);c(35,Fc);c(46,Gc);c(36,Hc);c(43,Ic);c(37,Lc);c(38,Mc);c(39,Nc);c(40,Oc);c(41,Pc);c(42,Qc);c(58,Rc);c(57,Sc);c(60,Tc);c(61,Uc);c(56,Vc);c(62,Wc);c(59,Xc)},dd=function(){var a=ad,b=cd();xb(a.g,"require",b)},ed=function(a,b){a.g.g.P=b};
function $c(a){if(a instanceof ra||a instanceof pb||a instanceof n||a instanceof tb||a instanceof yb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var fd=function(){var a=function(b){return{toString:function(){return b}}};return{Bg:a("consent"),td:a("consent_always_fire"),Ve:a("convert_case_to"),We:a("convert_false_to"),Xe:a("convert_null_to"),Ye:a("convert_true_to"),Ze:a("convert_undefined_to"),Ki:a("debug_mode_metadata"),fb:a("function"),kh:a("instance_name"),mh:a("live_only"),nh:a("malware_disabled"),oh:a("metadata"),Ni:a("original_activity_id"),Oi:a("original_vendor_template_id"),qh:a("once_per_event"),Df:a("once_per_load"),Qi:a("priority_override"),
Ri:a("respected_consent_types"),Kf:a("setup_tags"),Mf:a("tag_id"),Nf:a("teardown_tags")}}();
var gd=[],hd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},id=function(a){return hd[a]},jd=/[\x00\x22\x26\x27\x3c\x3e]/g;var sd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,td={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},ud=function(a){return td[a]};
gd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(sd,ud)+"'"}};var Ad=/['()]/g,Bd=function(a){return"%"+a.charCodeAt(0).toString(16)};gd[12]=function(a){var b=
encodeURIComponent(String(a));Ad.lastIndex=0;return Ad.test(b)?b.replace(Ad,Bd):b};var Cd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Dd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ed=function(a){return Dd[a]};gd[16]=function(a){return a};var Gd;
var Hd=[],Id=[],Jd=[],Kd=[],Ld=[],Md={},Nd,Od,Pd,Qd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Rd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Md[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Tf&&b.Tf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===fd.td.toString()&&a[f]){}d&&b&&b.Sf&&(e.vtp_gtmCachedValues=b.Sf);return void 0!==d?d(e):Gd(c,e,b)},Td=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Sd(a[e],b,c));return d},Sd=function(a,b,c){if(Ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Sd(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Hd[f];if(!g||b.xe(g))return;c[f]=!0;try{var h=Td(g,b,c);h.vtp_gtmEventId=b.id;d=Rd(h,b);Pd&&(d=Pd.Fh(d,h))}catch(z){b.gg&&b.gg(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Sd(a[l],b,c)]=Sd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=Sd(a[p],b,c);Od&&(m=m||q===Od.Rc);d.push(q)}return Od&&m?Od.Ih(d):d.join("");case "escape":d=Sd(a[1],b,c);if(Od&&Ma(a[1])&&"macro"===a[1][0]&&Od.Yh(a))return Od.oi(d);d=
String(d);for(var r=2;r<a.length;r++)gd[a[r]]&&(d=gd[a[r]](d));return d;case "tag":var t=a[1];if(!Kd[t])throw Error("Unable to resolve tag reference "+t+".");return d={ag:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ud(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ud=function(a,b,c){try{return Nd(Td(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Vd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};oa(Vd,Error);function Wd(a,b){if(Ma(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Wd(a[c],b[c])}};var Xd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};oa(Xd,Error);var fe=function(){return function(a,b){a instanceof Xd||(a=new Xd(a,ee));b&&a.g.push(b);throw a;}};function ee(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ie=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=ge(a),f=0;f<Id.length;f++){var g=Id[f],h=he(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Kd.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},he=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},ge=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ud(Jd[c],a));return b[c]}};var je={Fh:function(a,b){b[fd.Ve]&&"string"===typeof a&&(a=1==b[fd.Ve]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(fd.Xe)&&null===a&&(a=b[fd.Xe]);b.hasOwnProperty(fd.Ze)&&void 0===a&&(a=b[fd.Ze]);b.hasOwnProperty(fd.Ye)&&!0===a&&(a=b[fd.Ye]);b.hasOwnProperty(fd.We)&&!1===a&&(a=b[fd.We]);return a}};var ke=function(){this.g={}};function le(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Vd(c,d,g);}}function me(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));le(e,b,d,g);le(f,b,d,g)}}}};var qe=function(a){var b=ne.L,c=this;this.s=new ke;this.g={};var d={},e=me(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Wa(a,function(f,g){var h={};Wa(g,function(l,m){var p=oe(l,m);h[l]=p.assert;d[l]||(d[l]=p.T)});c.g[f]=function(l,m){var p=h[l];if(!p)throw pe(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},se=function(a){return re.g[a]||
function(){}};function oe(a,b){var c=Qd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=pe;try{return Rd(c)}catch(d){return{assert:function(e){throw new Vd(e,{},"Permission "+e+" is unknown.");},T:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function pe(a,b,c){return new Vd(a,b,c)};var te=!1;var ue={};ue.Ji=Za('false');ue.Lh=Za('true');var ve=te,we=ue.Lh,xe=ue.Ji;
var Me=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ne=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Me(b,"/*")&&(b=b.slice(0,-2));Me(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Oe=/^[a-z0-9-]+$/i,Pe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Re=function(a,b){var c;if(!(c=!Qe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Oe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Pe.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var t=l.hostname,u=q;if(0!==u.indexOf("*."))r=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());r=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(r){var x=p.slice(p.indexOf("/"));h=Ne(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Qe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Se=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Te={Fn:"function",DustMap:"Object",List:"Array"},K=function(a,b,c){for(var d=0;d<b.length;d++){var e=Se.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof pb?p="Fn":l instanceof n?p="List":l instanceof tb?p="DustMap":
l instanceof yb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Te[h]||h)+".");}}};function Ue(a){if(a instanceof tb)return a.toString();if(a instanceof n)return"["+a.toString()+"]";if(a instanceof pb)return a.toString()+"()";if(A(a))return'"'+a+'"';return""+a}
function Ve(a,b){var c=[];var d=[],e=[],f=function(){return 0===e.length?"":"Property "+e.join(".")+": "},g=function(h,l){if(0<=d.indexOf(l))c.push(f()+"Expected value contained a cycle.");else if(h!==l)if(l instanceof n)if(h instanceof n)if(h.length()!==l.length())c.push(f()+"Expected array to contain "+l.length()+" item(s), actually "+h.length()+".");else for(var m=0;m<l.length();m++)e.push(m),d.push(l),g(h.get(m),l.get(m)),d.pop(),e.pop();else c.push(f()+"Expected to be an array, actually "+
Ue(h)+".");else if(l instanceof tb)if(h instanceof tb){for(var p=va(h,1),q={},r=0;r<p.length;r++)q[p[r]]=!0;for(var t=va(l,1),u=[],v=0;v<t.length;v++){var x=t[v];q[x]?(u.push(x),q[x]=!1):c.push(f()+'Expected property "'+x+'" was not found in actual.')}for(var z=0;z<p.length;z++)q[p[z]]&&c.push(f()+'Unexpected property "'+p[z]+'" found in actual.');for(var w=0;w<u.length;w++){var y=u[w];e.push(y);d.push(l);g(h.get(y),l.get(y));d.pop();e.pop()}}else c.push(f()+"Expected to be an object, actually "+
Ue(h)+".");else c.push(f()+"Expected "+Ue(l)+", actually "+Ue(h)+".")};g(a,b);return c};var We=function(a,b){var c=new pb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=G(this,d[e]);var f=this.g.g;f&&f.sa&&(f.sa.$b[a]=f.sa.$b[a]||[],f.sa.$b[a].push(d));return b.apply(this,d)});c.ib();return c},Xe=function(a,b){var c=new tb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ka(e)?c.set(d,We(a+"_"+d,e)):(La(e)||A(e)||"boolean"==typeof e)&&c.set(d,e)}c.ib();return c};var Ye=function(a,b){K(H(this),["apiName:!string","message:?string"],arguments);var c={},d=new tb;return d=Xe("AssertApiSubject",c)};var Ze=function(a,b){K(H(this),["actual:?*","message:?string"],arguments);var c={},d=new tb;
return d=Xe("AssertThatSubject",c)};function $e(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Gb(arguments[d],c));return Fb(a.apply(null,b))}}var bf=function(){for(var a=Math,b=af,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=$e(a[e].bind(a)))}return c};var cf=function(a){var b;return b};var df=function(a){var b;return b};var ef=function(a){K(H(this),["uri:!string"],arguments);return encodeURI(a)};var hf=function(a){K(H(this),["uri:!string"],arguments);return encodeURIComponent(a)};var jf=function(a){K(H(this),["message:?string"],arguments);};var kf=function(a,b){K(H(this),["min:!number","max:!number"],arguments);return Qa(a,b)};var lf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.Ah.apply(null,Array.prototype.slice.call(arguments,1))};var mf=function(){lf(this,"read_container_data");var a=new tb;a.set("containerId",'GTM-PJ8M5SK');a.set("version",'54');a.set("environmentName",'Production');a.set("debugMode",ve);a.set("previewMode",xe);a.set("environmentMode",we);a.ib();return a};var nf=function(){return(new Date).getTime()};var of=function(a){if(null===a)return"null";if(a instanceof n)return"array";if(a instanceof pb)return"function";if(a instanceof yb){a=a.La;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var pf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(ve||xe)&&a.call(this,e.message)}}}return{parse:b(function(c){return Fb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Gb(c))})}};var qf=function(a){return Ya(Gb(a,this.g))};var rf=function(a){return Number(Gb(a,this.g))};var sf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var tf=function(a,b,c){var d=null,e=!1;K(H(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new tb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof tb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var af="floor ceil round max min abs pow sqrt".split(" ");var uf=function(){var a={};return{Rh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Di:function(b,c){a[b]=c},reset:function(){a={}}}},vf=function(a,b){K(H(this),["apiName:!string","mock:?*"],arguments);};var wf={};
wf.keys=function(a){return new n};
wf.values=function(a){return new n};
wf.entries=function(a){return new n};wf.freeze=function(a){return a};var yf=function(){this.g={};this.s={};};yf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;c=zf(a,b)||c;return c};
yf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ka(b)?We(a,b):Xe(a,b)};
var Af=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ka(c)?We(b,c):Xe(b,c)};function zf(a,b){var c=void 0;var d=b.g.g;d&&d.sa&&(c=d.sa.Ae.Rh(a));return c};function Bf(){var a={};return a};var M={Ub:"_ee",Wc:"_syn_or_mod",Si:"_uei",Sd:"_eu",Pi:"_pci",Jd:"event_callback",Gc:"event_timeout",wa:"gtag.config",Ha:"gtag.get",ja:"purchase",ub:"refund",Ya:"begin_checkout",sb:"add_to_cart",tb:"remove_from_cart",Kg:"view_cart",cf:"add_to_wishlist",Ga:"view_item",bf:"view_promotion",af:"select_promotion",wd:"select_item",Bc:"view_item_list",$e:"add_payment_info",Jg:"add_shipping_info",Ta:"value_key",Sa:"value_callback",xa:"allow_ad_personalization_signals",Rb:"restricted_data_processing",Nb:"allow_google_signals",
Aa:"cookie_expires",Ob:"cookie_update",Tb:"session_duration",Kc:"session_engaged_time",Ka:"user_properties",la:"transport_url",R:"ads_data_redaction",Ab:"user_data",Pb:"first_party_collection",D:"ad_storage",H:"analytics_storage",ud:"region",Ue:"wait_for_update",za:"conversion_linker",ya:"conversion_cookie_prefix",ba:"value",aa:"currency",xf:"trip_type",X:"items",qf:"passengers",xd:"allow_custom_scripts",zb:"session_id",vf:"quantity",eb:"transaction_id",ab:"language",Fc:"country"};M.Af=[M.ja,M.ub,M.Ya,M.sb,M.tb,M.Kg,M.cf,M.Ga,M.bf,M.af,M.Bc,M.wd,M.$e,M.Jg];M.zf=[M.xa,M.Nb,M.Ob];M.Bf=[M.Aa,M.Gc,M.Tb,M.Kc];var Df=function(a){Fa("GTM",a)};var Ef=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Ff=new Ef(1936,!0),Gf=new Ef(1933),Hf=new Ef(373442741);var If,Jf=function(){if(void 0===If){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}If=a}else If=a}return If};var Lf=function(a,b){this.g=b===Kf?a:""};Lf.prototype.toString=function(){return this.g+""};var Kf={},Mf=function(a){var b=Jf(),c=b?b.createScriptURL(a):a;return new Lf(c,Kf)};var Nf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Of;a:{var Pf=pa.navigator;if(Pf){var Qf=Pf.userAgent;if(Qf){Of=Qf;break a}}Of=""}var Rf=function(a){return-1!=Of.indexOf(a)};var Tf=function(a,b,c){this.g=c===Sf?a:""};Tf.prototype.toString=function(){return this.g.toString()};var Uf=function(a){return a instanceof Tf&&a.constructor===Tf?a.g:"type_error:SafeHtml"},Sf={},Vf=function(a){var b=Jf(),c=b?b.createHTML(a):a;return new Tf(c,null,Sf)},Wf=new Tf(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Sf);var Xf=function(a,b){a.src=b instanceof Lf&&b.constructor===Lf?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Yf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Zf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var $f=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Uf(Wf);return!c.parentElement}),ag=function(a,b){if($f())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Uf(b)};var F=window,N=document,bg=navigator,cg=N.currentScript&&N.currentScript.src,dg=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},eg=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},fg=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},gg={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},hg=function(a,b,c,d){var e=N.createElement("script");
d&&Wa(d,function(f,g){f=f.toLowerCase();gg.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Xf(e,Mf(a));fg(e,b);c&&(e.onerror=c);eg(e);return e},ig=function(){if(cg){var a=cg.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},jg=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=N.body&&N.body.lastChild||N.body||N.head;d.parentNode.insertBefore(c,
d);fg(c,b);void 0!==a&&(c.src=a);return c},kg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},lg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},mg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){F.setTimeout(a,0)},ng=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},og=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},pg=function(a){var b=N.createElement("div"),c=Vf("A<div>"+a+"</div>");ag(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},qg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
rg=function(a){bg.sendBeacon&&bg.sendBeacon(a)||kg(a)},sg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var tg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Gf.g]=!0}};tg.g=void 0;tg.s=function(){return tg.g?tg.g:tg.g=new tg};var ug=function(a){return tg.s().g(a.g,a.defaultValue)};var vg=[];function wg(){var a=dg("google_tag_data",{});a.ics||(a.ics={entries:{},set:xg,update:yg,addListener:zg,notifyListeners:Ag,active:!1,usedDefault:!1});return a.ics}
function xg(a,b,c,d,e,f){var g=wg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&A(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&F.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Bg(a),Ag(),Fa("TAGGING",2))},f)}}}
function yg(a,b){var c=wg();c.active=!0;if(void 0!=b){var d=Cg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Cg(a);f.quiet?(f.quiet=!1,Bg(a)):g!==d&&Bg(a)}}function zg(a,b){vg.push({ie:a,Nh:b})}function Bg(a){for(var b=0;b<vg.length;++b){var c=vg[b];Ma(c.ie)&&-1!==c.ie.indexOf(a)&&(c.ig=!0)}}function Ag(a){for(var b=0;b<vg.length;++b){var c=vg[b];if(c.ig){c.ig=!1;try{c.Nh({Dh:a})}catch(d){}}}}
var Cg=function(a){var b=wg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Dg=function(a){return(wg().entries[a]||{}).initial},Eg=function(a){return!(wg().entries[a]||{}).quiet},Fg=function(){return ug(Gf)?wg().active:!1},Gg=function(){return wg().usedDefault},Hg=function(a,b){wg().addListener(a,b)},Ig=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Eg(b[e]))return!0;return!1}if(c()){var d=!1;Hg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Jg=function(a,b){function c(){for(var f=
[],g=0;g<d.length;g++){var h=d[g];!1===Cg(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=A(b)?[b]:b,e={};c().length!==d.length&&Hg(d,function(f){var g=c();0<g.length&&(f.ie=g,a(f))})};function Kg(a){for(var b=[],c=0;c<Lg.length;c++){var d=a(Lg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Lg=[M.D,M.H],Og=function(a){var b=a[M.ud];b&&Df(40);var c=a[M.Ue];c&&Df(41);for(var d=Ma(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==M.ud&&f!==M.Ue)if(-1<Na(Lg,f)){var g=f,h=a[f],l=d[e];wg().set(g,h,l,"DE","DE-HE",c)}else{var m=f,p=a[f],q=d[e];wg().set(m,p,q,"DE","DE-HE",c);}},Pg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Na(Lg,c)){var d=c,e=a[c];wg().update(d,e)}else{var f=c,g=a[c];wg().update(f,g);}wg().notifyListeners(b)},Qg=function(a){var b=Cg(a);return void 0!=b?b:!0},Rg=function(){return"G1"+Kg(Cg)},Sg=function(a,b){Hg(a,b)},Tg=function(a,b){Jg(a,b)},Ug=function(a,b){Ig(a,b)};var Wg=function(a){return Vg?N.querySelectorAll(a):null},Xg=function(a,b){if(!Vg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!N.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Yg=!1;if(N.querySelectorAll)try{var Zg=N.querySelectorAll(":root");Zg&&1==Zg.length&&Zg[0]==N.documentElement&&(Yg=!0)}catch(a){}var Vg=Yg;var $g=function(a){if(N.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};var ih=/:[0-9]+$/,jh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},mh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=kh(a.protocol)||kh(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(ih,"").toLowerCase());return lh(a,b,c,d,e)},lh=function(a,b,c,d,e){var f,g=kh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=nh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(ih,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Fa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Na(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=jh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},kh=function(a){return a?a.replace(":",
"").toLowerCase():""},nh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},oh=function(a){var b=N.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Fa("TAGGING",1),c="/"+c);var d=b.hostname.replace(ih,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},ph=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=oh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var qh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),rh=new RegExp(/@(gmail|googlemail)\./i),sh=new RegExp(/support|noreply/i),th="SCRIPT STYLE IMG SVG PATH BR".split(" "),uh=["BR"];function vh(a){var b;if(a===N.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=vh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function wh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function xh(a){if(0==a.length)return null;var b;b=wh(a,function(c){return!sh.test(c.va)});b=wh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=wh(b,function(c){return!$g(c.element)});return b[0]}
var yh=function(){var a;var b=[],c=N.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=th.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=uh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],q=0;q<m.length;q++){var r=m[q],t=r.textContent;r.value&&(t=r.value);if(t){var u=t.match(qh);if(u){var v=
u[0],x;if(F.location){var z=lh(F.location,"host",!0);x=0<=v.toLowerCase().indexOf(z)}else x=!1;x||p.push({element:r,va:v})}}}var w=xh(p),y=[];if(w){var B=w.element,C={va:w.va,tagName:B.tagName,type:1};C.querySelector=vh(B);C.isVisible=!$g(B);y.push(C)}return{elements:y,status:10<p.length?"3":l.status}},zh=function(a){return a.tagName+":"+a.isVisible+":"+a.va.length+":"+rh.test(a.va)};var ne={},Sh=null,Th=Math.random();ne.L="GTM-PJ8M5SK";ne.Vc="621";ne.Mi="";ne.Dg="ChAI8Kr8hQYQ5MDT5IvPlZ51EiQAMzmSDVeSEgk0zsP+3tNDhfASxOd1rM8Wgs4j6pNewTUls5gaArse";var Uh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Vh={__paused:!0,__tg:!0},Wh;for(Wh in Uh)Uh.hasOwnProperty(Wh)&&(Vh[Wh]=!0);var Xh="www.googletagmanager.com/gtm.js";
var Yh=Xh,Zh=Za(""),$h=null,ai=null,bi="https://www.googletagmanager.com/a?id="+ne.L+"&cv=54",ci={},di={},ei=function(){var a=Sh.sequence||1;Sh.sequence=a+1;return a};ne.Cg="";var fi={},gi=new Ua,hi={},ii={},li={name:"dataLayer",set:function(a,b){J(lb(a,b),hi);ji()},get:function(a){return ki(a,2)},reset:function(){gi=new Ua;hi={};ji()}},ki=function(a,b){return 2!=b?gi.get(a):mi(a)},mi=function(a,b){var c=a.split(".");b=b||[];for(var d=hi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Na(b,d))return}return d},ni=function(a,b){ii.hasOwnProperty(a)||(gi.set(a,b),J(lb(a,b),hi),ji())},oi=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=ki(c,1);if(Ma(d)||Eb(d))d=J(d);ii[c]=d}},ji=function(a){Wa(ii,function(b,c){gi.set(b,c);J(lb(b,void 0),hi);J(lb(b,c),hi);a&&delete ii[b]})},qi=function(a,b,c){fi[a]=fi[a]||{};fi[a][b]=pi(b,c)},pi=function(a,b){var c,d=1!==(void 0===b?2:b)?mi(a):gi.get(a);"array"===Cb(d)||"object"===Cb(d)?c=J(d):c=d;return c},ri=function(a,b){if(fi[a])return fi[a][b]},si=function(a,b){fi[a]&&delete fi[a][b]};var vi={},wi=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===vi[a]&&(vi[a]=Math.floor(Math.random()*b));return vi[a]};function xi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function yi(a){return ug(Hf)&&!a.navigator.cookieEnabled?!1:"null"!==a.origin};var Bi=function(a,b,c,d){return zi(d)?xi(a,String(b||Ai()),c):[]},Ei=function(a,b,c,d,e){if(zi(e)){var f=Ci(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Di(f,function(g){return g.cd},b);if(1===f.length)return f[0].id;f=Di(f,function(g){return g.nc},c);return f[0]?f[0].id:void 0}}};function Fi(a,b,c,d){var e=Ai(),f=window;yi(f)&&(f.document.cookie=a);var g=Ai();return e!=g||void 0!=c&&0<=Bi(b,g,!1,d).indexOf(c)}
var Ji=function(a,b,c,d){function e(x,z,w){if(null==w)return delete h[z],x;h[z]=w;return x+"; "+z+"="+w}function f(x,z){if(null==z)return delete h[z],x;h[z]=!0;return x+"; "+z}if(!zi(c.Qa))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Gi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.hi);g=e(g,"samesite",
c.yi);c.Ai&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Hi(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}r=!0;if(!Ii(u,c.path)&&Fi(v,a,b,c.Qa))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Ii(m,c.path)?1:Fi(g,a,b,c.Qa)?0:1},Ki=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ji(a,b,c)};
function Di(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Ci(a,b,c){for(var d=[],e=Bi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),cd:1*l[0]||1,nc:1*l[1]||1}))}}return d}
var Gi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Li=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Mi=/(^|\.)doubleclick\.net$/i,Ii=function(a,b){return Mi.test(window.document.location.hostname)||"/"===b&&Li.test(a)},Ai=function(){return yi(window)?window.document.cookie:""},Hi=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Mi.test(e)||Li.test(e)||a.push("none");return a},zi=function(a){if(!ug(Gf)||!a||!Fg())return!0;if(!Eg(a))return!1;var b=Cg(a);return null==b?!0:!!b};var Ni=function(){return[Math.round(2147483647*Math.random()),Math.round(db()/1E3)].join(".")},Qi=function(a,b,c,d,e){var f=Oi(b);return Ei(a,f,Pi(c),d,e)},Ri=function(a,b,c,d){var e=""+Oi(c),f=Pi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Oi=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Pi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Si(a,b,c){var d,e=Number(null!=a.mb?a.mb:void 0);0!==e&&(d=new Date((b||db())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ti=["1"],Ui={},Yi=function(a){var b=Vi(a.prefix);if(!Ui[b]&&!Wi(b,a.path,a.domain)){var c=Ni();if(0===Xi(b,c,a)){var d=dg("google_tag_data",{});d._gcl_au?Fa("GTM",57):d._gcl_au=c}Wi(b,a.path,a.domain)}};function Xi(a,b,c){var d=Ri(b,"1",c.domain,c.path),e=Si(c);e.Qa="ad_storage";return Ki(a,d,e)}function Wi(a,b,c){var d=Qi(a,b,c,Ti,"ad_storage");d&&(Ui[a]=d);return d}function Vi(a){return(a||"_gcl")+"_au"};var Zi=function(a){for(var b=[],c=N.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Pe:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function $i(a,b){var c=Zi(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Pe]||(d[c[e].Pe]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),oa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Pe].push(g)}}return d};function aj(){for(var a=bj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function cj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var bj,dj;
function ej(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=dj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}bj=bj||cj();dj=dj||aj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var fj;var jj=function(){var a=gj,b=hj,c=ij(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){lg(N,"mousedown",d);lg(N,"keyup",d);lg(N,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},kj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ij().decorators.push(f)},lj=function(a,b,c){for(var d=ij().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==N.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&gb(e,g.callback())}}return e},ij=function(){var a=dg("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var mj=/(.*?)\*(.*?)\*(.*)/,nj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,oj=/^(?:www\.|m\.|amp\.)+/,pj=/([^?#]+)(\?[^#]*)?(#.*)?/;function qj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var sj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);bj=bj||cj();dj=dj||aj();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),t=p?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=r>>2,x=(r&3)<<4|t>>4,z=(t&15)<<2|u>>6,w=u&63;q||(w=64,p||(z=64));l.push(bj[v],bj[x],bj[z],bj[w])}g=l.join("");f.call(e,g)}}var y=b.join("*");return["1",rj(y),
y].join("*")},rj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}fj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},uj=function(){return function(a){var b=oh(F.location.href),
c=b.search.replace("?",""),d=jh(c,"_gl",!1,!0)||"";a.query=tj(d)||{};var e=mh(b,"fragment").match(qj("_gl"));a.fragment=tj(e&&e[3]||"")||{}}},vj=function(a){var b=uj(),c=ij();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(gb(d,e.query),a&&gb(d,e.fragment));return d},tj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=mj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===rj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=ej(r[t+1]);return q}}}}catch(u){}};function wj(a,b,c,d){function e(p){var q=p,r=qj(a).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=pj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function xj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=lj(b,1,c),e=lj(b,2,c),f=lj(b,3,c);if(ib(d)){var g=sj(d);c?yj("_gl",g,a):zj("_gl",g,a,!1)}if(!c&&ib(e)){var h=sj(e);zj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){zj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){yj(m,p,q);break a}}"string"==typeof q&&wj(m,p,q,void 0)}}
function zj(a,b,c,d){if(c.href){var e=wj(a,b,c.href,void 0===d?!1:d);Nf.test(e)&&(c.href=e)}}
function yj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=N.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=wj(a,b,c.action);Nf.test(m)&&(c.action=m)}}}
var gj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||xj(e,e.hostname)}}catch(g){}},hj=function(a){try{if(a.action){var b=mh(oh(a.action),"host");xj(a,b)}}catch(c){}},Aj=function(a,b,c,d){jj();kj(a,b,"fragment"===c?2:1,!!d,!1)},Bj=function(a,b){jj();kj(a,[lh(F.location,"host",!0)],b,!0,!0)},Cj=function(){var a=N.location.hostname,b=nj.exec(N.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(oj,""),l=e.replace(oj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Dj=function(a,b){return!1===a?!1:a||b||Cj()};var Ej={};var Fj=/^\w+$/,Kj=/^[\w-]+$/,Lj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Mj=function(){if(!ug(Gf)||!Fg())return!0;var a=Cg("ad_storage");return null==a?!0:!!a},Nj=function(a,b){Eg("ad_storage")?Mj()?a():Jg(a,"ad_storage"):b?Fa("TAGGING",3):Ig(function(){Nj(a,!0)},["ad_storage"])},Pj=function(a){return Oj(a).map(function(b){return b.oa})},Oj=function(a){var b=[];if(!yi(F)||!N.cookie)return b;var c=Bi(a,N.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{yc:d.yc},e++){var f=Qj(c[e]);if(null!=f){var g=f,h=g.version;d.yc=g.oa;var l=g.timestamp,m=g.labels,p=Pa(b,function(q){return function(r){return r.oa===q.yc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Rj(p.labels,m||[])):b.push({version:h,oa:d.yc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Sj(b)};function Rj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Tj(a){return a&&"string"==typeof a&&a.match(Fj)?a:"_gcl"}
var Vj=function(){var a=oh(F.location.href),b=mh(a,"query",!1,void 0,"gclid"),c=mh(a,"query",!1,void 0,"gclsrc"),d=mh(a,"query",!1,void 0,"wbraid"),e=mh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||jh(f,"gclid",!1,void 0);c=c||jh(f,"gclsrc",!1,void 0);d=d||jh(f,"wbraid",!1,void 0)}return Uj(b,c,e,d)},Uj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Kj.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(Kj))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Wj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Yj=function(a){var b=Vj();Nj(function(){Xj(b,a)})};
function Xj(a,b,c,d){function e(p,q){var r=Zj(p,f);r&&(Ki(r,q,g),h=!0)}b=b||{};d=d||[];var f=Tj(b.prefix);c=c||db();var g=Si(b,c,!0);g.Qa="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Ej.enable_gbraid_cookie_write?0:Ej.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var bk=function(a,b){var c=vj(!0);Nj(function(){for(var d=Tj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Lj[f]){var g=Zj(f,d),h=c[g];if(h){var l=Math.min(ak(h),db()),m;b:{var p=l,q=g;if(yi(F))for(var r=Bi(q,N.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(ak(r[t])>p){m=!0;break b}m=!1}if(!m){var u=Si(b,l,!0);u.Qa="ad_storage";Ki(g,h,u)}}}}Xj(Uj(c.gclid,c.gclsrc),b)})},Zj=function(a,b){var c=Lj[a];if(void 0!==c)return b+c},ak=function(a){return 0!==ck(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Qj(a){var b=ck(a.split("."));return 0===b.length?null:{version:b[0],oa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function ck(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Kj.test(a[2])?[]:a}
var dk=function(a,b,c,d,e){if(Ma(b)&&yi(F)){var f=Tj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Zj(a[l],f);if(m){var p=Bi(m,N.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Nj(function(){Aj(g,b,c,d)})}},Sj=function(a){return a.filter(function(b){return Kj.test(b.oa)})},ek=function(a,b){if(yi(F)){for(var c=Tj(b.prefix),d={},e=0;e<a.length;e++)Lj[a[e]]&&(d[a[e]]=Lj[a[e]]);Nj(function(){Wa(d,function(f,g){var h=Bi(c+g,N.cookie,void 0,"ad_storage");h.sort(function(t,
u){return ak(u)-ak(t)});if(h.length){var l=h[0],m=ak(l),p=0!==ck(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==ck(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Xj(q,b,m,p)}})})}};function fk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var gk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Fg()){var c=Vj();if(fk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Bj(function(){return d},3);Bj(function(){var e={};return e._up="1",e},1)}}};function hk(a,b){var c=Tj(b),d=Zj(a,c);if(!d)return 0;for(var e=Oj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function ik(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var jk=/^\d+\.fls\.doubleclick\.net$/;function kk(a,b){Eg(M.D)?Qg(M.D)?a():Jg(a,M.D):b?Df(42):Ug(function(){kk(a,!0)},[M.D])}function lk(a){var b=oh(F.location.href),c=mh(b,"host",!1);if(c&&c.match(jk)){var d=mh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function mk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=lk("gcl"+a);if(d)return d.split(".")}var e=Tj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Qg(M.D)&&c,g;g=Vj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Zj(a,e);return h?Pj(h):[]}function nk(a){var b=[];Wa(a,function(c,d){d=Sj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].oa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var ok=function(a){var b=lk("gac");return b?!Qg(M.D)&&a?"0":decodeURIComponent(b):nk(Mj()?$i():{})},pk=function(a){var b=lk("gacgb");return b?!Qg(M.D)&&a?"0":decodeURIComponent(b):nk(Mj()?$i("_gac_gb",!0):{})},qk=function(a,b,c){var d=Vj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Wj(h,c)||e.push({oa:f,qe:h});!g||c&&"dc"!==c||e.push({oa:g,qe:"ds"});kk(function(){Yi(b);var l=Ui[Vi(b.prefix)],m=!1;if(l&&0<e.length)for(var p=Sh.joined_auid=Sh.joined_auid||{},q=0;q<e.length;q++){var r=e[q],t=r.oa,u=r.qe,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===u?x+"?gbraid="+t+"&auid="+l:x+"?gclid="+t+"&auid="+l+"&gclsrc="+u;rg(x);m=p[v]=!0}}null==a&&(a=
m);if(a&&l){var z=Vi(b.prefix),w=Ui[z];w&&Xi(z,w,b)}})},rk=function(a){var b;if(lk("gclaw")||lk("gac")||0<(Vj().aw||[]).length)b=!1;else{var c;if(0<(Vj().gb||[]).length)c=!0;else{var d=Math.max(hk("aw",a),ik(Mj()?$i():{}));c=Math.max(hk("gb",a),ik(Mj()?$i("_gac_gb",!0):{}))>d}b=c}return b};var sk=/[A-Z]+/,tk=/\s/,uk=function(a){if(A(a)&&(a=cb(a),!tk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(sk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],M:d}}}}},wk=function(a){for(var b={},c=0;c<a.length;++c){var d=uk(a[c]);d&&(b[d.id]=d)}vk(b);var e=[];Wa(b,function(f,g){e.push(g)});return e};
function vk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.M[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var xk=function(){var a=!1;return a};var zk=function(a,b,c,d){return(2===yk()||d||"http:"!=F.location.protocol?a:b)+c},yk=function(){var a=ig(),b;if(1===a)a:{var c=Yh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=N.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Mk=function(a){if(Qg(M.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=ph(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=ph(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Nk=function(){var a;if(!(a=Zh)){var b;if(!0===F._gtmdgs)b=!0;else{var c=bg&&bg.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ya("1");return wi(1,100)<d?wi(2,2):-1},Ok=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Pk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Qk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Rk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Sk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Tk=function(){var a=!1;return a},Vk=function(a){var b=ki("gtm.allowlist")||ki("gtm.whitelist");b&&Df(9);Tk()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&jb($a(b),Qk),d=ki("gtm.blocklist")||
ki("gtm.blacklist");d||(d=ki("tagTypeBlacklist"))&&Df(3);d?Df(8):d=[];Uk()&&(d=$a(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Na($a(d),"google")&&Df(2);var e=d&&jb($a(d),Rk),f={};return function(g){var h=g&&g[fd.fb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=di[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Na(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Na(c,l[q])){Df(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var t=0<=Na(e,h);if(t)r=t;else{var u=Va(e,l||[]);u&&Df(10);r=u}}var v=!m||r;v||!(0<=Na(l,"sandboxedScripts"))||c&&-1!==Na(c,"sandboxedScripts")||(v=Va(e,Sk));return f[h]=v}},Uk=function(){return Pk.test(F.location&&F.location.hostname)};var Wk={active:!0,isAllowed:function(){return!0}},Xk=function(a){var b=Sh.zones;return b?b.checkState(ne.L,a):Wk},Yk=function(a){var b=Sh.zones;!b&&a&&(b=Sh.zones=a());return b};var Zk=function(){},$k=function(){};var al=!1,bl=0,cl=[];function dl(a){if(!al){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){al=!0;for(var e=0;e<cl.length;e++)O(cl[e])}cl.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function el(){if(!al&&140>bl){bl++;try{N.documentElement.doScroll("left"),dl()}catch(a){F.setTimeout(el,50)}}}var fl=function(a){al?a():cl.push(a)};var hl=function(a,b){this.g=!1;this.F=[];this.N={tags:[]};this.P=!1;this.s=this.B=0;gl(this,a,b)},il=function(a,b,c,d){if(Vh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Eb(d)&&(e=J(d,e));e.id=c;e.status="timeout";return a.N.tags.push(e)-1},jl=function(a,b,c,d){var e=a.N.tags[b];e&&(e.status=c,e.executionTime=d)},kl=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},gl=function(a,b,c){Ka(b)&&a.Zb(b);c&&F.setTimeout(function(){return kl(a)},Number(c))};
hl.prototype.Zb=function(a){var b=this,c=fb(function(){return O(function(){a(ne.L,b.N)})});this.g?c():this.F.push(c)};var ll=function(a){a.B++;return fb(function(){a.s++;a.P&&a.s>=a.B&&kl(a)})};var ml=function(){function a(d){return!La(d)||0>d?0:d}if(!Sh._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=La(li.get("gtm.start"))?li.get("gtm.start"):0;Sh._li={cst:a(c-b),cbt:a(ai-b)}}},nl=function(a){F.performance&&F.performance.mark(ne.L+"_"+a+"_start")},ol=function(a){if(F.performance){var b=ne.L+"_"+a+"_start",c=ne.L+"_"+a+"_duration";F.performance.measure(c,b);var d=F.performance.getEntriesByName(c)[0];F.performance.clearMarks(b);F.performance.clearMeasures(c);
var e=Sh._p||{};void 0===e[a]&&(e[a]=d.duration,Sh._p=e);return d.duration}},pl=function(){if(F.performance&&F.performance.now){var a=Sh._p||{};a.PAGEVIEW=F.performance.now();Sh._p=a}};var ql={},rl=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},sl=!1;
var xl=function(a){},wl=function(){return F.GoogleAnalyticsObject||"ga"},yl=function(a,b){return function(){var c=rl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Gl=function(a){},Hl=function(){return"&tc="+Kd.filter(function(a){return a}).length},Kl=function(){2022<=Il().length&&Jl()},Ml=function(){Ll||(Ll=F.setTimeout(Jl,500))},Jl=function(){Ll&&(F.clearTimeout(Ll),Ll=void 0);void 0===Nl||Ol[Nl]&&!Pl&&!Ql||(Rl[Nl]||Sl.Zh()||
0>=Tl--?(Df(1),Rl[Nl]=!0):(Sl.ui(),kg(Il(!0)),Ol[Nl]=!0,Ul=Vl=Wl=Ql=Pl=""))},Il=function(a){var b=Nl;if(void 0===b)return"";var c=Ga("GTM"),d=Ga("TAGGING");return[Xl,Ol[b]?"":"&es=1",Yl[b],c?"&u="+c:"",d?"&ut="+d:"",Hl(),Pl,Ql,Wl,Vl,Gl(a),Ul,"&z=0"].join("")},$l=function(){Xl=Zl()},Zl=function(){return[bi,"&v=3&t=t","&pid="+Qa(),"&rv="+ne.Vc].join("")},Fl=["L","S","Y"],am="0.005000">Math.random(),Xl=Zl(),Ol={},Pl="",Ql="",Ul="",Vl="",El={},Dl=!1,Wl="",Nl=void 0,Yl={},Rl={},Ll=void 0,
Sl=function(a,b){var c=0,d=0;return{Zh:function(){if(c<a)return!1;db()-d>=b&&(c=0);return c>=a},ui:function(){db()-d>=b&&(c=0);c++;d=db()}}}(2,1E3),Tl=1E3,bm=function(a,b,c,d){if(am&&!Rl[a]&&b){a!==Nl&&(Jl(),Nl=a);var e,f=String(b[fd.fb]||"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;Pl=Pl?Pl+
"."+g:"&tr="+g;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var l=(Md[h]?"1":"2")+e;Ul=Ul?Ul+"."+l:"&ti="+l;Ml();Kl()}};var dm=function(a,b,c){if(am&&!Rl[a]){a!==
Nl&&(Jl(),Nl=a);var d=c+b;Ql=Ql?Ql+"."+d:"&epr="+d;Ml();Kl()}},em=function(a,b,c){};function fm(a,b,c,d){var e=Kd[a],f=gm(a,b,c,d);if(!f)return null;var g=Sd(e[fd.Kf],c,[]);if(g&&g.length){var h=g[0];f=fm(h.index,{onSuccess:f,onFailure:1===h.ag?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gm(a,b,c,d){function e(){if(f[fd.nh])h();else{var x=Td(f,c,[]);var z=x[fd.Bg];if(null!=z)for(var w=0;w<z.length;w++)if(!Qg(z[w])){h();return}var y=il(c.Wa,String(f[fd.fb]),Number(f[fd.Mf]),x[fd.oh]),B=!1;x.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=db()-E;bm(c.id,Kd[a],"5",D);jl(c.Wa,y,"success",
D);g()}};x.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=db()-E;bm(c.id,Kd[a],"6",D);jl(c.Wa,y,"failure",D);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;bm(c.id,f,"1");var C=function(){var D=db()-E;bm(c.id,f,"7",D);jl(c.Wa,y,"exception",D);B||(B=!0,h())};var E=db();try{Rd(x,c)}catch(D){C(D)}}}var f=Kd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.xe(f))return null;var m=Sd(f[fd.Nf],c,[]);if(m&&m.length){var p=m[0],q=fm(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.ag?l:q}if(f[fd.Df]||f[fd.qh]){var r=f[fd.Df]?Ld:
c.Ei,t=g,u=h;if(!r[a]){e=fb(e);var v=hm(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function hm(a,b,c){var d=[],e=[];b[a]=im(d,e,c);return{onSuccess:function(){b[a]=jm;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=km;for(var f=0;f<e.length;f++)e[f]()}}}function im(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function jm(a){a()}function km(a,b){b()};var nm=function(a,b){for(var c=[],d=0;d<Kd.length;d++)if(a[d]){var e=Kd[d];if(e[fd.mh])continue;var f=ll(b.Wa);try{var g=fm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Md[p];l.call(h,{ug:m,jg:q?q.priorityOverride||0:0,dd:g})}else lm(d,b),f()}catch(u){f()}}var r=b.Wa;r.P=!0;r.s>=r.B&&kl(r);c.sort(mm);for(var t=0;t<c.length;t++)c[t].dd();
return 0<c.length};function mm(a,b){var c,d=b.jg,e=a.jg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.ug,h=b.ug;f=g>h?1:g<h?-1:0}return f}function lm(a,b){if(!am)return;var c=function(d){var e=b.xe(Kd[d])?"3":"4",f=Sd(Kd[d][fd.Kf],b,[]);f&&f.length&&c(f[0].index);bm(b.id,Kd[d],e);var g=Sd(Kd[d][fd.Nf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var om=!1,um=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(om)return!1;om=!0;}var f=Xk(b),g=!1;if(!f.active){if("gtm.js"!==c)return!1;g=!0;f=Xk(Number.MAX_SAFE_INTEGER)}am&&
!Rl[b]&&Nl!==b&&(Jl(),Nl=b,Ul=Pl="",Yl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Ml());var h=a.eventCallback,l=a.eventTimeout,m={id:b,name:c,xe:Vk(f.isAllowed),Ei:[],gg:function(){Df(6)},Tf:pm(b),Wa:new hl(h,l)};m.Sf=qm();rm(b,m.Wa);var p=ie(m);
g&&(p=sm(p));var q=nm(p,m);"gtm.js"!==c&&"gtm.sync"!==c||xl(ne.L);switch(c){case "gtm.init":q&&Df(20)}return tm(p,q)};function pm(a){return function(b){am&&(Ib(b)||em(a,"input",b))}}function rm(a,b){qi(a,"event",1);qi(a,"ecommerce",1);qi(a,"gtm");qi(a,"eventModel");}
function qm(){var a={};a.event=pi("event",1);a.ecommerce=pi("ecommerce",1);a.gtm=pi("gtm");a.eventModel=pi("eventModel");return a}function sm(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Uh[String(Kd[c][fd.fb])]&&(b[c]=!0);return b}function tm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Kd[c]&&!Vh[String(Kd[c][fd.fb])])return!0;return!1}function vm(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return oh(""+c+b).href}}function wm(a,b){return xm()?vm(a,b):void 0}function xm(){var a=!1;return a};var ym=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},zm=function(a){var b=new ym;b.eventModel=a;return b},Am=function(a,b){a.targetConfig=b;return a},Bm=function(a,b){a.containerConfig=b;return a},Cm=function(a,b){a.remoteConfig=b;return a},Dm=function(a,
b){a.globalConfig=b;return a},Em=function(a,b){a.onSuccess=b;return a},Fm=function(a,b){a.setContainerTypeLoaded=b;return a},Gm=function(a,b){a.getContainerTypeLoaded=b;return a},Hm=function(a,b){a.onFailure=b;return a};
ym.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Im=function(a){function b(e){Wa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Wa(c,function(e){d.push(e)});return d};var Jm;if(3===ne.Vc.length)Jm="g";else{var Km="G";Jm=Km}
var Lm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Jm,OPT:"o"},Mm=function(a){var b=ne.L.split("-"),c=b[0].toUpperCase(),d=Lm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===ne.Vc.length){var g="w";f="2"+g}else f="";return f+d+ne.Vc+e};var Nm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Om=function(){return Rf("iPhone")&&!Rf("iPod")&&!Rf("iPad")};Rf("Opera");Rf("Trident")||Rf("MSIE");Rf("Edge");!Rf("Gecko")||-1!=Of.toLowerCase().indexOf("webkit")&&!Rf("Edge")||Rf("Trident")||Rf("MSIE")||Rf("Edge");-1!=Of.toLowerCase().indexOf("webkit")&&!Rf("Edge")&&Rf("Mobile");Rf("Macintosh");Rf("Windows");Rf("Linux")||Rf("CrOS");var Pm=pa.navigator||null;Pm&&(Pm.appVersion||"").indexOf("X11");Rf("Android");Om();Rf("iPad");Rf("iPod");Om()||Rf("iPad")||Rf("iPod");Of.toLowerCase().indexOf("kaios");var Qm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},Rm=function(a){var b=N;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Sm=function(){};var Tm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Um=function(a,b){this.s=a;this.g=null;this.F={};this.P=0;this.N=void 0===b?500:b;this.B=null};oa(Um,Sm);
var Wm=function(a){return"function"===typeof a.s.__tcfapi||null!=Vm(a)};
Um.prototype.addEventListener=function(a){var b={},c=Zf(function(){return a(b)}),d=0;-1!==this.N&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.N));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Tm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Xm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Um.prototype.removeEventListener=function(a){a&&a.listenerId&&Xm(this,"removeEventListener",null,a.listenerId)};
var Zm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Ym(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||ug(Ff)&&"CH"===a.publisherCC)?!0:m&&Ym(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Ym(a.purpose.legitimateInterests,b)&&Ym(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Ym=function(a,b){return!(!a||!a[b])},Xm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Vm(a)){$m(a);var f=++a.P;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Vm=function(a){if(a.g)return a.g;a.g=Qm(a.s,"__tcfapiLocator");return a.g},
$m=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},Nm(a.s,a.B))};var an=!0;an=!1;var bn={1:0,3:0,4:0,7:3,9:3,10:3};function cn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var dn=cn("",550),en=cn("",500);function fn(){var a=Sh.tcf||{};return Sh.tcf=a}
var gn=function(a,b){this.B=a;this.g=b;this.s=db();},hn=function(a){},jn=function(a){},pn=function(){var a=fn(),b=new Um(F,an?3E3:-1),c=new gn(b,a);if((kn()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Wm(b))){a.active=!0;a.qc={};ln();var d=null;an?d=F.setTimeout(function(){mn(a);nn(a);d=null},en):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)mn(a),nn(a),hn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=on(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in bn)if(bn.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Tm(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Zm(m,"1",0):!1;g["1"]=l}else g[h]=Zm(e,h,bn[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.qc=f,nn(a),hn(c))}}),jn(c)}catch(e){d&&(clearTimeout(d),d=null),mn(a),nn(a)}}};function mn(a){a.type="e";a.tcString="tcunavailable";an&&(a.qc=on())}function ln(){var a={},b=(a.ad_storage="denied",a.wait_for_update=dn,a);Og(b)}
var kn=function(){var a=!1;a=!0;return a};function on(){var a={},b;for(b in bn)bn.hasOwnProperty(b)&&(a[b]=!0);return a}function nn(a){var b={},c=(b.ad_storage=a.qc["1"]?"granted":"denied",b);qn();Pg(c,0)}
var rn=function(){var a=fn();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},qn=function(){var a=fn();return a.active?a.tcString||"":""},sn=function(){var a=fn();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},tn=function(a){if(!bn.hasOwnProperty(String(a)))return!0;var b=fn();return b.active&&b.qc?!!b.qc[String(a)]:!0};var un=!1;function vn(a){var b=String(F.location).split(/[?#]/)[0],c=ne.Dg||F._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function wn(a){function b(u){var v;Sh.reported_gclid||(Sh.reported_gclid={});v=Sh.reported_gclid;var x;x=un&&g&&(!Fg()||Qg(M.D))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[x]){v[x]=!0;var z=[],w={},y=function(R,S){S&&(z.push(R+"="+encodeURIComponent(S)),w[R]=!0)},B="https://www.google.com";if(Fg()){var C=Qg(M.D);y("gcs",Rg());u&&y("gcu","1");Gg()&&y("gcd","G1"+Kg(Dg));
Sh.dedupe_gclid||(Sh.dedupe_gclid=""+Ni());y("rnd",Sh.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Qg(M.D)){var E=Pj("_gcl_aw");y("gclaw",E.join("."))}y("url",String(F.location).split(/[?#]/)[0]);y("dclid",xn(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
y("gdpr_consent",qn()),y("gdpr",sn());"1"===vj(!1)._up&&y("gtm_up","1");y("gclid",xn(d,l));y("gclsrc",m);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",xn(d,q)),!w.gbraid&&Fg()&&Qg(M.D))){var I=Pj("_gcl_gb");y("gclgb",I.join("."))}y("gtm",Mm(!e));un&&g&&Qg(M.D)&&(Yi(f||{}),y("auid",Ui[Vi(f.prefix)]||""));
a.Yf&&y("did",a.Yf);var Q=B+"/pagead/landing?"+z.join("&");rg(Q)}}var c=!!a.he,d=!!a.qa,e=a.V,f=void 0===a.ad?{}:a.ad,g=void 0===a.hd?!0:a.hd,h=Vj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),t=Fg();if(r||t)t?Ug(function(){b();Qg(M.D)||Tg(function(u){return b(!0,u.Dh)},M.D)},[M.D]):b()}function xn(a,b){var c=a&&!Qg(M.D);return b&&c?"0":b}
var Wn=function(){return!1},Xn=function(a){return!(void 0===a||null===a||0===(a+"").length)},Yn=function(a,b){var c;if(2===b.na)return a("ord",Qa(1E11,1E13)),!0;if(3===b.na)return a("ord","1"),a("num",Qa(1E11,
1E13)),!0;if(4===b.na)return Xn(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.na)c="1";else if(6===b.na)c=b.Ke;else return!1;Xn(c)&&a("qty",c);Xn(b.bd)&&a("cost",b.bd);Xn(b.transactionId)&&a("ord",b.transactionId);return!0},ao=function(a,b,c,d){function e(R,S,U){t.hasOwnProperty(R)||(S=String(S),r.push(";"+R+"="+(U?S:Zn(S))))}function f(R,S){S&&e(R,S)}var g=a.oe,h=a.Ne,l=a.protocol,m=a.ue;l+=h?"//"+g+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var p=";",q=!1;
q=!0;Qg(M.D)||m||!a.qa&&!q||(l="https://ade.googlesyndication.com/ddm/activity",p="/",h=!1);var r=[p,"src="+Zn(g),";type="+Zn(a.te),";cat="+Zn(a.Xb)],t=a.Jh||{};Wa(t,function(R,S){r.push(";"+Zn(R)+"="+Zn(S+""))});if(Yn(e,a)){Xn(a.sd)&&e("u",a.sd);Xn(a.rd)&&e("tran",a.rd);e("gtm",Mm());Fg()&&!m&&(e("gcs",Rg()),c&&e("gcu","1"));f("gdpr_consent",qn()),f("gdpr",sn());
"1"===vj(!1)._up&&e("gtm_up","1");!1===a.xh&&e("npa","1");if(a.je){var u=void 0===a.qa?!0:!!a.qa,v=mk("dc",a.Ca,u),x=!1;v&&v.length&&(e("gcldc",v.join(".")),x=!0);var z=!0;if(z)if($n&&!x&&rk(a.Ca)){var w=mk("gb",a.Ca,u);w.length&&e("gclgb",w.join("."));var y=pk(u);y&&e("gacgb",y)}else{var B=mk("aw",a.Ca,u);B&&B.length&&e("gclaw",B.join("."));var C=ok(u);C&&e("gac",C)}Yi({prefix:a.Ca,
mb:a.Hh,domain:a.Gh,flags:a.Ui});var E=Ui[Vi(a.Ca)];E&&e("auiddc",E)}Xn(a.Fe)&&e("prd",a.Fe,!0);Xn(d)&&e("em",d,!0);Wa(a.Re,function(R,S){e(R,S)});r.push(b||"");var D=Wn();D&&r.push(";ps=1");if(Xn(a.jd)){var I=a.jd||"";Qg(M.D)||m||!a.qa||(I=ph(I));e("~oref",I)}var Q=l+r.join("")+"?";h?jg(Q,a.onSuccess):kg(Q,a.onSuccess,a.onFailure);}else O(a.onFailure)},bo=function(a,b,c){var d=!1;d&&a.va?Rh(a.va,[],function(e){ao(a,b,c,e)}):ao(a,b,c)},$n=!1;$n=!0;var Zn=encodeURIComponent,Vn=!1,co=function(a,b){!Fg()||a.ue?
bo(a,b):Ug(function(){bo(a,b);Qg(M.D)||Tg(function(){bo(a,b,!0)},M.D)},[M.D])};var Bo=function(){var a=!0;tn(7)&&tn(9)&&tn(10)||(a=!1);var b=!0;b=!1;b&&!yo()&&(a=!1);return a},yo=function(){var a=!0;tn(3)&&tn(4)||(a=!1);return a};var Zo=!1;function $o(){var a=Sh;return a.gcq=a.gcq||new ap}
var bp=function(a,b,c){$o().register(a,b,c)},cp=function(a,b,c,d){$o().push("event",[b,a],c,d)},dp=function(a,b){$o().push("config",[a],b)},ep=function(a,b,c,d){$o().push("get",[a,b],c,d)},fp=function(a){return $o().getRemoteConfig(a)},gp={},hp=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s=null;this.g=!1},ip=function(a,b,c,d,e){this.type=a;this.B=b;this.V=c||"";this.g=d;this.s=e},ap=function(){this.F={};this.s={};this.g=[];this.B={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=
Zo},jp=function(a,b){var c=uk(b);return a.F[c.containerId]=a.F[c.containerId]||new hp},kp=function(a,b,c){if(b){var d=uk(b);if(d&&1===jp(a,b).status){jp(a,b).status=2;var e={};am&&(e.timeoutId=F.setTimeout(function(){Df(38);Ml()},3E3));a.push("require",[e],d.containerId);gp[d.containerId]=db();if(xk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=wm(c,g)||h;hg(l)}}}},lp=function(a,b,c,d){if(d.V){var e=jp(a,d.V),f=e.s;if(f){var g=J(c),h=J(e.targetConfig[d.V]),l=J(e.containerConfig),m=J(e.remoteConfig),p=J(a.s),q=ki("gtm.uniqueEventId"),r=uk(d.V).prefix,t=Gm(Fm(Hm(Em(Dm(Cm(Bm(Am(zm(g),h),l),m),p),function(){
dm(q,r,"2");}),function(){dm(q,r,"3");}),function(u,v){a.B[u]=v}),function(u){return a.B[u]});try{dm(q,r,"1");f(d.V,b,d.B,t)}catch(u){dm(q,r,"4");}}}};k=ap.prototype;
k.register=function(a,b,c){var d=jp(this,a);if(3!==d.status){d.s=b;d.status=3;if(c){J(d.remoteConfig,c);d.remoteConfig=c}var e=uk(a),f=gp[e.containerId];if(void 0!==f){var g=Sh[e.containerId].bootstrap,h=e.prefix.toUpperCase();Sh[e.containerId]._spx&&(h=h.toLowerCase());var l=ki("gtm.uniqueEventId"),m=h,p=db()-g;if(am&&!Rl[l]){l!==Nl&&(Jl(),Nl=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(p);Vl=Vl?Vl+","+q:"&cl="+q}delete gp[e.containerId]}this.flush()}};k.push=function(a,b,c,d){var e=Math.floor(db()/1E3);kp(this,c,b[0][M.la]||this.s[M.la]);Zo&&c&&jp(this,c).g&&(d=!1);this.g.push(new ip(a,e,c,b,d));d||this.flush()};k.insert=function(a,b,c){var d=Math.floor(db()/1E3);0<this.g.length?this.g.splice(1,0,new ip(a,d,c,b,!1)):this.g.push(new ip(a,d,c,b,!1))};
k.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)Zo?!f.V||jp(this,f.V).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f));else switch(f.type){case "require":if(3!==jp(this,f.V).status&&!a){Zo&&this.g.push.apply(this.g,c);return}am&&F.clearTimeout(f.g[0].timeoutId);break;case "set":Wa(f.g[0],function(r,t){J(lb(r,t),b.s)});break;case "config":e.Ea={};Wa(f.g[0],function(r){return function(t,u){J(lb(t,u),r.Ea)}}(e));var g=!!e.Ea[M.Nc];delete e.Ea[M.Nc];
var h=jp(this,f.V),l=uk(f.V),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.V]={});h.g&&g||lp(this,M.wa,e.Ea,f);h.g=!0;delete e.Ea[M.Ub];m?J(e.Ea,h.containerConfig):J(e.Ea,h.targetConfig[f.V]);Zo&&(d=!0);break;case "event":e.xc={};Wa(f.g[0],function(r){return function(t,u){J(lb(t,u),r.xc)}}(e));lp(this,f.g[1],e.xc,f);break;case "get":var p={},q=(p[M.Ta]=f.g[0],p[M.Sa]=f.g[1],p);lp(this,M.Ha,q,f)}this.g.shift();e={Ea:e.Ea,xc:e.xc}}Zo&&(this.g.push.apply(this.g,c),d&&this.flush())};
k.getRemoteConfig=function(a){return jp(this,a).remoteConfig};function mp(a,b){var c=this;};function np(a,b,c){};function op(a,b,c,d){};function pp(a){};var qp=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":sg(a,"className"),"gtm.elementId":a["for"]||ng(a,"id")||"","gtm.elementTarget":a.formTarget||sg(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||sg(a,"href")||a.src||a.code||a.codebase||"";return d},rp=function(a){Sh.hasOwnProperty("autoEventsSettings")||(Sh.autoEventsSettings={});var b=Sh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},sp=function(a,b,c){rp(a)[b]=c},tp=function(a,b,c,d){var e=rp(a),f=eb(e,b,d);e[b]=c(f)},up=function(a,b,c){var d=rp(a);return eb(d,b,c)};var vp={},wp=[];
var Dp=function(a,b){};

function Gp(a,b){};var Hp=/^\s*$/,Ip,Jp=!1;
function Up(a,b){}function Vp(a,b,c){};var Wp=!!F.MutationObserver,Xp=void 0,Yp=function(a){if(!Xp){var b=function(){var c=N.body;if(c)if(Wp)(new MutationObserver(function(){for(var e=0;e<Xp.length;e++)O(Xp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;lg(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<Xp.length;e++)O(Xp[e])}))})}};Xp=[];N.body?b():O(b)}Xp.push(a)};var $p=["www.youtube.com","www.youtube-nocookie.com"],aq,bq=!1,cq=0;
function mq(a,b){}function nq(a,b){return!0};function oq(a,b,c){};function pq(a,b){var c;K(H(this),["path:!string"],[a]);lf(this,"access_globals","execute",a);for(var d=a.split("."),e=F,f=e[d[0]],g=1;f&&g<d.length;g++)if(e=f,f=f[d[g]],e===F||e===N)return;if("function"!==Cb(f))return;var h=!1;for(var l=[],m=1;m<arguments.length;m++)l.push(Gb(arguments[m],this.g,h));var p=(0,this.g.P)(f,e,l);
c=Fb(p,this.g);void 0===c&&void 0!==p&&Df(45);return c};function qq(a){};function rq(a){};var sq=!1,tq=[];function uq(){if(!sq){sq=!0;for(var a=0;a<tq.length;a++)O(tq[a])}}var vq=function(a){sq?O(a):tq.push(a)};function wq(a){K(H(this),["listener:!Fn"],arguments);lf(this,"process_dom_events","window","load");vq(Gb(a))};function xq(a){var b;return b};function yq(a,b){var c;var d=!1;var e=Fb(c,this.g,d);void 0===e&&void 0!==c&&Df(45);return e};function zq(a){var b;K(H(this),["path:!string"],arguments);lf(this,"access_globals","read",a);var c=a.split("."),d=kb(c,[F,N]);if(!d)return;var e=d[c[c.length-1]],f=!1;b=Fb(e,this.g,f);void 0===b&&void 0!==e&&Df(45);return b};function Aq(a,b){var c=null,d=!1;K(H(this),["functionPath:!string","arrayPath:!string"],arguments);lf(this,"access_globals","readwrite",a);lf(this,"access_globals","readwrite",b);var e=[F,N],f=a.split("."),g=kb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ka(l))return null;
if(l)return Fb(l,this.g,d);var m;l=function(){if(!Ka(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),q=kb(p,e),r=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Fb(c,this.g,d)};function Bq(a){var b;var g=!1;return Fb(b,this.g,g)};var Cq=function(a){var b;return b};function Dq(a,b){b=void 0===b?!0:b;var c;return c};function Eq(a){var b=null;return b};function Fq(a,b){var c;return c};function Gq(a,b){var c;return c};function Hq(a){var b="";return b};function Iq(a,b){var c;return c};function Jq(a){var b="";return b};function Kq(){lf(this,"get_user_agent");return F.navigator.userAgent};function Lq(a,b){};var Mq={};function Nq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],hg(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)O(g[h]);g.push=function(l){O(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)O(g[h]);e[f]=null},b)):hg(a,c,d,b)}
function Oq(a,b,c,d){K(H(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);lf(this,"inject_script",a);var e=this.g;Nq(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},Mq,d);}var Pq=Object.freeze({dl:1,id:1}),Qq={};
function Rq(a,b,c,d){};function Sq(a){var b=!0;return b};var Tq=function(){return!1},Uq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Vq(){};function Wq(a,b){var c;return c};function Xq(a){var b=void 0;return b};function Yq(a,b){var c=!1;return c};function Zq(){var a="";return a};function $q(){var a="";return a};function ar(){};function br(a,b,c,d){d=void 0===d?!1:d;};function cr(a,b,c){};function dr(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function er(a){K(H(this),["consentSettings:!DustMap"],arguments);for(var b=a.hb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==M.ud&&lf(this,"access_consent",e,"write")}Og(Gb(a))};function fr(a,b,c){K(H(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);lf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=kb(e,[F,N]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Gb(b,this.g,d),!0;return!1};function gr(a,b,c){}
;var hr=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function ir(a,b,c,d){var e=this;};function jr(a,b,c){}
;var kr={},lr={};kr.getItem=function(a){var b=null;return b};
kr.setItem=function(a,b){};
kr.removeItem=function(a){};kr.clear=function(){};var mr=function(a){var b;return b};function nr(a){K(H(this),["consentSettings:!DustMap"],arguments);var b=Gb(a),c;for(c in b)b.hasOwnProperty(c)&&lf(this,"access_consent",c,"write");Pg(b)};var cd=function(){var a=new yf;xk()?(a.add("injectHiddenIframe",Ja),a.add("injectScript",Ja)):(a.add("injectHiddenIframe",Lq),a.add("injectScript",Oq));var b=cr;a.add("Math",bf());a.add("TestHelper",Bf());a.add("addEventCallback",pp);a.add("aliasInWindow",nq);a.add("assertApi",Ye);a.add("assertThat",Ze);a.add("callInWindow",
pq);a.add("callLater",qq);a.add("copyFromDataLayer",yq);a.add("copyFromWindow",zq);a.add("createArgumentsQueue",Aq);a.add("createQueue",Bq);a.add("decodeUri",cf);a.add("decodeUriComponent",df);a.add("encodeUri",ef);a.add("encodeUriComponent",hf);a.add("fail",jf);a.add("fromBase64",Cq,!("atob"in F));a.add("generateRandom",kf);a.add("getContainerVersion",mf);a.add("getCookieValues",Dq);a.add("getQueryParameters",Fq);a.add("getReferrerQueryParameters",Gq);a.add("getReferrerUrl",Hq);a.add("getTimestamp",
nf);a.add("getTimestampMillis",nf);a.add("getType",of);a.add("getUrl",Jq);a.add("localStorage",Uq,!Tq());a.add("logToConsole",Vq);a.add("makeInteger",qf);a.add("makeNumber",rf);a.add("makeString",sf);a.add("makeTableMap",tf);a.add("mock",vf);a.add("parseUrl",Xq);a.add("queryPermission",Yq);a.add("readCharacterSet",Zq);a.add("readTitle",$q);a.add("sendPixel",b);a.add("setCookie",dr);a.add("setInWindow",fr);a.add("sha256",ir);a.add("templateStorage",kr);a.add("toBase64",mr,!("btoa"in F));a.add("JSON",
pf(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",er);a.add("updateConsentState",nr);
a.add("isConsentGranted",Sq);a.add("addConsentListener",mp);
Af(a,"callOnWindowLoad",wq);xk()?Af(a,"internal.injectScript",
Ja):Af(a,"internal.injectScript",Rq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.hc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?
a.s[d]:void 0;m=zf(d,this)||m;e=m}else throw Error(d+" is not a valid API name.");}return e}};var or=function(){var a=Sh.consumeTestResult;if(a&&Ka(a))return!0;return!1},pr=function(){var a={};return function(b,c,d){if(!or())return;var e=a[b]||{testName:b,status:c,logMessages:[],elapsedTime:0};a[b]=e;switch(c){case 4:e.logMessages.push(d);break;case 3:d&&(e.error=d);break;case 5:e.returnValue=d}if(2===c||3===c){e.status=c;var f=Sh.consumeTestResult;f&&f(e)}}};var ad,re;
function qr(){var a=data.runtime||[],b=data.runtime_lines;ad=new Zc;rr();Gd=function(e,f,g){sr(f);var h=new tb;Wa(f,function(t,u){var v=Fb(u);void 0===v&&void 0!==u&&Df(44);h.set(t,v)});ad.g.g.N=fe();var l={Ah:se(e),eventId:void 0!==g?g.id:void 0,Zb:void 0!==g?function(t){return g.Wa.Zb(t)}:void 0,hc:function(){return e},log:function(){}};if(or()){var m=pr(),
p=void 0,q=void 0;l.sa={$b:{},Eb:function(t,u,v){1===u&&(p=t);7===u&&(q=v);m(t,u,v)},Ae:uf()};l.log=function(t,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:t,source:q,message:v})}}}var r=bd(l,[e,h]);ad.g.g.N=void 0;r instanceof ra&&"return"===r.g&&(r=r.s);return Gb(r)};dd();for(var c=0;c<a.length;c++){var d=a[c];if(!Ma(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Wd(d,b[c]);ad.dd(d)}}
function sr(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ka(b)&&(a.gtmOnSuccess=function(){O(b)});Ka(c)&&(a.gtmOnFailure=function(){O(c)})}function rr(){var a=ad;Sh.SANDBOXED_JS_SEMAPHORE=Sh.SANDBOXED_JS_SEMAPHORE||0;ed(a,function(b,c,d){Sh.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Sh.SANDBOXED_JS_SEMAPHORE--}})}function tr(a){void 0!==a&&Wa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");di[e]=di[e]||[];di[e].push(b)}})};var ur="HA GF G UA AW DC".split(" "),vr=!1,wr={},xr=!1;function yr(a,b){var c={event:a};b&&(c.eventModel=J(b),b[M.Jd]&&(c.eventCallback=b[M.Jd]),b[M.Gc]&&(c.eventTimeout=b[M.Gc]));return c}function zr(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:ei()});return a["gtm.uniqueEventId"]}
function Ar(){return vr}
var Dr={config:function(a){var b,c;void 0===c&&(c=ei());return b},consent:function(a){function b(){Ar()&&J(a[2],{subcommand:a[1]})}if(3===a.length){Df(39);var c=ei(),d=a[1];"default"===d?(b(),Og(a[2])):"update"===d&&(b(),Pg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&A(b)){var c;if(2<a.length){if(!Eb(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=yr(b,c),e=void 0;void 0===e&&ei();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){xr=!0;Ar();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=re.s;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Eb(a[1])?b=J(a[1]):3==a.length&&A(a[1])&&(b={},Eb(a[2])||Ma(a[2])?b[a[1]]=J(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Er={policy:!0};var Fr=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Hr=function(a){var b=Gr(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Yr=function(a){if(Xr(a))return a;this.g=a};Yr.prototype.Uh=function(){return this.g};var Xr=function(a){return!a||"object"!==Cb(a)||Eb(a)?!1:"getUntrustedUpdateValue"in a};Yr.prototype.getUntrustedUpdateValue=Yr.prototype.Uh;var Zr=[],$r=!1,as=!1,bs=!1,cs=function(a){return F["dataLayer"].push(a)},ds=function(a){var b=Sh["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function es(a){var b=a._clear;Wa(a,function(d,e){"_clear"!==d&&(b&&ni(d,void 0),ni(d,e))});$h||($h=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=ei(),a["gtm.uniqueEventId"]=c,ni("gtm.uniqueEventId",c));return um(a)}function fs(){var a=Zr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Xa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function gs(){for(var a=!1;!bs&&0<Zr.length;){var b=!1;b=!0;if(b&&!as&&fs()){var c={};Zr.unshift((c.event=
"gtm.init",c));as=!0}var d=!1;d=!0;if(d&&!$r&&fs()){var e={};Zr.unshift((e.event="gtm.init_consent",e));$r=!0}bs=!0;delete hi.eventModel;ji();var f=Zr.shift();if(null!=f){var g=Xr(f);
if(g){var h=f;f=Xr(h)?h.getUntrustedUpdateValue():void 0;oi()}try{if(Ka(f))try{f.call(li)}catch(v){}else if(Ma(f)){var l=f;if(A(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=ki(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(Xa(f)){a:{var t=f;if(t.length&&A(t[0])){var u=Dr[t[0]];if(u&&(!g||!Er[t[0]])){f=u(t);break a}}f=void 0}if(!f){bs=!1;continue}}a=es(f)||a}}finally{g&&ji(!0)}}bs=!1}
return!a}function hs(){var b=gs();try{Fr(F["dataLayer"],ne.L)}catch(c){}return b}
var js=function(){var a=dg("dataLayer",[]),b=dg("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};fl(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});vq(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Sh.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Yr(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Zr.push.apply(Zr,e);if(300<
this.length)for(Df(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return gs()&&h};var d=a.slice(0);Zr.push.apply(Zr,d);if(is()){O(hs)}},is=function(){var a=!0;return a};var ks={};ks.Rc=new String("undefined");
var ls=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ks.Rc?b:a[d]);return c.join("")}};ls.prototype.toString=function(){return this.g("undefined")};ls.prototype.valueOf=ls.prototype.toString;ks.sh=ls;ks.ae={};ks.Ih=function(a){return new ls(a)};var ms={};ks.vi=function(a,b){var c=ei();ms[c]=[a,b];return c};ks.Wf=function(a){var b=a?0:1;return function(c){var d=ms[c];if(d&&"function"===typeof d[b])d[b]();ms[c]=void 0}};ks.Yh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};ks.oi=function(a){if(a===ks.Rc)return a;var b=ei();ks.ae[b]=a;return'google_tag_manager["'+ne.L+'"].macro('+b+")"};ks.ii=function(a,b,c){a instanceof ks.sh&&(a=a.g(ks.vi(b,c)),b=Ja);return{Vh:a,onSuccess:b}};var ns=["input","select","textarea"],os=["button","hidden","image","reset","submit"],ps=function(a){var b=a.tagName.toLowerCase();return!Pa(ns,function(c){return c===b})||"input"===b&&Pa(os,function(c){return c===a.type.toLowerCase()})?!1:!0},qs=function(a){return a.form?a.form.tagName?a.form:N.getElementById(a.form):qg(a,["form"],100)},rs=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(ps(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Cs=F.clearTimeout,Ds=F.setTimeout,V=function(a,b,c){if(xk()){b&&O(b)}else return hg(a,b,c)},Es=function(){return new Date},Fs=function(){return F.location.href},Gs=function(a){return mh(oh(a),"fragment")},Hs=function(a){return nh(oh(a))},Is=function(a,b){return ki(a,b||2)},Js=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=cs(a)):d=cs(a);return d},Ks=function(a,b){F[a]=b},W=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},Ls=function(a,b,c){return Bi(a,b,void 0===c?!0:!!c)},Ms=function(a,b,c){return 0===Ki(a,b,c)},Ns=function(a,b){if(xk()){b&&O(b)}else jg(a,b)},Os=function(a){return!!up(a,"init",!1)},Ps=function(a){sp(a,"init",!0)},Qs=function(a){var b=Yh+"?id="+encodeURIComponent(a)+"&l=dataLayer";V(zk("https://","http://",b))},Rs=function(a,b,c){am&&(Ib(a)||em(c,b,a))};var Ss=ks.ii;function ot(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var pt=new Ua;function qt(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=pt.get(e);f||(f=new RegExp(b,d),pt.set(e,f));return f.test(a)}catch(g){return!1}}
function rt(a,b){function c(g){var h=oh(g),l=mh(h,"protocol"),m=mh(h,"host",!0),p=mh(h,"port"),q=mh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function st(a){return tt(a)?1:0}
function tt(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ma(c)){for(var d=0;d<c.length;d++){var e=J(a,{});J({arg1:c[d],any_of:void 0},e);if(st(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return ot(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Na(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return qt(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return rt(b,c)}return!1};var ut=encodeURI,X=encodeURIComponent,vt=kg;var wt=function(a,b){if(!a)return!1;var c=mh(oh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var xt=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function ev(){return F.gaGlobal=F.gaGlobal||{}}var fv=function(){var a=ev();a.hid=a.hid||Qa();return a.hid},gv=function(a,b){var c=ev();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Dv=function(){if(Ka(F.__uspapi)){var a="";try{F.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Xv=window,Yv=document,Zv=function(a){var b=Xv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Xv["ga-disable-"+a])return!0;try{var c=Xv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=xi("AMP_TOKEN",String(Yv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Yv.getElementById("__gaOptOutExtension")?!0:!1};var $v={};function cw(a){delete a.eventModel[M.Ub];ew(a.eventModel)}var ew=function(a){Wa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[M.Ka]||{};Wa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var hw=function(a,b,c){cp(b,c,a)},iw=function(a,b,c){cp(b,c,a,!0)},kw=function(a,b){};
function jw(a,b){}var Z={h:{}};

Z.h.flc=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;co(c,d)}var b=!1;(function(c){Z.__flc=c;Z.__flc.m="flc";Z.__flc.o=!0;Z.__flc.priorityOverride=0})(function(c){var d=!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker,e={UNIQUE:3,SESSION:4}[c.vtp_ordinalType]||
2,f=xt(c.vtp_customVariable||[],"key","value")||{};var q={Xb:c.vtp_activityTag,je:d,Ca:c.vtp_conversionCookiePrefix||void 0,bd:void 0,na:e,oe:c.vtp_advertiserId,te:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,jd:c.vtp_useImageTag?void 0:c.vtp_url,protocol:"",Ke:void 0,Ne:!c.vtp_useImageTag,sessionId:c.vtp_sessionId,rd:c.vtp_transactionVariable,transactionId:void 0,
sd:c.vtp_userVariable,va:c.vtp_userDataVariable,Re:f},r=!1;var t=!(Qg(M.D)||r)&&void 0!=Is(M.R)&&!1!==Is(M.R);q.qa=t;if(c.vtp_enableAttribution){var u=c.vtp_attributionFields||[];if(u.length){V("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(q,W("google_attr").build([xt(u,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(q)})}();

Z.h.sp=["google"],function(){var a=!1;(function(b){Z.__sp=b;Z.__sp.m="sp";Z.__sp.o=!0;Z.__sp.priorityOverride=0})(function(b){function c(){var q={};"DATA_LAYER"==b.vtp_customParamsFormat?q=b.vtp_dataLayerVariable:"USER_SPECIFIED"==b.vtp_customParamsFormat&&(q=xt(b.vtp_customParams,"key","value"));return q}if(a){}else{var g=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?
"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",h=b.vtp_gtmOnFailure,l=function(){var q=W("google_trackConversion");if(Ka(q)){var r=c(),t={google_conversion_id:b.vtp_conversionId,google_conversion_label:b.vtp_conversionLabel,google_custom_params:r,google_remarketing_only:!0,onload_callback:b.vtp_gtmOnSuccess,google_gtm:Mm()};b.vtp_enableDynamicRemarketing&&(b.vtp_eventName&&(r.event=b.vtp_eventName),b.vtp_eventValue&&(t.google_conversion_value=
b.vtp_eventValue),b.vtp_eventItems&&(t.google_gtag_event_data={items:b.vtp_eventItems}));var u=function(x,z){(t.google_additional_params=t.google_additional_params||{})[x]=z};b.vtp_rdp&&(t.google_restricted_data_processing=!0);b.vtp_userId&&(t.google_user_id=b.vtp_userId);u("gdpr_consent",qn()),u("gdpr",sn());q(t)||h()}else h()},m=function(){V(g,l,h)},p=!1;Fg()&&!p?Ug(function(){Qg(M.D)?m():Jg(m,M.D)},[M.D]):(ml(),m())}});}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.o=!0;Z.__e.priorityOverride=0})(function(a){var b=String(ri(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.m="f";Z.__f.o=!0;Z.__f.priorityOverride=0})(function(a){var b=Is("gtm.referrer",1)||N.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?mh(oh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Hs(String(b)):String(b)})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.m="k";Z.__k.o=!0;Z.__k.priorityOverride=0})(function(a){return Ls(a.vtp_name,Is("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.m="access_globals";Z.__access_globals.o=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!A(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Na(e,r))return}else if("write"===q){if(-1<Na(f,r))return}else if("readwrite"===q){if(-1<Na(f,r)&&-1<Na(e,r))return}else if("execute"===q){if(-1<Na(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},T:a}})}();Z.h.r=["google"],function(){(function(a){Z.__r=a;Z.__r.m="r";Z.__r.o=!0;Z.__r.priorityOverride=0})(function(a){return Qa(a.vtp_min,a.vtp_max)})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.m="u";Z.__u.o=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Is("gtm.url",1))||Fs();var d=b[a("vtp_component")];if(!d||"URL"==d)return Hs(String(c));var e=oh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ma(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=mh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=mh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.m="v";Z.__v.o=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Is(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Rs(d,"v",a.vtp_gtmEventId);return d})}();

Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.m="inject_script";Z.__inject_script.o=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!A(f))throw d(e,{},"Script URL must be a string.");try{if(Re(oh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},T:a}})}();




Z.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;(function(c){Z.__gclidw=c;Z.__gclidw.m="gclidw";Z.__gclidw.o=!0;Z.__gclidw.priorityOverride=100})(function(c){O(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||Cj())&&bk(a,l));Yj(l);ek(["aw","dc"],l);b?qk(h,l):qk(h,l,"dc");var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");dk(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=Is(M.R);wn({he:!1,
qa:void 0!=q&&!1!==q,ad:l,hd:!0});c.vtp_enableUrlPassthrough&&gk(["aw","dc","gb"])});}();



Z.h.awct=["google"],function(){var a=!1;var b=!1,c=[],d=function(h){var l=W("google_trackConversion"),m=h.gtm_onFailure;"function"==typeof l?l(h)||m():m()},e=function(){for(;0<c.length;)d(c.shift())},f=function(){return function(){e();b=!1}},g=function(){return function(){e();c={push:d};}};
(function(h){Z.__awct=h;Z.__awct.m="awct";Z.__awct.o=!0;Z.__awct.priorityOverride=0})(function(h){function l(P,ha,sa){return"DATA_LAYER"===P?Is(sa):h[ha]}function m(){U("gdpr_consent",qn()),U("gdpr",sn());}
function p(){var P=[];return P}function q(){if(h.vtp_enableEnhancedConversion){var P;void 0===h.vtp_dataSource?P=
h.vtp_cssProvidedEnhancedConversionValue||h.vtp_enhancedConversionObject:"DATA_OBJECT"===h.vtp_dataSource?P=h.vtp_enhancedConversionObject:"INDIVIDUAL_FIELDS"===h.vtp_dataSource&&(P=h.vtp_cssProvidedEnhancedConversionValue);if(P)return{enhanced_conversions_mode:"manual",enhanced_conversions_manual_var:P}}}function r(P){function ha(){if(ya.length)try{Promise.all(ya).then(function(){c.push(I)});return}catch(hb){}c.push(I)}var sa=!0,ka=[],ya=[];if(P){ka=p();}sa&&ha()}function t(){Gg()&&U("gcd","G1"+Kg(Dg));}var u=!h.hasOwnProperty("vtp_enableConversionLinker")||
h.vtp_enableConversionLinker,v=!!h.vtp_enableEnhancedConversions||!!h.vtp_enableEnhancedConversion;if(a){}else{ml();var I={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:Mm()};I.google_gtm_experiments={capi:!0};
h.vtp_rdp&&(I.google_restricted_data_processing=!0);void 0!=Is(M.R)&&!1!==Is(M.R)&&(I.google_gtm_url_processor=function(P){return P=Mk(P)});var Q=function(P){return function(ha,sa,ka){var ya=l(P,sa,ka);ya&&(I[ha]=ya)}},R=Q("JSON");R("google_conversion_currency","vtp_currencyCode");R("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&(R=Q(h.vtp_productReportingDataSource),R("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),R("google_basket_feed_country","vtp_awFeedCountry",
"aw_feed_country"),R("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),R("google_basket_discount","vtp_discount","discount"),R("google_conversion_items","vtp_items","items"),I.google_conversion_items&&I.google_conversion_items.map&&(I.google_conversion_items=I.google_conversion_items.map(function(P){return{value:P.price,quantity:P.quantity,item_id:P.id}})));var S=function(P,ha){(I.google_additional_params=I.google_additional_params||{})[P]=ha},U=function(P,ha){void 0!==ha&&((I.google_additional_conversion_params=
I.google_additional_conversion_params||{})[P]=ha)},T=function(P){return function(ha,sa,ka,ya){var Ha=l(P,sa,ka);ya(Ha)&&U(ha,Ha)}};var L=Is("developer_id"),Y=nb(Eb(L)?L:{});Y&&U("did",Y);(function(){if(!h.vtp_enableShippingData)return;U("delopc",h.vtp_deliveryPostalCode);U("oedeld",h.vtp_estimatedDeliveryDate);U("delc",h.vtp_deliveryCountry);
U("shf",h.vtp_shippingFee);if(h.vtp_enableProductReporting){var P=l(h.vtp_productReportingDataSource,"vtp_items","items");U("iedeld",Ok(P))}})();h.vtp_transportUrl&&(I.google_transport_url=h.vtp_transportUrl);var ea=wm(h.vtp_transportUrl,"/pagead/conversion_async.js");ea||(ea=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");h.vtp_enableNewCustomerReporting&&
(R=T(h.vtp_newCustomerReportingDataSource),R("vdnc","vtp_awNewCustomer","new_customer",function(P){return void 0!=P&&""!==P}),R("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(P){return void 0!=P&&""!==P}));u?(h.vtp_conversionCookiePrefix&&(I.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),I.google_read_gcl_cookie_opt_out=!1):I.google_read_gcl_cookie_opt_out=!0;"1"===vj(!1)._up&&U("gtm_up","1");m();(function(){var P=!1;!Fg()||P?r(!0):Ug(function(){m();var ha=Qg(M.D),sa=void 0!=Is(M.R)&&!1!==Is(M.R),ka=!1;ka=!0;h.vtp_transportUrl||ha||!sa&&!ka||(I.google_transport_url="https://pagead2.googlesyndication.com/");U("gcs",Rg());t();r(ha);ha||Tg(function(){I=J(I);m();!h.vtp_transportUrl&&I.google_transport_url&&delete I.google_transport_url;
U("gcs",Rg());t();U("gcu","1");r(!0)},M.D)},[M.D])})();b||(b=!0,V(ea,g(),f(ea)))}})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.m="remm";Z.__remm.o=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Rs(f,"remm",a.vtp_gtmEventId);return f})}();
Z.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.m="baut";Z.__baut.o=!0;Z.__baut.priorityOverride=0})(function(b){function c(){var h=W(d);if(Array.isArray(h)){var l;try{l=Yf(W("UET"),{ti:b.vtp_tagId,q:h,tm:"gtm001"})}catch(m){}l?(F[d]=l,l.push("pageLoad"),b.vtp_gtmOnSuccess()):O(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()}var d=b.vtp_uetqName||"uetq",e=W(d,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)e.push({gv:b.vtp_goalValue}),
b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var f={},g=function(h,l){void 0!==b[h]&&(f[l]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);b.vtp_gtmOnSuccess()}else if(Array.isArray(e))if(a)c();else try{V("https://bat.bing.com/bat.js",function(){a=!0;c()},b.vtp_gtmOnFailure)}catch(h){O(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()})}();




Z.h.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.m="paused";Z.__paused.o=!0;Z.__paused.priorityOverride=0})(function(a){O(a.vtp_gtmOnFailure)})}();

Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=N.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,fg(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){O(g)}}}var c=function(d){if(N.body){var e=
d.vtp_gtmOnFailure,f=Ss(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Vh,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(N.body,pg(g),h,e)()}else Ds(function(){c(d)},
200)};Z.__html=c;Z.__html.m="html";Z.__html.o=!0;Z.__html.priorityOverride=0}();




Z.h.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.m="img";Z.__img.o=!0;Z.__img.priorityOverride=0})(function(a){var b=pg('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}vt(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var rw={};rw.macro=function(a){if(ks.ae.hasOwnProperty(a))return ks.ae[a]},rw.onHtmlSuccess=ks.Wf(!0),rw.onHtmlFailure=ks.Wf(!1);rw.dataLayer=li;rw.callback=function(a){ci.hasOwnProperty(a)&&Ka(ci[a])&&ci[a]();delete ci[a]};rw.bootstrap=0;rw._spx=!1;function sw(){Sh[ne.L]=rw;gb(di,Z.h);Od=Od||ks;Pd=je}
function tw(){var a=!1;a&&nl("INIT");tg.s().s();Sh=F.google_tag_manager=F.google_tag_manager||{};pn();
Ej.enable_gbraid_cookie_write=!0;if(Sh[ne.L]){var b=Sh.zones;b&&b.unregisterChild(ne.L);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Hd.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Kd.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Jd.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var q=m[p],r={},t=
0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Id.push(r)}Md=Z;Nd=st;var u=data.permissions||{},v=data.sandboxed_scripts,x=data.security_groups;qr();re=new qe(u);if(void 0!==v)for(var z=["sandboxedScripts"],w=0;w<v.length;w++){var y=v[w].replace(/^_*/,"");di[y]=z}tr(x);sw();js();al=!1;bl=0;if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)dl();else{lg(N,"DOMContentLoaded",dl);lg(N,"readystatechange",dl);if(N.createEventObject&&N.documentElement.doScroll){var B=
!0;try{B=!F.frameElement}catch(Q){}B&&el()}lg(F,"load",dl)}sq=!1;"complete"===N.readyState?uq():lg(F,"load",uq);am&&F.setInterval($l,864E5);
ai=(new Date).getTime();if(a){var I=ol("INIT");
}}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(N.referrer){var c=oh(N.referrer);b="cct.google"===lh(c,"host")}if(!b){var d=Bi("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,hg("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,hg("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:cg,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};ne.Cg&&(p.data.initialPublish=!0);m.push(p)},g="x"===mh(F.location,"query",!1,void 0,"gtm_debug");if(!g&&N.referrer){var h=oh(N.referrer);g="tagassistant.google.com"===lh(h,"host")}if(!g){var l=Bi("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&cg?f():a()})(tw);

})()
