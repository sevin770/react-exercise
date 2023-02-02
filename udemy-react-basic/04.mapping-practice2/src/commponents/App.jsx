import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

//1. entry 컴포넌트를 만든다.
//2. 데이터를 대체할 props를 만든다.
//3. a. 이모지 변수를 가져온다.
//   b. 이모지 배열을 통해 맵핑하고 컴포넌트를 렌더링 한다.

// {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// },

function createEntry(emojiterm) {
  return (
    <Entry
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      description={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
