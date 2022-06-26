import PropTypes from 'prop-types';
import {
  StatisticsWrap,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
} from 'components/Statistics/statistics.styled';
export default function Statistics({ title, stats }) {
  return (
    <StatisticsWrap>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(stat => {
          return (
            <StatisticItem key={stat.id}>
              <StatisticLabel>{stat.label}</StatisticLabel>
              <StatisticLabel>{stat.percentage}%</StatisticLabel>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticsWrap>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
