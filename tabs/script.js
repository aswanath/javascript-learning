function switchTab(event, id) {
  //disable every button
  const tabButtons = document.getElementsByClassName("tab-btn");
  for (var tab of tabButtons) {
    tab.classList.remove("active");
  }

  //hide every content
  const tabContents = document.getElementsByClassName("tab-content");
  for (var content of tabContents) {
    content.classList.remove("active");
  }

  //update the selected values only.
  event.currentTarget.classList.add("active");
  const selectedTab = document.getElementById(id);
  selectedTab.classList.add("active");
}
