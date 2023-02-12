import { React, useState } from "react";
import './App.css';
import { Header } from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";

function App(props) {
  const deleteItem = (singleTodo) => {
    console.log("Delete function is working", singleTodo);
  }

  let todos = [
    {
      number: 1,
      title: "Ergonomic Office Chair",
      description:
        "Stay comfortable and productive with this adjustable and supportive ergonomic office chair",
    },
    {
      number: 2,
      title: "Luxury Leather Backpack",
      description:
        "A stylish and durable leather backpack perfect for everyday use",
    },
    {
      number: 3,
      title: "Smart Wireless Charging Pad",
      description:
        "A convenient and fast charging pad for all your wireless charging devices",
    },
    {
      number: 4,
      title: "Noise Cancelling Headphones",
      description:
        "Experience premium sound quality and noise cancellation with these comfortable headphones",
    },
    {
      number: 5,
      title: "Waterproof Action Camera",
      description:
        "Capture all your adventures with this waterproof and durable action camera",
    },
    {
      number: 6,
      title: "Fitness Tracker Watch",
      description:
        "Keep track of your fitness goals and monitor your health with this smartwatch",
    },
    {
      number: 7,
      title: "Portable Bluetooth Speaker",
      description:
        "Enjoy high-quality sound on-the-go with this compact and powerful Bluetooth speaker",
    },
    {
      number: 8,
      title: "Kindle E-reader",
      description:
        "Read your favorite books in a glare-free, paper-like display with Amazon's Kindle e-reader",
    },
    {
      number: 9,
      title: "Smart Home Security Camera",
      description:
        "Keep an eye on your home and monitor activity with this smart security camera",
    },
    {
      number: 10,
      title: "Wireless Charging Power Bank",
      description:
        "Charge your devices on-the-go with this compact and powerful wireless charging power bank",
    },
    {
      number: 11,
      title: "Stylish Leather Wallet",
      description:
        "A sleek and functional leather wallet that is perfect for everyday use",
    },
    {
      number: 12,
      title: "Smart LED TV",
      description:
        "Enjoy stunning visuals and endless entertainment options with this high-quality smart LED TV",
    },
    {
      number: 13,
      title: "Smart Robot Vacuum",
      description:
        "Keep your home clean and tidy with this smart and efficient robot vacuum",
    },
    {
      number: 14,
      title: "Portable Air Conditioner",
      description:
        "Stay cool and comfortable anywhere with this compact and portable air conditioner",
    },
    {
      number: 15,
      title: "Electric Pressure Cooker",
      description:
        "Cook delicious meals quickly and easily with this smart and efficient electric pressure cooker",
    },
    {
      number: 16,
      title: "Smart Scale",
      description:
        "Monitor your weight and body composition with this smart and accurate digital scale",
    },
  ];

  return (
    <>
      <Header tabOne="Project" tabThree="Contact" />
      <Todos todos={todos} onDelete={deleteItem} />
      <Footer />
    </>
  );
}

export default App;
