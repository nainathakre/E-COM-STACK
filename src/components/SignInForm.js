import React from 'react';

function SignInForm() {
  return (
    <section className="login-section">
      <section className="login-section-left-side">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </section>
      <section className="login-section-right-side">
        <section className="form-block">
          <label for="name">Email</label>
          <input type="text" placeholder="Email Address" />
        </section>
        <section className="form-block">
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
        </section>
        <button className="login-btn">Login</button>
      </section>
    </section>
  );
}

export default SignInForm;
