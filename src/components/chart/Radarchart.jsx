
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const data = [
    { subject: 'Category 1', A: 120, B: 110 },
    { subject: 'Category 2', A: 98, B: 130 },
    { subject: 'Category 3', A: 86, B: 130 },
    { subject: 'Category 4', A: 99, B: 100 },
    { subject: 'Category 5', A: 85, B: 90 },
    { subject: 'Category 6', A: 65, B: 85 },
];

const Radarchart = () => {
    return (
        <div className="text-xs w-full">

            <RadarChart outerRadius={90} width={290} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />

                <Radar name="Allowance Pending" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Actual Spending" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />

                <Legend />
            </RadarChart>
        </div>
    );
};

export default Radarchart;
