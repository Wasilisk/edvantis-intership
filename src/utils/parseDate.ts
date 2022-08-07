const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const parseDate = (timestamp: number) => {
    const date = new Date(timestamp);

    return `${month[date.getMonth()]} ${('0' + date.getDate()).slice(-2)}, ${date.getFullYear()}`;
}