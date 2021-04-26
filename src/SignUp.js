import React from 'react';

export default function Form (props) {
  const { values, change, submit, disabled, errors} = props

  const onChange = evt => {
    const { name, value } = evt.target
    change(name, value)
  }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

  return (
    <>
<div>
    <div>

    <form onSubmit={onSubmit} id="signup-form">
        <div>
          <em>
          <div>{errors.username}</div>
          <div>{errors.phoneNumber}</div>
          <div>{errors.password}</div>
          </em>
        </div>
        <div>
        <label><h4>Username: </h4>
          <input
            type="text"
            value={values.username}
            onChange={onChange}
            name="username"
            id="name-input"
            placeholder="Username"
            maxLength="30"
          />
        </label>

        <label><h4>Phone Number: </h4>
          <input
            type="text"
            value={values.phoneNumber}
            onChange={onChange}
            name="phoneNumber"
            id="number-input"
            placeholder="Phone Number"
            maxLength="30"
          />
        </label>

        <label><h4>Password: </h4>
          <input
            type="password"
            value={values.password}
            onChange={onChange}
            name="password"
            id="pwd-input"
            placeholder="Password"
            maxLength="30"
          />
        </label>
        <div id="submit">
          <button id="submit" disabled={disabled}>Submit</button>
        </div>
    </div>
    </form>
  </div>
</div>
</>
  )
}
