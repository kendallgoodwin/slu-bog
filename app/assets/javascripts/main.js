$(document).ready(function() {
	
	function buttonListeners() {
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
				addEventListeners();
			},
			error: function(err) {
				console.log(err);
			}
		});
	});
}

	function addEventListeners() {
		$('.show-link').click(function(e) {
		e.preventDefault();
		console.log(this.href);
		$.ajax({ 
			url: this.href,
			method: 'GET',
			success: function(creature) {
				var homepage = $('#homepage');
				homepage.html('');

					
					homepage.append(
						'<h1>' + creature.name + '</h1><br><h3>' + creature.description + 
						'</h3><br><a href="/creatures/' + creature.id + '/edit"><button class="btn-primary edit-button">Edit</button></a>
						<a href="/creatures"><button class="btn-primary to-all-creatures">Go Back</button></a>' 
					);
				buttonListeners();
			},
			error: function(err) {
				console.log(err);
			}
		});
	});
	}






	buttonListeners();
});