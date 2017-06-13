var timing_rate = 70;
var timing_delay = 2000;

var get_new = function() {
    $.getJSON("sample").done(
        function(data) {
            var msg_temp = data.message;
            if (data.message.length > 140) {
                msg_temp = data.message.substring(0, 130) + "...";
            }
            show_message(msg_temp, data.author, data.href);
        }
    );

}

var show_message = function(msg, author, href) {
    $("#pt-wrap").append(
        $("<div>").attr("id", "pt-message").text(msg),
        $("<div>").attr("id", "pt-name").text("― " + author + " ―")
    );

    $("#pt-togo").attr('href', href);

    $("#pt-message").textillate({
        initialDelay: 0,
        autoStart: true,
        in: {
            effect: 'flipInX',
            delayScale: 1.5,
            delay: 50
        },
        out: {
            effect: 'flipInX',
            delayScale: 1.5,
            delay: 50
        }
    })

    var timing = timing_rate * msg.length + timing_delay;
    //console.log(timing);
    setTimeout(hide, timing);
}

var hide = function() {
    $("#pt-message").remove();
    $("#pt-name").remove();
    get_new();
}
