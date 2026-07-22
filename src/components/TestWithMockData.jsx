import PropTypes from "prop-types";

const TestWithMockData = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}
            {item.first_name},
            {item.last_name},
            {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

TestWithMockData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      age: PropTypes.number,
    })
  ).isRequired,
};

export default TestWithMockData;
