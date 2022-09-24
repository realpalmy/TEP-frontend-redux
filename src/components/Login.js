import React from 'react';

export default function Login() {
    return (
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto login">
                <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                    <div class="card-img-left d-none d-md-flex">

                        <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%' }}>
                            <div>
                                <img src="./22.png" style={{ width: '100%' }} />
                                <div class="text-center fs-2 dropshadow text-white">what's your it's your !!!</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-4 p-sm-5">
                        <h5 class="card-title text-center fw-light fs-2 dropshadow font-weight-bold">HI !!, THERE</h5>
                        <p class="text-center dropshadow">you can login your account here !!!</p>
                        <form>

                            <div class="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus />

                                <label for="floatingInputUsername">Username</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />

                                <label for="floatingInputEmail">Password</label>
                            </div>

                            <div class="d-grid mb-2">
                                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">LOGIN</button>
                            </div>

                            <a class="d-block text-center mt-2 small" href="#">Don't have an account? Sign Up</a>

                            <hr className="my-4" />


                            <div class="d-grid mb-2">
                                <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                                    <i class="fab fa-google me-2"></i> Login with Google
                                </button>
                            </div>

                            <div class="d-grid">
                                <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                                    <i class="fab fa-facebook-f me-2"></i> Login with Facebook
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}