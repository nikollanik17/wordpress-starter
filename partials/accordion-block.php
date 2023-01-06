<?php $items = get_field('items'); ?>
<?php if ($items && count($items) > 0) { ?>
    <section class="accordion">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <?php foreach ($items as $item) { ?>
                        <div class="accordion__item">
                            <div class="accordion__title">
                                <?php echo $item['title']; ?>
                            </div>

                            <div class="accordion__text">
                                <?php echo $item['text']; ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
