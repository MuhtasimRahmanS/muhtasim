import React from "react";
import castle from "../public/castle.png";
import orange from "../public/orange.png";
import tour from "../public/tour.png";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold"> Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        <div className="card card-compact  bg-base-100 border-2 border-primary">
          <figure>
            <Image
              alt="image"
              src={castle}
              style={{ height: "250px", width: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Castle </h2>
            <p> Residential service website</p>
            <p>
              Users can view property <br />
              Users can view property details after login <br />
              Users can update profile info like name, photo Url
            </p>
            <p>
              Technologies used in this project: <br />
              Tailwind | React js | Firebase{" "}
            </p>

            <div className="card-actions justify-end">
              <Link href={"https://github.com/MuhtasimRahmanS/Castle"}>
                <button className="btn btn-primary">Github</button>
              </Link>
              <Link href={"https://castle-residential.netlify.app/"}>
                <button className="btn btn-primary">Live</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 border-2 border-primary">
          <figure>
            <Image
              alt="image"
              src={orange}
              style={{ height: "250px", width: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Orange Cafe </h2>
            <p> Restaurent management website</p>
            <p>
              Users can purchase food <br />
              Users can search for food from the search bar <br />
              Users can filter food by the category name
            </p>
            <p>
              Technologies used in this project: <br />
              Tailwind | React js | Firebase | Node js | Express js | MongoDB |
              JWT
            </p>

            <div className="card-actions justify-end">
              <Link href={"https://github.com/MuhtasimRahmanS/Orange_Cafe"}>
                <button className="btn btn-primary">Github</button>
              </Link>
              <Link href={"https://orange-cafe.netlify.app/"}>
                <button className="btn btn-primary">Live</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 border-2 border-primary">
          <figure>
            <Image
              alt="image"
              src={tour}
              style={{ height: "250px", width: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> TourBuzz </h2>
            <p> Tourist guide website</p>
            <p>
              Users can add tourist spot <br />
              Users can sort tourist spots by the tour cost <br />
              Users can filter tourist spots by the country name
            </p>
            <p>
              Technologies used in this project: <br />
              Tailwind | React js | Firebase | Node js | Express js | MongoDB
            </p>

            <div className="card-actions justify-end">
              <Link href={"https://github.com/MuhtasimRahmanS/Tour_Buzz"}>
                <button className="btn btn-primary">Github</button>
              </Link>
              <Link href={"https://tourbuzz.netlify.app/"}>
                <button className="btn btn-primary">Live</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
