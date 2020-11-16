
import React, { Component } from 'react'
import ExpandLess from '@material-ui/icons/ExpandLess';
import AOS from 'aos'
import '../lower/footer.css'




export default class ScrollToTop extends Component {
    constructor(props) {

        super(props);
        this.state = {
            is_visible: false
        };

    }

    componentDidMount() {

        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });

    }

    toggleVisibility() {

        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });

        } else {
            this.setState({
                is_visible: false
            });
        }

    }

    scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    render() {
        const { is_visible } = this.state;
        return (
            
            <div className="scroll-to-top fixed-top" >
                {is_visible && (

                    <div className="Scroll">

                        <ExpandLess />
                        <button className="Top" onClick={() => this.scrollToTop()}>Back to top</button>

                    </div>

                )}
            </div>
        );
    }

}











