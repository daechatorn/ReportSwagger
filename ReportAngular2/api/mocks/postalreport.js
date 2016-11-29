'use strict';

module.exports = {
  getCustomers: getCustomers,
  getMenus: getMenus,
  genReport: genReport,
  getStatusReport: getStatusReport,
  getViewerReport: getViewerReport
};

function getViewerReport(req, res, next) {
	
	console.log(req.swagger.params.reportId.value);
	var view = "<html><head></head><body><form action=\"../OpenDocument/1611081455/CrystalReports/viewrpt.cwr\" method=\"get\"><input type=\"hidden\" name=\"id\" value=\"390301\" ><input type=\"hidden\" name=\"apstoken\" value=\"edhlscrsd005:6400@390501JuLUo8ow0wGr0hJQ4UYba2b390499JWgdfiMYWSu9OdOK2yKIPWI\" ></form><script type=\"text/javascript\">document.forms[0].submit();</script></body></html>";
	res.json(view);
}


function getStatusReport(req, res, next) {	
	
	console.log(req.swagger.params.reportId.value);
	
	var status  = {PROCESSING :"processing" , COMPLETE:"complete", FAILED: "failed", PAUSED: "paused", PENDING: "pending"};
	
	res.json(status.COMPLETE);
}

function genReport(req, res, next) {
  
  console.log(req.swagger.params);
  var reportId = "390301";
  res.json(reportId);
}

function getCustomers(req, res, next) {
    console.log(req.swagger.params.web_session_id.value);
    res.json([
      {"customerId":"48854","customerName":"0083","level":"1"},{"customerId":"48912","customerName":"123213","level":"2"},
      {"customerId":"50106","customerName":"www","level":"2"},{"customerId":"48855","customerName":"0083-0123","level":"1"},
      {"customerId":"48830","customerName":"0104jobname","level":"1"},{"customerId":"49495","customerName":"jobName2","level":"2"},
      {"customerId":"48851","customerName":"0104jobname-01","level":"1"},{"customerId":"48852","customerName":"0104jobname-001","level":"2"},
      {"customerId":"48853","customerName":"0104jobname-0001","level":"3"},{"customerId":"48856","customerName":"0104jobname-00001","level":"4"},
      {"customerId":"48857","customerName":"0104jobname-000001","level":"5"},{"customerId":"48858","customerName":"0104jobname-0000001","level":"6"},
      {"customerId":"49886","customerName":"0200","level":"1"},{"customerId":"49044","customerName":"0638A","level":"1"},
      {"customerId":"49352","customerName":"0721","level":"1"},{"customerId":"49432","customerName":"0721_001","level":"2"},
      {"customerId":"49433","customerName":"0721_001_01","level":"3"},{"customerId":"49966","customerName":"0721_001_01_01","level":"4"},
      {"customerId":"49746","customerName":"0721_002","level":"2"},{"customerId":"45311","customerName":"0721_5","level":"1"},
      {"customerId":"49766","customerName":"0721's son","level":"2"},{"customerId":"45730","customerName":"0721_6","level":"2"},
      {"customerId":"46270","customerName":"0721_3","level":"3"},{"customerId":"48610","customerName":"test","level":"4"},
      {"customerId":"49351","customerName":"asdf","level":"2"},{"customerId":"49472","customerName":"win430","level":"2"},
      {"customerId":"49466","customerName":"WinandSyaTest","level":"2"}
    ]);
}

function getMenus(req, res, next) {
    console.log(req.swagger.params.web_session_id.value);
    res.json([
      {"eventClass":"1","sectionDesc":"Administration","displayName":"Page Maintenance","displayDesc":"Add, Change or Delete pages from the Postage Reports Application"},
      {"eventClass":"39","sectionDesc":"Internal Use Only","displayName":"AAAA","displayDesc":"333"},
      {"eventClass":"16","sectionDesc":"Internal Use Only","displayName":"CASS Summary Report","displayDesc":"CASS Summary"},
      {"eventClass":"23","sectionDesc":"Reports","displayName":"**PAF Expiration Report**","displayDesc":"== No longer used since 2016 =="},
      {"eventClass":"24","sectionDesc":"Reports","displayName":"Address Management Report","displayDesc":"Address Management Report"},
      {"eventClass":"25","sectionDesc":"Reports","displayName":"Address Quality Lookup Report","displayDesc":"Address Direct Lookup Report"},
      {"eventClass":"20","sectionDesc":"Reports","displayName":"CASS Mail Report","displayDesc":"Determine how many and what percentage of a customers statements were matched with valid addresses and zip codes by the CASS software for a particular run month. "},
      {"eventClass":"32","sectionDesc":"Reports","displayName":"Carrier Postage Report","displayDesc":"Carrier Postage Report on dev"},
      {"eventClass":"37","sectionDesc":"Reports","displayName":"Combined USPS Postage Report","displayDesc":"Postal Reports 7.4.0"},
      {"eventClass":"31","sectionDesc":"Reports","displayName":"Consolidated Postage Expense Report","displayDesc":"Calculating postage expense for both standard mail and first-class mail in a single consolidated report"},
      {"eventClass":"6","sectionDesc":"Reports","displayName":"Daily Corp Postage Report","displayDesc":"Daily Corp Postage"},
      {"eventClass":"7","sectionDesc":"Reports","displayName":"Daily Corp Postage by CDF Report","displayDesc":"Daily Corp Postage by Customer Defined Fields"},
      {"eventClass":"30","sectionDesc":"Reports","displayName":"Full Service CAPS Audit Report","displayDesc":"Postal Reports 7.0.1"},
      {"eventClass":"29","sectionDesc":"Reports","displayName":"Full Service Daily Manifest Report","displayDesc":"Postal Reports 7.0.1"},
      {"eventClass":"27","sectionDesc":"Reports","displayName":"Full Service Postage Expense Report","displayDesc":"Full Service Postage Expense 4 Unit Test"},
      {"eventClass":"38","sectionDesc":"Reports","displayName":"IPA Postage Report","displayDesc":"Postal Reports 7.7.0"},
      {"eventClass":"33","sectionDesc":"Reports","displayName":"Mailing Summary by Corp Report","displayDesc":"Postal Reports 7.1.8"},
      {"eventClass":"17","sectionDesc":"Reports","displayName":"Metered Postage Report","displayDesc":"Metered Postage"},
      {"eventClass":"36","sectionDesc":"Reports","displayName":"Metered Postage by CDF Report","displayDesc":"Postal Reports 7.2.0"},
      {"eventClass":"14","sectionDesc":"Reports","displayName":"Postage Expense Report","displayDesc":"View First Class Mail postage information by market for one or more mailed corps."},
      {"eventClass":"3","sectionDesc":"Reports","displayName":"Postage Expense by CDF Report","displayDesc":"Postage Expense Report by Customer Defined Fields"},
      {"eventClass":"4","sectionDesc":"Reports","displayName":"Postage Summary by CDF Report","displayDesc":"Postage Summary Report by Customer Defined Fields"},
      {"eventClass":"18","sectionDesc":"Reports","displayName":"Postage Summary by Postal Sort Report","displayDesc":"View a summary of postage by weight and rate category for statements mailed for specific time periods."},
      {"eventClass":"35","sectionDesc":"Reports","displayName":"Pulled Packages Report","displayDesc":"Postal Reports 7.1.12"},
      {"eventClass":"26","sectionDesc":"Reports","displayName":"Summary Returned Mail Count Report","displayDesc":"Summary Returned Mail Count Report for Postal Reports 6.0.5"}
    ]);
}