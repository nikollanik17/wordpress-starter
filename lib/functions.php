<?php

/**
 * Fetch asset
 * Returns path to any graphical asset
 * @param string $asset
 * @example fetchAsset('js/main.bundle.js')
 * @return string
 */
function fetchAsset($asset) {
	return (get_template_directory_uri() . '/build/assets/' . $asset);
}