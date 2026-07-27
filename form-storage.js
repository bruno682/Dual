var DualForm = (function () {
    var STORAGE_KEY = 'dualFormData';

    function getAll() {
        try {
            var raw = sessionStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            return {};
        }
    }

    function saveStep(stepKey, data) {
        var all = getAll();
        all[stepKey] = data;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    }

    function clear() {
        sessionStorage.removeItem(STORAGE_KEY);
    }

    return { getAll: getAll, saveStep: saveStep, clear: clear };
})();
