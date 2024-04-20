window.onload = function () {
    const anchorTags = document.querySelectorAll("a");
    anchorTags.forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
      });
    });
    const dropdownEl = document.querySelector("[data-dropdown-toggle]");
    if (dropdownEl) {
      dropdownEl.click();
    }
    const modalEl = document.querySelector("[data-modal-toggle]");
    if (modalEl) {
      modalEl.click();
    }
    const dateRangePickerEl = document.querySelector("[data-rangepicker] input");
    if (dateRangePickerEl) {
      dateRangePickerEl.focus();
    }
    const drawerEl = document.querySelector("[data-drawer-show]");
    if (drawerEl) {
      drawerEl.click();
    }
  };
  