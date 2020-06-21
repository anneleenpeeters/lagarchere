import kamerImage from '../../images/kamer_mainimg.jpg'

const HomeKamer = () => {
    return(
        <div>
            <section>
                <img className="kamer-image" src={kamerImage} alt="Kamer luxe"/>
                <div>
                    <h2 className="heading-style-2">Kamer</h2>
                    <p className="p-chic">Vestibulum eget velit aliquam velit venenatis ornare. Nullam dapibus tellus eu orci volutpat varius sed efficitur massa. Curabitur maximus erat nec nisi varius blandit. Duis eleifend leo felis, nec elementum purus dignissim at. Mauris mauris leo, molestie vitae sem quis, sodales semper nibh. Fusce ut nibh ac ante hendrerit lobortis in sed nibh. Aliquam vestibulum vitae arcu sed mollis. Mauris posuere ante ante.</p>
                </div>
            </section>

        <style jsx>{`
            section {
                height: 100vh;
                background-color: #EAE3D2;
                margin-top: -65px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 60px 20px;
                text-align: center;
            }
            .kamer-image {
                width: 80vw;
                height: 400px;
                object-fit: cover;
            }
            .heading-style-2 {
                margin: 30px 0 10px 0;
            }
            
            @media (min-width: 30em) {
                section {
                    padding: 100px 60px;
                }
                .kamer-image {
                    width: 80vw;
                    height: 500px;
                }
            }

            @media (min-width: 40em) {
                section {
                    padding: 100px 100px;
                }
                .kamer-image {
                    width: 60vw;
                    height: 500px;
                }
            }

            @media (min-width: 50em) {        
                section {
                    padding: 0 40px;
                    display: grid;
                    grid-template-columns: auto auto;
                }
                .kamer-image {
                    width: auto;
                    height: 550px;
                    margin: 0 auto;
                }
                section div {
                    width: 300px;
                    margin: 0 auto;
                }
            }

            @media (min-width: 60em) {
                section {
                    margin-top: -170px;
                    padding: 5% 0;
                }
            }

        `}</style>
    </div>
    )
}

export default HomeKamer;