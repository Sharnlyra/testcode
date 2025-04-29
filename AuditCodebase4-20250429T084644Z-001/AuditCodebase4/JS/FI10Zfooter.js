
	var i3footer = (function(parent, $){
		var h = h_config.rschost;
		var config = {
			footer_links : [
					{ name: 'home', url:'#', title: 'Home' },
					{ name: 'careers', url:'#', title: 'Careers' },
					{ name: 'mobile', url:'#', title: 'Mobile@HDB' },
					{ name: 'usefullink', url:'#', title: 'Useful Links' },
					{ name: 'contactus', url: '#', title: 'Contact Us' },
					{ name: 'termsofuse', url: '#', title: 'Terms of Use' },
					{ name: 'privacystatement', url: '#', title: 'Privacy Statement' },
					{ name: 'rateourwebsite', url: h + '/fi10/fi10400p.nsf/FI10FHDBService/?OpenForm', title: 'Rate Our Website' }
			],
			
			megafooterdata : [
	                      {
	                      	title: "About Us", url: "#" ,
	                      	sublist: [
	                      	          {title: "Vision &amp; Mission", url: "#" },
	                      	          {title: "Our Role", url: "#" },
	                      	          {title: "History", url: "#" },
	                      	          {title: "Organization", url: "#" },
	                      	          {title: "Achievement &amp; Accolades", url: "#" },
	                      	          {title: "Careers", url: "#" },
	                      	          {title: "Scholarships & Internships", url: "#" },
	                      	          {title: "Media &amp; Publications", url: "#" },
	                      	          {title: "Useful Links", url: "#" },
	                      	          {title: "Events", url: "#" }
	                      	          ]
	                      },
	                      {
	                      	title: " Residential", url: "#" ,
	                      	sublist: [
	                      	          {title: "Buying a Flat", url: "#" },
	                      	          {title: "Financing a Flat Purchase", url: "#" },
	                      	          {title: "Selling a Flat", url: "#" },
	                      	          {title: "Renting a Flat", url: "#" },
	                      	          {title: "Renting Out a Flat", url: "#" },
	                      	          {title: "Living in an HDB Flat", url: "#" },
	                      	          {title: "Parking", url: "#" }
	                      	          ]
	                      },
	                      {
	                      	title: "Community Life", url: "#" ,
	                      	sublist: [
	                      	          {title: "Spaces for Your Activities", url: "#" },
	                      	          {title: "Community Building Projects", url: "#" },
	                      	          {title: "Eco-Living", url: "#" },
	                      	          {title: "Neighbourliness", url: "#" },
	                      	          {title: "HDB Community Week (2014)", url: "#" },
	                      	          {title: "Community Partners", url: "#" },
	                      	          {title: "Heartland Stories", url: "#" },
	                      	          {title: "News and Upcoming Events", url: "#" }
	                      	          ]
	                      },
	                      {
	                      	title: "Business", url: "#" ,
	                      	sublist: [
	                      	          {title: "Commercial", url: "#" },
	                      	          {title: "Industrial", url: "#" },
	                      	          {title: "Building Professional", url: "#" },
	                      	          {title: "Renovate & Repair", url: "#" },
	                      	          {title: "Land Developer &amp; Land users", url: "#" },
	                      	          {title: "Tenderers", url: "#" },
	                      	          {title: "Estate Agencies &amp; Salespersons", url: "#" },
	                      	          {title: "Building Contractors &amp; Consultants", url: "#" }
	                      	          ]
	                      },
	                      {
	                      	title: "Car Park", url: "#" ,
	                      	sublist: [
	                      	          {title: "Types of HDB Car Parks", url: "#" },
	                      	          {title: "Car Park Signboards", url: "#" },
	                      	          {title: "Parking Lots Line Markings", url: "#" },
	                      	          {title: "Maps of Car Park Locations", url: "#" },
	                      	          {title: "Parking Offences", url: "#" },
	                      	          {title: "Season Parking", url: "#" },
	                      	          {title: "Short Term Parking", url: "#" },
	                      	          {title: "Rent Car Parks for Business Activities", url: "#" }	                      	          
	                      	          ]
	                      }	                      
	                      ],
	    sitetoolsdata : {
				"FOOT_FAQ_URL" : "#",
				"FOOT_SUB_URL" : "#",
				"FB_URL": "#",
				"TWITTER_URL": "#",
				"YOUTUBE_URL": "#"
				}
		} ;
		
		
		var footerNav = [

'<nav class="footer-nav small-12 large-9 columns" role="navigation">',
'    <ul class="footer-nav-list list small-block-grid-1 large-block-grid-5">',
'        <li class="footer-nav-col">',
'            <a href="/about-us/" class="footer-nav-link">',
'                About Us',
'            </a>',
'            <ul class="footer-nav-sublist list">',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/vision-mission/" class="footer-nav-link">Vision & Mission</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/our-role/" class="footer-nav-link">Our Role</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/our-logo/" class="footer-nav-link">Our Logo</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/history/" class="footer-nav-link">History</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/organisation-structure/" class="footer-nav-link">Organisation Structure</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/achievement-accolades/" class="footer-nav-link">Achievements & Accolades</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/careers/" class="footer-nav-link">Careers</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/scholarships-internships/" class="footer-nav-link">Scholarships & Internships</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/news-publications/" class="footer-nav-link">News & Publications</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/about-us/events-talks/" class="footer-nav-link">Events & Talks</a>',
'                </li>',
'            </ul>',
'        </li>',
'        <li class="footer-nav-col">',
'            <a href="/residential/" class="footer-nav-link">',
'                Residential',
'            </a>',
'            <ul class="footer-nav-sublist list">',
'                <li class="footer-nav-item">',
'                    <a href="/residential/buying-a-flat/" class="footer-nav-link">Buying a Flat</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/residential/financing-a-flat-purchase/" class="footer-nav-link">Financing a Flat Purchase</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/residential/servicing-your-hdb-loan/" class="footer-nav-link">Servicing Your HDB Loan</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/residential/selling-a-flat/" class="footer-nav-link">Selling a Flat</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/residential/renting-a-flat/" class="footer-nav-link">Renting a Flat</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/residential/renting-out-a-flat/" class="footer-nav-link">Renting Out a Flat</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/residential/living-in-an-hdb-flat/" class="footer-nav-link">Living in an HDB Flat</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/residential/season-parking/" class="footer-nav-link">Season Parking</a>',
'                </li>',
'            </ul>',
'        </li>',
'        <li class="footer-nav-col">',
'            <a href="/community/" class="footer-nav-link">',
'                Community',
'            </a>',
'            <ul class="footer-nav-sublist list">',
'                <li class="footer-nav-item">',
'                    <a href="/community/spaces-for-your-activities/" class="footer-nav-link">Spaces for Your Activities</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/community/playing-a-part-for-my-neighbourhood/" class="footer-nav-link">Playing a Part for My Neighbourhood</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/community/eco-living/" class="footer-nav-link">Eco-Living</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/community/neighbourliness/" class="footer-nav-link">Neighbourliness</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/community/hdb-community-week/" class="footer-nav-link">HDB Community Week</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/community/community-partners/" class="footer-nav-link">Community Partners</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/community/heartland-stories/" class="footer-nav-link">Heartland Stories</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/community/new-and-upcoming-events/" class="footer-nav-link">New & Upcoming Events</a>',
'                </li>',
'            </ul>',
'        </li>',
'        <li class="footer-nav-col">',
'            <a href="/business/" class="footer-nav-link">',
'                Business',
'            </a>',
'            <ul class="footer-nav-sublist list">',
'                <li class="footer-nav-item">',
'                    <a href="/business/commercial/" class="footer-nav-link">Commercial</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/business/industrial/" class="footer-nav-link">Industrial</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/business/building-professional/" class="footer-nav-link">Building Professional</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/business/renovation-repair-contractors/" class="footer-nav-link">Renovation & Repair Contractors</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/business/land-developer-land-users/" class="footer-nav-link">Land Developer & Land Users</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/business/tenderers/" class="footer-nav-link">Tenderers</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/business/estate-agencies-salespersons/" class="footer-nav-link">Estate Agencies & Salespersons</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/business/building-contractors-and-consultants/" class="footer-nav-link">Building Contractors & Consultants</a>',
'                </li>',
'            </ul>',
'        </li>',
'        <li class="footer-nav-col">',
'            <a href="/car-parks/" class="footer-nav-link">',
'                Car Parks',
'            </a>',
'            <ul class="footer-nav-sublist list">',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/types-of-hdb-car-parks/" class="footer-nav-link">Types of HDB Car Parks</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/car-park-signboards/" class="footer-nav-link">Car Park Signboards</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/parking-lots-line-markings/" class="footer-nav-link">Parking Lots Line Markings</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/car-park-location-map/" class="footer-nav-link">Car Park Location Map</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/parking-offences/" class="footer-nav-link">Parking Offences</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/season-parking/" class="footer-nav-link">Season Parking</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/short-term-parking/" class="footer-nav-link">Short Term Parking</a>',
'                </li>',
'                <li class="footer-nav-item">',
'                    <a href="/car-parks/renting-car-parks-for-business-activities/" class="footer-nav-link">Renting Car Parks for Business Activities</a>',
'                </li>',
'            </ul>',
'        </li>',
'    </ul>',
'</nav>'

		                 ];
		
		
		var footerSite = [
'                        <div class="footer-site-tools small-12 large-3 columns clearfix">',
'                            <div class="faq">',

'                                <h2 class="footer-title"><a class="footer-title-link" href="/e-Services/">FAQ</a></h2>',
'                                <a href="/e-Services/" class="btn faq-btn">',
'                                    Ask Us a Question <span class="icon icon-chevron-right"></span>',
'                                </a>',
'                            </div>',
'                            <div class="subscribe">',
'                                <h2 class="footer-title"><a class="footer-title-link" href="/e-Services/">HDB eAlert Service</a></h2>',
'                                <a href="/e-Services/" class="btn subscribe-btn">',
'                                    New Subscription <span class="icon icon-chevron-right"></span>',
'                                </a>',
'                            </div>',

'                            <div class="mobile-app">',
'                                <a href="#" class="mobile-app-link">',
'                                    <img src="' + h + '/images/content/hdb_mobile.jpg" alt="Mobile@HDB" class="img">',
'                                </a>',
'                            </div>',

'                            <div class="footer-social-channels">',
'                                <span class="footer-social-channels-text">Follow us</span>',
'                                <a href="https://www.facebook.com/SingaporeHDB" target="_blank" class="social-channel fb">',
'                                    <span class="visuallyhidden">Facebook</span>',
'                                    <span class="icon icon-facebook"></span>',
'                                </a>',
'                                <a href="https://twitter.com/singapore_hdb" target="_blank" class="social-channel twitter">',
'                                    <span class="visuallyhidden">Twitter</span>',
'                                    <span class="icon icon-twitter"></span>',
'                                </a>',
'                                <a href="https://www.youtube.com/user/singaporeHDB" target="_blank" class="social-channel youtube">',
'                                    <span class="visuallyhidden">Youtube</span>',
'                                    <span class="icon icon-youtube-play"></span>',
'                                </a>',
'                            </div>',
'                        </div>',
'                    </div>'
		                  ];
		
		
		var tpl = [

'                <footer class="footer">',
'                   <div class="wrapper row">',
'                    <div class="footer-eservice-links large-12 columns">',
'													<ul class="list inline-list"></ul>',
'										 </div>',
'										</div>',
'                    <div class="wrapper row">',
'                        <div class="back-to-top">',
'                            <a href="javascript:;" class="back-to-top-link js-back-to-top">',
'                                <span class="icon icon-chevron2-up"></span>',
'                                <span class="back-to-top-text">Back to top</span>',
'                            </a>',
'                        </div>',

(!h_config.staticpage?"":footerNav.join("")),

(!h_config.staticpage?"":footerSite.join("")),

'										</div>',	

'                    <div class="footer-bottom">',
'                        <div class="wrapper row">',
'                            <div class="small-12 columns">',
'                                <div class="footer-border"></div>',
'                            </div>',

//'                            <p class="last-review small-12 large-3 columns">Last reviewed on 16 March 2015</p>',
'                            ',
'                            <nav class="secondary-footer-nav  small-12 large-9 columns ">',
'                                <a href="/" class="secondary-footer-nav-link">Home</a>',
'                                <a href="/about-us/careers/" class="secondary-footer-nav-link">Careers</a>                                ',
'                                <a href="/" class="secondary-footer-nav-link">Contact Us</a>',
'                                <a href="/" class="secondary-footer-nav-link">Terms of Use</a>',
'                                <a href="/" class="secondary-footer-nav-link">Privacy Statement</a>',
'                                <a href="' + h_config.eserhost + '/fi10/fi10400p.nsf/FI10FHDBService/?OpenForm" class="secondary-footer-nav-link">Rate Our Website</a>',
'                            </nav>',
'                            <p class="footer-text small-12 columns">&copy; 2015 Housing & Development Board</p>',

'                        </div>',
'                    </div>',

'                </footer>',

'            </div> <!-- Inner wrap close -->',
'        </div> <!-- Off canvas wrap close -->'



		           ];
			
		
		document.write(tpl.join(""));

		
		//write jquery
		var vstr = navigator.userAgent;
	
		
		
		
		
	
		var jsmarkup = [
      //'<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-523196364d2b9b64" async></script>',		                
		  //'<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>',
		  '<script>window.jQuery || document.write(\'<scr\' + \'ipt src="' + h + '/js/vendor/jquery-1.11.1.min.js"><\/scr\' + \'ipt>\')</script>',
      '<scr' + 'ipt src="' + h_config.rschost + '/js/vendor/fastclick.js"></scr' + 'ipt>',
			'<scr' + 'ipt src="' + h_config.rschost + '/js/vendor/handlebars-v2.0.0.js"></scr' + 'ipt>',
			'<scr' + 'ipt src="' + h_config.rschost + '/js/vendor/jquery.cookie.js"></scr' + 'ipt>',
			'<scr' + 'ipt src="' + h_config.rschost + '/js/vendor/scrollto.min.js"></scr' + 'ipt>',
			'<scr' + 'ipt src="' + h_config.rschost + '/js/vendor/foundation.js"></scr' + 'ipt>',
		  '<scr' + 'ipt src="' + h_config.rschost + '/js/base/main.js"></scr' + 'ipt>',			
			'<scr' + 'ipt src="' + h_config.rschost + '/js/plugins.js"></scr' + 'ipt>',
			'<scr' + 'ipt src="' + h_config.rschost + '/js/modules.js"></scr' + 'ipt>',
			'<scr' + 'ipt src="' + h_config.rschost + '/js/dynamic-nav.js"></scr' + 'ipt>',

			'<scr' + 'ipt src="' + h_config.rschost + '/js/main.js"></scr' + 'ipt>',
			'<!-- insert for vendor js -->'
		];
		   
		
		document.write(jsmarkup.join(""));	
		
		var o = h_config.jsaddons;
		if("undefined" != typeof(o)) {
			var list = o.split(",");
			var jsaddons = [];
			var subfolder, name;
			for(i in list) {
				 name = list[i];
				 
				 if(!name){ continue; }
				 
				 subfolder = "plugins";
				
				if ("datepicker" == name ) { subfolder = "plugins"; }
				      
				if ("filereader" == name) {
					subfolder = "vendor/FileReader";
					//include dependency
					jsaddons.push( '<scr' + 'ipt src="' + h_config.rschost + '/js/' + subfolder + '/swfobject.js"></scr' + 'ipt>');
					name = "jquery.FileReader"
				}
				
				jsaddons.push( '<scr' + 'ipt src="' + h_config.rschost + '/js/' + subfolder + '/' + name + '.js"></scr' + 'ipt>');
			}			
			document.write(jsaddons.join(""))
		}			
		
		
		
		return parent;
		
	}(i3footer || {}, {}));
	