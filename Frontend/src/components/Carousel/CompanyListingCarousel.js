// import React from 'react';
// import './CompanyListingCarousel.css'

// class CompanyListingCarousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       companies: [
//         {
//           id: 1,
//           name: 'Company 1',
//           description: 'Description of Company 1',
//           logo: 'company1-logo.png'
//         },
//         {
//           id: 2,
//           name: 'Company 2',
//           description: 'Description of Company 2',
//           logo: 'company2-logo.png'
//         },
//         {
//           id: 3,
//           name: 'Company 3',
//           description: 'Description of Company 3',
//           logo: 'company3-logo.png'
//         }
//       ],
//       currentIndex: 0
//     };
//   }

//   goToPrevCompany = () => {
//     this.setState(prevState => ({
//       currentIndex: (prevState.currentIndex - 1 + this.state.companies.length) % this.state.companies.length
//     }));
//   }

//   goToNextCompany = () => {
//     this.setState(prevState => ({
//       currentIndex: (prevState.currentIndex + 1) % this.state.companies.length
//     }));
//   }

//   render() {
//     const { companies, currentIndex } = this.state;
//     const currentCompany = companies[currentIndex];

//     return (
//       <div className="carousel-container">
//         <div className="carousel">
//           <div className="company">
//             <img src={currentCompany.logo} alt={currentCompany.name} />
//             <h3>{currentCompany.name}</h3>
//             <p>{currentCompany.description}</p>
//           </div>
//         </div>
//         <div className="carousel-controls">
//           <button onClick={this.goToPrevCompany}>Previous</button>
//           <button onClick={this.goToNextCompany}>Next</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default CompanyListingCarousel;