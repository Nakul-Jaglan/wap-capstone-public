
function Card() {
  return (
    <>
        <section className='team-cards'>
            <section className='team-member'>
                <img className='member-image' src='/team-member-1.png' alt='Team Member 1'/>
                <h3 className='member-name'>Walter White</h3>
                <p className='member-role'>CEO</p>
                <p className='member-bio'>John is the founder and CEO of our company. He has over 20 years of experience in the industry and is passionate about delivering the best service possible.</p>
            </section>

            <section className='team-member'>
                <img className='member-image' src='/team-member-2.png' alt='Team Member 2'/>
                <h3 className='member-name'>Skyler White</h3>
                <p className='member-role'>CTO</p>
                <p className='member-bio'>Jane is our Chief Technology Officer. She is responsible for overseeing all technical aspects of the company and ensuring that we stay ahead of the curve.</p>
            </section>

            <section className='team-member'>
                <img className='member-image' src='/team-member-3.webp' alt='Team Member 3'/>
                <h3 className='member-name'>Saul Goodman</h3>
                <p className='member-role'>CFO</p>
                <p className='member-bio'>Bob is our Chief Financial Officer. He is responsible for managing the company's finances and ensuring that we remain profitable.</p>
            </section>
        </section>
    </>
  )
}

export default Card