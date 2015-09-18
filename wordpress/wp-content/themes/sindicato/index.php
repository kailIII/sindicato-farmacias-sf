
<!doctype html>
<html ng-app="sindicato">
	<head>
		<meta charset="utf-8">
		<base href="<?php echo get_site_url(); ?>/">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/bower_components/bootstrap/dist/css/bootstrap.min.css">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/app/directives/nav-bar/nav-bar.css">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/app/directives/simulador/simulador.css">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
	</head>
	<body class="content">
		<header>
			<h1><a href="<?php echo get_site_url(); ?>">Sindicato</a></h1>
		</header>
		<nav-bar></nav-bar>
		<div class="row clearfix">
			<div class="container-fluid pull-left col-xs-6 col-md-8" ng-view></div>
			<right-side  class="pull-right col-xs-6 col-md-4"></right-side>
		</div>
		<footer class="footer navbar navbar-default">
			<div class="container-fluid">
				<?php echo date("Y"); ?> Sindicato
			</div>
		</footer>
		<!-- angular components added by bower -->
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular/angular.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular-route/angular-route.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/jquery/dist/jquery.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<!-- angular application -->
		<script src="<?php echo get_template_directory_uri(); ?>/app/app.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/app-route.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/app-config.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/app-controller.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/app-slug-controller.js"></script>
		<!-- angular directives -->
		<script src="<?php echo get_template_directory_uri(); ?>/app/directives/nav-bar/nav-bar.directive.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/directives/right-side/right-side.directive.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/directives/breadcrum/breadcrum.directive.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/app/directives/simulador/simulador.directive.js"></script>
	</body>
</html>
