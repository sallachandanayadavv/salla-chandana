/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pexels-shemae-sabo-39046866-7230079.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-commerce Website 🎉",
    description:
      "Developed a comprehensive ecommerce platform for selling a wide range of products online.Implemented front-end using HTML,CSS and Javascript.",
    url: "https://github.com/Sallachandanayadav/E-commerce-website.git",
  },
  {
    title: "Youtube Clone",
    description:
      "A front page clone of YouTube created using HTML and CSS, designed to mimic the layout and style of the popular video-sharing platform. This project demonstrates a solid understanding of web design principles and responsive layout techniques.",

    url: "https://github.com/Sallachandanayadav/Youtube-Clone.git",
  },
  {
    title: "E-commerce Website-2",
    description:
      "A shopping e-commerce website allows users to browse, search, and purchase products online. It includes features like product pages, shopping cart, and secure checkout. Users can register, log in, and track orders through their profiles. The site integrates with payment gateways for secure transactions. An admin dashboard manages inventory, orders, and product updates.",
    url: "https://github.com/Sallachandanayadav/E-Commerce-3.git",
  },
  {
    title: "Bank Management System(Java)",
    description:
      "Bank management system aka ATM Simulator System. It functions similarly to the normal ATM.This ATM Simulator System has functionalities like Opening Banking Account, Deposit, Withdrawl,MiniStatement, Pin Change etc.",
    url: "https://github.com/Sallachandanayadav/Bank-Management-System.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
