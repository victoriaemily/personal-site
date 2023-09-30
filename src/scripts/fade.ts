function isElementInViewport(el: HTMLElement): boolean {
    if (typeof window !== 'undefined') {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
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
