import React from 'react';
import QuestionFormContainer from './question_form_container';

class Questions extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.answeredQuestions = this.answeredQuestions.bind(this);
    this.answeredQuestionsRender = this.answeredQuestionsRender.bind(this);
    this.responseIdArray = this.responseIdArray.bind(this);
    this.responseAcceptableArray = this.responseAcceptableArray.bind(this);
    this.questionFormRender = this.questionFormRender.bind(this);
    this.questionsFormHeader = this.questionsFormHeader.bind(this);
  }
}
