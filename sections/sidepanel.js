function showElements(elements) {
    elements.forEach(element => element.classList.remove('hidden'));
}
function hideElements(elements) {
    elements.forEach(element => element.classList.add('hidden'));
}
function createElement(type, properties, parent) {
    let element = document.createElement(type);
    Object.assign(element, properties);
    parent.appendChild(element);
}
function createElementsFromArray(array, type, getProperties, parent) {
    array.forEach((item, index) => createElement(type, getProperties(item, index), parent));
}
function createSidepanelSelector(selector, sidepanels) {
    createElement(
        'btn',
        {
            innerHTML: 'None',
            className: 'text-big clickable blue-bg round-edges-small surround-shadow',
            onclick() {
                hideElements(sidepanels);
            }
        },
        selector
    )
    createElementsFromArray(
        sidepanels,
        'btn',
        (selectedSidepanel) => ({
            innerHTML: selectedSidepanel.dataset.name,
            className: 'text-big clickable blue-bg round-edges-small surround-shadow',
            style: {
                background: 'blue',
            },
            onclick() {
                hideElements(sidepanels);
                showElements([selectedSidepanel]);
            }
        }),
        selector
    );
}
createSidepanelSelector(
    document.querySelector('#chart-selector'),
    document.querySelectorAll('.sidepanel')
);