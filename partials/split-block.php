<?php
    $items = array();
    $columns = get_field('columns');
    if ($columns && count($columns) == 1 && isset($columns[0])) {
        if (isset($columns[0]['left_column']) && isset($columns[0]['left_column'][0])) {
            $items[] = $columns[0]['left_column'][0];
        }

        if (isset($columns[0]['right_column']) && isset($columns[0]['right_column'][0])) {
            $items[] = $columns[0]['right_column'][0];
        }
    }
?>

<?php if (count($items) == 2) { ?>
    <section class="split-block">
        <div class="container">
            <div class="row">
                <?php $i = 0; foreach($items as $item) { $i++; ?>
                    <div class="col-md-6">
                        <?php if ($item['acf_fc_layout'] == 'image') { ?>
                            <div class="split-block__image <?php echo ($i == 1) ? 'split-block__image--left' : 'split-block__image--right'; ?>">
                                <?php if ($item['image'] && $item['image']['sizes'] && $item['image']['sizes']['xl']) { ?>
                                    <img src="<?php echo $item['image']['sizes']['xl']; ?>" alt="" />
                                <?php } ?>
                            </div>
                        <?php } ?>

                        <?php if ($item['acf_fc_layout'] == 'text') { ?>
                            <div class="split-block__text <?php echo ($i == 1) ? 'split-block__text--left' : 'split-block__text--right'; ?>">
                                <?php if ($item['title']) { ?>
                                    <div class="split-block__text__title">
                                        <h3><?php echo $item['title']; ?></h3>
                                    </div>
                                <?php } ?>

                                <?php if ($item['text']) { ?>
                                    <div class="split-block__text__text">
                                        <?php echo $item['text']; ?>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>
<?php } ?>