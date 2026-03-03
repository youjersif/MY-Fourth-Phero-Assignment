let currentTabs = 'all'
const tabActive = ["bg-blue-500", "text-white"]
const tabInactive = ["bg-transparent", "text-[#64748B]"]


function switchTab(tab) {
    console.log(tab)
    const tabs = ["all", "interview", "rejected"]
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t)
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
}
function moveToInterview(button) {

    const card = button.closest(".job-card")
    document.getElementById("interview-cards").appendChild(card)
}

function moveToRejected(button) {

    const card = button.closest(".job-card")
    document.getElementById("rejected-cards").appendChild(card)
}

switchTab(currentTabs)