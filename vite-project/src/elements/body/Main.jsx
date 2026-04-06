import { Routes, Route } from "react-router-dom";

import Section from "./Section";
import Aside from "./Aside";

function Main() {
  return (
    <main className="main">
      <Section />

      <article className="article">

        <Routes>

          <Route
            path="/"
            element={
              <div>
                <h1>Новости</h1>
                <p>Последние новости проекта</p>
              </div>
            }
          />

          <Route
            path="/about"
            element={
              <div>
                <h1>Южный федеральный университет</h1>
              </div>
            }
          />

          <Route
            path="/contacts"
            element={
              <div>
                <h1>Контакты</h1>
                <p>+7 999 999 99 99</p>
              </div>
            }
          />

          <Route
            path="*"
            element={
              <div>
                <h1>404</h1>
                <p>Страница не найдена</p>
              </div>
            }
          />

        </Routes>

      </article>

      <Aside />
    </main>
  );
}

export default Main;