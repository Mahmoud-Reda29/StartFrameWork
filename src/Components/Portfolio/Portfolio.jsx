/** @format */

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import Header from "../Utility/Header/Header";

Modal.setAppElement("#root"); 

const images = Object.values(import.meta.glob('../../assets/portfolio/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage("");
  };

  return (
    <div className="pt-40 pb-10">
      <div className="container flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl my-4 font-bold text-[#2c3e50] uppercase">Portfolio Component</h2>
        <Header color={"#2c3e50"} />
        <div className="grid gap-5 px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg group overflow-hidden cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img src={image} alt={`Portfolio ${index + 1}`} className="w-full" />
              <div className="absolute opacity-0 top-0 left-0 right-0 bg-green-300 h-full flex justify-center items-center group-hover:opacity-100 transition-opacity ease-in-out duration-700">
                <FaPlus className="text-6xl text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed top-36 left-96  w-1/2 mx-auto overflow-hidden flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
      >
        <div className="relative border-none rounded-xl">
          <img src={modalImage} alt="Modal" className="w-full" />
        </div>
      </Modal>
    </div>
  );
}

export default Portfolio;
