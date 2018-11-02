//regular way
let list = document.querySelector("#list-of-stuff")
console.log("list", list)
//jquery way

let jqList = $("#list-of-stuff")

$(".delete").click( () => {
    console.log("Hey, that was easy!")
})

// $("#destroyer").click( () => {
//     $(".song-container").slideToggle()
// })

//or

$("#destroyer").click( function() {
    $(".song-container").slideToggle()
    $(this).toggleClass("isRed")
})

//or

// $("#destroyer").click( function() {
//     $(".song-container").slideToggle()
//     $(this).css("color", "red")
// })

$(".article--main").addClass("isRed")
$(".article--main").eq(1).addClass("isBlue")
$(".article--main").hover(function() {
    $(this).toggleClass("isGreen")
})

console.log("jq", jqList)