'use client';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Header } from '../Header/Header';
import Accordion from '../Accordion/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/questionStore';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import { sortQuestions } from '@/app/store/questionsReducer';
import { Button } from '../Button/Button';

interface Props {
  style?: React.CSSProperties;
}
export const Sidebar: React.FC<Props> = ({ style }) => {
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(sortQuestions());
  };

  const HeaderActions: React.FC = () => {
    return (
      <>
        <div className="header-action-container">
          <Button onClick={handleSort} btnLabel="Sort" customClass="sort-btn" />
          <DeleteIcon />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="sidebar-container" style={style}>
        <Header
          headerText="All Questions"
          children={<HeaderActions />}
          tooltipText="See all questions"
        />
        {questions.map(question => (
          <Accordion question={question} key={question.id} />
        ))}
      </div>
    </>
  );
};
