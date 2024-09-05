import styles from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

// function City() {
//   // TEMP DATA
//   const currentCity = {
//     cityName: 'Lisbon',
//     emoji: '🇵🇹',
//     date: '2027-10-31T15:59:59.138Z',
//     notes: 'My favorite city so far!',
//   };
// }

function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
