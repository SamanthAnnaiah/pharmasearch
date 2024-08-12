"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

export function Statpage({ manuf_data }) {
  function CustomTooltip(tipobject) {
    let { active, payload, label } = tipobject;
    if (active && payload && payload.length) {
      return (
        <div className="text-yellow-100 bg-black border rounded-xl p-1 text-sm">
          <p>{`${label} ${payload[0].value}`}</p>
        </div>
      );
    }

    return "nothing here";
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={manuf_data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="med_manufacturer"
          tick={{ fontSize: 16, fill: "yellow" }}
          angle={0} // Rotate labels
          textAnchor="middle" // Align text to the end of the tick mark
          interval={0}
        />
        <YAxis
          tick={{ fontSize: 15, fill: "yellow" }}
          dataKey={"med_manuf_numbers"}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey={"med_manuf_numbers"}
          fill="#8884d8"
          activeBar={<Rectangle fill="#8884a1" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
