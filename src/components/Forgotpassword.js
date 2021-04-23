import React, { useState } from 'react'
import './Forgotpassword.css'

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const [allEntry, setAllEntry] = useState([]);

    const Forgotpassword = (e) => {
        e.preventDefault();
        const newEntry = { email: email }
        setAllEntry([...allEntry, newEntry])
        console.log(allEntry)
    }

    return (
        <div className='forgotpassword_body'>
            <div className='forgotpassword'>
                
                    <form className="forgotpassword__form">
                        <h1>Forgotpassword</h1>
                        <p>Please enter your email to Reset your password</p>
                        <input autoComplete='off' type='text' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <button onClick={Forgotpassword} className='submit'>Submit</button>


                    </form>
                </div>
                <div>
                    {allEntry.map((curElement) => {
                        return (
                            <div className="">

                                <p>{curElement.email}</p>

                            </div>
                        )
                    })}
                </div>

            </div>
      
    )
}

export default Forgotpassword
