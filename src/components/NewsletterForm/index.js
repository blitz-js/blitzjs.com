import React from "react"
import "./newsletter.css"

// Video player component we can pass a url to using the react-player library.
// control prop determinse whether video player controls will be displayed.
const NewsletterForm = () => {
  return (
    <form
      className="newsletter-form"
      action="https://design.us4.list-manage.com/subscribe/post?u=aeb422edfecb0e2dcaf70d12d&amp;id=1a028d02ce"
      method="post"
    >
      <input
        aria-label="Email address"
        name="EMAIL"
        type="email"
        required
        className="input"
        placeholder="Enter your email"
      />
      <div className="">
        <button className="button button--secondary" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
