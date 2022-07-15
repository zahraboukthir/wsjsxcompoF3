import './productlist.css'
import img from '../../logo512.png'
export const ProductList = () => {
  const products = [
    {
      nom: "dell",
      prix: 200,
      qte: 3,
      image:
        "https://www.tunisianet.com.tn/148319-large/pc-portable-dell-inspiron-3593-i5-10e-gen-8-go-silver-sim-orange-offerte-30-go.jpg",
    },
    {
      nom: "hp",
      prix: 100,
      qte: 5,
      image:
        "https://www.tunisianet.com.tn/148319-large/pc-portable-dell-inspiron-3593-i5-10e-gen-8-go-silver-sim-orange-offerte-30-go.jpg",
    },
    {
      nom: "lenovo",
      prix: 150,
      qte: 6,
      image:
        "https://www.tunisianet.com.tn/148319-large/pc-portable-dell-inspiron-3593-i5-10e-gen-8-go-silver-sim-orange-offerte-30-go.jpg",
    },
    {
      nom: "acer",
      prix: 155,
      qte: 8,
      image:
        "https://www.tunisianet.com.tn/148319-large/pc-portable-dell-inspiron-3593-i5-10e-gen-8-go-silver-sim-orange-offerte-30-go.jpg",
    },
  ];
  return (
    <div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap'}} >
      {products.map((el) => (
        <div id="container">
          <div className="product-details">
            <h1>{el.nom}</h1>
            <span className="hint-star star">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </span>

            <p className="information">
              {el.qte}
            </p>

            <div className="control">
              <button className="btn">
                <span className="price">${el.prix}</span>
                <span className="shopping-cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <span className="buy">Get now</span>
              </button>
            </div>
          </div>

          <div className="product-image">
            <img
              src={el.image}
              alt=""
            />

            <div className="info">
              <h2> Description</h2>
              <ul>
                <li>
                  <strong>Height : </strong>5 Ft{" "}
                </li>
                <li>
                  <strong>Shade : </strong>Olive green
                </li>
                <li>
                  <strong>Decoration: </strong>balls and bells
                </li>
                <li>
                  <strong>Material: </strong>Eco-Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const Footer=()=>{
    return(
        <div>
            CopyRight F3
            <img src={img} alt="" />
        </div>
    )
}
export default Footer

