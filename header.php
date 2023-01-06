<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php is_front_page() ? bloginfo('name') : wp_title(''); ?></title>
    <?php wp_head(); ?>
</head>

<body class="example">
    <header class="header" role="banner">
        <div class="container">
            <div class="col-md-12">
                <div class="header__left">
                    <a href="<?php echo get_home_url(); ?>" class="header__logo">
                        Logo
                    </a>
                </div>

                <div class="header__right">
                    <nav class="header__navigation">
                        <?php
                            if (has_nav_menu('main-menu')) {
                                wp_nav_menu(array('theme_location' => 'main-menu'));
                            }
                        ?>
                    </nav>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>
    </header>

    <div class="main">
