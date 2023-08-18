import { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import axios from "axios";

const PieChartComponent = () => {
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

  // Function to generate random color for each slice
  const getRandomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="userId" nameKey="title" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={index} fill={getRandomColor()} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
