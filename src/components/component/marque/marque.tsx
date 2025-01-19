const Marque = () => {
  const marqueData = [
    {
      img: "https://kitpro.site/outspace/wp-content/uploads/sites/296/2024/12/logoipsum-297-2.png",
    },
    {
      img: "https://kitpro.site/outspace/wp-content/uploads/sites/296/2024/12/logoipsum-262-2.png",
    },
    {
      img: "https://kitpro.site/outspace/wp-content/uploads/sites/296/2024/12/logoipsum-330-2.png",
    },
    {
      img: "https://kitpro.site/outspace/wp-content/uploads/sites/296/2024/12/logoipsum-237-2.png",
    },
  ];
  return (
    <div className="w-full h-fit mt-64 py-20 flex gap-10 px-12 ">
      {marqueData.map((img, index) => (
        <div key={index} className="w-full h-16">
          <figure>
            <img className="h-16" src={img.img} alt="" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Marque;
