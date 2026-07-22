import PropTypes from "prop-types";

const TestWithMockDataWithBranching = ({
  data,
  displayUnorderedList,
  handleClick,
}) => {
  return (
    <div>
      {displayUnorderedList ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}
              {item.first_name},{item.last_name},
              <a
                onClick={() => {
                  console.log("email link clicked");
                  handleClick();
                }}
              >
                {item.email}
              </a>
              {item.age > 50 ? "Senior" : "Not senior"}
            </li>
          ))}
        </ul>
      ) : (
        <ol>
          {data.map((item) => (
            <li key={item.id}>Last name: {item.last_name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

TestWithMockDataWithBranching.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,

  displayUnorderedList: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TestWithMockDataWithBranching;
