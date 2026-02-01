window.addEventListener('DOMContentLoaded', () => {
    console.log("Senior-level system check: OK. Loading app...");
    
    if (typeof window.openTab === 'function') {
        window.openTab('now');
    } else {
        console.error("Critical error: openTab is not defined. Check your script order.");
    }
});

/**
 * 
 * @param {string} tabId
 */
window.openTab = function(tabId) {
    console.log("Switching to tab:", tabId);

    const windows = document.querySelectorAll('.window');
    const tabs = document.querySelectorAll('.tab-link');

    if (windows.length === 0) {
        console.warn("No windows found in DOM. Check your HTML IDs.");
        return;
    }

    windows.forEach(win => {
        win.classList.remove('active');
        win.style.display = 'none';
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const targetWindow = document.getElementById('win-' + tabId);
    if (targetWindow) {
        targetWindow.classList.add('active');
        targetWindow.style.display = 'block';
        
        if (window.state) {
            window.state.activeTab = tabId;
        }


    if (typeof window.renderWindowContent === 'function') {
            window.renderWindowContent(tabId);
        }
    } else {
        console.error(`Target window 'win-${tabId}' not found.`);
    }


    const activeBtn = document.querySelector(`[onclick*="openTab('${tabId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
};
