<?php $iconItems = get_field('items'); ?>
<?php if ($iconItems && count($iconItems) > 0) { ?>
    <section class="icons">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="icons__row">
                        <?php foreach ($iconItems as $iconItem) { ?>
                            <div class="icons__row__item">
                                <?php if ($iconItem['image'] && $iconItem['image']['sizes']) { ?>
                                    <div class="icons__row__item__image">
                                        <img src="<?php echo $iconItem['image']['sizes']['large']; ?>" alt="" />
                                    </div>
                                <?php } ?>

                                <div class="icons__row__item__text">
                                    <?php echo $iconItem['text']; ?>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
