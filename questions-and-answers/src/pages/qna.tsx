import React from 'react';
import { QuestionProvider } from '@/app/module/QnA/QuestionContext/QuestionContext';
import { QnA } from '@/app/module/QnA/components/QnASection/QnA';
import { questionStore } from '@/app/store/questionStore';
import { Provider } from 'react-redux';
import '../../i18';

export default function QnAPage() {
  //  handling global state in redux store
  //  handling props passing between components via context

  return (
    <Provider store={questionStore}>
      <QuestionProvider>
        <QnA />
      </QuestionProvider>
    </Provider>
  );
}
