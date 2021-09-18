import { useState } from "react";
import "./styles.css";

const bookDB = {
  selfhelp_book: [
    {
      name: "Think & Grow rich",
      author: "Napoleon hill",
      desc:
        "Think and Grow Rich by Napoleon Hill examines the psychological power of thought and the brain in the process of furthering your career for both monetary and personal satisfaction. Originally published in 1937, this is one of the all-time self-help classics and a must read for investors and entrepreneurial types."
    },
    {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      desc:
        "The overarching theme of Rich Dad Poor Dad is how to use money as a tool for wealth development. It destroys the myth that the rich are born rich, explains why your personal residence may not really be an asset, describes the real difference between an asset and a liability, and much more."
    },
    {
      name: "How to win friends and influence people",
      author: "Dale Carnegie",
      desc:
        "How to Win Friends and Influence People is a self-help book written by Dale Carnegie, published in 1936. Over 30 million copies have been sold worldwide, making it one of the best-selling books of all time. ... In 2011, it was number 19 on Time Magazine's list of the 100 most influential books."
    },
    {
      name: "The 7 Habits of Highly Effective People",
      author: "Stephen Covey",
      desc:
        "The 7 Habits of Highly Effective People, first published in 1989, is a business and self-help book written by Stephen R. ... Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls true north principles based on a character ethic that he presents as universal and timeless."
    }
  ],
  business_book: [
    {
      name: "Zero to One",
      author: "Peter Thiel",
      desc:
        "Zero to One is about how to build companies that create new things. It draws on everything I've learned directly as a co-founder of PayPal and Palantir and then an investor in hundreds of startups, including Facebook and SpaceX. ... This book stems from a course about startups that I taught at Stanford in 2012."
    },
    {
      name: "The Lean Startup",
      author: "Eric Ries",
      desc:
        "This book teaches entrepreneurs how to navigate extreme uncertainties by testing scientific hypotheses with a minimal viable product (MVP). Instead of creating elaborate business plans, The Lean Startup offers a framework for startups to test, learn, and adjust their strategy through a cycle of continuous improvement."
    },
    {
      name: "Rework",
      author: "David Heinemeier Hansson and Jason Fried",
      desc:
        "Rework is a unique business book which shows the reader a better, faster, easier way to be successful in business. The book tells the reader why plans are truly harmful, why people don't need outside investors and why a person is better ignoring the competition. ... This book shows the reader the right way."
    },
    {
      name: "Shoe Dog",
      author: "Phil Knight",
      desc:
        "Shoe Dog is the autobiography of Nike's founder Phil Knight, who at last decided to share the story of how he founded one of the most iconic, profitable and world-changing brands in the world. Subscribe to listen to an unlimited number of full articles."
    }
  ],
  fiction_book: [
    {
      name: "Alchemist",
      author: "Paulo Coelho",
      desc:
        "The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. From his home in Spain he journeys to the markets of Tangiers and across the Egyptian desert to a fateful encounter with the alchemist."
    },
    {
      name: "The God of Small Things",
      author: "Arundhati Roy",
      desc:
        "The God of Small Things is a family drama novel written of Indian writer Arundhati Roy. It's Roy's debut novel. It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the Love Laws that lay down who should be loved, and how. And how much."
    },
    {
      name: "A Fine Balance",
      author: "Rohinton Mistry",
      desc:
        "With a compassionate realism and narrative sweep that recall the work of Charles Dickens, this magnificent novel captures all the cruelty and corruption, dignity and heroism, of India. The time is 1975. The place is an unnamed city by the sea."
    },
    {
      name: "Who Moved My Cheese?",
      author: "Spencer Johnson",
      desc:
        "Who Moved my Cheese? is a simple story that reveals simple profound truths about change. It's a fun story of 4 characters who live in a maze (world) and look for cheese (job, money, love et all) to keep themselves happy."
    }
  ]
};

export default function App() {
  const [bookCategory, setBookCategory] = useState("selfhelp_book");

  function bookClickHandler(book) {
    setBookCategory(book);
  }

  return (
    <div className="App">
      <h1>
        <span>📚</span> Book Recommendation App
      </h1>
      <p>See here the best book by category wise</p>
      {Object.keys(bookDB).map((bookCat) => (
        <button
          onClick={() => bookClickHandler(bookCat)}
          style={{
            margin: "0.5rem 0.5rem",
            padding: "0.7rem 1.2rem",
            borderRadius: "0.5rem",
            border: "1px solid yellow",
            background: "inherit",
            color: "yellow",
            cursor: "pointer",
            fontSize: "large"
          }}
        >
          {bookCat}
        </button>
      ))}
      <hr />
      <ul style={{ padding: "0px" }}>
        {bookDB[bookCategory].map((item) => (
          <li
            key={item}
            style={{
              listStyleType: "none",
              margin: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid yellow",
              padding: "0rem 1rem",
              textAlign: "left",
              lineSpacing: "0.7"
            }}
          >
            <h3>{item.name}</h3>
            <h4>{item.author}</h4>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
