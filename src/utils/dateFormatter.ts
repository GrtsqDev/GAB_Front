export const formatDate = (date: Date = new Date()): string => {
    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const weekDay = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][date.getDay()];
    
    return `${weekDay} ${day} ${month}`;
};
