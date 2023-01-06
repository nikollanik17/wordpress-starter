<?php if (function_exists('gravity_form')) { ?>
    <section class="form">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <?php gravity_form(get_field('form_id'), false, false, false, '', false); ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
