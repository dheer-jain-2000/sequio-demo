import React, { useState } from 'react';
import './SurveyForm.css'; // Import your CSS stylesheet

const surveyData = [
    {
        "QuestionId": 0,
        "Comp_body": "StoicismDILRDILRDILR was founded in 300 BC by the Greek philosopher Zeno and survived into the Roman era until about AD 300. According to the Stoics, emotions consist of two movements. The first movement is the immediate feeling and other reactions (e.g., physiological response) that occur when a stimulus or event occurs. For instance, consider what could have happened if an army general accused Marcus Aurelius of treason in front of other officers. The first movement for Marcus may have been (internal) surprise and anger in response to this insult, accompanied perhaps by some involuntary physiological and expressive responses such as face flushing and a movement of the eyebrows. The second movement is what one does next about the emotion. Second movement behaviors occur after thinking and are under one\u2019s control. Examples of second movements for Marcus might have included a plot to seek revenge, actions signifying deference and appeasement, or perhaps proceeding as he would have proceeded whether or not this event occurred: continuing to lead the Romans in a way that Marcus Aurelius believed best benefited them. In the Stoic view, choosing a reasoned, unemotional response as the second movement is the only appropriate response.\n\nThe Stoics believed that to live the good life and be a good person, we need to free ourselves of nearly all desires such as too much desire for money, power, or sexual gratification. Prior to second movements, we can consider what is important in life. Money, power, and excessive sexual gratification are not important. Character, rationality, and kindness are important. The Epicureans, first associated with the Greek philosopher Epicurus . . . held a similar view, believing that people should enjoy simple pleasures, such as good conversation, friendship, food, and wine, but not be indulgent in these pursuits and not follow passion for those things that hold no real value like power and money. As Oatley (2004) states, \u201cthe Epicureans articulated a view\u2013enjoyment of relationship with friends, of things that are real rather than illusory, simple rather than artificially inflated, possible rather than vanishingly unlikely\u2013that is certainly relevant today\u201d . . . In sum, these ancient Greek and Roman philosophers saw emotions, especially strong ones, as potentially dangerous. They viewed emotions as experiences that needed to be [reined] in and controlled.\n\nAs Oatley (2004) points out, the Stoic idea bears some similarity to Buddhism. Buddha, living in India in the 6th century BC, argued for cultivating a certain attitude that decreases the probability of (in Stoic terms) destructive second movements. Through meditation and the right attitude, one allows emotions to happen to oneself (it is impossible to prevent this), but one is advised to observe the emotions without necessarily acting on them; one achieves some distance and decides what has value and what does not have value. Additionally, the Stoic idea of developing virtue in oneself, of becoming a good person, which the Stoics believed we could do because we have a touch of the divine, laid the foundation for the three monotheistic religions: Judaism, Christianity, and Islam . . . As with Stoicism, tenets of these religions include controlling our emotions lest we engage in sinful behavior.",
        "Question": "On the basis of the passage, which one of the following statements can be regarded as true?",
        "Opt_1": "There were no Stoics in India at the time of the Roman civilisation",
        "Opt_2": "The Epicureans believed in controlling all emotions.",
        "Opt_3": "\nThe Stoic influences can be seen in multiple religions",
        "Opt_4": "The Stoics valorised the pursuit of money, power, and sexual gratification",
        "Correct_answer": "\nThe Stoic influences can be seen in multiple religions",
        "Difficulty": "Hard",
        "q_tag": "Probability"
      },
      {
        "QuestionId": 1,
        "Comp_body": "Stoicism was founded in 300 BC by the Greek philosopher Zeno and survived into the Roman era until about AD 300. According to the Stoics, emotions consist of two movements. The first movement is the immediate feeling and other reactions (e.g., physiological response) that occur when a stimulus or event occurs. For instance, consider what could have happened if an army general accused Marcus Aurelius of treason in front of other officers. The first movement for Marcus may have been (internal) surprise and anger in response to this insult, accompanied perhaps by some involuntary physiological and expressive responses such as face flushing and a movement of the eyebrows. The second movement is what one does next about the emotion. Second movement behaviors occur after thinking and are under one\u2019s control. Examples of second movements for Marcus might have included a plot to seek revenge, actions signifying deference and appeasement, or perhaps proceeding as he would have proceeded whether or not this event occurred: continuing to lead the Romans in a way that Marcus Aurelius believed best benefited them. In the Stoic view, choosing a reasoned, unemotional response as the second movement is the only appropriate response.\n\nThe Stoics believed that to live the good life and be a good person, we need to free ourselves of nearly all desires such as too much desire for money, power, or sexual gratification. Prior to second movements, we can consider what is important in life. Money, power, and excessive sexual gratification are not important. Character, rationality, and kindness are important. The Epicureans, first associated with the Greek philosopher Epicurus . . . held a similar view, believing that people should enjoy simple pleasures, such as good conversation, friendship, food, and wine, but not be indulgent in these pursuits and not follow passion for those things that hold no real value like power and money. As Oatley (2004) states, \u201cthe Epicureans articulated a view\u2013enjoyment of relationship with friends, of things that are real rather than illusory, simple rather than artificially inflated, possible rather than vanishingly unlikely\u2013that is certainly relevant today\u201d . . . In sum, these ancient Greek and Roman philosophers saw emotions, especially strong ones, as potentially dangerous. They viewed emotions as experiences that needed to be [reined] in and controlled.\n\nAs Oatley (2004) points out, the Stoic idea bears some similarity to Buddhism. Buddha, living in India in the 6th century BC, argued for cultivating a certain attitude that decreases the probability of (in Stoic terms) destructive second movements. Through meditation and the right attitude, one allows emotions to happen to oneself (it is impossible to prevent this), but one is advised to observe the emotions without necessarily acting on them; one achieves some distance and decides what has value and what does not have value. Additionally, the Stoic idea of developing virtue in oneself, of becoming a good person, which the Stoics believed we could do because we have a touch of the divine, laid the foundation for the three monotheistic religions: Judaism, Christianity, and Islam . . . As with Stoicism, tenets of these religions include controlling our emotions lest we engage in sinful behavior.",
        "Question": "Which one of the following statements would be an accurate inference from the example of Marcus Aurelius",
        "Opt_1": "Marcus Aurelius was humiliated by the accusation of treason in front of the other officers",
        "Opt_2": "Marcus Aurelius was a Stoic whose philosophy survived into the Roman era",
        "Opt_3": "Marcus Aurelius was one of the leaders of the Roman army",
        "Opt_4": "Marcus Aurelius plotted revenge in his quest for justice",
        "Correct_answer": "Marcus Aurelius was one of the leaders of the Roman army",
        "Difficulty": "Medium",
        "q_tag": "Statistics"
      },
      {
        "QuestionId": 2,
        "Comp_body": "Stoicism was founded in 300 BC by the Greek philosopher Zeno and survived into the Roman era until about AD 300. According to the Stoics, emotions consist of two movements. The first movement is the immediate feeling and other reactions (e.g., physiological response) that occur when a stimulus or event occurs. For instance, consider what could have happened if an army general accused Marcus Aurelius of treason in front of other officers. The first movement for Marcus may have been (internal) surprise and anger in response to this insult, accompanied perhaps by some involuntary physiological and expressive responses such as face flushing and a movement of the eyebrows. The second movement is what one does next about the emotion. Second movement behaviors occur after thinking and are under one\u2019s control. Examples of second movements for Marcus might have included a plot to seek revenge, actions signifying deference and appeasement, or perhaps proceeding as he would have proceeded whether or not this event occurred: continuing to lead the Romans in a way that Marcus Aurelius believed best benefited them. In the Stoic view, choosing a reasoned, unemotional response as the second movement is the only appropriate response.\n\nThe Stoics believed that to live the good life and be a good person, we need to free ourselves of nearly all desires such as too much desire for money, power, or sexual gratification. Prior to second movements, we can consider what is important in life. Money, power, and excessive sexual gratification are not important. Character, rationality, and kindness are important. The Epicureans, first associated with the Greek philosopher Epicurus . . . held a similar view, believing that people should enjoy simple pleasures, such as good conversation, friendship, food, and wine, but not be indulgent in these pursuits and not follow passion for those things that hold no real value like power and money. As Oatley (2004) states, \u201cthe Epicureans articulated a view\u2013enjoyment of relationship with friends, of things that are real rather than illusory, simple rather than artificially inflated, possible rather than vanishingly unlikely\u2013that is certainly relevant today\u201d . . . In sum, these ancient Greek and Roman philosophers saw emotions, especially strong ones, as potentially dangerous. They viewed emotions as experiences that needed to be [reined] in and controlled.\n\nAs Oatley (2004) points out, the Stoic idea bears some similarity to Buddhism. Buddha, living in India in the 6th century BC, argued for cultivating a certain attitude that decreases the probability of (in Stoic terms) destructive second movements. Through meditation and the right attitude, one allows emotions to happen to oneself (it is impossible to prevent this), but one is advised to observe the emotions without necessarily acting on them; one achieves some distance and decides what has value and what does not have value. Additionally, the Stoic idea of developing virtue in oneself, of becoming a good person, which the Stoics believed we could do because we have a touch of the divine, laid the foundation for the three monotheistic religions: Judaism, Christianity, and Islam . . . As with Stoicism, tenets of these religions include controlling our emotions lest we engage in sinful behavior.",
        "Question": "\u201cThrough meditation and the right attitude, one allows emotions to happen to oneself (it is impossible to prevent this), but one is advised to observe the emotions without necessarily acting on them; one achieves some distance and decides what has value and what does not have value.\u201d In the context of the passage, which one of the following is not a possible implication of the quoted statement?",
        "Opt_1": "Emotional responses can make it difficult to distinguish valuable experiences from valueless experiences.",
        "Opt_2": "Meditation allows certain out-of-body experiences that permit us to gain the distance necessary to control our emotions.",
        "Opt_3": "The observation of emotions in a distant manner corresponds to the second movement referred to earlier in the passage",
        "Opt_4": "\u201cMeditation and the right attitude\u201d, in this instance, implies an initially passive reception of all experiences.",
        "Correct_answer": "Meditation allows certain out-of-body experiences that permit us to gain the distance necessary to control our emotions.",
        "Difficulty": "Easy",
        "q_tag": "Verbal"
      }
];

