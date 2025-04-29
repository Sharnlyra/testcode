var h_defaults = { 
		showlogout	: false,
		eserviceid	: "",
		sysid		: "",
		spinshost	: "",
		showrateservice : false,
		isportal	: true,
		feedbackurl : "",
		jsaddons	: "",
		usehost		: "",
		userscpath		: "",
		logserver	: "",
		spinshost	: "",
		staticpage: false,
		noeservicelinks: false
			}

function init_h_config() {
	//var p = (location.protocol!="file:"?location.protocol:"http:");
	var p = location.protocol;
	//merge defaults
	for(x in h_defaults){
		if(typeof(h_config[x])!="undefined"){
			h_defaults[x] = h_config[x]
		}			
	}
	h_config = h_defaults;
	var host = "services2s-pre.nicehomes.com.sg";
	host 	 = location.host
	var dominopath 	= "/fi10/fi10297p.nsf/fi10/infoweb/common"; 
	var wspath		= "/web/fi10/infoweb1/common";
	var localpath 	= "/web/fi10/infoweb/common"
	
	host = getRSCHost();
	
	if ("" != h_config.usehost) {
		host = h_config.usehost;
	}	
	
	var path = (location.pathname.indexOf('.nsf') > -1 )? dominopath: wspath;	
	path = (location.protocol == "file:"?localpath:path);
	
	
	if ("" != h_config.userscpath) {
		path = h_config.userscpath;
	}	
	
	h_config.rschost 	= p + "//" + host + path;
	h_config.rschostname 	= p + "//" + host;
	
	var prodhosts = ["services2-pre.hdb.gov.sg",
	                 "services2.hdb.gov.sg",
	                 "services3.hdb.gov.sg",
	                 "services3-pre.hdb.gov.sg"];
	
	
	var getEservicesHost = function(){
		var eserhost		= "www20.hdb.gov.sg"
							
		if (host.indexOf('u.nicehomes') > -1) {
			eserhost = "wwwu.nicehomes.com.sg";
		}	else if (host.indexOf('uat.nicehomes') > -1) {
			eserhost = "wwwuat.nicehomes.com.sg";
		} else if (host.indexOf('uat.hdb.gov.sg') > -1 || host.indexOf('IS76')  > -1 || host.indexOf('IS77') > -1 ) {
			eserhost = "intranetuat.hdb.gov.sg";
		} else if (host.indexOf('u.hdb.gov.sg') > -1 || host.indexOf('IS66')  > -1 || host.indexOf('IS67')  > -1 ) {
			eserhost = "intranetu.hdb.gov.sg";
		} else if (prodhosts.indexOf(host) > -1) {
			eserhost = 'www20.hdb.gov.sg';
		}
		
		return eserhost;
		
	}
			
	
	var eserhost		= getEservicesHost();
	
	p = ( p == "file:" ? "http:" : p );
	
	h_config.eserhost	= p + "//" +eserhost;		
	h_config.eserdb		= p + "//" + eserhost + "/fi10/fi10200p.nsf" 
			
	
	var getLogServer = function(){		

		var dominoprodhosts = ["www.hdb.gov.sg","www20.hdb.gov.sg", "intranet.hdb.gov.sg", "intranet79.hdb.gov.sg"],		
			isprod	= (prodhosts.indexOf(host) > -1) || (dominoprodhosts.indexOf(host) > -1),
			isdomino = (location.pathname.indexOf('.nsf') > -1 );
		
		var server	= ( isprod ? "services2.hdb.gov.sg" : "services2u.nicehomes.com.sg" ); 
		
		if ( !isdomino ) { server = h_config.rschost; }		
		
		return server;
	}
	
		
	h_config.logserver  = getLogServer();
	
}

