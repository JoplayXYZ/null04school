const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

let activeElement = null;

document.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.clientX + 10 + 'px';
    tooltip.style.top = e.clientY + 10 + 'px';
});

document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target && target !== activeElement) {
        activeElement = target;
        tooltip.textContent = target.getAttribute('data-tooltip');
        tooltip.style.opacity = 1;
    }
});

document.addEventListener('mouseout', (e) => {
    const related = e.relatedTarget;
    if (activeElement && (!related || !activeElement.contains(related))) {
        tooltip.style.opacity = 0;
        activeElement = null;
    }
});