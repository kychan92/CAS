var header = $('.header-nav');

if (header.length > 0) {
	$.ajax('header.html', {
		complete : function(res) {
			if (res) {
				if (res.readyState==4 && res.status==200) {
					header.html(res.responseText);
				}
			}
		}
	});
}

var plugin = $('.plugin-placeholder');

if (plugin.length > 0) {
	$.ajax('plugin.html', {
		complete : function(res) {
			if (res) {
				if (res.readyState==4 && res.status==200) {
					plugin.html(res.responseText);
				}
			}
		}
	});
}