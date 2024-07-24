import React from 'react';

export default function Form() {
    return (
        <div>
            <h1>Sample Form</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <p>Gender:</p>
                    <label>
                        <input type="radio" name="gender" value="male" /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" /> Female
                    </label>
                    {/* <label> */}
                        <input type="radio" name="gender" value="other" /> Other
                    {/* </label> */}
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="subscribe" /> Subscribe to newsletter
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
