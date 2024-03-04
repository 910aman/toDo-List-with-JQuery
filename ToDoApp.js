// // this Code works without the Array.

// // Used for Remove/Hide the element.
// $(document).on("click", ".close", function () {
//   $(this).parent().hide();
// });

// //This is used to mark the completed Element.
// $("#todoData").on("click", "li", function () {
//   $(this).toggleClass("checked");
// });

// $(document).ready(function () {
//   $("#create-button").click(function () {
//     var inputValue = $("#myInput").val();
//     if (inputValue) {
//       var newLi = $("<li>").text(inputValue);
//    newLi.append($('<span class="close">&#x2715;</span>'));
//       $("#todoData").append(newLi);
//       console.log(newLi.text());
//       $("#myInput").val("");
//     } else {
//       alert("You must write something!");
//     }
//   });
// });





$(document).on("click", ".close", function () {
  const index = $(this).parent().index();
  itemList.splice(index, 1);
  $(this).parent().hide();

  console.log(itemList);
});

let uniqueId = 1;

const itemList = [];
// Add item to array and list on button click

$("#create-button").click(function () {
  const newText = $("#myInput").val();

  // if (newText) {
  const id = uniqueId++;

  const item = {
    id: id,
    value: newText,
  };

  itemList.push(item);
  // $("#myInput").val("");
  console.log(itemList);
  updateList();
  // } else {
  //   alert("Please enter some text to add.");
  // }
});

// Update the displayed list whenever the array changes
function updateList() {
  $("#todoData").empty(); // Clear existing list items
  $("#todoData").text(JSON.stringify(itemList, null, 2)); // Stringify with indentation
}
  // $("#todoData").empty();
  // for (const displayItem of itemList) {
  // const arrayJSON = $(`<li>${JSONarray}<div class="close">&#x2715</div></li>`);

  // console.log(pushItems)
  // $("#todoData").append(arrayJSON.value);

//This is used to mark the completed Element.
$("#todoData").on("click", "li", function () {
  $(this).toggleClass("checked");
  // $("todoData").empty()
});
// const pushItems = $("<li>").append(item);
// pushItems.append($('<div class="close">&#x2715</div>'));
// $("#todoData ul").each(function () {
// console.log(pushItems.text());
// });

// $(document).ready(function () {
//   $("#importJSON").click(function () {

//   const retrievedData = localStorage.getItem("myJsonObject");
//   const parsedData = JSON.parse(retrievedData);

//   console.log("Retrieved data:", parsedData);

// });
// });

// $("#saveJSON").click(function () {
//   // var json = JSON.stringify(itemList);

//   // var blob = new Blob([json], { type: "application/json" });

//   // var url = URL.createObjectURL(blob);

//   // var anchor = document.createElement("a");
//   // anchor.href = url;
//   // anchor.download = "array.json";
//   // anchor.click();
//   // $(document).ready(function () {
//     // const myData = {
//     //   name: "John Doe",
//     //   age: 30,
//     //   city: "New York",
//     // };
//     const jsonData = JSON.stringify(itemList);
//     localStorage.setItem("myJsonObject", jsonData);
//     console.log("Data saved successfully!"+jsonData);
// });
$(document).ready(function () {
  $("#importJSON").click(function () {
    const retrievedData = localStorage.getItem("myJsonObject");

    const parsedData = JSON.parse(retrievedData);
    console.log("Retrieved data:", parsedData);
  });

  $("#saveJSON").click(function () {
    
      const jsonData = JSON.stringify(itemList, null, 2);
      localStorage.setItem("myJsonObject", jsonData);
      console.log("Data saved successfully!" + jsonData);
    
  });
});
