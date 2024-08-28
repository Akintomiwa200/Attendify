
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { time: '00:00', blue: 30, green: 20, orange: 10 },
    { time: '01:00', blue: 40, green: 30, orange: 15 },
    { time: '02:00', blue: 20, green: 40, orange: 60 },
    { time: '03:00', blue: 70, green: 50, orange: 25 },
    { time: '04:00', blue: 10, green: 60, orange: 50 },
    { time: '05:00', blue: 80, green: 70, orange: 35 },
    { time: '06:00', blue: 90, green: 80, orange: 40 },
];

const Linechart = () => (
    <div className="">

        <LineChart width={850} height={320} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="blue" stroke="#3b82f6" />
            <Line type="monotone" dataKey="green" stroke="#10b981" />
            <Line type="monotone" dataKey="orange" stroke="#f59e0b" />
        </LineChart>
    </div>
);

export default Linechart;
