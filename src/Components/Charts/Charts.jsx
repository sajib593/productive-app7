import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = ({data}) => {

    console.log(data);

    return (
        <>

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Ratings</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          layout="vertical"
          data={data.ratings}
          margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" tick={{ fill: "#555" }} />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#555" }}
            width={80}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8C00" barSize={20} radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>

<br /><br /><br />
    <div>
        <h1 className="text-5xl font-bold">Description</h1> <br />

        <h1 className="text-3xl font-semibold">{data.description}</h1><br /><br /><br />
    </div>
        
        </>
    );
};

export default Charts;