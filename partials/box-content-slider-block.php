<?php $sliderItems = get_field('items'); ?>
<?php if ($sliderItems && count($sliderItems) > 0) { ?>
    <section class="box-slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="box-slider__slider">
                        <?php foreach ($sliderItems as $sliderItem) { ?>
                            <div class="box-slider__slider__item">
                                <?php
                                    $link = $sliderItem['link'];
                                    $image = $sliderItem['image'];
                                ?>

                                <?php if ($image && $image['sizes'] && $image['sizes']['large']) { ?>
                                    <div class="box-slider__slider__item__image">
                                        <?php if ($link) { ?>
                                            <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
                                        <?php } ?>

                                        <img src="<?php echo $image['sizes']['large']; ?>" alt="" />

                                        <?php if ($link) { ?>
                                            </a>
                                        <?php } ?>
                                    </div>
                                <?php } ?>

                                <div class="box-slider__slider__item__title">
                                    <?php echo $sliderItem['title']; ?>
                                </div>

                                <div class="box-slider__slider__item__text">
                                    <?php echo $sliderItem['text']; ?>
                                </div>

                                <?php if ($link) { ?>
                                    <div class="box-slider__slider__item__link">
                                        <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
                                            <?php echo $link['title']; ?>
                                        </a>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>

