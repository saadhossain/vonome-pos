export const formatDateTime = () => {
    // Get the current date and time
    const now = new Date();

    // Convert to Bangladeshi local time (GMT+6)
    const bangladeshTime = new Date(now.getTime() + 0 * 60 * 60 * 1000);
    // Format time as HH:mm:ss
    const time = bangladeshTime.toTimeString().split(' ')[0]; // HH:mm:ss

    // Format date as DD/MM/YYYY
    const date = bangladeshTime.toISOString().split('T')[0];
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    return { time, date: formattedDate };
};
