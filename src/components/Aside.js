import React from "react";

export default function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <svg className="brand-image" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 640 512">{/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" /></svg>
        <span className="brand-text font-weight-light">ChatGPT Prompts</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/avatar5.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Jhon Doe
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Prompts
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Programming</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Writing</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Resumming</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">EXPLORE</li>
            <li className="nav-item">
              <a href="iframe.html" className="nav-link">
                <i className="nav-icon fas fa-ellipsis-h" />
                <p>See new prompts</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-newspaper" />
                <p>News</p>
              </a>
            </li>
            <li className="nav-header">PERSONAL</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                <p>
                  Mailbox
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/mailbox/mailbox.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inbox</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/compose.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Compose</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/read-mail.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Account
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/invoice.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Invoice</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/profile.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/e-commerce.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Plan</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/contacts.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contacts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/faq.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>FAQ</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/contact-us.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contact us</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
    
  );
}
