/* This file is part of Mura CMS. 

	Mura CMS is free software: you can redistribute it and/or modify 
	it under the terms of the GNU General Public License as published by 
	the Free Software Foundation, Version 2 of the License. 

	Mura CMS is distributed in the hope that it will be useful, 
	but WITHOUT ANY WARRANTY; without even the implied warranty of 
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
	GNU General Public License for more details. 

	You should have received a copy of the GNU General Public License 
	along with Mura CMS.  If not, see <http://www.gnu.org/licenses/>. 

	Linking Mura CMS statically or dynamically with other modules constitutes the preparation of a derivative work based on 
	Mura CMS. Thus, the terms and conditions of the GNU General Public License version 2 ("GPL") cover the entire combined work.
	
	However, as a special exception, the copyright holders of Mura CMS grant you permission to combine Mura CMS with programs
	or libraries that are released under the GNU Lesser General Public License version 2.1.
	
	In addition, as a special exception, the copyright holders of Mura CMS grant you permission to combine Mura CMS with 
	independent software modules (plugins, themes and bundles), and to distribute these plugins, themes and bundles without 
	Mura CMS under the license of your choice, provided that you follow these specific guidelines: 
	
	Your custom code 
	
	• Must not alter any default objects in the Mura CMS database and
	• May not alter the default display of the Mura CMS logo within Mura CMS and
	• Must not alter any files in the following directories.
	
	 /admin/
	 /tasks/
	 /config/
	 /requirements/mura/
	 /Application.cfc
	 /index.cfm
	 /MuraProxy.cfc
	
	You may copy and distribute Mura CMS with a plug-in, theme or bundle that meets the above guidelines as a combined work 
	under the terms of GPL for Mura CMS, provided that you include the source code of that other code when and as the GNU GPL 
	requires distribution of source code.
	
	For clarity, if you create a modified version of Mura CMS, you are not obligated to grant this special exception for your 
	modified version; it is your choice whether to do so, or to make such modified version available under the GNU General Public License 
	version 2 without this exception.  You may, if you choose, apply this exception to your own modified versions of Mura CMS. */var dashboardManager={loadUserActivity:function(e){var t="index.cfm",n="muraAction=cDashboard.loadUserActivity&siteID="+e+"&cacheid="+Math.random(),r=$("#userActivityData");r.html('<img class="loadProgress" src="assets/images/ajax-loader.gif">');return!1},loadPopularContent:function(e){var t="index.cfm",n="muraAction=cDashboard.loadPopularContent&siteID="+e+"&cacheid="+Math.random(),r=$("#popularContentData");r.html('<img class="loadProgress" src="assets/images/ajax-loader.gif">');$.get(t+"?"+n,function(e){r.html(e).animate({opacity:"hide"},1e3,null,function(){r.animate({opacity:"show"},1e3)})});return!1},loadRecentComments:function(e){var t="index.cfm",n="muraAction=cDashboard.loadRecentComments&siteID="+e+"&cacheid="+Math.random(),r=$("#recentCommentsData");r.html('<img class="loadProgress" src="assets/images/ajax-loader.gif">');$.get(t+"?"+n,function(e){r.html(e).animate({opacity:"hide"},1e3,null,function(){r.animate({opacity:"show"},1e3)})});return!1},loadFormActivity:function(e){var t="index.cfm",n="muraAction=cDashboard.loadFormActivity&siteID="+e+"&cacheid="+Math.random(),r=$("#recentFormActivityData");r.html('<img class="loadProgress" src="assets/images/ajax-loader.gif">');$.get(t+"?"+n,function(e){r.html(e).animate({opacity:"hide"},1e3,null,function(){r.animate({opacity:"show"},1e3)})});return!1},loadEmailActivity:function(e){var t="index.cfm",n="muraAction=cDashboard.loadEmailActivity&siteID="+e+"&cacheid="+Math.random(),r=$("#emailBroadcastsData");r.html('<div id="emailBroadcasts" class="separate"><h3>Email Broadcasts</h3><img class="loadProgress" src="assets/images/ajax-loader.gif"></div>');$.get(t+"?"+n,function(e){r.html(e).animate({opacity:"hide"},1e3,null,function(){r.animate({opacity:"show"},1e3)})});return!1}};