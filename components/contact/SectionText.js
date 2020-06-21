const SectionText = () => (
    <div>
        <section>
            <p className="p-chic">Vestibulum eget velit aliquam velit venenatis ornare. Nullam dapibus tellus eu orci volutpat varius sed efficitur massa. Curabitur maximus erat nec nisi varius blandit. Duis eleifend leo felis, nec elementum purus dignissim at. Mauris mauris leo, molestie vitae sem quis, sodales semper nibh. Fusce ut nibh ac ante hendrerit lobortis in sed nibh. Aliquam vestibulum vitae arcu sed mollis. Mauris posuere ante ante.</p>
        </section>
        <style jsx>{`
            section {
                padding: 50px 70px 100px 70px;
                text-align: center;
            }

            @media (min-width: 50em) {        
                section {
                    padding: 5% 20% 10% 20%;
                }
            }

            @media (min-width: 60em) {
                section {
                    padding: 5% 25% 10% ;
                }
            }
        `}</style>
    </div>
    
);  

export default SectionText;