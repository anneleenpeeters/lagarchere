import Layout from "../components/Layout"

function Activiteiten() {
    return (
        <div>
        <Layout>
            <div className="activiteit-container">
                <section>
                    <h1 className="heading-style-1">Wijnroute</h1>
                    <div className="activiteit-grid">
                        <article>
                            <h2 className="heading-style-2">Chateau de Meursault</h2>
                            <p>70km</p>
                            <p>5 Rue du Moulin Foulot, 21190 Meursault</p>
                            <p>www.chateau-meursault.com</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                        </article>
                        <article>
                            <h2 className="heading-style-2">Chateau de Meursault</h2>
                            <p>70km</p>
                            <p>5 Rue du Moulin Foulot, 21190 Meursault</p>
                            <p>www.chateau-meursault.com</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                        </article>
                        <article>
                            <h2 className="heading-style-2">Chateau de Meursault</h2>
                            <p>70km</p>
                            <p>5 Rue du Moulin Foulot, 21190 Meursault</p>
                            <p>www.chateau-meursault.com</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                        </article>
                    </div>
                </section>
            </div>
        </Layout>
    <style jsx>{`
    .activiteit-container {
        height: 100%;
        padding: 20px;
    }

    .heading-style-1 {
        color: #264F47;
        margin: 20px 0;
    }

    .heading-style-2 {
        margin-bottom: 10px;
        font-size: 1.6rem;
    }

    article {
        margin-bottom: 40px;
    }

    article p:last-child {
        margin-top: 15px;
    }

    .activiteit-grid {
        display: grid;
        grid-template-columns: auto;
        padding: 10px;
    }

    @media (min-width: 30em) {
        .activiteit-container {
            padding: 40px;
        }
    }

    @media (min-width: 40em) {
        .activiteit-container {
            padding: 0 80px;
        }
        section {
            margin-top: 90px;
        }
    }
    @media (min-width: 50em) {
        .activiteit-container {
            padding: 0 120px;
        }
    }

    @media (min-width: 60em) {
        .activiteit-container {
            padding: 0 10%;
        }

        .activiteit-grid {
            display: grid;
            grid-template-columns: auto auto;
            grid-column-gap: 60px;
        }
    }
    `}</style>
        </div>
    )
  }
  
  export default Activiteiten