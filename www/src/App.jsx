import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SORU ÇÖZ(opsiyonel)</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-primary me-2">Giriş Yap</button>
              <button type="button" class="btn btn-primary">Kayıt Ol</button>
            </div>
          </div>
        </div>
      </nav>

      {/* */}

      <div class="container mt-4">
        <div class="row g-3">
          <div class="col-12 bg-primary">
            <div className="bg-primary">
              <div class="p-5 text-start bg-dark rounded-3">
                <h1 class="text-white">Basic jumbotron</h1>
                <p class="lead text-white ">
                  <div class="overflow-auto"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum magnam sint aliquid, similique dolor, illo laborum facilis reiciendis aspernatur labore at eius harum nihil ratione dolore facere magni veniam omnis dignissimos aliquam quos sunt iusto ipsam ullam. Dolorum, in. Autem explicabo ut voluptates harum dolore asperiores neque aut rem hic nesciunt laboriosam in, rerum exercitationem tenetur aspernatur iure dicta repellat minima deserunt repellendus voluptatem eveniet at. Earum laboriosam voluptatem vel! </div>
                </p>
              </div>
            </div>
          </div>

          {/* Teste yönlendiren Sayfa */}

          <div class="col-3">
            <div class="bg-secondary">
              <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">List group item heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">now</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Another title here</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">3d</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">1w</small>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Öğretmen Duyuru Tablosu */}

          <div class="col-3">
            <div class="bg-success p-0">
              <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">List group item heading</h6>
                        <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"></img>
                        {/* Denemek için koydum kalsın */}
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">now</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Another title here</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">3d</small>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                      <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                      </div>
                      <small class="opacity-50 text-nowrap">1w</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Öğretmen duyuru tablosu */}

          <div className="col-6">
            <div className="bg-warning p-5 ">
              Öğretmen Duyuru Tablosu
            </div>

            {/* Boş tablo */}

          </div>
          <div className="col-12">
            <div className="bg-warning">

            </div>
          </div>

          {/* Slide Show şeysi (türkçesini unuttum) */}
          <div className="col-12">

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://picsum.photos/200/300" class="d-block w-50" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://picsum.photos/200/300" class="d-block w-50" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://picsum.photos/200/300" class="d-block w-50" alt="..."/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div class="container my-5">
              <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                <svg class="bi mt-5 mb-3" width="48" height="48"><use xlink:href="#check2-circle"></use></svg>
                <h1 class="text-body-emphasis">Placeholder jumbotron</h1>
                <p class="col-lg-6 mx-auto mb-4">
                  This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                </p>
                <button class="btn btn-primary px-5 mb-5" type="button">
                  Call to action
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}



export default App
