<?php
/**
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'sindicato_sf');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'OQQSsar!&kwG<Ny5>U3BT4X&$cqSX&K|kG8uO[-g#+3o)O#Rp#w .l2sByB1[&L%');
define('SECURE_AUTH_KEY', '(]b%X5eym>kh_/2N|J2N]0V8tf9-1KpPcA):Snv+cs#3P-Y<sr:M8doP@OdeK6C2');
define('LOGGED_IN_KEY', 'nZg=~W[-`nI@c3_e^=QE/ne~WV? VZd2;|%| |.P+`$-Dh|+H($[8U,zgZZ,-CE0');
define('NONCE_KEY', 'K39>uUySe_`am_-7|[;Sz<ykz,| .e+mj=#R8tHj<N<W&k8phl|yF-=7NTC4!tMt');
define('AUTH_SALT', 'd-d1-b[aBS=<cV.(,fRV,m>^~BA;/CJ~r6)(QX)RCbF_u4Ps9]`hcXUKMdz7luxc');
define('SECURE_AUTH_SALT', '8u:rfpudU fs`KXVG6F`CPt*G(0gk|-Wcw%7Qy7LF2XzO,oYkm.8tIXsDZ*D#H3 ');
define('LOGGED_IN_SALT', 'ye{qh}k>.}Am>#-d[Sg>APshAx I_0t}Yql7hHwT*(TFs83E/hZQ$UeG8O2~%0no');
define('NONCE_SALT', '}ij>E>ZSOG7G]I=YZ5T=kmD4q|D6u?iN22|Cs7qO1r}86ZY@`OZ@uNQv(vV*Vih8');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix = 'wp_';

/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
