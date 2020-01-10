import React, {Component} from "react";
import About from "./About";
import Store from "./Store";
import Contact from "./Contact";
import Footer from "./Footer";


class Home extends Component {

    render(){
        return (
            <div className="home">
                <About />
                <Store />
                <Contact />
                <Footer />
            </div>
        );
    };

}

export default Home;