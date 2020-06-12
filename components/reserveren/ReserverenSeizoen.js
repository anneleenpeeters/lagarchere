
const ReserverenSeizoen = () => (
    <div>
        <section className="section-seizoen">
            <h1 className="heading-style-1">Seizoenen en prijzen</h1>
            <div className="seizoen-grid">
                <div> 
                    <h2 className="heading-style-2">Laagseizoen</h2>
                    <p>januari, februari, maart, april, mei, oktober, november</p>
                    <p>In het laag seizoen kan u de genieten van de kamer, met minimaal verhuur van twee nachten. De kamer is inclusief ontbijt, zwembad en jacuzzi. </p>
                </div>
                <div>
                    <h2 className="heading-style-2">Hoogseizoen</h2>
                    <p>juni, juli, augustus, september, december</p>
                    <p>In het hoog seizoen kan u de genieten van de kamer, met minimaal verhuur van vier nachten. De kamer is inclusief ontbijt, zwembad en jacuzzi. </p>
                </div>
            </div>
        </section>
        <style jsx>{`
           .section-seizoen {
                padding: 40px;
                text-align: center;
            }
            .section-seizoen h1 {
                margin: 40px 0;
            }
            .section-seizoen h2 {
                margin: 20px 0 10px 0;
            }
            .section-seizoen p {
                margin: 10px 0;
            }
            @media (min-width: 35em) {
                .section-seizoen{
                    width: 500px;
                    margin: 0 auto;
                }
            }
            @media (min-width: 45em) {
                 .section-seizoen {
                    width: auto;
                    text-align: left;
                    padding: 40px;
                }
                .section-seizoen .seizoen-grid {
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 60px;
                }
            }
            @media (min-width: 60em) {
                 .section-seizoen {
                    padding: 60px 10%;
                }
                .section-seizoen .seizoen-grid {
                    grid-column-gap: 15%;
                }
            }
        `}</style>
    </div>
);  

export default ReserverenSeizoen;