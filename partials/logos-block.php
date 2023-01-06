<?php
    $logos = get_field('logos');
    $columns = get_field('columns');
    if (!$columns || !is_numeric($columns)) $columns = 4;
?>

<?php if ($logos && count($logos) > 0) { ?>
    <section class="logos">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="logos__table">
                        <?php $i = 0; foreach ($logos as $logo) { $i++; ?>
                            <?php if ($i % $columns == 1) { ?>
                                <div class="logos__table__row">
                            <?php } ?>

                            <div class="logos__table__row__item">
                                <img src="<?php echo $logo['sizes']['xl']; ?>" alt="" />
                            </div>

                            <?php if ($i % $columns == 0 || $i == count($logos)) { ?>
                                </div>
                            <?php } ?>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>

