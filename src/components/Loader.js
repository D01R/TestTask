export const Loader = () => {
    const loader = document.createElement('div')
    loader.classList.add('loading_beat')
    loader.innerHTML = `
        <svg width="16" height="12">
            <polyline id="back" points = "1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
            <polyline id="front" points = "1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
        </svg>
    `

    return loader
}