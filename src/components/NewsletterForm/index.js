import React from "react"
import "./newsletter.css"

// Video player component we can pass a url to using the react-player library.
// control prop determinse whether video player controls will be displayed.
const NewsletterForm = () => {
  return (
    <form className="newsletter-form">
      <input
        aria-label="Email address"
        type="email"
        required
        className="input"
        placeholder="Enter your email"
      />
      <div className="">
        <button class="button button--secondary" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
