import React from "react";
import products from "../product/ProductData";



export class ProductList extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
             products:props.products,
             title:props.title
        };
       if(this.state.products==null) this.state.products=[];
    }

    render(){
        return (<div>
                <h1>{this.props.title}</h1>
                <div className="row">
                    { this.state.products.map(product=>(
                        <Product
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            des={product.des}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            id:props.id,
            name:props.name,
            image:props.image,
            des:props.des,
            price:props.price,
        }
        console.log(this.state)
    }
        render() {
            return (
                <div className="col col-xs-12 col-sm-6 col-md-4  col-lg-3 ">
                    <div className="card">
                        <img className="card-img-top" src={this.state.image}/>
                        <div className="card-body">
                            <h4 className="card-title"><a>{this.state.name}</a></h4>
                            <p className="card-text">{this.state.des}</p>
                            <a href="#" className="btn btn-outline-light-blue">{this.state.price}</a>
                            <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
            );
        }
    }