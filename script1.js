 $(document).ready(function() {
    var $b = $('button.learn-more'), $p = $('p.hide');

    $b.click(function() {
        var i = $b.index(this);
        $p.hide().eq(i).show();
    })
});