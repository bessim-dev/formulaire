import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("we received your review!");
    setName("");
    setEmail("");
    setDescription("");
  };
  const handleAnnuler = (e) => {
    setName("");
    setEmail("");
    setDescription("");
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="font-bold mb-5 text-xl text-blue-500 border-b-2">
        Technify-it evaluation
      </h1>
      <main className="flex items-center justify-center flex-col w-full">
        <form
          className="max-w-md border-2 border-blue-400 px-3 py-2"
          onSubmit={handleSubmit}
        >
          <label className="text-blue-700 text-lg font-medium">
            Enter your name:
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full border border-gray-400 px-3 py-2 my-2 rounded-lg shadow-lg focus:ring-1 focus:ring-blue-800 focus:outline-none focus:border-blue-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="text-blue-700 text-lg font-medium">
            Enter your email:
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full border border-gray-400 px-3 py-2 my-2 rounded-lg shadow-lg focus:ring-1 focus:ring-blue-800 focus:outline-none focus:border-blue-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-blue-700 text-lg font-medium">
            Give us your thoughts on this work:
            <textarea
              required
              autoComplete="description"
              className="w-full border border-gray-400 px-3 py-2 my-2 rounded-lg shadow-lg focus:ring-1 focus:ring-blue-800 focus:outline-none focus:border-blue-900"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="flex justify-evenly">
            <button
              type="button"
              onClick={handleAnnuler}
              className="bg-red-500 px-5 py-2 rounded-md w-48 text-white focus:outline-none hover:bg-red-400"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-500 px-5 py-2 rounded-md w-48 text-white focus:outline-none hover:bg-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
