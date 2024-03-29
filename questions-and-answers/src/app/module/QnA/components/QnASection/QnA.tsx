import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Header } from '@/app/components/Header/Header';
import { Footer } from '@/app/components/Footer/Footer';
import { Sidebar } from '@/app/components/Sidebar/Sidebar';
import { AddQuestion } from '../AddQuestion/AddQuestion';
import { ViewQuestion } from '../ViewQuestion/ViewQuestion';
import { addQuestion } from '@/app/store/questionsReducer';
import { getAllQuestions } from '@/app/services/getAllQuestions';
import { Modal } from '@/app/components/Modal/Modal';
import { Button } from '@/app/components/Button/Button';

import './QnA.css';
import { useQuestionContext } from '../../QuestionContext/QuestionContext';

export const QnA: React.FC = () => {
  const dispatch = useDispatch();
  const { isModalOpen, setIsModalOpen } = useQuestionContext();
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const questions = await getAllQuestions();
        dispatch(addQuestion(questions));
      } catch (error) {
        console.error(error);
      }
    };
    fetchInitialData();
  }, []);
  return (
    <div className="qna-container">
      <Header
        customClass="header-main"
        headerText={t('qnaDashboard')}
        imgSrc="/static/assets/logo.png"
        altText="Studocu logo"
        tooltipText={t('qnaDashboard')}
        children={
          <Button
            customClass="mobile-question-icon"
            onClick={toggleModal}
            btnLabel={t('viewAllQuestions')}
          />
        }
      />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <Sidebar style={{ display: 'block' }} />
      </Modal>

      <div className="main-content-container">
        <Sidebar />
        <div className="section-wrapper">
          <ViewQuestion />
          <AddQuestion />
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
      <Footer />
    </div>
  );
};
