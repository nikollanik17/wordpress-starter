<?php
    $backgroundImage = get_field('image');
    if ($backgroundImage && isset($backgroundImage['sizes'])) {
        $sectionStyle .= " background-image: url('" . $backgroundImage['sizes']['xxl'] . "');";
    }
?>

<section class="hero" style="<?php echo $sectionStyle; ?>">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="hero__content <?php echo 'hero__content--' . get_field('text_alignment') . '-aligned'; ?>">
                    <h1 class="hero__title"><?php the_field('title'); ?></h1>
                    <p class="hero__text"><?php the_field('text'); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>
