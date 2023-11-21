"use client";

import { useState, useEffect, Suspense } from "react";

type CountDownProps = {
  date: string;
};

const CountDown = ({ date }: CountDownProps) => {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDownDate = new Date(date).getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountDown({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);
  return (
    <Suspense fallback={<div>D:H:M:S</div>}>
      <div>
        {countDown.days}D:{countDown.hours}H:{countDown.minutes}M:
        {countDown.seconds}S
      </div>
    </Suspense>
  );
};

export default CountDown;
