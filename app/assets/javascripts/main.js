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
						'<h1>Creatures</h1>
							<% @creatures.each do |creature| %>
								<div class="panel panel-info">
			  					<div class="panel-body">
										<h3><a href="/creatures/' + creature.id + '">' + creature.name + '</a></h3> 
			  					</div>
								</div>		
							<% end %>'
					);
				});
			},
			error: function(err) {
				console.log(err);
			}
		});
	});
