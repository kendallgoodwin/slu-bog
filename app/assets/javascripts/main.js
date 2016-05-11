$(document).ready(function() {
	
	$('button.to-all-creatures').click(function(e) {
		e.preventDefault();

		$.ajax({ 
			url: '/creatures',
			method: 'GET',
			success: function(data) {
				var homepage = $('#homepage');
				homepage.html('');

				data.forEach(function(creatures) {
					homepage.append(
						'<a href="/creatures/' + creatures.id + '" class="show-link"><h1>' + creatures.name + '</h1></a>'
					);
				});
			},
			error: function(err) {
				console.log(err);
			}
		});
	});

		$('#show-link').click(function(e) {
		e.preventDefault();

		$.ajax({ 
			url: '/creatures/' + creature.id,
			method: 'GET',
			success: function(data) {
				var homepage = $('#homepage');
				homepage.html('');

				data.forEach(function(creature) {
					homepage.append(
						'<h1>' + creature.id + '</h1><br><h3>' + creature.description + '</h3>'
					);
				});
			},
			error: function(err) {
				console.log(err);
			}
		});
	});

});