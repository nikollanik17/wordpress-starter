<?php $items = get_field('items'); ?>
<?php if ($items && count($items) > 0) { ?>
    <section class="content-list">
        <div class="container">
            <?php foreach ($items as $item) { ?>
                <div class="row content-list__item">
                    <?php
                        $link = $item['link'];
                        $image = $item['image'];
                        $hasImage = $image && $image['sizes'] && $image['sizes']['large'];

                        $contentNumColumns = ($hasImage) ? '8' : '12';
                        $contentStyle = ($hasImage) ? '' : 'content-list__item__content--no-image';
                    ?>

                    <?php if ($hasImage) { ?>
                        <div class="col-md-4">
                            <div class="content-list__item__image">
                                <?php if ($link) { ?>
                                    <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
                                <?php } ?>

                                <img src="<?php echo $image['sizes']['large']; ?>" alt="" />

                                <?php if ($link) { ?>
                                    </a>
                                <?php } ?>
                            </div>
                        </div>
                    <?php } ?>

                    <div class="col-md-<?php echo $contentNumColumns; ?>">
                        <div class="content-list__item__content <?php echo $contentStyle; ?>">
                            <h3 class="content-list__item__content__title">
                                <?php echo $item['title']; ?>
                            </h3>

                            <div class="content-list__item__content__text">
                                <?php echo $item['text']; ?>
                            </div>

                            <?php if ($link) { ?>
                                <div class="content-list__item__content__link">
                                    <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
                                        <?php echo $link['title']; ?>
                                    </a>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </section>
<?php } ?>