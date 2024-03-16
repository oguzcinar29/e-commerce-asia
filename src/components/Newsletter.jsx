import React from "react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [doesItHave, setHave] = useState(true);
  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <h1>Newsletter</h1>
        <form
          onSubmit={(e) => {
            if (email.indexOf("@") !== -1) {
              setEmail("");
              setHave(true);
              window.location.href = window.location.href;
            } else {
              setHave(false);
            }
            e.preventDefault();
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setHave(true);
            }}
            placeholder="youremail@email.com"
            type="text"
          ></input>
          <button type="submit">Subscribe</button>
        </form>
        <div className="error">
          {!doesItHave && (
            <h2>
              `Please include an '@' in the email address.${email} is missing an
              '@'. `
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
