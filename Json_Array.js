// let uniqueId = 0;
// const itemList = [];

// // Add item to array and list on button click
// $("#create-button").click(function () {
//   const newText = $("#myInput").val();

//   if (newText) {
//     const id = ++uniqueId;
//     const item = {
//       id: id,
//       value: newText,
//     };

//     itemList.push(item);

//     $("#myInput").val(""); // Clear the input field
//     updateList();
//   } else {
//     alert("Please enter some text to add.");
//   }
// });

// // Update the displayed list whenever the array changes
// function updateList() {
//   $("#todoData").empty(); // Clear existing list items

//   for (const item of itemList) {
//     const listItem = $("<li>" + item.value + "</li>");
//     listItem.attr("id", item.id); // Add unique ID as attribute
//     $("#todoData").append(listItem);
//   }
// }

let uniqueId = 0;
const itemList = [];

// Add item to array and list on button click
$("#create-button").click(function () {
  const newText = $("#myInput").val();

  if (newText) {
    const id = ++uniqueId;
    const item = {
      id: id,
      value: newText,
      checkedStrike: false,
    };

    // for (const item of itemList) {
    //   if (checkedStrike) {
    //       item.checkedStrike == true;
    //   }
    // }
    itemList.push(item);
    $("#myInput").val(""); // Clear the input field
    updateList();
  } else {
    alert("Please enter some text to add.");
  }
});

// Update the displayed list whenever the array changes
function updateList() {
  $("#todoData").empty(); // Clear existing list items

  for (const item of itemList) {
    const listItem = $("<li>" + item.value + "</li>");
    listItem.attr("id", item.id);

    const closeButton = $('<span class="close">&#x2715;</span>');
    closeButton.click(function () {
      const itemToRemoveId = $(this).parent().attr("id");

      itemList.splice(
        itemList.findIndex((i) => i.id === parseInt(itemToRemoveId))
      );
      $(this).parent().remove();
    });

    listItem.append(closeButton);

    $("#todoData").append(listItem);
  }
}

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

$(document).on("click", ".close", function () {
  const index = $(this).parent().index();
  itemList.splice(index, 1);
  $(this).parent().hide();

  //   console.log(itemList);
});

//This is used to mark the completed Element.
$("#todoData").on("click", "li", function () {
  $(this).toggleClass("checked");
  // $("todoData").empty()
});
