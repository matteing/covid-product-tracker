import Head from "next/head";

const Product = ({ product }) => {
  return (
    <div className="flex mb-2 p-4 bg-white rounded-md border border-gray-400  items-center justify-center cursor-pointer">
      <div className="mr-4">
        <img className="w-12 h-12" src={product.icon} alt={product.name} />
      </div>
      <div className="flex-grow">
        <strong className="text-gray-800">{product.name}</strong>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div class="container mx-auto">
      <div className="flex flex-col min-h-screen">
        <div className="p-4 pt-8  pb-8 border border-gray-400 border-t-0">
          <h1>
            The COVID-19 Product Tracker{" "}
            <span className="text-sm text-primary">by Makerlog</span>
          </h1>
          <h3 className="subtitle mb-4">
            A directory of tech products aiming to help solve the global
            pandemic.
          </h3>
          <button className="font-base text-md rounded-full block p-2 pl-5 pr-5 bg-white border border-gray-400">
            Add a product
          </button>
        </div>
        <div className="md:grid md:grid-cols-3  bg-gray-100  flex-grow border border-gray-400 border-t-0 border-b-0">
          <div className="col-span-2 p-4 ">
            <div className="title mb-4">
              <h3 className="font-bold">Remote work tools</h3>
              <h4 className="subtitle">
                Go remote with the best of the tech industry
              </h4>
            </div>
            <Product
              product={{
                name: "Slack",
                description: "The best group chat tool for remote teams",
                icon:
                  "https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png"
              }}
            />
            <Product
              product={{
                name: "Slack",
                description: "The best group chat tool for remote teams",
                icon:
                  "https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png"
              }}
            />
            <Product
              product={{
                name: "Slack",
                description: "The best group chat tool for remote teams",
                icon:
                  "https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png"
              }}
            />
            <Product
              product={{
                name: "Slack",
                description: "The best group chat tool for remote teams",
                icon:
                  "https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png"
              }}
            />
          </div>
          <div className="p-4 ">
            <h3 className="mb-2 font-bold">Categories</h3>
            <ul>
              <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                Working from home 💻
              </li>
              <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                Education & resources 📝
              </li>
              <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                Physical services 🩺
              </li>
              <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                Indie made 💚
              </li>
              <li className="cursor-pointer p-2 border border-gray-400 border-t-0 border-b-0 border-r-0">
                Publicly built 🔥
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 border border-gray-400 border-b-0">Hello</div>
      </div>
    </div>
  );
};

export default Home;
