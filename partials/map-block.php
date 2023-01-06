<?php
    $center = get_field('center');
    $zoom = get_field('zoom');
    $pins = get_field('pins');
?>

<?php if ($center && $zoom) { ?>
    <section class="map"
        data-lat="<?php echo $center['lat']; ?>"
        data-lng="<?php echo $center['lng']; ?>"
        data-zoom = "<?php echo $zoom; ?>">

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="map__holder"></div>

                    <?php if ($pins && count($pins) > 0) { ?>
                        <div class="map__pins-holder">
                            <?php foreach ($pins as $pin) { ?>
                                <div class="map__pins-holder__pin"
                                     data-lat="<?php echo $pin['location']['lat']; ?>"
                                     data-lng="<?php echo $pin['location']['lng']; ?>">

                                    <div class="map__pins-holder__pin__title">
                                        <?php echo $pin['title']; ?>
                                    </div>

                                    <div class="map__pins-holder__pin__description">
                                        <?php echo $pin['description']; ?>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>