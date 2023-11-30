import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5 my-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="https://images.unsplash.com/photo-1604447199408-9798f9f64f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block mx-lg-auto"
              alt="driving"
              loading="lazy"
              fluid
              rounded
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome to Gear Learning
            </h1>
            <p className="lead fs-3">
              Gear Learning is a web application that helps you learn how to
              drive. It provides tutorials, flashcards, and driving tests so
              that you can quickly prepare for theory driving tests.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2">
                <Link
                  to={"/flashcards"}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}>
                  Flashcards
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4">
                <Link
                  to={"/quizzes"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}>
                  {" "}
                  Driving Test
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
