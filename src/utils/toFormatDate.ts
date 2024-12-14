export const toFormatDate = (date: Date) => {
    if (!(date instanceof Date)) {
        throw new Error('Invalid date object');
    }

    return date
        .toLocaleDateString('id-ID', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
        .replace(',', '')
        .replace(/\//g, '-');
};
