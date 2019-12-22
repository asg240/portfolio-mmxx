import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li><a title="LegendDev" href="www.legenddev.net">LegendDev</a>&trade;</li>
              <li>Photo:<a title="Cristofer Jeschke" href="https://unsplash.com/@cristofer?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"> Cristofer Jeschke</a></li>




           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