function getRSCHost(){
  
  var host = location.host.toLowerCase(); 
  
  if (host.indexOf('his66') > -1 || (host.indexOf('intranetu.') > -1)) {
	    return "intranetu.hdb.gov.sg"; 
  } else if ( host.indexOf('his76') > -1 || host.indexOf('intranetuat') > -1 ) {
    return "intranetuat.hdb.gov.sg";    
	} else if ( host.indexOf('www66a') > -1 || host.indexOf('wwwu.') > -1 ) {
	    return "wwwu.nicehomes.com.sg";
	} else if ( host.indexOf('www76a') > -1 || host.indexOf('wwwuat') > -1 ) {
    return "wwwuat.nicehomes.com.sg";    
	} else if ( host.indexOf('localhost') > -1 ) {
	    return "services2s-pre.nicehomes.com.sg";
	}else if ( host.indexOf('services2s-pre.nicehomes.com.sg') > -1 ) {
	    return "services2s-pre.nicehomes.com.sg";
	} else if ( host.indexOf('services2s.nicehomes.com.sg') > -1 ) {
	    return "services2s.nicehomes.com.sg";
	}else if ( host.indexOf('services3s.nicehomes.com.sg') > -1 ) {
	    return "services3s.nicehomes.com.sg";
	}else if ( host.indexOf('services3s-pre.nicehomes.com.sg') > -1 ) {
	    return "services3s-pre.nicehomes.com.sg";
	}else if ( host.indexOf('services2u.nicehomes.com.sg') > -1 ) {
	    return "services2u.nicehomes.com.sg";
	}else if ( host.indexOf('services2u-pre.nicehomes.com.sg') > -1 ) {
	    return "services2u-pre.nicehomes.com.sg";
	}else if ( host.indexOf('services3u.nicehomes.com.sg') > -1 ) {
	    return "services3u.nicehomes.com.sg";
	}else if ( host.indexOf('services3u-pre.nicehomes.com.sg') > -1 ) {
	    return "services3u-pre.nicehomes.com.sg";
	}else if ( host.indexOf('services2-pre.hdb.gov.sg') > -1 ) {
	    return "services2-pre.hdb.gov.sg";
	}else if ( host.indexOf('services2.hdb.gov.sg') > -1 ) {
	    return "services2.hdb.gov.sg";
	}else if ( host.indexOf('services20-pre.hdb.gov.sg') > -1 ) {
	    return "services20-pre.hdb.gov.sg";
	}else if ( host.indexOf('services20.hdb.gov.sg') > -1 ) {
	    return "services20.hdb.gov.sg";
	}else if ( host.indexOf('services3.hdb.gov.sg') > -1 ) {
	    return "services3.hdb.gov.sg";
	}else {
	    if(host.indexOf('.nsf') > -1){
	          return "www.hdb.gov.sg";
	          }else{
	                return "services2.hdb.gov.sg";
	    }
	}  
  
     
}

function writeHead(){
var h = h_config.rschost;
var markup = [
'	<meta charset="utf-8">',
'	<meta charset="utf-8">',
'	<meta http-equiv="X-UA-Compatible" content="IE=edge">',
'	<meta name="description" content="HDB InfoWEB">',
'	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes">',
'	',
'	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->',
'	',
'	<link rel="icon" type="image/png" href="/favicon.png">',
'	<!--[if IE]><link rel="shortcut icon" href="/favicon.ico"/><![endif]-->',
'	<link rel="stylesheet" href="' + h + '/css/fancybox/jquery.fancybox.css">',
'	<link rel="stylesheet" href="' + h + '/css/normalize.css">',
'	<link rel="stylesheet" href="' + h + '/css/foundation.css">',
'	<link rel="stylesheet" href="' + h + '/css/idangerous.swiper.css">',
'	<link rel="stylesheet" href="' + h + '/css/pikaday.css">',
'	<link rel="stylesheet" href="' + h + '/css/main.css">',
'	<link rel="stylesheet" href="' + h + '/css/i3.css">',
'	<link rel="stylesheet" href="' + h + '/css/datepicker.css">',
'	',
'	<script src="' + h + '/js/vendor/modernizr-2.8.0.min.js"></script>',
'	',
//'	<link href="http://fonts.googleapis.com/css?family=Cabin:400,600,700,400italic,600italic,700italic" rel="stylesheet" type="text/css">',
'	',
'	<!--[if IE]>',
'	    <link rel="stylesheet" type="text/css" href="' + h + '/css/ie.css" />',
'	<![endif]-->',
'	',
'	<!--[if lt IE 9]>',
'	  <script src="' + h + '/js/vendor/respond.min.js"></script>',
'	<![endif]-->'
];

document.write(markup.join(""));
}
init_h_config();
writeHead();