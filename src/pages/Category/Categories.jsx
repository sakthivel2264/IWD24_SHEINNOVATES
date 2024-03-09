import Header from "../../components/Header";
import Layout from "../../layout/Layout";


const Categories = () => {
  
  const handleButtonClick = (item) => {
    
    if (item === "Childhood") {
      window.location.href = "/childhood";
    }
    if (item === "Adulthood") {
      window.location.href = "/adulthood";
    }
    if (item === "Pregnant Women") {
      window.location.href = "/pregnantwomen";
    }
    if (item === "Middle Age") {
      window.location.href = "/middleage";
    }
    if (item === "Old Age") {
      window.location.href = "/senioryears";
  }
};

  return (
    <>
    <Layout>
      <Header />
      <div className="container  py-20 mx-auto my-1o flex justify-center items-center gap-20 flex-col">
        <ul className="space-y-4 flex gap-20">
          {["Childhood", "Adulthood", "Pregnant Women", "Middle Age", "Old Age"].map((item, index) => (
            <li key={index}>
              <button
                className="bg-indigo-700 text-white text-xl px-3 py-2 rounded-2xl hover:bg-purple-900 transition-colors duration-300"
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
    </>
  );
};

export default Categories;
