import React from 'react';
import QuestionFormContainer from './question_form_container';

class Questions extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.answeredQuestions = this.answeredQuestions.bind(this);
    this.answeredQuestionRender = this.answeredQuestionRender.bind(this);
    this.responseIdArray = this.responseIdArray.bind(this);
    this.responseAcceptableArray = this.responseAcceptableArray.bind(this);
    this.questionFormRender = this.questionFormRender.bind(this);
    this.questionFormHeader = this.questionFormHeader.bind(this);
  }

  answeredQuestions() {
    if (this.props.responses) {
      return (
        Object.keys(this.props.responses).map((response) => {
          return this.props.responses[response].question_id;
        })
      );
    } else {
      return [];
    }
  }

  responseIdArray() {
    return(
      Object.keys(this.props.responses).map((response) => {
        return this.props.responses[response].choice_id;
      })
    );
  }

  responseAcceptableArray(question_id) {
    let acceptables = null;
    Object.keys(this.props.responses).forEach((response) => {
      if (this.props.responses[response].question_id === question_id) {
        acceptables = this.props.responses[response].acceptable_choices
      }
    });
    return acceptables;
  }

  answeredQuestionRender() {

    const answeredQuestions = this.answeredQuestions().map((question) => {
      const questionAnswers = this.props.questions[question].choices;
      let explanations = [];
      let answerDisplay = [];
      let acceptableDisplay = [];
      questionAnswers.forEach((choice) => {
        if (this.responseIdArray().includes(choice.id)) {
          answerDisplay.push(<p key={choice.id} className="question-answer-match-response">{choice.body + " ✓"}</p>);
        }
        const that = this;
          if (this.responseAcceptableArray(question).includes(choice.body)) {
          acceptableDisplay.push(<p key={choice.id} className="question-answer-match-response">{choice.body}</p>);
        }
        console.log(this.props.responses[question].explanation, "explan");
          explanations.push(this.props.responses[question].explanation);
      });

      return (

        <div className="answered-question" key={question}>
          <div className="question-content">
            <div className="question-content-title">
              <p className="actual-title">{this.props.questions[question].title}</p>
            </div>
            <div className="question-content-answer">
              Answer: {answerDisplay}
            </div>
            <div className="question-content-acceptables">
              Acceptable Choices: {acceptableDisplay}
            </div>
            <div className="question-content-explanation">
              Explanation: {explanations}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="answered-questions-content">
        {answeredQuestions}
      </div>
    );
  }

  questionFormHeader() {
    if (this.props.profile.id == this.props.currentUser.id) {
      return <h2 className="questions-header">Match Questions</h2>;
    } else {
      return <div></div>;
    }
  }

  questionFormRender() {
    if (this.props.profile.id === this.props.currentUser.id) {

      return( <QuestionFormContainer questions={this.props.questions} />);
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.questions) {
      return (
        <div className="content-questions-group">
          <div className="main-questions">
            {this.questionFormHeader()}
            {this.questionFormRender()}
            <h2 className="show-questions-header">Responses</h2>
            <div className="answered-questions">
              {this.answeredQuestionRender()}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
    }
  }





export default Questions;
