import React from 'react';
import { Link } from 'gatsby';
import FarmImage from 'src/images/simplicity-farms.jpg';

import TestImage1 from 'src/images/test-image-1.jpg';
import TestImage4 from 'src/images/test-image-4.jpg';
import TestImage6 from 'src/images/test-image-6.jpg';
import TestImage7 from 'src/images/test-image-7.jpg';
import Gus from 'src/images/gus.jpg';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

const OurTeamPage = () => (
  <Layout>
    <SEO title="Our Team" />

    <div className="max-w-6xl p-2 mt-4 sm:m-auto sm:p-12">
      <section className="text-gray-700 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h1 className="py-4 text-center font-slim text-primary">
              Our Team
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Who built the bakery?
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                  src={Gus}
                ></img>
                <div className="flex-grow sm:pl-8">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Ghassan Haddad
                  </h2>
                  <h3 className="mb-3 text-gray-500">UI Developer</h3>
                  <p className="mb-4">
                    CEO and Owner of Riverstone Ovens Inc. Builder, baker,
                    maker.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                  src={TestImage6}
                ></img>
                <div className="flex-grow sm:pl-8">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Alper Kamu
                  </h2>
                  <h3 className="mb-3 text-gray-500">Designer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                  src={TestImage4}
                ></img>
                <div className="flex-grow sm:pl-8">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Helen Mitchan
                  </h2>
                  <h3 className="mb-3 text-gray-500">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
                  src={TestImage7}
                ></img>
                <div className="flex-grow sm:pl-8">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Henry Letham
                  </h2>
                  <h3 className="mb-3 text-gray-500">Designer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-16 -mx-8 justify-left">
        <div className="story-section">
          <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

          <div className="flex-col items-start flex-1 max-w-4xl px-8 text-xl font-semibold leading-snug tracking-tight text-justify md:text-xl">
            <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
              Engineering our first oven
            </h1>

            <time
              datetime="2017-09-01"
              className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
            >
              April 2018
            </time>

            <p className="mt-8 mb-12">
              rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              od io ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
              lentesque pulvinar.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap lg:justify-left pl-4">
          <Link
            class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
            title="Burris Custom Turrets"
            to="/brands/burris/scopes"
          >
            <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
              <img
                class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
                alt="Burris Custom Turrets"
                src={FarmImage}
              ></img>
              <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Burris</h2>
            </div>
          </Link>
          <Link
            class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
            title="Bushnell Custom Turrets"
            to="/brands/bushnell/scopes"
          >
            <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
              <img
                class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
                alt="Bushnell Custom Turrets"
                src={FarmImage}
              ></img>
              <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Bushnell</h2>
            </div>
          </Link>
          <Link
            class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
            title="Kahles Custom Turrets"
            to="/brands/kahles/scopes"
          >
            <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
              <img
                class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
                alt="Kahles Custom Turrets"
                src={FarmImage}
              ></img>
              <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Kahles</h2>
            </div>
          </Link>
          <Link
            class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
            title="Leupold Custom Turrets"
            to="/brands/leupold/scopes"
          >
            <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
              <img
                class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
                alt="Leupold Custom Turrets"
                src={FarmImage}
              ></img>
              <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Leupold</h2>
            </div>
          </Link>
        </div>
        <div className="story-section">
          <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

          <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
            <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
              A Company Is Born
            </h1>

            <time
              datetime="2018-03-01"
              className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
            >
              May 2018
            </time>

            <p className="mt-8 mb-12">
              rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
              mauris pellentesque pulvinar.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap lg:justify-left">
          <Link
            class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
            title="Burris Custom Turrets"
            to="/brands/burris/scopes"
          >
            <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
              <img
                class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
                alt="Burris Custom Turrets"
                src={FarmImage}
              ></img>
              <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Burris</h2>
            </div>
          </Link>
          <Link
            class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
            title="Bushnell Custom Turrets"
            to="/brands/bushnell/scopes"
          >
            <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
              <img
                class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
                alt="Bushnell Custom Turrets"
                src={FarmImage}
              ></img>
              <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Bushnell</h2>
            </div>
          </Link>
        </div>
        <div className="story-section">
          <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

          <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
            <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
              Growth
            </h1>

            <time
              datetime="2019-11-18"
              className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
            >
              July 2020
            </time>

            <p className="mt-8 mb-12">
              rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
              mauris pellentesque pulvinar.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default OurTeamPage;
