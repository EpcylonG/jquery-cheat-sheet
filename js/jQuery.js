export const eventsQuery = [
    '$(document).on("load", function(){ \n\tconsole.log("load"); \n})',
    '$("item").on("click", function(){ \n\tconsole.log("click"); \n})',
    '$("item").on("dblclick", function(){ \n\tconsole.log("dblclick"); \n})',
    '$("item").on("keydown", function(){ \n\tconsole.log("keydown"); \n})',
    '$("item").on("mousemove", function(){ \n\tconsole.log("mousemove"); \n})',
    '$("item").on("input", function(){ \n\tconsole.log("input"); \n})',
    '$("img").on("load", function(){ \n\tconsole.log("load"); \n})',
    '$("img").on("error", function(){ \n\tconsole.log("error"); \n})',
    '$("form").on("submit", function(){ \n\tconsole.log("submit"); \n})',
    '$("select").on("change", function(){ \n\tconsole.log("change"); \n})',
    '$("element").on("mouseover", function(){ \n\tconsole.log("mouseover"); \n})',
    '$("checkbox").on("checked", function(){ \n\tconsole.log("checked"); \n})',
    '$("ul").on("click", function(){ \n\tconsole.log("click"); \n})'
];

export const functionsQuery = [
    '$("<span></span>").text("test")',
    '$("element").remove()',
    '$("parent").append("$(child).text(`test`)")',
    '$("parent").prepend("$(child).text(`test`)")',
    '$("<span></span>").text("test").insertAfter("item")',
    '$("<span></span>").text("test").insertBefore("item")',
    '$("item").clone()',
    '$("item").addClass("class")',
    '$("item").removeClass("class")',
    '$("item").toggleClass("class")',
    '$("button").prop("disabled", true)',
    '$("button").prop("disabled", true)',
    '$("img").data("src")',
    '$("img").removeData("src")',
    '$("item").css("display", "none")',
    '$("item").css("display", "block")',
    '$("item").fadeIn()',
    '$("item").fadeOut()',
    '$("items").each(function(){ $(this).css(); })',
    '$("item").parent().css("font-weight", 300)',
    '$("item").children().each(function(){ \n$(this).css("font-weight", 300); \n})',
    '$(".class").each(function(){ \n$(this).css("font-weight", 300); \n})',
    '$("#id").css("font-weight", 300)',
    '$(".class").find("display:none")',
    '$("select").find(":selected")',
    '$("a").first().prop("href", "url")',
    '$("input").first().dialog()',
    '$("selector").children().remove()',
    '$("item").animate({}, 2000)'
];