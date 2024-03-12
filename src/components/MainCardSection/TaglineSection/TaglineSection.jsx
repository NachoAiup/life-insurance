import { useState } from "react";
import { useEffect } from "react";

function TaglineSection() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch(
      "https://fu6hk3qh0f.execute-api.eu-west-3.amazonaws.com/default/frontendTest"
    ).then((res) => res.json().then((data) => setContent(data)));
  }, []);

  return (
    <div className="tagline-section">
      <header>
        <a href="/" className="logo-wrapper">
          <img src="./octo-logo.png" />
          <p className="logo">octo</p>
        </a>
        {content?.nav.map((navItem, index) => (
          <a href={navItem.link} key={index} className="nav-link">
            {navItem.title}
          </a>
        ))}
      </header>
      <div className="tagline-wrapper">
        <p
          className="tagline"
          dangerouslySetInnerHTML={{ __html: content?.home["header-title"] }}
        ></p>
        <button className="agent-button">
          <div className="agent-icon">
            <img src="./agent-icon.png" alt="agent icon" width={30} />
          </div>
          {content?.home["header-cta"]}
        </button>
      </div>
    </div>
  );
}

export default TaglineSection;
