import { useState } from "react";
import { Header, Main } from "./components";

import "./App.css";

function App() {
  const serversCollection = [
    {
      label: "Tomcat",
      description:
        "Apache Tomcat is a free, open-source Java servlet container. Servlet containers are software components that provide a runtime environment for Java servlets. A Java servlet is a Java class that can be used to extend the functionality of a web server. They define how the server should handle requests and how to respond to them. Among the top corporations that use Tomcat include LinkedIn which has used it extensively in its infrastructure to serve its web applications.",
      languages: ["Java"],
      advantages: [
        "Security Features",
        "Lightweight and fast",
        "Open source & free",
      ],
    },
    {
      label: "ASP.NET Core",
      description:
        "ASP.NET Core is a powerful, cross-platform, open-source framework designed for creating modern, cloud-enabled, and Internet-connected applications. It offers a wide array of advantages over other application servers, making it a preferred choice for many developers",
      languages: ["C#"],
      advantages: [],
    },
  ];

  const referencesCollection = [
    "https://www.logicmonitor.com/blog/what-is-apache-tomcat-server-and-how-does-it-work",
  ];

  return (
    <>
      <Header />
      <Main serversCollection={serversCollection} />
    </>
  );
}

export default App;
