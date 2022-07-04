<div id="top"></div>
<!-- PROJECT LOGO -->
<div align="center">

<h2 align="center">meli-test-front</h2>

  <p align="center">
    <a href="https://meli-test-front.vercel.app/"><strong>LIVE DEMO »<strong></a>
    <br />
    <br />
    <a href="https://github.com/Vizoni/meli-test-front"><strong>Explore the docs »</strong></a>
    <br />
    ·
  </p>
</div>

### Built With

* [React.js](https://reactjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Make sure you have npm installed.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Vizoni/meli-test-front.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
  ### Usage

  1. To run local on `https://localhost:3000`
  ```sh
    npm run dev
  ```

<p align="right">(<a href="#top">back to top</a>)</p>


## Endpoints used
### [API project](https://github.com/Vizoni/api-meli-test-front) 
Checkout the API documentation. There's a Postman Collection to test everything.

1. Health Check: Returns 200 if server responds, 503 if not.
```sh
  /api/health
```

2. Get Product By Text: Returns a list of products that corresponds to the text searched.
```sh
  /api/items?q=TEXT
```

3. Get Product by Id: Returns a single product given the id.
```sh
  /api/items/:id
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Components
    - [x] Search bar
    - [x] Product list page
    - [x] Product detail page
    - [ ] Pagination
        - [x] Mocked searched term (iphone)
        - [ ] Memorize previous page product list
        - [ ] Correct searched term  
    - [x] Skeleton
- [x] Tests
- [x] Lazy Loading
- [x] [Deployed on Vercel](https://meli-test-front.vercel.app/)
- [x] Responsive design
    - [x] Global style
    - [x] Relative units
    - [x] Flexbox
    - [x] Styled Component
    - [x] Converted .png icons to .webp
- [ ] Accessibility
    - [x] Keyboard Navigation
    - [ ] Alt text for images
    - [ ] Defined roles
    - [ ] [WAI-Aria concepts](https://www.w3.org/WAI/standards-guidelines/aria/)
- [ ] Internationalization (i18n)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Raphael Vizoni do Prado - [@linkedin](https://www.linkedin.com/in/raphael-vizoni) - ravizoni@gmail.com

Project Link: [https://github.com/Vizoni/ameli-test-front](https://github.com/Vizoni/meli-test-front)


<p align="right">(<a href="#top">back to top</a>)</p>
