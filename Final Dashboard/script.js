// Task 1: General Dashboard Script
function task1_dashboard() {
    const divElement = document.getElementById('viz1732176605300');
    const vizElement = divElement.getElementsByTagName('object')[0];

    if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

// Task 2: Time Restricted Dashboard (12 PM - 4 PM)
function task2_dashboard() {
    const now = new Date();
    const currentHour = now.getHours();
    const startHour = 12;
    const endHour = 16;
    const vizContainer = document.getElementById("vizContainer");

    if (currentHour >= startHour && currentHour < endHour) {
        const divElement = document.getElementById('vizContainer');
        const vizElement = divElement.getElementsByTagName('object')[0];

        if (divElement.offsetWidth > 800) {
            vizElement.style.width = '1709px';
            vizElement.style.height = '883px';
        } else if (divElement.offsetWidth > 500) {
            vizElement.style.width = '1709px';
            vizElement.style.height = '883px';
        } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '727px';
        }

        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    } else {
        vizContainer.innerHTML = `
            <div style="text-align: center; color: red; font-weight: bold;">
                Task 2 Dashboard is only accessible between 12PM To 4PM.
            </div>
        `;
    }
}

// Task 3: Time Restricted Dashboard (3 PM - 6 PM)
function task3_dashboard() {
    const now = new Date();
    const currentHour = now.getHours();
    const startHour = 15;
    const endHour = 18;
    const divElement = document.getElementById('viz1731698687948');

    if (currentHour >= startHour && currentHour < endHour) {
        const vizElement = divElement.getElementsByTagName('object')[0];

        if (divElement.offsetWidth > 800) {
            vizElement.style.width = '100%';
            vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
        } else if (divElement.offsetWidth > 500) {
            vizElement.style.width = '100%';
            vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
        } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '777px';
        }

        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    } else {
        divElement.innerHTML = `
            <div style="text-align: center; color: red; font-weight: bold;">
                Task 3 Dashboard is only accessible between 3PM To 6PM.
            </div>
        `;
    }
}

//Training Project Dashboard
function training_dashboard() {
    var divElement = document.getElementById('viz1716881005052');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '727px';
    }
    
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

// Initialize all dashboards
document.addEventListener("DOMContentLoaded", function () {
    task1_dashboard();
    task2_dashboard();
    task3_dashboard();
    training_dashboard();

});
