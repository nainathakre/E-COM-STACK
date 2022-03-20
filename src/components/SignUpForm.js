import React from 'react';

function SignUpForm() {
  return (
    <section className="register-section">
      <section className="register-section-left-side">
        <h2>Sign up</h2>
        <p>We do not share your personal details with anyone.</p>
      </section>
      <section className="register-section-right-side">
        <section className="form-block">
          <label for="name">First Name</label>
          <input type="text" placeholder="Naina" />
        </section>
        <section className="form-block">
          <label for="name">Last Name</label>
          <input type="text" placeholder="Thakre" />
        </section>
        <section className="form-block">
          <label for="name">Email</label>
          <input type="text" placeholder="naina@gmail.com" />
        </section>
        <section className="form-block">
          <label for="name">Password</label>
          <input type="text" placeholder="********" />
        </section>
        <section className="form-block">
          <label for="password">Confirm Password</label>
          <input type="password" placeholder="********" id="password" />
        </section>
        <button className="register-btn">Login</button>
      </section>
    </section>
  );
}

export default SignUpForm;
