/************************************************
 * main.js
 * princetonmensclubsoccer.com
 ***********************************************/

function render_template(template, element_id, input) {

		// Fetch the template source
    $.ajax({
        url: template,
        cache: true,
				dataType: "text",
        success: function (data) {

						// Compile the template into HTML
						var template = Handlebars.compile(data);

						// Fill the desired block with content
						$('#' + element_id).html(template(input));
        }
    });
};

// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34194316-1', 'auto');
ga('send', 'pageview');
