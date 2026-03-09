let currentTab = 'all';

const tabActive = ["bg-blue-500", "text-white"];
const tabInactive = ["bg-transparent", "text-[#64748B]"];

function switchTab(tab) {
    currentTab = tab;
    const tabs = ["all", "interview", "rejected"];
    tabs.forEach(t => {
        const tabEl = document.getElementById("tab-" + t);
        if (t === tab) {
            tabEl.classList.remove(...tabInactive);
            tabEl.classList.add(...tabActive);
        } else {
            tabEl.classList.remove(...tabActive);
            tabEl.classList.add(...tabInactive);
        }
    });
    filterCards(tab);
}

function filterCards(tab) {
    const cards = document.querySelectorAll(".job-card");
    cards.forEach(card => {
        if (tab === "all") {
            card.style.display = card.dataset.status === "deleted" ? "none" : "block";
        } else {
            card.style.display = card.dataset.status === tab ? "block" : "none";
        }
    });
    checkEmptyTabs();
}

function moveToInterview(button) {
    const card = button.closest(".job-card");
    if (card.dataset.status === "interview") return; 

    card.dataset.status = "interview";
    const statusBtn = card.querySelector(".status-btn");
    statusBtn.innerText = "INTERVIEW";
    statusBtn.classList.add("text-green-500", "border-green-600");
    updateCounts();
    filterCards(currentTab);
}

function moveToRejected(button) {
    const card = button.closest(".job-card");
    if (card.dataset.status === "rejected") return;

    card.dataset.status = "rejected";
    const statusBtn = card.querySelector(".status-btn");
    statusBtn.innerText = "REJECTED";
    statusBtn.classList.add("text-red-500", "border-red-600");

    updateCounts();
    filterCards(currentTab);
}


switchTab(currentTab);
updateCounts();