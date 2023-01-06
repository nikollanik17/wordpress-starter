<?php
    $link = get_field('link');
    $sectionStyle = '';
    $backgroundColor = get_field('background_color');
    $backgroundImage = get_field('background_image');

    if ($backgroundColor) {
        $sectionStyle .= ' background-color:' . $backgroundColor . ';';
    }

    if ($backgroundImage && isset($backgroundImage['sizes'])) {
        $sectionStyle .= " background-image: url('" . $backgroundImage['sizes']['xxl'] . "');";
    }
?>

<section class="cta" style="<?php echo $sectionStyle; ?>">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="cta__title">
                    <?php the_field('title'); ?>
                </div>

                <?php if ($link) { ?>
                    <div class="cta__link">
                        <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
                            <?php echo $link['title']; ?>
                        </a>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</section>
