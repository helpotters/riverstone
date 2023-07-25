import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import pita from 'src/images/pita.png';
import tandoor from 'src/images/tandoor.png';

import SEO from 'src/components/SEO';
import Button from 'src/components/Button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="flex flex-col justify-center items-center">
      {/* Heading */}
      <section className="flex flex-col justify-center items-center self-stretch flex-grow-0 w-screen flex-shrink-0 relative gap-16 bg-[#351515]/[0.59]">
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[213px] pt-[89px] pb-4">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p className="self-stretch flex-grow-0 flex-shrink-0 text-4xl font-bold text-center uppercase text-white">
              From Design to Installation
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 text-base italic text-center text-white">
              We’re with you every step of the way. We’ll design it with our
              extensive experience in both construction and engineering, and we
              source the highest-quality of materials.
            </p>
          </div>
        </div>
        <svg
          width={1276}
          height={11}
          viewBox="0 0 1276 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path d="M152.303 11L189.967 0L229.166 11H152.303Z" fill="#D9D9D9" />
          <path d="M79.6708 11L117.709 0L152.303 11H79.6708Z" fill="#D9D9D9" />
          <path d="M0 11L37.9385 0L79.6708 11H0Z" fill="#D9D9D9" />
          <path d="M229.166 11L267.135 0L316.072 11H229.166Z" fill="#D9D9D9" />
          <path d="M316.072 11L350.923 0L393.508 11H316.072Z" fill="#D9D9D9" />
          <path d="M393.508 11L435.167 0L470.374 11H393.508Z" fill="#D9D9D9" />
          <path d="M470.374 11L501.555 0L544.301 11H470.374Z" fill="#D9D9D9" />
          <path d="M544.301 11L584.843 0L621.488 11H544.301Z" fill="#D9D9D9" />
          <path d="M621.488 11L653.388 0L691.702 11H621.488Z" fill="#D9D9D9" />
          <path d="M691.702 11L730.028 0L767.561 11H691.702Z" fill="#D9D9D9" />
          <path d="M767.561 11L813.483 0L861.604 11H767.561Z" fill="#D9D9D9" />
          <path d="M861.604 11L905.632 0L952.006 11H861.604Z" fill="#D9D9D9" />
          <path d="M952.006 11L987.573 0L1030.52 11H952.006Z" fill="#D9D9D9" />
          <path d="M1030.52 11L1070.36 0L1111.44 11H1030.52Z" fill="#D9D9D9" />
          <path d="M1111.44 11L1156.35 0L1204.76 11H1111.44Z" fill="#D9D9D9" />
          <path d="M1204.76 11L1243.34 0L1281 11H1204.76Z" fill="#D9D9D9" />
        </svg>
      </section>
      {/* Sub Hero */}
      <section className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1037px] overflow-hidden gap-[39px] px-[41px] py-20">
        <div className="flex flex-col justify-center items-center flex-grow relative gap-8">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[458px] text-[26px] font-semibold text-left text-black">
            We cover what others don’t.
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[458px] text-[26px] text-left text-black">
            Our experience covers making breads such as pita, tandoor, foccacia,
            naan, and many more.{' '}
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-8">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
              <Button url="/products" children="View past designs" />
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
              <Button url="/products" children="Message us a question" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow gap-[39px]">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[39px]">
            <img
              src={pita}
              alt="pita bread"
              className="flex-grow-0 flex-shrink-0 w-[154px] h-[154px] object-cover"
            />
            <img
              src={tandoor}
              alt="tandoori"
              className="flex-grow-0 flex-shrink-0 w-[154px] h-[154px] object-cover"
            />
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[39px]">
            <img
              src={pita}
              alt="pita bread"
              className="flex-grow-0 flex-shrink-0 w-[154px] h-[154px] object-cover"
            />
            <img
              src={tandoor}
              alt="tandoori"
              className="flex-grow-0 flex-shrink-0 w-[154px] h-[154px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
