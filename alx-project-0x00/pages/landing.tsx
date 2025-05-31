import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className="flex flex-wrap gap-4 mt-4">
        <Button title="Small Button" className="text-sm rounded-sm" />
        <Button title="Medium Button" className="text-md rounded-md" />
        <Button title="Large Button" className="text-lg rounded-lg" />
        <Button title="Full Rounded Button" className="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
