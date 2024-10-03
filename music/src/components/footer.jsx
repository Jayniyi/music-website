import "./footer.css";
export default function footer() {
  return (
    <div>
      <div className="footer">
        <div className="lol">
          <div className="servive">
            <h3>Services</h3>
            <div>
              <form action="">
                <div className="il">
                <input
                  className="mail"
                  type="mail"
                  placeholder="Input Your Mail"
                /> <br />
                <button>subscribe</button>
                </div>
                <p>
                  Esteem spirit temper too say adieus who direct esteem esteems
                  luckily.
                </p>
              </form>
            </div>
          </div>
          <div className="servive">
            <h3>Contact Me</h3>
            <a href="mailto:obasansjoseph9@gmail.com">Obasanjoseph9@gmail.com</a>
            <a href="tel:07079887893">07079887893</a>
            <address>Nigeria,Ogun State, Abeokuta</address>
          </div>
        </div>
      </div>
    </div>
  );
}
