import { useEffect } from "react";
import Card from "./components/Card";

import twitter from "./config";

export default function App() {
  useEffect(() => {
    getDta();
    return () => {
      console.log("unmount");
    };
  }, []);
  const getDta = async () => {
    try {
      let res = await fetch("https://api.twitter.com/2/tweets/search/all", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "no-cors",
        headers: {
          Authorization: twitter.BEARER,
        },
      });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <Card />;
}
