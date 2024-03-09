import Header from "../../components/Header";
import Layout from "../../layout/Layout";
import Footer from "../../components/Footer";

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

  // Array of descriptions corresponding to each category
  const details = [
    "Health & Safety",
    "Description for Adulthood",
    "Description for Pregnant Women",
    "Description for Middle Age",
    "Description for Old Age"
  ];

  return (
    <>
      <Layout>
        <Header />
        <div className="container  py-20 mx-auto my-1o flex justify-center items-center gap-20 ">
          <ul className="space-y-4 flex  gap-5">
            {["Childhood", "Adulthood", "Pregnant Women", "Middle Age", "Old Age"].map((item, index) => (
              <li key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <button
                  className="bg-indigo-700 text-white text-xl px-3 py-2 rounded-2xl hover:bg-purple-900 transition-colors duration-300 drop-shadow-lg"
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </button>
                {/* Access the corresponding description using index */}
                <p className="mb-3 py-2 font-normal text-gray-700 dark:text-gray-400">{details[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Categories;
