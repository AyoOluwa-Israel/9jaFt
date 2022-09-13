import React, { useRef, useState } from "react";
import Button from "../components/Button";
import Hero from "../assets/hero.jpg";
import Chart from "../components/Chart";
import { data0, data1, data10, data2, data3, data4, data5, data6, data7, data8, data9 } from "../components/data";

const chart = [
  { id: 0, value: data0 },
  { id: 1, value: data1 },
  { id: 2, value: data2 },
  { id: 3, value: data3 },
  { id: 4, value: data4 },
  { id: 5, value: data5 },
  { id: 6, value: data6 },
  { id: 7, value: data7 },
  { id: 8, value: data8 },
  { id: 9, value: data9 },
  { id: 10, value: data10 },
];

const LandingPage = () => {
  const [data, setData] = useState(data1);
  const ref = useRef(1);

  const handleClick = (x, id) => {
    setData(x);
    console.log(x);
    ref.current = id;
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between w-[80%] mx-auto  min-h-[90vh] items-center">
        <div className="md:w-[50%] w-[100%] md:text-left text-center md:mt-0 mt-[5em]">
          <p className="md:text-[42px] text-[32px] font-bold text-black" data-aos="fade-in" data-aos-duration="2000">
            Set-it-and-forget-it investing.
          </p>
          <p className="text-[18px] py-4 text-black md:w-[80%] w-[100%]" data-aos="fade-in" data-aos-duration="3000">
            Expertly-designed portfolios built for long-term growth.
          </p>

          <div data-aos="fade-up" data-aos-duration="3000">
            <Button text="Get Started" css="bg-black mt-[2em] py-[1em] text-white text-[14px]" />
          </div>
        </div>

        <div className="md:w-[35%] w-[90%] md:mt-0 mt-4" data-aos="zoom-in" data-aos-duration="3000">
          <img
            src={Hero}
            alt="Hero"
            className="w-[100%] rounded-[20px] shadow-lg"
            data-aos="fade-in"
            data-aos-duration="4000"
          />
        </div>
      </div>

      <div className="w-[85%] mx-auto flex md:flex-row flex-col justify-between text-black items-center py-[4em] md:text-left text-center">
        <div>
          <p className="text-[36px] font-bold" data-aos="fade-in" data-aos-duration="2000">
            Select their risk tolerance.
          </p>

          <p className="md:w-[80%] w-[100%] mt-6" data-aos="fade-in" data-aos-duration="3000">
            You don't have to be scared since you are guided.
          </p>
        </div>

        <div className="md:w-[70%] w-[100%]">
          <div
            className="flex gap-2 items-center justify-center flex-wrap md:mt-0 mt-6"
            data-aos="fade-in"
            data-aos-duration="2500"
          >
            {chart.map((el) => {
              return (
                <p
                  className={`border-[1px] border-black py-2 px-4 rounded cursor-pointer transition ease-in-out duration-550 ${
                    ref.current === el.id && "bg-black text-white border-white "
                  }`}
                  id={el.id}
                  key={el.id}
                  ref={ref}
                  onClick={() => handleClick(el.value, el.id)}
                >
                  {el.id}
                </p>
              );
            })}
          </div>
          <div className="h-[300px] w-[100%] text-[8px] py-[4em]" data-aos="zoom-in" data-aos-duration="3000">
            <Chart data={data} />
          </div>
        </div>
      </div>

      <div className="bg-[url('assets/money.jpg')] py-[7em] w-[100%] bg-cover bg-center relative">
        <div className="bg-grey h-[100%]  w-[100%] absolute top-0"></div>
        <div className="w-[85%] mx-auto flex md:flex-row flex-col justify-between items-center h-[90%] ">
          <div className="w-[50%]"></div>
          <div className="z-[88] md:w-[50%] w-[100%]">
            <p className="md:text-[48px] text-[32px] font-bold text-white" data-aos="fade-in" data-aos-duration="3000">
              Let your money do the growth.
            </p>
            <p
              className="text-white md:text-[18px] text-[14px] mt-6 w-[80%]"
              data-aos="fade-in"
              data-aos-duration="3000"
            >
              Investing somewhere else? Transfer over $5,000 and we'll pay the fees when you switch.
            </p>

            <div data-aos="fade-up" data-aos-duration="3000">
              <Button text="Get Started" css="bg-white mt-[2em] md:py-[1em] py-[9px] text-[14px] text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
