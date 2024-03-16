import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { PopUpContext } from "../context/Context";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { handleSignInShow } = useContext(PopUpContext);
  return (
    <div className='className="m-1 p-2 px-md-3 mx-md-3 mx-lg-5 px-lg-5 d-flex align-items-center justify-content-between shadow'>
      <div className="w-25">
        <Link className=" m-0 p-0" to="/">
          <img
            className="d-none d-lg-block w-50"
            src="HobbyCue Logo.png"
            alt=""
          />
        </Link>

        <Link to="/">
          <img className=" d-lg-none" src="HobbyCue Logo v2 1.png" alt="" />
        </Link>
      </div>

      <div className=" d-none d-lg-block align-items-center justify-content-center ">
        <input
          className="py-1   border-lilac ps-1 rounded-start-2 fs-12 fw-bold "
          type="text"
          placeholder="Email ID"
        />
        <button className=" pb-1 bg-lilac rounded-start-0 rounded-end-2 text-light fw-bold border-0">
          <img className="" src="icons8_search 1.png" alt="" />
        </button>
      </div>

      <div className="d-flex align-items-center fw-semibold text-lilac fs-14">
        <div className="d-none d-lg-block ">
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic " variant="light" className="d-flex align-items-center ">
            <div className="d-none d-lg-flex align-items-center ">
                <img src="Explore.png" alt="" />
                <p className="m-0 text-lilac">Explore</p>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-2  rounded-bottom-1 rounded-top-0 border-top-0">
              <Dropdown.Item className="border-bottom" href="#/action-1">People - Community </Dropdown.Item>
              <Dropdown.Item className="border-bottom" href="#/action-2">Places - Venues</Dropdown.Item>
              <Dropdown.Item className="border-bottom" href="#/action-3">Programs - Events</Dropdown.Item>
              <Dropdown.Item className="border-bottom" href="#/action-4">Products - Store</Dropdown.Item>
              <Dropdown.Item  href="#/action-5">Blogs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-none d-lg-flex align-items-center">
          <img src="Hobbies.png" alt="" />
          <p className="m-0 ">Hobbies</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="d-none d-lg-flex gap-2">
        <img src="bookmark.png" alt="" />
        <img src="notifications.png" alt="" />
        <img src="Product 3.png" alt="" />
      </div>

      <div>
        <button
          onClick={() => {
            handleSignInShow(true);
          }}
          className=" d-none d-lg-block border-lilac text-lilac fw-bold rounded p-2 px-3"
        >
          Sign In
        </button>
      </div>

      <div className="d-flex gap-4 d-lg-none ">
        <img src="icons8_search 2.png" alt="" />
        <img src="notifications.png" alt="" />
        <img
          onClick={() => {
            handleSignInShow(true);
          }}
          src="menu_icon.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavigationBar;
