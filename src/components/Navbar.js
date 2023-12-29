function Navbar(){

return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  <a class="navbar-brand" href="/ #">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ms-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#">About</a>
      </li>
     
    
    </ul>
    
  </div>
  </div>
</nav>
    
    </>
)

}

export default Navbar 