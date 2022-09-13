import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const OrderChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={80} dx={0} dy={25} interval={0} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="percentage" fill="#1E3D58" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OrderChart;
