import PropTypes from 'prop-types'
import styles from './Statistics.module.css'
import randomColor from 'randomcolor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.stat}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}>
              <span className={styles.label}>{stat.label} </span>
              <span className={styles.percentage}>{stat.percentage}</span>
            </li>
            ))}
      </ul>
    </section>
  )
}


Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.array
}

export default Statistics;