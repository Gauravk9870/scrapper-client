import { useEffect, useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import axios from "axios";
import { config } from "../utils/config";

const Home = () => {
 
  return (
    <div className=" h-screen">
      <Header  />
      <Table />
    </div>
  );
};

export default Home;
