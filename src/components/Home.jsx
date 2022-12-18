import '../assets/css/custom.css'
// import '../assets/scss/layout/_header.scss'
// import '../assets/scss/layout/_sections.scss'
// import '../assets/scss/layout/_footer.scss'


const Home = () => {
    return ( 
<div className="home">
        
    <header className="header">
        <div className="overlay">
            <h1 className="subtitle">Final React</h1>
            <h1 className="title">Eddie & Jhomae</h1>
            <h1 className="subtitle">Frontend React & Backend Laravel</h1>  
        </div>  
        <div className="shape">
            <svg viewBox="0 0 1500 200">
                <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"/>
            </svg>
        </div>  
        <div className="mouse-icon"><div className="wheel"></div></div>
    </header>

    <section  id="service" className="section pt-0">
        <div className="container">
            <h6 className="section-title text-center">The Finale Activity</h6>
            <h6 className="section-subtitle text-center mb-5 pb-3">Voluptates architecto provident deserunt.</h6>

            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <small className="text-primary font-weight-bold">01</small>
                            <h5 className="card-title mt-3">Product</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet, cquasi cupiditate voluptate debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt ab fuga quae, minima reprehenderit sequi fugit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <small className="text-primary font-weight-bold">02</small>
                            <h5 className="card-title mt-3">Delectus Suscipit</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet, cquasi cupiditate voluptate debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt ab fuga quae, minima reprehenderit sequi fugit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <small className="text-primary font-weight-bold">03</small>
                            <h5 className="card-title mt-3">Itaque harum</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet, cquasi cupiditate voluptate debitis saepe dolorem totam dolor repudiandae quo nihil, repellendus nesciunt ab fuga quae, minima reprehenderit sequi fugit.</p>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    </section>
    
  
        </div>
     );
}
 
export default Home;