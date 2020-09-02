let links = document.querySelectorAll('.sidebar__link');

document.addEventListener("click", function(event) {
    if(event.target.classList.contains('sidebar__link')) {
        let idPanel = event.target.getAttribute("data-panel"),
            activeSidebar = document.querySelector('.sidebar__link-active'),
            activePanel = document.querySelector('.dashboard-panel-active');

        activeSidebar.classList.remove('sidebar__link-active');
        event.target.classList.add('sidebar__link-active');


        activePanel.classList.remove('dashboard-panel-active');

        document.getElementById(idPanel.replace('#', '')).classList.add('dashboard-panel-active');
    }
});