function SurveyForm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});

  const handleOptionSelect = (questionId, selectedOption) => {
    setResponses({
      ...responses,
      [questionId]: selectedOption
    });
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < surveyData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log('User responses:', responses);
  };

  const currentQuestion = surveyData[currentIndex];

  return (
    <div>
      <h1>Survey Form</h1>
      <div className="survey-question">
        <div className="comp-body">{currentQuestion.Comp_body}</div>
        <div className="question-options">
        <p>{currentQuestion.Question}</p>
        <div>
        <label>
          <input
            type="radio"
            value="Opt_1"
            checked={responses[currentQuestion.QuestionId] === "Opt_1"}
            onChange={() => handleOptionSelect(currentQuestion.QuestionId, "Opt_1")}
          />
          {currentQuestion.Opt_1}
        </label>
        </div>
        <div>
        <label>
          <input
            type="radio"
            value="Opt_2"
            checked={responses[currentQuestion.QuestionId] === "Opt_2"}
            onChange={() => handleOptionSelect(currentQuestion.QuestionId, "Opt_2")}
          />
          {currentQuestion.Opt_2}
        </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="Opt_3"
                    checked={responses[currentQuestion.QuestionId] === "Opt_3"}
                    onChange={() => handleOptionSelect(currentQuestion.QuestionId, "Opt_3")}
                />
                {currentQuestion.Opt_3}
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="Opt_4"
                    checked={responses[currentQuestion.QuestionId] === "Opt_4"}
                    onChange={() => handleOptionSelect(currentQuestion.QuestionId, "Opt_4")}
                />
                {currentQuestion.Opt_4}
            </label>
        </div>
        {/* <label>
          <input
            type="radio"
            value="Opt_3"
            checked={responses[currentQuestion.QuestionId] === "Opt_3"}
            onChange={() => handleOptionSelect(currentQuestion.QuestionId, "Opt_3")}
          />
          {currentQuestion.Opt_3}
        </label>
        <label>
          <input
            type="radio"
            value="Opt_4"
            checked={responses[currentQuestion.QuestionId] === "Opt_4"}
            onChange={() => handleOptionSelect(currentQuestion.QuestionId, "Opt_4")}
          />
          {currentQuestion.Opt_4}
        </label> */}
        </div>
        <div className="difficulty-tag">
            <div className="difficulty-field">{currentQuestion.Difficulty}</div>
            <div className="tag-field">{currentQuestion.q_tag}</div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === surveyData.length - 1}>Next</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default SurveyForm;
