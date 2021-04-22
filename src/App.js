import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor.js";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import QuizzesList from "./components/quiz-question/quizzes";
import Quiz from "./components/quiz-question/quiz";
import QuizAttempts from "./components/quiz-question/quiz-attempts";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/course" component={CourseManager}/>
          {/*<Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}
            <Route path={[
                "/courses/:layout/edit/:courseId",
                "/courses/:layout/edit/:courseId/modules/:moduleId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
            ]}
                   exact={true}
                   render={(props) => <CourseEditor {...props}/>}/>
          <Route path="/courses/:courseId/quizzes" exact={true} component={QuizzesList}/>
          <Route path="/courses/:courseId/quizzes/:quizId" exact={true} component={Quiz}/>
          <Route path='/courses/:courseId/quizzes/:quizId/attempts' exact={true}><QuizAttempts/></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
