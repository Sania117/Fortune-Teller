$("button").click(function(){
    var name = $(".name").val();
    var activity = $(".activity").val();
    var month = (parseInt($(".month").val()) * 672);
    console.log(month);
    $(".result").text(name +", you will " + activity + " " + month + " times by the year 2075");
});