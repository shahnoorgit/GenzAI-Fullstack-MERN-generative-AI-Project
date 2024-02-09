import { useState, useEffect } from "react";
import React from "react";
import { Card, Loader, Formfeild } from "../Components";

const RenderPost = ({ data, title }) => {
  console.log(data, "renDATA");
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loader, setloader] = useState(false);
  const [allposts, setallposts] = useState(null);
  const [searchterm, setsearchterm] = useState(null);
  const [SearchResults, setSearchResults] = useState(null);
  const [TimeOut, setTimeOut] = useState(null);
  console.log(searchterm);
  useEffect(() => {
    const fetchPosts = async () => {
      setloader(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const result = await response.json();
          setallposts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        setloader(false);
      }
    };
    fetchPosts();
  }, []);

  const HandleSearchChange = (e) => {
    setsearchterm(e.target.value);
    clearTimeout(TimeOut);

    setTimeOut(
      setTimeout(() => {
        const results = allposts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchterm.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchterm.toLocaleLowerCase())
        );
        setSearchResults(results);
      }, 500)
    );
  };
  return (
    <section className=" max-w-7xl mx-auto">
      <div>
        <h1 className=" font-extrabold text-[#fbfdf6] text-[32px]">
          The Community Showcase
        </h1>
        <p className=" mt-2 text-[#f5d0cc] text-[16px] max-w[500px]">
          Browse Through a Collection Of Visually Stunning AI Images Generated
          By GenZAI
        </p>
      </div>
      <div className=" mt-16">
        <Formfeild
          LabelName="Search Posts"
          type="text"
          name="text"
          placeholder="Search Posts"
          handleChange={HandleSearchChange}
          value={searchterm}
        />
      </div>
      <div className=" mt-10">
        {loader ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchterm && (
              <h2 className=" font-medium text-[#f5d0cc] text-xl mb-3">
                Showing Results For
                <span className=" text-white"> {searchterm} </span>
              </h2>
            )}
            <div className=" grid xl:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchterm ? (
                <RenderPost data={SearchResults} title="No Search Results" />
              ) : (
                <RenderPost data={allposts} title="No Posts Found!" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
