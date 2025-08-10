import './Footer.css';

function Footer(){
    return(
        <div id="footer" className="footer">
            <div className='grid'>

            </div>
            <div className='grid'>
                <div className="row" id="row1">
                    <h5>Tietoa</h5>
                    <label>Rivi</label>
                    <label>Rivi 2</label>
                    <label>Rivi 3</label>
                </div>
                <div className='row' id="row2">
                    <h5>Ominaisuudet</h5>
                    <label>Rivi</label>
                    <label>Rivi 2</label>
                </div>
            </div>
        </div>
    );
}

export default Footer;