import React, { useState, useEffect } from "react";
import "./Welcome.css";
import Axios from "axios";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Result from "./Result";
import { Button, TextField } from "@material-ui/core";
import Footer from "./Footer";

const Welcome = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [data, setData] = useState([]);

  //to show or hide result component.
  useEffect(() => {
    if (fname !== "") {
      setShowResult(false);
    }
  }, [fname, mname]);

  //automatically disapper the result after 10sec.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResult(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [showResult]);

  //calling the api.
  const fetchData = async (e) => {
    setIsLoading(true);

    const { data } = await Axios.get(
      "https://love-calculator.p.rapidapi.com/getPercentage",
      {
        params: { fname: fname, sname: mname },
        headers: {
          "x-rapidapi-key":
            "774b046672msh09d1915660e0c2bp1d1f8ajsn7ab24765d35e",
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        },
      }
    );
    setData(data);
    // console.log(data);
    setIsLoading(false);
    setShowResult(true);
  };
  //   end calling the api.

  const isNotValid = fname === "" || mname === "";

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (isNotValid) {
      toast.warn("Please Enter the Name.");
      console.log("Enter the name");
      return;
    }
    console.log("male->", mname, " female->", fname);
    fetchData();
    setFname("");
    setMname("");
  };

  return (
    <div className="welcome">
      <ToastContainer />
      <h1 className="welcome__header">Love Tester to test love</h1>
      <div className="welcome__form">
        <form onSubmit={formSubmissionHandler}>
          <TextField
            className="welcome__mname"
            type="text"
            placeholder="Enter Your Name."
            value={mname}
            color="secondary"
            onChange={(e) => setMname(e.target.value)}
          />

          <TextField
            type="text"
            placeholder="Enter Your Crush Name."
            value={fname}
            color="secondary"
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            className="welcome__button"
          >
            Result
          </Button>
        </form>
      </div>
      {isLoading && (
        <ReactLoading
          className="welcome__loading"
          type="spinningBubbles"
          color="#fff"
          height={"10%"}
          width={"10%"}
        />
      )}
      {showResult ? <Result data={data} /> : ""}
      <Footer />
    </div>
  );
};

export default Welcome;
