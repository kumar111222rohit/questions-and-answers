'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

export default function Home() {
  return (
    <>
      <Header imgSrc="/static/assets/logo.svg" customClass="header-main" />
      <div className="home-page-button">
        <Link href="/qna">
          <Button btnLabel="Click to see assignment" />
        </Link>
      </div>
    </>
  );
}
