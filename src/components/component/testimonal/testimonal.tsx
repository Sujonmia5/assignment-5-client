import TestimonalCard from "./testimonalCard";

const Testimonal = () => {
  return (
    <div className="px-12 mx-auto my-32">
      <div className="mb-16 text-center">
        <h2 className="text-4xl text-info font-exo font-medium">
          Our client Feedback
        </h2>
      </div>
      <div className="grid grid-cols-4 mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <TestimonalCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
