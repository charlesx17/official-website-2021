document.getElementById("add").addEventListener("click", () => {
  document.querySelector(".modal-form").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal-form").style.display = "none";
});

/// Filter Box
const searchFilter = () => {
  let filter = document.querySelector(".search").value.toUpperCase();
  console.log(filter);

  let membersList = document.querySelector(".members-list");

  let tr = membersList.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let textValue = td.textContent;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
