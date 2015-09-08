<html ng-app="sindicato">
	<head>
		<title></title>
	</head>
	<body>
		<header>
			<h1>Sindicato</h1>
		</header>
		<div ng-view>
		</div>
		<footer>
			<?php echo date("Y"); ?> Sindicato
		</footer>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular/angular.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular-route/angular-route.js"></script>

		<script src="<?php echo get_template_directory_uri(); ?>/app/app.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/app-route.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/app-config.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/app-controller.js"></script>
	</body>
</html>
