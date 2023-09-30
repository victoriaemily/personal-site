import {} from './fade';

function isElementInViewport(el: HTMLElement): boolean {
    if (typeof window !== 'undefined') {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        // Calculate the visible percentages for both height and width
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);

        // Calculate the area of the element that's visible
        const visibleArea = (visibleHeight * visibleWidth) / (rect.height * rect.width);

        return visibleArea >= 0.2; // Check if at least 20% of the element is visible
    }
    return false;
}

function handleScroll() {
    if (typeof window !== 'undefined') {
        const elements = document.querySelectorAll<HTMLElement>('.fade-in-component');

        elements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('fade-in-active');
            }
        });
    }
}

if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Trigger the initial check when the page loads
    window.addEventListener('load', handleScroll);
}



export {};
