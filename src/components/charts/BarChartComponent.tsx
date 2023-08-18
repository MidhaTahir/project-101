import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="userId" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
