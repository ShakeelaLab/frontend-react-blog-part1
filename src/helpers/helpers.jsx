export const longOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

export function formatDutchDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', longOptions);
}

export function readTime(content) {
    const words = content.trim().split(/\s+/).length;
    const minutes = words / 300;
    return Math.max(1, Math.ceil(minutes));
}
