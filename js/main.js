$(".burger img").click(function () {
  var thisImg = $(this).attr("src");
  $(".submenu").toggleClass("dropdown");
  if (thisImg == "./img/burger.png") {
    $(this).attr("src", "./img/burgerhover2.png");
  } else {
    $(this).attr("src", "./img/burger.png");
  }
});
// dropdown bar - 選擇影城 //
$(".options-container .option").click(function () {
  $(".option.active").removeClass("active");
});

$(".select-box").click(function () {
  $(".options-container").toggleClass("active");
});
$(".option").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-theater").text("請選擇影城");
    $(".select-theater").text(label);
  });
});
// dropdown bar - 選擇日期 //
$(".options-container2 .option2").click(function () {
  $(".option2.active").removeClass("active");
});

$(".select-box2").click(function () {
  $(".options-container2").toggleClass("active");
});
$(".option2").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-day").text("請選擇日期");
    $(".select-day").text(label);
  });
});
// dropdown bar - 選擇電影 //
$(".options-container3 .option3").click(function () {
  $(".option3.active").removeClass("active");
});

$(".select-box3").click(function () {
  $(".options-container3").toggleClass("active");
});
$(".option3").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-movie").text("請選擇電影");
    $(".select-movie").text(label);
  });
});
// dropdown bar - 選擇時間 //
$(".options-container4 .option4").click(function () {
  $(".option4.active").removeClass("active");
});

$(".select-box4").click(function () {
  $(".options-container4").toggleClass("active");
});
$(".option4").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-time").text("請選擇時間");
    $(".select-time").text(label);
  });
});

// 快搜空位 //

// dropdown bar - 選擇地區 //
$(".options-container5 .option5").click(function () {
  $(".option5.active").removeClass("active");
});

$(".select-box5").click(function () {
  $(".options-container5").toggleClass("active");
});
$(".option5").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-position").text("請選擇地區");
    $(".select-position").text(label);
  });
});
// dropdown bar - 選擇日期 //
$(".options-container6 .option6").click(function () {
  $(".option6.active").removeClass("active");
});

$(".select-box6").click(function () {
  $(".options-container6").toggleClass("active");
});
$(".option6").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-day2").text("日期");
    $(".select-day2").text(label);
  });
});
// dropdown bar - 時間（起） //
$(".options-container7 .option7").click(function () {
  $(".option7.active").removeClass("active");
});

$(".select-box7").click(function () {
  $(".options-container7").toggleClass("active");
});
$(".option7").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-starttime").text("時間(起)");
    $(".select-starttime").text(label);
  });
});
// dropdown bar - 人數 //
$(".options-container9 .option9").click(function () {
  $(".option9.active").removeClass("active");
});

$(".select-box9").click(function () {
  $(".options-container9").toggleClass("active");
});
$(".option9").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-people").text("人數");
    $(".select-people").text(label);
  });
});
// dropdown bar - 時間（止） //
$(".options-container10 .option10").click(function () {
  $(".option10.active").removeClass("active");
});

$(".select-box10").click(function () {
  $(".options-container10").toggleClass("active");
});
$(".option10").each(function () {
  var label = $(this).find("label").text();
  $(this).click(function () {
    $(".select-endtime").text("時間(止)");
    $(".select-endtime").text(label);
  });
});
