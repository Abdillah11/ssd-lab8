import { useEffect, useState } from "react";
import { FetchData } from "../utils/services";

const TestingAPICalls = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData().then((responseData) => {
      setData(responseData);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id || item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default TestingAPICalls;
