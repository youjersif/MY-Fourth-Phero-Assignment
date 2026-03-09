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

function deleteCard(button) {
    const card = button.closest(".job-card");
    card.dataset.status = "deleted";
    card.remove(); 
    updateCounts();
    filterCards(currentTab);
}


function updateCounts() {
    const cards = document.querySelectorAll(".job-card");
    let total = 0, interview = 0, rejected = 0;

    cards.forEach(card => {
        if (card.dataset.status !== "deleted") total++;
        if (card.dataset.status === "interview") interview++;
        if (card.dataset.status === "rejected") rejected++;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("interviewcount").innerText = interview;
    document.getElementById("rejectedcount").innerText = rejected;


    const jobCountEl = document.querySelector(".abilable-jobs > div:nth-child(2)");
    if (currentTab === "all") jobCountEl.innerText = total + " jobs";
    else if (currentTab === "interview") jobCountEl.innerText = interview + " jobs";
    else if (currentTab === "rejected") jobCountEl.innerText = rejected + " jobs";
}




function checkEmptyTabs() {
    const interviewSection = document.getElementById("interview-section");
    const rejectedSection = document.getElementById("rejected-section");
    const allCards = document.querySelectorAll(".job-card");

    const interviewCards = Array.from(allCards).filter(c => c.dataset.status === "interview");
    const rejectedCards = Array.from(allCards).filter(c => c.dataset.status === "rejected");


    if (currentTab === "interview" && interviewCards.length === 0) {
        document.getElementById("blankpage").classList.remove("hidden");
    } else if (currentTab === "rejected" && rejectedCards.length === 0) {
        document.getElementById("blankpage").classList.remove("hidden");
    } else {
        document.getElementById("blankpage").classList.add("hidden");
    }
}



switchTab(currentTab);
updateCounts();