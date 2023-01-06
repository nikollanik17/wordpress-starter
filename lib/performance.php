<?php

/**
 * Add Async tag for enqueueScripts
 * Allows scripts to be loaded asynchronously
 * @param string $url
 * @return string
 */
add_filter('clean_url', 'addAsyncForScript', 11, 1);
function addAsyncForScript($url) {
	if (strpos($url, '#asyncload') === false)
		return $url;

	else if (is_admin())
		return str_replace('#asyncload', '', $url);
	else
		return str_replace('#asyncload', '', $url)."' async='async";
}

/**
 * Add Defer tag for enqueueScripts
 * Allows scripts to be loaded last
 * @param string $url
 * @return string
 */
add_filter('clean_url', 'addDeferForScript', 11, 1);
function addDeferForScript($url) {
	if (strpos($url, '#deferload') === false)
		return $url;

	else if (is_admin())
		return str_replace('#defercload', '', $url);
	else
		return str_replace('#deferload', '', $url)."' defer='defer";
}

