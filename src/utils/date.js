export function differenceEnHeures(date1, date2) {
    const diffMs = Math.abs(date2.getTime() - date1.getTime()); // Différence en millisecondes
    return Math.ceil(diffMs / (1000 * 60 * 60)); // Conversion en heures
}