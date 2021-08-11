import React from 'react'

const Newsletter = () => {
    return (
        <section className="newsletter">
            <h3>subscribe us for latest updates</h3>

            <form action="">
                <input className="box" type="email" placeholder="enter your email" />
                <input type="submit" value="subscribe" className="btn" />
            </form>
        </section>
    )
}

export default Newsletter
